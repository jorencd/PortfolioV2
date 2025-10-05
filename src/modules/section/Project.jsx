// In Project.js
import React, { useState } from 'react'
import ProjectCard from '../../components/cards/ProjectCard';
import mockup1 from '../../assets/projectphoto/mockup1.svg'
import mockup2 from '../../assets/projectphoto/mockup2.svg'
import mockup3 from '../../assets/projectphoto/mockup3.svg'
import mockup4 from '../../assets/projectphoto/mockup4.svg'

function Project() {
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

  const projects = [
    {
      image: mockup1, // Directly pass the imported image here
    },
    {
      image: mockup2, // Same for other entries
    },
    {
      image: mockup3,
    },
    {
      image: mockup4,
    },
  ];

  return (
    <div className='w-full text-sm'>
      <div className={`flex lg:pt-75 rounded border-b border-neutral-200`}>
        <ul className={`flex font-medium gap-x-5`}>
          <li
            className={`cursor-pointer w-full text-center p-2 ${selected === 0 ? "text-black border-b-2 border-black" : "text-neutral-600"}`}
            onClick={() => handleClick(0)}
          >
            Work
          </li>
          <li
            className={`cursor-pointer text-center w-full p-2 ${selected === 1 ? "text-black border-b-2 border-black" : "text-neutral-600"}`}
            onClick={() => handleClick(1)}
          >
            Info
          </li>
          <li
            className={`cursor-pointer text-center w-full p-2 ${selected === 2 ? "text-black border-b-2 border-black" : "text-neutral-600"}`}
            onClick={() => handleClick(2)}
          >
            Tools
          </li>
        </ul>
      </div>
      <div className="items-center w-full mt-6">
        {selected === 0 && (
          <div className="text-[#2e2e2e] mt-3 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} image={project.image} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Project;
