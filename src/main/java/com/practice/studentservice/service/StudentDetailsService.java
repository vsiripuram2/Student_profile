package com.practice.studentservice.service;

import com.practice.studentservice.model.StudentDetails;
import com.practice.studentservice.model.StudentMarks;
import com.practice.studentservice.repository.StudentDetailsRepository;
import com.practice.studentservice.repository.StudentMarksRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StudentDetailsService {


    private final StudentDetailsRepository studentDetailsRepository;
    private final StudentMarksRepository studentMarksRepository;

    public void saveStudentDetails(StudentDetails studentDetails) {
        studentDetailsRepository.save(studentDetails);
    }

    public void saveStudentMarks(StudentMarks studentMarks) {
        studentMarksRepository.save(studentMarks);
    }


}
