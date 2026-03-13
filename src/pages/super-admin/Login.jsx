import React from 'react';
import { Link } from 'react-router-dom';

const SuperAdminLogin = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">LibTrack</h1>
          <p className="text-slate-400 text-sm">Super Admin Portal</p>
        </div>
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Admin Login</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@libtrack.com"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-slate-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-slate-500"
              />
            </div>
            <button
              type="button"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-xl transition-colors mt-2"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-slate-500 text-xs mt-6">
            This portal is restricted to system administrators only.
          </p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            ← Back to Marketing Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLogin;
