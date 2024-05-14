import Image from "next/image";

const Mentoring = () => {
  return (
    <div className="bg-[#FF6F3C] flex flex-col-reverse sm:flex-row items-center justify-center xl:gap-[10rem] text-white xl:text-4xl font-semibold">
      <div className="mt-10 flex justify-center">
        <div className="w-[70%] md:w-full">
          <Image
            src={"/assests/boy2.png"}
            alt="image"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
      <div className="flex mt-12 flex-col xl:gap-8 justify-center items-center font-semibold text-xl xl:text-4xl">
        <h2>Live Mentoring sessions &</h2>
        <h2>Learning Opprtunites for You</h2>
        <button className=" w-[170px] h-[35px] md:w-[200px] mt-5 md:h-[50px] text-xl font-semibold rounded-[25px] text-secondary-bg-color bg-slate-50">
          Know more
        </button>
      </div>
    </div>
  );
};

export default Mentoring;
