import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Projects,
  About,
  Homepage,
} from "./components";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          All rights reserved
        </Typography.Title>
        <Space className="space">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
