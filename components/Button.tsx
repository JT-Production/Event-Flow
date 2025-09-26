import React from 'react'

export default function Button({ classname, children, onClick, color="bg-blue-500"}: any) {
  return (
    <button onClick={onClick} className={color +'  px-5 py-3 rounded-xl flex gap-1 cursor-pointer ' + classname}>{children}</button>
  )
}
