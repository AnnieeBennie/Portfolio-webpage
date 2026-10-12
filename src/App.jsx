import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
