import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StudentService from '../services/StudentService'

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        getAllStudents();
    }, [])
    const handleSearch = async () => {
        try {
            const response = await StudentService.searchStudentByName(searchName);
            setSearchResults(response.data)
            console.log(response.data)
        }catch (error) {
            console.log(error);
        }
    }
    const getAllStudents = () => {
        StudentService.getAllStudents().then((response => {
            setStudents(response.data)
            console.log(response.data)
        })).catch(error => {
            console.log(error);
        });
    }
    const deleteStudent = (studentId) => {
        StudentService.deleteStudent(studentId).then((response)=> {
            getAllStudents();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="container">
            <br />
            <h2 className="text-center">List Of Students</h2>
            <div>
                <input
                    type="text"
                    placeholder="Search By Name"
                    className="form-control"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <br />
                <button onClick={handleSearch} className="btn btn-secondary mb-2">
                    Search
                </button>
                <Link
                    to="/add-student"
                    className="btn btn-primary mb-2"
                    style={{ marginLeft: '10px' }}
                >
                    Add Student
                </Link>
            </div>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student First Name</th>
                        <th>Student Last Name</th>
                        <th>Student Email Id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.length > 0 ? (
                        searchResults.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    <img src={student.image_src} width="150" height="150" alt="student" />
                                    {student.firstName}
                                </td>
                                <td>{student.lastName}</td>
                                <td>{student.emailId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-student/${student.id}`}>
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteStudent(student.id)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    <img src={student.image_src} width="150" height="150" alt="student" />
                                    {student.firstName}
                                </td>
                                <td>{student.lastName}</td>
                                <td>{student.emailId}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-student/${student.id}`}>
                                        Update
                                    </Link>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteStudent(student.id)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListStudentComponent