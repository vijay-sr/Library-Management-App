import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useToast } from './ToastContext'

function AdminSidebar() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser({
          name: session.user.user_metadata?.full_name || 'Admin',
          library: session.user.user_metadata?.library_name || 'Main City Branch'
        });
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      showToast('Logged out successfully', 'success');
      navigate('/login');
    } catch (error) {
      showToast(error.message, 'error');
    }
  };

  return (
    <div className="h-full">
         {/* Sidebar */}
        <aside className="w-64 h-full flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col justify-between p-4">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">Library Admin</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{user?.library || 'Loading...'}</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" to="/dashboard">
                <span className="material-symbols-outlined text-[22px]">dashboard</span>
                <span className="text-sm font-semibold">Dashboard</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="/dashboard/book-inventory">
                <span className="material-symbols-outlined text-[22px]">menu_book</span>
                <span className="text-sm font-semibold">Manage Books</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="#">
                <span className="material-symbols-outlined text-[22px]">group</span>
                <span className="text-sm font-semibold">Members</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="#">
                <span className="material-symbols-outlined text-[22px]">bar_chart</span>
                <span className="text-sm font-semibold">Reports</span>
              </Link>
              <Link className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" to="#">
                <span className="material-symbols-outlined text-[22px]">event_note</span>
                <span className="text-sm font-semibold">Reservations</span>
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <Link to="/dashboard/add-book" className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              <span>Add New Book</span>
            </Link>
            <div className="flex items-center gap-3 px-2 py-3 border-t border-slate-200 dark:border-slate-800">
              <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Admin profile" data-alt="Portrait of a male library administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAySOdmBjj4vFjxhiD9dTqHonwvt3_LsW6E2fMyPkgeVCaNfpDa2JGwILA2t6tVP-qTymeCJGTcDAZOI_hS8qFIz6pIWFBkFBKs5BnCosw_55opSUwXMUk_GJF8IXWPuutIhoPy9ed6m_7qBxDLcVYttcHbk53vRZTFH_njdvyttz9t6iaYpWU2Ue_gULjNR2K7yVUUnmgqPW8z4sP67UGMI7VJiOQQvKXmrsaUL3-N1upK0Ugfsytn0MLgpANbK4WBu7VacvqQriHH" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">{user?.name || 'Librarian'}</p>
                <p className="text-[10px] text-slate-500">Administrator</p>
              </div>
              <button 
                onClick={handleLogout}
                className="material-symbols-outlined text-slate-400 text-base hover:text-red-500 transition-colors"
                title="Logout"
              >
                logout
              </button>
            </div>
          </div>
        </aside>
    </div>
  )
}

export default AdminSidebar