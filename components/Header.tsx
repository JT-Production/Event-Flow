"use client";
import React, { useState } from "react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { IoLogOutOutline, IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import useSideBarContext from "@/context/SideBarContext";
import { CreateEventModal } from "./CreateEventModal";
import useAuthContext from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { FaUser } from "react-icons/fa";
import { TiUserOutline } from "react-icons/ti";
import Link from "next/link";

export default function Header() {
  const [dropDown, setDropDown] = useState(false)
  const { isOpen, setIsOpen } = useSideBarContext();
  const {user, setUser} = useAuthContext();
  const router = useRouter()

  function toggleSidebar() {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen((prev) => !prev);
    }
  }
 async function handleSignOut() {
    
  }
  // console.log(user)
  return (
    <div className="py-3 px-10 flex justify-between border-b border-black/20">
      <div className="text-sm">
        <h1 className="sm:text-2xl text-lg font-semibold">
          {" "}
          Good Morning, {user ? user.displayName : "John doe"}👋
        </h1>
        <p className="text-xs">Let's dive into exciting events</p>
       
      </div>

      <div className="flex gap-2 items-center">
        {/* <Button
          classname={
            "text-white items-center gap-1 bg-blue-500 text-[14px] sm:flex hidden"
          }
        >
          {" "}
          <AiOutlinePlus className="text-lg" />
          Create Event
        </Button> */}
        <CreateEventModal />
        <IoNotificationsOutline className="text-2xl border rounded-full w-9 h-9 p-2 font-light" />
        <div className="">
          <Image
          src={"https://avatar.iran.liara.run/public/22"}
          width={1000}
          height={1000}
          alt=""
          className="w-10 h-10"
          // onClick={toggleSidebar}
          onClick={()=> setDropDown(!dropDown)}
        />
        <div className={`absolute mt-3  shadow-2xl p-3  right-10 rounded-2xl bg-white   gap-1 ${dropDown ? "flex flex-col" : "hidden"}`}>
         <div className="flex items-center gap-2 cursor-pointer hover:bg-black/10 p-2 rounded-xl"><TiUserOutline/> <Link href={"/profile"}>Profile</Link></div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-red-400 transition ease-in-out p-2 rounded-xl bg-red-500 text-white" onClick={()=> { signOut(auth).then(() => router.push("/login")) }}><IoLogOutOutline/> <p>Logout</p></div>
        </div>
        </div>
      </div>
    </div>
  );
}
