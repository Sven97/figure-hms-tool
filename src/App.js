import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/core";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Calibration from "./pages/Calibration/Calibration";
import Configuration from "./pages/Configuration/Configuration";
import Dashboard from "./pages/Dashboard/Dashboard";
import Control from "./pages/Control/Control";

function App() {
  const [activePage, setActivePage] = useState("home"); // State to track active page

  // Method to update the active page
  const handleTabChange = (value) => setActivePage(value);

  // Function to render page based on active page state
  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "calibration":
        return <Calibration />;
      case "configuration":
        return <Configuration />;
      case "dashboard":
        return <Dashboard />;
      case "control":
        return <Control />;
      default:
        return <Home />;
    }
  };

  return (
    <GeistProvider>
      <CssBaseline />
      <Page>
        <Page.Header>
          {/* Pass handleTabChange to Header */}
          <Header onTabChange={handleTabChange} />
        </Page.Header>
        <Page.Content>{renderPage()}</Page.Content>
      </Page>
    </GeistProvider>
  );
}

export default App;
