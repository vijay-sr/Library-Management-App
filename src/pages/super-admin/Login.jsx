import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SuperAdminLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate verfication
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/super-admin/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <main className="w-full max-w-md" data-purpose="login-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-custom bg-brand mb-4 shadow-lg">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">LibTrack Central</h1>
          <p className="text-sm text-gray-600 mt-1 uppercase tracking-widest font-semibold">Super Admin Gateway</p>
        </div>
        <div className="bg-white rounded-custom auth-card overflow-hidden border border-gray-100">
          <div className="security-gradient py-3 px-6 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">Secure Encrypted Environment</span>
          </div>
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div data-purpose="input-group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2" htmlFor="admin-id">
                  Super Admin Identifier
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-custom text-sm focus:ring-brand focus:border-brand transition-colors" id="admin-id" name="admin-id" placeholder="SA-XXXX-XXXX" required type="text" />
                </div>
              </div>
              <div data-purpose="input-group">
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2" htmlFor="password">
                  Security Key / Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-custom text-sm focus:ring-brand focus:border-brand transition-colors" id="password" name="password" placeholder="••••••••••••" required type="password" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <input className="h-4 w-4 text-brand focus:ring-brand border-gray-300 rounded" id="remember-device" name="remember-device" type="checkbox" />
                  <label className="ml-2 block text-gray-600" htmlFor="remember-device">
                    Authorize device for 24h
                  </label>
                </div>
                <a className="font-semibold text-brand hover:text-brand-dark transition-colors" href="#">
                  Access Recovery
                </a>
              </div>
              <button disabled={isSubmitting} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-custom shadow-sm text-sm font-bold text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all transform active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed" type="submit">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying Credentials...
                  </>
                ) : (
                  "Authenticate Access"
                )}
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 italic">
                Access to this portal is strictly monitored and logged.
                Unauthorized access attempts will be reported.
              </p>
            </div>
          </div>
        </div>
        <footer className="mt-8 text-center" data-purpose="page-footer">
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <a className="hover:text-gray-600 transition-colors" href="#">System Status</a>
            <span>•</span>
            <a className="hover:text-gray-600 transition-colors" href="#">IT Support</a>
            <span>•</span>
            <a className="hover:text-gray-600 transition-colors" href="#">Privacy Policy</a>
          </div>
          <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
            © 2023 LibTrack Infrastructure v4.2.0
          </p>
        </footer>
      </main>
    </div>
  );
};

export default SuperAdminLogin;
