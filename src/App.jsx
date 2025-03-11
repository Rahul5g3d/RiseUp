import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header";
import Home from "./Components/Pages/Home";
import LessonLearnt from "./Components/Pages/LessonLearnt";
import DailyStudy from "./Components/Pages/DailyStudy";
import BookStudied from "./Components/Pages/BookStudied";
import Apology from "./Components/Pages/Apology";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <NavBar class="nav" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson-learnt" element={<LessonLearnt />} />
        <Route path="/daily-study" element={<DailyStudy />} />
        <Route path="/book-studied" element={<BookStudied />} />
        <Route path="/apology" element={<Apology />} />
      </Routes>
      <Footer class="Footer" />
    </Router>
  );
};

export default App;
