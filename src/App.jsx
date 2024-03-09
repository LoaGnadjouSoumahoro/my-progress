import { useState } from "react";

import "./App.css";
import { Home } from "./pages/Home";
import { Menu } from "./components/Menu";
import { TechnoAdd } from "./pages/TechnoAdd";

function App() {
  return (
    <>
      <Menu />
      <Home />
      <TechnoAdd />
    </>
  );
}

export default App;
