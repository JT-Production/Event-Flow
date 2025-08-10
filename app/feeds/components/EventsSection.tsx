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

  const getEvents = async () => {

    try {
      const res = await networkInstance.get("/search-events");
      setEvents(res.data.data);
      
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
  // useEffect(() => {
  //   if (events.length > 0) {
  //     localStorage.setItem('events', JSON.stringify(events));
  //   }
  // }, [events]);

  const handleSearch = () => {
    getEvents();
  };

  // useEffect(() => {
  //   const savedEvents = localStorage.getItem('events');
  //   if (savedEvents) {
  //     try {
  //       const parsedEvents = JSON.parse(savedEvents);
  //       setEvents(parsedEvents);
  //     } catch (error) {
  //       console.error('Error parsing saved events:', error);
  //       setEvents([]);
  //     }
  //   }
  // }, []);
 
  
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
      <div className="  rounded-4xl grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 p-1 mx-10 place-items-center">
        {events && events.length > 0 ? (
          events.map((event) => (
            <div key={event.event_id} className=" flex flex-col gap-1 border rounded-2xl p-2 max-w-80 mb-5">
              <EventCard 
                eventId={event.event_id} 
                name={event.name.split(" ").length > 4
                  ? event.name.split(" ").slice(0, 5).join(" ") + "..."
                  : event.name} 
                date={event.date_human_readable.split(" ").length > 5
                  ? event.date_human_readable.split(" ").slice(0, 10).join(" ") + "..."
                  : event.date_human_readable} 
                venue={event.venue.name?.split(" ").length > 4
                  ? event.venue.name.split(" ").slice(0, 5).join(" ") + "..."
                  : event.venue.name} 
                thumbnail={event.thumbnail}
                subtype={event.venue.city}
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
