import { createContext, useContext, useState } from "react";

const HashTagContext = createContext();

export const useHashTagContext = () => {
  return useContext(HashTagContext);
};

const HashTagContextProvider = ({ children }) => {
  const [hashTagList, setHashTagList] = useState([]);

  const addTag = (tagCate, tagText) => {
    const _hashTag = {
      h_cate: tagCate,
      h_text: tagText,
    };

    // 중복 검사
    const isExisted = (tag) => {
      if (tag.h_text === tagText) {
        return true;
      }
    };
    const existedHashTag = hashTagList.find(isExisted);
    // console.log("중복검사", existedHashTag); // 중복인 요소 확인코드

    if (existedHashTag) {
      return;
    }

    // hashtag setting
    setHashTagList([...hashTagList, _hashTag]);
    console.table(hashTagList);
  };

  const clickTag = (e) => {
    const tag = e.target;
    if (tag.tagName === "DIV") {
      const tagText = tag.innerText;
      const tagCate = tag.className;
      addTag(tagCate, tagText);
    }
  };

  const deleteHashTag = (e) => {
    // target과 currentTarget의 쓰임새를 알게 되었음.
    // alert(e.currentTarget.tagName);
    const target = e.currentTarget;

    if (target.tagName === "svg") {
      alert("삭제");

      const isClicked = (tag) => {
        // console.log("tag.h_text   :    ", tag.h_text);
        // console.log("target.className   :    ", target.className);
        // className 에 baseVal와 animVal가 존재했다.
        // 둘다 내용은 text와 동일해서 일단 하나를 가져다 사용함.

        if (tag.h_text !== target.className.baseVal) {
          return true;
        }
      };

      const _hashTagList = hashTagList.filter(isClicked);
      // console.log("삭제 filtering", _hashTagList);
      setHashTagList(_hashTagList);
    }
  };

  const propsStore = {
    clickTag,
    hashTagList,
    deleteHashTag,
  };

  return (
    <HashTagContext.Provider value={propsStore}>
      {children}
    </HashTagContext.Provider>
  );
};

export default HashTagContextProvider;
