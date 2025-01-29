"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'backdrop-blur-md bg-white/70 dark:bg-black/70 shadow-lg'
          : isHomePage 
            ? 'bg-transparent'
            : 'bg-white dark:bg-gray-900'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className={`text-xl font-bold transition-colors ${
              isHomePage && !isScrolled && !isMenuOpen
                ? 'text-white'
                : 'text-gray-800 dark:text-white'
            }`}>
              Tabernacle of Grace Fellowship
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <NavLink href="/" isScrolled={isScrolled} isHomePage={isHomePage}>Home</NavLink>
              <NavLink href="/about" isScrolled={isScrolled} isHomePage={isHomePage}>About</NavLink>
              <NavLink href="/events" isScrolled={isScrolled} isHomePage={isHomePage}>Events</NavLink>
              <NavLink href="/give" isScrolled={isScrolled} isHomePage={isHomePage}>Give</NavLink>
              <NavLink href="/contact" isScrolled={isScrolled} isHomePage={isHomePage}>Contact</NavLink>
            </div>

            <button 
              onClick={toggleMenu}
              className={`md:hidden transition-colors ${
                isHomePage && !isScrolled && !isMenuOpen
                  ? 'text-white hover:text-gray-200'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden"
              >
                <div className="py-4 space-y-4">
                  <MobileNavLink href="/" onClick={toggleMenu}>Home</MobileNavLink>
                  <MobileNavLink href="/about" onClick={toggleMenu}>About</MobileNavLink>
                  <MobileNavLink href="/events" onClick={toggleMenu}>Events</MobileNavLink>
                  <MobileNavLink href="/give" onClick={toggleMenu}>Give</MobileNavLink>
                  <MobileNavLink href="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        
        {/* Progress bar - only show when scrolled */}
        {isScrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-0.5 bg-gray-200 dark:bg-gray-700"
          >
            <motion.div
              className="h-full bg-blue-600"
              style={{ width: `${scrollProgress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </motion.div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children, isScrolled, isHomePage }: { 
  href: string; 
  children: React.ReactNode; 
  isScrolled: boolean;
  isHomePage: boolean;
}) {
  return (
    <Link 
      href={href}
      className={`transition-colors ${
        isHomePage && !isScrolled
          ? 'text-white hover:text-gray-200'
          : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-center text-lg py-2"
    >
      {children}
    </Link>
  );
} 