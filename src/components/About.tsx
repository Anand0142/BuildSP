
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and creative solutions.",
      icon: "💡",
      color: "from-electric to-cyan-400"
    },
    {
      title: "Customization",
      description: "Tailored solutions that perfectly match your unique requirements.",
      icon: "🎯",
      color: "from-cyber to-purple-400"
    },
    {
      title: "Integrity",
      description: "Transparent communication and honest partnerships throughout.",
      icon: "🤝",
      color: "from-neon to-yellow-400"
    },
    {
      title: "Timely Delivery",
      description: "Meeting deadlines without compromising on quality or functionality.",
      icon: "⚡",
      color: "from-matrix to-green-400"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
            About BuildSphere
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering innovators by transforming bold ideas into custom-built digital realities.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-electric">Our Mission</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                "BuildSphere exists to empower innovators, students, and startups by transforming bold ideas into custom-built digital realities. 
                We believe that every great idea deserves exceptional execution, and we're here to make that happen with cutting-edge technology, 
                personalized solutions, and unwavering support."
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-electric">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500 hover-lift text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  <div className={`h-1 w-full bg-gradient-to-r ${value.color} rounded-full mt-4 transform origin-left transition-transform duration-500 group-hover:scale-x-110`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl md:text-4xl font-bold text-electric group-hover:text-cyber transition-colors duration-300 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* What We Offer */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-electric">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-cyber">Unique Selling Points</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full mt-2 animate-pulse"></div>
                    <span>Bespoke AI/ML, Data Science & Full Stack Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 animate-pulse"></div>
                    <span>Web & Software Development from concept to completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon rounded-full mt-2 animate-pulse"></div>
                    <span>Academic Projects crafted with precision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-matrix rounded-full mt-2 animate-pulse"></div>
                    <span>Budget-friendly pricing for startups & students</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4 text-cyber">Our Promise</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-electric rounded-full mt-2 animate-pulse"></div>
                    <span>On-time delivery with full source code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyber rounded-full mt-2 animate-pulse"></div>
                    <span>Complete documentation and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-neon rounded-full mt-2 animate-pulse"></div>
                    <span>Dedicated support tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-matrix rounded-full mt-2 animate-pulse"></div>
                    <span>Quality that exceeds expectations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
