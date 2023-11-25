import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import "./server"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import Income from "./components/Income"
import HostLayout from "./components/HostLayout"
import Reviews from './components/Reviews';
import HostVans from './components/HostVans';
import HostVanDetail from './components/HostVanDetail';
import Pricing from "./components/Pricing"
import Info from './components/Info';
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail/>} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:vanId" element={<HostVanDetail />}>
              <Route index element={<Info />}/>
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<>This is photos page</>} />
            </Route>
          </Route> 
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);