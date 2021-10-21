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
import {useHistory} from "react-router-dom"

export default function AteItem({atelier}) {
  // const imgUrl = "img/atelier.jpg"
  const history = useHistory()
  const clickAtelier = (e) => {
    let at_code = e.target.closest("article").dataset.code
    // alert(div_className)
    history.push(`/detail/${at_code}`)
  }

  return <article className="atelier_list" data-code={atelier.at_code} onClick={clickAtelier}>
 <div className="atelier_image" src={atelier.at_image}></div>
  <div className="atelier_item">
    <h2>{atelier.at_name}</h2>
    <p>
      {atelier.at_name}
    </p>
    <a>{atelier.at_page}</a>
  </div>
</article>;

}
