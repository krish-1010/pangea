import Image from "next/image";
import teacher from "./../../../public/assests/teacher.png";
const BecomeMentor = () => {
  return (
    <div>
      <div>
        <div>
          <h3>Become a Mentor</h3>
          <h2>
            All teachers teach. <br /> Greatest teachers inspire
          </h2>

          <p>
            When an well wisher starts teaches, the student nourishes in their
            domain. Join your hands with us to educate and enhance the future
            generation for a betterment of Homosapiens.
          </p>

          <button className=" bg-secondary-color text-white">Join Now</button>
        </div>
        <div className="flex justify-center">
          <div className="w-[200px] h-[300px] relative">
            <Image fill={true} src={teacher} alt="image"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeMentor;
