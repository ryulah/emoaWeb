import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import CardGroups from "../../../utils/CardGroups";

function IntroducdClip() {
  return (
    <div className="IntroduceClip">
      <div className="Introduce__title">
        <h1>가치있는 솔루션을 제공합니다.</h1>
        <div className="Introduce__detail">
          <p>우리와 함께, 성과를 관리하세요.</p>
        </div>
      </div>

      <CardGroups />
    </div>
  );
}

export default IntroducdClip;
