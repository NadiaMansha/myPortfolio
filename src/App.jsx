import { useState } from "react";
import { BrowserRouter, BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Projects,
  About,
  Homepage,
} from "./components";
import "antd/dist/reset.css";
import "./App.css";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectCard />} />
        </Routes>
        </Layout>
     
      </div>
    
   {/*    <div className="footer">
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
      </div> */}
    </div>
  );
}

export default App;
