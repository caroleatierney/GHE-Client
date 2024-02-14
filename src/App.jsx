import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home       from "./routes/Home/Home";
import About      from "./routes/About/About";
import Soap       from "./routes/Soap/Soap";
import SingleSoap from "./routes/Soap/SingleSoap";
import Header     from "./components/Header";
import Footer     from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/soaps" element={<Soap />} />
          <Route path="/soaps/:slug" element={<SingleSoap />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
