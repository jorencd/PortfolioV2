import React, { Suspense, useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";
import LoadingFallback from "../../components/common/loadingfallback/LoadingFallback";
import WorkNav from '../../components/sections/worksection/WorkNav';
import WorkCateg from '../../components/sections/worksection/WorkCateg';
import Work from '../../components/sections/worksection/Work';
import Footer from "../../components/layout/footer/Footer";
import { works } from '../../data/WorkCardData';

function Works() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredWorks, setFilteredWorks] = useState(works);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const allTechs = [...new Set(works.flatMap(work => 
    Array.isArray(work.tech) ? work.tech : (work.tech || '').split(',').map(t => t.trim())
  ))].filter(Boolean);

  useEffect(() => {
    let results = [...works];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      results = results.filter(work => {
 
        if (work.category && work.category === selectedCategory) return true;

        const workTechs = Array.isArray(work.tech) ? work.tech : (work.tech || '').split(',').map(t => t.trim());
        return workTechs.some(tech => 
          tech.toLowerCase() === selectedCategory.toLowerCase()
        );
      });
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      results = results.filter(work => {
        // Search in title
        if (work.title.toLowerCase().includes(query)) return true;
        
        // Search in description
        if (work.description && work.description.toLowerCase().includes(query)) return true;
        
        // Search in tech stack
        const workTechs = Array.isArray(work.tech) ? work.tech : (work.tech || '').split(',').map(t => t.trim());
        return workTechs.some(tech => tech.toLowerCase().includes(query));
      });
    }
    
    setFilteredWorks(results);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <ClipLoader size={50} color="#000" loading={true} />
      </div>
    );
  }

  return (
    <div className="lg:px-5 md:px-5 px-5">
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <WorkNav 
          onSearch={handleSearch}
          onFilterClick={() => setShowFilterModal(true)}
          searchQuery={searchQuery}
        />
      </Suspense>

      {/* Filter status indicator */}
      {(searchQuery || selectedCategory !== 'All') && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <span className="text-sm text-gray-600">
              {searchQuery && `Search: "${searchQuery}"`}
              {searchQuery && selectedCategory !== 'All' && ' • '}
              {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
            </span>
            <button 
              onClick={handleClearFilters}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              Clear
            </button>
          </div>
          <span className="text-sm text-gray-500">
            {filteredWorks.length} work{filteredWorks.length !== 1 ? 's' : ''} found
          </span>
        </div>
      )}

      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <WorkCateg 
          onCategorySelect={handleCategorySelect}
          selectedCategory={selectedCategory}
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <Work works={filteredWorks} />
      </Suspense>
      <Suspense fallback={<LoadingFallback isSlowNetwork={false} />}>
        <Footer />
      </Suspense>

      {/* Filter Modal (Simple version) */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Filter by Technology</h3>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ×
              </button>
            </div>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {allTechs.map((tech, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(tech);
                      setShowFilterModal(false);
                    }}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowFilterModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Works;