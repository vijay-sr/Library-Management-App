import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { Link, useNavigate } from 'react-router-dom';

const Catalog = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchBooks() {
            try {
                const { data, error } = await supabase
                    .from('books')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setBooks(data);
            } catch (err) {
                console.error("Error fetching books:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchBooks();
    }, []);

    return (
        <div className="flex flex-1 overflow-hidden">
            {/* SideNavBar Execution */}
            <aside className="hidden md:flex flex-col flex-shrink-0 w-64 bg-background-light dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800 p-4 space-y-2 text-sm font-semibold tracking-wide overflow-y-auto">
                <div className="px-2 py-4 mb-4">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="bg-primary-fixed p-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-primary">auto_stories</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-slate-900 dark:text-slate-50">The Archive</h2>
                            <p className="text-[10px] text-on-surface-variant font-normal uppercase tracking-widest">Curated Collection</p>
                        </div>
                    </div>
                </div>

                <nav className="space-y-1">
                    <a className="flex items-center gap-3 px-3 py-2.5 text-primary bg-white dark:bg-slate-900 shadow-sm rounded-lg duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">library_books</span>
                        <span>All Books</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">event_available</span>
                        <span>Available Now</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">auto_stories</span>
                        <span>New Arrivals</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">star</span>
                        <span>Staff Picks</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">auto_awesome_motion</span>
                        <span>Reading List</span>
                    </a>
                </nav>

                <div className="mt-auto space-y-1 pt-8 pb-4">
                    <button onClick={() => navigate('/user/dashboard')} className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 text-slate-800 py-3 rounded-lg font-bold mb-2 flex justify-center active:scale-95 transition-all text-center gap-2 items-center">
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        Back to Dashboard
                    </button>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold mb-4 active:scale-95 transition-all shadow-md shadow-primary/20">
                        Donate a Book
                    </button>
                    <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </a>
                    <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#">
                        <span className="material-symbols-outlined">help_outline</span>
                        <span>Support</span>
                    </a>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-8 overflow-y-auto">
                {/* Header Section */}
                <header className="mb-10">
                    <h1 className="text-[3.75rem] font-black leading-tight tracking-tighter text-slate-900 dark:text-white mb-2">Catalog</h1>
                    <p className="text-on-surface-variant dark:text-slate-400 max-w-2xl text-lg">Explore our curated collection of physical and digital wisdom. From timeless classics to the latest intellectual breakthroughs.</p>
                </header>

                {/* Filters & Sorting Bar */}
                <section className="mb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-surface dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-outline-variant/50">
                    <div className="flex flex-wrap items-center gap-8">
                        {/* Genres */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 dark:text-slate-400">Genres</label>
                            <div className="flex gap-2 relative">
                                <select className="bg-surface-container dark:bg-slate-800 dark:text-white border-none text-sm font-semibold rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                                    <option>All Genres</option>
                                    <option>Fiction</option>
                                    <option>Sci-Fi</option>
                                    <option>Biography</option>
                                    <option>Philosophy</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 dark:text-slate-400">Availability</label>
                            <div className="flex gap-2 relative">
                                <select className="bg-surface-container dark:bg-slate-800 dark:text-white border-none text-sm font-semibold rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                                    <option>Any Availability</option>
                                    <option>In Stock</option>
                                    <option>Borrowed</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                            </div>
                        </div>

                        {/* Format */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 dark:text-slate-400">Format</label>
                            <div className="flex gap-2 relative">
                                <select className="bg-surface-container dark:bg-slate-800 dark:text-white border-none text-sm font-semibold rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer outline-none">
                                    <option>All Formats</option>
                                    <option>Physical</option>
                                    <option>E-book</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 lg:border-l border-outline-variant lg:pl-6 dark:border-slate-700">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60 dark:text-slate-400">Sort By</label>
                            <div className="relative">
                                <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer outline-none appearance-none pr-6">
                                    <option>Newest Arrivals</option>
                                    <option>Most Popular</option>
                                    <option>Alphabetical</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-[16px]">swap_vert</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Book Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 min-h-[300px]">
                    {loading && (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-50">
                            <div className="animate-spin text-primary mb-4">
                                <span className="material-symbols-outlined text-[48px]">sync</span>
                            </div>
                            <p className="font-bold text-slate-500">Retrieving collection...</p>
                        </div>
                    )}

                    {error && (
                        <div className="col-span-full bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 p-8 rounded-2xl text-center">
                            <span className="material-symbols-outlined text-red-500 text-4xl mb-4">error</span>
                            <p className="text-red-700 dark:text-red-400 font-bold mb-2">Something went wrong</p>
                            <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
                        </div>
                    )}

                    {!loading && !error && books.length === 0 && (
                        <div className="col-span-full text-center py-20 opacity-50">
                            <span className="material-symbols-outlined text-[64px] mb-4">menu_book</span>
                            <p className="text-xl font-bold">The archive is empty.</p>
                            <p className="text-sm">Wait for new arrivals to be cataloged.</p>
                        </div>
                    )}

                    {!loading && !error && books.map((book) => (
                        <div key={book.id} className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-slate-100 dark:bg-slate-800">
                                <img 
                                    alt={book.title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    src={book.image || book.cover_image || "https://images.unsplash.com/photo-1543004471-240683679d45?auto=format&fit=crop&q=80&w=400"} 
                                />
                                <div className="absolute top-3 left-3">
                                    <span className={`px-3 py-1 ${book.status === 'borrowed' ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300' : 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'} text-[10px] font-bold rounded-full uppercase tracking-wider`}>
                                        {book.status || 'Available'}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">{book.title}</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">{book.author || "Unknown Author"}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className={`bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all ${book.status === 'borrowed' ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                        {book.status === 'borrowed' ? 'Waitlist' : 'Reserve Now'}
                                    </button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">{book.genre || "Collection"}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="mt-20 flex items-center justify-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 transition-colors disabled:opacity-30 dark:text-white" disabled>
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold text-sm">1</button>
                    <button className="w-10 h-10 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 dark:text-slate-300 font-bold text-sm transition-colors text-on-surface-variant">2</button>
                    <button className="w-10 h-10 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 dark:text-slate-300 font-bold text-sm transition-colors text-on-surface-variant">3</button>
                    <span className="px-2 text-on-surface-variant dark:text-slate-400">...</span>
                    <button className="w-10 h-10 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 dark:text-slate-300 font-bold text-sm transition-colors text-on-surface-variant">12</button>
                    <button className="p-2 rounded-lg hover:bg-surface-container dark:hover:bg-slate-800 transition-colors dark:text-white">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Catalog;
