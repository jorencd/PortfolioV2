import React from "react";
import { Icon } from "@iconify/react";

function About() {
  return (
    <div className="lg:mb-10 p-5 rounded-xl">
      <div className="flex flex-col">
        <p className="text-neutral-400 text-xs text-left font-bold mt-5 md:block lg:block">
          SOCIALS
        </p>
        <div className="text-neutral-900 text-sm mt-1 md:block lg:block">
          <ul className="border border-neutral-200 rounded-lg gap-y-3">
            <li className="border-b border-neutral-200 p-3 flex justify-between ">
              <div className="flex gap-x-2 font-semibold">
                <Icon icon="ic:baseline-facebook" className="size-5" />
                Facebook
              </div>
              <a href="https://www.facebook.com/jorence.mendoza.2024" target="_blank" rel="noopener noreferrer">
                <Icon
                  icon="akar-icons:link-out"
                  className="size-5 text-neutral-400 cursor-pointer"
                />
              </a>
            </li>
            <li className="border-b border-neutral-200 p-3 flex justify-between">
              <div className="flex gap-x-2 font-semibold">
                <Icon icon="mdi:linkedin" className="size-5" />
                LinkedIn
              </div>
              <a href="http://www.linkedin.com/in/"  target="_blank" rel="noopener noreferrer">
              <Icon
                icon="akar-icons:link-out"
                className="size-5 text-neutral-400 cursor-pointer"
              />
              </a>
            </li>
            <li className="border-b border-neutral-200 p-3 flex justify-between">
              <div className="flex gap-x-2 font-semibold">
                <Icon icon="mdi:github" className="size-5" />
                GitHub
              </div>
              <a href="https://github.com/ratty-debug" target="_blank" rel="noopener noreferrer">
              <Icon
                icon="akar-icons:link-out"
                className="size-5 text-neutral-400 cursor-pointer"
              />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-neutral-400 w-full text-xs font-bold mt-5 md:block md:text-left lg:block">
          ABOUT ME
        </p>
        <p className="text-neutral-900 text-left text-sm mt-1 md:block lg:block w-full">
          a BSIT graduate majoring in Web and Game Development. I’m passionate
          about creating interactive experiences, whether it’s building
          websites, developing games, or exploring digital art.
        </p>
      </div>
    </div>
  );
}

export default About;
