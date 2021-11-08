import nodemailer from "nodemailer";

const SempleTransport = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  post: 587,
  auth: {
    u_id: "YOUR@naver.com",
    u_pw: "YOURPASS",
  },
});

export default { SempleTransport };
