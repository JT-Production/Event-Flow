import React from 'react'
import Button from './Button'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='py-6 px-10 flex justify-between border-b border-black/20'>
      <div className='text-sm'>
       <h1 className='sm:text-2xl text-lg font-semibold'> Good Morning, Adam👋</h1>
       <p className='text-xs'>Let's dive into exciting events</p>
      </div>

      <div className="flex gap-2 items-center">
        <Button classname={"text-white items-center gap-1 bg-blue-500 text-[14px] sm:flex hidden"}> <AiOutlinePlus className='text-lg' />Create Event</Button>
      <IoNotificationsOutline className='text-2xl border rounded-full w-9 h-9 p-2 font-light' />  
      <Image src={"https://avatar.iran.liara.run/public/22"} width={1000} height={1000} alt='' className='w-10 h-10' />

      </div>

    </div>
  )
}
