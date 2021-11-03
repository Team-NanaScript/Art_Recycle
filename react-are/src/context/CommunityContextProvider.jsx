import { createContext, useContext, useState } from "react";
import moment from "moment";
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

  // Community List state
  const [commuList, setCommuList] = useState([]); // 게시판 리스트

  // Community Detail state
  const [boardDetail, setBoardDetail] = useState({});

  //   Reply state
  const [reply, setReply] = useState({
    r_Id: "",
    r_bSeq: "",
    r_writer: "",
    r_content: "",
    r_date: "",
    r_time: "",
  });

  // Reply List state
  const [replyList, setReplyList] = useState([]);

  // 커뮤니티 insert - state에 setting
  const changeInput = (e) => {
    const { name, value } = e.target;

    // console.log("b_content", name["b_content"].value);

    setBoard({
      ...board,
      [name]: value,
      b_seq: UUID(),
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    });

    console.log("board", board);
  };

  const changeContent = (html) => {
    setBoard({
      ...board,
      b_content: html,
    });
  };

  // 커뮤니티 게시글 등록
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

  const onClickUpdate = async (e) => {
    const b_seq = e.target.dataset.id;
    const res = await fetch(`http://localhost:5000/board/update/${b_seq}`);
    if (res?.ok) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }
  };

  // 커뮤니티 디테일 댓글 insert - state에 setting
  const changeReply = (e) => {
    const { name, value } = e.target;
    const r_bSeq = e.currentTarget.dataset.seq;
    console.log("r_bSeq", r_bSeq);

    setReply({
      ...reply,
      [name]: value,
      r_Id: UUID(),
      r_bSeq: r_bSeq,
      r_date: moment().format("YYYY[-]MM[-]DD"),
      r_time: moment().format("HH:mm:ss"),
    });
    console.log("reply", reply);
  };

  // 커뮤니티 게시글 별 댓글 등록
  const ReplySave = async () => {
    const b_seq = reply.r_bSeq;
    console.log("b_seq", b_seq);

    const { r_Id, r_bSeq, r_writer, r_content, r_date, r_time } = reply;

    const res = await fetch(`http://localhost:5000/board/reply/${b_seq}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        r_Id,
        r_bSeq,
        r_writer,
        r_content,
        r_date,
        r_time,
      }),
    });

    if (res?.ok) {
      const json = await res.json();
      setReplyList(json);
    }

    history.replace(`/board/detail/${b_seq}`);
  };

  const iconClick = async (e) => {
    const r_Id = e.target.dataset.id;
    const res = await fetch(`http://localhost:5000/board/reply/update/${r_Id}`);
    alert(JSON.stringify(res.json));
  };

  const replyDelete = async (e) => {
    const r_Id = e.target.dataset.id;
    const b_seq = e.target.dataset.seq;
    // const res = await fetch(`http://localhost:5000/board/reply/delete/${r_Id}`);
    const res = await fetch(`http://localhost:5000/board/reply/delete/${b_seq}/${r_Id}`);

    /*
    if (res?.ok) {
      const json = await res.json();
      alert(JSON.stringify(json));
    }
	*/

    if (res?.ok) {
      const json = await res.json();
      setReplyList(json);
    }
  };

  const providerData = {
    commuList,
    setCommuList,
    changeInput,
    onClickSave,
    onClickUpdate,
    boardDetail,
    setBoardDetail,
    replyList,
    iconClick,
    replyDelete,
    setReplyList,
    changeReply,
    ReplySave,
    changeContent,
  };

  return <CommunityContext.Provider value={providerData}>{children}</CommunityContext.Provider>;
};

export default CommunityContextProvider;
