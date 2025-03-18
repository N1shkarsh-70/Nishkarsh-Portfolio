"use client";
import React from "react";
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-8 "
      id="projects"
    > 
      <h1 className="text-[50px] font-large font-bold text-transparent my-[10px] bg-clip-text text-center bg-gradient-to-r from-[#8750f7] to-[#dddddd]">
        My Projects
      </h1>
      
      <ProjectCard />
    </div>
  );
};
// bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]
export default Projects;