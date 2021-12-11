import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const setCookie = (email, admin) => {
  console.log("set cookies");
  cookies.set("email", email);
  cookies.set("admin", admin);
  return true;
};
export const getCookie = () => {
  const Email = cookies.get("email");
  const Admin = cookies.get("admin");
  let body = { email: Email, admin: Admin };
  return body;
};
