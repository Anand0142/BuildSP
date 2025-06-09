
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'AI/ML Solutions', href: '#services' },
      { name: 'Data Science', href: '#services' },
      { name: 'Full Stack Development', href: '#services' },
      { name: 'Academic Projects', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Portfolio', href: '#portfolio' },
      { name: 'Contact', href: '#contact' },
      { name: 'Privacy Policy', href: '#' }
    ],
    contact: [
      { name: 'buildhspere.agency@gmail.com', href: 'mailto:buildhspere.agency@gmail.com' },
      { name: '+91 83098 29743', href: 'https://wa.me/918309829743' },
      { name: 'WhatsApp Support', href: 'https://wa.me/918309829743' }
    ]
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
                  BuildSphere
                </h3>
                <p className="text-xs text-muted-foreground font-mono">Custom Solutions, Limitless Potential</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering innovators by transforming bold ideas into custom-built digital realities.
            </p>
            <div className="flex space-x-2">
              {/* Social Media Placeholder */}
              <div className="w-8 h-8 bg-electric/20 rounded-full flex items-center justify-center text-electric text-sm">
                📧
              </div>
              <div className="w-8 h-8 bg-cyber/20 rounded-full flex items-center justify-center text-cyber text-sm">
                💬
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted-foreground hover:text-electric transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} BuildSphere Agency. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with ❤️ by BuildSphere</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;
