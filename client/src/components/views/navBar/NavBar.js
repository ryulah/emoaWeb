import React, { useEffect } from "react";
import LeftMenu from "../navBar/sections/LeftMenu";
import RightMenu from "../navBar/sections/RightMenu";
import MiddleMenu from "../navBar/sections/MiddleMenu";
import UserInfo from "../userInfo/UserInfo";
import "../../../resources/css/navStyle.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
function NavBar(props) {
  window.$(document).ready(() => {
    const toggleBtn = document.querySelector(".navbar__toggleBtn");
    const menu = document.querySelector(".navbar__menu");
    const icons = document.querySelector(".navbar__userInfo");
    toggleBtn.addEventListener("click", () => {
      //console.log("cliekd");
      menu.classList.toggle("active");
      icons.classList.toggle("active");
    });
  });
  useEffect(() => {
    props.refresh();
  }, []);
  const refreshFunc = flag => {
    console.log("nav");
    props.refresh(flag);
  };

  return (
    <nav className="navbar">
      <LeftMenu mode="horizontal" authInfo={props.authInfo} />

      <MiddleMenu
        mode="horizontal"
        authInfo={props.authInfo}
        refresh={refreshFunc}
      />

      <RightMenu mode="horizontal" authInfo={props.authInfo} />
      <a href="#" className="navbar__toggleBtn">
        <i className="fas fa-bars">#</i>
      </a>
    </nav>
  );
}

export default NavBar;
