"use client";

import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/utils/firebase";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      toast.success(`Welcome ${user.displayName}!`);
      
      // Redirect to dashboard or home page after successful login
      router.push("/dashboard");
      
    } catch (error: any) {
      console.error("Error signing in with Google:", error);
      toast.error(error.message || "Failed to sign in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/landing_bg.png')] bg-repeat-x relative">
      <div className="w-[90%] sm:w-full max-w-md -translate-y-1/2">
        <div className="bg-white rounded-2xl border-2 border-primary p-8 shadow-sm">
          <div className="space-y-2 sm:space-y-6">
            <Button
              onClick={handleGoogleSignup}
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-b from-secondary to-tertiary hover:bg-gradient-to-b hover:from-secondary/90 hover:to-tertiary/90 text-white font-medium rounded-full text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Login With Google"}
            </Button>

            <div className="flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">Or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <div className="text-center">
              <span className="text-sm text-gray-600">Don't have an account? </span>
              <Link 
                href="/auth/signup" 
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Sign Up
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
