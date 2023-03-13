import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../app/projects";
import { Link } from "react-router-dom";

const allProjects=projects.map((project)=>(
  <div
  className="project-container"

   key={project.id}>
  <h1>{project.name}</h1>
  <p>
    {project.description}
  </p>

    <img src={project.image} alt="" />
  
  
    <button>
      <Link to={`/projects/${project.id}`}>View Project</Link>
     
    </button>


  </div>

))

export default function Projects() {
  return (
    <div className="project"
    style={
      {
        marginTop: 50,
    }
    }
    >
     {allProjects}
       
    </div>
  );
}
