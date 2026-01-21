import { ArrowRight, Code, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allServices } from '@/data/servicesData';

const serviceCategories = [
  {
    icon: Code,
    title: 'Design & Development',
    description: 'We believe that a well-designed product creates meaningful connections between users, brands and stakeholders.',
    services: allServices.filter(s => ['ui-ux-design', 'graphic-design', 'merchandise-design'].includes(s.slug)),
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'We create brands with a stakeholder-centric style that sets them apart with visual identity and personality.',
    services: allServices.filter(s => ['brand-identity', 'creative-strategy', 'content-services'].includes(s.slug)),
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Our world-class marketing strategies empower businesses to scale their brands through targeted campaigns.',
    services: allServices.filter(s => ['digital-marketing', 'social-media-marketing'].includes(s.slug)),
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  What We Do
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                From brand strategy to digital execution, we provide end-to-end creative solutions that drive real business results.
              </p>
              <a href="/contact">
                <Button size="lg" className="text-base">
                  Start a Project <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-20">
              {serviceCategories.map((category, i) => (
                <div key={i} className="space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 bg-card rounded-xl p-6 shadow-card">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                        <p className="text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, j) => (
                      <a
                        key={j}
                        href={`/services/${service.slug}`}
                        className="group block p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-transparent hover:border-primary/20"
                      >
                        <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-primary">
                          Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Not sure which service you need?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's have a conversation about your goals. We'll help you find the right solution for your business.
              </p>
              <a href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base"
                >
                  Get in Touch <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
