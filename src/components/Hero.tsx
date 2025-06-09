
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Hero = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slogans = [
    "Turning Ideas into Impactful Code",
    "Your Vision. Our Code. Infinite Possibilities",
    "Building Tomorrow, One Project at a Time",
    "Custom Solutions, Limitless Potential"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden cyber-grid">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/80"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="xl" className="animate-float" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-electric via-white to-cyber bg-clip-text text-transparent leading-tight">
            Build<span className="text-neon">Sphere</span>
          </h1>

          {/* Animated Slogan */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <p className="text-lg md:text-2xl font-medium text-muted-foreground transition-all duration-500 glow-text">
              {slogans[currentSlogan]}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Empowering innovators by transforming bold ideas into custom-built digital realities. 
            Specializing in <span className="text-electric font-semibold">AI/ML</span>, 
            <span className="text-cyber font-semibold"> Data Science</span>, 
            <span className="text-neon font-semibold"> Full Stack Development</span>, and 
            <span className="text-matrix font-semibold"> Academic Projects</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-electric text-background font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-electric/50 text-lg"
            >
              Start Your Project
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-electric text-electric hover:bg-electric hover:text-background px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats or Features */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "24/7", label: "Support Available" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "48h", label: "Quick Turnaround" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-2xl md:text-3xl font-bold text-electric group-hover:text-cyber transition-colors duration-300 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
