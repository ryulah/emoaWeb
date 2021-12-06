import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

function UserInfo(props) {
  const [user, setUser] = useState("로그인이 필요합니다.");
  console.log("userInfo");
  useEffect(() => {
    if (props.authInfo._authEmail !== null) {
      var welcomeStr = " " + props.authInfo._authEmail;
      console.log("userInfo", props.authInfo._authEmail);
      setUser(welcomeStr);
    }
  }, [props.authInfo._authEmail]);

  return (
    <div>
      <UserOutlined />
      {user}
      <br />
      <br />
    </div>
  );
}

export default UserInfo;
