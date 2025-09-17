import { ComplaintsFeed } from "@/components/complaints";
import { WorkloadDashboard } from "@/components/workload";


export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ComplaintsFeed />
        </div>
        <div className="lg:col-span-1">
          <WorkloadDashboard />
        </div>
      </div>
    </div>
  )
}
