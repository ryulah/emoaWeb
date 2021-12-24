import "./App.css";
import LandingPage from "../src/components/views/LandingPage/landingPage";
import NavBar from "./components/views/navBar/NavBar";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/views/loginPage/LoginPage";
import RegisterPage from "./components/views/registerPage/RegisterPage";
import UploadPage from "./components/views/UploadPage/UploadPage";
import UserGallery from "./components/views/gallary/UserGallery";
import Authentication from "././components/hoc/HOC";
import HelpDesk from "./components/views/Helpdesk/Helpdesk";
import Gallery from "./components/views/gallary/Gallery";
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
import { getAdminCheck, getAuthEmail, loginCheck } from "./utils/Auth";

function App() {
  const [authEmail, setAuthEmail] = useState("");
  const [authAdmin, setAuthAdmin] = useState(false);
  var authInfo = { _authEmail: authEmail, _authAdmin: authAdmin };
  useEffect(() => {
    setAuthAdmin(getAdminCheck());
    setAuthEmail(getAuthEmail());
    setAuthAdmin();
  }, [authEmail]);
  var resetPage = flag => {
    console.log("again");
    if (flag == 0) {
      setAuthAdmin(getAdminCheck());
      setAuthEmail(getAuthEmail());
      setAuthAdmin();
    }
  };
  return (
    <div className="App">
      <NavBar authInfo={authInfo} refresh={resetPage} />
      <Router>
        <Routes>
          <Route
            exact={true}
            path={"/"}
            element={<LandingPage authInfo={authInfo} />}
          />
          {/* <Route Component={Authentication(LandingPage, 0, "/")} /> */}
        </Routes>
        <Routes>
          <Route
            exact={true}
            path={"/apply"}
            element={<Gallery authInfo={authInfo} />}
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
