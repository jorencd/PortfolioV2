import React, { useState } from "react";
import ProjectCard from "../common/cards/ProjectCard";
import { projects } from "../../data/ProjectcardData";
import ProjectModal from "../common/modal/ProjectModal";
import Skills from "../sections/Skills";
import ServiceCard from "../common/cards/ServiceCard";
import { services } from "../../data/ServiceCardData";
import { Icon } from "@iconify/react";
import About from "./About";

function Project() {
  const [selected, setSelected] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full text-sm">
      <div className="flex md:pt-55 lg:pt-63 rounded border-b border-neutral-200">
        <ul className="flex font-medium gap-x-5 md:pt-5 lg:pt-5">
          <li
            className={`cursor-pointer w-full text-center p-2 ${
              selected === 0
                ? "text-black border-b-2 border-black"
                : "text-neutral-600"
            }`}
            onClick={() => handleClick(0)}
          >
            Projects
          </li>
          <li
            className={`cursor-pointer text-center w-full p-2 ${
              selected === 1
                ? "text-black border-b-2 border-black"
                : "text-neutral-600"
            }`}
            onClick={() => handleClick(1)}
          >
            Tools
          </li>
          <li
            className={`cursor-pointer text-center p-2 ${
              selected === 2
                ? "text-black border-b-2 border-black"
                : "text-neutral-600"
            }`}
            onClick={() => handleClick(2)}
          >
            Service
          </li>
          <li
            className={`cursor-pointer text-center p-2 md:hidden lg:hidden ${
              selected === 3
                ? "text-black border-b-2 border-black"
                : "text-neutral-600"
            }`}
            onClick={() => handleClick(3)}
          >
            About
          </li>
        </ul>
      </div>

      <div className="items-center w-full md:mt-3 lg:mt-3">
        {selected === 0 && (
          <div className="mt-7 lg:mt-5 md:mt-5 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.images[0]}
                title={project.title}
                url={project.url}
                onClick={() => openModal(project)}
              />
            ))}
          </div>
        )}
        {selected === 1 && <Skills />}
        {selected === 2 && (
          <div className="mt-5 grid grid-cols-2 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index + 1}
                image={service.images[0]}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        )}

        {selected === 3 && (
          <div className="block mt-5 md:hidden lg:hidden" >
            <About />
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={closeModal}
      />
    </div>
  );
}

export default Project;