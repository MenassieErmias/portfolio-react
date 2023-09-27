import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

import { useState } from "react";
function App() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <Navbar nav={nav} setNav={setNav} />
      <Home nav={nav} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
