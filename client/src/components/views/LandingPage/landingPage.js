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
            we can make your work more easier.
            <br /> like WONDER WALL
          </p>
          <p>
            {" "}
            we gonna show you other references and friends <br /> who need your
            help or give you their hands.
          </p>
          <p> try it, get it your own wonder work!</p>
          <p> so.. if you want make your wonder work, </p>
          <a href="/register">
            <Button className="joinBtn" color="primary">
              join
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
