import React from 'react'
import DashboardLayout from './layout'
import FilterSection from './components/FilterSection'
import EventDetails from './components/EventDetails'


export default function Dashboard() {
  return (
    <div>
        <FilterSection/>
        <EventDetails/>
    </div>
  )
}
