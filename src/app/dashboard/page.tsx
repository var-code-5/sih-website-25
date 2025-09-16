"use client";

import React from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}

function DashboardContent() {
  const { user } = useAuth();

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center pt-20 px-8'>
     <h1>This is a protected route </h1>
    </div>
  )
}
