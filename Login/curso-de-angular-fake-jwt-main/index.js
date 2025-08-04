const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Health check
app.get("", (req, res) => {
  res.json("API is running");
});

// Post to verify JWT token
app.post("/sign", (req, res) => {
  const email = "guijkuhnen@hotmail.com";
  const password = "123";

  if (req.body.email === email && req.body.password === password) {
    const data = {
      nome: "Guilherme Kuhnen",
      email,
      role: ["sysAdmin"],
    };

    const token = jwt.sign({ data }, "SECRET", {
      expiresIn: 100000,
    });

    return res.json({ token: token });
  }

  res.status(500).json({ message: "Usuário ou senha incorreta" });
});

app.listen(port, () => {
  console.log(`Link => http://localhost:${port}`);
});
