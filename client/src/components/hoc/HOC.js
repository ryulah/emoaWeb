import React from "react";
import { loginCheck, adminCheck, getAuthEmail } from "../../utils/Auth";
import { withRouter } from "react-router-dom";
function HOC(SpecificComponent, enterFlag, url) {
  // console.log("######hoc######", url);
  // //enter flag 2:only admin user(login + admin) , 1:login checked(login user), 0:guest (nothing)
  // const user = loginCheck();
  // const admin = adminCheck();
  // const authEmail = getAuthEmail();
  // var authInfo = { _authEmail: authEmail, _authAdmin: admin, _user: user };
  // console.log("######hoc######", url);
  // if (enterFlag < 1)
  //   return <SpecificComponent authInfo={authInfo} redirectTo={url} />;
}

export default HOC;
