import React from 'react';

const Contact = () => {
    return (
        <div className="flex-1">
            {/* Hero Section */}
            <section className="px-6 md:px-20 py-12 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Content & Info */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                Get in touch
                            </span>
                            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black tracking-tight leading-tight">
                                Let's build the future of your library <span className="text-primary">together.</span>
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg">
                                Whether you're managing a local branch or a global university network, LibTrack scales to meet your needs.
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary border border-slate-100 dark:border-slate-700">
                                    <span className="material-symbols-outlined">mail</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Email Us</p>
                                    <p className="text-slate-600 dark:text-slate-400">hello@libtrack.io</p>
                                    <p className="text-slate-500 text-xs mt-1">Response within 24 hours</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary border border-slate-100 dark:border-slate-700">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Our Headquarters</p>
                                    <p className="text-slate-600 dark:text-slate-400">123 Innovation Way, Suite 400<br />San Francisco, CA 94105</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary border border-slate-100 dark:border-slate-700">
                                    <span className="material-symbols-outlined">headset_mic</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">Support Hours</p>
                                    <p className="text-slate-600 dark:text-slate-400">Monday — Friday<br />9:00 AM – 6:00 PM PST</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                            <p className="text-slate-500 text-sm mb-4 italic">Trusted by over 500 institutions worldwide</p>
                            <div className="flex flex-wrap gap-6 opacity-50 grayscale">
                                <span className="material-symbols-outlined text-3xl">account_balance</span>
                                <span className="material-symbols-outlined text-3xl">school</span>
                                <span className="material-symbols-outlined text-3xl">museum</span>
                                <span className="material-symbols-outlined text-3xl">auto_stories</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Contact Form */}
                    <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Fill out the form below and our team will get back to you shortly.</p>
                        </div>
                        
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Jane Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                    <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="jane@library.org" type="email" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Organization</label>
                                <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Metropolitan Public Library" type="text" />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="How can we help you?" rows="4"></textarea>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="flex-1 bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
                                    Send Message
                                    <span className="material-symbols-outlined text-sm">send</span>
                                </button>
                                <button className="flex-1 bg-primary/10 text-primary font-bold py-4 rounded-lg hover:bg-primary/20 transition-all border border-primary/20 flex items-center justify-center gap-2" type="button">
                                    Request Demo
                                    <span className="material-symbols-outlined text-sm">play_circle</span>
                                </button>
                            </div>
                            
                            <p className="text-[10px] text-slate-400 text-center mt-4">
                                By clicking send, you agree to our <a className="underline" href="#">Privacy Policy</a> and <a className="underline" href="#">Terms of Service</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* Map Section Placeholder */}
            <section className="w-full h-80 relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
                <img className="w-full h-full object-cover grayscale opacity-40 dark:opacity-20" alt="Modern stylized map showing office location downtown" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNFZtscfxyskASaTWpQo62d7XrzS2tNrKLMr6UG6Lqc70Dyr_R6fjyG6QUIVWkNA4kQtG8qyHmpY_GPlNzW4U-OslTClF7aGIVyFzx74cqFcPqo9Jx12VYJwA_JNsNHlrCZqnSmi7GaRbD_JL43obFd6VZ2ztCAOMd0UL0PrujSWvUXg729nW8F2moroyrQCKETAK9kXJgxY_1dlG3xLf4KDMRUUyN1QrJK669E6mwimT-YmFU-vwU60wXYviSjQThR_sqStwNZpYT" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-full shadow-2xl animate-bounce">
                        <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
