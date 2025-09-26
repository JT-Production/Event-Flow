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

import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, ChangeEvent } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

export function CreateEventModal({}) {
  const [fileName, setFileName] = useState("No Image selected");
  return (
   
      <Dialog>
        <DialogTrigger asChild>
          <Button
            classname={
              "text-white items-center gap-1 bg-blue-500 text-[14px] sm:flex hidden"
            }
          >
            {" "}
            <AiOutlinePlus className="text-lg" />
            Create Event
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white border-0">
          <DialogHeader>
            <DialogTitle className="text-center">Create Event</DialogTitle>
            <DialogDescription className="text-xs mb-5">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 text-sm">
            <label
              htmlFor="imageUpload"
              className="flex cursor-pointer flex-col gap-3 p-5 border-dashed border border-blue-500 bg-blue-50 rounded-2xl items-center justify-center"
            >
              {/* <label htmlFor="imageUpload" className="text-center "> */}
              <IoCloudUploadOutline className="text-2xl" />
              <p className="text-black/30 text-xs">
                Choose a file or drag & drop it here
              </p>
              {/* </label> */}
              <input
                id="imageUpload"
                type="file"
                placeholder=""
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const file = e.currentTarget.files?.[0];
                  setFileName(file?.name ?? "No Image selected");
                }}
              />
              <span style={{ marginLeft: "10px", color: "#555" }}>
                {fileName}
              </span>
            </label>
            <div className="grid gap-1">
              <label htmlFor="name-1">Event Name</label>
              <input
                type="text"
                className="border focus:outline-0 p-2 rounded-lg"
              />
            </div>
            <div className="flex gap-3 ">
              <div className="grid gap-1 grow-8">
                <label htmlFor="username-1">Date</label>
                <input
                  type="date"
                  className="border focus:outline-0 p-2 rounded-lg"
                />
              </div>
              <div className="grid gap-1     grow-1">
                <label htmlFor="username-1">Time</label>
                <input
                  type="time"
                  className="border focus:outline-0 p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="grid gap-1">
              <label htmlFor="name-1">Location</label>
              <input
                type="text"
                className="border focus:outline-0 p-2 rounded-lg"
              />
            </div>
          </div>
          <DialogFooter className="mt-5 flex justify-between">
            <DialogClose asChild>
              <Button color={"bg-red-500"} classname={"text-white text-sm"}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" classname={"text-white text-sm"}>
              Create Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

  );
}
