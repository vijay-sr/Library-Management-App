const Hero = () => {
    return (
        <div className="px-6 md:px-20 py-12 md:py-20 max-w-[1280px] mx-auto">
            <div className="flex flex-col gap-10 lg:flex-row items-center">
                <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
                    <div className="flex flex-col gap-4">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase bg-primary/10 w-fit px-3 py-1 rounded-full">Intelligent Library Solutions</span>
                        <h1 className="text-slate-900 dark:text-slate-100 text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            Effortless Library Management for <span className="text-primary">Modern Collections</span>
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-[540px]">
                            Track books, manage memberships, and gain deep insights into your library's performance with our all-in-one cloud platform.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2">
                        <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform">
                            Start Free Trial
                        </button>
                        <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 transition-colors">
                            View Plans
                        </button>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500"></div>
                        </div>
                        <p className="text-sm text-slate-500">Joined by 2,000+ libraries worldwide</p>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 aspect-video bg-white dark:bg-slate-900">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                        <img alt="Modern library interior" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp1TUEwepMHKrwh9nZUgGLhk12-Hl1i_0dMIlBZCZskAbh7MKkcfmjE2q2M3vB5k1RXwQ41VGhGFm_dfEyVjPes5AlMrF0UqWBQ9qsLkDf9KdniGXXtKNBdOTc9AVKecY67kYQSLf1xCBAgROviaebYWeIBKZC2DtfRNWDjcnm7srGrcHA3YdmxJWIjFXmnV2MmBOzl3Yf45Dglu2PVK67riPrB2nJ-7SNdlmvJ4TkZSE7SRaY8XGdl0RulFKSdjxtWmfVaBFN510y" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
