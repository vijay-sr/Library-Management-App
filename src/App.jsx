import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import LandingLayout from './layouts/LandingLayout';

// ── Common Components ────────────────────────────────────────────────
import { ToastProvider } from './components/common/ToastContext';
import ProtectedRoute from './components/common/ProtectedRoute';

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
import AddClient from './pages/super-admin/AddClient';
import ClientManagement from './pages/super-admin/ClientManagement';

// ── User Portal (Library Members) ───────────────────────────────────
import UserHome from './pages/user/Home';
import UserLogin from './pages/user/Login';
import UserRegister from './pages/user/Register';
import UserDashboard from './pages/user/Dashboard';
import SearchBooks from './pages/user/SearchBooks';
import Catalog from './pages/user/Catalog';
import ForgotPassword from './pages/user/Forgot-password';
import LoginOtp from './pages/user/Login-otp';
import UserLayout from './layouts/UserLayout';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>

          {/* ── Landing / Marketing Website ─── */}
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/register" element={<RegisterLibrary />} />
          <Route path="/login" element={<LibrarianLogin />} />
          <Route path="/dashboard" element={
            <ProtectedRoute loginPath="/login">
              <LibrarianDashboard />
            </ProtectedRoute>
          } />

          {/* ── Super Admin Portal ─────────── */}
          <Route path="/super-admin/login" element={<SuperAdminLogin />} />
          <Route path="/super-admin/dashboard" element={
            <ProtectedRoute loginPath="/super-admin/login">
              <SuperAdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/super-admin/add-client" element={<AddClient />} />
          <Route path="/super-admin/clients" element={<ClientManagement />} />

          {/* ── User Portal (Library Members) ─ */}
          <Route path="/user" element={<UserHome />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/user/register" element={<UserRegister />} />
          <Route path="/user/forgot-password" element={<ForgotPassword />} />
          <Route path="/user/login-otp" element={<LoginOtp />} />

          {/* User Portal Protected Routes wrapped in UserLayout */}
          <Route element={
            <ProtectedRoute loginPath="/user/login">
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/catalog" element={<Catalog />} />
            <Route path="/user/search" element={<SearchBooks />} />
          </Route>

        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
