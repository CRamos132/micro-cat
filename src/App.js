import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RandomCat />} />
        <Route exact path="/cat/:greeting" element={<GreetingCat />} />
        <Route exact path="/cat" element={<div>a</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
