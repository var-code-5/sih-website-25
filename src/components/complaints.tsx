import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronUp, ChevronDown, MessageCircle, Share, MapPin, Clock, Calendar, AlertTriangle } from "lucide-react"

const filterTabs = [
  { id: "trending", label: "Trending", icon: AlertTriangle, active: true },
  { id: "nearest", label: "Nearest", icon: MapPin, active: false },
  { id: "progress", label: "Progress", icon: Clock, active: false },
  { id: "latest", label: "Latest", icon: Calendar, active: false },
  { id: "reported", label: "Reported", icon: AlertTriangle, active: false },
]

const complaints = [
  {
    id: 1,
    author: "@MrinaliBhardwaj",
    timeAgo: "22 Hours Ago",
    title: "Sewage overflow near school area",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: null,
    comments: 360,
    votes: { up: 0, down: 0 },
  },
  {
    id: 2,
    author: "@MrinaliBhardwaj",
    timeAgo: "22 Hours Ago",
    title: "Sewage overflow near school area",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "/sewage-overflow-tunnel-water-infrastructure.jpg",
    comments: 360,
    votes: { up: 0, down: 0 },
  },
]

export function ComplaintsFeed() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Complaints</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filterTabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={tab.active ? "default" : "outline"}
                size="sm"
                className={`flex items-center gap-2 ${
                  tab.active
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </Button>
            )
          })}
        </div>
      </div>

      {/* Complaints List */}
      <div className="space-y-4">
        {complaints.map((complaint) => (
          <Card key={complaint.id} className="p-6 bg-white border border-gray-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-600 text-white text-sm">M</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-600">
                  Posted By <span className="text-purple-600">{complaint.author}</span>
                </span>
              </div>
              <span className="text-sm text-purple-600 font-medium">{complaint.timeAgo}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{complaint.title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {complaint.description}{" "}
              <button className="text-purple-600 hover:text-purple-700 font-medium">Read More</button>
            </p>

            {/* Image */}
            {complaint.image && (
              <div className="mb-4">
                <img
                  src={complaint.image || "/placeholder.svg"}
                  alt="Complaint image"
                  className="w-full max-w-md h-48 object-cover rounded-lg"
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2 h-auto">
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </Button>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">{complaint.comments} comments</span>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                  <Share className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
