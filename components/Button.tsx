import React from 'react'

export default function Button({ classname, children, onClick}: any) {
  return (
    <button onClick={onClick} className={'bg-blue-500 px-5 py-3 rounded-xl flex gap-1 cursor-pointer ' + classname}>{children}</button>
  )
}
