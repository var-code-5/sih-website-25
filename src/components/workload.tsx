import { Card } from "@/components/ui/card"
import { Zap, Droplets, Truck, HardHat, Package, Trash2 } from "lucide-react"

const departments = [
  {
    id: "electricity",
    name: "Electricity Department",
    reports: 1881,
    change: "+8% from yesterday",
    icon: Zap,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-600",
  },
  {
    id: "water",
    name: "Water Department",
    reports: 203,
    change: "+8% from yesterday",
    icon: Droplets,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-600",
  },
  {
    id: "transport",
    name: "Transport Department",
    reports: 8945,
    change: "0.5% from yesterday",
    icon: Truck,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    iconBg: "bg-green-600",
  },
  {
    id: "construction",
    name: "Construction Department",
    reports: 1881,
    change: "+8% from yesterday",
    icon: HardHat,
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-600",
  },
  {
    id: "logistics",
    name: "Logistics Department",
    reports: 899,
    change: "+5% from yesterday",
    icon: Package,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-600",
  },
  {
    id: "disposal",
    name: "Disposal Department",
    reports: 8945,
    change: "0.5% from yesterday",
    icon: Trash2,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    iconBg: "bg-green-600",
  },
]

export function WorkloadDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Workload</h2>
        <p className="text-gray-600 text-sm">Complaints per department</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {departments.map((dept) => {
          const Icon = dept.icon
          return (
            <Card key={dept.id} className={`p-4 border-0 ${dept.bgColor}`}>
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg ${dept.iconBg}`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">{dept.name}</h3>

                <div className="space-y-1">
                  <p className="text-lg font-bold text-gray-900">{dept.reports.toLocaleString()} Reports</p>
                  <p className="text-xs text-gray-600">{dept.change}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
