import { Play, Star, Users, FolderCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn, viewportSettings } from '@/lib/animations';
import heroImage from '@/assets/hero-team.jpg';

const stats = [
  { icon: Star, value: '3+', label: 'Years of experience' },
  { icon: Users, value: 'Trusted by 50+', label: 'business' },
  { icon: FolderCheck, value: '20+', label: 'Completed Projects' },
];

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      <div className="container">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Top-rated Digital Agency
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Let's build the{' '}
              <span className="text-gradient">next big thing</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-muted-foreground text-lg max-w-lg"
            >
              Tradency has built over 15+ innovative platforms, web & mobile applications 
              using every technology feasible to turn your vision into reality.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Button size="lg" className="group">
                Let's Talk
              </Button>
              <button className="flex items-center gap-3 text-sm font-medium group">
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Play size={16} className="ml-0.5" />
                </span>
                Watch how we work
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Stats */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-card"
              variants={scaleIn}
            >
              <img
                src={heroImage}
                alt="Team collaboration"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </motion.div>

            {/* Stats Cards */}
            <motion.div 
              className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-xl shadow-card p-4 border border-border"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Global offline</p>
                  <p className="font-semibold text-sm">Service Provider</p>
                </div>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div 
              className="absolute -right-4 md:-right-8 top-1/4 bg-card rounded-xl shadow-card p-4 border border-border space-y-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {stats.slice(1).map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
