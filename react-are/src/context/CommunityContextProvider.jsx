import { createContext, useContext, useState } from "react";
import moment from "moment";

const CommunityContext = createContext();

export const useCommuContext = () => {
  return useContext(CommunityContext);
};

const CommunityContextProvider = ({ children }) => {
  const [board, setBoard] = useState({
    c_no: 1,
    c_date: "",
    c_time: "",
    c_title: "",
    c_writer: "",
    c_text: "",
    c_count: 0,
  }); // 글 하나하나..

  const [commuList, setCommuList] = useState([]); // 게시판 리스트

  const changeInput = (e) => {
    const { name, value } = e.target;

    setBoard({
      ...board,
      [name]: value,
      c_no: commuList,
      //   c_no: commuList.length,
      c_date: moment().format("YYYY[-]MM[-]DD"),
      c_time: moment().format("HH:mm:ss"),
      c_text: "",
    });
  };

  const onClickSave = async () => {
    const { c_no, c_date, c_time, c_text } = board;

    const response = await fetch("http://localhost:5000/board/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      body: JSON.stringify(c_no, c_date, c_time, c_text),
    });

    if (response.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
      console.log(JSON.stringify(json));
    }
  };

  const providerData = { changeInput, onClickSave };

  return <CommunityContext.Provider value={providerData}>{children}</CommunityContext.Provider>;
};

export default CommunityContextProvider;
