import React from 'react';
import { Link } from 'react-router-dom';

const SearchBooks = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
            <div className="layout-container flex h-full grow flex-col">
                {/* Navigation Bar */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
                    <div className="flex items-center gap-3 text-primary">
                        <Link to="/" className="flex items-center gap-3 text-primary">
                            <div className="size-8">
                                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"></path>
                                </svg>
                            </div>
                            <h2 className="text-slate-900 dark:text-slate-50 text-xl font-bold leading-tight tracking-tight">LibTrack</h2>
                        </Link>
                    </div>
                    
                    <div className="flex flex-1 justify-end gap-8 items-center">
                        <nav className="hidden md:flex items-center gap-8">
                            <Link to="/search" className="text-primary border-b-2 border-primary pb-1 text-sm font-semibold transition-colors">Catalog</Link>
                            <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="#my-loans">My Loans</a>
                            <a className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" href="#reservations">Reservations</a>
                            <Link className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors" to="/dashboard">Dashboard</Link>
                        </nav>
                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-primary/20">
                            <img className="w-full h-full object-cover" alt="User profile avatar photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3W4XcSHEstQKiwxV1wTEc5obqk38aD2G5W3KvFK9RPlKteUIDaD-Va-NAHKR2FS0OO_RFOwOTMFZOnNv2Qph4NlaAyewHQJspeA21M1GGS2pLHuaSmTStaFOPO40czPENG86NYwO4A2VDujVjPuDdOLxs6VTwTp9isFVNPXMmcJkkLI8Vm0BkXFlRRhbGd1JiSrdTWPXcWGWnsEt2nYnfVFP_wEG0a38Z8hLp-VTsSP3fzo_8KKdSckIbvA1239vvQQCVfQ_-C77m" />
                        </div>
                    </div>
                </header>

                <main className="flex flex-1 justify-center py-8 px-4 sm:px-6">
                    <div className="layout-content-container flex flex-col w-full max-w-[1200px]">
                        
                        {/* Hero Section */}
                        <div className="flex flex-col gap-2 mb-8">
                            <h1 className="text-slate-900 dark:text-slate-50 text-4xl font-black leading-tight tracking-tight">Search Books</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal">Explore over 50,000 titles in our digital and physical collection.</p>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="mb-6">
                            <label className="flex flex-col w-full group">
                                <div className="flex w-full h-14 items-stretch rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition-all">
                                    <div className="flex items-center justify-center pl-5 text-slate-400">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <form className="flex-1 flex" onSubmit={(e) => { e.preventDefault(); console.log("Searching..."); }}>
                                        <input 
                                            className="flex w-full min-w-0 flex-1 border-none bg-transparent px-4 text-slate-900 dark:text-slate-100 focus:ring-0 text-lg font-normal placeholder:text-slate-400 outline-none" 
                                            placeholder="Search by title, author, or ISBN..." 
                                            autoFocus
                                        />
                                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 font-bold transition-colors">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </label>
                        </div>
                        
                        {/* Filters Row */}
                        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
                            <button className="flex items-center gap-2 rounded-lg bg-slate-200/50 dark:bg-slate-800 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Category</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-slate-200/50 dark:bg-slate-800 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Author</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-slate-200/50 dark:bg-slate-800 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Availability</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <button className="flex items-center gap-2 rounded-lg bg-slate-200/50 dark:bg-slate-800 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold">Language</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                            <div className="flex-1"></div>
                            <button className="flex items-center gap-2 text-primary font-semibold text-sm px-2">
                                <span className="material-symbols-outlined text-sm">filter_list</span>
                                Clear Filters
                            </button>
                        </div>
                        
                        {/* Book Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            
                            {/* Book Card 1 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of The Great Gatsby book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXiYlbgtAYDfDvFQ7qebjV_vnNcIAkeG7CyM286dOMBtdJ1hIXIMCfXcS6I7QfmP1VBi933lt37OizVki28ij7X7u5TTQiEeyW0JHSfWdEugyAytoknNUFfVemswQFUjhcp894BILUm7U54HlQXa12QgKC_9wooOjUZX-31w2m6xYxeTPEWE6zWppUlEZpADJG9po5Q2OMiwsR50tBC40lDqVtPZ2L-cE5Qg70ZVuH4p-rqx50ivx7OltfGWjWi-jv2VMTa9jXnVAE" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">The Great Gatsby</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">F. Scott Fitzgerald</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 2 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of 1984 book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWq_RjoDao4QFTYf5wGZ5dFRN4eu7K9-hsIF5F70IeIqSluiKfEPuy0IYrW2gKQJ7N02hEwmNz5XZNjNB5CVBenvrwx9RQyR7QMLZIMPJFaSRqzpeNVvgQGYfE8e8avfPwZFBSwaN3gmVPho4qqJ8ZTlldWWULMnyxIcOCVJqtuUtVaxznyxfdX7ei2ll4wdh0Y7ZanqhAsUPrMUpgTX6ukG6KnQCDRIWaQR98rddGnMHLyBng7GegMz7iEByR9JnV0fF_vW0Avs2k" />
                                    <div className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Reserved</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">1984</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">George Orwell</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-2.5 rounded-lg cursor-not-allowed">Waitlist</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 3 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of To Kill a Mockingbird book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvW-H7nVYxkbVoMUfyZ5ax7MZBK-6j7TVyjxmppYL1_qK77JVqqUB1zI2GK3qxCCZPgNFK19k3K04WKZjBEn_vjQrTQTwMp2-mhOmnl2bKmWNVt2NqHCSp3ZOGk7izXZP2ufcwoBmj6_3y5f6yIB4c2RByyPTbUpT_f9jCjDWhi8KQbvEzRiO1g62G0pt1A71gL2ZJPFf4sTOsYE5BchhhViog_tkfqfleSiqCIQ1DGujkmVm269GWr0ZcWElJ-6RLDMTCk8PPX2R" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">To Kill a Mockingbird</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Harper Lee</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 4 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of The Hobbit book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-qysrvkJwb-U1NC_8viNT4yl4qSD8CFKLywiMLyI_SNSiGA1jUQAGx8dyoy5qBZEeJfOaEz6klanAP1UmInrBWDaondpmKYyyEYMUzr7RLe_sei4ArE4jyGbbpL7JrAuL3LWAQo4nufN_YyaV3e_lDSk8IYQMZT6V5Uu79dWrNkKg5LTwOOVwfhIhw9cBKUqn2d4ZfNxeLwNCvpT_QCriMQJ4pBXmYCzpXs-m8baqwFE44Cpk09tMKBanMzS1jNYn4avP-gSGFfr" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">The Hobbit</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">J.R.R. Tolkien</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 5 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of Atomic Habits book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBssTHx9p8DS97tXRi8p754AvPovQwvfJIT1f6ZpHzOZfYKzkp0XhUPUEWmXgdFVTetnnxV-RtwzXywZsqIuu6t14wU9-CvLlVCnsOabj0QeMRf5lb0aA5zA1VQP4Z46JaFV5GSzO6QzW55GvF-u6SqL3vIC-4DV7E_ASz88VK0oH1CTc5WNVpi--VBHEt6heWdgj714aZv1Cz4HfuEt9bEB-Fc-tNOqt2flaIwGRQIWph5rBszhUokmJl3l9bg4a0cXtjDthisxosz" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">Atomic Habits</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">James Clear</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 6 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of The Alchemist book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXbZCvBamIJNaEpuWTE-_9m4uB_W4-QDrUeIXvDm5lVLlwrHcFQyJJFMcGbul4eDi-y7XdieXrjWUtQq-rjM_f1npaP0q02dlaAAyvhezKVNb6T0Loqkpe1dwwO_PS6oGgiP6ZliHikUqt-MN4xuyGj80szEkZRteL0OLqRB39o_8Z41NcMVO-5tr0Q2XB6di_cK3_WuC2mb6M_2UYr_fPaI5INErO6DvxLN1Sm8iFt7dSvmxlAsxhyFtyqvebmYZxWU4RJhVdcsw" />
                                    <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Borrowed</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">The Alchemist</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Paulo Coelho</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-bold py-2.5 rounded-lg cursor-not-allowed">Waitlist</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 7 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of Educated book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz0Bz9dPFOqUiPua9jAhIcVNvPxSoTpaKVCg72sli31k0BgraaA4JZlGvZ1dZjwHo-RVGTKz88INM4sDryyxohnDHyFAE5O5l__mFBGZZjO7gkxlBj0_a4fJ6cMvJuegcPtf1SpLlR4mssQb7TZHOtwjFh8FBEect_0zC0oD0NnIzUiXlx_zqtwJ7VEBZKDTLWIqUd--XcL4DpjH0PF2YmqDzh_MKUvVR5tSp3p3SFlEvVa_doqp-kQOzsj8hbLUlERQoRxhi7Pujv" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">Educated</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Tara Westover</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Book Card 8 */}
                            <div className="flex flex-col group">
                                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-md mb-4 bg-slate-200 dark:bg-slate-800">
                                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" alt="Cover of Sapiens book" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA2zR0slGm8s_-thR_haCWlVsSs9_itUxiFFVJHlb1E1yG_EFmecPJCYJYdYZ8b5CQq7oGlYazSiyQTfHf-fBg8-P3ZKIcHPwihQrNcH7L2HjhHhDLqCzxKkqusSWbummzPO1DrNdZ7iQm0ffUmgNyOxEgJBTq1djeVPkc01xz-Lh6kR1sHPeS1TuprlXYa7AiaasAW0ptEQmq0XBo1tbWW12lGorAemF4Afg0SP1q8KU982ni4adHC5IhjcB6smAsFegC29SqscAo" />
                                    <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Available</div>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <h3 className="text-slate-900 dark:text-slate-50 text-lg font-bold leading-tight mb-1">Sapiens</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Yuval Noah Harari</p>
                                    <div className="mt-auto flex gap-2">
                                        <button className="flex-1 bg-primary text-white text-xs font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors">Reserve</button>
                                        <button className="px-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                                            <span className="material-symbols-outlined text-base align-middle">visibility</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Pagination */}
                        <div className="mt-16 flex items-center justify-center gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">12</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                        
                    </div>
                </main>
                
                {/* Footer */}
                <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-20">
                    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-primary opacity-60">
                            <span className="material-symbols-outlined">auto_stories</span>
                            <span className="font-bold text-slate-900 dark:text-slate-50">LibTrack</span>
                        </div>
                        <div className="flex gap-8 text-slate-500 dark:text-slate-400 text-sm">
                            <a className="hover:text-primary" href="#help">Help Center</a>
                            <a className="hover:text-primary" href="#privacy">Privacy Policy</a>
                            <a className="hover:text-primary" href="#terms">Terms of Service</a>
                            <a className="hover:text-primary" href="#librarian">Librarian Access</a>
                        </div>
                        <p className="text-slate-400 text-xs">© 2024 LibTrack. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SearchBooks;
