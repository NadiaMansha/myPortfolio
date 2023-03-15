import { Typography } from "antd";
import React from "react";
import { Button } from "antd";
import { Image } from "antd";

import { useParams} from "react-router-dom";
import { GithubOutlined } from "@ant-design/icons";
import projects from "../app/projects";


export default function ProjectCard() {
  const { id } = useParams();
console.log(id);
const project = projects.find((project) => project.id === parseInt(id));
console.log(project);


  
  return (
    <>
    <div className="project-card">
      <div className="description">
      <h1
      style={
        {
          
          fontSize: 40,
          fontWeight: "bold",
          marginBottom: 0,
        }
      }
      >{project?.name}</h1>
      <p
      style={
        {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 0,
        }
      }
      >{project.description}</p>
      <p
      style={
        {
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 0,
          marginTop: 20,
        }
      }
      >Technology Stack:</p>
     <ul
      style={
        {
          fontSize: 20,
          
          marginBottom: 0,
        }
      }
     >
        {project?.technologies.map((technology)=>(
          <li
        
           key={technology}>{technology}</li>
        ))}

     </ul>
      </div>
    
  {
    project?.image ?
    <Image
    className="project-image"
      style={
        {
          alignSelf: "flex-end",
      
          flex: 1,
        }
      }
        width={600}
        height={400}
        src={project.image}
    />:

<Image
      style={
        {
          alignSelf: "flex-end",
        }
      }
       width={600}
       height={400}
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" />
      
    
  }
      
    </div>
   < div className="buttons">
    <button>
    <a href={project.github}
    target="_blank"
    >View code</a>
   </button>

    </div>
    </>
  );
}
