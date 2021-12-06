import React, { useState, useEffect } from "react";
import axios from "axios";

function Gallery(props) {
  const authEmail = props.authInfo._authEmail;
  const [bundleList, setBundleList] = useState([]);
  const tempArray = new Array();
  useEffect(() => {
    axios
      .get(`/server/user/getUserIcons?user_id=${authEmail}&mode=1`)
      .then(res => {
        console.log(res.data.result.length);
        var tempArray = res.data.result;
      });
  }, [props.authInfo._authEmail]);
  console.log(bundleList);

  return (
    <div>
      <h2>Gallery</h2>
      <br />
      {bundleList.length < 1 && <p>텅~!</p>}
      {bundleList.length >= 1 &&
        bundleList.map((cur, index, bundleList) => {
          console.log(bundleList[index].bundleTag);
          return (
            <img
              style={{
                minWidth: "300px",
                width: "300px",
                height: "240px"
              }}
              src={
                "http://localhost:5001/resources/images/" +
                bundleList[index].thumbnail
              }
              key={index}
            />
          );
        })}
    </div>
  );
}

export default Gallery;
