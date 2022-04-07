import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BorrowPage from "./pages/BorrowPage";
import BorrowReq from "./pages/BorrowReq";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />}>
            {" "}
          </Route>{" "}
          <Route exact path="/borrow" element={<BorrowPage />}>
            {" "}
          </Route>{" "}
          <Route exact path="/successfull" element={<BorrowReq />}>
            {" "}
          </Route>{" "}
        </Routes>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
