
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import LandingPage from './components/LandingPage';
import Contact from "./components/Contact";
import Register from "./components/Register";
import NoFound from "./components/NoFound";

function App() {
  return (
    <div className="App bg-[#140d27] text-[#FFF] overflow-x-hidden">
    <BrowserRouter>

<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="*" element={<NoFound />} />
  <Route path="/contactus" element={<Contact />}/>
  <Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
