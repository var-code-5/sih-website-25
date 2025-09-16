"use client";

import React, { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Maps from '@/components/Maps';
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <DashboardContent children={children} />
    </ProtectedRoute>
  )
}

function DashboardContent({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 sm:hidden" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    Dashboard
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {typeof window !== "undefined" && window.location.pathname !== "/dashboard" && (
                  <BreadcrumbSeparator className="hidden md:block" />
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    {typeof window !== "undefined" && window.location.pathname
                      .split("/")
                      .filter((item) => item =="dashboard" ? false : item)
                      .map((segment, index, arr) => (
                        <React.Fragment key={index}>
                          {index === arr.length - 1 ? (
                            segment.charAt(0).toUpperCase() + segment.slice(1)
                          ) : (
                            <>
                              <BreadcrumbLink href={`/${arr.slice(0, index + 1).join("/")}`}>
                                {segment.charAt(0).toUpperCase() + segment.slice(1)}
                              </BreadcrumbLink>
                              <BreadcrumbSeparator />
                            </>
                          )}
                        </React.Fragment>
                      ))}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
