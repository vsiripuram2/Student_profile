package com.practice.studentservice.controller;

import com.practice.studentservice.model.StudentDetails;
import com.practice.studentservice.model.StudentMarks;
import com.practice.studentservice.response.StudentReportResponse;
import com.practice.studentservice.service.StudentDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin
@RequestMapping(path = "/student-api")
public class StudentDetailsController {

    @Autowired
    private StudentDetailsService studentDetailsService;

    @PostMapping("/createStudentDetails")
    public void saveStudentDetails(@RequestBody StudentDetails studentDetails) {
        System.out.println("studentDetails"+studentDetails.toString());
        studentDetailsService.saveStudentDetails(studentDetails);
    }

    @PostMapping("/saveStudentMarks")
    public void saveStudentMarks(@RequestBody StudentMarks studentMarks) {
        studentDetailsService.saveStudentMarks(studentMarks);
    }

//    @PostMapping("/getStudentMarks")
//    public void getStudentMarks(@RequestParam Integer studentId) {
//        studentDetailsService.getStudentMarks(studentId);
//    }
}
