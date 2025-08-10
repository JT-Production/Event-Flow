import Button from '@/components/Button';
import React from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';


export default function FilterSection({location, date, eventType, category, handleSearch, setLocation, setDate, setEventType, setCategory}: FilterProps) {
  return (
    <div>
        <div className="md:flex items-center p-10 gap-3 w-full space-y-4 sm:space-y-0">
        <div className="flex items-center ">
          <div className="rounded-2xl border-black/15 border-r-0 p-[11px] px-3 border rounded-r-none">
            <CiLocationOn className="text-lg text-black/70" />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="border border-black/15 text-black/60  border-l-0 rounded-l-none p-3 px-0 rounded-2xl w-full sm:w-82 focus:outline-0 text-xs"
            placeholder="Search"
          />
        </div>

        <div className="flex items-center">
          <div className="rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none">
            <HiOutlineCalendarDateRange className="text-lg text-black/70" />
          </div>
          <select
            className="border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl  w-full  sm:w-38 focus:outline-0  text-xs"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          >
            <option value="" className="text-xs pt-20 hidden">
              Any date
            </option>
            <option value="" className="text-xs pt-20 ">
              Any
            </option>
            <option value="today" className="text-xs pt-20 ">
              Today
            </option>
            <option value="tomorrow" className="text-xs pt-20">
              Tomorrow
            </option>
            <option value="week" className="text-xs pt-20">
              This Week
            </option>
            <option value="weekend" className="text-xs pt-20">
              Weekend
            </option>
            <option value="next_week" className="text-xs pt-20">
              Next Week
            </option>
            <option value="month" className="text-xs pt-20">
              This Month
            </option>
            <option value="next_month" className="text-xs pt-20">
              Next Month
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <div className="rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none">
            <HiOutlineCalendarDateRange className="text-lg text-black/70" />
          </div>
          <select
            className="border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl w-full  sm:w-38 focus:outline-0  text-xs"
            value={eventType}
            onChange={(e) => {
              setEventType(e.target.value);
            }}
          >
            <option value="" className="text-xs pt-20 hidden">
              Event Type
            </option>
            <option value="Any" className="text-xs pt-20 ">
              Any
            </option>
            <option value="party" className="text-xs pt-20">
              Party
            </option>
            <option value="concert" className="text-xs pt-20">
              Concert
            </option>
            <option value="festival" className="text-xs pt-20">
              Festival
            </option>
            <option value="business" className="text-xs pt-20">
              Business
            </option>
            <option value="event" className="text-xs pt-20">
              Event
            </option>
            <option value="show" className="text-xs pt-20">
              Show
            </option>
          </select>
        </div>
        <div className="flex items-center">
          <div className="rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none">
            <HiOutlineCalendarDateRange className="text-lg text-black/70" />
          </div>
          <select
            className="border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl w-full  sm:w-38 focus:outline-0  text-xs"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="Any date" className="text-xs pt-20 hidden">
              Category
            </option>
            <option value="" className="text-xs pt-20 ">
              Any / None
            </option>
            <option value="Music" className="text-xs pt-20 ">
              Music
            </option>
            <option value="Art" className="text-xs pt-20 ">
              Art
            </option>
            <option value="Educational" className="text-xs pt-20">
              Education
            </option>
            <option value="Business" className="text-xs pt-20">
              Business
            </option>
            <option value="Gospel" className="text-xs pt-20">
              Gospel
            </option>
            <option value="Africa" className="text-xs pt-20">
              Africa
            </option>
            <option value="Tech" className="text-xs pt-20">
              Tech
            </option>
            <option value="Cultural" className="text-xs pt-20">
              Traditional
            </option>
            <option value="Crypto" className="text-xs pt-20">
              Crypto
            </option>
            <option value="Comedy" className="text-xs pt-20">
              Comedy
            </option>
            <option value="Any date" className="text-xs pt-20"></option>
          </select>
        </div>

        <Button
          onClick={handleSearch}
          classname={"text-white items-center gap-2 px-4 w-auto text-sm"}
        >
          {" "}
          <CiSearch className="text-lg" /> Search
        </Button>

        {/* <div className='flex gap- items-center  rounded-2xl bg-black/20 cursor-pointer'>
           <IoIosList className=' text-2xl px-2 w-full' />
            <CiGrid41 className='bg-black p-1 px-2 text-2xl rounded-xl h-full text-white w-full' />
        </div> */}
      </div>
    </div>
  )
}
