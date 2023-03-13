import React from "react";

export default function About() {
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
     backgroundColor: "white",


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
  </div>;
}
