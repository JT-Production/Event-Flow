import React from "react";
import { Raleway } from "next/font/google";
import { GoDotFill } from "react-icons/go";
import Button from "./Button";
import Navbar from "./Navbar";

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function Hero() {
  return (
    <>
   
      <div
        className={
          "text-black flex flex-col justify-center items-center h-140 " +
          raleway.className
        }
      >
        <div className="text-sm  border border-blue-500 px-2 py-0.5 rounded-3xl flex gap-1 items-center mb-5">
          {" "}
          <GoDotFill className="text-blue-500" />
          Find events within you
        </div>
        <h1 className="font-bold text-7xl w-[750px] text-center mb-5">
          <span className="text-blue-400">Simplify</span> Events. Amplify
          Experiences.
        </h1>
        <p className="text-[16px] ">
          Discover, plan, and manage events seamlessly—all in one place.
        </p>

        <div className="flex gap-4">
          <Button classname={"mt-10 px-8 py-4 text-white text-[14px] "}>Sign up</Button>
          <Button
            classname={
              "mt-10 px-10 py-4 bg-transparent border border-blue-500 text-blue-500 text-[14px] "
            }
          >
            Login
          </Button>
        </div>
      </div>

    </>
  );
}
