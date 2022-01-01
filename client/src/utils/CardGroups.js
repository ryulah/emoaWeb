import React from "react";
import {
  FcCollect,
  FcPositiveDynamic,
  FcTimeline,
  FcRefresh
} from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.css";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
function CardGroups() {
  //   window.$(document).ready(() => {
  //     window.$(".cardItem").hover(
  //       function() {
  //         console.log("hover");
  //         window.$(".cardflipside").css("display", "block");
  //       },
  //       function() {
  //         window.$(".cardflipside").css("display", "none");
  //       }
  //     );
  //   });
  return (
    <div className="CardGroups">
      <Card className="cardItem">
        <FcCollect className="introIcon" />
        <CardBody>
          <CardTitle className="cardTitle">솔루션 제공</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
          <CardText className="cardText">
            프로젝트에 어떤 기술 요소가 필요한지 몰라도 괜찮습니다.
            <br />
            다수의 프로젝트 경험이 있는 전문가가 솔루션부터 제공합니다.
          </CardText>
        </CardBody>
      </Card>
      <Card className="cardItem">
        <FcPositiveDynamic className="introIcon" />
        <CardBody>
          <CardTitle className="cardTitle">성과 창출</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
          <CardText className="cardText">
            잘 알지 못하는 분야에서 성과를 내야 하나요?
            <br />
            또는 유관 업무 프로젝트 경험이 필요하신가요?
            <br />
            도움을 필요로 하는 분들과 이해관계에 맞게 매칭해드립니다.
          </CardText>
        </CardBody>
      </Card>

      <Card className="cardItem">
        <FcTimeline className="introIcon" />
        <CardBody>
          <CardTitle className="cardTitle">자원 관리</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
          <CardText className="cardText">
            프로젝트 진행 시 요구사항과 진행률, 비용 산정까지 관리합니다. <br />
            자원 관리로 시간과 비용, 공수를 아낄 수 있습니다.
          </CardText>
        </CardBody>
      </Card>

      <Card className="cardItem">
        <FcRefresh className="introIcon" />
        <CardBody>
          <CardTitle className="cardTitle">Open Communication</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle> */}
          <CardText className="cardText">
            다른 분야의 전문가와 도움이 필요한 분들의 자유로운 질의 공간입니다.
            <br />
            이곳에서 필요한 정보를 얻고, <br />
            공유하며 자신만의 아카이브를 생성하세요.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardGroups;
