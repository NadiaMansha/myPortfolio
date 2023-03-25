import React from "react";

import { BrowserRouter, Link, Route } from "react-router-dom";
import { Typography, Card, Row, Col, Statistic, Button } from "antd";
import Skills from "./Skills";
const { Title } = Typography;
import { GithubOutlined, InstagramFilled, LinkedinOutlined, MailOutlined, TwitterCircleFilled, TwitterOutlined } from "@ant-design/icons";
import Projects from "./Projects";
import About from "./About";

export default function Homepage() {
  const linkStyle={
    color:"white",
    fontSize:"2em",
    margin:"1em",
    textDecoration:"none"
    
  }
  return (
    <>
      <div className="homepage">
        <div className="home">
          <h1 
       
          >
            Welcome to my personal portfolio
          </h1>
          <Typography.Paragraph type="h3" style={{ color: "white" }}
           className="home-p"
          >
            Hi,My name is Nadia Mansha <br />I am a Full Stack Web Developer.
          </Typography.Paragraph>
          <div style={
            {
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
          }
          }>
            
            <a href="mailto:34932@gcslahore.edu.pk"
            target="_blank"
            >
              <MailOutlined style={
                linkStyle
              } />
            </a>
          <a href= "https://github.com/NadiaMansha"
          target="_blank"

          >
         
            <GithubOutlined style={linkStyle} />
          </a>
          <a href="https://www.linkedin.com/mwlite/in/nadia-mansha-834194262"
          target="_blank"
          >
            <LinkedinOutlined style={linkStyle} />
          </a>
          <a href="https://twitter.com/NadiaMansha123s"
          target="_blank"
          >
            <TwitterCircleFilled style={linkStyle} />
          </a>
          <a href="https://www.instagram.com/nadia_mansha2481/" 
          target="_blank"
          >
            <InstagramFilled style={linkStyle} />
          </a>
          
          </div>
        </div>
      </div>
      <Skills />
      <Projects />
      <About />
  
    </>
  );
}
