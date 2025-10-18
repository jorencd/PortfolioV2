import Techstack from "../techstack/Techstack";
import { Icon } from "@iconify/react";

function Skills() {
  const frontEndTech = [
    { svg: <Icon icon="logos:react" width="30" height="30" />, text: "React" },
    { svg: <Icon icon="vscode-icons:file-type-html" width="30" height="30" />, text: "HTML" },
    { svg: <Icon icon="devicon:css3" width="30" height="30" />, text: "CSS" },
    { svg: <Icon icon="skill-icons:flutter-dark" width="30" height="30" />, text: "Flutter" },
    { svg: <Icon icon="devicon:angular" width="30" height="30" />, text: "Angular" },
  ];

  const backEndTech = [
    { svg: <Icon icon="skill-icons:nodejs-dark" width="30" height="30" />, text: "Node.js" },
    { svg: <Icon icon="material-icon-theme:php" width="30" height="30" />, text: "PHP" },
    { svg: <Icon icon="skill-icons:mysql-dark" width="30" height="30" />, text: "MySQL" },
    { svg: <Icon icon="skill-icons:postgresql-dark" width="30" height="30" />, text: "Postgre" },
  ];

  const toolsTech = [
    { svg: <Icon icon="material-icon-theme:git" width="30" height="30" />, text: "Git" },
    { svg: <Icon icon="flowbite:github-solid" width="30" height="30" className="#000" />, text: "GitHub" },
    { svg: <Icon icon="devicon:figma" width="30" height="30" />, text: "Figma" },
    { svg: <Icon icon="skill-icons:supabase-dark" width="30" height="30" />, text: "Supabase" },
    { svg: <Icon icon="vscode-icons:file-type-firebase" width="30" height="30" />, text: "Firebase" },
  ];

  return (
    <div className="flex flex-col pt-4 pb-4 gap-y-6 lg:pt-6">
      <div
        className={`flex flex-col px-4 pb-20 rounded-xl backdrop-blur-lg text-neutral-800`}
      >
        {/* Frontend Section */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold mb-4 ">Frontend</h2>
          <div className="grid grid-cols-4 gap-y-5 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
            {frontEndTech.map((tech, index) => (
              <Techstack key={index} svg={tech.svg} text={tech.text} />
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Backend</h2>
          <div className="grid grid-cols-4 gap-y-5 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
            {backEndTech.map((tech, index) => (
              <Techstack key={index} svg={tech.svg} text={tech.text} />
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Other Tools</h2>
          <div className="grid grid-cols-4 gap-y-5 lg:grid-cols-8 lg:gap-y-6 justify-items-center">
            {toolsTech.map((tech, index) => (
              <Techstack key={index} svg={tech.svg} text={tech.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
