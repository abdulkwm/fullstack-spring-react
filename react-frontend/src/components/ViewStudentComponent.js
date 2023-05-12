import React from 'react'
import { useState, useEffect } from "react";
import StudentService from '../services/StudentService';

const ViewStudentComponent = () => {
    const [student, setStudent] = useState({});
useEffect(() => {
    // const studentId = "your-student-id";
   studentDetail(student.studentId);
}, []);
const studentDetail = (studentId) => {
    StudentService.getStudentById(studentId).then((response)=> {
        setStudent(response.data)
        console.log(response.data)
    }).catch(error => {
        console.log(error);
    })
}
  return (
    <div>
          <div>
              <br />
              <div className='card col-md-6 offset-md-3'>
                  <h3 className='text-center'>View Student Details</h3>
                  <div className='card-body'>
                      <div className='img'>
                          <label>Student Image:</label>
                          <div>{student.image_src}</div>
                      </div>
                      <div className='row'>
                          <label>Student ID:</label>
                          <div>{student.id}</div>
                      </div>
                      <div className='row'>
                          <label>Student First Name:</label>
                          <div>{student.firstName}</div>
                      </div>
                      <div className='row'>
                          <label>Student Last Name:</label>
                          <div>{student.lastName}</div>
                      </div>
                      <div className='row'>
                          <label>Student Email Id:</label>
                          <div>{student.emailId}</div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ViewStudentComponent