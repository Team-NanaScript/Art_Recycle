import React from "react";
import { useHistory } from "react-router-dom";

export default function AteItem({ atelier }) {
  const imgUrl = "../image/atelier.jpg"
  const history = useHistory();
  const clickAtelier = (e) => {
    let at_code = e.target.closest("article").dataset.seq;
    // alert(div_className)
    history.push(`/detail/${at_code}`);
  };
  // const bgstyle = {
  //   backgroundImage : "url(../image/result_image.jpg)"
  // }
  const div_className = `atelier_image ${atelier.className}`

  return (
    <article
      className="atelier_list"
      data-seq={atelier.at_seq}
      onClick={clickAtelier}
    >
      <div className={div_className} ></div>
      <div className="atelier_item">
        <h2>{atelier.at_name}</h2>
        <p>{atelier.at_name}</p>
        <a>{atelier.at_page}</a>
      </div>
    </article>
  );
}
