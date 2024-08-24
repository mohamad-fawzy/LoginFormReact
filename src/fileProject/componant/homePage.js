import Button from 'react-bootstrap/Button';
import { DataContext } from './dataProvider';
import { useContext } from 'react';
import { useNavigate } from "react-router";



export function HomePage() {
    const { sharedData } = useContext(DataContext);
    let navegit = useNavigate();
    const returnForm = () => {
        navegit("/")
    };
    
    
  return (
    <div className="homePageContiner">
        <Button variant="link" className='logOut' onClick={returnForm}> Logout</Button>
      <div className="aniMationPotom">
        <h1>Welcom { sharedData } </h1>
      </div>
    </div>
  );
}
