package com.practice.studentservice.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudentReportResponse {

    private int studentId;
    private String studentName;
    private String studentClass;
    private String subjectName;
    private String marks;
}
