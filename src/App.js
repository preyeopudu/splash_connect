import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./container/login/Login";
console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
    </Routes>
  );
};
export default App;
