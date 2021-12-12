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
  const [headerList, setHeaderList] = useState([]);
  const [allItem, setAllItem] = useState([]);
  useEffect(() => {
    axios.get("/server/user/getItemList?mode=1").then(res => {
      if (res.data.success) {
        console.log(res.data.result[0].bundleSeq);
        console.log(res.data.result);
        setHeaderList(res.data.result);
      } else console.log(res.data.msg);
    });
    axios.get("/server/user/getItemList?mode=3").then(res => {
      if (res.data.success) {
        console.log(res.data.result);
        setAllItem(res.data.result);
      } else console.log(res.data.msg);
    });
  }, []);
  const getList = () => {
    axios.get("/server/user/getItemList?mode=1").then(res => {
      if (res.data.success) {
        console.log("getList from props!", headerList);
        setHeaderList(res.data.result);
      } else console.log(res.data.msg);
    });
  };

  return (
    <div>
      {headerList &&
        headerList.map(item => {
          return (
            <div>
              <GallaryItem
                authInfo={props.authInfo}
                mode="1"
                thumbnail={item.thumbnail}
                user_id={item.user_id}
                bundleTag={item.bundleTag}
                bundleDetail={item.bundleDetail}
                bundleSeq={item.bundleSeq}
                allItem={allItem}
              />
            </div>
          );
        })}

      {/* <div className="adContainer">
        <Carousel />
      </div> */}
    </div>
  );
}

export default LandingPage;
