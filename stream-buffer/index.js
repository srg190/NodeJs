const buffer = new Buffer.from("Sudhi");
console.log(buffer.toJSON());
console.log(buffer); // <Buffer 53 75 64 68 69> // code for each char in hexadecimal form
// convert it into binary
// let us take example
// S -> 53 -> 01010110 -> utf-8 { by default }

buffer.write("Codevolution");
console.log(buffer.toString()); // Codev ( can't store more than initialised length)
console.log(buffer); // <Buffer 43 6f 64 65 76>
console.log(buffer.toJSON()); // { type: 'Buffer', data: [ 67, 111, 100, 101, 118 ] }


