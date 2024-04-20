package com.practice.studentservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "student_marks")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentMarks {

    @Id
    @Column(name = "student_marks_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int studentMarksId;

    @Column(name = "subject_name")
    private String subjectName;

    @Column(name = "marks")
    private int marks;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="student_id",insertable = false,updatable = false)
    @Fetch(FetchMode.JOIN)
    private StudentDetails studentDetails;

}
