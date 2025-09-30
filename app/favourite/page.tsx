'use client'
import React, { useEffect, useState } from 'react'
import EventCard from '../feeds/components/EventCard';


export default function Favourite() {
    const [events, setEvents] = useState(null);
    const storedEvents:any = localStorage.getItem("favourite");
  
    const parse = JSON.parse(storedEvents);
    useEffect(() => {
      setEvents(parse.state.favourites)
      console.log(parse.state.favourites)
      console.log(parse)
    },[storedEvents])
  
  return (
    
     <div className={`  rounded-4xl grid sm:grid-cols-2 grid-cols-1 lg:grid-cols- md:grid-cols-4 gap-5 p-1 lg:mx-10 mx-5 place-items-center`}>
             {events  ? (
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
                 {events === null ? `error`: "No events found"}
               </div>
             )}
             </div>
    
  )

}