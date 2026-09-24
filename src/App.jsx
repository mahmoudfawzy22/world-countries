import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CountryDetails from "./pages/countryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/country/:numericCode" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
