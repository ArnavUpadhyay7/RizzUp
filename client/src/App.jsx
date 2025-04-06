import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/self-comp/Landing";
import { NavbarDemo } from "./components/aceternity/NavbarDemo";
import Cards from "./pages/Cards";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <BrowserRouter>
        <NavbarDemo />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
