import React from 'react'
import AdminNavbar from '../components/common/AdminNavbar'
import AdminSidebar from '../components/common/AdminSidebar'
import { Outlet, useLocation } from 'react-router-dom'

function AdminLayout() {
    const location = useLocation();
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
        <div className="flex h-screen overflow-hidden">
            <AdminSidebar/>
            {/* Main Content */}
            <main className="flex-1 overflow-y-auto flex flex-col">
                <AdminNavbar/>
                {/* Dashboard Content */}
                <Outlet/>
            </main>
        </div>
        </div>
    )
}

export default AdminLayout