import { Link } from "react-router-dom";
import  {BsFillPersonLinesFill} from "react-icons/bs"
import {FaCode} from "react-icons/fa" //close contender FaLaptopCode
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <section className="intro app-section">
        <p className="intro-hello">Hello</p>
        <p className="intro-me">
          I'm Erick, a software engineer. Welcome to my portfolio
        </p>
        <p className="intro-options">What would you like to see first?</p>
      </section>

      <div className="atom">
        <div className="exterior-ring">
          <div className="interior-ring">
            <div className="interior-orbit">
              <Link to="/portfolio" className="interior-circle">
                <BsFillPersonLinesFill size={30}/>
              </Link>
              <Link to="/about" className="interior-circle">
               <FaCode size={40}/>
              </Link>
            </div>
          </div>

          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="nucleus">MyPic</div>
        </div>

        {/* <div className="interior-ring">
          <div className="interior-circle"></div>
          <div className="interior-circle"></div>
        </div> */}

        {/* <div className="nucleus">MyPic</div> */}
      </div>
    </div>
  );
};

export default Landing;
