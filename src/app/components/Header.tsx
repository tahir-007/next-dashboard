import React from "react";
import {
  IoIosLogOut,
  IoIosSearch,
  IoIosNotificationsOutline,
  IoIosWifi,
  IoMdVolumeHigh,
} from "react-icons/io";
import { IoBatteryCharging } from "react-icons/io5";
import { signOut } from "next-auth/react";

const Header = () => {
  // Function to handle the sign out process
  const handleOnClick = async () => {
    // Calling the signOut function from next-auth
    const result = await signOut({
      callbackUrl: "/login",
    });
    console.log("Logged Out successfully");
  };
  return (
    <div>
      <header className=" bg-cover flex justify-end items-center p-4">
        <IoIosSearch className="size-7 ml-4 text-gray-50" />
        <IoIosNotificationsOutline className="size-7 ml-4 text-gray-50" />
        <IoIosWifi className="size-7 ml-4 text-gray-50" />
        <IoMdVolumeHigh className="size-7 ml-4 text-gray-50" />
        <IoBatteryCharging className="size-7 ml-4 text-gray-50" />
        {/* Button to trigger the sign out process */}
        <button onClick={handleOnClick}>
          <IoIosLogOut className="size-7 ml-4 text-gray-50" />
        </button>
      </header>
    </div>
  );
};

export default Header;
