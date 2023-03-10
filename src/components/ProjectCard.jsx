import { Typography } from "antd";
import React from "react";
import { Button } from "antd";
import { Image } from "antd";
import img from "../images/addressbook.png";
export default function ProjectCard() {
  return (
    <div className="project-card">
      <Typography.Title level={3}>Address Book</Typography.Title>
      <Typography.Paragraph>
        A mern satck application where you can use store your contacts and view
        them A mern satck application where you can use store your contacts and
        view them
      </Typography.Paragraph>
      <Image
        src={img}
        alt="project-screenshot"
        height="300px"
        width="500px"
      ></Image>
      <Typography.Title level={4}>Technology Stack</Typography.Title> <br />
      <Button>Node.js</Button>
      <Button>React.js</Button>
      <Button>Mondo db</Button> <br />
      <Button>Code</Button>
      <Button>Live demo</Button>
    </div>
  );
}
