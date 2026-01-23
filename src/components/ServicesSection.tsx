import { Code, Palette, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';
import { designDevServices, brandingServices, marketingServices } from '@/data/servicesData';

const serviceCategories = [
  {
    icon: Code,
    title: 'Design & Development',
    description: 'We believe that a well-designed product creates meaningful connections between users, brands and stakeholders.',
    services: designDevServices.slice(0, 3), // Show first 3
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'We create brands with a stakeholder-centric style that sets them apart with visual identity and personality.',
    services: brandingServices,
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Our world-class Marketing strategies empower businesses to scale their brands through targeted campaigns.',
    services: marketingServices,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Services we offer
          </h2>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category, i) => (
            <motion.div 
              key={i} 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-card rounded-xl p-6 shadow-card"
              >
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
                <a href="/services">
                  <Button variant="outline" size="sm" className="w-fit shrink-0 group">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {category.services.map((service, j) => (
                  <motion.a
                    key={j}
                    href={`/services/${service.slug}`}
                    variants={staggerItem}
                    className="service-card group cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-48 md:h-56 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <service.icon className="w-12 h-12 text-primary/50" />
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h4 className="text-primary-foreground font-semibold">
                        {service.name}
                      </h4>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
