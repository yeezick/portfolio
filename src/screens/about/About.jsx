import NasaPod from "../../components/NasaPod/NasaPod"
import map from "../../images/map-zoom-out.png"
import "./about.css";

const About = () => {
  return (
    <div className="screen">
      <div className="about-landing-img">
        <img src={map} alt="my travels" />
      </div>

      <section className="about-story">        <h2 className="section-title">Long Story Short</h2>
        <p className="section-text">
          I am an argentine native, residing in the US for quite literally 95%
          of my life.
          <br />
          I was raised in Union City, New Jersey before I moved to Queens, New
          York. That was shortlived and after 14 years in the North, my father
          was ready for a tropical setting, so we landed in Miami in 2013.
          <br />
          Throughout my life I’ve seen the settings of cities, towns (yes there
          is a difference), beaches, and the wilderness. My experience camping
          and taking deep treks in the woods is a relatively new one but it has
          become a highlight of my life in a world of technology. I believe
          human beings can try their very best but may never cultivate a design
          as seamless and balanced as the mechanics of nature.
        </p>
      </section>

      <section className="about-goals">
        <h2 className="section-title">I have goals</h2>
        <p style={{textAlign:"center"}}>(They tend to be ambitious)</p>
        <div className="list">
          <h3 className="list-title">SHORT-TERM</h3>
          <ul>
            <li>
              Master software development and open doors into software
              archietcture
            </li>
            <li>Travel to Argentina to discover my roots</li>
            <li>Ride a 4-wheeler without crashing it </li>
            <li>
              Train my cat to be a dog. (I want a cat with dog perks no
              judgement please)
            </li>
          </ul>
        </div>
        <div className="list">
          <h3 className="list-title">LONG-TERM</h3>
          <ul>
            <li>Help my family reach financial independence</li>
            <li>
              Contribute to humanity’s advancements in technology in a
              revolutionary way
            </li>
            <li>Visit outer space!!!</li>
          </ul>
        </div>
      </section>

      <section className="about-glimpse">
        <h2 className="section-title">A Glimpse into my Life</h2>
        <h3 className="section-subtitle">Sometimes pictures say a thousand words</h3>
        <h5>Carousel with images goes here</h5>
      </section>

      <section className="about-farewell">
        <h2 className="section-title">
          Farewell <small>(/ˌferˈwel/)</small>
        </h2>
        <h3 className="section-subtitle">
          <i>exclamation</i> -
          used to express good wishes on parting.
        </h3>
        <p className="section-text">
          While goodbyes are never easy, I’m also not one to depart without a
          thank you. Whether it was for your time or your knowledge, thank you
          for taking the time to get to know me a little deeper. I would love to
          share one more thing with you before you go: my deep admiration for
          space. Among everything that exists naturally, the fragile fabric of
          our existence is possible only by the extraordinary events that both
          precede and outlast time. It truly is humanity’s greatest frontier and
          my heart goes out to the brave people and fellow admirers that
          dedicate their lives to satiating the curiosity of the great beyond.
          <br />
          Without further ado, I share with you one of my personal favorite API’s..
        </p>
        <h3 className="section-title">NASA’s Astronomy Picture of the
          Day</h3>
<NasaPod/>  
    </section>
    </div>
  );
};

export default About;
