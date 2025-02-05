
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import User from './pages/User';
import Partner from './pages/Partner'
import Campaign from './pages/Campaign';
import Referral from './pages/Referral';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container flex gap-10">
        <Sidebar />
        <main>
           <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/partner" element={<Partner/>} />
            <Route path="/campaign" element={<Campaign/>} />
            <Route path="/referral" element={<Referral/>} />
            

          </Routes> 
        </main>
      </div>
    </BrowserRouter>
  )
}

