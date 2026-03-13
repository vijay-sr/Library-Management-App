const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Catalog Your Collection",
            description: "Import your existing database or add books manually using our ISBN lookup tool. Metadata is automatically populated."
        },
        {
            number: 2,
            title: "Invite Your Members",
            description: "Send automated invites to your community via email. Members can set up their profiles and digital library cards instantly."
        },
        {
            number: 3,
            title: "Start Lending",
            description: "Manage checkouts, handle overdue notifications, and collect fines all from one intuitive dashboard. Your library is now digital."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-20 max-w-[1280px] mx-auto" id="how-it-works">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold mb-6">How it Works</h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">Getting your library online takes minutes, not months. Follow our simple process to modernize your collection.</p>
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-200">
                        <img alt="Stacked books" className="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOVyqXS1U87vn4xtuKnNfmEx8vMpMK4my9gU1HLkI7iMhgygzR4D2D7ORSRiERRP4_yjYmNd24JMEEq6jpHwnWQUah_f_oRbrC23aOnSUx4EwIM-7qr1eGq88GGCjDF_JERrCnrGkZ5tjTALTeGBlllbHv4i6xVzoxGYSj2Ol4tEn78pdamkdFtd_L-jK3TdUJ-tM-Ap6SGeC3BEcjIEm9Z2ocRvBE72wRz14jtwMeKNrfNtWNpiXxPJZf4pEEUGQmmWi_H1iC_NgY" />
                    </div>
                </div>
                <div className="lg:w-2/3 space-y-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 p-6 rounded-2xl hover:bg-white dark:hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">{step.number}</div>
                            <div>
                                <h4 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">{step.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
