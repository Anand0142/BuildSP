
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "AI-Powered E-commerce Recommender",
      category: "ai",
      description: "Machine learning system that increased sales by 40% through personalized product recommendations.",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      image: "🤖",
      metrics: ["40% ↑ Sales", "85% Accuracy", "2M+ Users"]
    },
    {
      title: "Real-time Analytics Dashboard",
      category: "data",
      description: "Interactive dashboard processing 1M+ data points daily with real-time visualizations.",
      tech: ["Python", "D3.js", "PostgreSQL", "Redis"],
      image: "📈",
      metrics: ["1M+ Data Points", "< 100ms Response", "99.9% Uptime"]
    },
    {
      title: "Social Media Management Platform",
      category: "fullstack",
      description: "Complete social media management solution with scheduling, analytics, and team collaboration.",
      tech: ["Next.js", "Node.js", "MongoDB", "AWS"],
      image: "📱",
      metrics: ["50K+ Users", "10M+ Posts", "150+ Integrations"]
    },
    {
      title: "Climate Change Prediction Model",
      category: "academic",
      description: "Research project implementing LSTM networks for climate pattern prediction with 92% accuracy.",
      tech: ["Python", "PyTorch", "Jupyter", "GIS"],
      image: "🌍",
      metrics: ["92% Accuracy", "Published Paper", "Peer Reviewed"]
    },
    {
      title: "Computer Vision Quality Control",
      category: "ai",
      description: "Automated quality control system for manufacturing using deep learning and computer vision.",
      tech: ["OpenCV", "PyTorch", "FastAPI", "Docker"],
      image: "👁️",
      metrics: ["99.5% Accuracy", "50% Cost Reduction", "24/7 Operation"]
    },
    {
      title: "Financial Trading Bot",
      category: "data",
      description: "Algorithmic trading system with risk management and real-time market analysis.",
      tech: ["Python", "Pandas", "Alpha Vantage", "React"],
      image: "💰",
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our successful projects across different domains. Each project showcases our commitment to innovation and excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-electric to-cyber text-background hover:from-cyber hover:to-electric'
                  : 'border-electric text-electric hover:bg-electric hover:text-background'
              }`}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500 hover-lift overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Project Image/Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-electric transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-electric/10 text-electric rounded-full border border-electric/20"
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
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-2 h-2 bg-matrix rounded-full animate-pulse"></div>
                      <span className="text-foreground/80 font-medium">{metric}</span>
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
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see your project here? Let's make it happen.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-electric text-background font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric/50"
          >
            Start Your Project
            <span className="animate-bounce">✨</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
