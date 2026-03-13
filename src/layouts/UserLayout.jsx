import { Link } from 'react-router-dom';

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-display text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Simple User Navigation */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/user/dashboard" className="text-xl font-bold text-primary-600 dark:text-primary-400">
            LibTrack Member
          </Link>
          <div className="flex gap-4">
            <Link to="/user/dashboard" className="hover:text-primary-600 transition-colors">Dashboard</Link>
            <Link to="/user/search" className="hover:text-primary-600 transition-colors">Search Books</Link>
            <Link to="/user/borrowed" className="hover:text-primary-600 transition-colors">My Books</Link>
            <Link to="/" className="text-slate-500 hover:text-red-500 transition-colors">Logout</Link>
          </div>
        </div>
      </nav>
      
      <main className="flex-1 flex flex-col container mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
