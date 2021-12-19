import React from "react";
import { loginCheck } from "../../../../utils/Auth";

function MiddleMenu(props) {
  const loginFlag = loginCheck();
  console.log(loginFlag);
  return (
    <ul className="navbar__menu">
      <li>
        <a href="/">HOME </a>
      </li>
      {!loginFlag && (
        <li>
          <a href="/login"> login </a>
        </li>
      )}
      {/* <li>
        <a href="/login"> login </a>
      </li> */}
      {!loginFlag && (
        <li>
          <a href="/register"> register</a>
        </li>
      )}
      {/* <li>
        <a href="/register"> register</a>
      </li> */}
      <li>
        <a href="/upload"> upload Sourcing(발주하기!)</a>
      </li>
      <li>
        <a href="/mygallery"> My Gallery</a>
      </li>
      <li>
        <a href="/helpdesk"> HELP DESK</a>
      </li>
      {loginFlag && <li>logout</li>}
    </ul>
  );
}

export default MiddleMenu;
