import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from './ToastContext';

const ProtectedRoute = ({ children, loginPath = '/user/login' }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const { showToast } = useToast();
    const navigate = useNavigate();

    // Session Timeout variables: 15 minutes of inactivity
    const timeoutDuration = 15 * 60 * 1000;
    
    useEffect(() => {
        let timeoutId;
        
        // This function will reset the idle timer
        const resetLogoutTimer = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(async () => {
                // Auto logout on idle
                try {
                    await supabase.auth.signOut();
                    showToast("Session expired due to inactivity. Please log in again.", "error");
                    navigate(loginPath);
                } catch (err) {
                    console.error("Error signing out:", err);
                }
            }, timeoutDuration);
        };

        const checkAuth = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (!session) {
                    setIsAuthenticated(false);
                } else {
                    setIsAuthenticated(true);
                    // Start timer once verified logged in
                    setupActivityListeners();
                    resetLogoutTimer();
                }
            } catch (err) {
                setIsAuthenticated(false);
            }
        };

        const setupActivityListeners = () => {
            window.addEventListener('mousemove', resetLogoutTimer);
            window.addEventListener('keypress', resetLogoutTimer);
            window.addEventListener('click', resetLogoutTimer);
            window.addEventListener('scroll', resetLogoutTimer);
        };

        const cleanupActivityListeners = () => {
            window.removeEventListener('mousemove', resetLogoutTimer);
            window.removeEventListener('keypress', resetLogoutTimer);
            window.removeEventListener('click', resetLogoutTimer);
            window.removeEventListener('scroll', resetLogoutTimer);
        };

        checkAuth();

        // Listen for authentication state changes (e.g., logging out from another tab)
        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                if (event === 'SIGNED_OUT') {
                    setIsAuthenticated(false);
                } else if (session) {
                    setIsAuthenticated(true);
                }
            }
        );

        return () => {
            authListener?.subscription.unsubscribe();
            clearTimeout(timeoutId);
            cleanupActivityListeners();
        };
    }, [navigate, loginPath, showToast]);

    if (isAuthenticated === null) {
        // Show loading state while checking
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark font-display">
                <div className="flex flex-col items-center gap-4 text-slate-900 dark:text-slate-100 p-8 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                    <p className="font-medium">Verifying session...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        // Inform user why they are being redirected back
        // Using a short timeout before Navigation because state-based notifications can sometimes drop on redirect if not awaited
        setTimeout(() => showToast("Please log in to access the dashboard", "error"), 100);
        return <Navigate to={loginPath} replace />;
    }

    return children;
};

export default ProtectedRoute;
