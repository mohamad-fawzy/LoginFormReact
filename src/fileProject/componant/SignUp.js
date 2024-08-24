import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router";
import { DataContext } from "./dataProvider";

function SignUp() {
  // State of input fields
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  // State of error messages
  const [onError, setonError] = useState("");
  // navegit to home pg
  let navegitHomeUserPg = useNavigate();

  // navegit to error pg
  let navegitError = useNavigate();

  // Send username by context
  const { sharedData, setSharedData } = useContext(DataContext);

  // Set the value of the useState in the input field to the context value on click
  const formSubmit = (e) => {
    e.preventDefault();
  };
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = () => {
    setSharedData(userName);
    // Email validation
    validateEmail();
    // Input field validation
    if (!userName || !email || !pass || !confirmPass) {
      console.log("1");
      setonError("All fields are required");
      return;
    }
    // Email validation
    if (!validateEmail(email)) {
      setonError("Please enter a valid email address");
      return;
    }

    // Password length
    if (pass.length < 6) {
      setonError("Password must be at least 6 characters long.");
      return;
    }

    // Password match
    if (pass !== confirmPass) {
      setonError("Passwords do not match.");
      return;
    }

    axios
      .post("http://localhost:3000/ussers", {
        userName,
        email,
        pass,
      })
      .then((response) => {
        console.log("Data posted successfully:", response.data);
        navegitHomeUserPg("/HomePage");
      })
      .catch((error) => {
        if (error.response || error.request) {
          // إذا كانت هناك استجابة من السيرفر ولكن بحالة خطأ
          navegitError("/ErrorMaseg");
        }
      });
  };

  return (
    <div className="forms aniMation" userName="mohamed">
      <Form className="mb-3" onSubmit={formSubmit}>
        <Form.Control
          type="text"
          placeholder="Name"
          className="mb-4 forminput"
          onChange={(e) => setuserName(e.target.value)}
        />
        <Form.Control
          type="text"
          placeholder="Email"
          className="mb-4 forminput"
          onChange={(e) => setemail(e.target.value)}
        />
        <Form.Control
          id="floatingInputCustom"
          type="Password"
          placeholder="Password"
          className="mb-4 forminput"
          onChange={(e) => setpass(e.target.value)}
        />
        <Form.Control
          id="floatingInputCustom"
          type="Password"
          placeholder="Confirm Password"
          className="mb-4 forminput"
          onChange={(e) => setconfirmPass(e.target.value)}
        />
        <p className="formError">{onError}</p>
        <Button variant="primary" type="submit" onClick={handleClick}>
          SignUp
        </Button>
      </Form>
    </div>
  );
}
export default SignUp;
