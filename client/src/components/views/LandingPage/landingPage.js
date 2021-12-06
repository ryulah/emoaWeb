import React, { useState, useEffect } from "react";
import {
  authEmail,
  authAdmin,
  setAuthEmail,
  setAuthAdmin
} from "../../../utils/Auth";
import Gallery from "../gallary/Gallery";
function LandingPage(props) {
  return (
    <div>
      <Gallery authInfo={props.authInfo} />
    </div>
  );
}

export default LandingPage;
