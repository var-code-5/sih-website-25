"use client";

import React from 'react'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'

export default function Navbar() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <div className='w-full flex items-center justify-between px-8 py-4 fixed bg-white shadow-lg z-10'>
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>
      
      <div className="flex items-center gap-4">
        {loading ? (
          <div className="animate-pulse bg-gray-200 w-20 h-8 rounded"></div>
        ) : user ? (
          <div className="flex items-center gap-4">
            {user.photoURL && (
              <Image 
                src={user.photoURL} 
                alt={user.displayName || "User"} 
                width={32} 
                height={32} 
                className="rounded-full"
              />
            )}
            <span className="text-sm font-medium">{user.displayName}</span>
            <Button 
              onClick={handleLogout}
              variant="outline"
              size="sm"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">
                Sign Up
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
