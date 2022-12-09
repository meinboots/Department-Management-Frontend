import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import DepartmentList from "./components/DepartmentList";
import AddDepartment from "./components/AddDepartment";

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
    </Routes>

    </BrowserRouter>
    </>
    
  );
}

export default App;
