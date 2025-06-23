import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

// Add ShinyText component here
const ShinyText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="relative inline-block text-transparent bg-gradient-to-r from-white via-white/70 to-white bg-clip-text animate-shine">
    {children}
  </span>
);

const parseNumber = (value: string) => {
  const match = value.match(/([\d.]+)(\D*)/);
  if (!match) return { num: 0, suffix: '' };
  return { num: parseFloat(match[1]), suffix: match[2] };
};

const CountUp: React.FC<{ end: string; isVisible?: boolean; duration?: number }> = ({ end, isVisible = true, duration = 1200 }) => {
  const { num, suffix } = parseNumber(end);
  const [count, setCount] = useState(0);
  const startTimestamp = useRef<number | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) return;
    setCount(0);
    startTimestamp.current = null;
    if (raf.current) cancelAnimationFrame(raf.current);
    const animate = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(num);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [num, isVisible, duration]);

  return <>{count}{suffix}</>;
};

// ScrollVelocityHeading component for scroll velocity animation
const ScrollVelocityHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(window.scrollY);
  const lastTimestamp = useRef(performance.now());
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const update = (timestamp: number) => {
      const currentY = window.scrollY;
      const deltaY = currentY - lastScrollY.current;
      const deltaTime = timestamp - lastTimestamp.current;
      const v = deltaTime > 0 ? deltaY / deltaTime : 0;
      setVelocity(v * 100); // scale for effect
      lastScrollY.current = currentY;
      lastTimestamp.current = timestamp;
      raf.current = requestAnimationFrame(update);
    };
    raf.current = requestAnimationFrame(update);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, []);

  // Clamp and smooth the velocity for a nice effect
  const style = {
    transform: `translateX(${Math.max(-40, Math.min(40, velocity))}px)`,
    transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
    display: 'inline-block',
  };

  return (
    <h2 className="text-3xl font-bold mb-8 text-center w-full" style={style}>
      {children}
    </h2>
  );
};

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
        <div className={`transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          
          {/* Hero Logo */}
          <div className="flex justify-center mb-8 transform transition-all duration-1000 delay-300">
            <Logo size="xl" className="animate-float" />
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-electric via-white to-cyber bg-clip-text text-transparent leading-tight transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Build<span className="text-neon glow-text">Sphere</span>
          </h1>

          {/* Animated Slogan */}
          <div className={`h-16 md:h-20 flex items-center justify-center mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-2xl font-medium text-muted-foreground transition-all duration-500 glow-text">
              {slogans[currentSlogan]}
            </p>
          </div>

          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-10 blur'}`}>
            <ShinyText>
              Empowering innovators by transforming bold ideas into custom-built digital realities. 
              Specializing in <span >AI/ML</span>, 
              <span> Data Science</span>, 
              <span > Full Stack Development</span>, and 
              <span> Academic Projects</span>.
            </ShinyText>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-electric text-electric hover:bg-electric hover:text-background px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 text-lg transform"
            >
              Start Project 
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-electric text-electric hover:bg-electric hover:text-background px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 text-lg transform"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats or Features */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "24H", label: "Support Available" },
              { number: "99%", label: "Client Satisfaction" },
              { number: "48H", label: "Quick Turnaround" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110">
                <div className="text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300 text-[#F7FAFA] group-hover:glow-text group-hover:text-[#F641FD]">
                  <CountUp end={stat.number} isVisible={isVisible} />
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
