import React, { useState } from "react";
import Password from "antd/lib/input/Password";
import { setCookie } from "../../../utils/cookies";
import { redirect } from "react-router-dom";
import axios from "axios";

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPAssword] = useState("");
  // if (props.authInfo.email) {
  //   if (props.authInfo.admin) {
  //     console.log("Admin checked");
  //   } else {
  //     console.log("public user");
  //   }
  // } else {
  //   console.log("need to login or sign up");
  // }
  const emailHandler = e => {
    console.log("emailHandler" + e.currentTarget.value);
    setEmail(e.currentTarget.value);
  };
  const passwordHandler = e => {
    setPAssword(e.currentTarget.value);
  };
  const submitHandler = e => {
    if (Email) {
      if (Password) {
        let body = { email: Email, password: Password };
        axios.post("/server/user/login", body).then(res => {
          if (res.data.success) {
            console.log("login success");
            //cookie
            props.setAuth(body);
            setCookie(Email, res.data.admin);
            <redirect to="/">alert(res.data.msg)</redirect>;
          } else {
            alert(res.data.msg);
          }
        });
      } else {
        alert("password를 입력해주세요");
      }
    } else {
      alert("email을 입력해주세요");
    }
    e.preventDefault();
  };

  return (
    <div>
      <form
        id="login-form"
        onSubmit={submitHandler}
        style={{ marginBottom: "20%" }}
      >
        <label> * email </label>
        <input
          id="email"
          type="email"
          placeholder="Please input your email!"
          value={Email}
          onChange={emailHandler}
          required="true"
        />
        <br />
        <label> * password </label>
        <input
          id="password"
          type="password"
          placeholder="Please input your Password!"
          value={Password}
          onChange={passwordHandler}
          required="true"
        />
        <br />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default LoginPage;
