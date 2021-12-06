import React, { useState, useEffect } from "react";
import {
  authEmail,
  authAdmin,
  setAuthEmail,
  setAuthAdmin
} from "../../../utils/Auth";
import Gallery from "../gallary/Gallery";
import GallaryItem from "../gallary/GallayItem";

function LandingPage(props) {
  return (
    <div>
      <GallaryItem authInfo={props.authInfo} />
      <GallaryItem authInfo={props.authInfo} />
      <GallaryItem authInfo={props.authInfo} />
    </div>
  );
}

export default LandingPage;
