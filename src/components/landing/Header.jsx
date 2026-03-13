import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">auto_stories</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">LibTrack</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-8 items-center">
                <nav className="hidden lg:flex items-center gap-8">
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/#features">Features</a>
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/#how-it-works">How it Works</a>
                    <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="/#pricing">Pricing</a>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/about">About</Link>
                    <Link className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" to="/contact">Contact</Link>
                </nav>
                <div className="flex gap-3">
                    <Link 
                        to="/login"
                        className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm font-bold hover:bg-slate-200 transition-all"
                    >
                        Log In
                    </Link>
                    <Link 
                        to="/register"
                        className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold hover:opacity-90 transition-all shadow-md shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
