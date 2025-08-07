"use client";
import Image from "next/image";
import { BsBookmarkDash } from "react-icons/bs";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

export default function EventCard({
  name,
  venue,
  eventId,
  date,
  thumbnail,
  subtype
}: any) {
  // const []

  return (
    <>
      <div className="relative inline-block " key={eventId}>
        <Image
          src={thumbnail ? thumbnail : 'https://avatar.iran.liara.run/public/22'}
          width={1000}
          height={1000}
          alt="event"
          className="max-w-76 h-40 bg-black rounded-2xl"
        />
        <div className="bg-white p-2.5 absolute top-3 right-3 rounded-full cursor-pointer">
          {" "}
          <BsBookmarkDash className=" text-md text-black" />
        </div>
      </div>

      <div className=" p-2  flex flex-col gap-1">
        <p className="font-bold">{name}</p>
        <p className="flex gap-2 items-center text-xs">
          <HiOutlineCalendarDateRange className="text-lg" /> {date}
        </p>
        <p className="text-xs flex gap-2 items-center">
          <SlLocationPin className="text-lg" /> {venue}
        </p>

        <div className="flex items-center justify-between mt-2">
          <p className="flex items-center gap-2 text-xs">{subtype}</p>
          <button className="bg-transparent p-2 px-4 border-2 border-blue-500 rounded-xl text-xs">
            View Details
          </button>
        </div>
      </div>
    </>
  );
}
