import React from "react";
import "../css/result.css";

const Result = () => {
  return (
    <div>
      <section>
        <div>Hash-Tag</div>
        <button>검색</button>
      </section>

      <section>
        <h2 className="result">검색 결과</h2>
        <div className="result_search">
          <div className="result_image"></div>
          <div className="result_ex">
            <h2>공방명</h2>
            <p>
              현재 인터넷 사이트 'RE;CODE'를 통해서 제품을 팔고 홍보하고 있음.
            </p>
            <a>공방 SITE</a>
          </div>
        </div>
        <div className="result_search">
          <div className="result_image"></div>
          <div className="result_ex">
            <h2>공방명</h2>
            <p>
              현재 인터넷 사이트 'RE;CODE'를 통해서 제품을 팔고 홍보하고 있음.
            </p>
            <a>공방 SITE</a>
          </div>
        </div>
        <div className="result_search">
          <div className="result_image"></div>
          <div className="result_ex">
            <h2>공방명</h2>
            <p>
              현재 인터넷 사이트 'RE;CODE'를 통해서 제품을 팔고 홍보하고 있음.
            </p>
            <a>공방 SITE</a>
          </div>
        </div>
        <div className="result_search">
          <div className="result_image"></div>
          <div className="result_ex">
            <h2>공방명</h2>
            <p>
              현재 인터넷 사이트 'RE;CODE'를 통해서 제품을 팔고 홍보하고 있음.
            </p>
            <a>공방 SITE</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;
