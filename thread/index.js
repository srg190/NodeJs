import crypto from "crypto";

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 4;

for (let i = 0; i < 5; i++) {
  crypto.pbkdf2("password", "salt", 1000000, 512, "sha512", () => {
    console.log("Hash: ", i + 1, Date.now() - start);
  });
}
console.log("hello");
