import React from 'react';
import { Link } from 'react-router-dom';

const UserPortal = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen font-display">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">menu_book</span>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">LibTrack</h2>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Collection</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Clubs</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Insights</a>
                <a className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Support</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                <input className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Find your next read..." type="text" />
              </div>
              <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                Join Now
              </button>
              <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                <img alt="Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgppZ6VWysBqkzbA4e6h7O-w1K8-SG8DLidONvHmdDWe3exnmYJ-oVE3EHN977O4stfmIE9-hMX6TzKgg9Ot2sEgVf5hcH47YlMkYf7km3bLKJnobE926rzuI8h2BaFuahryuTllwdGqTpopfJJJPxUQCMIVuY4ss4FrVlSgmSgctgda7iIJAuW1RPi6jrzEttDvq74u-ypxOPk_T4DaNCgRut49w62lkfJQCNLiyYgC8JL2FmRQ5EOzXjwVfQO_rrR7mwODbAqD2F" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-6">
                Your Entire Library, <span className="text-primary">Personalized.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                Track your reading journey, discover your next favorite book with AI, and connect with a community of readers in a modern, cozy digital space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                  Join Now <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  Explore Collection
                </button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <div className="flex -space-x-2">
                  <img alt="Member" className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6q6DuxxIQabmDypWzFAA6uAJ2m1GDdFncoPWs_hG4W43glliODryXiIm1YbSBYJS5SoH3UfrpNkN4JtKymzD1TooAt3nTSo443B6IGHEj_bUmY-znasKo2b8ZJDl99xBTshyPaN00M9Cu8Cbv1Cb_DhR795C0Fnom24Xvm7J88gfFlGmcQVIt4T8rRY3kGl88Kq-B1l1f56u5I_Xkm8fFlO79dZ5uDcfa3pLvwnHxiKXmMx9YY-tVRBkZXgpEDhYNtmphk5Cusfsl" />
                  <img alt="Member" className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSo2mc7jCJRIUpefzlHy6W_3BsGDY_r0hUVXhQsi3gLCWqesV3y9AklsutZQRUYLHyKdaBHP0lGbWcEhvBmDiIYBkUr8FY_atGiGmXVA88KaMdqsIcU9Y8VwSJn8NT5BR5tOinkIdRIt8vOADDFFu6wAnk6ZysgNV0pmClpmPDBotej5gFALcjvlPBI2BU7QN_aBBlZSXVK4A91Bs4ZlQVk92g3byLlbHLeUtp4BJglGFM5OTuivWBm1P8aj90z_b-YPSHSPbyUbf_" />
                  <img alt="Member" className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-900" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkrhz6RNVhafo1mW6GKSPj3bIRberrY83Kxn1bOyriX0jz6qJHO_JpQ4wJPiS_elkCRuK7eaBSUFsBWvngrrETX1MatOkIbqZUeRFUemPo5_q9uqfLjXlv8H9DGswrEflR5WPjgYr2x42Dx2VNBdPokXrcdsu28Q31NHQuibX1uvvw0XqzXbEz0QVb5TRFoTs03YqG-lBRCTbiwHcwnCE5wHVVITtmdHZMc4fI4iYuD5a7sjZv7fuuRPJrn0yUYbND0jgxizDSUCwq" />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Joined by 10k+ readers this month</p>
              </div>
            </div>
            <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                <img alt="Cozy Library" className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPSWiZQVeTB7lxOhCHGmFS5ZFkLfTMg3aTdRDkiMzBxNbdBBBmplmWEziHlJBfE_KgAnwwUyS2PoPI5GqODpED2Ub75849qC0NrYvU2U6wZM8R6Q9SIbR77qy_Ax5E8ARBv7ypdJsjm5FvS5fQvOML_9saJRyCWfJ-KsL-hkqbLsZOE8vW79oQdn0q5-TWaXbgPrf2DVPsWIzbZ9psP2mM-222dvriFtFD8qYaLpWLFgMb0aL4ILU6O5yWZBpqJUd2zmN633jIkvPj" />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Book Secured</p>
                    <p className="font-bold text-slate-900 dark:text-white">The Midnight Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Features Section */}
        <section className="py-24 bg-white dark:bg-background-dark/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Powerful Features</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Experience the Future of Reading</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                LibTrack brings smart tools to your fingertips, making book management effortless and enjoyable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Cards */}
              {[
                { icon: 'auto_awesome', title: 'Personalized Recs', desc: 'AI-driven suggestions tailored specifically to your unique literary taste and past behaviors.' },
                { icon: 'touch_app', title: 'Easy Reservations', desc: 'Browse the catalog and place holds on any title with just a single tap from any device.' },
                { icon: 'qr_code_2', title: 'Digital Library Card', desc: 'Access your secure library card directly from your phone for instant checkouts at any branch.' },
                { icon: 'history_edu', title: 'Reading History', desc: "Detailed tracking and beautifully organized logs of every single book you've ever read." },
                { icon: 'inventory_2', title: 'Smart Inventory', desc: 'Seamlessly catalog both your physical bookshelf and digital ebook collections in one place.' },
                { icon: 'monitoring', title: 'Reading Insights', desc: 'Visualize your reading habits with beautiful, interactive analytics and monthly reports.' },
                { icon: 'groups', title: 'Curated Clubs', desc: 'Join niche reading groups, participate in discussions, and share your literary thoughts.' },
              ].map((feature, idx) => (
                <div key={idx} className="group p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/5">
                  <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
              <div className="group p-8 bg-primary rounded-2xl border border-primary flex flex-col items-center justify-center text-center">
                <h4 className="text-xl font-bold mb-4 text-white">Ready to start?</h4>
                <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-24 bg-background-light dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <div className="relative mx-auto border-slate-800 dark:border-slate-700 bg-slate-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
                  <div className="h-[32px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-slate-800 dark:bg-slate-700 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-slate-900">
                    <div className="px-6 py-10">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <p className="text-xs text-slate-400">Welcome back,</p>
                          <h5 className="text-lg font-bold">Alex Rivera</h5>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">notifications</span>
                        </div>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl mb-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-2">Current Reading</p>
                        <div className="flex gap-4">
                          <div className="w-16 h-20 bg-primary/30 rounded-lg"></div>
                          <div className="flex-1">
                            <p className="font-bold text-sm">Tomorrow, and Tomorrow, and Tomorrow</p>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3">
                              <div className="bg-primary h-full w-[65%] rounded-full"></div>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-1">65% complete</p>
                          </div>
                        </div>
                      </div>
                      <h6 className="font-bold mb-4">Recommended for you</h6>
                      <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        <div className="min-w-[100px] h-[140px] bg-slate-200 dark:bg-slate-700 rounded-lg shadow"></div>
                        <div className="min-w-[100px] h-[140px] bg-slate-200 dark:bg-slate-700 rounded-lg shadow"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Cross-Device Sync</h2>
                <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-6">See LibTrack in Action</h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Your reading life doesn't stop at one device. LibTrack synchronizes your progress, holds, and reading logs across your phone, tablet, and desktop seamlessly.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500 font-bold">check</span>
                    <span className="font-medium">Instant cloud synchronization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500 font-bold">check</span>
                    <span className="font-medium">Offline access to your digital card</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-green-500 font-bold">check</span>
                    <span className="font-medium">Real-time hold notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white dark:bg-background-dark/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Loved by Avid Readers</h3>
              <p className="text-slate-600 dark:text-slate-400">Join thousands of members who've transformed their library experience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Jenkins', role: 'History Teacher', text: "LibTrack has completely changed how I use my local library. The recommendations are spot on every single time!", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2PuXiRTp2EMe3bDktjl_G0QoNUcrv3NFeDjIczLbkgDDZhthcREp7-c_nd90nTsGWFbyBV2-L7oJhS73GsLHcJaklxqGZw8juqLCu6w1Ji_Mc8ZakKd3a1wZ5MjMK72TYwXlskM7mWaU4uEysxd1AWCe_lHmJ-qR6W5EvmRgRBnd5MvMDNnza4zxGm6gS_Y03HPvJc0zCRdBXbHNKu1gJ4XTlOAU8CEHw2gGax1Y2Dgqebtkl_pm7FiuVAsDbT9HzLjmjXrODfTg2' },
                { name: 'Marcus Thorne', role: 'Digital Architect', text: "Finally, a digital card that actually works when I'm at the checkout counter. No more digging through my wallet!", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBg7HWpME7oWZY6oX-GP1C2yN9WnLDCNzP_QYr4x_Ksm-Q1EUY3Px-1L6rE_5hZ2XJGrXDnzAzFtT8LCTOP3h6atpI9L0BMI_2Cx0w3fplUK750D-2pULEL-3qGiJbQlZAaoxCiX3mK-JywTjb7htOUn_lc47U2PQt0J24uEIvsnD_hbKnYNgh5ddHAIzaiHPpbi1mSfI5osKjuPtQvY-aIJ5lSszwdg-02pAGGTpZrJXSIRpZLIUMp26PRIuANjgZwGdJlQiL39Ye0' },
                { name: 'Elena Rodriguez', role: 'Ph.D. Candidate', text: "The reading insights helped me hit my goal of 50 books this year. Seeing the data visualization is so motivating.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJh16qDJV9kwvFQvbiBbWCUIWZXCyyTS0-HEMoW7ok7iM4GueLtC1X4SnCGOP09XIWzapPEd2SQL8ayQZyllGltTjzFVbZ-sXF_h5g9JCSCqWErf5tz-RDwtw3_w4j4-6iflrNrAkBaRLB4e3K9cwfTsELxhlfPLTw65EuZSKWBRP9unYs9es-G2M7uxt9C5Nl87c4Ayt8xkhCfNLb6u8VQ7T60FiqL1YQaVjjnBIIQkB16U7urtVstAS_SuN1Mke_1BMI1Sx8t5Lm' }
              ].map((t, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined fill-1">star</span>)}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 italic mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <img alt={t.name} className="w-12 h-12 rounded-full" src={t.img} />
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white">{t.name}</h5>
                      <p className="text-xs text-slate-500 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support/Contact Section */}
        <section className="py-24 bg-background-light dark:bg-background-dark/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-12 bg-primary text-white">
                  <h3 className="text-4xl font-black mb-6">We're here to help</h3>
                  <p className="text-primary/10 text-lg mb-10 text-white/80">
                    Have questions about your account or need help finding a book? Our support team is available 24/7.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined">mail</span></div>
                      <div>
                        <p className="text-sm text-white/60">Email Us</p>
                        <p className="font-bold">support@libtrack.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined">chat</span></div>
                      <div>
                        <p className="text-sm text-white/60">Live Chat</p>
                        <p className="font-bold">Average wait: 2 mins</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined">help</span></div>
                      <div>
                        <p className="text-sm text-white/60">Help Center</p>
                        <p className="font-bold">Search our FAQ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-12">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                        <input className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="John" type="text" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                        <input className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="Doe" type="text" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="john@example.com" type="email" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                      <textarea className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl p-4 focus:ring-2 focus:ring-primary" placeholder="How can we help?" rows="4"></textarea>
                    </div>
                    <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <span className="material-symbols-outlined text-3xl font-bold">menu_book</span>
                <h2 className="text-2xl font-bold tracking-tight">LibTrack</h2>
              </div>
              <p className="mb-6 max-w-sm">
                Building the modern bridge between local libraries and digital readers. Making books more accessible than ever before.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a className="hover:text-primary transition-colors" href="#">Catalog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">E-Books</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Audiobooks</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Community</h4>
              <ul className="space-y-4">
                <li><a className="hover:text-primary transition-colors" href="#">Book Clubs</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Events</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Forums</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Volunteering</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">System Status</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2024 LibTrack Systems Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-white" href="#">Terms of Service</a>
              <a className="hover:text-white" href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserPortal;
