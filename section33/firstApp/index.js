const express = require("express");

const app = express();

// express에서 콘텐츠로 응답하기 위해서는 두 가지 중요한 객체를 알고 있어야 함
// 1. 들어오는 요청을 의미하는 객체 req
// 2. 응답을 의미하는 객체 res
// HTTP 요청은 JS 객체가 아닌 덱스트 정보임
// express는 그걸 파싱해서 전달할 객체로 만들고 콜백의 첫번째 인수로 전달해줌

// 요청이 어디서 들어온든 상관없이 콜백 함수 실행
app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST!!");
  res.send("HELLO");
  // res.send : HTTP 응답을 보내고 생성
});

app.listen(3000, () => {
  // 포트 열기
  console.log("LISTENING ON PORT 3000!!");
});
