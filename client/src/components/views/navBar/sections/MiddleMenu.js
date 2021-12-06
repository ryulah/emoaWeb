import React from "react";

function MiddleMenu(props) {
  return (
    <ul class="navbar__menu">
      <li>
        <a href="/">HOME </a>
      </li>
      <li>
        <a href="/login"> login </a>
      </li>
      <li>
        <a href="/register"> register</a>
      </li>
    </ul>
  );
}

export default MiddleMenu;
