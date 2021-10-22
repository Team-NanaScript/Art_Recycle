import React from "react";
import { useHistory } from "react-router-dom";

export default function AteItem({ atelier }) {
  // const imgUrl = "img/atelier.jpg"
  const history = useHistory();
  const clickAtelier = (e) => {
    let at_code = e.target.closest("article").dataset.code;
    // alert(div_className)
    history.replace(`/detail/${at_code}`);
  };

  return (
    <article
      className="atelier_list"
      data-code={atelier.at_code}
      onClick={clickAtelier}
    >
      <div className="atelier_image" src={atelier.at_image}></div>
      <div className="atelier_item">
        <h2>{atelier.at_name}</h2>
        <p>{atelier.at_name}</p>
        <a>{atelier.at_page}</a>
      </div>
    </article>
  );
}
