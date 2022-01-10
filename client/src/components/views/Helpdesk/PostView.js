import React, { useState, useEffect } from "react";
import Item from "antd/lib/list/Item";
import axios from "axios";

function PostView(props) {
  //   useEffect(() => {
  //     axios.get();
  //   }, []);
  console.log(props);
  return (
    <div className="postView">
      <div className="viewTable_container">
        <table>
          <tr>
            <th>No.</th>
            <td>{Item.seq}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default PostView;
