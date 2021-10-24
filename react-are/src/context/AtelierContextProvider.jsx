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
    at_on: "", // 영업시간
    at_site: "", // 웹사이트
    at_desc: "", // 공방소개
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setAtelier({
      ...atelier,
      [name]: value,
    });
  };

  // 공방글 등록
  const onClickSave = useCallback(async () => {
    const { at_seq, at_name, at_subname, at_addr, at_on, at_site, at_desc } =
      atelier;

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
        at_on,
        at_site,
        at_desc,
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
  };

  return (
    <AtelierContext.Provider value={propsStore}>
      {children}
    </AtelierContext.Provider>
  );
};

export default AtelierContextProvider;
