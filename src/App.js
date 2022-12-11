import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DepartmentList from "./components/DepartmentList";
import AddDepartment from "./components/AddDepartment";
import UpdateDepartment from "./components/UpdateDepartment";

function App() {
  return (
  
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<DepartmentList />}/>
      <Route path="/" element={<DepartmentList />}/>
      <Route path="departmentList" element={<DepartmentList />}/>
      <Route path="addDepartment" element={<AddDepartment />}/>
      <Route path="updateDepartment/:id" element={<UpdateDepartment />}/>
    </Routes>

    </BrowserRouter>
    </>
    
  );
}

export default App;
