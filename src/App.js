import { Route } from "react-router";

// screens
import Landing from "./screens/landing/Landing";
import About from "./screens/about/About";
import Portfolio from "./screens/portfolio/Portfolio";
import Testing from "./screens/testing/testing.jsx"
// assets
import Layout from "./layout/layout/Layout.jsx";
import Sidebar from "./components/sidebar/Sidebar";
import Particles from "react-particles-js";

import particleData from "./particlesjs-config.json";
import "./App.css";

function App() {
  return (
      <Layout className="App">
        <Sidebar />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/testing">
          <Testing />
        </Route>
        <Particles id="particles-js" params={particleData} />
      </Layout>
  );
}

export default App;
