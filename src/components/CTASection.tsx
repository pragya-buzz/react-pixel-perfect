import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ctaImage from '@/assets/cta-team.jpg';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-primary text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to work on your project?
            </h2>
            <p className="opacity-90 text-lg max-w-md">
              Let's collaborate to create exceptional digital experiences. 
              We're here to help you succeed with innovative solutions.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-primary"
            >
              Let's Talk <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={ctaImage}
                alt="Team collaboration"
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
