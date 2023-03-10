import React from "react";
import { Button } from "antd";
import { Typography } from "antd";

export default function Skills() {
  return (
    <div className="skills">
      <div>
        <Typography.Title>My Skills</Typography.Title>
        <Typography.Text style={{ fontSize: "1.2em", textAlign: "center" }}>
          {" "}
          Here are my few technical skills:{" "}
        </Typography.Text>{" "}
        <br />
        <Button>Java Script</Button>
        <Button>HTML</Button>
        <Button>CSS</Button>
        <Button>Redux Toolkit</Button>
        <Button>React.js</Button> <br />
        <Button>React Native</Button>
        <Button>Node.js</Button>
        <Button>Git</Button>
        <Button>Git Hub</Button>
        <Button>Mongo Db</Button> <br />
        <Button>ant design</Button>
        <Button>React Native</Button>
      </div>
    </div>
  );
}
