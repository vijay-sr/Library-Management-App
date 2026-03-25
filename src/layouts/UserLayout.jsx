import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import UserNavbar from '../components/common/UserNavbar';
import UserFooter from '../components/common/UserFooter';

const UserLayout = () => {
    const location = useLocation();
    
    // The Catalog page uses a specific fixed-height dashboard layout
    // We conditionally apply the full h-screen wrapper without the footer
    const isCatalogPage = location.pathname.includes('/user/catalog');

    if (isCatalogPage) {
        return (
            <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background text-on-background font-display border-t-0 p-0 m-0 box-border">
                <UserNavbar />
                <Outlet />
            </div>
        );
    }

    // Default User Portal Layout (allows full vertical scrolling)
    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <UserNavbar />
            <div className="layout-container flex h-full grow flex-col">
                <Outlet />
            </div>
            <UserFooter />
        </div>
    );
};

export default UserLayout;
