import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Courses } from "./pages/Courses/Courses.jsx";
import { CoursesLayout } from "./pages/components/CoursesLayout.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route index element={<CoursesLayout />} />
        <Route path="/add-course" element={<CoursesLayout />} />
        <Route path="/remove-course" element={<CoursesLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
