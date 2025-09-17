import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronDown, Edit3, BarChart3 } from "lucide-react"
import Image from "next/image"

interface Complaint {
  id: string
  title: string
  description: string
  image?: string
  timeAgo: string
  postedBy: string
  assignedTo: string
  status: "Ongoing" | "Completed"
  statusColor: string
}

const complaints: Complaint[] = [
  {
    id: "1",
    title: "Sewage overflow near school area",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    image: "/sewage-tunnel-pipe-water.jpg",
    timeAgo: "22 Hours Ago",
    postedBy: "@MinallBhardwaj",
    assignedTo: "Disposal department",
    status: "Ongoing",
    statusColor: "bg-orange-500",
  },
  {
    id: "2",
    title: "Potholes in Kharghar district",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    timeAgo: "22 Hours Ago",
    postedBy: "@MinallBhardwaj",
    assignedTo: "Construction department",
    status: "Completed",
    statusColor: "bg-green-500",
  },
]

export default function CivicDashboard() {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sort Button */}
            <div className="flex justify-start">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 flex items-center gap-2">
                Sort By
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Complaints List */}
            <div className="space-y-6">
              {complaints.map((complaint) => (
                <Card key={complaint.id} className="bg-white shadow-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900">{complaint.title}</h3>
                      <span className="text-sm text-purple-600 font-medium">{complaint.timeAgo}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {complaint.image && (
                      <div className="w-full max-w-sm">
                        <Image
                          src={complaint.image || "/placeholder.svg"}
                          alt={complaint.title}
                          width={200}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {complaint.description}{" "}
                        <span className="text-purple-600 cursor-pointer hover:underline">Read More</span>
                      </p>

                      <div className="text-sm text-gray-500">
                        Posted By <span className="text-purple-600 font-medium">{complaint.postedBy}</span>
                      </div>

                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Assigned - </span>
                          <span className="text-purple-600 font-medium">{complaint.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">Status - </span>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${complaint.statusColor}`} />
                            <span className="font-medium">{complaint.status}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
                        >
                          <Edit3 className="h-4 w-4 mr-2" />
                          Modify
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Workload</h3>
                <p className="text-sm text-gray-500">Complaints per department</p>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Chart visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
