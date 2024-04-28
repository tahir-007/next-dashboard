import React, { useState } from "react";
import { IoChatbubble } from "react-icons/io5";
import Image from "next/image";

const Footer = () => {
  // State for controlling the visibility of the tooltip
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <footer className="h-16 bg-opacity-50 bg-cover bg-white flex justify-between items-center px-4 absolute bottom-0 w-full">
      <div className="relative">
        <button
          className="bg-black text-white font-semibold py-2 px-4 rounded"
          // Show the tooltip when the mouse enters the button
          onMouseEnter={() => setShowTooltip(true)}
          // Hide the tooltip when the mouse leaves the button
          onMouseLeave={() => setShowTooltip(false)}
        >
          File
        </button>
        {/* Render the tooltip if showTooltip is true */}
        {showTooltip && (
          <div className="absolute bottom-full mb-2 w-44 text-center text-sm p-2 rounded opacity-100 z-10">
            <IoChatbubble className="w-full h-full text-yellow-400" />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
              <h6 className="font-bold">Hello!</h6>
              <p>
                What are you
                <br /> looking for?😊
              </p>
            </div>
          </div>
        )}
      </div>

      <Image
        className="h-8 w-auto"
        src="/Images/Logo.png"
        alt="Logo"
        width={32}
        height={32}
      />
    </footer>
  );
};

export default Footer;
