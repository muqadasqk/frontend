import { Routes, Route } from "react-router-dom";
import LoginForm from "./features/auth/components/LoginForm";
import SignupForm from "./features/auth/components/SignUpForm"; 
import DashboardRedirect from "./features/dashboard/DashboardRedirect";
import ProtectedRoute from "./routes/ProtectedRoutes";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardRedirect />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
