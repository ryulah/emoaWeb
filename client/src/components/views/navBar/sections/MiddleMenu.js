import React, { useState, useEffect } from "react";
import { loginCheck, getAuthEmail } from "../../../../utils/Auth";
import { removeCookie } from "../../../../utils/cookies";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function MiddleMenu(props) {
  const [loginFlag, setLoginFlag] = useState(0);
  useEffect(() => {
    setLoginFlag(loginCheck());
  }, [loginFlag]);
  const logOutHandler = () => {
    // if (removeCookie(getAuthEmail())) {
    //   setLoginFlag(loginCheck());
    //   props.refresh();
    // }
  };
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
        <a href="/apply"> 지원하기</a>
      </li>
      <li>
        <a href="/upload"> upload Sourcing(발주하기!)</a>
      </li>
      <li>
        <a href="/mygallery"> My Gallery</a>
      </li>
      <li>
        <a href="/helpdesk"> HELP DESK</a>
      </li>
      {loginFlag == 1 && (
        <li>
          <Button onClick={logOutHandler}>logout</Button>
        </li>
      )}
    </ul>
  );
}

export default MiddleMenu;
