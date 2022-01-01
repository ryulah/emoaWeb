import React, { useState, useEffect } from "react";
import Password from "antd/lib/input/Password";
import { setCookie } from "../../../utils/cookies";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import LeftNavBar from "../navBar/LeftNavBar";
function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPAssword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (props.authInfo._authEmail) {
      navigate("/");
    }
  }, [props.authInfo._authEmail]);
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

            if (setCookie(Email, res.data.admin)) {
              alert(res.data.msg);
              <redirect push to="/" />;
            }
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
      <LeftNavBar />
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
