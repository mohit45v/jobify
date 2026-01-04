import Image from "next/image";
import { NavbarDemo } from "./navbar/page";
import WavyBackgroundDemo from "./landingPage/page";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <WavyBackgroundDemo />
    </>
  );
}
