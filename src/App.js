import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Dash,Product,Addproduct} from "./pages/index"
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        {/* {user && <Route path="/" exact element={<Main />} />} */}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Login />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/product" element={<Product />} />
        <Route path="/add" element={<Addproduct />} />
        {/*<Route path="/" element={<Navigate replace to="/login" />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
