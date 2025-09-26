"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import google from "../../../assets/images/google.png";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Link from "next/link";
import { loginWithGoogle, signup } from "../../../firebase/auth";
import { useRouter } from "next/navigation";
import useAuthContext from "@/context/AuthContext";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
export default function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const { user, setUser } = useAuthContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      setLoading(false);

      return;
    }
    const result = await signup(name, email, password);

    if (result?.success) {
      setIsAuthenticated(true);
      toast.success("Sign Up Success", {
        description: "You've signed up successfully!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      router.push("/login");
    } else {
      setIsAuthenticated(true);
      toast.error("Sign Up Failed", {
        description: "You're unable to sign up!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      alert("Sign up failed. Please try again.");
    }
    setLoading(false);
  };

  const handleGoogleSignIn =async () => {
   const result = await loginWithGoogle();
    setLoading(true);
   if(result?.success) {
       toast.success("Sign Up Success", {
        description: "You've signed up successfully!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
      router.push("/feeds");
   } else{
      toast.error("Sign Up Failed", {
        description: "You're unable to sign up!",
        action: {
          label: "Close",
          onClick: () => console.log("Undo"),
        },
      });
   }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]  mt-5">
        <div className="border p-10 rounded-2xl shadow-md w text-center max-w-[450px] ">
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <p className="text-xs text-gray-500">
            Start exploring events around and creating your event you can share
          </p>
          <form
            action=""
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col gap-4 text-xs"
          >
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg focus:outline-0"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
                className="text-xs text-black cursor-pointer border p-3.5 rounded-lg focus:outline-0 border-l-0 rounded-l-none "
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEye /> : <VscEyeClosed />}
              </span>
            </div>

            <button className="bg-blue-500 text-white p-3 rounded-lg mt-5">
              {loading ? " Loading..." : " Sign Up"}
            </button>
            <div onClick={handleGoogleSignIn} className="flex items-center gap-2 border p-3 rounded-lg  cursor-pointer justify-center">
              <Image
                src={google}
                width={1000}
                height={1000}
                alt="google"
                className="w-5 h-5"
              />
              <span className="text-xs"> {loading ? " Signing in..." : " Sign up with Google"}</span>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            By signing up, you agree to our Terms & Conditions and Privacy
            Policy.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-500 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Toaster
        // className={`${
        //   isAuthenticated
        //     ? "bg-green-50 border border-green-300"
        //     : "bg-red-50 border border-red-300"
        // }`}
        toastOptions={{
          // className:{

          // }
        }}
      />
    </>
  );
}
