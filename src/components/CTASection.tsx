import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, viewportSettings } from '@/lib/animations';
import ctaImage from '@/assets/cta-team.jpg';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-primary text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInLeft}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center"
            >
              <Sparkles className="w-7 h-7 text-primary-foreground" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to work on your project?
            </h2>
            <p className="opacity-90 text-lg max-w-md">
              Let's collaborate to create exceptional digital experiences. 
              We're here to help you succeed with innovative solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="text-primary group"
              >
                Let's Talk <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInRight}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={ctaImage}
                alt="Team collaboration"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-primary-foreground/20 rounded-lg rotate-12" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
