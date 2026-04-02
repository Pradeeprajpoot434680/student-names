const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/students", (req, res) => {
  const dir = path.join(__dirname, "students");

  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).send("Error reading files");

    const students = files.map(file => {
      const data = fs.readFileSync(path.join(dir, file));
      return JSON.parse(data);
    });

    res.json(students);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});