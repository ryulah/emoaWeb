import React from "react";

function GallayItem(props) {
  return (
    <div style={{ border: "1px solid gray" }}>
      <h3 style={{ textAlign: "left", "margin-left": "20px" }}>
        emoticon Bunle Name : naver_prj1
      </h3>
      <p style={{ textAlign: "left", "margin-left": "20px" }}>item count : 2</p>
      <div style={{ display: "flex", "margin-left": "20px" }}>
        <img
          style={{
            minWidth: "300px",
            width: "300px",
            height: "240px",
            display: "flex",
            margin: "10px"
          }}
          src={"http://localhost:5001/resources/images/test.png"}
        />
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ margin: "5px" }}>
            <img
              style={{
                width: "50%",
                height: "50%"
              }}
              src={"http://localhost:5001/resources/images/test.png"}
            />
          </li>
          <li style={{ margin: "5px" }}>
            <img
              style={{
                width: "50%",
                height: "50%"
              }}
              src={"http://localhost:5001/resources/images/test.png"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GallayItem;
