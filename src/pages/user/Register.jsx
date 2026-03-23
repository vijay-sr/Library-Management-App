import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from '../../components/common/ToastContext';

const Register = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

     // --- Validation Logic ---
    if (fullName.trim().length < 3) {
      showToast("Full name must be at least 3 characters.", "error");
      setLoading(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      showToast("Please enter a valid email address.", "error");
      setLoading(false);
      return;
    }
    if (cardNumber.length < 15) {
      showToast("Please enter a complete 9-digit library card number.", "error");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      showToast("Password must be at least 6 characters long.", "error");
      setLoading(false);
      return;
    }
    // ... rest of logic 
    
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          library_card_number: cardNumber,
        },
      },
    });
    if (signUpError) {
      showToast(signUpError.message, "error");
    } else {
      showToast("Registration successful! Please check your email for confirmation.", "success");
    }
    setLoading(false);
  };


  const handleCardNumberChange = (e) => {
    let value = e.target.value.toUpperCase();
    
    // Ensure it always starts with LIB-
    if (!value.startsWith('LIB-')) {
      // If the user tries to delete the prefix, put it back
      if (value.length < 4) {
        value = 'LIB-';
      } else {
        // Otherwise prepended LIB- if missing
        value = 'LIB-' + value.replace(/^LIB-?/, '');
      }
    }

    // Isolate the numeric part
    const digits = value.slice(4).replace(/\D/g, '');
    
    // Reformat with dashes: XXX-XXX-XXX
    let formatted = 'LIB-';
    for (let i = 0; i < digits.length && i < 9; i++) {
      if (i > 0 && i % 3 === 0) {
        formatted += '-';
      }
      formatted += digits[i];
    }
    
    setCardNumber(formatted);
  };

  const handleGenerateDigitalCard = () => {
    const randomNum = () => Math.floor(100 + Math.random() * 900);
    setCardNumber(`LIB-${randomNum()}-${randomNum()}-${randomNum()}`);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar Image Section */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10"></div>
          <img className="absolute inset-0 w-full h-full object-cover" data-alt="A cozy modern library with wooden bookshelves and warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgMfU9Ks2KOcUuHG2bv2PE072sHuHnfxfI3tcBRukfi8iB9xgfgbrSVwozCWJs-_d-m68j1HF5q0H4w6HYNCk1mfggiiI3-ryD_gmWquIMcB_z44MZcGw-9MVoSg2hHdfFtdB7ZP4TWpd0KCbyR4Ekdu_TFzA2Jlzk0j3vR-V9ObGLqpofPlswpPx5_ZAf7LaYWqbLv-uE848nITbpNJW2M9dzgMU_BX-970TRC2qsQuas_lwlRAFm4BHlmvL7l_Urlr-ljgQzh4C" />
          <div className="relative z-20 flex flex-col justify-between p-12 text-white bg-gradient-to-t from-black/60 to-transparent w-full">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">local_library</span>
              <h1 className="text-2xl font-bold tracking-tight">LibTrack</h1>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">Your gateway to a world of knowledge.</h2>
              <p className="text-lg text-slate-200">Access thousands of digital resources, reserve physical copies, and track your reading journey all in one place.</p>
            </div>
            <div className="text-sm opacity-80">
              © 2024 LibTrack Library Systems. All rights reserved.
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col">
          <header className="flex items-center justify-between px-8 py-6 lg:px-12 border-b border-slate-200 dark:border-slate-800">
            <div className="flex lg:hidden items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl">local_library</span>
              <span className="text-xl font-bold">LibTrack</span>
            </div>
            <div className="hidden lg:block"></div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 dark:text-slate-400">Already a member?</span>
              <Link className="text-sm font-semibold text-primary hover:underline" to="/user/login">Log in</Link>
            </div>
          </header>
          <main className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-24">
            <div className="max-w-md w-full mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">Create an account</h2>
                <p className="text-slate-500 dark:text-slate-400">Join our community and start exploring today.</p>
              </div>

              <form className="space-y-5" onSubmit={handleRegister}>
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="full-name">Full Name</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">person</span>
                      <input 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        id="full-name" 
                        placeholder="John Doe" 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">mail</span>
                      <input 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        id="email" 
                        placeholder="john@example.com" 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="card-number">Library Card Number</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">credit_card</span>
                      <input 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        id="card-number" 
                        placeholder="LIB-000-000-000" 
                        type="text" 
                        required
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-xs text-slate-400">Found on the back of your physical card.</p>
                      <button 
                        type="button" 
                        onClick={handleGenerateDigitalCard} 
                        className="text-xs flex items-center gap-1 font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[14px]">magic_button</span>
                        Auto-generate digital card
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                      <input 
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" 
                        id="password" 
                        placeholder="••••••••" 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg cursor-pointer">visibility</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 py-2">
                  <input className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" id="terms" type="checkbox" required />
                  <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">
                    I agree to the <Link className="text-primary hover:underline" to="/terms">Terms of Service</Link> and <Link className="text-primary hover:underline" to="/privacy">Privacy Policy</Link>.
                  </label>
                </div>
                <button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest font-semibold">Or continue with</p>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    <span className="text-sm font-medium">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                    </svg>
                    <span className="text-sm font-medium">GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </main>
          <footer className="px-8 py-6 lg:px-12 flex justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
            <Link className="hover:text-primary transition-colors" to="/privacy">Privacy</Link>
            <Link className="hover:text-primary transition-colors" to="/terms">Terms</Link>
            <Link className="hover:text-primary transition-colors" to="/help">Help Center</Link>
            <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Register;
