// App.jsx
import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-blue-800 text-white p-4 transition-transform duration-300 z-10 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/" onClick={handleLinkClick} className="hover:text-blue-300">
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="hover:text-blue-300">
            About
          </Link>
          <Link to="/profile" onClick={handleLinkClick} className="hover:text-blue-300">
            Profile
          </Link>
        </nav>
      </div>

      {/* Overlay for small screens */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-0"
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 ml-0 md:ml-64 p-4 w-full">
        {/* Toggle button for small screens */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden mb-4 p-2 bg-blue-800 text-white rounded"
        >
          ☰
        </button>

        {/* Routing outlet */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

// Sample page components
const Home = () => <h1 className="text-2xl">🏠 Home Page</h1>;
const About = () => <h1 className="text-2xl">📘 About Page</h1>;
const Profile = () => <h1 className="text-2xl">👤 Profile Page</h1>;






export default function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}
