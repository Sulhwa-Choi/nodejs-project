
const express = require("express");
const app = express();

const port = 3000;

// 라우팅
const home = require("./routes/home");

// 앱세팅
app.set("views", "./views");
app.set("view engine","ejs");

app.use("/",home); // use : 미들웨어를 등록해주는 메서드

module.exports = app;