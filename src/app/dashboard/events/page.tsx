"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, Calendar, MapPin } from "lucide-react"

interface Event {
  id: string
  title: string
  dateRange: string
  location: string
  image: string
}

export default function EventDisplay() {
  const [eventName, setEventName] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [poster, setPoster] = useState<File | null>(null)

  // Mock scheduled events data
  const scheduledEvents: Event[] = [
    {
      id: "1",
      title: "Awareness Camp",
      dateRange: "17 June to 21 July",
      location: "Bengaluru",
      image: "/awareness-camp-event.jpg",
    },
    {
      id: "2",
      title: "Awareness Camp",
      dateRange: "17 June to 21 July",
      location: "Bengaluru",
      image: "/awareness-camp-event.jpg",
    },
    {
      id: "3",
      title: "Awareness Camp",
      dateRange: "17 June to 21 July",
      location: "Bengaluru",
      image: "/awareness-camp-event.jpg",
    },
  ]

  const handlePosterUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setPoster(file)
    }
  }

  const handleSave = () => {
    console.log("Saving event:", { eventName, eventDescription, poster })
    // Handle save logic here
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">Add Events</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Event Form */}
          <div className="bg-white rounded-lg border p-6">
            <div className="space-y-6">
              {/* Event Name */}
              <div className="space-y-2">
                <Label htmlFor="event-name" className="text-sm font-medium text-gray-700">
                  Event Name
                </Label>
                <Input
                  id="event-name"
                  placeholder="Lorem ipsum dolor sit et content lines"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Event Description */}
              <div className="space-y-2">
                <Label htmlFor="event-description" className="text-sm font-medium text-gray-700">
                  Event Description
                </Label>
                <div className="relative">
                  <Textarea
                    id="event-description"
                    placeholder="Lorem ipsum dolor sit et content lines"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    className="w-full min-h-[120px] resize-none"
                    maxLength={100}
                  />
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">{eventDescription.length} / 100</div>
                </div>
              </div>

              {/* Event Poster */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Event Poster</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePosterUpload}
                    className="hidden"
                    id="poster-upload"
                  />
                  <label htmlFor="poster-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">{poster ? poster.name : "Click to upload poster"}</p>
                  </label>
                </div>
              </div>

              {/* Save Button */}
              <Button onClick={handleSave} className="w-auto px-8">
                Save
              </Button>
            </div>
          </div>

          {/* Right side - Events Scheduled */}
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Events Scheduled</h2>
              <p className="text-sm text-gray-500 mb-4">Order of schedule</p>
            </div>

            <div className="space-y-4">
              {scheduledEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative bg-gray-900">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-32 object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-black/50" />
                      <div className="absolute top-3 left-3">
                        <div className="bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg">
                          {event.title}
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 text-white">
                        <div className="flex items-center gap-1 text-xs mb-1">
                          <Calendar className="h-3 w-3" />
                          <span
                            className="font-semibold text-white"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                          >
                            {event.dateRange}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                          <MapPin className="h-3 w-3" />
                          <span
                            className="font-semibold text-white"
                            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                          >
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
