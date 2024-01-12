import fs, { read } from "fs";
import zlib from "zlib";

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 10, // 10 byte at a time
});

const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });

// we can do it directly
readableStream.pipe(writableStream);

// here is catch pipe can work as a chaining
// zlib where it will transform from string to zip
const gzip = new zlib.createGzip();
readableStream.pipe(gzip).pipe(fs.WriteStream('./file2.txt.gz'));
