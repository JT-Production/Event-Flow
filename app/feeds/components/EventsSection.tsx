"use client";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { CiGrid41, CiLocationOn, CiSearch } from "react-icons/ci";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoIosList } from "react-icons/io";
import EventCard from "./EventCard";
import NetworkInstance from "@/services/NetworkInstance";
import FilterSection from "./FilterSection";
import Pagenation from "./Pagenation";
import useSideBarContext from "@/context/SideBarContext";


export default function EventsSection() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [location, setLocation] = useState("Lagos");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("Events");
  const [category, setCategory] = useState("");
  const [dataError, setDataError] = useState<string>("")
  const [limit, setLimit] = useState(0)
  const networkInstance = NetworkInstance(
    `${category} ${eventType} in ${location}`,
    date,
    limit
  );
  const {isOpen, setIsOpen} = useSideBarContext();
  const [gridValue, setGridValue] = useState<string>();
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  // useEffect(() => {
  //   if (screenWidth >= 1250) {
  //     setGridValue("4")
  //     console.log(screenWidth)
  // }}, [screenWidth]);

console.log(screenWidth)
  const getEvents = async () => {

    try {
      const res = await networkInstance.get("/search-events");
      // setEvents(res.data.data);
      
      console.log(events)
    } catch (err: any) {
        // setError(err);
        const error = err.message;
        setDataError(error)
      console.log(err.message);
      
    }
  };
console.log(events)
console.log(limit)
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  const handleSearch = () => {
    getEvents();
  };

  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      try {
        const parsedEvents = JSON.parse(savedEvents);
        setEvents(parsedEvents);
      } catch (error) {
        console.error('Error parsing saved events:', error);
        setEvents([]);
      }
    }
  }, []);
 
  console.log(isOpen)
  return (
    <div className="flex-1 wid">
      <FilterSection 
        location={location} 
        category={category} 
        eventType={eventType} 
        date={date} 
        handleSearch={handleSearch}
        setLocation={setLocation}
        setDate={setDate}
        setEventType={setEventType}
        setCategory={setCategory}
      />
      <div className={`  rounded-4xl grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-${isOpen  ? "3": "4"} md:grid-cols-4 gap-5 p-1 lg:mx-10 mx-5 place-items-center`}>
        {events && events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className=" flex flex-col gap-1 border border-black/15 rounded-3xl p-4 max-w-74 mb-3">
              <EventCard 
              event={event}
                eventId={event.event_id} 
                name={event.name} 
                date={event.date_human_readable} 
                venue={event.venue.full_address} 
                thumbnail={event.thumbnail}
                subtype={event.venue.city}
                description ={event.description}
                phoneNumber={event.venue.phone_number}
                country={event.venue.country}
                review={event.venue.review_count}
                rating={event.venue.rating}
              />
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-8 text-gray-500 h-100 flex justify-center  items-center">
            {events === null ? `${dataError} `: "No events found"}
          </div>
        )}

        
      </div>
     <Pagenation setLimit={setLimit} nextList={getEvents}/>
    </div>
  );
}
