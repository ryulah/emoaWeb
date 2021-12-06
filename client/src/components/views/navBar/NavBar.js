import React from "react";
import LeftMenu from "../navBar/sections/LeftMenu";
import RightMenu from "../navBar/sections/RightMenu";
import MiddleMenu from "../navBar/sections/MiddleMenu";
import UserInfo from "../userInfo/UserInfo";
import "../../../resources/css/style.css";
//import * as JS from "../../../resources/js/main";

function NavBar(props) {
  <script src="../../../resources/js/main.js" defer />;
  return (
    //JS.

    <nav class="navbar">
      <LeftMenu mode="horizontal" authInfo={props.authInfo} />

      <MiddleMenu mode="horizontal" authInfo={props.authInfo} />

      <RightMenu mode="horizontal" authInfo={props.authInfo} />
      {/* <a href="#" class="navbar__toggleBtn">
        <i class="fas fa-bars">3</i>
      </a> */}
    </nav>
  );
}

export default NavBar;
