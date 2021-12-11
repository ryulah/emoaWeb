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
import axios from "axios";

function LandingPage(props) {
  let results;
  let bundleList = new Map();
  let imgList = [];
  useEffect(() => {
    axios.get("/server/user/getItemList?mode=1").then(res => {
      if (res.data.success) {
        console.log(res.data.result[0].bundleSeq);
        results = res.data.result;
        console.log(results);
        //1. bundle 그룹 골라내고
        // results.map((cur, index, results) => {
        //   return (bundleList[results[index].bundleSeq] =
        //     results[index].bundleTag);
        // });
      } else console.log(res.data.msg);
    });
  }, []);

  return (
    <div>
      <div>
        <GallaryItem authInfo={props.authInfo} itemList={results} />;
      </div>
      {/* <div className="adContainer">
        <Carousel />
      </div> */}
    </div>
  );
}

export default LandingPage;
