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
  return (
    <div className="itemContainter">
      <div className="thumbnailContainer">
        <img
          src={"http://localhost:5001/_resources/images/" + props.thumbnail}
        />
      </div>
      <div className="detailContainer">
        <div className="datailScript">
          <CardBody style={{ margin: "10px" }}>
            <CardTitle>{props.user_id}</CardTitle>
            <CardSubtitle tag="h4">
              sourcing 명칭 : {props.bundleTag}
            </CardSubtitle>
            <br />
            <CardText>{props.bundleDetail}</CardText>
          </CardBody>
        </div>
        <div className="detailImg">
          <ul>
            <li>
              {props.allItem &&
                props.allItem.map(item => {
                  if (props.bundleSeq == item.bundleSeq) {
                    return (
                      <img
                        src={
                          "http://localhost:5001/_resources/images/" +
                          item.savedFile
                        }
                      />
                    );
                  }
                })}
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
