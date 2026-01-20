import { Code, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import merchImage from '@/assets/service-merch.jpg';
import uiuxImage from '@/assets/service-uiux.jpg';
import graphicImage from '@/assets/service-graphic.jpg';
import brandImage from '@/assets/service-brand.jpg';
import strategyImage from '@/assets/service-strategy.jpg';
import contentImage from '@/assets/service-content.jpg';
import digitalImage from '@/assets/service-digital.jpg';
import socialImage from '@/assets/service-social.jpg';

const serviceCategories = [
  {
    icon: Code,
    title: 'Design & Development',
    description: 'We believe that a well-designed product creates meaningful connections between users, brands and stakeholders.',
    services: [
      { name: 'Merchandise Design', image: merchImage },
      { name: 'UI/UX Design', image: uiuxImage },
      { name: 'Graphic Design', image: graphicImage },
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'We create brands with a Stakeholder-centric style that sets them apart with visual identity and personality.',
    services: [
      { name: 'Brand Identity & Voice', image: brandImage },
      { name: 'Creative Strategy & Consulting', image: strategyImage },
      { name: 'Content & Creativity Services', image: contentImage },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Our world-class Marketing strategies empower businesses to scale their brands through targeted campaigns.',
    services: [
      { name: 'Digital Marketing', image: digitalImage },
      { name: 'Social Media Marketing', image: socialImage },
      { name: 'Content Creation', image: contentImage },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Services we offer
          </h2>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, i) => (
            <div key={i} className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-xl">
                      {category.description}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-fit shrink-0">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.services.map((service, j) => (
                  <div
                    key={j}
                    className="service-card group cursor-pointer"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 md:h-56 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h4 className="text-primary-foreground font-semibold">
                        {service.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
