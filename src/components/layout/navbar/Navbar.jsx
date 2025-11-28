// Navbar.jsx
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyLogo from "../../../assets/images/logo/mylogo.png";
import useMobileCheck from "../../../hooks/useNav";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMobileCheck();
  const location = useLocation(); // Get current route

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Helper function to check if link is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="relative text-neutral-800">
      <div className="fixed top-0 left-0 right-0 z-50 lg:z-20 md:z-20 transition-all duration-300 shadow-md bg-white">
        <div className="flex justify-between items-center px-4 py-2">
          {!sidebarOpen && isMobile && (
            <Icon
              icon="mdi:menu"
              onClick={toggleSidebar}
              className="text-xl cursor-pointer"
            />
          )}
          <div className={`${isMobile ? "ml-auto" : ""}`}>
            <Link to="/">
              <img src={MyLogo} alt="Logo" className="h-10" />
            </Link>
          </div>

          {!isMobile && (
            <ul className="flex space-x-8 font-semibold">
              <li className="cursor-pointer">
                <Link
                  to="/"
                  className={`cursor-pointer ${
                    isActiveLink("/") ? "text-blue-600" : "text-neutral-800"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/certificates"
                  className={`cursor-pointer ${
                    isActiveLink("/certificates")
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }`}
                >
                  Certificates
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="/works"
                  className={`cursor-pointer ${
                    isActiveLink("/works")
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }`}
                >
                  Work
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  to="/projects"
                  className={`cursor-pointer ${
                    isActiveLink("/projects")
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }`}
                >
                  Projects
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {sidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/75 bg-opacity-75 z-50"
          onClick={toggleSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white transition-all duration-300 ${
          sidebarOpen ? "w-3/5 lg:w-1/5" : "w-0"
        } overflow-hidden z-50`}
      >
        <div className="md:hidden lg:hidden block ml-4 mt-4 text-sm font-semibold">
          Jorence Mendoza
        </div>
        <div className="absolute top-4 right-4 z-30">
          <Icon
            icon="mdi:close"
            onClick={toggleSidebar}
            className="text-black text-xl cursor-pointer"
          />
        </div>
        <ul className="p-4 mt-8 text-sm font-semibold">
          <li className="mb-4">
            <Link
              to="/"
              className={`cursor-pointer block py-2 ${
                isActiveLink("/")
                  ? "text-blue-600 font-semibold"
                  : "text-neutral-800"
              }`}
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/certificates"
              className={`cursor-pointer block py-2 ${
                isActiveLink("/certificates")
                  ? "text-blue-600 font-semibold"
                  : "text-neutral-800"
              }`}
              onClick={toggleSidebar}
            >
              Certificates
            </Link>
          </li>
          <li className="mb-4">
            <Link
                  to="/works"
                  className={`cursor-pointer ${
                    isActiveLink("/works")
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }`}
                >
                  Works
                </Link>
          </li>
          <li className="mb-4">
            <Link
                  to="/projects"
                  className={`cursor-pointer ${
                    isActiveLink("/projects")
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }`}
                >
                  Projects
                </Link>
          </li>
        </ul>
        <div className="h-full">
          <p className="text-sm text-center px-2 text-neutral-500 absolute bottom-4 left-0">
            Copyright © {new Date().getFullYear()} - All right reserved by Jorence Mendoza
          </p>
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-3/5 lg:ml-4/5" : ""
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
