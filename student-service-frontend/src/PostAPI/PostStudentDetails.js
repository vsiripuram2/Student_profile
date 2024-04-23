import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_API_URL = "http://localhost:8181/student-api";
const CREATE_STUDENT_DETAILS_URL = "/createStudentDetails"

const PostStudentDetails = () => {

    const[formData,setFormData] = useState({
        studentId:0,
        studentName:'',
        studentClass:''
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    console.log(formData+"after setting formdata");
    try {
        const response = await axios.post(BASE_API_URL+CREATE_STUDENT_DETAILS_URL,formData);
        console.log('Form data submitted successfully:', response);
      } catch (error) {
        console.error('Error submitting form data:', error);
      }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
          Student Id: <input type="text" name="studentId" value={formData.studentId}
           onChange={handleChange}/>
        </label>
        <label>
          Student Name: <input type="text" name="studentName" value={formData.studentName}
           onChange={handleChange}/>
        </label>
        <label>
          Student Class: <input type="text" name="studentClass" value={formData.studentClass}
           onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default  PostStudentDetails;

