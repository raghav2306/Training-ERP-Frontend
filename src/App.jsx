import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/components/Login";
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import TeamIndex from "./pages/team/Index";
import Employee from "./pages/team/Employee";
import Department from "./pages/team/Department";
import Role from "./pages/team/Role";
import Profile from "./pages/profile/Profile";
import UsePersistLogin from "./hooks/UsePersistLogin";
import Attendance from "./pages/attendance/Attendance";
import Work from "./pages/work/Work";
import Documents from "./pages/documents/Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<UsePersistLogin />}>
          <Route element={<Root />}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/team" element={<TeamIndex />}>
              <Route index element={<Employee />} />
              <Route path="employee" element={<Employee />} />
              <Route path="department" element={<Department />} />
              <Route path="role" element={<Role />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
