import React from 'react'

const LoginOtp = () => {
    return (
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-50">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center size-10 rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined">menu_book</span>
                            </div>
                            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">LibTrack</h2>
                        </div>
                        <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                    </header>
                    <main className="flex-1 flex items-center justify-center p-4">
                        <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 rounded-2xl p-8 md:p-12">
                            <div className="flex justify-center mb-8">
                                <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                                </div>
                            </div>
                            <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-bold text-center mb-3 tracking-tight">Verify Your Identity</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-center text-sm md:text-base mb-10 leading-relaxed">
                                We've sent a 6-digit verification code to <br />
                                <span className="font-semibold text-slate-700 dark:text-slate-200">m***e@example.com</span>
                            </p>
                            <form action="#" className="space-y-10" method="POST">
                                <div className="flex justify-between items-center gap-2 sm:gap-3">
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                    <input className="w-full aspect-square text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-primary dark:focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" inputMode="numeric" maxLength="1" pattern="[0-9]*" required="" type="number" />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-lg">schedule</span>
                                        <span className="text-sm font-medium">Resend code in <span className="text-primary font-bold">01:59</span></span>
                                    </div>
                                    <button className="text-primary hover:text-primary/80 text-sm font-semibold opacity-50 cursor-not-allowed transition-opacity" disabled="" type="button">
                                        Resend Code
                                    </button>
                                </div>
                                <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all flex items-center justify-center gap-2 group" type="submit">
                                    Verify Account
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </form>
                            <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    Having trouble? <a className="text-primary hover:underline font-semibold" href="#">Contact Support</a>
                                </p>
                            </div>
                        </div>
                    </main>
                    <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-50"></div>
                </div>
            </div>
    )
}

export default LoginOtp;