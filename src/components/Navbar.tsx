import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GooeyNav from './ui/GooeyNav';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sectionIds = ['hero', 'services', 'portfolio', 'team', 'about', 'contact'];
      const offsets = sectionIds.map(id => {
        const el = document.getElementById(id);
        return el ? Math.abs(el.getBoundingClientRect().top - 80) : Infinity;
      });
      const minOffset = Math.min(...offsets);
      const index = offsets.findIndex(offset => offset === minOffset);
      setActiveNavIndex(index >= 0 ? index : 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, index?: number) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      if (typeof index === 'number') setActiveNavIndex(index);
    }
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.div 
                className="floating-sphere w-3 h-3 top-0 left-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="floating-sphere w-2 h-2 top-1 left-4"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
              <motion.div 
                className="floating-sphere w-2.5 h-2.5 top-3 left-2"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">BuildSphere</h1>
              <p className="text-xs text-gray-400 -mt-1">THINK IT. BUILD IT. OWN IT.</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ width: '100%', position: 'relative' }}>
              <GooeyNav
                items={navItems}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                activeIndex={activeNavIndex}
                onItemClick={(index) => {
                  const sectionId = navItems[index].href.replace('#', '');
                  scrollToSection(sectionId, index);
                }}
              />
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="glass-effect rounded-lg p-4 space-y-4">
                {navItems.map((item, idx) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.href, idx);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-sm font-medium hover:text-electric transition-colors capitalize"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
