package com.springboot.rest.controller;

import com.springboot.rest.entity.Student;
import com.springboot.rest.exception.ResourceNotFoundException;
import com.springboot.rest.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/students")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

//    get all Student
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
//    get student by id
    @GetMapping("{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
        return ResponseEntity.ok(student);
    }

//    create student
    @PostMapping
    public ResponseEntity<String> createStudent(@RequestBody Student student) {
        studentRepository.save(student);
        String responseMsg = "Student created Successfully with ID: " + student.getId();
        return new ResponseEntity<>(responseMsg, HttpStatus.CREATED);
    }

//    update student by id
    @PutMapping("{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable long id, @RequestBody Student studentDetails) {
        Student updateStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student not exist with id:" + id));
        updateStudent.setFirstName(studentDetails.getFirstName());
        updateStudent.setLastName(studentDetails.getLastName());
        updateStudent.setEmailId(studentDetails.getEmailId());
        updateStudent.setImage_src(studentDetails.getImage_src());
        studentRepository.save(updateStudent);
        return ResponseEntity.ok(updateStudent);
    }
//    delete student by id
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable long id){
        Student student = studentRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Student not exist with id:"+ id));
        studentRepository.delete(student);
        String message = "Student with id " + student.getId() + " successfully deleted!";
        return ResponseEntity.status(HttpStatus.OK).body(message);
    }
//    search student by name
@GetMapping("/search")
    public ResponseEntity<List<Student>> searchStudents(@RequestParam("searchTerm") String searchTerm) {
    List<Student> students = studentRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(searchTerm, searchTerm);
    return ResponseEntity.ok(students);
}
}
