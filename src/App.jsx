import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Students from "./pages/Students/Students";
import Teachers from "./pages/Teachers/Teachers";
import Courses from "./pages/Courses/Courses";
import Settings from "./pages/Settings/Settings";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<Login />} 
        />

        <Route 
          path="/dashboard" 
          element={<Dashboard />} 
        />

        <Route 
          path="/students" 
          element={<Students />} 
        />

        <Route 
          path="/teachers" 
          element={<Teachers />} 
        />

        <Route 
          path="/courses" 
          element={<Courses />} 
        />

        <Route 
          path="/settings" 
          element={<Settings />} 
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;