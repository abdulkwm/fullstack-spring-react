package com.springboot.rest.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String image_src;
    private String firstName;
    private String lastName;
    private String emailId;
    public Student(String image_src, String firstName, String lastName, String emailId) {
        this.image_src = image_src;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
}
