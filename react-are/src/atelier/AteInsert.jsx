import React, { useEffect } from "react";
import { useAtelierContext } from "../context/AtelierContextProvider";
import "../css/AteInsert.css";
import Editor from "../comps/Editor";

const materialData = [
  { h_id: "M01", h_text: "목재" },
  { h_id: "M02", h_text: "직물" },
  { h_id: "M03", h_text: "플라스틱" },
  { h_id: "M04", h_text: "가죽" },
  { h_id: "M05", h_text: "세라믹" },
  { h_id: "M06", h_text: "석재" },
  { h_id: "M07", h_text: "종이" },
  { h_id: "M08", h_text: "금속" },
  { h_id: "M09", h_text: "유리" },
  { h_id: "M10", h_text: "고무" },
  { h_id: "M11", h_text: "식료품" },
  { h_id: "M12", h_text: "기타" },
];

const AteInsert = () => {
  const { changeInput, onClickSave, changeContentInput } = useAtelierContext();

  const material_checkbox = () => {
    return materialData.map((tag) => {
      return (
        <div>
          <input type="checkbox" name="material" value={tag.h_id} />
          <p>{tag.h_text}</p>
        </div>
      );
    });
  };

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
          <h3>해시태그</h3>

          <div>
            <label>지역</label>
            <input type="radio" />
          </div>
          <div>
            <label>재료</label>
            <div className="material_checkbox">{material_checkbox()}</div>
          </div>
          <div>
            <label>방법</label>
            <input type="checkbox" />
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
