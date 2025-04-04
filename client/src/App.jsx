import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/self-comp/Landing";
import { NavbarDemo } from "./components/aceternity/NavbarDemo";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <BrowserRouter>
        <NavbarDemo />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
