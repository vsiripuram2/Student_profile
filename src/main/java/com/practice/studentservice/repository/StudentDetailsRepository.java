package com.practice.studentservice.repository;

import com.practice.studentservice.model.StudentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentDetailsRepository extends JpaRepository<StudentDetails, Integer> {


}
