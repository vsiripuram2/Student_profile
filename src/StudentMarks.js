import React, { useEffect, useState } from "react";

const StudentMarks = () => {
  const [data, setData] = useState([]);
  const [studentId, setStudentId] = useState("");
  const URL = `http://localhost:3000/studentrecord/${studentId}`;
  console.log(studentId);

  const submitDetails = () => {
    getstudentInfo();
  };
  const getstudentInfo = async () => {
    const studentData = await fetch(URL);
    const studentrecord = await studentData.json();
    setData(studentrecord);
  };
  return (
    <div>
      <h1>Student Deatails</h1>
      <input
        type="text"
        name="studentId"
        onChange={(e) => {
          setStudentId(e.target.value);
        }}
      />
      <button onClick={submitDetails}>submit</button>
      {data.map((item) => {
        const { student_ID, student_class, student_name } = item;
        return (
          <div>
            <table>
              <tr>
                <th>STUDENT ID:</th>
                <th>STUDENT NAME</th>
                <th>STUDENT CLASS</th>
              </tr>
              <tr>
                <td>{student_ID}</td>
                <td>{student_name}</td>
                <td>{student_class}</td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default StudentMarks;
