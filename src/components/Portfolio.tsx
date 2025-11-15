import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Play, Video, Code, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'ISKCON PB Gifts - E-Commerce Platform',
      category: 'tech',
      type: 'Shopify Development',
      description: 'Complete e-commerce solution with custom product design, marketing strategy, and Shopify store management for ISKCON Punjabi Bagh Delhi.',
      image: 'https://i.ibb.co/JWHZSyjV/iskcon.jpg',
      technologies: ['Shopify', 'Product Design', 'Marketing', 'E-Commerce', 'Custom Packaging'],
      link: 'https://www.iskconpbgifts.com',
      isVideo: false,
      metrics: 'Live E-Commerce Store',
      featured: true
    },
    {
      id: 2,
      title: 'Professional Video Edit - Educational Content',
      category: 'video',
      type: 'Video Editing',
      description: 'High-quality educational video editing with smooth transitions and professional audio enhancement.',
      image: 'https://img.youtube.com/vi/bbipKHCH7bQ/maxresdefault.jpg',
      technologies: ['Premiere Pro', 'After Effects', 'Audio Enhancement'],
      link: 'https://youtu.be/bbipKHCH7bQ?si=RT5BesPDK110QdEW',
      isVideo: true,
      metrics: 'Professional Grade'
    },
    {
      id: 3,
      title: 'Creative Video Production',
      category: 'video',
      type: 'Video Editing',
      description: 'Creative video editing with dynamic cuts, color grading, and motion graphics.',
      image: 'https://img.youtube.com/vi/cczDofTr2PE/maxresdefault.jpg',
      technologies: ['Final Cut Pro', 'Color Grading', 'Motion Graphics'],
      link: 'https://youtu.be/cczDofTr2PE?si=YRgQBiEfEXpwFl8I',
      isVideo: true,
      metrics: 'Creative Excellence'
    },
    {
      id: 4,
      title: 'Promotional Video Content',
      category: 'video',
      type: 'Video Editing',
      description: 'Engaging promotional video with professional storytelling and visual effects.',
      image: 'https://img.youtube.com/vi/JaJzhELVmqA/maxresdefault.jpg',
      technologies: ['Premiere Pro', 'Visual Effects', 'Sound Design'],
      link: 'https://youtu.be/JaJzhELVmqA?si=RGsFAwrBjdCDHGSZ',
      isVideo: true,
      metrics: 'High Engagement'
    },
    {
      id: 5,
      title: 'Advanced Video Edit',
      category: 'video',
      type: 'Video Editing',
      description: 'Advanced video editing techniques with cinematic quality and professional post-production.',
      image: 'https://img.youtube.com/vi/_5PwHr1hE38/maxresdefault.jpg',
      technologies: ['DaVinci Resolve', 'Cinematic Editing', 'Professional Audio'],
      link: 'https://youtu.be/_5PwHr1hE38?si=YlqUwn4esQo7s7xn',
      isVideo: true,
      metrics: 'Cinematic Quality'
    },
    {
      id: 6,
      title: 'AWS-Sable Platform',
      category: 'tech',
      type: 'Web Development',
      description: 'Modern cloud platform built with advanced AWS integration and scalable architecture.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      technologies: ['AWS', 'React', 'Node.js', 'Cloud Architecture'],
      link: 'https://aws-sable.vercel.app',
      metrics: 'Cloud-Scale Solution'
    },
    {
      id: 7,
      title: 'IndPro Business Platform',
      category: 'tech',
      type: 'Web Development',
      description: 'Comprehensive business platform with modern UI/UX and robust backend functionality.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'Modern UI/UX', 'API Integration'],
      link: 'https://finalised-indpro.vercel.app/',
      metrics: 'Enterprise Grade'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'video', label: 'Video Editing', icon: Video },
    { id: 'tech', label: 'Tech Projects', icon: Code }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore our professional video editing, web development, and e-commerce projects showcasing our expertise.
          </motion.p>

          {/* Filter buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-full px-6 py-3 transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30' 
                      : 'hover:bg-primary/10 hover:shadow-md border-2'
                  }`}
                >
                  {filter.icon && <filter.icon className="h-4 w-4" />}
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Featured/Popular badge */}
              {project.featured && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white px-5 py-1.5 text-sm shadow-lg shadow-orange-500/50 animate-pulse font-bold">
                    ✨ Featured Client
                  </Badge>
                </motion.div>
              )}

              {index === 2 && !project.featured && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, scale: 0, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm shadow-lg">
                    Most Popular
                  </Badge>
                </motion.div>
              )}
              
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 shadow-lg h-full">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    onError={(e) => {
                      // Fallback image if ISKCON image doesn't load
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop';
                    }}
                  />
                  {project.isVideo && (
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="bg-white/90 rounded-full p-3 shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Play className="h-6 w-6 text-primary" />
                      </motion.div>
                    </motion.div>
                  )}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Badge variant="secondary" className="bg-white/90 dark:bg-slate-700/90 text-primary backdrop-blur-sm font-semibold">
                      {project.type}
                    </Badge>
                  </motion.div>
                  
                  {project.metrics && (
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Badge className="bg-green-600/90 text-white backdrop-blur-sm shadow-lg font-semibold">
                        {project.metrics}
                      </Badge>
                    </motion.div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors text-foreground dark:text-white"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground dark:text-slate-300 mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="outline" className="text-xs font-medium dark:text-slate-300 dark:border-slate-600">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md hover:shadow-lg dark:text-white dark:border-slate-600 font-semibold"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {project.isVideo ? 'Watch Video' : 'Visit Website'}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 border-0 shadow-2xl shadow-blue-500/30">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}
                animate={{ 
                  backgroundPosition: ['0px 0px', '50px 50px'],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <CardContent className="p-10 sm:p-12 text-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl w-fit shadow-xl"
              >
                <ShoppingCart className="h-10 w-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-black mb-4 text-white drop-shadow-lg">
                Ready to Start Your Project?
              </h3>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can bring your vision to life with our creative and technical expertise.
                <span className="block mt-2 font-bold">Join our growing list of satisfied clients!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-white text-purple-600 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() => {
                      const message = "Hi PROGO Team! I saw your portfolio and I'm interested in starting a project. Could we discuss my requirements?";
                      const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    Start Your Project →
                  </Button>
                </motion.div>
                
                <p className="text-sm text-white/90 font-medium">
                  💬 Free consultation • Quick turnaround
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
