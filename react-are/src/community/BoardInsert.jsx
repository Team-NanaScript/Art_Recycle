import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";
// import CKEditor from "react-native-ckeditor";

function BoardInsert() {
  const { changeInput, onClickSave } = useCommuContext();

  return (
    <div className="detail_view board_insert">
      <div>
        <label>작성자</label>
        <input onChange={changeInput} name="b_writer" type="text" />
      </div>
      <div>
        <label>제목</label>
        <input onChange={changeInput} name="b_title" type="text" />
      </div>
      <div>
        <label>내용</label>
        <input onChange={changeInput} name="b_content" type="text" />
        {/* 
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
		 */}
      </div>
      <div className="community">
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BoardInsert;
