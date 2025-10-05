import React from 'react'

function ProjectCard({image}) {
  return (
    <div className="w-full bg-amber-300">
            <img
              src={image}
              alt="Jorence"
              className="object-cover"
            />
          </div>
  )
}

export default ProjectCard