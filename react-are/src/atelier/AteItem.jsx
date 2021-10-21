import React from "react";
import img from "../image/atelier.jpg";

export default function AteItem({ atelier }) {
  const imgUrl = "../image/atelier.jpg";
  // 클릭하면 디테일 넘어가도록
  const link = {
    // url(/static/media/result_image.7b797e26.jpg)
    // backgroundImage: "url(${atelier.at_image})"
    backgroundImage: `url(${imgUrl})`,
  };
  // 배경이미지 세팅 어케하지????

  return (
    <div className="atelier_list">
      <div className="atelier_image" style={link}></div>
      <div className="atelier_item">
        <h2>{atelier.at_name}</h2>
        <p>{atelier.at_name}</p>
        <a>{atelier.at_page}</a>
      </div>
    </div>
  );
}
