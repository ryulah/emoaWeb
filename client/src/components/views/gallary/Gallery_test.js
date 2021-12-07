import React, { useState, useEffect } from "react";
import axios from "axios";
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

function Gallery_test(props) {
  return (
    <div style={{ height: "100px" }}>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <div className="listDetail">
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li style={{ margin: "1px" }}>
                <img
                  style={{
                    width: "30%"
                  }}
                  src={"http://localhost:5001/resources/images/test.png"}
                />
              </li>
              <li style={{ margin: "1px" }}>
                <img
                  style={{
                    width: "30%"
                  }}
                  src={"http://localhost:5001/resources/images/test.png"}
                />
              </li>
            </ul>
          </div>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>입찰하기</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Gallery_test;
