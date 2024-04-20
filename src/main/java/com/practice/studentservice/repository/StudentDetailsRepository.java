package com.practice.studentservice.repository;

import com.practice.studentservice.model.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Integer> {

//    @Query("select sd.student_id,sd.student_name,sd.student_class,sm.subject_name,sm.marks from student_details sd\n" +
//            "left join student_marks sm on sd.student_id=sm.student_id where sd.student_id=101")
//    void getStudentMarks(Integer studentId);
}
