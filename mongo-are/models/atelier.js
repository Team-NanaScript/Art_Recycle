import mongoose from "mongoose";

const Schema = mongoose.Schema;

const atelier = Schema({
  at_seq: String, // 공방코드
  at_name: String, // 공방명
  at_subname: String, // 간단소개
  at_addr: String, // 주소
  at_open: String, // 영업시간
  at_site: String, // 웹사이트
  at_hashtag: Array, // 해시태그
  at_thumbnail: String, // 썸네일
  at_image: Array, // 이미지파일들
  at_content: String, // 공방소개
});

export default mongoose.model("atelier", atelier);
