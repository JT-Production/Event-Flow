"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import google from "../../../assets/images/google.png";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { login } from "@/firebase/auth";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      alert("Please fill all the fields");
      setLoading(false);

      return;
    }
    const result = await login(email, password);

    if (result.user.uid) {
      toast.success("Sign In Success", {
        description: "You've signed up successfully!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      router.push("/feeds");
    } else {
      toast.error("Sign In Failed", {
        description: "You're unable to sign up!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      alert("Sign up failed. Please try again.");
    }

    setLoading(false);
    // setName("");
    // setEmail("");
    // setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]  mt-5">
        <div className="border p-10 rounded-2xl shadow-md w text-center max-w-[450px] ">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-xs text-gray-500">
            Start exploring events around and creating your event you can share
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-4 text-xs"
          >
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg focus:outline-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="border p-3 rounded-lg focus:outline-0 border-r-0 rounded-r-none grow-7"
                 value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className=" text-blue-500 cursor-pointer border p-3.5 rounded-lg focus:outline-0 border-l-0 rounded-l-none "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEye /> : <VscEyeClosed />}
              </span>
            </div>

            <button
              
              className="bg-blue-500 text-white p-2 rounded-lg mt-5"
            >
              {loading ? " Loading..." : " Sign In"}
            </button>
            <div className="flex items-center gap-2 border p-2 rounded-lg  cursor-pointer justify-center">
              <Image
                src={google}
                width={1000}
                height={1000}
                alt="google"
                className="w-5 h-5"
              />
              <span className="text-xs">Sign In with Google</span>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Don't have an account?{" "}
            <Link href={"/signup"} className="text-blue-500 cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
