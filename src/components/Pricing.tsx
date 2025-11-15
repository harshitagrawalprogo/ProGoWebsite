import { useState } from 'react';
import { Check, Star, Zap, Crown, Code, Palette, Video, ShoppingBag, Globe, Smartphone, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<'creative' | 'tech' | 'services'>('creative');

  const creativePlans = [
    {
      name: 'Social Media Starter',
      price: '₹5,000',
      period: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      icon: Star,
      color: 'blue',
      popular: false,
      features: [
        'Complete Social Media Strategy',
        'Daily Content Planning',
        'Post Scheduling & Management',
        'Basic Analytics & Reporting',
        '1 Platform Focus (Instagram/Facebook)',
        'Monthly Strategy Review',
        'Basic Hashtag Research',
        'Community Engagement'
      ]
    },
    {
      name: 'Video Editing Pro',
      price: '₹6,000',
      period: '/package',
      description: 'Professional video editing for your marketing needs',
      icon: Zap,
      color: 'purple',
      popular: true,
      features: [
        '4 Professional Video Edits',
        'Up to 30 seconds each',
        'Motion Graphics Included',
        'Color Correction & Grading',
        'Audio Enhancement',
        'Social Media Optimization',
        '2 Revision Rounds',
        'Fast 48-hour Delivery'
      ]
    },
    {
      name: 'Creative Premium',
      price: '₹11,000',
      period: '/package',
      description: 'Complete creative package for brand enhancement',
      icon: Crown,
      color: 'gradient',
      popular: false,
      features: [
        '4 Custom Poster Designs',
        '4 Professional Video Edits',
        'Advanced Motion Graphics',
        'Brand Consistency Check',
        'Multiple Format Outputs',
        'Unlimited Minor Revisions',
        'Priority Support',
        'Creative Consultation Call'
      ]
    }
  ];

  const techPlans = [
    {
      name: 'Personal Website',
      price: '₹8,000',
      originalPrice: '₹10,000',
      period: '',
      description: 'Perfect portfolio or personal brand website',
      icon: Globe,
      color: 'blue',
      popular: false,
      features: [
        'Modern Responsive Design',
        'Up to 5 Pages',
        'Mobile Optimized',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Free 3 Months Hosting',
        '1 Month Free Maintenance',
        '7-Day Delivery'
      ]
    },
    {
      name: 'Business Website',
      price: '₹25,000',
      priceRange: '₹25K - ₹35K',
      period: '',
      description: 'Professional business website with advanced features',
      icon: Code,
      color: 'purple',
      popular: true,
      features: [
        'Custom Professional Design',
        'Up to 15 Pages',
        'CMS Integration',
        'Advanced SEO Optimization',
        'Contact & Lead Forms',
        'Social Media Integration',
        'Analytics Dashboard',
        'Free 6 Months Support',
        '14-Day Delivery'
      ]
    },
    {
      name: 'Web Application',
      price: '₹1,00,000',
      priceRange: '₹1L - ₹8L',
      period: '',
      description: 'Full-featured custom web applications',
      icon: Zap,
      color: 'gradient',
      popular: false,
      features: [
        'Custom UI/UX Design',
        'Full-Stack Development',
        'Database Architecture',
        'User Authentication System',
        'Admin Dashboard',
        'API Integration',
        'Cloud Deployment',
        'Ongoing Maintenance Available',
        'Project Timeline: 4-12 weeks'
      ]
    },
    {
      name: 'Mobile App Development',
      price: '₹60,000',
      priceRange: '₹60K - ₹2L',
      period: '',
      description: 'Native or cross-platform mobile applications',
      icon: Smartphone,
      color: 'cyan',
      popular: false,
      features: [
        'iOS & Android Compatible',
        'Custom App Design',
        'Backend Development',
        'Push Notifications',
        'User Analytics',
        'App Store Deployment',
        'Cloud Integration',
        '3 Months Free Support',
        'Timeline: 6-16 weeks'
      ]
    }
  ];

  const servicePackages = [
    {
      name: 'Marketing & Ads',
      price: '₹8,000',
      priceRange: '₹8K - ₹15K',
      period: '/campaign',
      description: 'Complete digital marketing campaign management',
      icon: TrendingUp,
      color: 'orange',
      popular: false,
      features: [
        'Campaign Strategy & Planning',
        'Ad Copy & Creative Design',
        'Multi-Platform Ads (FB, Insta, Google)',
        'Audience Targeting & Research',
        'Budget Management (Min ₹800-2000)',
        'Performance Analytics',
        'A/B Testing',
        '30% Additional on Ad Budget',
        'Monthly Reporting'
      ]
    },
    {
      name: 'Video Production Pro',
      price: '₹10,000',
      priceRange: '₹8K - ₹15K',
      period: '/package',
      description: 'Professional video editing and 2D animation',
      icon: Video,
      color: 'red',
      popular: true,
      features: [
        '40-60 Minutes Total Video Content',
        'Professional Editing (₹200-250/min)',
        '2D Animation Available',
        'Color Grading & Enhancement',
        'Sound Design & Music',
        'Multiple Format Export',
        'Social Media Optimization',
        'Unlimited Revisions',
        '5-7 Day Turnaround'
      ]
    },
    {
      name: 'Design Studio',
      price: '₹5,000',
      priceRange: '₹5K - ₹12K',
      period: '/package',
      description: 'Complete graphic design solutions',
      icon: Palette,
      color: 'pink',
      popular: false,
      features: [
        '40-60 Custom Designs',
        'Posters & Social Media Graphics',
        'Product Catalog Images',
        'Brand Consistency',
        'Professional Mockups',
        'Print-Ready Files',
        'Source Files Included',
        'Per Design: ₹80-150',
        '3-5 Day Delivery'
      ]
    },
    {
      name: 'Shopify Management',
      price: '₹15,000',
      priceRange: '₹15K - ₹20K',
      period: '/month',
      description: 'Complete Shopify store management & optimization',
      icon: ShoppingBag,
      color: 'green',
      popular: false,
      features: [
        'Store Setup & Configuration',
        'Product Listing Management',
        'Inventory Management',
        'Order Processing Support',
        'Theme Customization',
        'SEO Optimization',
        'Analytics & Reporting',
        'Customer Support Setup',
        'Monthly Performance Review'
      ]
    }
  ];

  const handleGetStarted = (planName: string) => {
    const message = `Hi! I'm interested in the ${planName} package. Could you please provide more details and help me get started?`;
    const whatsappUrl = `https://wa.me/918299721019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' | 'shadow') => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-500',
        shadow: 'shadow-blue-500/30'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-500',
        shadow: 'shadow-purple-500/30'
      },
      cyan: {
        bg: 'bg-cyan-500',
        text: 'text-cyan-600 dark:text-cyan-400',
        border: 'border-cyan-500',
        shadow: 'shadow-cyan-500/30'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-500',
        shadow: 'shadow-orange-500/30'
      },
      red: {
        bg: 'bg-red-500',
        text: 'text-red-600 dark:text-red-400',
        border: 'border-red-500',
        shadow: 'shadow-red-500/30'
      },
      pink: {
        bg: 'bg-pink-500',
        text: 'text-pink-600 dark:text-pink-400',
        border: 'border-pink-500',
        shadow: 'shadow-pink-500/30'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-500',
        shadow: 'shadow-green-500/30'
      }
    };

    return colorMap[color]?.[type] || colorMap.blue[type];
  };

  const PricingCard = ({ plan, index }: { plan: any; index: number }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative group"
    >
      {plan.popular && (
        <motion.div 
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <Badge className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-6 py-1.5 text-sm font-bold shadow-lg shadow-purple-500/50 animate-pulse">
            ⭐ MOST POPULAR
          </Badge>
        </motion.div>
      )}
      
      <Card className={`h-full relative overflow-hidden transition-all duration-500 border-2 ${
        plan.popular 
          ? 'border-purple-400 shadow-2xl shadow-purple-200/50 dark:shadow-purple-900/50 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-slate-800 dark:via-purple-900/20 dark:to-pink-900/20' 
          : 'border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl bg-white/80 dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600'
      } backdrop-blur-sm`}>
        
        {/* Gradient Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 rounded-bl-full ${
          plan.color === 'gradient' 
            ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600' 
            : `bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-700`
        }`}></div>

        <CardHeader className="text-center pb-4 relative z-10">
          {/* Icon */}
          <motion.div 
            className={`mx-auto mb-5 p-4 rounded-2xl w-fit shadow-lg ${
              plan.color === 'gradient' 
                ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-purple-500/30' 
                : `bg-gradient-to-br from-${plan.color}-500 to-${plan.color}-700 ${getColorClasses(plan.color, 'shadow')}`
            }`}
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <plan.icon className="h-8 w-8 text-white" />
          </motion.div>
          
          <CardTitle className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
            {plan.name}
          </CardTitle>
          
          <CardDescription className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed min-h-[48px]">
            {plan.description}
          </CardDescription>
          
          {/* Price */}
          <motion.div 
            className="mb-2"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {plan.originalPrice && (
              <div className="text-lg text-slate-400 line-through mb-1">
                {plan.originalPrice}
              </div>
            )}
            <div className="flex items-baseline justify-center">
              <span className={`text-5xl font-black ${
                plan.color === 'gradient' 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent' 
                  : getColorClasses(plan.color, 'text')
              }`}>
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-slate-500 dark:text-slate-400 ml-2 text-lg font-medium">
                  {plan.period}
                </span>
              )}
            </div>
            {plan.priceRange && (
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-semibold">
                Range: {plan.priceRange}
              </div>
            )}
          </motion.div>
        </CardHeader>

        <CardContent className="pt-2 relative z-10">
          {/* Features List */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 text-center">
              What's Included
            </p>
            <ul className="space-y-3.5">
              {plan.features.map((feature: string, featureIndex: number) => (
                <motion.li 
                  key={featureIndex}
                  className="flex items-start group/item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: featureIndex * 0.05 }}
                >
                  <div className={`flex-shrink-0 mt-0.5 mr-3 p-1 rounded-full ${
                    plan.color === 'gradient' 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30' 
                      : `bg-${plan.color}-100 dark:bg-${plan.color}-900/30`
                  }`}>
                    <Check className={`h-4 w-4 ${
                      plan.color === 'gradient' 
                        ? 'text-purple-600 dark:text-purple-400' 
                        : getColorClasses(plan.color, 'text')
                    } group-hover/item:scale-110 transition-transform`} />
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button 
              className={`w-full py-6 text-base font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white shadow-purple-500/50 hover:shadow-purple-600/60'
                  : plan.color === 'gradient'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-purple-500/40'
                    : `bg-gradient-to-r from-${plan.color}-600 to-${plan.color}-700 hover:from-${plan.color}-700 hover:to-${plan.color}-800 text-white ${getColorClasses(plan.color, 'shadow')}`
              }`}
              onClick={() => handleGetStarted(plan.name)}
            >
              Get Started Now →
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 relative overflow-hidden">
      {/* Enhanced animated background elements */}
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
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Simple & Transparent Pricing</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Choose Your Perfect Plan
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transparent, affordable pricing for all your creative and digital needs. 
            <span className="block mt-2 font-semibold text-blue-600 dark:text-blue-400">No hidden costs, just exceptional value.</span>
          </motion.p>
        </motion.div>

        {/* Custom Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl shadow-lg">
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                activeTab === 'creative'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Creative Services
            </button>
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                activeTab === 'tech'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Tech Development
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Digital Services
            </button>
          </div>
        </div>

        {/* Pricing Cards - Creative Services */}
        {activeTab === 'creative' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="creative"
          >
            {creativePlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </motion.div>
        )}

        {/* Pricing Cards - Tech Development */}
        {activeTab === 'tech' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="tech"
          >
            {techPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </motion.div>
        )}

        {/* Pricing Cards - Digital Services */}
        {activeTab === 'services' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key="services"
          >
            {servicePackages.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </motion.div>
        )}

        {/* Custom Solutions CTA */}
        <motion.div 
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 border-0 shadow-2xl shadow-blue-500/30">
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
                <Zap className="h-10 w-10 text-white" />
              </motion.div>
              
              <h3 className="text-3xl sm:text-4xl font-black mb-4 text-white drop-shadow-lg">
                Need a Custom Solution?
              </h3>
              
              <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every project is unique. Let's discuss your specific requirements and create a tailored package that perfectly fits your needs and budget.
                <span className="block mt-2 font-bold">Get a personalized quote within 24 hours!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    onClick={() => handleGetStarted('Custom Solution')}
                  >
                    Request Custom Quote →
                  </Button>
                </motion.div>
                
                <p className="text-sm text-blue-100 font-medium">
                  💬 Free consultation • No obligations
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
