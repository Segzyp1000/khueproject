import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './components/AppLayout';

import User from './pages/User';
import Referral from './pages/Referral';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';
import Campaign from './pages/Campaign';
import Stores from './pages/Stores';
import Products from './pages/Products';
import Rewards from './pages/Rewards';
import Partner from './pages/Partner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to={'dashboard'} />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
          <Route path="partner" element={<Partner />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="referral" element={<Referral />} />
          <Route path="products" element={<Products />} />
          <Route path="stores" element={<Stores />} />
          <Route path="reward" element={<Rewards />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
