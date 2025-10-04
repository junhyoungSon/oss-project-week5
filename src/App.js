import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
import EmpDetail from "./EmpDetail";

function App() {
  return (
    <div className="App">
      <div class="header-container">
        <img src="/handong.png" alt="한동대 로고" height="40" />
        <h3 id="title">한동대학교 기숙사</h3>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
