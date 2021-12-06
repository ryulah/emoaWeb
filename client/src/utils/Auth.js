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
};
