import { useState } from "react";
import { Route } from "react-router";

// components
import Layout from "./layout/layout/Layout.jsx";
import Landing from "./screens/landing/Landing";
import About from "./screens/about/About";
import Portfolio from "./screens/portfolio/Portfolio";
import Sidebar from "./components/sidebar/Sidebar";
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
    </Layout>
  );
}

export default App;
