import React from "react";
import { Tmap } from "./index";

import "../css/search_detail.css";

function Detail() {
  return (
    <div className="detail_all">
      <header className="detail_header">
        <h2>공방명</h2>
        <h4>간단설명</h4>
      </header>
      <div className="detail_section">
        <div>
          <h3>Address</h3>
          <span>주소</span>
        </div>
        <div>
          <h3>OPEN</h3>
          <span>영업시간</span>
        </div>
        <div className="detail_site">
          <h3>SITE</h3>
          <span className="site_icon">
            <a href="http웹사이트" target="_blank">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
      <section>공방설명</section>
      <section className="detail_map">
        <div>
          <h3>여기서 지도를 보여줄 곳</h3>
          <div className="map">
            <Tmap />
          </div>
        </div>
      </section>
      <div className="postscr">
        <div className="community postscr_insert">
          <input name="p_writer" placeholder="작성자를 입력해주세요" />
          <input name="p_content" placeholder="후기를 입력해주세요" />
          <button
            onClick={() => {
              alert("후기 INSERT SUCCESS!");
            }}
          >
            등록
          </button>
        </div>
      </div>
      <div className="postscript_view">
        <label>userId</label>
        <input value="공방 너무 이쁘네욤" />
        <i className="fas fa-pencil-alt"></i>
        <span>&times;</span>
      </div>
      <div className="postscript_view">
        <label>nanask</label>
        <input value="집에서 가까워서 좋아요" />
        <i className="fas fa-pencil-alt"></i>
        <span>&times;</span>
      </div>
    </div>
  );
}

export default Detail;
