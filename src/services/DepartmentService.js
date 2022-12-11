import axios from "axios";

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/api/v1/departments";

class DepartmentService {
        saveDepartment(department){
            return axios.post(DEPARTMENT_API_BASE_URL, department);
        }

        getDepartments(){
            return axios.get(DEPARTMENT_API_BASE_URL);
        }

        deleteDepartments(id){
            return axios.delete(DEPARTMENT_API_BASE_URL+ "/" + id);
        }

        getDepartmentById(id){
            return axios.get(DEPARTMENT_API_BASE_URL+ "/" + id);
        }

        updateDepartment(department, id){
            return axios.put(DEPARTMENT_API_BASE_URL+ "/" + id, department);
        }


}

export default new DepartmentService();