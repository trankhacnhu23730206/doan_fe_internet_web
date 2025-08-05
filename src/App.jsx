import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login.jsx";
import { Courses } from "./pages/Courses/Courses.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
