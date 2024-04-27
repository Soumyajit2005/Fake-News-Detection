import "../styles/home.css";
import video from '../assets/background.mp4';
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div id="main">
        <div id="page1">
          <div className="bottom-page1">
            <h1>Analyze Realtime News <br /> To check Fake or Real</h1>
            <div className="bottom-page1-inner">
              <h4>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Vitae, corporis!</h4>
              <button><Link to="/detection">Get Started</Link></button>
            </div>
          </div>
          <video src={video} autoPlay loop muted></video>
        </div>
      </div>
    </>
  );
};

export default Home;
