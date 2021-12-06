import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function UserGallery(props) {
  const authEmail = props.authInfo._authEmail;
  const [itemCount, setItemCount] = useState("");
  const [items, setItems] = useState([]);
  var size = "large";
  useEffect(() => {
    axios
      .get(`/server/user/getUserIcons?user_id=${authEmail}&mode=2`)
      .then(res => {
        if (res.data.success) {
          console.log(res.data.result);
          setItems([...res.data.result]);
          setItemCount(res.data.result.length);
        }
      });
  }, [props.authInfo._authEmail]);

  return (
    <div>
      {itemCount < 1 && (
        <div>
          <h1 style={{ "font-size": "100px" }}>텅..</h1>
          <a href="/upload">
            <Button type="primary" icon={<DownloadOutlined />} size={size}>
              업로드 하러 가기!
            </Button>
          </a>
        </div>
      )}
      {itemCount > 0 &&
        items.map((cur, index, items) => {
          console.log(cur);
          return (
            <img
              style={{
                minWidth: "300px",
                width: "300px",
                height: "240px"
              }}
              src={"http://localhost:5001/resources/images/" + cur}
              key={index}
            />
          );
        })}
    </div>
  );
}

export default UserGallery;
