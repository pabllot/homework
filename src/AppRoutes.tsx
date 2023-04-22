//@ts-ignore
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Lessons } from "./components/Lessons";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lesson" element={<Lessons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
