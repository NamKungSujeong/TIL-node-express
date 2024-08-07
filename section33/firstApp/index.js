const express = require("express");

const app = express();

// express에서 콘텐츠로 응답하기 위해서는 두 가지 중요한 객체를 알고 있어야 함
// 1. 들어오는 요청을 의미하는 객체 req
// 2. 응답을 의미하는 객체 res
// HTTP 요청은 JS 객체가 아닌 덱스트 정보임
// express는 그걸 파싱해서 전달할 객체로 만들고 콜백의 첫번째 인수로 전달해줌

// 요청이 어디서 들어온든 상관없이 콜백 함수 실행

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!");
//   res.send("HELLO");
//   // res.send : HTTP 응답을 보내고 생성
// });

app.get("/", (req, res) => {
  res.send("This is the home page");
});

app.get("/r/:subrredit", (req, res) => {
  // subreddit이 무엇이어야 하는지 정해 둔 게 아니기 때문에 유효한 건지 혹은 영어인지 확인하는 작업이 없음
  // 말 그대로 그냥 일치시키는 패턴
  // console.log(req.params); =>  뒤에 들어오는 값이 찍힘
  const { subrredit } = req.params;
  res.send(`subrredit : ${subrredit}`);
});

app.get("/r/:subrredit/:postId", (req, res) => {
  const { subrredit, postId } = req.params;
  res.send(`subrredit : ${subrredit} in ID : ${postId}`);
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.post("/cats", (req, res) => {
  res.send("/cats Post Request");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

app.get("*", (req, res) => {
  // 존재하지 않는 라우트를 요청할 때
  // 맨 위에 있을 경우 그 아래 코드는 모두 무시하기 때문에 마지막에 작성하는 것이 중요
  res.send("I don't know that path");
});

app.listen(3000, () => {
  // 포트 열기
  console.log("LISTENING ON PORT 3000!!");
});
