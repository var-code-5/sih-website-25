"use client";

import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function LoginPage() {
  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/landing_bg.png')] bg-repeat-x relative">
      <div className="w-[90%] sm:w-full max-w-md -translate-y-1/2">
        <div className="bg-white rounded-2xl border-2 border-primary p-8 shadow-sm">
          <div className="space-y-2 sm:space-y-6">
            <Button
              onClick={handleGoogleSignup}
              className="w-full h-12 bg-gradient-to-b from-secondary to-tertiary hover:bg-gradient-to-b hover:from-secondary/90 hover:to-tertiary/90 text-white font-medium rounded-full text-base cursor-pointer"
            >
              Signup With Google
            </Button>

            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-600">Already have an account? </span>
              <Link 
                href="/auth/login" 
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
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
