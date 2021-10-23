import passport from "passport";
import passportLocal from "passport-local";
import users from "../models/user.js";

// local login 정책을 수행하는 모듈
const LocalStratege = passportLocal.Strategy;

const exportPassport = () => {
  //  로그인이 성공했을 때 (내부에서) 호출되는 함수
  // console.log("뭐가문제야");

  passport.serializeUser((user, done) => {
    console.log("로그인 성공");
    done(null, user);
  });

  // 로그인이 정상적으로 수행된 후 client에서 세션이 유효한지
  // 문의가 들어왔을 때 실행되는 함수
  passport.deserializeUser((user, done) => {
    console.log("DES", user);
    done(null, user);
  });

  // 로그인을 실제 수행하는 함수
  passport.use(
    new LocalStratege(
      {
        // login을 수행할 때 전달될 변수명 설정
        usernameField: "u_id",
        passwordField: "u_pw",
        session: true, // 세션저장하기
      },
      (u_id, u_pw, done) => {
        console.log("LocalStratege");
        console.log("LocalStratege1", u_id, u_pw);
        // const userid = users.find({});
        // const userid = users.findOne({ u_id: "sksk" });
        // console.log(userid);

        users.findOne({ u_id: u_id }, (err, user) => {
          console.log("받아온 user정보", user);
          if (err) {
            return done(err); // 시스템오류
          }
          if (!user) {
            console.log("id없으면 넘어와야함");
            return done(null, false, { massage: "아이디없어요" });
          }
          if (user.u_id == u_id || user.u_pw != u_pw) {
            console.log("비밀번호가 일치하지않으면 넘어와야함");
            return done(null, false, { massage: "비밀번호 없음" });
          }
          console.log("id, pw 일치");
          return done(null, user);
        });

        // const result = users.map((user) => {
        //   console.log("LocalStratege2", users.u_id, users.u_pw);
        //   // memeber에 있는 id가 같으면 바로 코드 종료
        // if (user.u_id === u_id && user.u_pw === u_pw) {
        //   console.log("찾았다");
        //   return done(null, user);
        // }

        //   // return done(null, false, { messege: "login fail" });
        // });
        // if (!result) {
        //   console.log("실패");
        //   return done(null, false, { messege: "login fail" });
        // }
      }
    )
  );
};

export default exportPassport;
