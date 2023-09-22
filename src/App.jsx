import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Departments from "./Views/Departments/Index";
import CreateDepartment from "./Views/Departments/Create";
import EditDepartments from "./Views/Departments/Edit";

import Employees from "./Views/Employees/Index";
import GraphicEmployees from "./Views/Employees/Graphics";
//import CreateEmployees from "./Views/Employees/Create";
//import EditEmployees from "./Views/Employees/Edit";

import Login from "./Views/Login";
import Register from "./Views/Register";

import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {

  return (
  <BrowserRouter>
    <Nav></Nav>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />} >
        <Route path="/" element={<Departments />} />
        <Route path="/create" element={<CreateDepartment />} />
        <Route path="/edit/{id}" element={<EditDepartments />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/graphics" element={<GraphicEmployees />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
