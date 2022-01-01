import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
function MenualClip() {
  return (
    <div>
      <div className="menualClip">
        <div className="mecual__title">
          <h1>프로젝트, 우리와 함께 더욱 선명해집니다.</h1>
          <div className="mecual__detail">
            <p>
              당신의 프로젝트, 더욱 빠르고 분명하게 끝내고 싶다면 시작하세요!
            </p>
          </div>
        </div>
        <Button color="success">사용 가이드</Button>
      </div>
    </div>
  );
}

export default MenualClip;
