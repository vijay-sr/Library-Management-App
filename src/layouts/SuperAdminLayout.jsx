import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SuperAdminLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="text-slate-900 overflow-hidden h-screen flex bg-slate-50 font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 h-full bg-white border-r border-slate-200 flex flex-col shrink-0" data-purpose="sidebar-navigation">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-custom flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">LibTrack</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Super Admin</p>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-hide">
          <Link to="/super-admin/dashboard" className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-custom ${location.pathname === '/super-admin/dashboard' ? 'active-nav' : 'text-slate-600 hover:bg-slate-50'}`}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Dashboard
          </Link>
          <Link to="/super-admin/clients" className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-custom ${location.pathname.includes('/super-admin/clients') ? 'active-nav' : 'text-slate-600 hover:bg-slate-50'}`}>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Client Management
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-custom">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.835 1.503 9.359 4.07 13.113l1.734-1.734a7.5 7.5 0 0010.607 10.607l1.477-1.477a11.962 11.962 0 01-5.67-15.483z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            Subscription Oversight
          </Link>
          <Link to="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-custom">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            System Logs
          </Link>
          
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link to="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-custom">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Settings
            </Link>
          </div>
        </nav>
        
        <div className="p-4 border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-custom">
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              <img alt="Admin Avatar" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4LAQ6eExfwMHqQnjsusymkVcPbO2-WXtQ5HwgFokPlike5KRt70IjJQrC2OS7ywRqYLXvQ_4B_3slSrcy-4r2WFRV-n8kUpadCwVx-gpn3Fk09-817P-S0mGgL00mjbmntPS1_Z9NaiyJVXY8n6bXxX-lCsW7u3oz63YzBwxQ3ejgpM4Bil1eh4Haz7eScHejpCRNjtEYeMSK3R2ayVV4IfG50J5KaP98xbMP2SV8bYiP184ZrKSoF99RFSxgiq3GWzcFK_SXR_Ae"/>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold truncate">James Wilson</p>
              <p className="text-[10px] text-slate-500 truncate">james@libtrack.com</p>
            </div>
            <Link to="/super-admin/login" className="text-slate-400 hover:text-red-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Main Dashboard Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        <div className="flex-1 overflow-y-auto p-0 scrollbar-hide">
          {children}
        </div>
      </main>
    </div>
  );
};

export default SuperAdminLayout;
