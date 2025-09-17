import Maps from '@/components/Maps'
import { ChartNoAxesColumnIncreasing, FileText, UserPlus } from 'lucide-react';
import React from 'react'
import { DataTable } from './data-table';
import { columns, Payment } from './columns';

export const payments: Payment[] = [
  {
    id: "728ed52f",
    request: "This issue is not related to our depeartmenr",
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    request: "Need immediate assistance",
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "f6c3a2b1",
    request: "Request for information",
    status: "success",
    email: "f@example.com",
  },
  {
    id: "a1b2c3d4",
    request: "Follow-up on previous request",
    status: "failed",
    email: "a@example.com",
  },
]

export default function page() {
  const todaysOverview = [
    { icon: ChartNoAxesColumnIncreasing, metric: "1,000", metricType: "Reports", change: "+5%", changeType: "increase", background:"bg-yellow-100" },
    { icon: FileText, metric: "500", metricType: "Problems registered", change: "-2%", changeType: "decrease", background:"bg-red-100" },
    { icon: UserPlus, metric: "300", metricType: "Problems resolved", change: "+10%", changeType: "increase", background:"bg-green-100" },
  ];

  const data = payments;

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-full sm:w-[70%] h-full'>
        <h1 className='text-3xl font-semibold mt-2'>Today's Overview</h1>
        <p className='text-gray-500 mb-6'>Bengaluru's progress summary</p>
        <div className='w-full min-h-1/3 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {todaysOverview.map((item, index) => (
            <div key={index} className={`p-4 rounded-lg shadow-md flex flex-col justify-between ${item.background}`}>
              <div className='flex flex-col items-start justify-evenly h-full'>
                <div className='p-3 bg-blue-100 rounded-full'>
                  <item.icon className='text-blue-500' />
                </div>
                <div className='ml-4'>
                  <p className='text-2xl font-bold'>{item.metric}</p>
                  <p className='text-gray-500'>{item.metricType}</p>
                </div>
              </div>
              <div className={`mt-4 text-sm font-medium ${item.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
                {item.change} {item.changeType}
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className='text-3xl font-semibold mt-6 mb-4'>Recent Issues</h1>
          <p className='text-gray-500 mb-8'>List of issues reported recently</p>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
      <div className='w-[30%] h-full hidden sm:block'>
        <Maps />
      </div>
    </div>
  )
}
