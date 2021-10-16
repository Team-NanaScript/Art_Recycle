import React, { useState } from "react";
import AteItem from "./AteItem";
import "../css/atelier.css"

export default function AteList({ notMsg }) {
  const [ateList, setAteList] = useState([
    { at_name:"공방명", at_page:"https://www.instagram.com/recode_/", at_image:"/static/media/result_image.jpg"},
    { at_name:"공방명", at_page:"https://www.instagram.com/recode_/", at_image:"../static/media/result_image.jpg"},
    { at_name:"공방명", at_page:"https://www.instagram.com/recode_/", at_image:"../image/result_image.jpg"}
  ]);

  const viewList = ateList.map((atelier) => {
    return <AteItem atelier={atelier} />;
  });

  return (
    <section>{ateList.length > 0 ? viewList : notMsg}</section>
  );
}
