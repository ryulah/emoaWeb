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
    console.log("@@", props);
    if (removeCookie(getAuthEmail())) {
      setLoginFlag(loginCheck());
      props.refresh();
    }
  };
  return (
    <ul className="navbar__menu">
      <li>
        <a href="/">Home </a>
      </li>
      {!loginFlag && (
        <li>
          <a href="/login"> Login </a>
        </li>
      )}
      {/* <li>
        <a href="/login"> login </a>
      </li> */}
      {!loginFlag && (
        <li>
          <a href="/register"> Register</a>
        </li>
      )}
      {/* <li>
        <a href="/register"> register</a>
      </li> */}
      <li>
        <a href="/apply"> Apply Project</a>
      </li>
      <li>
        <a href="/upload"> Request Sourcing</a>
      </li>
      <li>
        <a href="#"> My Gallery</a>
        <ul className="dropmenu">
          <li>
            <a href="/mygallery">gallary</a>
          </li>
          <li>
            <a href="#">지원현황</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/helpdesk"> HELP DESK</a>
      </li>
      {loginFlag == 1 && (
        <li>
          <Button onClick={props.refresh(0)}>logout</Button>
        </li>
      )}
    </ul>
  );
}

export default MiddleMenu;
