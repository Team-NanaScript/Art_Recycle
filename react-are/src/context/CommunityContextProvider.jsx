import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import moment from "moment";
import { useHistory } from "react-router";

const CommunityContext = createContext();

export const useCommuContext = () => {
  return useContext(CommunityContext);
};

const CommunityContextProvider = ({ children }) => {
  const history = useHistory();

  const [board, setBoard] = useState({
    b_no: 1,
    b_date: "",
    b_time: "",
    b_title: "",
    b_writer: "",
    b_text: "",
    b_count: 0,
  }); // 글 하나하나..

  const [commuList, setCommuList] = useState([]); // 게시판 리스트

  const commuFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/board/list");
    const boardList = await res.json();
    // console.log("커뮤니티 리스트", boardList);

    await setCommuList(boardList);
  }, []);
  useEffect(commuFetch, [commuFetch]);

  const changeInput = (e) => {
    const { name, value } = e.target;

    setBoard({
      ...board,
      [name]: value,
      b_no: commuList.length,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    });
  };

  const onClickSave = async () => {
    const { b_no, b_date, b_time, b_writer, b_title, b_content } = board;

    const response = await fetch("http://localhost:5000/board/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        b_no,
        b_date,
        b_time,
        b_writer,
        b_title,
        b_content,
      }),
    });

    if (response?.ok) {
      const json = await response.json();
      alert(JSON.stringify(json));
    }

    history.replace("/board");
  };

  const providerData = { commuList, commuFetch, changeInput, onClickSave };

  return (
    <CommunityContext.Provider value={providerData}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityContextProvider;
