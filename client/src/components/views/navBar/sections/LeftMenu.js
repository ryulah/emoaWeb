import React from "react";
import { RedditOutlined, RocketOutlined } from "@ant-design/icons";
function LeftMenu() {
  return (
    <div>
      <div className="navbar__logo">
        <a href="/" style={{ "font-size": "50px" }}>
          <RocketOutlined />
          <p>emoa moa</p>
        </a>
      </div>
    </div>
  );
}

export default LeftMenu;
