import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const repo=process.env.KCOS_REPO||process.env.GITHUB_REPOSITORY;
const ssotRepo=process.env.KCOS_SSOT_REPO||'ahlis0201-ui/kcos-governance-engine';
const ssotPath=process.env.KCOS_SSOT_PATH||'docs/governance/document-lifecycle/KCOS-DOCUMENT-LIFECYCLE-GOVERNANCE-SSOT-V1.0.md';
const ssotSha=process.env.KCOS_SSOT_SHA||'3d8db073b2f05aeca681cca4fbf00f27fb8597fd';
const receiptPath=process.env.KCOS_RECEIPT_PATH||'docs/governance/read-gate/READ-RECEIPT.md';
function fail(msg){console.error('KCOS-READ-GATE-001 FAIL: '+msg);process.exit(1)}
function git(...args){return execFileSync('git',args,{encoding:'utf8'}).trim()}
if(!repo)fail('GITHUB_REPOSITORY is unavailable');
if(!fs.existsSync(receiptPath))fail('missing receipt: '+receiptPath);
const receipt=fs.readFileSync(receiptPath,'utf8');
const required=[['Gate ID','KCOS-READ-GATE-001'],['SSOT ID','KCOS-DOCUMENT-LIFECYCLE-001'],['SSOT Version','V1.0'],['SSOT Source Path',ssotPath],['SSOT Commit / Blob SHA',ssotSha],['Read Scope','COMPLETE'],['Read Acknowledgement','COMPLETE SSOT READ CONFIRMED'],['Gate Result','PASS']];
for(const [k,v] of required)if(!receipt.includes(k+': '+v))fail('receipt field mismatch: '+k);
if(!/^Executor:\s+\S.+$/m.test(receipt))fail('receipt Executor is empty');
if(!/^Evidence:\s+Git commit containing this receipt$/m.test(receipt))fail('receipt Evidence field missing');
const rawUrl='https://raw.githubusercontent.com/'+ssotRepo+'/'+ssotSha+'/'+ssotPath;
const response=await fetch(rawUrl);if(!response.ok)fail('cannot retrieve frozen SSOT ('+response.status+')');
const ssot=Buffer.from(await response.arrayBuffer());fs.writeFileSync('/tmp/kcos-ssot.md',ssot);
const actualBlobSha=git('hash-object','/tmp/kcos-ssot.md');if(actualBlobSha!==ssotSha)fail('SSOT blob SHA mismatch: expected '+ssotSha+', got '+actualBlobSha);
const receiptCommit=git('log','-1','--format=%H','--',receiptPath);if(!receiptCommit)fail('receipt has no Git history');
const head=git('rev-parse','HEAD');try{execFileSync('git',['merge-base','--is-ancestor',receiptCommit,head])}catch{fail('receipt commit is not an ancestor of HEAD')}
const receiptTime=Number(git('show','-s','--format=%ct',receiptCommit));const headTime=Number(git('show','-s','--format=%ct',head));
if(receiptCommit===head)fail('receipt and construction are in the same commit; gate must precede construction');
if(receiptTime>=headTime)fail('receipt evidence does not precede current construction head');
console.log('KCOS-READ-GATE-001 PASS');console.log('repo='+repo);console.log('ssot='+ssotRepo+'@'+ssotSha);console.log('receipt_commit='+receiptCommit);console.log('head='+head);