import iNetwork from "../../images/iNetwork.png";
import homeio from "../../images/homeio.png";
import dignifiedWiners from "../../images/dignified-winers.png";

export const allProjects = [
  {
    title: "iNetwork",
    url: "https://inetwork.netlify.app/",
    github:"https://github.com/yeezick/iNetwork", 
    img: iNetwork ,
    text: "A casual online alternative to the formal resume, users can submit    their information through a form to render an 'business card.' Full CRUD functionality implemented via AirTable.",
    techs: "React with JS, AOS, and Bootstrap.",
  },
  {
    title: "Home.io",
    url: "https://homeio.netlify.app/",
    github:"https://github.com/yeezick/home.io-v2", 
    img: homeio ,
    text: "Conceptually forked from the iPhone widget screen, home.io gives signed-up users access to a personalized home screen rendering data from up to 7 API’s.",
    techs: "Ruby on Rails and React.",
  },
  {
    title: "Dignified Winers",
    url: "https://dignified-winers.netlify.app/",
    github:"https://github.com/jessa-clark/dignified-winers", 
    img: dignifiedWiners ,
    text: "Dignified Winers was collaboration between 4 talented developers and conceived as a request by a mock-client; a luxury magazine featuring ranked wines while allowing users to sign up and contribute.",
    techs: "the MERN Stack, aided by Insomnia, Heroku, and Netlify.",
  },
]

export default allProjects