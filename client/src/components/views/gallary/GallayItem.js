import React from "react";
import "bootstrap/dist/css/bootstrap.css";

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
function GallayItem(props) {
  return (
    <div style={{ border: "1px solid gray" }}>
      <div style={{ display: "flex", marginLeft: "20px" }}>
        <img
          style={{
            minWidth: "300px",
            width: "300px",
            height: "240px",
            display: "flex",
            margin: "15px"
          }}
          src={"http://localhost:5001/resources/images/test.png"}
        />
        <ul style={{ display: "flex", listStyle: "none", margin: "15px" }}>
          <li style={{ margin: "5px" }}>
            <img
              style={{
                width: "50%",
                height: "50%"
              }}
              src={"http://localhost:5001/resources/images/test.png"}
            />
          </li>
          <li style={{ margin: "5px" }}>
            <img
              style={{
                width: "50%",
                height: "50%"
              }}
              src={"http://localhost:5001/resources/images/test.png"}
            />
          </li>
        </ul>
      </div>
      <CardBody>
        <CardTitle style={{ fontSize: "5px" }}>
          #삽니다 #발주 #졸업과제 #스터디 #퍼블리셔
        </CardTitle>
        <CardSubtitle tag="h4">sourcing 명칭 : naver_prj1</CardSubtitle>
        <br />
        <CardText>
          8page 분량 웹 퍼블리셔 발주합니다. 자세한 스펙 및 코드는 입찰 후
          개인적으로 연락드리겠습니다.
        </CardText>
        <Button color="primary">입찰하기</Button>
      </CardBody>
    </div>
  );
}

export default GallayItem;
