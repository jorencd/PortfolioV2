import React from 'react';
import WorkCard from '../../common/cards/WorkCard';

function Work({ works = [] }) {
  if (works.length === 0) {
    return (
      <div className="text-center py-20 h-100">
        <h3 className="text-xl text-neutral-600 mb-2">No works found</h3>
        <p className="text-neutral-400">Try a different search or category</p>
      </div>
    );
  }

  return (
    <div>
      <div className="lg:grid md:grid flex flex-col items-center md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {works.map((work) => (
          <WorkCard 
            key={work.id}
            title={work.title}
            image={work.image}
            tech={work.tech}
            description={work.description}
            category={work.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;