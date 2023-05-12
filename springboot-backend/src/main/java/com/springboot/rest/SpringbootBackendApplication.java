package com.springboot.rest;

import com.springboot.rest.entity.Student;
import com.springboot.rest.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
	private StudentRepository studentRepository;
    @Override
    public void run(String... args) throws Exception {
        Student student = new Student();
        student.setImage_src("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
        student.setFirstName("Abdu");
        student.setLastName("Ahmed");
        student.setEmailId("abdu@gmail.com");
		studentRepository.save(student);

		Student student1 = new Student();
        student1.setImage_src("https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
		student1.setFirstName("John");
		student1.setLastName("Alex");
		student1.setEmailId("john@gmail.com");
        studentRepository.save(student1);
    }
}
