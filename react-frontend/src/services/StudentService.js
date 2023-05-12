import axios from "axios";
const STUDENT_BASE_URL = 'http://localhost:8080/api/students';
class StudentService{
    getAllStudents(){
        return axios.get(STUDENT_BASE_URL);
    }
    createStudent(student){
        return axios.post(STUDENT_BASE_URL, student);
    }
    getStudentById(studentId){
        return axios.get(STUDENT_BASE_URL + '/' + studentId);
    }
    updateStudent(studentId, student){
        return axios.put(STUDENT_BASE_URL + '/' + studentId, student);
    }
    deleteStudent(stududentId){
        return axios.delete(STUDENT_BASE_URL + '/' + stududentId);
    }
    // search student by name
    searchStudentByName(searchTerm) {
        return axios.get(`${STUDENT_BASE_URL}/search`, {
            params: { searchTerm },
        });
    }
}
export default new StudentService();