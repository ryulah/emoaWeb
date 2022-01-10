import React, { useState } from "react";
import axios from "axios";
import { getAuthEmail } from "../../../utils/Auth";
import { useNavigate } from "react-router-dom";

function QnARequest() {
  var d = new Date();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

    let body = {
      userEmail: "seren",
      mkDt: d.getFullYear() + "/" + d.getMonth() + 1 + "/" + d.getDate(),
      category: 1,
      title: title,
      contents: content,
      password: boardPwd
    };
    console.log("QNA request", body);

    axios.post("/server/contents/upload/board", body).then(res => {
      if (res.data.success) {
        console.log("insert success");
        alert("문의가 등록되었습니다.");
      } else {
        alert(res.data.err);
      }
    });
    navigate("/");
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [boardPwd, setBoardPwd] = useState("");
  const titleHandler = e => {
    setTitle(e.currentTarget.value);
  };
  const contentHandler = e => {
    setContent(e.currentTarget.value);
  };
  const boardPwdHandler = e => {
    setBoardPwd(e.currentTarget.value);
  };

  return (
    <div>
      <div className="writeBoard">
        <h2>문의 작성하기</h2>
        <form onSubmit={submitHandler}>
          <label /> 제목 :
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            onChange={titleHandler}
            value={title}
          />
          <br />
          <label /> 내용 :
          <input
            type="textarea"
            placeholder="내용을 입력해주세요."
            onChange={contentHandler}
            value={content}
          />
          <br />
          <label /> 비밀글 :
          <input
            type="text"
            placeholder="비공개 설정 시 비밀번호를 입력해주세요."
            onChange={boardPwdHandler}
            value={boardPwd}
          />
          <br />
          <button type="submit">등록하기</button>
        </form>
      </div>
    </div>
  );
}

export default QnARequest;
