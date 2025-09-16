"use client";

import React, { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Maps from '@/components/Maps';

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center pt-20 px-8'>
      <h1 className='text-2xl font-bold mb-6'>Dashboard (Protected Route)</h1>
      {/* <Maps /> */} 
      {/* todo: ask dd for the news api key */}
    </div>
  )
}
