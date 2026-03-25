import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useToast } from '../../components/common/ToastContext';

const UserNavbar = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();

    const handleLogout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            showToast("Logged out successfully.", "success");
            navigate('/user/login');
        } catch (error) {
            console.error("Error logging out:", error.message);
            showToast("Error logging out.", "error");
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/search');
    };

    return (
        <header className="flex-shrink-0 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-10 py-3 z-50 shadow-sm sticky top-0 w-full text-slate-900 dark:text-slate-100">
            <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-3 text-primary">
                    <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined text-primary">auto_stories</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">LibraryConnect</h2>
                </Link>
                
                <label className="flex flex-col min-w-40 h-10 max-w-64">
                    <form 
                        onSubmit={handleSearch}
                        className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
                    >
                        <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-3">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input 
                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-0 border-none bg-transparent placeholder:text-slate-500 dark:placeholder:text-slate-400 px-3 text-sm font-normal outline-none" 
                            placeholder="Search for books, authors..." 
                        />
                        <button type="submit" className="hidden">Search</button>
                    </form>
                </label>
            </div>
                
            <div className="flex flex-1 justify-end gap-6 items-center">
                <nav className="flex items-center gap-6">
                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/user/dashboard">Dashboard</Link>
                    <Link className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal" to="/user/catalog">Catalog</Link>
                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#my-books">My Books</a>
                    <a className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#profile">Profile</a>
                </nav>
                
                <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-6">
                    <button className="relative flex items-center justify-center rounded-full size-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    <div className="flex items-center gap-2">
                        <div 
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20" 
                            title="User Profile" 
                            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKOyMQwVB_uK_o66oJOfB015RmKZBynITgOBg6I9AhCCfKfnT1GQTogLHdaJDTlccHIjTwxEGbGiaiGiie_Lf3Eudsz-OyWgoV_V3YUnguP6xRX8zW56lmnyeBq-GNCbbp5sqpVwKeFNOcfddWSa-emNijgIf665CoGuldFjiUsiJlKVTeIwojDckG2nFGtnBNI7qJkKWg3Cs6KiTeyw6CTV6L_IasaNKIr4wLTD7BdaacFMTyn6_ogHZtiqbZ1Y523iHb1TkJQo48")'}}
                        ></div>
                        <button 
                            onClick={handleLogout}
                            title="Logout"
                            className="flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
                        >
                            <span className="material-symbols-outlined">logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default UserNavbar;
