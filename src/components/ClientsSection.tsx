import { Sparkles, Shield, Users, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, viewportSettings } from '@/lib/animations';

const clients = [
  { icon: Sparkles, name: 'Astrolab' },
  { icon: Shield, name: 'Freshteam' },
  { icon: Users, name: 'SENTRY' },
  { icon: Globe, name: 'Globalnotes' },
  { icon: Zap, name: 'InVision' },
  { icon: Sparkles, name: 'OutLiners' },
];

const ClientsSection = () => {
  return (
    <motion.section 
      className="py-12 md:py-16 border-y border-border bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn}
    >
      <div className="container">
        <motion.h2 
          variants={fadeInUp}
          className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-10"
        >
          Trusted by companies globally
        </motion.h2>
        <div className="flex items-center gap-8 overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-muted-foreground shrink-0"
              >
                <client.icon className="w-5 h-5" />
                <span className="font-semibold text-sm whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;
