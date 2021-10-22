import React from "react";
import { useParams } from "react-router";
import { useCommuContext } from "../context/CommunityContextProvider";

function BoardDetail() {
  const { b_seq } = useParams();
  console.log("b-seq", b_seq);

  const { boardDetail } = useCommuContext();

  return (
    <div>
      <label>${boardDetail.b_title}</label>
      <label>Hi</label>
    </div>
  );
}

export default BoardDetail;
