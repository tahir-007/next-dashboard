import { useEffect, useState } from "react";

const AppIcons = () => {
  // State for storing the applications
  const [apps, setApps] = useState([]);

  // Fetching the applications on component mount
  useEffect(() => {
    fetch("/api/applications")
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="custom-scrollbar absolute bg-opacity-50 right-5 top-1/2 transform -translate-y-1/2 h-80 w-20 bg-white flex flex-col overflow-y-auto items-center rounded-3xl space-y-2">
      {/* Mapping over the applications and rendering an image for each one */}
      {apps.map((app: { icon: any; name: any }) => (
        <img
          className="w-3/4 object-cover my-4"
          src={app.icon}
          key={app.name}
        />
      ))}
    </div>
  );
};

export default AppIcons;
