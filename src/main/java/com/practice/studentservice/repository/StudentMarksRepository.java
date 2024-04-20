package com.practice.studentservice.repository;

import com.practice.studentservice.model.StudentMarks;
import com.practice.studentservice.response.StudentReportResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentMarksRepository extends JpaRepository<StudentMarks, Integer> {


}
