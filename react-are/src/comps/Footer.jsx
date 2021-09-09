import React from "react";

function Footer() {
  return (
    <div className="footer">
		<div className="footer_logo">
		<svg width="97" height="35">
          <text transform="translate(0 29)" fill="#27187f" fontSize="35" fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700">
            <tspan x="0" y="0">Art</tspan>
            <tspan y="0" fill="#758bfd">Re</tspan>
          </text>
        </svg>
		<address>© 2021 Team_A_re</address>
		</div>
      <ul>
		  <li>About</li>
		  <li>Community</li>
		  <li>Join</li>
		  <li>Login</li>
		  <li>Advice</li>
	  </ul>
    </div>
  );
}

export default Footer;
