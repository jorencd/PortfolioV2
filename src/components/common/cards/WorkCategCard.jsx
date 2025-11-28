import React from 'react'

function WorkCategCard({ title, image }) {
  return (
    <div className="work-categ-card group w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer mx-2">
      <div 
        className="relative h-14 bg-cover bg-center rounded-lg transition-all duration-300 group-hover:scale-105"
      >
        <img
          src={image}
          alt="Project"
          className="object-cover rounded-lg w-full h-full transition-all duration-300"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/75 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
        
        {/* Centered text */}
        <div className="absolute rounded-xl bottom-0 left-0 right-0 p-4">
          <h1 className="md:text-md lg:text-lg text-sm font-bold text-white text-center drop-shadow-lg">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WorkCategCard