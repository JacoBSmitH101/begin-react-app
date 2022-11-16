import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const drawerWidth = 240;
const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <h1>test</h1>
  )
};

export default App;
