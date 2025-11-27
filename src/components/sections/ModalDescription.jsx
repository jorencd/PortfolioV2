import React, { Component } from "react";
import { Icon } from "@iconify/react";

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function ModalDescription({ project }) {
  if (!project) return null;

  return (
    <div className="lg:h-full w-full px-4 mt-2">
      <div className="bg-white h-full w-full flex flex-col lg:flex-row md:flex-row gap-4 items-center lg:justify-center md:justify-center p-4">
        <div className="lg:w-1/2 md:w-1/2 w-full border border-neutral-200 p-6 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10">
                {/* Replace with icon data */}
                {project.icon[0] && (
                  <Icon
                    icon={project.icon[0]}
                    width="30"
                    height="30"
                    className="text-neutral-200"
                  />
                )}
              </div>
              <span className="font-bold text-xl">+</span>
              <div className="w-[38px] ml-0.5">
                {/* Replace with icon data */}
                {project.icon[1] && (
                  <Icon
                    icon={project.icon[1]}
                    width="30"
                    height="30"
                    className="text-neutral-200"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="w-5 fill-slate-400 hover:fill-sky-400 duration-200">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 20 20"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>github [#142]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g strokeWidth="1" stroke="none" id="Page-1">
                      <g
                        transform="translate(-140.000000, -7559.000000)"
                        id="Dribbble-Light-Preview"
                      >
                        <g
                          transform="translate(56.000000, 160.000000)"
                          id="icons"
                        >
                          <path
                            id="github-[#142]"
                            d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-5 fill-slate-400 hover:fill-sky-400 duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>Netlify icon</title>
                    <path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <a href={project.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor capitalize flex items-center gap-x-2 font-medium text-lg text-neutral-900">
            {project.title}
              <Icon icon="weui:link-filled" className="md:size-5"/>
            
          </a>
          <p className="text-neutral-600 text-sm">{project.description}</p>
          <div className="flex items-center text-neutral-900 gap-3 text-[13px] font-medium">
            <span>{project.technologies.join(" + ")}</span>
          </div>
        </div>
        <div className="w-full lg:w-1/3 md:w-1/3">
          <div className="flex flex-col gap-1 justify-center items-start w-full bg-white dark:bg-transparent px-4 py-4 shadow-xl rounded-lg">
            <p className="font-semibold text-xl text-gray-600 mb-2">Tools</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <p
                  key={index}
                  className="px-3 py-1 text-[12px] bg-[#d9dfe3] max-w-max rounded font-semibold text-[#7281a3]"
                >
                  #{tool.toLowerCase()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// App Component that wraps ModalDescription with ErrorBoundary
function App({ project }) {
  return (
    <ErrorBoundary>
      <ModalDescription project={project} />
    </ErrorBoundary>
  );
}

export default App;
