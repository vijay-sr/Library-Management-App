import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import LandingLayout from './layouts/LandingLayout';

// ── Landing Portal (Marketing + Librarian) ──────────────────────────
import Home from './pages/landing/Home';
import RegisterLibrary from './pages/landing/RegisterLibrary';
import LibrarianLogin from './pages/landing/LibrarianLogin';
import About from './pages/landing/About';
import Contact from './pages/landing/Contact';

// Librarian dashboard (reuses the existing user dashboard for now)
import LibrarianDashboard from './pages/landing/Dashboard';

// ── Super Admin Portal ───────────────────────────────────────────────
import SuperAdminLogin from './pages/super-admin/Login';
import SuperAdminDashboard from './pages/super-admin/Dashboard';

// ── User Portal (Library Members) ───────────────────────────────────
import UserHome from './pages/user/Home';
import UserLogin from './pages/user/Login';
import UserRegister from './pages/user/Register';
import UserDashboard from './pages/user/Dashboard';
import SearchBooks from './pages/user/SearchBooks';
import ForgotPassword from './pages/user/Forgot-password';
import LoginOtp from './pages/user/Login-otp';

function App() {
  return (
    <Router>
      <Routes>

        {/* ── Landing / Marketing Website ─── */}
        <Route path="/" element={<LandingLayout><Home /></LandingLayout>} />
        <Route path="/about" element={<LandingLayout><About /></LandingLayout>} />
        <Route path="/contact" element={<LandingLayout><Contact /></LandingLayout>} />
        <Route path="/register" element={<RegisterLibrary />} />
        <Route path="/login" element={<LibrarianLogin />} />
        <Route path="/dashboard" element={<LibrarianDashboard />} />

        {/* ── Super Admin Portal ─────────── */}
        <Route path="/super-admin/login" element={<SuperAdminLogin />} />
        <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />} />

        {/* ── User Portal (Library Members) ─ */}
        <Route path="/user" element={<UserHome />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/search" element={<SearchBooks />} />
        <Route path="/user/forgot-password" element={<ForgotPassword />} />
        <Route path="/user/login-otp" element={<LoginOtp />} />

      </Routes>
    </Router>
  );
}

export default App;
