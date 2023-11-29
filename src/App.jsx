import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProductBody from "./components/ProductBody";
import ProductDetails from "./components/ProductDetails";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route index element={<ProductBody />} />
        <Route path="/hrafn-bomber-jacket" element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
