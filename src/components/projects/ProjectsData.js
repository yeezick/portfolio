// projects
import iNetwork from "../../images/projects/iNetwork.png";
import homeioV2 from "../../images/projects/homeioV2.png";
import homeioV1 from "../../images/projects/homeioV1.png";
import dignifiedWiners from "../../images/projects/dignified-winers.png";
// side projects
import notAnotherTodoApp from "../../images/sideProjects/notAnotherTodoApp.png";
import embc from "../../images/sideProjects/embc.png";
import firstPortfolio from "../../images/sideProjects/firstPortfolio.png";
import fccRwdTribute from "../../images/sideProjects/fcc-rwd-tribute.png";
import fccRwdSurvey from "../../images/sideProjects/fcc-rwd-survey.png";
import fccRwdProductLanding from "../../images/sideProjects/fcc-rwd-product-landing.png";

// tutorials
import diceGame from "../../images/tutorials/diceGame.png";
import drumKitjQuery from "../../images/tutorials/drumKitjQuery.png";
import drumKitDOM from "../../images/tutorials/drumKitDOM.png";
import simon from "../../images/tutorials/simon.png";
import cssClock from "../../images/tutorials/cssClock.png";
import cssVariables from "../../images/tutorials/cssVariables.png";
import firstCSS from "../../images/tutorials/firstCSS.png";
import firstHtml from "../../images/tutorials/firstHtml.png";

const projects = [
  {
    date: new Date("06-14-2021"),
    category: {
      tag: "Project",
      color: "gold",
    },
    // featured: true,
    img: homeioV1,
    techs: "HTML, CSS, JavaScript DOM, API Integration",
    text: "First project for General Assembly's SEI. Inspired by iPhone widget screen, app deploys user to a 'home' screen which calls 3 API's to render data to the user.",
    title: "Home.io V1",
    link: {
      github: "https://github.com/yeezick/home.io",
      url: "https://home-io-v1.netlify.app/",
      text: "Website",
    },
  },
  {
    date: new Date("07-07-2021"),
    category: {
      tag: "Project",
      color: "gold",
    },
    // featured: true,
    img: iNetwork,
    techs: "React with JS, AOS, and Bootstrap.",
    text: "A casual online alternative to the formal resume, users can submit their information through a form to render an 'business card.' Full CRUD functionality implemented via AirTable.",
    title: "iNetwork",
    link: {
      github: "https://github.com/yeezick/iNetwork",
      url: "https://inetwork.netlify.app/",
      text: "Website",
    },
  },
  {
    date: new Date("08-18-2021"),
    category: {
      tag: "Project",
      color: "gold",
    },
    // featured: true,
    img: homeioV2,
    techs: "Ruby on Rails and React.",
    text: "Conceptually forked from the iPhone widget screen, home.io gives signed-up users access to a personalized home screen rendering data from up to 7 API’s.",
    title: "Home.io 2.0.0",
    link: {
      github: "https://github.com/yeezick/home.io-v2",
      text: "Website",
      url: "https://homeio.netlify.app/",
    },
  },
  {
    date: new Date("07-28-2021"),
    category: {
      tag: "Project",
      color: "gold",
    },
    // featured: true,
    img: dignifiedWiners,
    techs: "the MERN Stack, aided by Insomnia, Heroku, and Netlify.",
    text: "Dignified Winers was collaboration between 4 talented developers and conceived as a request by a mock-client; a luxury magazine featuring ranked wines while allowing users to sign up and contribute.",
    title: "Dignified Winers",
    link: {
      github: "https://github.com/jessa-clark/dignified-winers",
      text: "Website",
      url: "https://dignified-winers.netlify.app/",
    },
  },
  {
    date: new Date("01-06-2022"),
    category: {
      tag: "Project",
      color: "gold",
    },
    // featured: true,
    // img: notAnotherTodoApp,
    techs:
      "Back-end: MongoDB, Node.js, Express.js \n Front-end: React, Redux, SCSS",
    text: "A networking platform for bootcamp graduates. Connecting software engineers with UX designers to build professional projects.",
    title: "Bootcamper",
    link: {
      github: "https://github.com/yeezick/Bootcamper",
      text: "website",
      url: "https://github.com/yeezick/Bootcamper",
    },
  },
];

/**
 * nextjs(incomplete)
 * robot arena (incomplete)
 * redux-todo (incomplete)
 * cli-portfolio-generator (?)
 */

const tutorials = [
  {
    date: new Date("04-28-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: firstHtml,
    techs: "HTML",
    text: "This website is a very simple page meant to solidy my understanding of HTML. It include very simple elements and is styled entirely with HTML.",
    title: "First site ever",
    link: {
      github: "https://github.com/yeezick/html-intermediate",
      text: "Website",
      url: "https://yeezick.github.io/html-intermediate/",
    },
  },
  {
    date: new Date("04-29-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: firstCSS,
    techs: "HTML & CSS",
    text: "This webpage utilizes basic HTML and CSS. It is a practice page meant to utilize CSS skills that were fresh-learned.",
    title: "First styled site ever",
    link: {
      github: "https://github.com/yeezick/css-intermediate",
      text: "Website",
      url: "https://yeezick.github.io/css-intermediate/",
    },
  },
  {
    date: new Date("04-30-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: drumKitDOM,
    techs: "HTML, CSS, JavaScript DOM",
    text: "This repository consists of a drum kit applied using only vanilla javascript and its handling of the DOM model.",
    title: "Drum kit (DOM)",
    link: {
      github: "https://github.com/yeezick/drum-kit-vanilla-js",
      text: "Website",
      url: "https://yeezick.github.io/drum-kit-vanilla-js/",
    },
  },
  {
    date: new Date("05-02-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: diceGame,
    techs: "HTML, CSS, JavaScript DOM",
    text: "This game uses vanilla JavaScript and the DOM to create an online dice roll. The player who's dice value is greater wins. Good for 2 people settling a dispute.",
    title: "Dice Game",
    link: {
      github: "https://github.com/yeezick/dice-game",
      text: "Website",
      url: "https://yeezick.github.io/dice-game/",
    },
  },
  {
    date: new Date("05-04-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: cssVariables,
    techs: "HTML, CSS, JavaScript DOM",
    text: "This site has input types which allow the user to change 3 CSS variables in a user-friendly way, while actually manipulating the variables using JavaScript.",
    title: "CSS Variables",
    link: {
      github: "https://github.com/yeezick/css-variables",
      text: "Website",
      url: "https://yeezick.github.io/css-variables/",
    },
  },
  {
    date: new Date("05-04-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: drumKitjQuery,
    techs: "HTML, CSS, JavaScript DOM",
    text: "This is a drum kit that utilizes jQuery to detect mouse and keyboard inputs in order to generate the appropriate sound.",
    title: "Drum Kit (jQuery)",
    link: {
      github: "https://github.com/yeezick/drum-kit-jquery",
      text: "Website",
      url: "https://yeezick.github.io/drum-kit-jquery/",
    },
  },
  {
    date: new Date("05-05-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: simon,
    techs: "HTML, CSS, JavaScript, jQuery",
    text: "This an online game called, 'Simon', where the browser highlights a color and pushes it to an array. The user must then produce all of Simon's previous choices + his latest one.",
    title: "Simon Game",
    link: {
      github: "https://github.com/yeezick/simon-game",
      text: "Website",
      url: "https://yeezick.github.io/simon-game/",
    },
  },
  {
    date: new Date("06-22-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    img: cssClock,
    techs: "HTML, CSS, JavaScript DOM",
    text: "This websites contains an analog clock designed in CSS with vanilla JavaScript functionality to keep an accurate time relative to user.",
    title: "CSS Clock",
    link: {
      github: "https://github.com/yeezick/css-clock",
      text: "Website",
      url: "https://yeezick.github.io/css-clock/",
    },
  },
];
/* side-work:
 * fcc-rwd-product-landing
 * fcc-survey
 * fcc-tribute
 * first-portfolio
 * embc
 */
const sideWork = [
  {
    date: new Date("05-07-2021"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: embc,
    techs: "HTML & CSS",
    text: "This file contains the HTML, & CSS for Erick Manrique's first & constantly evolving business card.",
    title: "E-Business Card",
    link: {
      github: "https://github.com/yeezick/emBusinessCard",
      text: "Website",
      url: "https://yeezick.github.io/emBusinessCard/",
    },
  },
  {
    date: new Date("05-20-2021"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: fccRwdTribute,
    techs: "HTML & CSS",
    text: "For FreeCodeCamp's responsive web design certificate, I was asked to make a tribute page using basic HTML and CSS.",
    title: "FreeCodeCamp Tribute Page",
    link: {
      github: "https://github.com/yeezick/fcc-rwd-tribute",
      text: "Website",
      url: "https://yeezick.github.io/fcc-rwd-tribute/",
    },
  },
  {
    date: new Date("05-10-2021"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: firstPortfolio,
    techs: "HTML & CSS",
    text: "My first portfolio site prior to enrolling into General Assembly, summarizing my progress from March to May of 2021.",
    title: "First Portfolio",
    link: {
      github: "https://github.com/yeezick/firstPortfolio",
      text: "Website",
      url: "https://yeezick.github.io/firstPortfolio/",
    },
  },
  {
    date: new Date("09-20-2021"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: fccRwdSurvey,
    techs: "HTML & CSS",
    text: "My take on the survey form page requested by FreeCodeCamp's responsive web design certification.",
    title: "FreeCodeCamp Survey Page",
    link: {
      github: "https://github.com/yeezick/fcc-rwd-survey",
      text: "Website",
      url: "https://yeezick.github.io/fcc-rwd-survey/",
    },
  },
  {
    date: new Date("09-22-2021"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: fccRwdProductLanding,
    techs: "HTML & CSS",
    text: "My take on the survey form page requested by FreeCodeCamp's responsive web design certification.",
    title: "FreeCodeCamp Product Landing Page",
    link: {
      github: "https://github.com/yeezick/fcc-rwd-product-landing",
      text: "Website",
      url: "https://yeezick.github.io/fcc-rwd-product-landing/",
    },
  },
  {
    date: new Date("01-04-2022"),
    category: {
      tag: "Side Project",
      color: "orange",
    },
    // featured: true,
    img: notAnotherTodoApp,
    techs: "HTML & CSS",
    text: "I was challenged by a mentor of mine to build a todo app from scratch, no tutorials. This was the result!",
    title: "Not Another Todo App",
    link: {
      github: "https://github.com/yeezick/react-todo",
      text: "Website",
      url: "https://yeezick.github.io/react-todo/",
    },
  },
];

const incomplete = [
  {
    date: new Date("11-10-2021"),
    category: {
      tag: "Tutorial",
      color: "#018f69",
    },
    // featured: true,
    // img: notAnotherTodoApp,
    techs: "HTML, CSS, JavaScript DOM",
    text: "Todo list created by following the Redux tutorial.",
    title: "Redux Todo",
    link: {
      github: "https://github.com/yeezick/redux-todo-list",
      text: "Website",
      url: "https://github.com/yeezick/redux-todo-list",
    },
  },
];
const allOfProjects = [...projects, ...sideWork, ...tutorials];

const sortList = (list) => {
  const sortedList = list.sort((a, b) =>
    new Date(a.date) < new Date(b.date) ? 1 : -1
  );
  return sortedList;
};

const sortedProjects = sortList(allOfProjects);
const options = { month: "long", day: "numeric", year: "numeric" };
export const allProjects = sortedProjects.map((project) => {
  const readableDate = project.date.toLocaleDateString("en-US", options);
  return { ...project, date: readableDate };
});

/*
const allSortedProjects = [
  {
    date: 2022-02-06T05:00:00.000Z,
    category: { tag: 'Project', color: 'gold' },
    techs: 'Back-end: MongoDB, Node.js, Express.js \n Front-end: React, Redux, SCSS',
    text: 'A networking platform for bootcamp graduates. Connecting software engineers with UX designers to build professional projects.',
    title: 'Bootcamper',
    link: {
      github: 'https://github.com/yeezick/Bootcamper',
      text: 'website',
      url: 'https://github.com/yeezick/Bootcamper'
    }
  },
  {
    date: 2022-02-04T05:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: 'I was challenged by a mentor of mine to build a todo app from scratch, no tutorials. This was the result!',
    title: 'Not Another Todo App',
    link: {
      github: 'https://github.com/yeezick/react-todo',
      text: 'Website',
      url: 'https://yeezick.github.io/react-todo/'
    }
  },
  {
    date: 2021-10-22T04:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: "My take on the survey form page requested by FreeCodeCamp's responsive web design certification.",
    title: 'FreeCodeCamp Product Landing Page',
    link: {
      github: 'https://github.com/yeezick/fcc-rwd-product-landing',
      text: 'Website',
      url: 'https://yeezick.github.io/fcc-rwd-product-landing/'
    }
  },
  {
    date: 2021-10-20T04:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: "My take on the survey form page requested by FreeCodeCamp's responsive web design certification.",
    title: 'FreeCodeCamp Survey Page',
    link: {
      github: 'https://github.com/yeezick/fcc-rwd-survey',
      text: 'Website',
      url: 'https://yeezick.github.io/fcc-rwd-survey/'
    }
  },
  {
    date: 2021-09-18T04:00:00.000Z,
    category: { tag: 'Project', color: 'gold' },
    techs: 'Ruby on Rails and React.',
    text: 'Conceptually forked from the iPhone widget screen, home.io gives signed-up users access to a personalized home screen rendering data from up to 7 API’s.',
    title: 'Home.io 2.0.0',
    link: {
      github: 'https://github.com/yeezick/home.io-v2',
      text: 'Website',
      url: 'https://homeio.netlify.app/'
    }
  },
  {
    date: 2021-08-28T04:00:00.000Z,
    category: { tag: 'Project', color: 'gold' },
    techs: 'the MERN Stack, aided by Insomnia, Heroku, and Netlify.',
    text: 'Dignified Winers was collaboration between 4 talented developers and conceived as a request by a mock-client; a luxury magazine featuring ranked wines while allowing users to sign up and contribute.',
    title: 'Dignified Winers',
    link: {
      github: 'https://github.com/jessa-clark/dignified-winers',
      text: 'Website',
      url: 'https://dignified-winers.netlify.app/'
    }
  },
  {
    date: 2021-08-07T04:00:00.000Z,
    category: { tag: 'Project', color: 'gold' },
    techs: 'React with JS, AOS, and Bootstrap.',
    text: "A casual online alternative to the formal resume, users can submit their information through a form to render an 'business card.' Full CRUD functionality implemented via AirTable.",
    title: 'iNetwork',
    link: {
      github: 'https://github.com/yeezick/iNetwork',
      url: 'https://inetwork.netlify.app/',
      text: 'Website'
    }
  },
  {
    date: 2021-07-22T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript DOM',
    text: 'This websites contains an analog clock designed in CSS with vanilla JavaScript functionality to keep an accurate time relative to user.',
    title: 'CSS Clock',
    link: {
      github: 'https://github.com/yeezick/css-clock',
      text: 'Website',
      url: 'https://yeezick.github.io/css-clock/'
    }
  },
  {
    date: 2021-07-14T04:00:00.000Z,
    category: { tag: 'Project', color: 'gold' },
    techs: 'HTML, CSS, JavaScript DOM, API Integration',
    text: "First project for General Assembly's SEI. Inspired by iPhone widget screen, app deploys user to a 'home' screen which calls 3 API's to render data to the user.",
    title: 'Home.io V1',
    link: {
      github: 'https://github.com/yeezick/home.io',
      url: 'https://home-io-v1.netlify.app/',
      text: 'Website'
    }
  },
  {
    date: 2021-06-20T04:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: "For FreeCodeCamp's responsive web design certificate, I was asked to make a tribute page using basic HTML and CSS.",
    title: 'FreeCodeCamp Tribute Page',
    link: {
      github: 'https://github.com/yeezick/fcc-rwd-tribute',
      text: 'Website',
      url: 'https://yeezick.github.io/fcc-rwd-tribute/'
    }
  },
  {
    date: 2021-06-10T04:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: 'My first portfolio site prior to enrolling into General Assembly, summarizing my progress from March to May of 2021.',
    title: 'First Portfolio',
    link: {
      github: 'https://github.com/yeezick/firstPortfolio',
      text: 'Website',
      url: 'https://yeezick.github.io/firstPortfolio/'
    }
  },
  {
    date: 2021-06-07T04:00:00.000Z,
    category: { tag: 'Side Project', color: 'orange' },
    techs: 'HTML & CSS',
    text: "This file contains the HTML, & CSS for Erick Manrique's first & constantly evolving business card.",
    title: 'Simon Game',
    link: {
      github: 'https://github.com/yeezick/emBusinessCard',
      text: 'Website',
      url: 'https://yeezick.github.io/emBusinessCard/'
    }
  },
  {
    date: 2021-06-05T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript, jQuery',
    text: "This an online game called, 'Simon', where the browser highlights a color and pushes it to an array. The user must then produce all of Simon's previous choices + his latest one.",
    title: 'Simon Game',
    link: {
      github: 'https://github.com/yeezick/simon-game',
      text: 'Website',
      url: 'https://yeezick.github.io/simon-game/'
    }
  },
  {
    date: 2021-06-04T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript DOM',
    text: 'This is a drum kit that utilizes jQuery to detect mouse and keyboard inputs in order to generate the appropriate sound.',
    title: 'Drum Kit (jQuery)',
    link: {
      github: 'https://github.com/yeezick/drum-kit-jquery',
      text: 'Website',
      url: 'https://yeezick.github.io/drum-kit-jquery/'
    }
  },
  {
    date: 2021-06-04T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript DOM',
    text: 'This site has input types which allow the user to change 3 CSS variables in a user-friendly way, while actually manipulating the variables using JavaScript.',
    title: 'CSS Variables',
    link: {
      github: 'https://github.com/yeezick/css-variables',
      text: 'Website',
      url: 'https://yeezick.github.io/css-variables/'
    }
  },
  {
    date: 2021-06-02T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript DOM',
    text: "This game uses vanilla JavaScript and the DOM to create an online dice roll. The player who's dice value is greater wins. Good for 2 people settling a dispute.",
    title: 'Dice Game',
    link: {
      github: 'https://github.com/yeezick/dice-game',
      text: 'Website',
      url: 'https://yeezick.github.io/dice-game/'
    }
  },
  {
    date: 2021-05-30T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML, CSS, JavaScript DOM',
    text: 'This repository consists of a drum kit applied using only vanilla javascript and its handling of the DOM model.',
    title: 'Drum kit (DOM)',
    link: {
      github: 'https://github.com/yeezick/drum-kit-vanilla-js',
      text: 'Website',
      url: 'https://yeezick.github.io/drum-kit-vanilla-js/'
    }
  },
  {
    date: 2021-05-29T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML & CSS',
    text: 'This webpage utilizes basic HTML and CSS. It is a practice page meant to utilize CSS skills that were fresh-learned.',
    title: 'First styled site ever',
    link: {
      github: 'https://github.com/yeezick/css-intermediate',
      text: 'Website',
      url: 'https://yeezick.github.io/css-intermediate/'
    }
  },
  {
    date: 2021-05-28T04:00:00.000Z,
    category: { tag: 'Tutorial', color: '#018f69' },
    techs: 'HTML',
    text: 'This website is a very simple page meant to solidy my understanding of HTML. It include very simple elements and is styled entirely with HTML.',
    title: 'First site ever',
    link: {
      github: 'https://github.com/yeezick/html-intermediate',
      text: 'Website',
      url: 'https://yeezick.github.io/html-intermediate/'
    }
  }
]
*/
