import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmCheck, setConfirmCheck] = useState("중복 확인이 필요합니다.");
  const [ConfirmFlag, setConfirmFlag] = useState(false);
  const emailHandler = e => {
    setEmail(e.currentTarget.value);
  };
  const passwordHandler = e => {
    setPassword(e.currentTarget.value);
  };
  const nameHandler = e => {
    setName(e.currentTarget.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    console.log(ConfirmFlag);
    if (ConfirmFlag) {
      if (Email && Password && Name) {
        let body = { email: Email, password: Password, name: Name };

        console.log("submit handler" + body);
        axios.post("/server/user/register", body).then(res => {
          if (res.data.success) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        });
      } else {
        alert("필수값(*)을 입력해주세요");
      }
    } else {
      alert("eamil 중복 확인이 필요합니다.");
    }
  };
  const confirmHandler = e => {
    e.preventDefault();
    console.log(`confirm handler : ${Email}`);
    if (Email) {
      let body = { email: Email };
      axios.post("/server/user/duplicationCheck", body).then(res => {
        if (res.data.success) {
          console.log(res.data.msg);
          setConfirmFlag(true);
          setConfirmCheck("사용가능한 이메일입니다.");
        } else {
          alert("이미 사용중인 이메일입니다. 다른 이메일을 사용해주세요");
        }
      });
    } else {
      alert("email을 입력해주세요");
    }
  };
  return (
    <div>
      <form id="register-form" onSubmit={submitHandler}>
        <label>*email </label>
        <input
          type="email"
          placeholder="Please input your Email!"
          onChange={emailHandler}
          value={Email}
        />
        <p style={{ font: "1rem" }}>{ConfirmCheck}</p>
        <button onClick={confirmHandler}>confirm the email</button>
        <br />
        <label>*password </label>
        <input
          type="password"
          placeholder="Please input your Password!"
          onChange={passwordHandler}
          value={Password}
        />
        <br />
        <label>*name </label>
        <input
          type="text"
          placeholder="Please input your name!"
          onChange={nameHandler}
          value={Name}
        />
        <br />
        <br />
        <button type="submit">sign in</button>
      </form>
    </div>
  );
}

export default RegisterPage;
