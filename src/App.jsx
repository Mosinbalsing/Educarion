
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from"@/component/NavAndFooter/Navbar"
import { Sidebar } from "@/component/NavAndFooter/Sidebar";
import Home from "@/Pages/Home";
import Html from "@/pages/Html";
import Css from "@/pages/Css";
import Js from "@/pages/Js";
import Python from "@/pages/Python";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/html/*" element={<Html />} />
              <Route path="/css/*" element={<Css />} />
              <Route path="/js/*" element={<Js />} />
              <Route path="/python/*" element={<Python />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
