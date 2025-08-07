"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsBookmarkDash, BsBookmarkDashFill } from "react-icons/bs";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiMapPinArea, PiSidebarSimpleBold } from "react-icons/pi";
import { RiHomeSmileLine } from "react-icons/ri";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-74'} bg-blue-00 border border-black/10 text-black p-4 flex flex-col h-screen transition-all duration-300 ease-in-out`}>
      {/* Header with logo and toggle */}
      <div className="flex justify-between items-center py-2">
        {!isCollapsed && (
          <Image
            src={"/logoblue.png"}
            alt="logo"
            width={100}
            height={100}
            className="h-14 w-40 object-cover"
          />
        )}
        <PiSidebarSimpleBold 
          className="text-black text-2xl cursor-pointer mb-1.5" 
          onClick={toggleSidebar}
        />
      </div>

      {/* Navigation */}
      <nav className="space-y-1 mt-5 text-sm h-screen">
        <Link
          href="/dashboard/overview"
          className="hover:bg-black/10 flex items-center gap-3 bg-blue-500 p-3 rounded-2xl text-white"
          title={isCollapsed ? "Home" : ""}
        >
          <RiHomeSmileLine className="text-xl flex-shrink-0" />
          {!isCollapsed && <span>Home</span>}
        </Link>
        
        <Link
          href="/dashboard/settings"
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3"
          title={isCollapsed ? "Schedule" : ""}
        >
          <HiMiniCalendarDateRange className="text-xl flex-shrink-0" />
          {!isCollapsed && <span>Schedule</span>}
        </Link>
        
        <Link
          href="/dashboard/overview"
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3"
          title={isCollapsed ? "Favourite" : ""}
        >
          <BsBookmarkDash className="text-lg flex-shrink-0" />
          {!isCollapsed && <span>Favourite</span>}
        </Link>
        
        <hr className="mt-5 text-black/15" />
        
        <Link
          href="/dashboard/settings"
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3 mt-5"
          title={isCollapsed ? "Near Me" : ""}
        >
          <PiMapPinArea className="text-xl flex-shrink-0" />
          {!isCollapsed && <span>Near Me</span>}
        </Link>
        
        <Link 
          href="/dashboard/profile" 
          className="hover:bg-black/10 rounded-2xl flex items-center gap-3 p-3"
          title={isCollapsed ? "Settings" : ""}
        >
          <IoSettingsOutline className="text-xl flex-shrink-0" />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </nav>

      {/* User profile section */}
      <div className={`${isCollapsed ? 'p-2' : 'p-2.5'} bg-black/10 rounded-2xl flex gap-2 cursor-pointer items-center ${isCollapsed ? 'justify-center' : 'justify-evenly'}`}>
        <Image 
          src={"https://avatar.iran.liara.run/public/22"} 
          width={1000} 
          height={1000} 
          alt='' 
          className='w-10 h-10 flex-shrink-0' 
        />
        {!isCollapsed && (
          <>
            <div className="mr-5">
              <p className="font-bold">John Doe</p>
              <p className="text-xs">yourname@example.com</p>
            </div>
            <IoIosArrowForward />
          </>
        )}
      </div>
    </aside>
  );
}
