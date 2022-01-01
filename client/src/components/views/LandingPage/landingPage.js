import React, { useState, useEffect } from "react";

import {
  authEmail,
  authAdmin,
  setAuthEmail,
  setAuthAdmin
} from "../../../utils/Auth";
import GallaryItem from "../gallary/GallayItem";
import axios from "axios";
import landing from "../../../resources/css/landing.css";
import Helpdesk from "../Helpdesk/Helpdesk";
import MenualClip from "../clips/MenualClip";
import IntrodudeClip from "../clips/IntroducdClip";

import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;
function LandingPage(props) {
  var path = "http://localhost:5001/_static/resource/background3.mp4";
  return (
    <div id="main">
      <div className="backgroundMain">
        <video src={path} muted autoPlay loop></video>

        <div className="welcomeBox">
          <h1>Welcome!</h1>
          <p>
            {" "}
            프로젝트, 우리와 함께 시작해보세요.
            <br /> 어떤 프로젝트라도
          </p>

          <a href="/register">
            <Button className="joinBtn" color="primary">
              join
            </Button>
          </a>
        </div>
      </div>
      <IntrodudeClip />
      <MenualClip />
    </div>
  );
}

export default LandingPage;
