import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password, rememberMe });
        // After successful login, navigate to user dashboard
        navigate('/user/dashboard');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
            <div className="flex h-full grow flex-col">
                {/* Top Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="text-primary">
                            <svg className="size-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">LibTrack</h2>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-sm text-slate-500 dark:text-slate-400">Don't have an account?</span>
                        <Link to="/user/register" className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90">
                            <span className="truncate">Sign Up</span>
                        </Link>
                    </div>
                </header>
                
                {/* Main Content Area */}
                <main className="flex-1 flex items-center justify-center p-6 md:p-12 z-10">
                    <div className="w-full max-w-[440px] flex flex-col gap-8">
                        {/* Welcome Header */}
                        <div className="flex flex-col gap-2 text-center md:text-left">
                            <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-black leading-tight tracking-tight">Welcome Back</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg">Access your member dashboard</p>
                        </div>
                        
                        {/* Login Form */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Email Field */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold uppercase tracking-wider">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                        <input 
                                            className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" 
                                            placeholder="name@example.com" 
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                {/* Password Field */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold uppercase tracking-wider">Password</label>
                                    </div>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                                        <input 
                                            className="w-full pl-12 pr-12 py-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400" 
                                            placeholder="••••••••" 
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" type="button">
                                            <span className="material-symbols-outlined text-xl">visibility</span>
                                        </button>
                                    </div>
                                </div>
                                
                                {/* Options Row */}
                                <div className="flex items-center justify-between py-2">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center">
                                            <input 
                                                className="checkbox-custom h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-transparent text-primary checked:bg-primary focus:ring-primary/20 transition-all cursor-pointer" 
                                                type="checkbox"
                                                checked={rememberMe}
                                                onChange={(e) => setRememberMe(e.target.checked)}
                                            />
                                        </div>
                                        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">Remember Me</span>
                                    </label>
                                    <Link to="/user/forgot-password" className="text-primary text-sm font-bold hover:underline">Forgot Password?</Link>
                                </div>
                                
                                {/* Sign In Button */}
                                <button className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-[0.98]" type="submit">
                                    Sign In
                                </button>
                            </form>
                            
                            {/* Divider */}
                            <div className="relative my-8">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 font-medium">Or continue with</span>
                                </div>
                            </div>
                            
                            {/* Social Login */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <img alt="Google logo" className="size-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBShNpIYQeN5XLETyV5mGUuX9_D9zWRuPRSBt4lsxAheKuN9vT42Irelj4EZvshYPQoxrFNRg59ubdNe0h-Poc3V1dG5QCEEla7XLD7sEfhquNHPzdw9tJH9MXiXbW6tPgQbL8sq-XzyfLSuxPpJuAiqI-yz-EbcfzSYW-wm4P-lMS4rCDnIgHJNnxbVibglNI_hTk_tZ_4HMwxnX8L-G0BBD3stNEGWko3TBN2X51ddcCWEBZzs06srMwIGR4rlIPj-HWi1Adp15_4"/>
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Google</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                    <span className="material-symbols-outlined text-slate-900 dark:text-white">laptop_mac</span>
                                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apple</span>
                                </button>
                            </div>
                        </div>
                        
                        {/* Footer Text */}
                        <p className="text-center text-slate-500 dark:text-slate-500 text-sm">
                            By continuing, you agree to LibTrack's{' '}
                            <Link to="/terms" className="underline hover:text-primary">Terms of Service</Link> and{' '}
                            <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                        </p>
                    </div>
                </main>
                
                {/* Illustration / Background element */}
                <div className="fixed bottom-0 right-0 p-8 opacity-10 pointer-events-none hidden lg:block z-0">
                    <span className="material-symbols-outlined text-[300px] text-primary">security</span>
                </div>
            </div>
        </div>
    );
};

export default Login;
