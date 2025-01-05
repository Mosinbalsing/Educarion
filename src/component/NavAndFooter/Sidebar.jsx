import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const topics = {
  css: ["Selectors", "Box-Model","Grid", "Flex", "Position"],
  html: ["Elements", "Attributes", "Forms"],
  js: ["Variables", "Functions", "Objects"],
  python: ["Syntax", "Data Types", "Functions"],
};

export function Sidebar() {
  const [currentTopics, setCurrentTopics] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const category = location.pathname.split("/")[1];
    setCurrentTopics(topics[category] || []);
  }, [location]);

  if (currentTopics.length === 0) return null;

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 p-4 sticky">
      <nav className="space-y-1">
        {currentTopics.map((topic) => (
          <Link
            key={topic}
            to={`/${location.pathname.split("/")[1]}/${topic.toLowerCase().replace(" ", "-")}`}
            className={`block px-4 py-2 rounded-md ${
              location.pathname.endsWith(topic.toLowerCase().replace(" ", "-"))
                ? "bg-black text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
          >
            {topic}
          </Link>
        ))}
      </nav>
    </div>
  );
}
