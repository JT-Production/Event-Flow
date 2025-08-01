import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function EventCard() {
  return (
    <div className=" bg-black/5 rounded-4xl grid grid-cols-3 gap-3 p-3">
      <div className=" flex flex-col gap-2 border rounded-2xl p-2">
        <Image
          src={"/logoblue.png"}
          width={1000}
          height={1000}
          alt="event"
          className="w-50 h-40"
        />
        <div className=" p-2  flex flex-col gap-2">
          <p className="font-bold">A Night of Vintage Glamour</p>
          <p className="flex gap-2 items-center text-xs">
            <HiOutlineCalendarDateRange className="text-lg" /> Sun, Aug 31, 4 –
            9 PM GMT+1
          </p>
          <p className="text-xs flex gap-2 items-center">
            <SlLocationPin className="text-lg" /> Lagos Oriental Hotel, 3 Lekki
            - Epe Expy
          </p>
        

        <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-2 text-xs">Lagos</p>
            <button className="bg-transparent p-2 px-4 border-2 border-blue-500 rounded-xl text-xs">View Details</button>
        </div>
        </div>
      </div>
      <div className="">1</div>
      <div className="">1</div>
    </div>
  );
}
