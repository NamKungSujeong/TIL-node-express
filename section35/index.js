const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// req.body의 기본값은 undefined이기 떄문에 암호화된 폼 정보를 분석해 줄 필요가 있음
// request body를 URL 암호화 데이터로 분석할 미들웨어를 사용

const comments = [
  { id: uuidv4(), username: "Todd", comment: "lol" },
  { id: uuidv4(), username: "Sam", comment: "I liek to go hiking" },
  { id: uuidv4(), username: "Jhon", comment: "ABCDEFG" },
  { id: uuidv4(), username: "Sujeong", comment: "HIJKLMNOP" },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  // 입력받을 폼을 보여줄 라우트
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// app.get("/tacos", (req, res) => {
//   res.send("Get /tacos response");
// });

// app.post("/tacos", (req, res) => {
//   const { meat, qty } = req.body;
//   res.send(`here are your ${qty} ${meat} tacos`);
// });

app.listen(3000, () => {
  console.log("listen");
});
