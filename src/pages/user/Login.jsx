import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password, rememberMe });
        // Handle login logic here
    };

    return (
        <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary mb-4 shadow-lg shadow-primary/20">
                        <span className="material-icons text-white text-3xl">auto_stories</span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">LibTrack</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Manage your library collection with ease.</p>
                </div>

                {/* Login Card */}
                <div className="bg-white dark:bg-slate-800/50 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 p-8">
                    <h2 className="text-xl font-semibold mb-6">Welcome Back</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative">
                                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail_outline</span>
                                <input
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">
                                    Password
                                </label>
                                <a className="text-xs font-semibold text-primary hover:underline" href="#">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock_open</span>
                                <input
                                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-slate-900 dark:text-slate-100"
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-900"
                                id="remember"
                                name="remember"
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">
                                Keep me signed in
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2"
                            type="submit"
                        >
                            <span>Sign In</span>
                            <span className="material-icons text-sm">login</span>
                        </button>
                    </form>

                    {/* Social Login Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <img
                                alt="Google"
                                className="w-5 h-5"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk3p59uCDiyP47l3j7Ur7OHVS9uQZLpfui9c5BmVBLmiVHB0QdGdsrglp_Ysr2TxAV-QSHOMNccEEVpBY8dXYyF9K5dDpBkK7J_hbE48S1NscG_EsVZ2klj2HWzRn0nh5G3Omr-VW5Y_I2WqZFTWoNJdIQWV9iWWHyg_0ZR1QtvDojts53sl7zcQTor3VJiOFmYTbDrM76w1xLVY8Jd0cMPbAIB1bw1w-tVxHibOvdn7EjGNU2y0rxs_mBMd6jf67U9PFJvAtZRATV"
                            />
                            <span className="text-sm font-medium">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <span className="material-icons text-slate-900 dark:text-white">apple</span>
                            <span className="text-sm font-medium">Apple</span>
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
                    Don't have an account?{' '}
                    <a className="font-semibold text-primary hover:underline" href="#">
                        Sign up for free
                    </a>
                </p>

                {/* Aesthetic Background Elements (Subtle) */}
                <div className="fixed -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                <div className="fixed -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
    );
};

export default Login;
