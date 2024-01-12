import { spawn } from "child_process";

const prog = {
  list: "ls",
  copy: "cp",
  folder: "mkdir",
};

const child = spawn(prog.list, ["-l"], { cwd: ".." });

child.stdout.on("data", (data) => {
  console.log("data => ", data + "");
});

const copy = spawn(prog.copy, ["spawn.js", "spawn1.js"]);
copy.on("exit", () => {
  console.log("copy process finished");
});
