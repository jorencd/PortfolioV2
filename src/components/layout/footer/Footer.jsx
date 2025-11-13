import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer
      className={`absolute justify-center text-white left-0 w-full p-10 footer footer-horizontal footer-center bg-neutral-900`}
    >
      <nav className="flex gap-x-4 items-center justify-center">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Portfolio</a>
      </nav>
      <nav>
        <ul className="gap-y-3 flex justify-center">
          <li className="p-3 flex justify-between ">
            <a href="https://www.facebook.com/jorence.mendoza.2024">
              <Icon icon="ic:baseline-facebook" className="size-6" />
            </a>
            </li>
          <li className=" p-3 flex justify-between">
            <a href="http://www.linkedin.com/in/">
              <Icon icon="mdi:linkedin" className="size-6" />
            </a>
          </li>
          <li className="p-3 flex justify-between">
            <a href="https://github.com/ratty-debug">
              <Icon icon="mdi:github" className="size-6" />
            </a>
          </li>
        </ul>
      </nav>
      <aside>
        <p className="text-sm text-center text-white">
          Copyright © {new Date().getFullYear()} - All right reserved by <br />{" "}
          Jorence Mendoza
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
