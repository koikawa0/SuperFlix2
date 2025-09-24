import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Hub from "./pages/Hub"
import Explore from "./pages/Explore"
import Video from "./pages/Video"
import Panel from "./pages/Panel"

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Hub/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/video/:code:" element={<Video/>}/>
      <Route path="/panel" element={<Panel/>}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
}