"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { TbCalendarEvent } from "react-icons/tb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  // alert(path)
  return (
    <div className={`text-white flex justify-center items-center px-20`}>
      <div
        className={
          "px-8 py-4 w-full shadow-lg border border-gray-100 flex items-center justify-between rounded-3xl mt-2 "
        }
      >
        <Image
          src={"/logoblue.png"}
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-30 object-cover"
        />
        <ul className="flex gap-10 text-sm font-semibold   items-center justify-center">
          <Link href={"/"}>
            {" "}
            <li
              className={`  cursor-pointer hover:text-blue-500 " ${
                path == "/" ? " text-blue-500 " : " text-black "
              }`}
            >
              Home
            </li>
          </Link>
          <Link href={"/events"}>
            {" "}
            <li
              className={`  cursor-pointer hover:text-blue-500 " ${
                path == "/events" ? " text-blue-500 " : " text-black "
              }`}
            >
              Events
            </li>
          </Link>
          <Link href={"/"}>
            {" "}
            <li
              className={`  cursor-pointer hover:text-blue-500 " ${
                path == "/servi" ? " text-blue-500 " : " text-black "
              }`}
            >
              Services
            </li>
          </Link>
        </ul>

        {/* <button className="bg-[#3877F7] text-white px-5 py-2 pt-2 pb-3  rounded-xl hover:bg-blue-600 transition-colors font-rale">
          Sign up/ Login
        </button> */}
        <Button classname={"items-center text-[14px] "}>
          {" "}
          Create an Event <TbCalendarEvent className="text-lg" />
        </Button>
      </div>
    </div>
  );
}
