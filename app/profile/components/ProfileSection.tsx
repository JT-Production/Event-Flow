import EventsSection from "@/app/feeds/components/EventsSection";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import { FaLocationPin, FaMailchimp } from "react-icons/fa6";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

export default function ProfileSection() {
  return (
    <div className="flex-1">
      <div className="flex items-start justify-between gap-5 my-5 shadow-lg mx-10 p-3 bg-white rounded-3xl">
        <div className="flex items-center gap-5">
          <Image
            src={"https://avatar.iran.liara.run/public/22"}
            width={1000}
            height={1000}
            alt=""
            className="w-40 h-40"
          />

          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <p className=" text-lg">Joseph Godfrey</p>
              <div className="p-0.5 bg-green-200 rounded-lg font-bold text-xs text-green-600 flex  items-center max-w-[80px]"><BsDot className="text-2xl text-green-500"/>  Active</div>
            </div>
            <div className="flex justify-between  max-w-[400px] w-[400px]">
                <p className="text-xs flex gap-2 items-center"><IoMailOutline className="text-lg"/> joeyofficial707@gmail.com</p>
                <p className="text-xs flex gap-2 items-center"><IoLocationOutline className="text-lg"/> Nigeria</p>

            </div>
          </div>
        </div>
        <Button classname="items-center gap-1.5">
            <BiEdit className=" text-white"/>
          <p className="text-white text-sm">Edit profile</p>
        </Button>
      </div>

      
    </div>
  );
}
