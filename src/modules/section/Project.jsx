import React, { useState } from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/ProjectcardData";
import ProjectModal from "../../components/modal/ProjectModal";
import Skills from "../../components/skills/Skills";
import ServiceCard from "../../components/cards/ServiceCard";
import { services } from "../../data/ServiceCardData";
import { Icon } from "@iconify/react";

function Project() {
  const [selected, setSelected] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const handleClick = (index) => {
    setSelected(index);
  };

  const openModal = (projectImages) => {
    setModalImages(projectImages);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
  };

  return (
    <div className="w-full text-sm mb-6">
      <div className="flex md:pt-65 lg:pt-75 rounded border-b border-neutral-200">
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
            Services
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

      <div className="items-center w-full md:mt-3 lg:mt-3 mt-15">
        {selected === 0 && (
          <div className="mt-3 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.images[0]}
                title={project.title}
                onClick={() => openModal(project.images)}
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
                icon={service.icon} // Pass the icon here
              />
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        images={modalImages}
        onClose={closeModal}
      />
    </div>
  );
}

export default Project;
