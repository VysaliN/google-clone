import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/searchpage" element={<SearchPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
