import React from 'react'

export default function Button({ classname, children}: any) {
  return (
    <button className={'bg-blue-500 px-5 py-3 rounded-xl flex gap-1 cursor-pointer ' + classname}>{children}</button>
  )
}
