import "./App.css";
import LandingPage from "../src/components/views/LandingPage/landingPage";
import NavBar from "./components/views/navBar/NavBar";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/views/loginPage/LoginPage";
import RegisterPage from "./components/views/registerPage/RegisterPage";
import UploadPage from "./components/views/UploadPage/UploadPage";
import UserGallery from "./components/views/gallary/UserGallery";
import HelpDesk from "./components/views/Helpdesk/Helpdesk";
import {
  authEmail,
  authAdmin,
  setAuthEmail,
  setAuthAdmin,
  getAuthAdmin
} from "./utils/Auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { getCookie } from "./utils/cookies";
import react, { Component, useState, useEffect } from "react";
import { userAdmin } from "./utils/Auth";
import UserInfo from "./components/views/userInfo/UserInfo";

function App() {
  const [authEmail, setAuthEmail] = useState("");
  const [authAdmin, setAuthAdmin] = useState(false);
  var authInfo = { _authEmail: authEmail, _authAdmin: authAdmin };
  useEffect(() => {
    var auth = getCookie();
    console.log("root page user check", auth);
    if (auth.email !== null) {
      if (auth.admin === true) {
        console.log("Admin checked : ", auth.email);
        setAuthAdmin(true);
      } else {
        console.log("public user : ", auth.email);
      }
      setAuthEmail(auth.email);
    } else {
      console.log("need to login or sign up");
    }
  }, []);

  return (
    <div className="App">
      <NavBar authInfo={authInfo} />
      <Router>
        <Routes>
          <Route
            exact={true}
            path={"/"}
            element={<LandingPage authInfo={authInfo} />}
          />
        </Routes>
        <Routes>
          <Route
            exact={true}
            path={"/login"}
            element={<LoginPage authInfo={authInfo} />}
          />
        </Routes>
        <Routes>
          <Route
            exact={true}
            path={"/register"}
            element={<RegisterPage authInfo={authInfo} />}
          />
        </Routes>
        <Routes>
          <Route
            exact={true}
            path={"/upload"}
            element={<UploadPage authInfo={authInfo} />}
          />
        </Routes>
        <Routes>
          <Route
            exact={true}
            path={"/mygallery"}
            element={<UserGallery authInfo={authInfo} />}
          />
        </Routes>
        <Routes>
          <Route exact={true} path={"/helpdesk"} element={<HelpDesk />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
