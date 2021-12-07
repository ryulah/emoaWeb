import React, { useState, useEffect } from "react";
import {
  authEmail,
  authAdmin,
  setAuthEmail,
  setAuthAdmin
} from "../../../utils/Auth";
import Gallery from "../gallary/Gallery_test";
import GallaryItem from "../gallary/GallayItem";
import Carousel from "../../../utils/Carousel";

function LandingPage(props) {
  return (
    <div>
      <div>
        <GallaryItem authInfo={props.authInfo} />
      </div>
      <Carousel />
    </div>
  );
}

export default LandingPage;
