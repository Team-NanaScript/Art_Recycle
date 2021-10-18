import { createContext, useContext, useState } from "react";

const HashTagContext = createContext();

export const useHashTagContext = () => {
  return useContext(HashTagContext);
};

const HashTagContextProvider = ({ children }) => {
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
    <HashTagContext.Provider value={propsStore}>
      {children}
    </HashTagContext.Provider>
  );
};

export default HashTagContextProvider;
