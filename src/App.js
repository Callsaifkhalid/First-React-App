// import logo from './logo.svg';
import "./App.css";
import Main from "./Components/Main";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusinessLink from "./Screens/Bussines/BusinessLink";
import Personal from "./Screens/Bussines/Personal/Personal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/business" element={<BusinessLink />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
