import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function About() {
  const linkStyle={
    color:"blue",
    fontSize:"2em",
    margin:"1em",
    textDecoration:"none"
    
  }
  const profession="Full Stack Developer"
  return <div
  style={
    {
      marginTop: 150,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
       marginBottom:20,
  }
  }
  >
    <h1
    style={
      {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 0,
      }
    }

    >About</h1>
    <p
    style={
      {
        color:"black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 0,
      }
    }

    >
     My name is Nadia Mansha.I am a student Information Technology . <br />
     I am a  {profession}
    
     <br />
      I am passionate about building applications that are user friendly and easy to use. <br />
       I am a self starter and a fast learner. <br />
      I am always looking for new challenges and opportunities to learn and grow.
    </p>
    <div
     className="contact">
      <h1>Conatct me:</h1>
      <a href="mailto:34932@gcslahore.edu.pk" target="_blank">
        <MailOutlined style={linkStyle} />
        </a>
      	
<a href="tel:+923020415956">
        <PhoneOutlined style={linkStyle} />
</a>
       </div>
  </div>;
}
