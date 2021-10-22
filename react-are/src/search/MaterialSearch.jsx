// import React, { useCallback } from "react";
import { useHashTagContext } from "../context/HashTagContextProvider";

const materialData = [
  { h_id: "M01", h_text: "목재" },
  { h_id: "M02", h_text: "직물" },
  { h_id: "M03", h_text: "플라스틱" },
  { h_id: "M04", h_text: "가죽" },
  { h_id: "M05", h_text: "세라믹" },
  { h_id: "M06", h_text: "석재" },
  { h_id: "M07", h_text: "종이" },
  { h_id: "M08", h_text: "금속" },
  { h_id: "M09", h_text: "유리" },
  { h_id: "M10", h_text: "고무" },
  { h_id: "M11", h_text: "식료품" },
  { h_id: "M12", h_text: "기타" },
];
const MaterialSearch = () => {
  const { clickTag } = useHashTagContext();

  // const material_box = useCallback(() => {
  const material_box = () => {
    return materialData.map((text) => {
      return (
        <div
          className="tag material"
          onClick={clickTag}
          key={text.h_id}
          data-id={text.h_id}
        >
          {text.h_text}
        </div>
      );
    });
  };
  // }, []);

  return (
    <section className="search_section material">
      <div className="material_box">{material_box()}</div>
    </section>
  );
};

export default MaterialSearch;
