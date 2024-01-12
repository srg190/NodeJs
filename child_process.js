import { spawn } from "node:child_process";
import ps from "ps-node";

// const ls = spawn("ls", ["-lh", "/usr"]);

// ls.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on("close", (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// let doing some stuff
// Enlisting all process which is currently running

// A callback function to handle the process enumeration
// const processCallback = (err, processes) => {
//   if (err) {
//     throw new Error(err);
//   }

//   // Log information about each process
//   processes.forEach((process) => {
//     console.log(`PID: ${process.pid}, COMMAND: ${process.command}`);
//     // You can perform actions or spawn new processes here
//   });
// };

// // Enumerate all processes
// ps.lookup({}, processCallback);

// // to kill the process
// // Assuming you have the PID of the process you want to kill
// const pidToKill = 11516;

// // Kill the process
// ps.kill(pidToKill, (err) => {
//   if (err) {
//     console.error(`Error killing process with PID ${pidToKill}: ${err}`);
//   } else {
//     console.log(`Successfully killed process with PID ${pidToKill}`);
//   }
// });

// created a process and then killed 

const serverCommand = 'node';
const serverArgs = ['-e', 'require("http").createServer((req, res) => res.end("Hello, World!")).listen(3000);'];

// Spawn the server process
const serverProcess = spawn(serverCommand, serverArgs);

// Event listener for data from the spawned process
serverProcess.stdout.on('data', (data) => {
  console.log(`Server Output: ${data}`);
});

// Event listener for errors from the spawned process
serverProcess.stderr.on('data', (data) => {
  console.error(`Server Error: ${data}`);
});

// Event listener for the spawned process exit
serverProcess.on('exit', (code, signal) => {
  console.log(`Server Process exited with code ${code} and signal ${signal}`);
});