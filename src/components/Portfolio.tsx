
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [filterRef, filterVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useScrollAnimation(0.2);

  const projects = [
    {
      title: "AI-Powered E-commerce Recommender",
      category: "ai",
      description: "Machine learning system that increased sales by 40% through personalized product recommendations.",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      //image: "🤖",
      metrics: ["40% ↑ Sales", "85% Accuracy", "2M+ Users"]
    },
    {
      title: "Real-time Analytics Dashboard",
      category: "data",
      description: "Interactive dashboard processing 1M+ data points daily with real-time visualizations.",
      tech: ["Python", "D3.js", "PostgreSQL", "Redis"],
     // image: "📈",
      metrics: ["1M+ Data Points", "< 100ms Response", "99.9% Uptime"]
    },
    {
      title: "Social Media Management Platform",
      category: "fullstack",
      description: "Complete social media management solution with scheduling, analytics, and team collaboration.",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
     // image: "📱",
      metrics: ["50K+ Users", "10M+ Posts", "150+ Integrations"]
    },
    {
      title: "Climate Change Prediction Model",
      category: "academic",
      description: "Research project implementing LSTM networks for climate pattern prediction with 92% accuracy.",
      tech: ["Python", "PyTorch", "Jupyter", "GIS"],
     // image: "🌍",
      metrics: ["92% Accuracy", "Published Paper", "Peer Reviewed"]
    },
    {
      title: "Computer Vision Quality Control",
      category: "ai",
      description: "Automated quality control system for manufacturing using deep learning and computer vision.",
      tech: ["OpenCV", "PyTorch", "FastAPI", "Docker"],
      //image: "👁️",
      metrics: ["99.5% Accuracy", "50% Cost Reduction", "24/7 Operation"]
    },
    {
      title: "Financial Trading Bot",
      category: "data",
      description: "Algorithmic trading system with risk management and real-time market analysis.",
      tech: ["Python", "Pandas", "Alpha Vantage", "React"],
      //image: "💰",
      metrics: ["15% ROI", "Low Risk", "Automated Trading"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
    { id: 'data', label: 'Data Science', count: projects.filter(p => p.category === 'data').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'academic', label: 'Academic', count: projects.filter(p => p.category === 'academic').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent glow-text">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects across different domains. Each project showcases our commitment to innovation and excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div 
  ref={filterRef}
  className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
    filterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
  {categories.map((category, index) => (
    <Button
      key={category.id}
      variant={selectedCategory === category.id ? "default" : "outline"}
      onClick={() => setSelectedCategory(category.id)}
      className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
        selectedCategory === category.id
          ? 'bg-gradient-to-r from-[#F59126] to-[#FCA13F] text-background hover:from-[#FCFC3F] hover:to-[#FCFC3F] shadow-lg shadow-[#FCFC3F]/30'
          : 'border-[#43FAF7] text-[#FCF6F0] hover:bg-[#43FAF7] hover:text-background hover:shadow-lg hover:shadow-[#FCFC3F]/30'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {category.label} ({category.count})
    </Button>
  ))}
</div>

        {/* Projects Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-card/50 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-700 hover-lift overflow-hidden transform ${
                gridVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <CardContent className="p-6 relative">
                {/* Project Image/Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-125 transition-transform duration-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                 
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 text-[#F8F6EF] group-hover:text-[#FAD543] transition-colors duration-300">
  {project.title}
</h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-electric/10 text-electric rounded-full border border-electric/20 transition-all duration-300 group-hover:bg-electric/20 group-hover:scale-105 transform"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <div 
                      key={metricIndex}
                      className="flex items-center gap-2 text-sm transform transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: `${metricIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
                      <span className="text-foreground/80 font-medium group-hover:text-foreground transition-colors duration-300">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-cyber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-muted-foreground mb-6">
            Want to see your project here? Let's make it happen.
          </p>
          <button 
  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FCFC3F] to-[#FCFC3F] hover:from-[#FAD543] hover:to-[#43FAF7] text-background font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#43FAF7]/50 transform group"
>
  Start Your Project
</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
