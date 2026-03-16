import React from 'react';

const ForgotPassword = () => {
    return (
        <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 bg-white dark:bg-slate-900">
                        <div className="flex items-center gap-3">
                            <div className="text-primary size-8 flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">auto_stories</span>
                            </div>
                            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">LibTrack</h2>
                        </div>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                    </header>
                    <main className="flex flex-1 items-center justify-center px-6 py-12">
                        <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col gap-3 mb-8">
                                <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Forgot Password</h1>
                                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed">
                                    No worries! Enter your email address below and we'll send you a secure link to reset your password.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                        <input className="form-input flex w-full rounded-lg text-slate-900 dark:text-white border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 pl-12 pr-4 text-base transition-all placeholder:text-slate-400" placeholder="name@company.com" type="email" />
                                    </div>
                                </div>
                                <button className="w-full flex cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                                    <span>Send Reset Link</span>
                                </button>
                                <div className="pt-4 text-center">
                                    <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-semibold transition-colors group" href="#">
                                        <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">arrow_back</span>
                                        Back to Login
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 opacity-20"></div>
                </div>
            </div>
        </body>
    );
};

export default ForgotPassword;