import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/navbar";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import Quote from "./components/quote/quote";
import { insuranceItems, investmentItems } from "./components/items";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [page, setPage] = useState(1);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      <MyNavbar page={page} changePage={changePage} />
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        {insuranceItems.map((item) => (
          <Route path={item.toLowerCase().split(" ").join("-")} element={<Quote quoteItem={item} />} />
        ))}
        {investmentItems.map((item) => (
          <Route path={item.toLowerCase().split(" ").slice(0, -1).join("-")} element={<Quote quoteItem={item}  />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
