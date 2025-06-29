import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import InfiniteScroll from './ui/InfiniteScroll';

const Services = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useScrollAnimation(0.2);

  const services = [
    {
      title: "AI/ML Solutions",
      description: "Custom machine learning models, neural networks, and AI-powered applications tailored to your specific needs.",
      ///icon: "🧠",
      features: ["Deep Learning", "Computer Vision", "NLP", "Predictive Analytics"],
      color: "from-neon to-orange-400"
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights with advanced analytics, visualization, and data processing.",
     /// icon: "📊",
      features: ["Data Analytics", "Visualization", "Statistical Modeling", "Big Data"],
      color: "from-neon to-orange-400"
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web and mobile applications using cutting-edge technologies and frameworks.",
      //icon: "💻",
      features: ["React/Next.js", "Node.js", "Database Design", "Cloud Deployment"],
      color: "from-neon to-orange-400"
    },
    {
      title: "Academic Projects",
      description: "Research-based projects, thesis implementations, and academic paper reproductions with precision.",
      //icon: "🎓",
      features: ["Research Papers", "Thesis Projects", "Academic Writing", "Peer Review"],
      color: "from-neon to-orange-400"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent glow-text">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We deliver comprehensive solutions across multiple domains, ensuring your project gets the expertise it deserves.
          </p>
        </div>

        {/* InfiniteScroll Animation with Service Cards */}
        <div style={{height: '500px', position: 'relative'}}>
          <InfiniteScroll
            items={services.map((service, index) => ({
              content: (
                <Card 
                  key={index} 
                  className={`group bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-700 overflow-hidden transform hover:shadow-[0_0_12px_2px_#43FAF7]`}
                >
                  <CardContent className="p-8 relative">
                    {/* Service Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-4xl animate-float transform transition-all duration-500 group-hover:scale-110" style={{ animationDelay: `${index * 0.2}s` }}>
                        {/* icon placeholder */}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2 transition-all duration-300 group-hover:glow-text group-hover:text-electric">
                          {service.title}
                        </h3>
                        <div className={`h-1 w-15 bg-gradient-to-r ${service.color} rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-100`}></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm transform transition-all duration-300 group-hover:translate-x-2"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <div className="w-2 h-2 bg-electric rounded-full animate-pulse"></div>
                          <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Hover Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                  </CardContent>
                </Card>
              )
            }))}
            isTilted={true}
            tiltDirection='left'
            autoplay={true}
            autoplaySpeed={0.7}
            autoplayDirection="up"
            pauseOnHover={true}
            itemMinHeight={150}
            width="90%"
            maxHeight="400px"
          />
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We've got you covered.
          </p>
          <button 
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCFC3F] to-[#FCFC3F] hover:from-[#FAD543] hover:to-[#43FAF7] text-background font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#43FAF7]/50 transform"
>
  Discuss Your Project
  <span className="animate-bounce">→</span>
</button>
        </div>
      </div>
    </section>
  );
};

export default Services;