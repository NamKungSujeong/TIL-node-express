const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
// dotenv : .env파일을 읽어서 process.env로 만들어줌
const path = require("path");

dotenv.config();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
// morgan : 기존 로그 외에 추가적인 로그를 볼 수 있게 해줌

app.use("/", express.static(path.join(__dirname, "public")));
// 정적인 파일들을 제공하는 라우터 역할

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 요청에 있는 데이터를 req.body 객체로 만들어주는 미들웨어
// 보통 폼 데이터나 AJAX 요청의 데이터를 처리하고 멀티파트(이미지, 동영상, 파일) 데이터는 처리하지 못함

app.use(cookieParser(process.env.COOKE_SECRET));
// "cookie-parser : 요청에 있는 쿠키를 해석해서 req.cookies 객체로 만들어줌

app.use(
  session({
    resave: false,
    // resave : 요청이 올 때 새션에 수정 사항이 없어도 다시 저장할 것인지
    saveUninitialized: false,
    // saveUninitialized : 세션이 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
    secret: process.env.COOKE_SECRET,
    // secret : 세션 관리시 클라이언트에 쿠키를 보내는데 안전하게 전송하기 위헤서는 쿠키에 서명을 추가해야 하고 이때 쿠키를 서명하는데 secret값이 필요
    cookie: {
      httpOnly: true,
      // httpOnly: true => 클라이언트에서 쿠키를 확인하지 못하게
      secure: false,
      // secure: false => https가 아닌 환경에서도 사용할 수 있게
    },
    // cookie : 세션 쿠키에 대한 설정
    name: "session-cookie",
  })
);
// express-session : 세션 관리용
// 로그인 등의 이유로 세션을 구현하거나 툭정 사용자를 위한 테이터를 임시적으로 저장해둘 때 매우 유용

// app.use((req, res, next) => {
//   console.log("모든 요청에 살행");
//   next();
// });

app.use("/", indexRouter);
app.use("/user", userRouter);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(app.get("port"), (req, res) => {
  console.log(app.get("port"), "빈 포트에서 대기 중");
});
