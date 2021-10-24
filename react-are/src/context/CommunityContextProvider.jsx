import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import moment, { weekdaysShort } from "moment";
import { useHistory } from "react-router";
import UUID from "react-uuid";

const CommunityContext = createContext();

export const useCommuContext = () => {
  return useContext(CommunityContext);
};

const CommunityContextProvider = ({ children }) => {
  const history = useHistory();

  //   Community state
  const [board, setBoard] = useState({
    b_seq: 1,
    b_date: "",
    b_time: "",
    b_title: "",
    b_writer: "",
    b_content: "",
    b_count: 0,
  }); // 글 하나하나..

  const [commuList, setCommuList] = useState([]); // 게시판 리스트

  const [boardDetail, setBoardDetail] = useState({});

  //   Reply state
  const [reply, setReply] = useState({
    r_writer: "",
    r_content: "",
    r_date: "",
    r_time: "",
  });

  const commuFetch = useCallback(async () => {
    const res = await fetch("http://localhost:5000/board/list");
    const boardList = await res.json();
    // console.log("커뮤니티 리스트", boardList);

    await setCommuList(boardList);
    // console.log("commuList", commuList);
  }, []);
  useEffect(commuFetch, [commuFetch]);

  const onTrClick = async (e) => {
    const b_seq = e.target.closest("tr").dataset.id;

    history.replace(`/board/detail/${b_seq}`);
  };

  const changeInput = (e) => {
    const { name, value } = e.target;

    setBoard({
      ...board,
      [name]: value,
      b_seq: commuList.length,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    });
  };

  const onClickSave = async () => {
    const { b_seq, b_date, b_time, b_writer, b_title, b_content } = board;

    const response = await fetch("http://localhost:5000/board/insert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        b_seq,
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

  const ReplySave = async () => {
    const { b_seq } = board.b_seq;
    const { r_bId, r_writer, r_content, r_date, r_time } = reply;

    const res = await fetch("http://localhost:5000/board/reply/:b_seq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        r_bId,
        r_writer,
        r_content,
        r_date,
        r_time,
      }),
    });

    if (res?.ok) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }

    history.replace("/board/detail/:b_seq");
  };

  const providerData = {
    commuList,
    commuFetch,
    changeInput,
    onClickSave,
    onTrClick,
    boardDetail,
    setBoardDetail,
    ReplySave,
  };

  return (
    <CommunityContext.Provider value={providerData}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityContextProvider;
