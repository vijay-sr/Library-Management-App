import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark py-12 px-6 md:px-20 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 text-primary">
                    <span className="material-symbols-outlined text-2xl font-bold">auto_stories</span>
                    <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold">LibTrack</h2>
                </div>
                <div className="flex gap-8">
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
                    <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
                    <Link className="text-slate-500 hover:text-primary transition-colors text-sm" to="/contact">Contact Us</Link>
                </div>
                <p className="text-slate-400 text-sm">© 2024 LibTrack Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
