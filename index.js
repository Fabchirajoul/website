import express from "express";


const app = express();

// Declaring the static middleware

app.use(express.static("public"));

// Makes req.body works (This is known as the middleware)
app.use(express.json());

// Adding our port listener which is by defualt
let PORT = process.env.PORT || 3030;

app.listen(PORT, function () {
  console.log("Capstone Project API with SQL starting on port", PORT);
});