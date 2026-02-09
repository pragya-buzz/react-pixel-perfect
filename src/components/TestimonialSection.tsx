import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, viewportSettings } from '@/lib/animations';
import testimonialAvatar from '@/assets/testimonial-avatar.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote:
      "Tradency work and mindset represents the pinnacle of perfection while still being efficient and communicative.",
    name: 'Michael Wilson',
    role: 'CEO, TechVentures',
    avatar: testimonialAvatar,
  },
  {
    quote:
      "Their team transformed our digital presence completely. The attention to detail and strategic thinking exceeded all expectations.",
    name: 'Sarah Chen',
    role: 'Founder, GreenLeaf Studios',
    avatar: testimonialAvatar,
  },
  {
    quote:
      "Working with Diyana Tech was a game-changer for our brand. They delivered on time, on budget, and beyond our vision.",
    name: 'James Okafor',
    role: 'COO, NovaGrid Solutions',
    avatar: testimonialAvatar,
  },
];

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-primary text-primary-foreground overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <div className="text-center px-4 md:px-12">
                    <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-8">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary-foreground/30"
                      />
                      <div className="text-left">
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm opacity-75">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" />
            <CarouselNext className="right-0 md:-right-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
