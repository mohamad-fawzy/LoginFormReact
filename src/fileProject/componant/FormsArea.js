import { useState } from "react";
import HalloUser from "./HalloUser";
import Button from "react-bootstrap/Button";
import Login from "./Login";
import SignUp from "./SignUp";



function FormsArea() {
  const [logincontint, setlogincontint] = useState(<HalloUser />);
  
  const contintlogin = function () {
    setlogincontint(<Login />);
  };

  const contintsingup = function () {
    setlogincontint(<SignUp />);
  };

  return (
    <div className="formsArea aniMation">
      {logincontint}
      <div className="btnformArea">
        <Button
          className="loginBtn"
          variant="dark"
          onClick={contintlogin}
        >Login</Button>
        <div className="signUp">
          already have an account
          <Button className="signUpBtn" variant="link" onClick={contintsingup}>
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
}
export default FormsArea;
