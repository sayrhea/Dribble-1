import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ProductBody from "./components/ProductBody";
import ProductDetails from "./components/ProductDetails";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route index element={<ProductBody />} />
        <Route path="/jacket1" element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
