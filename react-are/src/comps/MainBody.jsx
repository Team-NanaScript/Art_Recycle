import React from "react";
import "../css/main.css"

function MainBody() {
  return (
    <section className="main_body">
      <article className="main_top">
      <h1>국내 재활용 공방을 한곳에</h1>
      <div className="main_search_box">
        <input name="search" className="main_search"
        placeholder="공방명, 재료를 입력해주세요"/>
      </div>
      </article>
      <article className="main_bottom">
        <div className="area">
          <h2>지역별 공방</h2>
          <p>우리 지역의 공방을 찾아봐요</p>
        </div>
        <div className="go">
          <h2>직접 가기</h2>
          <p>직접 찾아가 재활용품을 전달하거나, 제작에 참여 할 수 있어요</p>
        </div>
        <div className="delivery">
          <h2>택배 배송</h2>
          <p>택배를 이용하여 재활용품을 전달할 수 있어요</p>
        </div>
      </article>
    </section>
  );
}

export default MainBody;
