import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../../resources/css/gallaryItem.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardSubtitle
} from "reactstrap";
import { element } from "prop-types";
function GallayItem(props) {
  //console.log(props.itemList);
  let list = props.itemList;
  return (
    <div className="itemContainter">
      <div className="thumbnailContainer">
        <img src={"http://localhost:5001/_resources/images/test.png"} />
      </div>
      <div className="detailContainer">
        <div className="datailScript">
          <CardBody style={{ margin: "10px" }}>
            <CardTitle>#삽니다 #발주 #졸업과제 #스터디 #퍼블리셔</CardTitle>
            <CardSubtitle tag="h4">sourcing 명칭 : naver_prj1</CardSubtitle>
            <br />
            <CardText>
              8page 분량 웹 퍼블리셔 발주합니다. 자세한 스펙 및 코드는 입찰 후
              개인적으로 연락드리겠습니다.
            </CardText>
          </CardBody>
        </div>
        <div className="detailImg">
          <ul>
            <li>
              <img src={"http://localhost:5001/_resources/images/test.png"} />
            </li>
          </ul>
        </div>
      </div>
      <div className="buttonContainer">
        <Button className="attndBtn" color="primary">
          입찰
        </Button>
      </div>
    </div>
  );
}

export default GallayItem;
