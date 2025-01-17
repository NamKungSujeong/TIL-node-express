const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
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

// create
app.get("/comments/new", (req, res) => {
  // 입력받을 폼을 보여줄 라우트
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuidv4() });
  res.redirect("/comments");
});

// read

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// update

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  // id에 해당하는 댓글 찾기
  const foundComment = comments.find((c) => c.id === id);
  // 새로운 댓글 받아오기
  const newComment = req.body.comment;
  // 해당 댓글에 새로운 댓글 할당
  foundComment.comment = newComment;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const foundComment = comments.find((c) => c.id === id);
  res.render("comments/edit", { foundComment });
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
