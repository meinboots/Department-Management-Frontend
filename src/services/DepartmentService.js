import axios from "axios";

const DEPARTMENT_API_BASE_URL = "http://localhost:8080/api/v1/departments";

class DepartmentService {
        saveDepartment(department){
            return axios.post(DEPARTMENT_API_BASE_URL, department);
        }
}

export default new DepartmentService();