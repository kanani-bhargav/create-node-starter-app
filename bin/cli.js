#!/usr/bin/env node
const {execSync} =require('child_process');
const fs= require('fs')
const path= require('path')

const runCommand=command=>{
try {
    execSync(`${command}`,{stdio:'inherit'});
} catch (error) {
    console.log(`Faild to execute ${command}`,error);
    return false
}
return true
}
const repoName=process.argv[2]
if(!repoName)process.exit(-1);
console.log(`Please specify the project directory`);
const gitCheckoutCommand=`git clone --depth 1 https://github.com/kanani-bhargav/create-node-starter-app ${repoName}`
const installDepsCommand=` cd ${repoName} && npm install`;

console.log(`cloning the repository with name ${repoName}`);
const checkedOut=runCommand(gitCheckoutCommand)
if(!checkedOut)process.exit(-1);

console.log(`installing dependencies for ${repoName}`);
const installedDeps =runCommand(installDepsCommand)
if(!installedDeps)process.exit(-1);

console.log(`Congretulation ! you are ready. follow the following command to start`);
console.log(`cd ${repoName} && npm start`);
console.log(`1. cd ${repoName}`);
console.log(`2. open .env and fill all record`);
console.log(`3. npm start`);




