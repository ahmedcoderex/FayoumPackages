import { Route, Routes } from "react-router";
import Home from "./Components/Home/Home";
import Packages from "./Components/Packages/Packages";
import LanguageProvider from "./Contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
