const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// req.body의 기본값은 undefined이기 떄문에 암호화된 폼 정보를 분석해 줄 필요가 있음
// request body를 URL 암호화 데이터로 분석할 미들웨어를 사용

const comments = [
  { username: "Todd", comment: "lol" },
  { username: "Sam", comment: "I liek to go hiking" },
  { username: "Jhon", comment: "ABCDEFG" },
  { username: "Sujeong", comment: "HIJKLMNOP" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/tacos", (req, res) => {
  res.send("Get /tacos response");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("listen");
});