import React from "react";

function MiddleMenu(props) {
  return (
    <ul className="navbar__menu">
      <li>
        <a href="/">HOME </a>
      </li>
      <li>
        <a href="/login"> login </a>
      </li>
      <li>
        <a href="/register"> register</a>
      </li>
      <li>
        <a href="/upload"> upload Sourcing(발주하기!)</a>
      </li>
      <li>
        <a href="/mygallery"> My Gallery</a>
      </li>
      <li>
        <a href="/helpdesk"> HELP DESK</a>
      </li>
    </ul>
  );
}

export default MiddleMenu;
