const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Hello from API" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// เพิ่มตัวแปรที่ไม่เคยใช้
const unusedVar = 42;

// ฟังก์ชันที่ไม่ดี (Code Smell)
function add(a, b) {
    return a + b;
    console.log("This line is unreachable"); // Unreachable code
}

const unusedVar1 = 10;
const unusedVar2 = 20;

function sum(a, b) {
  return a + b;
  console.log("Unreachable"); // will never execute
}
