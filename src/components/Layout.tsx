import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Kurumsal Hizmetler', path: '/hizmetler' },
    { name: 'Uzmanlık & Biyografi', path: '/hakkinda' },
    { name: 'Araştırma & Raporlar', path: '/raporlar' },
    { name: 'İletişim & Teklif', path: '/iletisim' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-xs tracking-wider uppercase hidden md:flex justify-between items-center container mx-auto max-w-7xl">
        <span>Makroekonomik Strateji ve Yönetim Danışmanlığı</span>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors flex items-center gap-1">
            <Linkedin size={14} /> LinkedIn
          </a>
          <span>|</span>
          <a href="mailto:info@memduhbayraktaroglu.com" className="hover:text-secondary transition-colors">
            info@memduhbayraktaroglu.com
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-primary tracking-tight leading-none">
                MEMDUH BAYRAKTAROĞLU
              </span>
              <span className="text-[10px] tracking-[0.2em] text-secondary font-medium uppercase mt-1">
                Stratejik Danışmanlık
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "text-sm font-medium transition-colors duration-200 hover:text-secondary relative group py-2",
                    location.pathname === link.path ? "text-primary" : "text-gray-600"
                  )}
                >
                  {link.name}
                  <span className={clsx(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform origin-left transition-transform duration-300",
                    location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              ))}
              <Link
                to="/iletisim"
                className="bg-primary text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-primary-light transition-colors duration-300 flex items-center gap-2"
              >
                Danışmanlık Alın <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={clsx(
                      "block px-4 py-3 text-base font-medium rounded-md transition-colors",
                      location.pathname === link.path
                        ? "bg-gray-50 text-primary"
                        : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">MEMDUH BAYRAKTAROĞLU</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Belirsizlik dönemlerinde şirketiniz için net stratejiler. Makroekonomik verilerle geleceğinizi planlayın.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-secondary mb-6">Hizmetler</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/hizmetler" className="hover:text-white transition-colors">Yönetim Kurulu Danışmanlığı</Link></li>
                <li><Link to="/hizmetler" className="hover:text-white transition-colors">CEO Mentörlüğü</Link></li>
                <li><Link to="/hizmetler" className="hover:text-white transition-colors">Yatırım ve Proje Analizi</Link></li>
                <li><Link to="/hizmetler" className="hover:text-white transition-colors">Kriz Yönetimi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-secondary mb-6">Kurumsal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/hakkinda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
                <li><Link to="/raporlar" className="hover:text-white transition-colors">Raporlar & Analizler</Link></li>
                <li><Link to="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
                <li><Link to="/gizlilik" className="hover:text-white transition-colors">Gizlilik Politikası</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-secondary mb-6">İletişim</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>İstanbul, Türkiye</li>
                <li>info@memduhbayraktaroglu.com</li>
                <li className="pt-4">
                  <Link to="/iletisim" className="inline-block border border-secondary text-secondary px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-secondary hover:text-primary transition-colors">
                    Teklif Alın
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Memduh Bayraktaroğlu Danışmanlık. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">Design: Manaliza Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
