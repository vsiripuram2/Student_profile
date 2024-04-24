package com.practice.studentservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "student_details")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentDetails {

    @Id
    @Column(name = "student_id")
    private int studentId;
    @Column(name = "student_name")
    private String studentName;

    @Column(name = "student_class")
    private String studentClass;



}
