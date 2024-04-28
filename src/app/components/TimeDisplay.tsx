import { useEffect, useState } from "react";

const TimeDisplay = () => {
  // State variables for storing the current time, date, and day
  const [currentTime, setCurrentTime] = useState("");
  const [currentDateString, setCurrentDateString] = useState("");
  const [currentDay, setCurrentDay] = useState("");

  // Effect hook for updating the time, date, and day every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const newTime = currentDate.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      const newDateString = currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
      });
      const newDay = currentDate.toLocaleDateString("en-US", {
        weekday: "long",
      });
      setCurrentTime(newTime);
      setCurrentDateString(newDateString);
      setCurrentDay(newDay);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="flex flex-col justify-start items-center h-full mt-4">
      {/* Displaying the current time, current day and date*/}
      <h1 className="text-4xl text-white">{currentTime}</h1>
      <p className="text-xl">{`${currentDay}, ${currentDateString}`}</p>
    </main>
  );
};

export default TimeDisplay;
