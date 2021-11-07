import { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";

const AtelierContext = createContext();

export const useAtelierContext = () => {
  return useContext(AtelierContext);
};

const AtelierContextProvider = ({ children }) => {
  const history = useHistory();

  const [atelier, setAtelier] = useState({
    at_seq: 1, // 공방코드
    at_name: "", // 공방명
    at_subname: "", // 간단소개
    at_addr: "", // 주소
    at_open: "", // 영업시간
    at_site: "", // 웹사이트
    at_hashtag: [], // 해시태그
    at_thumbnail: "", // 썸네일
    at_image: [], // 이미지파일들
    at_content: "", // 공방소개
  });

  const [checkedHashtag, setCheckedHashtag] = useState([]);

  // Input 내용 setting을 위한 onChange()
  const changeInput = (e) => {
    const { name, value } = e.target;
    setAtelier({
      ...atelier,
      [name]: value,
    });
  };

  // checkbox 내용 setting을 위한 onChange()
  const changeHashtagInput = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    // 새롭게 체크하는 것
    if (checked) {
      //value값을 추가한 배열을 생성하여 at_hashtag에 값을 넣음
      setCheckedHashtag(checkedHashtag.concat(value));
      setAtelier({
        ...atelier,
        at_hashtag: checkedHashtag,
      });
      // console.log("지금 체크할게요");

      // 체크를 푸는 것
    } else {
      // value값을 없앤 배열을 생성하여 at_hashtag에 값을 넣음
      setCheckedHashtag(checkedHashtag.filter((tag) => tag !== value));
      setAtelier({
        ...atelier,
        at_hashtag: checkedHashtag,
      });
      // console.log("체크풀었어요");
    }
    // console.log("value: ", value);
    // console.log("checked: ", checked);
    // console.log("checkedHashtag: ", checkedHashtag);
  };

  // Editor 내용 setting을 위한 onChange()
  const changeContentInput = (html) => {
    setAtelier({
      ...atelier,
      at_content: html,
    });
  };

  // 공방글 등록
  const onClickSave = useCallback(async () => {
    const {
      at_seq,
      at_name,
      at_subname,
      at_addr,
      at_open,
      at_site,
      at_hashtag,
      at_thumbnail,
      at_image,
      at_content,
    } = atelier;

    const res = await fetch("http://localhost:5000/atelier/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        at_seq,
        at_name,
        at_subname,
        at_addr,
        at_open,
        at_site,
        at_hashtag,
        at_thumbnail,
        at_image,
        at_content,
      }),
    });

    if (res?.ok) {
      const json = await res.json();
      console.log("공방 등록 추가", JSON.stringify(json));
    }

    // 나중에 at_seq로 변경 필요
    history.replace(`/detail/${at_name}`);
  });

  const propsStore = {
    changeInput,
    onClickSave,
    changeContentInput,
    changeHashtagInput,
  };

  return (
    <AtelierContext.Provider value={propsStore}>
      {children}
    </AtelierContext.Provider>
  );
};

export default AtelierContextProvider;
