import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useHashTagContext = () => {
  return useContext(AppContext);
};

const HashTagContext = ({ children }) => {
  const [hashTagList, setHashTagList] = useState([]);

  const changeTag = (tagCate, tagText) => {
    const _hashTag = {
      h_cate: tagCate,
      h_text: tagText,
    };
    setHashTagList([...hashTagList, _hashTag]);
    console.table(hashTagList);
  };

  const clickTag = (e) => {
    const tag = e.target;
    if (tag.tagName === "DIV") {
      const tagText = tag.innerText;
      const tagCate = tag.className;
      changeTag(tagCate, tagText);
    }
  };

  const propsStore = {
    clickTag,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
};

export default HashTagContext();
