const Features = () => {
    const features = [
        {
            icon: "track_changes",
            title: "Real-time Tracking",
            description: "Monitor every book's status from checkout to return instantly. QR and barcode integration ready."
        },
        {
            icon: "insights",
            title: "Advanced Analytics",
            description: "Get detailed reports on popular titles, borrowing trends, and collection health scores."
        },
        {
            icon: "person_pin_circle",
            title: "Member Portal",
            description: "Allow members to reserve books, renew checkouts, and track their reading history online."
        }
    ];

    return (
        <section className="bg-white dark:bg-background-dark py-20 px-6 md:px-20 border-y border-slate-100 dark:border-slate-900" id="features">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col gap-4 mb-16 max-w-[800px]">
                    <h2 className="text-slate-900 dark:text-slate-100 text-3xl md:text-4xl font-bold leading-tight">
                        Powerful Features for Every Librarian
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Our suite of tools helps you stay organized and provides your members with a seamless digital experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900/50 hover:border-primary/50 transition-all duration-300">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">{feature.icon}</span>
                            </div>
                            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
