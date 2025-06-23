import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollVelocity from '@/components/ui/ScrollVelocity';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and creative solutions.",
      //icon: "💡",
      color: "from-electric to-cyan-400"
    },
    {
      title: "Customization",
      description: "Tailored solutions that perfectly match your unique requirements.",
      //icon: "🎯",
      color: "from-cyber to-purple-400"
    },
    {
      title: "Integrity",
      description: "Transparent communication and honest partnerships throughout.",
      //icon: "🤝",
      color: "from-neon to-yellow-400"
    },
    {
      title: "Timely Delivery",
      description: "Meeting deadlines without compromising on quality or functionality.",
      //icon: "⚡",
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
                   
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                  <div className="h-1 w-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4 transform origin-left transition-transform duration-500 group-hover:scale-x-110"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "1+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-3xl font-bold mb-2 text-white transition-colors duration-300 group-hover:text-sky-400 group-hover:glow-text">
                {stat.number}
              </div>
              <div className="text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* BuildSphere ScrollVelocity Animation */}

        {/* What We Offer */}
      </div>
    </section>
  );
};

export default About;
