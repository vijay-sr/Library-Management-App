import Header from '../components/landing/Header';
import Footer from '../components/landing/Footer';

const LandingLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
