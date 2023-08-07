const express = require("express");
const router = require("./routers");
const app = express();
app.use(express.json());
app.use(router);
app.use(express.static("public"));

module.exports = app;
