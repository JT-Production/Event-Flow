'use client'
import React, { useEffect, useState } from 'react'
import EventsSection from './components/EventsSection';
import EventCard from './components/EventCard';


export default function Dashboard() {

   
  return (
    <div>
      <h1>Saved</h1>
        <EventsSection />
    </div>
  )
}
