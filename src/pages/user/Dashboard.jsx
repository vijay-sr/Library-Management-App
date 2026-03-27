import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '../../components/common/ToastContext';

const Dashboard = () => {
    const navigate = useNavigate();
    const { showToast } = useToast();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function fetchUser() {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                if (user) {
                    setUserName(user.user_metadata?.full_name || user.email?.split('@')[0] || 'User');
                }
            } catch (err) {
                console.error("Error fetching user:", err);
            }
        }
        fetchUser();

        async function fetchBooks() {
            try {
                const { data, error } = await supabase
                    .from('books')
                    .select('*');

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
        <main className="flex-1 px-4 sm:px-10 lg:px-20 xl:px-40 py-8">
            <div className="max-w-6xl mx-auto space-y-8">
                
                {/* Welcome Section */}
                <div className="flex flex-wrap justify-between items-end gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-slate-900 dark:text-slate-100 text-4xl font-extrabold leading-tight tracking-tight">Welcome back, {userName || 'User'}</h1>
                                <p className="text-slate-600 dark:text-slate-400 text-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-amber-500">warning</span>
                                    You have <span className="font-bold text-slate-900 dark:text-slate-100">2 books</span> due this week.
                                </p>
                            </div>
                            <button onClick={() => navigate('/user/catalog')} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">explore</span>
                                Browse Catalog
                            </button>
                        </div>

                        {/* Stats Quick View */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined">menu_book</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Currently Borrowed</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">4 Books</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Active Reservations</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">2 Pending</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                                        <span className="material-symbols-outlined">stars</span>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Member Since</p>
                                        <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">Jan 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* My Borrowed Books Table Section */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">My Borrowed Books</h2>
                                <a className="text-primary text-sm font-semibold hover:underline" href="#history">View All History</a>
                            </div>
                            
                            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <tr>
                                                <th className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Book Title</th>
                                                <th className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Author</th>
                                                <th className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider">Added On</th>
                                                <th className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-semibold uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                            {loading && (
                                                <tr><td colSpan="4" className="px-6 py-4 text-center">Loading books...</td></tr>
                                            )}
                                            {error && (
                                                <tr><td colSpan="4" className="px-6 py-4 text-center text-red-500">Error: {error}</td></tr>
                                            )}
                                            {!loading && !error && books.length === 0 && (
                                                <tr><td colSpan="4" className="px-6 py-4 text-center text-slate-500">No books found in Supabase. Add some!</td></tr>
                                            )}
                                            {books.map((book) => (
                                                <tr key={book.id || book.title} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                                                                {book.image || book.cover_image ? (
                                                                    <img 
                                                                        src={book.image || book.cover_image} 
                                                                        alt={book.title} 
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                ) : (
                                                                    <span className="material-symbols-outlined text-slate-400">book</span>
                                                                )}
                                                            </div>
                                                            <span className="font-bold text-slate-900 dark:text-slate-100">{book.title}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{book.author || "Unknown"}</td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                                                        {book.created_at ? new Date(book.created_at).toLocaleDateString() : 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-primary hover:text-primary/80 text-sm font-bold">Borrow</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* Recommended Section */}
                        <section className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight tracking-tight">Recommended for You</h2>
                                <button className="text-slate-500 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium">
                                    Refresh suggestions
                                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                                </button>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {/* Recommendation Card 1 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[2/3] w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-4/5 h-4/5 bg-primary/20 backdrop-blur-sm rounded border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Sci-Fi</span>
                                                <span className="text-white font-bold leading-tight text-sm">Project Hail Mary</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-2 right-2 size-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">Project Hail Mary</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Andy Weir</p>
                                </div>
                                
                                {/* Recommendation Card 2 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[2/3] w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-4/5 h-4/5 bg-slate-800/40 backdrop-blur-sm rounded border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">History</span>
                                                <span className="text-white font-bold leading-tight text-sm">The Silk Roads</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-2 right-2 size-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">The Silk Roads</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Peter Frankopan</p>
                                </div>
                                
                                {/* Recommendation Card 3 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[2/3] w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-4/5 h-4/5 bg-emerald-600/30 backdrop-blur-sm rounded border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Bio</span>
                                                <span className="text-white font-bold leading-tight text-sm">Shoe Dog</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-2 right-2 size-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">Shoe Dog</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Phil Knight</p>
                                </div>
                                
                                {/* Recommendation Card 4 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[2/3] w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-4/5 h-4/5 bg-amber-600/30 backdrop-blur-sm rounded border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Fiction</span>
                                                <span className="text-white font-bold leading-tight text-sm">Normal People</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-2 right-2 size-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">Normal People</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Sally Rooney</p>
                                </div>
                                
                                {/* Recommendation Card 5 */}
                                <div className="group cursor-pointer">
                                    <div className="aspect-[2/3] w-full rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden mb-3 relative shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-4/5 h-4/5 bg-indigo-600/30 backdrop-blur-sm rounded border border-white/20 flex flex-col items-center justify-center p-4 text-center">
                                                <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">Self-Help</span>
                                                <span className="text-white font-bold leading-tight text-sm">Deep Work</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-2 right-2 size-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-[20px]">bookmark_add</span>
                                        </div>
                                    </div>
                                    <h3 className="text-slate-900 dark:text-slate-100 font-bold text-sm leading-snug">Deep Work</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">Cal Newport</p>
                                </div>
                            </div>
                        </section>
                        
            </div>
        </main>
    );
};

export default Dashboard;
