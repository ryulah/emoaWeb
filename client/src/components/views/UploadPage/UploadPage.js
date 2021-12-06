import React from "react";
import UploadUtil from "../../../utils/UploadUtil";
function UploadPage(props) {
  return (
    <div>
      <UploadUtil authInfo={props.authInfo} />
    </div>
  );
}

export default UploadPage;
