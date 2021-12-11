import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { UncontrolledCarousel } from "reactstrap";
function Carousel() {
  return (
    <div className="gallery__carousel">
      <UncontrolledCarousel
        items={[
          {
            key: 1,
            src: "http://localhost:5001/_resources/images/ad1.jpg"
          },
          {
            key: 2,
            src: "http://localhost:5001/_resources/images/ad2.jpg"
          },
          {
            key: 3,
            src: "http://localhost:5001/_resources/images/ad3.jpg"
          }
        ]}
      />
    </div>
  );
}

export default Carousel;
