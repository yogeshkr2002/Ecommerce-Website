const crypto = require("crypto");

const key = crypto.randomBytes(32).toString("hex"); // 32 bytes = 64 hex characters
console.log(key);
