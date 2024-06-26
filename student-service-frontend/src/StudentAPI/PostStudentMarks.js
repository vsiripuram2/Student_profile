import React, { useState } from "react";
import axios from "axios";
import ErrorPage from "../Utils/ErrorPage";
import AuthHeader from "../Utils/AuthHeader";

const BASE_API_URL = "http://localhost:8181/student-api";
const SAVE_MARKS_DETAILS_URL = "/saveStudentMarks";

const PostStudentMarks = () => {
  const [formData, setFormData] = useState({
    studentMarksId: 0,
    subjectName: "",
    marks: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        BASE_API_URL + SAVE_MARKS_DETAILS_URL,
        formData,AuthHeader()
      );
      console.log("Form data submitted successfully:", response);
    } catch (error) {
      console.error("Error submitting form data:", error);
      return <ErrorPage />
    }
  };

  return (
   
        <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="studentMarksId">StudentMarks Id:</label>
          <input
            type="text"
            id="studentMarksId"
            name="studentMarksId"
            value={formData.studentMarksId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subjectName">Subject Name:</label>
          <input
            type="text"
            id="subjectName"
            name="subjectName"
            value={formData.subjectName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="marks">Marks:</label>
          <input
            type="text"
            id="marks"
            name="marks"
            value={formData.marks}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>    
    
  );
};

export default PostStudentMarks;
