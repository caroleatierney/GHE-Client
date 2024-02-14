import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home       from "./routes/Home/Home.jsx";
import About      from "./routes/About/About.jsx";
import Soap       from "./routes/Soap/Soap.jsx";
import SingleSoap from "./routes/Soap/SingleSoap.jsx";
import Header     from "./components/Header.jsx";
import Footer     from "./components/Footer.jsx";
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
