import express from 'express';
// const express = require("express");

const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {

  res.status(401).json({
    ok: false,
    msg: 'No hay token en la peticion'
  })

});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
