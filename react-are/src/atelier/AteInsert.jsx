import React, { useEffect } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../css/AteInsert.css";

const AteInsert = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = ` 
			$(document).ready(function(){
				$('#summernote').summernote({
					lang: 'ko-KR',
					height: 300,                 // 에디터 높이
					minHeight: null,             // 최소 높이
					maxHeight: null,
				});
			})
				  `;
    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <section className="ate_section">
      <header>
        <h1>공방등록</h1>
      </header>
      <form className="ate_insert" method="post">
        <div>
          <label name="at_name">공방명</label>
          <input />
        </div>
        <div>
          <label name="at_subname">간단소개</label>
          <input />
        </div>
        <div>
          <label name="at_addr">주소</label>
          <input />
        </div>
        <div>
          <label name="at_on">영업시간</label>
          <input />
        </div>
        <div>
          <label>웹사이트 주소</label>
          <input name="at_site" />
        </div>
        <div>
          <label>공방소개</label>
          <textarea
            id="summernote"
            name="at_desc"
            cols="30"
            rows="15"
          ></textarea>
          {/* <CKEditor
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
            /> */}
        </div>
        <div className="ate_btn_box">
          <button className="ate_btn_insert">등록</button>
        </div>
      </form>
    </section>
  );
};

export default AteInsert;
