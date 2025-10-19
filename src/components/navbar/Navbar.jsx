import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Check if window is resized or if user is scrolling
  useEffect(() => {
   

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile check
    };

    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative text-neutral-800">
      {/* Navbar with conditional styling */}
      <div
        className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 shadow-md bg-white`}
      >
        <div className="flex justify-between items-center px-4 py-2">
          {/* Menu Icon - only visible when sidebar is closed on mobile */}
          {!sidebarOpen && isMobile && (
            <div>
              <Icon
                icon="mdi:menu"
                onClick={toggleSidebar}
                className="text-xl cursor-pointer"
              />
            </div>
          )}

          {/* Logo */}
          <div>
            <img src="your-logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Desktop menu - Only show on larger screens */}
          {!isMobile && (
            <ul className="flex space-x-8 font-semibold">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">Project</li>
            </ul>
          )}
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 ${
          sidebarOpen ? "w-3/5 lg:w-1/5" : "w-0"
        } overflow-hidden z-30`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-30">
          <Icon
            icon="mdi:close"
            onClick={toggleSidebar}
            className="text-black text-xl cursor-pointer"
          />
        </div>

        <ul className="p-4">
          <li className="mb-4">Home</li>
          <li className="mb-4">About</li>
          <li className="mb-4">Contact</li>
          <li className="mb-4">Project</li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-3/5 lg:ml-4/5" : ""
        }`}
      >
        {/* Other content goes here */}
      </div>
    </div>
  );
}

export default Navbar;
