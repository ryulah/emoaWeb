import React, { useState, useEffect } from "react";
import axios from "axios";
function Gallery(props) {
  const authEmail = props.authInfo._authEmail;
  const [itemCount, setItemCount] = useState("");
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`/server/user/getUserIcons?user_id=${authEmail}&mode=1`)
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
      {itemCount < 1 && <h1 style={{ "font-size": "100px" }}>텅..</h1>}
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

export default Gallery;
