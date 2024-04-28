"use client";

import { signIn } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import Image from "next/image";

const Login = () => {
  // State variables for storing the email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function for handling the form submission
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      console.log("Logged in successfully");
    }
  };
  return (
    <div className="min-h-screen flex">
      <div
        className="w-1/2 h-screen bg-no-repeat bg-center bg-cover rounded-tr-3xl"
        style={{
          backgroundImage: "url('/Images/Login_Wallpaper.png')",
          borderTopRightRadius: "8.5rem",
        }}
      />
      <div
        className="w-1/2 h-screen bg-no-repeat bg-center bg-cover rounded-tl-3xl ml-2"
        style={{
          backgroundImage: "url('/Images/Login_Wallpaper.png')",
          borderTopLeftRadius: "8.5rem",
        }}
      />
      <div className="max-w-3xl w-full space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-10 rounded-lg p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <Image
          className="mx-auto w-14 h-14"
          src="/Images/Logo.png"
          alt="Logo"
        />
        <div className="flex">
          <div className="relative h-80 w-80">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#BEB16B"
                d="M38.7,-55.5C45.5,-40.4,43.1,-23.8,46.6,-7.7C50.1,8.5,59.5,24.2,56.5,35.6C53.5,47.1,38,54.4,21.1,62.5C4.3,70.5,-13.9,79.4,-28.7,75.5C-43.4,71.5,-54.6,54.8,-65,37.3C-75.4,19.8,-85,1.6,-81.3,-13.4C-77.5,-28.4,-60.5,-40.1,-44.7,-53.6C-29,-67.1,-14.5,-82.3,0.7,-83.2C16,-84.1,31.9,-70.6,38.7,-55.5Z"
                transform="translate(100 100)"
              />
            </svg>
            <Image
              className="absolute w-1/3 top-0 bottom-0 right-0 m-auto"
              style={{ left: "-2.25rem" }}
              src="/Images/Ellipse 33.png"
              alt="Left Image"
            />
          </div>

          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Welcome back...</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full p-2 border-none bg-gray-500 rounded-full text-white"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="w-full p-2 border-none bg-gray-500 rounded-full my-4 text-white"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex items-center">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember" className="ml-2">
                  Remember me
                </label>
              </div>
              <button className="w-full p-2 bg-black text-white rounded-full my-2">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
