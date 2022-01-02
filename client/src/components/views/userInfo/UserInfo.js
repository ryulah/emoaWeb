import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

function UserInfo(props) {
  const [user, setUser] = useState("로그인이 필요합니다.");
  console.log("userInfo");
  useEffect(() => {
    if (
      props.authInfo._authEmail !== null &&
      props.authInfo._authEmail != undefined
    ) {
      console.log("login user info?", props.authInfo._authEmail);
      var welcomeStr = " " + props.authInfo._authEmail;
      console.log("userInfo", props.authInfo._authEmail);
      setUser(welcomeStr);
    } else {
      setUser("로그인이 필요합니다");
    }
  }, [props.authInfo._authEmail]);

  return (
    <div>
      <UserOutlined style={{ marginRight: "10px" }} />
      {user}
      <br />
      <br />
    </div>
  );
}

export default UserInfo;
