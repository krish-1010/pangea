import Image from "next/image";
import Navbar from "./Components/Navbar";
import { Poppins } from "next/font/google";
import Homepage from "./Components/Homepage";
import Pathway from "./Components/Pathway";
import Mentoring from "./Components/Mentoring";
import Courses from "./Components/Courses";
import BecomeMentor from "./Components/BecomeMentor";
import Faq from "./Components/Faq";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main
      className={`${poppins.className} text-primary-color font-sans pl-2 pr-2 xl:text-xl`}
    >
      <Navbar />
      <Homepage />
      <Pathway />
      <Mentoring />
      <Courses />
      <BecomeMentor />
      <Faq />
    </main>
  );
}
