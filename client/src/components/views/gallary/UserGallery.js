import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
// import GallaryItem from "./GallayItem";
import GallaryItem from "../../../utils/GallayItemUtil";
function UserGallery(props) {
  const authEmail = props.authInfo._authEmail;
  const [headerList, setHeaderList] = useState([]);
  const [allItem, setAllItem] = useState([]);

  useEffect(() => {
    axios
      .get(`/server/user/getItemList?user_id=${authEmail}&mode=2`)
      .then(res => {
        if (res.data.success) {
          console.log("##########header : ", res.data.result);
          setHeaderList(res.data.result);
        }
      });
    axios
      .get(`/server/user/getItemList?user_id=${authEmail}&mode=4`)
      .then(res => {
        if (res.data.success) {
          console.log("##########master : ", res.data.result);
          setAllItem(res.data.result);
        }
      });
  }, [props.authInfo._authEmail]);

  return (
    <div>
      {headerList.length < 1 && (
        <div>
          <h1 style={{ "font-size": "100px" }}>텅..</h1>
          <a href="/upload">
            <Button type="primary" icon={<DownloadOutlined />}>
              업로드 하러 가기!
            </Button>
          </a>
        </div>
      )}
      {headerList &&
        headerList.map(item => {
          return (
            <div>
              <GallaryItem
                authInfo={props.authInfo}
                mode="2"
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
    </div>
  );
}

export default UserGallery;
