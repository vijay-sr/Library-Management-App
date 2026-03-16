import React from 'react'

const Dashboard = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col justify-between p-4">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 px-2">
              <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">auto_stories</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">Library Admin</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Main City Branch</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary" href="#">
                <span className="material-symbols-outlined text-[22px]">dashboard</span>
                <span className="text-sm font-semibold">Dashboard</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-symbols-outlined text-[22px]">menu_book</span>
                <span className="text-sm font-semibold">Manage Books</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-symbols-outlined text-[22px]">group</span>
                <span className="text-sm font-semibold">Members</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-symbols-outlined text-[22px]">bar_chart</span>
                <span className="text-sm font-semibold">Reports</span>
              </a>
              <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
                <span className="material-symbols-outlined text-[22px]">event_note</span>
                <span className="text-sm font-semibold">Reservations</span>
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary py-2.5 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-sm">add</span>
              <span>Add New Book</span>
            </button>
            <div className="flex items-center gap-3 px-2 py-3 border-t border-slate-200 dark:border-slate-800">
              <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Admin profile" data-alt="Portrait of a male library administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAySOdmBjj4vFjxhiD9dTqHonwvt3_LsW6E2fMyPkgeVCaNfpDa2JGwILA2t6tVP-qTymeCJGTcDAZOI_hS8qFIz6pIWFBkFBKs5BnCosw_55opSUwXMUk_GJF8IXWPuutIhoPy9ed6m_7qBxDLcVYttcHbk53vRZTFH_njdvyttz9t6iaYpWU2Ue_gULjNR2K7yVUUnmgqPW8z4sP67UGMI7VJiOQQvKXmrsaUL3-N1upK0Ugfsytn0MLgpANbK4WBu7VacvqQriHH" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">John Doe</p>
                <p className="text-[10px] text-slate-500">Super Admin</p>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-sm">logout</span>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex items-center justify-between px-8 sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <div className="relative w-full">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search for books, authors, or members..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:bg-slate-800 relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
              </button>
              <button className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:bg-slate-800">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
          </header>
          {/* Dashboard Content */}
          <div className="p-8 space-y-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-black tracking-tight">Dashboard Overview</h2>
              <p className="text-slate-500 dark:text-slate-400">Welcome back, Librarian. Here's a snapshot of today's activity.</p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">library_books</span>
                  <span className="text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">+2.1%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Books</p>
                  <h3 className="text-3xl font-bold">12,450</h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-amber-500 bg-amber-500/10 p-2 rounded-lg">outbound</span>
                  <span className="text-red-600 text-xs font-bold bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full">-0.5%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Issued Books</p>
                  <h3 className="text-3xl font-bold">3,201</h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-red-500 bg-red-500/10 p-2 rounded-lg">running_with_errors</span>
                  <span className="text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">+12.4%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Overdue Books</p>
                  <h3 className="text-3xl font-bold">145</h3>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="material-symbols-outlined text-indigo-500 bg-indigo-500/10 p-2 rounded-lg">person_check</span>
                  <span className="text-green-600 text-xs font-bold bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">+5.3%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Members</p>
                  <h3 className="text-3xl font-bold">890</h3>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity Feed */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-xl font-bold">Recent Activity</h3>
                  <button className="text-primary text-sm font-semibold hover:underline">View all</button>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Activity Item 1 */}
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                          <span className="material-symbols-outlined">assignment_returned</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold">"The Great Gatsby" returned</p>
                          <p className="text-xs text-slate-500">Returned by Alice Johnson</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">2 mins ago</p>
                        <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">In Stock</p>
                      </div>
                    </div>
                    {/* Activity Item 2 */}
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                          <span className="material-symbols-outlined">ios_share</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold">"Atomic Habits" issued</p>
                          <p className="text-xs text-slate-500">Borrowed by Marcus Smith</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">45 mins ago</p>
                        <p className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Due: Oct 24</p>
                      </div>
                    </div>
                    {/* Activity Item 3 */}
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600">
                          <span className="material-symbols-outlined">event_busy</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold">Overdue Alert: "1984"</p>
                          <p className="text-xs text-slate-500">Member: Sarah Williams</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">2 hours ago</p>
                        <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">Late 3 days</p>
                      </div>
                    </div>
                    {/* Activity Item 4 */}
                    <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                          <span className="material-symbols-outlined">person_add</span>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold">New Member Registered</p>
                          <p className="text-xs text-slate-500">Kevin Durant joined the library</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-slate-400">5 hours ago</p>
                        <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions / Top Categories */}
              <div className="flex flex-col gap-4">
                <div className="px-2">
                  <h3 className="text-xl font-bold">Book Availability</h3>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Fiction</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Science &amp; Tech</span>
                        <span>62%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500" style={{ width: '62%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>History</span>
                        <span>40%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>Children's</span>
                        <span>94%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{ width: '94%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-bold mb-4">Quick Librarian Tasks</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 transition-colors text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined mb-1">qr_code_scanner</span>
                        <span className="text-[10px] font-bold">Scan Book</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 transition-colors text-slate-700 dark:text-slate-300">
                        <span className="material-symbols-outlined mb-1">history_edu</span>
                        <span className="text-[10px] font-bold">Fine Check</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard;