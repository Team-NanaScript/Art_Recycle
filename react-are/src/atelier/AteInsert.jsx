import React, { useEffect } from "react";
import { useAtelierContext } from "../context/AtelierContextProvider";
import "../css/AteInsert.css";
import Editor from "../comps/Editor";

const AteInsert = () => {
  const { changeInput, onClickSave, changeContentInput } = useAtelierContext();

  return (
    <section className="ate_section">
      <header>
        <h2>공방등록</h2>
      </header>

      <form className="ate_insert" method="post">
        <hr />
        <h3>기본 정보</h3>
        <p>공방에 대한 기본적인 정보 입력</p>

        <div className="insert_box">
          <div>
            <label>공방명</label>
            <input onChange={changeInput} name="at_name" />
          </div>
          <div>
            <label>간단소개</label>
            <input onChange={changeInput} name="at_subname" />
          </div>
          <div>
            <label>주소</label>
            <input onChange={changeInput} name="at_addr" />
          </div>
          <div>
            <label>영업시간</label>
            <input onChange={changeInput} name="at_on" />
          </div>
          <div>
            <label>웹사이트 주소</label>
            <input onChange={changeInput} name="at_site" />
          </div>
          <hr />
          <h3>사진 첨부</h3>
          <div>
            <label>대표사진</label>
            <input type="file" accept="image/*" />
          </div>
          <div>
            <label>내용사진</label>
            <input type="file" accept="image/*" multiple />
          </div>
        </div>

        <hr />
        <h3>상세 소개</h3>
        <p>공방에 대한 자세한 설명</p>
        <Editor name="at_desc" changeContent={changeContentInput} />
        <div className="ate_btn_box">
          <button
            type="button"
            className="ate_btn_insert"
            onClick={onClickSave}
          >
            등록
          </button>
        </div>
      </form>
    </section>
  );
};

export default AteInsert;
