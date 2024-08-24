import axios from "axios";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "./dataProvider";

function Login() {
  const [emailVAL, setemailVAL] = useState("");
  const [passVAL, setPassVAL] = useState("");
  const [apidata, setapidata] = useState([]);
  const [onError, setonError] = useState("");



  const { sharedData, setSharedData } = useContext(DataContext);

  let navegit = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setapidata(res.data));
  }, []);

  const onclickptn = (e) => {
    e.preventDefault();
    const user = apidata.find((user) => user.email === emailVAL);

    if (user && user.pass === passVAL) {
      console.log("done");
      setSharedData(user.userName);
      navegit("/HomePage");
    } else {
      console.log("not");
      setonError('Please check your email and password and try again')
    }

    console.log(user);
    console.log(emailVAL);
    console.log(passVAL);
  };

  return (
    <div className="forms aniMation">
      <Form>
        <Form.Control
          type="email"
          placeholder="email"
          className="mb-4 forminput"
          onChange={(e) => setemailVAL(e.target.value)}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          className="mb-4 forminput"
          onChange={(e) => setPassVAL(e.target.value)}
        />
        <p className="formError">{onError}</p>

        <Button variant="primary" type="submit" onClick={onclickptn}>
          LogIn
        </Button>
      </Form>
    </div>
  );
}
export default Login;
