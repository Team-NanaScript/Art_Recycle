import React, { createContext, useContext } from "react";

const AppContext = createContext;

export const useSearchContext = () => {
  return useContext(AppContext);
};
const SearchContext = ({ children }) => {
  const [hashTag, setHashTag] = useState({
    h_cate: "",
    h_text: "",
  });

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

  return <div></div>;
};

export default SearchContext;
