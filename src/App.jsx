import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistDetelis from "./pages/PlaylistDetelis";
import Like from "./pages/Like";
import DashboardLeft from "./components/DashboardLeft";
import "./scss/app.scss";
import DashboardRight from "./components/DashboardRight";
import MusicControl from "./components/MusicControl";

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <DashboardLeft />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<PlaylistDetelis />} />
            <Route path="/like" element={<Like />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <DashboardRight />
        </div>
        <MusicControl />
      </Router>
    </div>
  );
}

export default App;
