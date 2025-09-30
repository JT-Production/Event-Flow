"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Button from "../../../components/Button";
import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";


export function EventDetailsModal({image,name,location,date,description,phoneNumber,review,country,ticketLink,rating}: any) {
  const [fileName, setFileName] = useState("No Image selected");
  return (
    <Dialog>
      <DialogTrigger asChild>
          <button className="bg-transparent p-2 px-4 border-2 border-blue-500 rounded-xl text-xs cursor-pointer">
            View Details
          </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[525px] lg:max-w-[625px] bg-white border-0 ">
        <DialogHeader className="pt-2">
            <Image src={image} width={1000} height={1000} alt={name} className="h-62 border border-black/10 rounded-2xl lg:max-w-[575px] md:max-w-[475px] "/>
          <DialogTitle className="">{name}</DialogTitle>
          <DialogDescription className="text-xs  flex gap-4 justify-start">
            <div className="flex gap-2 items-center py-"> <SlLocationPin className={`${location?.length > 110 ? "text-4xl" : "text-lg "}`} />{location}</div>
            <div className="flex gap-2 items-center py-"> <HiOutlineCalendarDateRange className="text-lg" />{date}</div>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 text-sm">
            <div className="space-y-2">
                <h1>Description</h1>
                <div className="text-xs border border-blue-400 bg-blue-50 p-4 rounded-xl">{description}</div>
            </div>
        
            <div className="space-y-2 flex justify-start gap-5">
              
                <div className="text-xs bg-blue-50 p-4 rounded-xl">{phoneNumber}</div>
                <div className="text-xs bg-blue-50 p-4 rounded-xl">{country}</div>
            </div>
            <div className="space-y-2 flex justify-start gap-5">
              
                <div className="text-xs bg-blue-50 p-4 rounded-xl">{rating}</div>
                <div className="text-xs bg-blue-50 p-4 rounded-xl">{review}</div>
            </div>
         
        </div>
        <DialogFooter className="mt-5 flex justify-between">
          <DialogClose asChild>
            <Button color={'bg-red-500'} classname={"text-white text-sm"}>Cancel</Button>
          </DialogClose>
          <Button type="submit"  classname={"text-white text-sm"}>Create Event</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
