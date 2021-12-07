import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Menu, Icon, Badge } from "antd";
import UserInfo from "../../userInfo/UserInfo";
function RightMenu(props) {
  return (
    <ul className="navbar__userInfo">
      <li>
        <i>
          <UserInfo authInfo={props.authInfo} />
        </i>
      </li>
    </ul>
  );
}

export default RightMenu;
