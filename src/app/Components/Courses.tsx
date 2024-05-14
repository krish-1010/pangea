import React from "react";
import Image from "next/image";

interface props {
  img: string;
  std: string;
  heading: string;
  desc: string;
  color: string;
}

const coursesData = [
  {
    img: "one.png",
    class: "Age 14-20",
    heading: "Astronomy for Everyone",
    desc: "Embark on a stellar odyssey through the cosmos, as we ignite your path to becoming an Amateur Astronomer",
    color: "bg-[#FFF0CB]",
  },

  {
    img: "two.png",
    class: "Age 8-13",
    heading: "Little Space Scientist - Level 1",
    desc: "Journey into the starry wonders with us, where every young explorer becomes a cosmic adventurer",
    color: "bg-[#EBF2FF]",
  },
  {
    img: "three.png",
    class: "Age 8-13",
    heading: "Little Space Scientist - Level 2",
    desc: "Launch into the cosmos with us, as we propel young minds to engineer the future of space exploration",
    color: "bg-[#EBE2FA]",
  },
  {
    img: "four.png",
    class: "Age 6-13",
    heading: "Little Astronomer",
    desc: "Join our stellar playground for young astronomers-in-training, where we make learning about the cosmos as fun as counting shooting stars",
    color: "bg-[#E7FFAA]",
  },
];

const Ccard = ({ img, std, heading, desc, color }: props) => {
  return (
    // <div className={`bg-[${color}] flex items-center p-4 rounded-2xl`}>
    <div
      className={`${color} pb-8 grid grid-rows-4 gap-1 max-w-[520px] grid-flow-col p-4 rounded-2xl`}
      style={{ gridTemplateRows: "auto auto auto auto" }}
    >
      <div className="row-start-2 row-span-3 mr-5 pl-4 hidden md:block">
        <Image
          width={70}
          height={70}
          src={`/assests/${img}`}
          alt="image"
        ></Image>
      </div>
      {/* <div className="col-span-2 row-span-2">
        <div>{std}</div>
        <div>{heading}</div>
        <div>{desc}</div>
        <div>
          <button>Explore</button>
        </div>
      </div> */}
      <div className="text-[#F55E29] xl:text-xl font-semibold m-0 flex items-center">
        {std}
      </div>
      <div className="xl:text-2xl font-semibold flex items-start">
        {heading}
      </div>
      <div className="xl:text-xl ">{desc}</div>
      <div>
        <button className="bg-[#183E4B] text-white mt-2 rounded-md p-2 w-[100px]">
          Explore
        </button>
      </div>
    </div>
  );
};

export default function Courses() {
  return (
    <div id="courses" className="bg-[#FDF5ED] pt-[7rem] pb-[7rem]">
      <div className="w-[80%] m-auto">
        <h3 className="xl:text-4xl font-semibold text-center mb-[7rem]">
          Courses for <span className="text-[#F55E29]">Young Champs</span>
        </h3>
        {/* <div className="grid lg:grid-rows-2 m-auto max-w-[1000px] grid-flow-col gap-8 place-self-center"> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center max-w-[1000px] m-auto"> */}
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 place-items-center xl:max-w-[1200px] m-auto">
          {coursesData.map((element, index) => {
            return (
              <Ccard
                key={index}
                img={element.img}
                std={element.class}
                heading={element.heading}
                desc={element.desc}
                color={element.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
