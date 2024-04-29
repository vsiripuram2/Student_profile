import "./App.css";
import Navbar from "./NavBar/Navbar";
import PostStudentDetails from "./StudentAPI/PostStudentDetails";
import PostStudentMarks from "./StudentAPI/PostStudentMarks";
import UserLogin from "./UserAPI/UserLogin";
import UserSignUp from "./UserAPI/UserSignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/UserSignUp" element={<UserSignUp />} />
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/PostStudentDetails" element={<PostStudentDetails />} />
          <Route path="/PostStudentMarks" element={<PostStudentMarks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
