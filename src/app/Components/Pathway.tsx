import Image from "next/image";

interface pathwayprops {
  img: string;
  heading: string;
  desc: string;
}

const pathwaydata = [
  {
    img: "assesment.png",
    heading: "Assesment Test",
    desc: "An initial assessment that helps us discover your passion, strengths, weaknesses and skills",
  },
  {
    img: "mentoring.png",
    heading: "Mentoring",
    desc: "Personalised, interactive mentoring in an equal learning environment, based on YOUR priorities and preferences",
  },
  {
    img: "liveclasses.png",
    heading: "Live Clasess",
    desc: "Final assessment to analyse the knowledge and skill level of the mentees gained from the Circles",
  },
  {
    img: "certification.png",
    heading: "Certification",
    desc: "End of the Mentoring period",
  },
];

const PathCard = ({ img, heading, desc }: pathwayprops) => {
  return (
    <div className="flex flex-col items-center xl:basis-[450px] flex-grow-1">
      <div className=" flex items-center justify-center w-[200px] max-w-[200px] aspect-square bg-red-400 rounded-[50%]">
        <Image
          //   width={150}
          width={img == "assesment.png" ? 130 : 550}
          height={550}
          src={`/assests/${img}`}
          alt="image"
        ></Image>
      </div>
      <div className=" flex items-center justify-center text-center flex-col w-[70%]">
        <h3 className="text-lg font-semibold md:text-xl">{heading}</h3>
        <h4 className="text-sm md:text-base">{desc}</h4>
      </div>
    </div>
  );
};

const Pathway = () => {
  return (
    <div className="mt-16">
      <div className="text-center text-xl font-semibold md:text-2xl xl:text-3xl">
        <h2 className=" text-primary-color ">This Platform helps you to</h2>
        <h2 className=" text-secondary-bg-color">find your pathway</h2>
      </div>
      <div className="flex gap-14 flex-col text-primary-color mt-16 mb-24 flex-wrap 2xl:flex-nowrap xl:flex-row justify-center">
        {pathwaydata.map((ele, index) => {
          return (
            <PathCard
              key={index}
              img={ele.img}
              heading={ele.heading}
              desc={ele.desc}
              // key={ele.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pathway;
