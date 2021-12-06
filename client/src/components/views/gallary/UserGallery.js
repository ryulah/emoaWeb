import React, { useState, useEffect } from "react";
import axios from "axios";
function UserGallery(props) {
  const authEmail = props.authInfo._authEmail;
  const [itemCount, setItemCount] = useState("");
  const [items, setItems] = useState([]);
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
      <p>{authEmail} 's Gallery</p>
      <br />
      <br />

      {itemCount < 1 && <p>텅~!</p>}
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
