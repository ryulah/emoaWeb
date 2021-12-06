import React from "react";
import { RedditOutlined, RocketOutlined } from "@ant-design/icons";
function LeftMenu() {
  return (
    <div>
      <div class="navbar__logo">
        <a href="/" style={{ "font-size": "50px" }}>
          <RocketOutlined />
        </a>
      </div>
    </div>
  );
}

export default LeftMenu;
