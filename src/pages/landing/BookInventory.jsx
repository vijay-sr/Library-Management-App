import React from 'react'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useState, useEffect } from 'react';
import { useToast } from '../../components/common/ToastContext';

const BookInventory = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deletingId, setDeletingId] = useState(null);

    const handleDelete = async (bookId, bookTitle) => {
        if (!window.confirm(`Are you sure you want to delete "${bookTitle}"? This action cannot be undone.`)) {
            return;
        }

        try {
            setDeletingId(bookId);
            const { error: deleteError } = await supabase
                .from('books')
                .delete()
                .eq('id', bookId);
                showToast('Book deleted successfully', 'success');

            if (deleteError) throw deleteError;

            // Update local state to remove the deleted book
            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId));
            
            // Optional: You could add a success toast here
        } catch (err) {
            console.error("Error deleting book:", err);
            alert(`Failed to delete book: ${err.message}`);
        } finally {
            setDeletingId(null);
        }
    };

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
        <>
            <main className="px-10 flex flex-1 justify-center py-8">
                <div className="layout-content-container flex flex-col w-full flex-1">
                    <div className="flex flex-wrap justify-between items-end gap-3 mb-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">
                                Manage Inventory</p>
                            <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Total
                                collection: 1,284 books across 12 categories.</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                className="flex items-center justify-center rounded-lg px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined mr-2 text-lg">filter_list</span> Filter
                            </button>
                            <button
                                className="flex items-center justify-center rounded-lg px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 transition-colors">
                                <span className="material-symbols-outlined mr-2 text-lg">download</span> Export
                            </button>
                        </div>
                    </div>
                    <div className="px-0 py-3 @container">
                        <div
                            className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr
                                            className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Cover Image</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Title</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Author</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Edition</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Category</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                ISBN</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Status</th>
                                            <th
                                                className="px-6 py-4 text-slate-900 dark:text-slate-100 text-sm font-semibold">
                                                Stock Count</th>
                                            <th
                                                className="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm font-semibold text-right">
                                                Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                        {loading ? (
                                            <tr>
                                                <td colSpan="9" className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">
                                                    Loading books...
                                                </td>
                                            </tr>
                                        ) : error ? (
                                            <tr>
                                                <td colSpan="9" className="px-6 py-4 text-center text-red-500 dark:text-red-400">
                                                    Error loading books: {error}
                                                </td>
                                            </tr>
                                        ) : books.length === 0 ? (
                                            <tr>
                                                <td colSpan="9" className="px-6 py-4 text-center text-slate-500 dark:text-slate-400">
                                                    No books found.
                                                </td>
                                            </tr>
                                        ) : (
                                            books.map((book) => (
                                                <tr key={book.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm"><img className="w-15 h-20 object-cover" src={book.cover_image || "https://images.unsplash.com/photo-1543004471-240683679d45?auto=format&fit=crop&q=80&w=400"} alt={book.title} /></td>
                                                    <td className="px-6 py-4 text-slate-900 dark:text-slate-200 text-sm font-medium">{book.title}</td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm">{book.author}</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">{book.edition}</span>
                                                    </td>
                                                    <td
                                                        className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-mono tracking-tighter">
                                                        {book.category}</td>
                                                    <td
                                                        className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-mono tracking-tighter">
                                                        {book.isbn}</td>
                                                    <td className="px-6 py-4 text-sm">
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">{book.status}</span>
                                                    </td>
                                                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400 text-sm font-mono tracking-tighter">{book.stock_count}</td>

                                                    <td className="px-6 py-4 text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                className="p-1.5 hover:bg-primary/10 rounded text-slate-400 hover:text-primary transition-colors">
                                                                <span className="material-symbols-outlined text-lg">edit</span>
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(book.id, book.title)}
                                                                disabled={deletingId === book.id}
                                                                className={`p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 rounded text-slate-400 hover:text-red-600 transition-colors ${deletingId === book.id ? 'opacity-50 cursor-not-allowed' : ''}`}>
                                                                <span className="material-symbols-outlined text-lg">
                                                                    {deletingId === book.id ? 'sync' : 'delete'}
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>

                                            )))
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div
                    className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 mt-4 shadow-sm">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 124 results</p>
                    <div className="flex items-center gap-1">
                        <a className="flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            href="#">
                            <span className="material-symbols-outlined text-xl">chevron_left</span>
                        </a>
                        <a className="text-sm font-bold flex size-9 items-center justify-center text-white rounded-lg bg-primary shadow-sm"
                            href="#">1</a>
                        <a className="text-sm font-medium flex size-9 items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            href="#">2</a>
                        <a className="text-sm font-medium flex size-9 items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            href="#">3</a>
                        <span className="text-sm text-slate-400 flex size-9 items-center justify-center">...</span>
                        <a className="text-sm font-medium flex size-9 items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                            href="#">25</a>
                        <a className="flex size-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                            href="#">
                            <span className="material-symbols-outlined text-xl">chevron_right</span>
                        </a>
                    </div>
                </div>
            </div>
        </main >
    </>
  )
}

export default BookInventory