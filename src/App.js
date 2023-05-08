import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./container/login/Login";
import Home from "./container/home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
export default App;
