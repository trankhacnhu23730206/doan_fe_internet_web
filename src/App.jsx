import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Courses } from "./pages/Courses/Courses.jsx";
import { AddCoursesPage } from "./pages/AddCourses/AddCourses.jsx";
import { CoursesLayout } from "./pages/components/CoursesLayout/CoursesLayout.jsx";
import { RemoveCoursesPage } from "./pages/RemoveCourses/RemoveCourses.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<CoursesLayout />}>
          <Route index element={<Courses />} />
          <Route path="add-course" element={<AddCoursesPage />} />
          <Route path="remove-course" element={<RemoveCoursesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
