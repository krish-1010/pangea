import Image from "next/image";
import boybg from "../../../public/assests/boybg.png";
const Homepage = () => {
  return (
    <div className=" bg-primary-bg-color h-screen pt-24 xl:pt-0 flex flex-col xl:flex-row">
      <div
        className="flex-grow text-center text-base md:text-base flex flex-col xl:text-2xl justify-center xl:h-[80%] xl:self-end xl:justify-normal xl:text-left xl:max-w-[80%] xl:ml-auto gap-5
      xl:pl-14 xl:pt-7"
      >
        <h3 className=" font-medium text-base"> Discover your interests</h3>
        <h2 className=" text-2xl font-semibold">
          You are what you believe in. <br /> You become that which you believe
          you can become
        </h2>
        <h3 className="w-[95%] text-sm">
          We have <b>100+ Courses</b> and <b>40+ Subject Experts</b>,<br /> Also
          we know your interests from
          <b> Selective Assessment Test(SAT)</b>
        </h3>
        <button className="self-center xl:self-start w-[14rem] bg-secondary-color rounded-md text-white h-14 font-semibold">
          Get Started
        </button>
      </div>
      <div
        className="w-[350px] h-[500px] flex justify-center items-center xl:justify-end
      md:max-w-[500px] md:max-h-[80%] xl:h-full self-center md:self-center xl:self-end basis-[50%] min-w-[300px] xl:max-w-[700px]
      "
      >
        <Image
          alt="boy"
          className="self-end"
          src={boybg}
          style={{ maxWidth: "85%", height: "100%" }}
        ></Image>
      </div>
    </div>
  );
};

export default Homepage;
