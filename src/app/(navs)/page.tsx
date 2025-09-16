import { ArrowUpRight, CalendarArrowDown, Dot } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[url('/landing_bg.png')] bg-repeat-x relative">
      <div className="flex flex-col items-center justify-center gap-6 p-4 text-center w-full md:w-3/4 lg:w-1/2">
        <div className="flex items-center gap-4 text-primary bg-primary/10 px-4 py-2 rounded-lg border-primary border">
          <CalendarArrowDown />
          <h3 className="text-black text-sm md:text-base">Report your Grievances</h3>
          <ArrowUpRight />
        </div>
        <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Public <span className="text-black">Pulse</span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          Public Pulse empowers <span className="text-primary">citizens</span> and{" "}
          <span className="text-primary">governments</span> through transparent, collaborative, and real-time grievance resolution.
        </p>
        <Link href="/dashboard" className="cursor-pointer">
          <button className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full">
            Get Started
          </button>
        </Link>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="w-full min-h-32 md:min-h-48 bg-[url('/bg-ppl.png')] bg-repeat-x"></div>
        <Marquee autoFill className="text-white bg-primary uppercase p-2 text-xs md:text-sm">
          <span>Empowering citizens</span>
          <Dot />
          <span>Transparent Governance</span>
          <Dot />
        </Marquee>
      </div>
    </div>
  );
}
