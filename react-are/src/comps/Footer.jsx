import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_box">
        <div className="logo">
          <svg width="97" height="35">
            <text
              transform="translate(0 29)"
              fill="#ffffff"
              fontSize="35"
              fontFamily="Ubuntu-Bold, Ubuntu"
              fontWeight="700"
            >
              <tspan x="0" y="0">
                Art
              </tspan>
              <tspan y="0" fill="#ffffff">
                Re
              </tspan>
            </text>
          </svg>
        </div>
        <div className="msg_box">
          <label>
            환경 오염은 치료가 불가능한 질병입니다
            <br />
            예방할 수밖에 없습니다
          </label>
          <button>문의/제안하기</button>
        </div>
      </div>
      <div className="footer_nav">
        <li>About</li>
        <li>Community</li>
      </div>
      <div className="copy">
        <label>© Team_A_Re</label>
      </div>
    </div>
  );
}

export default Footer;
