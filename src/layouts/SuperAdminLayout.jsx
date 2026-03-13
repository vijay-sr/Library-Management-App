import { Link } from 'react-router-dom';

const SuperAdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 flex h-screen overflow-hidden">
      {/* Sidebar for Super Admin */}
      <aside className="w-64 bg-slate-800 dark:bg-slate-950 text-white flex flex-col h-full shadow-xl">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold tracking-tight text-white">Super Admin</h1>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-4">
            <li>
              <Link to="/super-admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary-600/20 text-primary-400 hover:bg-primary-600/30 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/super-admin/libraries" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                Libraries
              </Link>
            </li>
            <li>
              <Link to="/super-admin/subscriptions" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                Subscriptions
              </Link>
            </li>
            <li>
              <Link to="/super-admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <Link to="/super-admin/login" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors">
            Logout
          </Link>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 h-16 flex items-center justify-between px-8">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">Admin Dashboard</h2>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold">
              SA
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
