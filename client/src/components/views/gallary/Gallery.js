import React, { useState, useEffect } from "react";
import axios from "axios";
import GallaryItem from "../../../utils/GallayItemUtil";
function Gallery(props) {
  const [headerList, setHeaderList] = useState([]);
  const [allItem, setAllItem] = useState([]);
  const [count, setCount] = useState("");
  useEffect(() => {
    axios.get("/server/user/getItemList?mode=1").then(res => {
      if (res.data.success) {
        console.log(res.data.result[0].bundleSeq);
        console.log(res.data.result);
        setHeaderList(res.data.result);
        setCount(res.data.result.length);
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
      <div className="currentBoard">
        <h4>
          현재 <span style={{ color: "red" }}>{count} </span>개의 프로젝트가
          당신을 기다려요!
        </h4>
      </div>
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

export default Gallery;
