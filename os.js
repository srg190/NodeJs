import os from "node:os";

//get cpu architecture
console.log(os.arch(), process.arch);
process.arch;

//
// console.log(os.constants)

// get cpus
// console.log(os.cpus())
console.log(os.machine());
console.log(os.networkInterfaces());
