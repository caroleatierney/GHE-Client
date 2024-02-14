import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home       from "./routes/home/Home";
import About      from "./routes/about/About";
import Soap       from "./routes/soap/Soap";
import SingleSoap from "./routes/soap/SingleSoap";
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
          <Route path="/soap" element={<Soap />} />
          <Route path="/soap/:slug" element={<SingleSoap />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
