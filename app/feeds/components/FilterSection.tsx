import Button from '@/components/Button'
import React from 'react'
import { CiGrid41, CiLocationOn, CiSearch } from 'react-icons/ci'
import { HiOutlineCalendarDateRange } from 'react-icons/hi2'
import { IoIosList } from 'react-icons/io'

export default function FilterSection() {
  return (
    <div className='flex itme-center p-10 gap-3 max-w-100'>
        <div className="flex items-center">
            <div className='rounded-2xl border-black/15 border-r-0 p-[11px] px-3 border rounded-r-none'><CiLocationOn className='text-lg text-black/70' /></div>
            <input type="text" className='border border-black/15 text-black/60  border-l-0 rounded-l-none p-3 px-0 rounded-2xl w-82 focus:outline-0 text-xs' placeholder='Search' />
        </div>

        <div className="flex items-center">
            <div className='rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none'><HiOutlineCalendarDateRange className='text-lg text-black/70' /></div>
            <select className='border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl w-38 focus:outline-0  text-xs' >
            <option value="Any date" className='text-xs pt-20 hidden'>Any date</option>
            <option value="Any date" className='text-xs pt-20 '>Today</option>
            <option value="Any date" className='text-xs pt-20'>Tomorrow</option>
            <option value="Any date" className='text-xs pt-20'>This Week</option>
            <option value="Any date" className='text-xs pt-20'>Weekend</option>
            <option value="Any date" className='text-xs pt-20'>Next Week</option>
            <option value="Any date" className='text-xs pt-20'>This Month</option>
            <option value="Any date" className='text-xs pt-20'>Next Month</option>
            </select>
        </div>
        <div className="flex items-center">
            <div className='rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none'><HiOutlineCalendarDateRange className='text-lg text-black/70' /></div>
            <select className='border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl w-38 focus:outline-0  text-xs' >
            <option value="Any date" className='text-xs pt-20 hidden'>Event Type</option>
            <option value="Any date" className='text-xs pt-20 '>Any</option>
            <option value="Any date" className='text-xs pt-20'>Party</option>
            <option value="Any date" className='text-xs pt-20'>Concert</option>
            <option value="Any date" className='text-xs pt-20'>Festival</option>
            <option value="Any date" className='text-xs pt-20'>Business</option>
            <option value="Any date" className='text-xs pt-20'>This Month</option>
            <option value="Any date" className='text-xs pt-20'>Next Month</option>
            </select>
        </div>
        <div className="flex items-center">
            <div className='rounded-2xl border-black/15 border-r-0 p-3 px-3 border rounded-r-none'><HiOutlineCalendarDateRange className='text-lg text-black/70' /></div>
            <select className='border border-black/15 text-black/60  border-l-0 rounded-l-none p-3.5 px-0 rounded-2xl w-38 focus:outline-0  text-xs' >
            <option value="Any date" className='text-xs pt-20 hidden'>Category</option>
            <option value="Any date" className='text-xs pt-20 '>Music</option>
            <option value="Any date" className='text-xs pt-20 '>Art</option>
            <option value="Any date" className='text-xs pt-20'>Education</option>
            <option value="Any date" className='text-xs pt-20'>Business</option>
            <option value="Any date" className='text-xs pt-20'>Gospel</option>
            <option value="Any date" className='text-xs pt-20'>Africa</option>
            <option value="Any date" className='text-xs pt-20'>Traditional</option>
            <option value="Any date" className='text-xs pt-20'>Crypto</option>
            <option value="Any date" className='text-xs pt-20'></option>
            </select>
        </div>

        <Button classname={"text-white items-center gap-2 px-4 w-ful text-sm"}> <CiSearch className='text-lg' /> Search</Button>

        {/* <div className='flex gap- items-center  rounded-2xl bg-black/20 cursor-pointer'>
           <IoIosList className=' text-2xl px-2 w-full' />
            <CiGrid41 className='bg-black p-1 px-2 text-2xl rounded-xl h-full text-white w-full' />
        </div> */}
    </div>
  )
}
