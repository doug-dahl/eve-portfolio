import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { Contact } from "./components/pages/Contact";
import { SonnerToastProvider } from "./components/SonnerToastProvider";
import "./styles/sonner-fixes.css";
import "./styles/input-fixes.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Set dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "work":
        return <Work onPageChange={setCurrentPage} />;
      case "contact":
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <>
      {/* Sonner Toast Provider */}
      <SonnerToastProvider />
      
      {/* Navigation - Top level, not constrained by any container */}
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Main Content Container */}
      <div className="min-h-screen bg-black">
        {/* Page Content */}
        {renderPage()}
      </div>
    </>
  );
}