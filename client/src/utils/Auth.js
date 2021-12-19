import { setCookie, getCookie } from "../utils/cookies";
export let authEmail = "";
export let authAdmin = "";

export const setAuthEmail = body => {
  authEmail = body;
};
export const setAuthAdmin = body => {
  authAdmin = body;
};
export const getAuthAdmin = () => {
  let body = getCookie();
  setAuthEmail(body.email);
  setAuthAdmin(body.admin);
  let obj = { _authEmail: body.email, _authAdmin: body.admin };
  return body;
};

export const loginCheck = () => {
  let body = getCookie();
  if (body.email != null || body.emil != undefined) return true;
  return false;
};
