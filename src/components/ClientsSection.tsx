import { Sparkles, Shield, Users, Globe, Zap, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import testimonialAvatar from '@/assets/testimonial-avatar.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const clients = [
  { icon: Sparkles, name: 'Astrolab' },
  { icon: Shield, name: 'Freshteam' },
  { icon: Users, name: 'SENTRY' },
  { icon: Globe, name: 'Globalnotes' },
  { icon: Zap, name: 'InVision' },
  { icon: Sparkles, name: 'OutLiners' },
];

const testimonials = [
  {
    quote: "Tradency work and mindset represents the pinnacle of perfection while still being efficient and communicative.",
    name: 'Michael Wilson',
    role: 'CEO, TechVentures',
    avatar: testimonialAvatar,
  },
  {
    quote: "Their team transformed our digital presence completely. The attention to detail and strategic thinking exceeded all expectations.",
    name: 'Sarah Chen',
    role: 'Founder, GreenLeaf Studios',
    avatar: testimonialAvatar,
  },
  {
    quote: "Working with Diyana Tech was a game-changer for our brand. They delivered on time, on budget, and beyond our vision.",
    name: 'James Okafor',
    role: 'COO, NovaGrid Solutions',
    avatar: testimonialAvatar,
  },
];

const ClientsSection = () => {
  return (
    <motion.section
      className="py-12 md:py-20 border-y border-border bg-muted/30"
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeIn}
    >
      <div className="container">
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-center text-lg md:text-xl font-semibold text-muted-foreground mb-10"
        >
          Trusted by companies globally
        </motion.h2>

        {/* Static brand logos */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-wrap justify-center gap-8 md:gap-14 mb-14"
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <client.icon className="w-5 h-5" />
              <span className="font-semibold text-sm whitespace-nowrap">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Slidable testimonial cards */}
        <motion.div variants={fadeInUp} className="max-w-5xl mx-auto">
          <Carousel opts={{ loop: true, align: 'start' }} className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/3">
                  <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-sm">
                    <Quote className="w-8 h-8 mb-4 text-primary/40 shrink-0" />
                    <blockquote className="text-base font-medium leading-relaxed mb-6 flex-1 text-foreground">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-border"
                      />
                      <div>
                        <p className="font-semibold text-sm text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;
