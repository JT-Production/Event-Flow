"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsBookmarkDash } from "react-icons/bs";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";
import { EventDetailsModal } from "./EventDetailsModal";
import { useFavouriteStore } from "@/store/useFavoriteStore";

export default function EventCard({
  event,
  name,
  venue,
  eventId,
  date,
  thumbnail,
  subtype,
  description,
  phoneNumber,
  country,
  review,
  ticketLink,
  rating,
}: any) {
  const [saved, setSaved] = useState(false);
  const { addToFavorite, favourites } = useFavouriteStore();

  const handleAddFavourite = () => {
    addToFavorite(event);
    console.log(favourites);
    // console.log(event)
  };
  // useEffect(() => {
  //   console.log(favourites)
  // }, [favourites])
  return (
    <>
      <div className="relative inline-block " key={eventId}>
        <Image
          src={
            thumbnail ? thumbnail : "https://avatar.iran.liara.run/public/22"
          }
          width={1000}
          height={1000}
          alt="event"
          className="max-w-66 h-40 bg-black rounded-2xl"
        />
        <div
          onClick={() => {
            setSaved(!saved);
            handleAddFavourite();
          }}
          className={`${
            saved ? "bg-blue-500 text-white" : "bg-white"
          } p-2.5 absolute top-3 right-3 rounded-full cursor-pointer `}
        >
          {" "}
          <BsBookmarkDash className=" text-md text-blac" />
        </div>
      </div>

      <div className=" p-2  flex flex-col gap-1">
        <p className="font-bold">
          {name?.split(" ").length > 4
            ? name.split(" ").slice(0, 3).join(" ") + "..."
            : name}
        </p>
        <p className="flex gap-2 items-center text-xs">
          <HiOutlineCalendarDateRange className="text-lg" />{" "}
          {date?.split(" ").length > 5
            ? date.split(" ").slice(0, 10).join(" ") + "..."
            : date}
        </p>
        <p className="text-xs flex gap-2 items-center">
          <SlLocationPin className="text-lg" />{" "}
          {venue?.split(" ").length > 4
            ? venue.split(" ").slice(0, 5).join(" ") + "..."
            : venue}
        </p>

        <div className="flex items-center justify-between mt-2">
          <p className="flex items-center gap-2 text-xs">{subtype}</p>
          <EventDetailsModal
            image={thumbnail}
            name={name}
            date={date}
            location={venue}
            description={description}
            phoneNumber={phoneNumber}
            country={country}
            review={review}
            rating={rating}
          />
        </div>
      </div>
    </>
  );
}
