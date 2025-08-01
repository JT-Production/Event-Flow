import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBookmarkDash, BsBookmarkDashFill } from "react-icons/bs";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiMapPinArea, PiSidebarSimpleBold } from "react-icons/pi";
import { RiHomeSmileLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <aside className="w-74 bg-blue-00 border border-black/10 text-black p-4 flex flex-col   h-screen ">
      {/* <h2 className="text-xl font-bold mb-6">Dashboard</h2> */}
    <div className="flex justify-between items-center py-2">
        <Image
        src={"/logoblue.png"}
        alt="logo"
        width={100}
        height={100}
        className="h-14 w-40 object-cover"
      />
      <PiSidebarSimpleBold className="text-black text-2xl cursor-pointer mb-1.5" />
    </div>
      <nav className="space-y-1 mt-5 text-sm  h-screen">
        <Link
          href="/dashboard/overview"
          className=" hover:bg-black/10 flex items-center gap-3 bg-blue-500 p-3 rounded-2xl text-white"
        >
         <RiHomeSmileLine className="text-xl" /> Home
        </Link>
        <Link
          href="/dashboard/settings"
          className="hover:bg-black/10 ho rounded-2xl flex items-center gap-3 p-3"
        >
         <HiMiniCalendarDateRange  className="text-xl"/> Schedule
        </Link>
        <Link
          href="/dashboard/overview"
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3"
        >
         <BsBookmarkDash className="text-lg"/> Favourite
        </Link>
        <hr className="mt-5 text-black/15" />
        <Link
          href="/dashboard/settings"
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3 mt-5"
        >
          <PiMapPinArea className="text-xl"/> Near Me        </Link>
        <Link href="/dashboard/profile" className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3">
         <IoSettingsOutline className="text-xl" /> Settings
        </Link>
      </nav>

      <div className="p-2.5 bg-black/10 rounded-2xl flex gap-2 cursor-pointer items-center justify-evenly">
         <Image src={"https://avatar.iran.liara.run/public/22"} width={1000} height={1000} alt='' className='w-10 h-10' />
         <div className="mr-5">
          <p className="font-bold">John Doe</p>
          <p className="text-xs">yourname@example.com</p>
         </div>
         <IoIosArrowForward />
      </div>
    </aside>
  );
}
