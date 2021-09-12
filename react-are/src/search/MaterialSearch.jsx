import React, { useCallback } from "react";

const materialData = [
  "목재",
  "직물",
  "플라스틱",
  "가죽",
  "세라믹",
  "석재",
  "종이",
  "금속",
  "유리",
  "고무",
  "식료품",
  "기타",
];
const MaterialSearch = () => {
  const addTag = (e) => {
    const tag = e.target;

    if (tag.tagName === "DIV") {
      const tagValue = tag.innerText;
      alert(tagValue);
    }
  };

  const material_box = useCallback(() => {
    return materialData.map((text) => {
      return (
        <div className="tag material" onClick={addTag}>
          {text}
        </div>
      );
    });
  }, []);

  return (
    <section className="search_section material">
      <div className="material_box">{material_box()}</div>
    </section>
  );
};

export default MaterialSearch;
