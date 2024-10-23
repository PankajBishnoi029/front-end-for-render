import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Route/Login";
import Purchase from "./Route/Purchase";
import Dashboard from "./Route/Dashboard";
import Signup from "./Route/Signup";
import Mark from "./Route/Mark";
import Updatepass from "./Route/Updatepass";
import Adminsignup from "./Admin/Adminsignup";
import AdminLogin from "./Admin/Adminlogin";
import Admin from "./Admin/Admin";
import AddProduct from "./Admin/Addproduct";
import Deleteproduct from "./Admin/Deleteproduct";
import Update from "./Admin/Update";
import Updatecourse from "./Admin/Updatecourse";
import Getcustomer from "./Admin/Getcustomer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Admin" element={<Admin />} />
        <Route path="delete-product" element={<Deleteproduct />} />
        <Route path="Update" element={<Update />} />
        <Route path="Updatecourse" element={<Updatecourse />} />
        <Route path="/Adminsignup" element={<Adminsignup />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/Getcustomer" element={<Getcustomer />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/purchased" element={<Purchase />} />
        <Route path="/Mark" element={<Mark />} />
        <Route path="/update-password" element={<Updatepass />} />
      </Routes>
    </Router>
  );
}

export default App;
