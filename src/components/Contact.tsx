
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi BuildSphere! 
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.project}
Message: ${formData.message}

I'd like to discuss my project with you!`;

    const whatsappUrl = `https://wa.me/918309829743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecting to WhatsApp! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "buildhspere.agency@gmail.com",
      link: "mailto:buildhspere.agency@gmail.com"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+91 83098 29743",
      link: "https://wa.me/918309829743"
    },
    {
      icon: "🕒",
      title: "Response Time",
      value: "Within 24 hours",
      link: null
    },
    {
      icon: "🌍",
      title: "Availability",
      value: "24/7 Support",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
            Let's Build Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to kickstart your project? Reach out to us and let's make your next project a success story!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-electric">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-electric transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50 focus:border-electric transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50 focus:border-electric transition-colors duration-300"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type *</label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-background/50 border border-border/50 rounded-md focus:border-electric transition-colors duration-300 text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="AI/ML">AI/ML Solution</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Full Stack">Full Stack Development</option>
                      <option value="Academic">Academic Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details *</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border/50 focus:border-electric transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, requirements, timeline, and budget..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric to-cyber hover:from-cyber hover:to-electric text-background font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric/50"
                >
                  Send Message via WhatsApp 💬
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-electric/50 transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-electric">Get in Touch</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-electric hover:text-cyber transition-colors duration-300 underline"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <Button
                onClick={() => window.open('https://wa.me/918309829743', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                💬 Chat on WhatsApp
              </Button>
              
              <Button
                onClick={() => window.open('mailto:buildhspere.agency@gmail.com', '_blank')}
                variant="outline"
                className="w-full border-electric text-electric hover:bg-electric hover:text-background font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                📧 Send Email
              </Button>
            </div>

            {/* CTA Message */}
            <Card className="bg-gradient-to-br from-electric/10 to-cyber/10 border-electric/30">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-lg mb-2 text-electric">Ready to Start?</h4>
                <p className="text-sm text-muted-foreground">
                  "Let's connect and make your next project a success story!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
