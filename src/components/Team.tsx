import React from 'react';
import { motion } from 'framer-motion';
import { ChromaGrid, ChromaItem } from './ui/ChromaGrid';

const team: ChromaItem[] = [
    {
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
        title: 'Srivani',
        subtitle: 'Lead Team',
        //description: 'Full-stack architect with 8+ years in React, Node.js, and cloud solutions.',
        borderColor: '#06B6D4',
        gradient: 'linear-gradient(210deg, #06B6D4, #10B981)',
        url: 'https://linkedin.com/in/',
      },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    title: 'Pooja',
    subtitle: 'UX/UI Designer',
    //description: 'Creative designer specializing in user-centered design and brand identity.',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(210deg, #06B6D4, #10B981)',
    url: 'https://linkedin.com/in/',
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    title: 'Suresh',
    subtitle: 'AI Specialist',
    //description: 'Machine learning expert with expertise in neural networks and data analytics.',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(165deg, #F59E0B, #8B5CF6)',
    url: 'https://dribbble.com/',
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    title: 'Prathyusha',
    subtitle: 'Project Manager',
    //description: 'Agile expert ensuring seamless project delivery and client satisfaction.',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(195deg, #4F46E5, #F472B6)',
    url: 'https://kaggle.com/',
  },
  {
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    title: 'Anand',
    subtitle: 'DevOps Engineer',
    //description: 'Strategic consultant helping businesses leverage technology for growth and innovation.'
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(225deg, #8B5CF6, #F59E0B)',
    url: 'https://github.com/',
  },
];

const Team = () => (
  <section id="team" className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Meet Our Team</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          The brilliant minds behind BuildSphere's success. Our diverse team of experts brings passion, innovation, and excellence to every project.
        </p>
      </motion.div>
      <ChromaGrid items={team} columns={3} rows={2} className="bg-transparent" />
    </div>
  </section>
);

export default Team;

