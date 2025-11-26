import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Panel from "./pages/Panel.jsx";
import Explore from "./pages/Explore.jsx";
import Hub from "./pages/Hub.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/panel" element={<Panel />} />
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/hub" element={<Hub/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
