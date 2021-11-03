import React from "react";
import { useCommuContext } from "../context/CommunityContextProvider";
import Editor from "../comps/Editor";

function BoardInsert() {
  const { changeInput, onClickSave, changeContent } = useCommuContext();

  /*
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = ` 
			$(document).ready(function(){
				$('#summernote').summernote({
					lang: 'ko-KR',
					height: 300,                 // 에디터 높이
				});
			})
				  `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);
  */

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
      {/* <textarea id="summernote" name="b_content"></textarea> */}
      {/* <div>
        <label>내용</label>
        <input onChange={changeInput} name="b_content" type="text" />
      </div> */}
      <Editor name="b_content" changeContent={changeContent} />
      <div className="community">
        <button onClick={onClickSave}>저장</button>
      </div>
    </div>
  );
}

export default BoardInsert;
