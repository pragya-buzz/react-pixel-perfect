import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import testimonialAvatar from '@/assets/testimonial-avatar.jpg';

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-lg opacity-75">Real feedback from businesses we've helped grow</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 mb-4 opacity-40 shrink-0" />
              <blockquote className="text-base md:text-lg font-medium leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-primary-foreground/15">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-primary-foreground/30"
                />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs opacity-75">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
