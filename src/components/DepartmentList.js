import React from 'react';
import { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';
import DepartmentService from '../services/DepartmentService';
const DepartmentList = () => {
  
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)
  const [departments, setDepartment] = useState(null)
  
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true)
      try {
        const response = await DepartmentService.getDepartments();
        //console.log(response)
        setDepartment(response.data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData();
  }, [])

  //Deleting depertment
    const deleteDepartment = (e, id) =>{
      e.preventDefault();
      DepartmentService.deleteDepartments(id).then((res => {
        if(departments){
          setDepartment((prevElement) =>{
            return prevElement.filter((departments) => departments.departmentId !== id);
          })
        }
      }))
    }  

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-col text-center w-full mb-6">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Department List</h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Department Code</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Department Name</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Department Address</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 text-center">Actions</th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        {!loading && (
        <tbody>
          {departments.map((department) => (
            
          <tr key={department.departmentId}>
            <td className="px-4 py-3">{department.departmentCode}</td>
            <td className="px-4 py-3">{department.departmentName}</td>
            <td className="px-4 py-3">{department.departmentAddress}</td>
            <td className="px-4 py-3">
              <div className="px-2 text-lg bg-gray-400 rounded text-gray-900 text-center">
              <a href= "#" className="text-sm text-white font-bold hover:text-blue-500">Edit</a>
              <a onClick={(e, id) =>deleteDepartment(e, department.departmentId)} className="text-sm text-white pl-2 font-bold hover:text-red-500 hover:cursor-pointer">Delete</a>
              </div>
            </td>
            <td className="w-10 text-center">
            </td>
          </tr>
          ))}

        </tbody>
        )}
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button onClick={()=>navigate("/addDepartment")} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Department</button>
    </div>
  </div>
</section>
    
  )
}

export default DepartmentList