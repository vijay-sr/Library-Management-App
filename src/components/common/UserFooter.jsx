import React from 'react';

const UserFooter = () => {
    return (
        <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-10 flex flex-wrap justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">© 2023 LibraryConnect. Empowering readers everywhere.</p>
                </div>
                <div className="flex gap-6">
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#privacy">Privacy Policy</a>
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#terms">Terms of Service</a>
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#help">Help Center</a>
                </div>
            </div>
        </footer>
    );
};

export default UserFooter;
