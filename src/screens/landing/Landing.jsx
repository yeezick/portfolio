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
              <div className="interior-circle"></div>
              <div className="interior-circle"></div>
            </div>
          </div>

          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle">About</div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle"></div>
          <div className="exterior-circle">Work</div>
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
