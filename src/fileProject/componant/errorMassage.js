import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

// error maseg  issue with accessing the server

function ErrorMaseg (){
    let navegit = useNavigate();
    const returnForm = () => {
        navegit("/")
    };

    
    return(
        <div>
           <h4>OOPS , It seems there is an issue with accessing the server</h4> 
           <Button variant="link" className='logOut' onClick={returnForm}>Try again</Button>
        </div>
    )
}

export default ErrorMaseg