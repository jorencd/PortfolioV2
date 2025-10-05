import React from "react";
import { Icon } from "@iconify/react";
import mypicture from "../../assets/profile/mypicture.png";
import coverphoto from "../../assets/coverphoto/Banner.svg";

function Hero() {
  return (
    <div className="items-center lg:w-130 lg:items-start flex flex-col gap-y-4 lg:pt-48 pt-40">
      <div className="w-full lg:h-47 h-38 z-0 absolute left-0 top-15">
        <img src={coverphoto} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="size-25 z-1 border-4 border-white rounded-full">
        <img
          src={mypicture}
          alt="Jorence"
          className="object-cover rounded-full"
        />
      </div>
      <div className="text-center w-full lg:pr-20 lg:text-left">
        <h1 className="font-bold text-2xl mb-1 lg:mb-3">Jorence Mendoza</h1>
        <div className="text-center lg:text-left flex flex-col gap-y-2 text-sm text-neutral-800 mb-2">
          <p className="flex gap-x-1 justify-center lg:justify-start items-center">
            <Icon
              icon="material-symbols-light:event-available"
              className="size-3 text-neutral-500"
            />
            Available for Freelance
          </p>
          <p className="flex gap-x-1 justify-center lg:justify-start items-center">
            <Icon icon="grommet-icons:user-expert" className="size-3 text-neutral-500" />
            Web & Game Developer
          </p>
          <p className="flex gap-x-1 justify-center lg:justify-start items-center">
            <Icon icon="mdi:contact" className="size-3 text-neutral-500" />
            09123456789
          </p>
          <p className="flex gap-x-1 justify-center lg:justify-start items-center">
            <Icon icon="picon:address" className="size-3 text-neutral-500" />
            Sampaga, San Antonio, Quezon
          </p>
        </div>

        <div className="flex items-center flex-col lg:mt-5 gap-3 justify-center">
          <button className="bg-blue-600 text-white text-sm py-2 px-3 lg:w-full w-1/2 rounded-2xl font-medium">
            CV
          </button>
          <button className="bg-blue-100 text-blue-700 w-1/2 py-2 lg:w-full text-sm rounded-2xl font-medium">
            Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
