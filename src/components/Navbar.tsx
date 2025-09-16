import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='w-full flex items-center justify-between px-8 py-4 fixed bg-white shadow-lg z-10'>
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      <button className='bg-black text-white px-4 py-2 rounded-full'>Admin Login</button>
    </div>
  )
}
