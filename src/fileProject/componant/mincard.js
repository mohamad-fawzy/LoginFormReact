import FormsArea from "./FormsArea";
import HalloUser from "./HalloUser";




function ControlArea({ children }) {
  return (
    <div className="ControlArea">
      { children }
    </div>
  );
}




function BackgroundStayle({ children }) {
  return (
    <div className="allstyle">
      <div className="astyle shadow"></div>
      <div className="bstyle shadow"></div>
      <div className="cstyle shadow"></div>
      {children}
    </div>
  );
}


function MainCard() {
  
  return (
    <div className="card shadow ">
      <BackgroundStayle>
        <ControlArea>
          <FormsArea>
              <HalloUser>

              </HalloUser>
            </FormsArea>
        </ControlArea>
      </BackgroundStayle>
    </div>
  );
}
export default MainCard;
