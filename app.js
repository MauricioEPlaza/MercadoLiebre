const express = require("express");
const app = express();
const PORT = 3001;

app.use("/static", express.static(__dirname + "/public"));

app.get("/home", (req,res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/register', (req,res) => {
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(PORT, () => {
    console.log("Servidor Iniciado", PORT)
});

