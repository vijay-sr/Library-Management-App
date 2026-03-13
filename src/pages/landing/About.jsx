import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto w-full px-6 md:px-10 py-12 space-y-20">
      <section className="space-y-8">
        <div 
          className="rounded-xl overflow-hidden relative min-h-[400px] flex flex-col justify-end p-8 md:p-12 shadow-2xl bg-slate-200 dark:bg-slate-800" 
          style={{ backgroundImage: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA72MSuSCLXKU-4RCkDbRSyWpK_vRZ6Cf6gkgBEaxWvOBP0T2ZQfrjqFckX3jSeDQjMmNrl43Sk3Bt0aAsD_s4tSfn8Ph47mKa5WcCDjLNbL8M_5NRUB6DjyMiU1NxsBLoc9it8No2tcmWDfaP1A5PwcuWHsR62xhEjhhiPj9L7t6uFVpnWobScDpzc14y0ljni700Xl05KwLYlC-xrgSc7VSxhdiHttkf45r3WyQTXHpKSvzjZb2K_6cuIHEACGTUvNnFU4UBUBrhx")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest">Our Mission</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">Empowering Librarians Everywhere</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-medium">
              We build digital solutions that transform how knowledge is organized, accessed, and preserved for future generations.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center pt-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Innovating the Archive</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Founded in 2018, LibTrack emerged from a simple observation: while the world was going digital, many local and specialized libraries were being left behind by complex, overpriced software. 
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Our mission is to provide precision-engineered tools that simplify collection management, automate circulation workflows, and enhance the patron experience without the technical overhead.
            </p>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 p-8 rounded-xl border border-primary/10">
            <blockquote className="space-y-4">
              <p className="text-xl italic font-medium text-primary">"The library is the heart of every community. Our goal is to make that heart beat faster and more efficiently through modern technology."</p>
              <footer className="text-slate-600 dark:text-slate-400 font-bold">— Elena Vance, Founder &amp; CEO</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The principles that guide every feature we build and every relationship we foster.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-colors shadow-sm">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">schedule</span>
            </div>
            <h3 className="text-xl font-bold">Efficiency</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Reducing manual data entry and streamlining repetitive tasks to give librarians more time with their patrons.</p>
          </div>
          
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-colors shadow-sm">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">accessible</span>
            </div>
            <h3 className="text-xl font-bold">Accessibility</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Designing inclusive interfaces that ensure everyone—regardless of ability—can navigate and contribute to the library.</p>
          </div>
          
          <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:border-primary/50 transition-colors shadow-sm">
            <div className="text-primary">
              <span className="material-symbols-outlined text-4xl">lightbulb</span>
            </div>
            <h3 className="text-xl font-bold">Innovation</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Staying ahead of digital trends to solve archival challenges before they become obstacles for your collection.</p>
          </div>
        </div>
      </section>

      <section className="space-y-12 bg-slate-50 dark:bg-slate-900/50 -mx-6 md:-mx-10 px-6 md:px-10 py-16 rounded-3xl">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A diverse group of technologists, archivists, and designers dedicated to the future of libraries.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-4">
            <div 
              className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg bg-slate-200 dark:bg-slate-700 mx-auto" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBRXGV_o7R1xz_NaxShezQEefIwIEUMB6_sdlEUHSi0KEQw_My0vUriSgIltJgNlNXMd9bQ0ERDQqQC2yMeCR_oDGPZwqXb1tH6b8whKKWuDLDdmM0f0L_IezlIq_zFcHFVbPKQNzsKfJW9aZzgyEyR2B2DsJYmrzSMfd6feknE27UqW4mdlHGZz-1OukxBNRjqCg5TDYm0n6r2A7BnIYcjHKydA1lohMP4387Bn8GPcv0grhIgx37OK-EhhteCz5vNHpY2XOp8EEzD")', backgroundSize: 'cover' }}
            ></div>
            <div>
              <h4 className="font-bold text-lg">Elena Vance</h4>
              <p className="text-primary text-sm font-medium">Founder &amp; CEO</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div 
              className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg bg-slate-200 dark:bg-slate-700 mx-auto" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpROvFzjs40gW4rJc0lAXcXkaXa34b-33FVX2uLC6N2KQosjYEYV4BjyNiZ1pr9EayeGH4OUDt7Ob436yt3fpORJ9KmMIySHzbWzgHuVKPDZWEyRuFBIorALVqcQABFiiv7yT8e5QPOIA-zqjQ5dEjCHDPNt2GkptahIJO6UtcYRQ1UpO_b6w2dVUhO8FHhtkhPk8csJVBLcH7GXEtA9A2v7E8ZKfLSvf7p7orIYes7_6htV6yD-PtLyXCo5r2n3J3UAOnOKZX1d7k")', backgroundSize: 'cover' }}
            ></div>
            <div>
              <h4 className="font-bold text-lg">Marcus Chen</h4>
              <p className="text-primary text-sm font-medium">CTO</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div 
              className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg bg-slate-200 dark:bg-slate-700 mx-auto" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuALpW9Ud3oCyva0h4UXWzwrt0tmaRM-y3wd9lsz0u1SZwiefLS7SJebbWsFYT7uwMOKOOpXdYOeZ46t7WerU2SfVJnstovRXrRf8dxi_4s6B5rVCGNxxaMOfcAA09iqrK-yBXWVmU1_I4B1EzUdMbAPwx-BYubO3VndkiiBTWMUBa_GzTSM71wqf-E8cM7yRU9ACAeoYH6MwPeYT7tsu9ZPK_0R1SfbDIfQT1qIrPuupkHSRR5rHlwt5HgZlOzQg6Kcar3Z9DQ7s6C8")', backgroundSize: 'cover' }}
            ></div>
            <div>
              <h4 className="font-bold text-lg">Sarah Jenkins</h4>
              <p className="text-primary text-sm font-medium">Head of Design</p>
            </div>
          </div>
          
          <div className="text-center space-y-4">
            <div 
              className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg bg-slate-200 dark:bg-slate-700 mx-auto" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBReipSNgIFNwO8IdXvtSvZfPB8CzWTJWEp1rQC5JJOmg-WRMeY5tzJrJ1lQ2BC8UV9-fzaX7ZLrZ5F0pq3Ba-7SK3KPSKy84LQpoh9GGNO81YZXQLYUGGeTUwQ8ufbbIKiamfLK9PMUrqaiza3wk1jBWFahN3R7D3U6yrvcMRI_59HNvI-0Io5Ji_RKBOZ4gGZ0SixAMaZrekiqNvDBu9v9HvTmjuy2UZvKH9x_kOnU55sHKDGSQvNh75eTbszT9iu3H6cbl9Zc0Qu")', backgroundSize: 'cover' }}
            ></div>
            <div>
              <h4 className="font-bold text-lg">David Miller</h4>
              <p className="text-primary text-sm font-medium">Customer Success</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
        
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 group-[.is-active]:bg-primary group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">Genesis</div>
                <time className="text-xs font-medium text-primary">2018</time>
              </div>
              <div className="text-slate-600 dark:text-slate-400">LibTrack was born in a small co-working space with a prototype designed specifically for community libraries.</div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
              <span className="material-symbols-outlined text-sm">groups</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">1,000 Partners</div>
                <time className="text-xs font-medium text-primary">2020</time>
              </div>
              <div className="text-slate-600 dark:text-slate-400">We hit a major milestone, supporting over a thousand archives across three continents during the global pivot to digital services.</div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900 dark:text-slate-100">AI Integration</div>
                <time className="text-xs font-medium text-primary">2023</time>
              </div>
              <div className="text-slate-600 dark:text-slate-400">Launched our smart-tagging and automated inventory system, reducing manual labor by 60% for large collections.</div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default About;
