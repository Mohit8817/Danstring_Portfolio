import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter basename="/Danstring_Portfolio">
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
