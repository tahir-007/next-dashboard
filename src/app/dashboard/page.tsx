"use client";
import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/Header";
import AppIcons from "../components/AppIcons";
import TimeDisplay from "../components/TimeDisplay";
import Footer from "../components/Footer";

const Dashboard = () => {
  // State for controlling the visibility and position of the context menu,options and suboptions
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [options, setOptions] = useState<any[]>([]);

  // Function for handling the context menu event
  const handleContextMenu = useCallback((event: any) => {
    event.preventDefault();
    setContextMenu({ visible: true, x: event.clientX, y: event.clientY });
  }, []);

  // Function for closing the context menu
  const handleCloseContextMenu = useCallback(() => {
    setContextMenu({ visible: false, x: 0, y: 0 });
    setShowSubOptions(false);
  }, []);

  // Fetching the options on component mount
  useEffect(() => {
    fetch("/api/options")
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className="h-screen bg-no-repeat bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/Images/wallpaper.png')",
        backgroundSize: "100% 100%",
      }}
      // Handling the context menu event
      onContextMenu={handleContextMenu}
      // Closing the context menu when the div is clicked
      onClick={handleCloseContextMenu}
    >
      {/* Rendering the context menu if it's visible */}
      {contextMenu.visible && (
        <div
          className="fixed bg-white border border-gray-200 rounded-md shadow-lg p-2"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          {/* Rendering the options */}
          {options.map((option, index) => (
            <div key={index} className="relative">
              <p
                className="cursor-pointer hover:bg-gray-100 p-2"
                onMouseEnter={() =>
                  option.name === "Add File"
                    ? setShowSubOptions(true)
                    : setShowSubOptions(false)
                }
                onMouseLeave={() => setShowSubOptions(false)}
              >
                {option.name}

                {showSubOptions && option.name === "Add File" && (
                  <div className="absolute left-full top-0 mt-2 w-32 text-center bg-white text-black text-sm p-2 rounded border border-gray-200 shadow-lg">
                    {/* Rendering the sub-options if they're visible and the option name is "Add File" */}
                    {option.subOptions.map((subOption: any, subIndex: any) => (
                      <p
                        key={subIndex}
                        className="cursor-pointer hover:bg-gray-100 p-2"
                      >
                        {subOption}
                      </p>
                    ))}
                  </div>
                )}
              </p>
            </div>
          ))}
        </div>
      )}

      <Header />
      <AppIcons />
      <TimeDisplay />
      <Footer />
    </div>
  );
};

export default Dashboard;
