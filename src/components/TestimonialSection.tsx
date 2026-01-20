import { Quote } from 'lucide-react';
import testimonialAvatar from '@/assets/testimonial-avatar.jpg';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading leading-relaxed mb-8">
            "Tradency work and mindset represents the pinnacle of perfection 
            while still being efficient and communicative."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <img
              src={testimonialAvatar}
              alt="Michael Wilson"
              className="w-14 h-14 rounded-full object-cover border-2 border-primary-foreground/30"
            />
            <div className="text-left">
              <p className="font-semibold">Michael Wilson</p>
              <p className="text-sm opacity-75">CEO, TechVentures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
