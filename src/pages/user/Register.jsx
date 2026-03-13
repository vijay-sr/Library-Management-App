import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-6 md:px-20 py-4 sticky top-0 z-50">
          <Link to="/" className="flex items-center gap-3">
            <div className="text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">auto_stories</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">LibTrack</h2>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-500 dark:text-slate-400 text-sm">Already have an account?</span>
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-bold">
              Sign In
            </button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex flex-col gap-8">
              <div>
                <h1 className="text-slate-900 dark:text-slate-100 text-5xl font-black leading-tight tracking-tight mb-4">
                  Empowering libraries <br /><span className="text-primary">everywhere.</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md">
                  Join thousands of librarians managing collections, tracking circulation, and engaging readers with LibTrack's modern management suite.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">Catalog Management</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Easily organize and track your entire collection in one place.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">group</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200">Member Portal</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Give your patrons a seamless digital experience.</p>
                  </div>
                </div>
              </div>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img 
                  className="object-cover w-full h-full" 
                  alt="Modern library interior with bookshelves and natural lighting" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPjrtuazGDQ1-kA4iBiaxrPa4BHEthSmqg9jEwW2xRal3fUQbbTFQj8IaV6g9QN7v_y73K3e-xB0F9kkJ8lqUyTjvZuZjhk7uc5WVRFqxGIv0geJAGo88SAxNy2p-egyrbLbiru9EWQFDMiD9eFkoCzoll7NuDHU8LMZUL--eOme-ykBBDqjGtld1HyNq0-fsPDHV9iEXXAfpUg_c9x17_B3mWwlmXkArVUtVmSLj_rS9zMkfIvKX5RonWUw72hTwdgPnYMk62NG3I" 
                />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Get Started</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Create your administrative account</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">person</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      placeholder="name@library.org" 
                      type="email" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Organization / Library Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">account_balance</span>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      placeholder="Central City Public Library" 
                      type="text" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                    <input 
                      className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" 
                      placeholder="••••••••" 
                      type="password" 
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary" type="button">
                      <span className="material-symbols-outlined text-xl">visibility</span>
                    </button>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 px-1">Must be at least 8 characters long</p>
                </div>

                <div className="pt-4">
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
                    Create Account
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </button>
                </div>

                <div className="relative py-4 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                  </div>
                  <span className="relative bg-white dark:bg-slate-900 px-4 text-xs font-medium text-slate-400 uppercase tracking-widest">or continue with</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                    <img alt="Google Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh6zJar-KDEJyGLAh6ejY5qryeMBLd4H06xS9JrS8GaTMTYVecHFEuY0kYwkESQxoBt7J33kqVw1M4P9CZnQZtnGlCFmCy4HPq337mqGIoCOVfWULT-A5nY_kIQADK7qYrzLGCAg9TDPCPzzvzQ14t6fT0PSVLzvbZdw0cARoJeDF-x1aSrfdmqVKbQK7EOadx64xbp8Pea3QFtGWIyvvqo0smn5OJqkdXPLkACWW31_aTVvOusD9CXaHnH3Gmhe5C0XENF4LCkHvI" />
                    <span className="text-sm font-semibold">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                    <img alt="Microsoft Logo" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCM-tBXsVV3snmstgDB_QTD0Y27a05o8j2psHNQ5A5jOs2MbXdqEwAE9W2dKO6TcCF1MBTvVx7cTE-2FUOqsm2ESvKiJRSu9-XH9cSbey_9cYoqJuvP_JfnVY8k0tiaK3Up0mh2216kctIu8OGHpJnzlkN-OUMLGrtYP37OO_VVWB_KGMacT2nETDA3tU5VCcbOJv7NofxYKywfMqfENXVmh-3s4qNzDcc4hvS_OAbRv__WyXVeehR222RF-WI3RwcUEPxZtXREJsD" />
                    <span className="text-sm font-semibold">Microsoft</span>
                  </button>
                </div>

                <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8 leading-relaxed">
                  By creating an account, you agree to LibTrack's <br />
                  <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </div>
        </main>

        <footer className="py-8 px-6 md:px-20 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 LibTrack Library Management Systems. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">Security</a>
            <a className="hover:text-primary transition-colors" href="#">Help Center</a>
            <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
