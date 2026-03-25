import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Catalog = () => {
    const navigate = useNavigate();

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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                        
                        {/* Template Item 1 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRyYb4avjbjvOs0Tyibav8Li1wkdlqNDMBGXP9Ej2u05yfqJ6-ODAvpGdUJV7snT5ZdATL505vMZULe7lYBCf0Wxnq2g62_pqQECfub9OAvg5lC48tBU8t7tj-2rjy6cELZCuQCgSB7lejwByjppM628O2vnvxz4fMKhkzypZVyKobGHdvCQ-i-D-DLjksClyg0lG8QgN7w45KdJxq05ipw7_jfNHM0RAIU9PlWBPsC0isV8Esg6MKPcOS6rUurTf3vjRnmmSGi-gB" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">The Architecture of Light</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Elena Rostova</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">Physical</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 2 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ89hCaXpwV4uiUWb3E3DtJ4TALifdk31VvcFjnEbVX6y-6nCSXppVOyMT2J6axiXtdC9RLPWVOYuTC_3_v4sosGVM0RGiQnI-U3IgHcSkv2y9BLKIl3_J_WH2KlouCCzzieggtrWerC_AuyXyhGppTr5NotYJQmgCN1-GlTbuBgi3mQPyQy59LzmEgSnoz-W4l5rb_826jfqs_u-aLUbTr6oPrElf6C6i9G-9PDA5OBJ31rKSa0Wxa1q8K-l_uPwRBo5ituLHdCMx" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Borrowed</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">Midnight in the Archives</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Arthur P. Sterling</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-surface-container dark:bg-slate-800 text-on-surface dark:text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-surface-container-high dark:hover:bg-slate-700 active:scale-95 transition-all border border-outline-variant dark:border-slate-700">View Details</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">E-book</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 3 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ycflV-faLI65ypwKbXvOtxGEf-4zYrPxbn243fbQ2I6wnoTu1GKqEjMJjiyQc2VSh7Ox81EHyenuJBI7uMWpaRmHuOAEV5-F9ObHwvd_4MGuB07MuZLCUnoeyQq3U0FgL8iOFdN3qmruhtJ30ymDKvfQY79udl4QjViZvIw2zE4qCQPEy97mcUXERQBsFf0IXXUDlpDXDJM0Rn8iYBk_BV1J4MRlm6uf2HtPlZ1v4q9i9ZdLLDGbvzWYlNAOcm4KtulWm2jx7u2N" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">Quantum Paradoxes</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Dr. Julian Vance</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">Physical</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 4 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXIe707ZqJxlb1UWG73iJWzS-hdW3IJdb1yIh6qe0Lwz3grVlxbId5UtnSS3CEWybYDjF4ZnmTbqcUDqZL1Z072WU6K8B-0Fs8Qsx53mEvslI-cvNrmfYPVt5Js7VYAfc6UiA64MffvGqy7p7Tl9UDcNW0UCsAETlbQqcB8pcuzpoVJCxMXyp9zLwFa1r-AW7w5z1BeRSr8WZc4LFtLGcAkld2t_S50dA6YqDZ0w0Zra_JAaOx7afGVhjRxg2r1BbMGtp5pWIUuNgS" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">Legacy of the Weaver</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Sarah J. Miller</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">Physical</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 5 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYYYzUiJTPYsSMRmgNrZb7uDgzq_Eyj_av9qislGoHPXUi3Q8Qv26qNf6QPmOXeuai93iWHesMyfHZ6eWewPOz7eqDHiVPGi7GxegJv084UfCuG11jUXg9Ise7n33hsuhJInta--TMu3I3H0w63OpvcigEqn8PQvOxTwREsDW9nyEWBA5VmNnaMeQTCZRtJkMeu49PKPeOodx7vizOEDdrrC5AFkbGAFcUC-b5WlR24zyE-0LGj4kQguTbVZCX5bXjxOnIq3WkRuz" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">The Silent Pulse</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Omar Al-Fayed</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">E-book</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 6 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB98mgUiz3oOqtlvYdel351EhZLC9tcS6pYTq_TlZzUr1Kh_yiqEegRdwbvhBLsgYT7sFTxwolWxynWIMl08d_JA1quUV4kyyKO8muc8OpZZKyEIkMtq7_KLJM6XT4azqMa289iDRzAhB2XNw9dKFwkoywk24FadpYNWC_X9zMCuf6err-UlMujZ2ud9FKLOCV8VrY9QAF0T43henHByCqh7ZDiZFz-m-4RNyhQ0XZJYLnAobWFnNRDUEKsFMTrnVLmGDo5zdbZKlFq" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Borrowed</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">Chronicles of the Sun</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">M. L. Chen</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-surface-container dark:bg-slate-800 text-on-surface dark:text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-surface-container-high dark:hover:bg-slate-700 active:scale-95 transition-all border border-outline-variant dark:border-slate-700">View Details</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">Physical</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 7 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3MSENy0CzDgIXaG0htSP7PStrqKDvAiJ-X4NIh8i1Df8uojy3LwHgNiz63xbW6zxy6Hn8sbhHXWaAmHAV5P43VfzoeDwscWT4rMru-2z6J2BgXE2-ceHEgykGOxbWbngYkCTINntN2J05BG7lrSUcjwgBWAMiLpVrSMrWwhHRIT_BRAsMdQdJ6S7cMzAHADcpirXGdWD8HE8aHr8z_xfLHh56d52y0PlkcXBqn3rApf-RJyCfOEiXKMG7suszlBvEB6OR_Q7TxIMG" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">Echoes in the Valley</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Liam Henderson</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">E-book</span>
                                </div>
                            </div>
                        </div>

                        {/* Template Item 8 */}
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <img alt="Book Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTANOtkBUGFQROr8IQSWB9ivZlp0AYlJvJelJD156X-VDVMNklUv0q43pmlEq9LDrq72WzgRHmBhZKY5n9Kms9CjgAzmVPtPfuCVYAVRe6w4Esf6RGEEskVub_3gp0zi2q-anBARqDVTIztjf1sn_WpxVsA8prWKHgtsP92IzgHRHJ71GwV2D6vBxapQo-wmHH_LEDxa5VJ8r0hJJbtv1ZGQpn4vIXkqi3BoM3LQ2KpLbFkNa2Uyei44-BvdSvOmIkQdjUFx6yhVvR" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Available</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-1">The Industrial Mind</h3>
                                <p className="text-sm font-medium text-on-surface-variant dark:text-slate-400 mb-3">Viktor Kaine</p>
                                <div className="flex items-center justify-between pt-2">
                                    <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all">Reserve Now</button>
                                    <span className="text-[10px] font-bold text-on-surface-variant/40 dark:text-slate-500 uppercase">Physical</span>
                                </div>
                            </div>
                        </div>

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
