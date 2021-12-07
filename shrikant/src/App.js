import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MyNavbar from './components/navbar/navbar';
import Contact from './components/contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [page, setPage] = useState(1);

  const changePage = (newPage) => {
    setPage(newPage);
  }

  return (
    <div className="App">
      <MyNavbar page={page} changePage={changePage} />
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
