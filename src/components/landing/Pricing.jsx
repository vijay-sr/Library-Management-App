import { useState } from 'react';

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

    const pricingPlans = [
        {
            name: "Basic",
            monthlyPrice: 29,
            yearlyPrice: 23,
            description: "Perfect for small community libraries and private collections.",
            features: [
                { text: "Up to 5,000 books", included: true },
                { text: "500 active members", included: true },
                { text: "Email support", included: true },
                { text: "Advanced analytics", included: false },
            ],
            buttonText: "Choose Plan",
            featured: false
        },
        {
            name: "Standard",
            monthlyPrice: 79,
            yearlyPrice: 63,
            description: "Ideal for growing public libraries and schools.",
            features: [
                { text: "Up to 20,000 books", included: true },
                { text: "2,000 active members", included: true },
                { text: "Priority email support", included: true },
                { text: "Advanced reporting", included: true },
                { text: "Barcode scanning", included: true },
            ],
            buttonText: "Choose Plan",
            featured: true
        },
        {
            name: "Premium",
            monthlyPrice: 149,
            yearlyPrice: 119,
            description: "Complete solution for large institutions and networks.",
            features: [
                { text: "Unlimited books", included: true },
                { text: "Unlimited members", included: true },
                { text: "24/7 Phone support", included: true },
                { text: "Custom API integrations", included: true },
                { text: "White-label member portal", included: true },
            ],
            buttonText: "Choose Plan",
            featured: false
        }
    ];

    const comparisonFeatures = [
        { name: "Book Catalog Limit", basic: "5,000", standard: "20,000", premium: "Unlimited", highlightPremium: true },
        { name: "Member Accounts", basic: "500", standard: "2,000", premium: "Unlimited", highlightPremium: true },
        { name: "Overdue Reminders", basic: true, standard: true, premium: true },
        { name: "Mobile App Access", basic: false, standard: true, premium: true },
        { name: "Custom Branding", basic: false, standard: false, premium: true },
        { name: "Data Export (CSV/PDF)", basic: true, standard: true, premium: true },
        { name: "API Access", basic: false, standard: "Read-only", premium: "Full Access", highlightPremium: true },
    ];

    return (
        <section className="bg-background-light dark:bg-background-dark py-12 md:py-24" id="pricing">
            <div className="max-w-7xl mx-auto px-6 md:px-20 w-full flex flex-col items-center">
                {/* Hero Section inside Pricing */}
                <div className="text-center mb-12 max-w-2xl">
                    <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">Flexible Plans for Every Library</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">Choose the perfect tier to manage your collection and members efficiently. Save up to 20% with yearly billing.</p>
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center mb-12">
                    <div className="flex p-1 bg-slate-200 dark:bg-slate-800 rounded-xl w-64 h-12">
                        <button 
                            onClick={() => setBillingCycle('monthly')}
                            className={`flex-1 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 font-medium'}`}
                        >
                            Monthly
                        </button>
                        <button 
                            onClick={() => setBillingCycle('yearly')}
                            className={`flex-1 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${billingCycle === 'yearly' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 font-medium'}`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} 
                             className={`flex flex-col p-8 bg-white dark:bg-slate-900 rounded-xl border transition-all ${plan.featured ? 'border-2 border-primary shadow-xl relative md:scale-105 z-10' : 'border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'}`}>
                            
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -track-x-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-slate-900 dark:text-white">
                                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                    </span>
                                    <span className="text-slate-500 text-sm font-medium">/month</span>
                                </div>
                                <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">{plan.description}</p>
                            </div>

                            <ul className="flex-1 flex flex-col gap-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className={`flex items-center gap-3 text-sm ${feature.included ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400 dark:text-slate-600 line-through'}`}>
                                        <span className={`material-symbols-outlined ${feature.included ? 'text-primary' : ''}`}>
                                            {feature.included ? 'check_circle' : 'cancel'}
                                        </span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${plan.featured ? 'bg-primary text-white hover:bg-blue-700 shadow-lg shadow-primary/20' : 'border-2 border-primary text-primary hover:bg-primary/5'}`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="w-full overflow-x-auto">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Compare Plan Features</h2>
                    <table className="w-full text-left border-collapse bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800">Feature</th>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 text-center">Basic</th>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 text-center">Standard</th>
                                <th className="p-5 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 text-center">Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonFeatures.map((row, index) => (
                                <tr key={index}>
                                    <td className={`p-5 text-sm text-slate-600 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800 ${index === comparisonFeatures.length - 1 ? 'border-none' : ''}`}>
                                        {row.name}
                                    </td>
                                    <td className={`p-5 text-sm text-center border-b border-slate-100 dark:border-slate-800 ${index === comparisonFeatures.length - 1 ? 'border-none' : ''}`}>
                                        {typeof row.basic === 'boolean' ? (
                                            row.basic ? <span className="material-symbols-outlined text-primary">check</span> : <span className="text-slate-400">—</span>
                                        ) : row.basic}
                                    </td>
                                    <td className={`p-5 text-sm text-center border-b border-slate-100 dark:border-slate-800 ${index === comparisonFeatures.length - 1 ? 'border-none' : ''}`}>
                                        {typeof row.standard === 'boolean' ? (
                                            row.standard ? <span className="material-symbols-outlined text-primary">check</span> : <span className="text-slate-400">—</span>
                                        ) : row.standard}
                                    </td>
                                    <td className={`p-5 text-sm text-center border-b border-slate-100 dark:border-slate-800 font-bold ${row.highlightPremium ? 'text-primary' : 'text-slate-900 dark:text-white'} ${index === comparisonFeatures.length - 1 ? 'border-none' : ''}`}>
                                        {typeof row.premium === 'boolean' ? (
                                            row.premium ? <span className="material-symbols-outlined text-primary">check</span> : <span className="text-slate-400">—</span>
                                        ) : row.premium}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* FAQ CTA */}
                <div className="mt-20 text-center">
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Have questions about our plans?</p>
                    <button className="text-primary font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
                        Check our Help Center <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
