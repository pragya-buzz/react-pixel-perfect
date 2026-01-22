import { Zap, Shield, HeartHandshake, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';

const features = [
  { icon: Zap, label: 'Experienced Delivery' },
  { icon: Shield, label: 'Industry Compliant Security' },
  { icon: HeartHandshake, label: 'Always Client-Focused' },
  { icon: Clock, label: 'Results Oriented' },
];

const PowerSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                About Company
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold">
              We're leading The Power Of Technology
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground">
              As a team at Tradency, Web Development Company, we help you develop ideas, 
              innovate disruptively, collaborate to develop fully functional digital 
              products and platforms using an Agile Methodology that enables quick and 
              reliable deliveries with a focus on maximizing value and minimizing waste.
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={staggerItem}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
          >
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <motion.div 
                className="text-6xl md:text-7xl font-bold mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              >
                12+
              </motion.div>
              <p className="text-lg opacity-90">years of experience</p>
              <p className="text-sm opacity-75 mt-4">
                Delivering exceptional digital solutions for businesses worldwide
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-lg rotate-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
