import React,{useState,useEffect} from "react";
import axios from "axios";


const BASE_API_URL = "http://localhost:8181/student-api"
const SAVE_MARKS_DETAILS_URL="/saveStudentMarks";

const PostStudentMarks = () =>{
    const[formData,setFormData] = useState({
        studentMarksId:0,
        subjectName:'',
        marks:''
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
        const response = await axios.post(BASE_API_URL+SAVE_MARKS_DETAILS_URL,formData);
        console.log('Form data submitted successfully:', response);
      } catch (error) {
        console.error('Error submitting form data:', error);
      }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>
          StudentMarks Id: <input type="text" name="studentMarksId" value={formData.studentMarksId}
           onChange={handleChange}/>
        </label>
        <label>
          Subject Name: <input type="text" name="subjectName" value={formData.subjectName}
           onChange={handleChange}/>
        </label>
        <label>
          Marks: <input type="text" name="marks" value={formData.marks}
           onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

}
export default PostStudentMarks;