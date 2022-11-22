import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
