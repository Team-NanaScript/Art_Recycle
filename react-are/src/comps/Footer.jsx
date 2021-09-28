import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_box"> 
        <div className="notice">
          <p>공지사항</p>
        </div>
        <ul className="ft_nav">
          <li>About</li>
          <p>·</p>
          <li>Partnership</li>
          <p>·</p>
          <li>Community</li>
          <p>·</p>
          <li>CS Center</li>
          <li>1 : 1 문의하기</li>
        </ul>
        <div className="copy">
          <p>Copyright © Team Are. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
