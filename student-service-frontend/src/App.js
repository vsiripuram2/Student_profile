import "./App.css";
import PostStudentDetails from "./StudentAPI/PostStudentDetails";
import PostStudentMarks from "./StudentAPI/PostStudentMarks";
import UserSignUp from "./UserAPI/UserSignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/PostStudentDetails" element={<PostStudentDetails />} />
          <Route path="/PostStudentMarks" element={<PostStudentMarks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
