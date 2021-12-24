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
  if (body.email != null || body.email != undefined) return 1;
  return 0;
};

export const getAdminCheck = () => {
  let body = getCookie();
  if (body.admin == true) return 1;
  return 0;
};

export const getAuthEmail = () => {
  let body = getCookie();
  return body.email;
};
