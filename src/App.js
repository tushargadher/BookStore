import React from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import EditProduct from "./Pages/EditProduct";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from "./Components/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <SearchBar />
        <Routes>

          <Route exact path="/" element={<EditProduct />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
