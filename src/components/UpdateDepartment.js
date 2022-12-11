import React, { useEffect } from 'react'
import { useState } from 'react'
import DepartmentService from '../services/DepartmentService'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateDepartment = () => {
    
    //For redirection
    const navigate = useNavigate();
    const {id} = useParams();

    //In useState hook we will define current state of department
    const [department, setDepartment] = useState({
                    Id : id,
        departmentCode : "",
        departmentName : "",
        departmentAddress : ""
    })

    //Handling even when data will be filled in fields
    const handleChange = (e)=>{
            const value = e.target.value;
            setDepartment({...department, [e.target.name]: value});
    }

    //Fetching department by Id to fill update form
    useEffect(() => {
        const fetchData = async () =>{
        //   setLoading(true)
          try {
            const response = await DepartmentService.getDepartmentById(id);
            //console.log(response)
            setDepartment(response.data)
          } catch (error) {
            console.log(error)
          }
        //   setLoading(false)
        }
        fetchData();
      }, [id])


    //Updating department
    const saveDepartment = (e)=>{
        e.preventDefault();
        DepartmentService.saveDepartment(department).then((response)=>{
            navigate("/departmentList")
            //console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div className="flex max-w-2xl shadow border-b bg-gray-200 rounded mt-2 mx-auto">
        <div className="px-8 py-8">
            <div className="">
                    <h1 className="text-2xl tracking-wide">
                        Update Department
                    </h1>
                    <div className="items-center justify-center h-14 w-full my-4">
                            <label className="block text-gray-600 text-sm font-normal">Department Code</label>
                            <input 
                            type="text" 
                            name="departmentCode"
                            value={department.departmentCode}
                            onChange={(e)=>handleChange(e)}
                            className="border border-l-4 border-green-500 mt-2 px-2"></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                            <label className="block text-gray-600 text-sm font-normal">Department Name</label>
                            <input 
                            type="text"
                            name="departmentName"
                            value={department.departmentName}
                            onChange={(e)=>handleChange(e)}
                             className="border border-l-4 border-green-500 mt-2 px-2"></input>
                    </div>
                    <div className="items-center justify-center h-14 w-full my-4">
                            <label className="block text-gray-600 text-sm font-normal">Department Address</label>
                            <input 
                            type="text"
                            name="departmentAddress"
                            value={department.departmentAddress}
                            onChange={(e)=>handleChange(e)}
                             className="border border-l-4 border-green-500 mt-2 px-2"></input>
                    </div>
                    <div className="items-center justify-center h-4 w-full my-6 space-x-4">
                            <button onClick={saveDepartment} className="text-white bg-green-500 rounded py-1 px-4 hover:bg-green-700 font-semi-bold">Update</button>
                            <button onClick={() => navigate("/departmentList")} className="text-white bg-red-500 ml-2 rounded py-1 px-4 hover:bg-red-700 font-semi-bold">Cancel</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateDepartment;