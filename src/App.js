import Home from "./Components/Layout/Home/Home";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Shared/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
