import { Check, ArrowRight, Target, Users, Lightbulb, Package, Workflow, Shield, HelpCircle, Sparkles, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, Variants } from 'framer-motion';

export interface ServiceData {
  name: string;
  headline: string;
  subheadline: string;
  icon?: LucideIcon;
  idealClients: string[];
  problems: string[];
  solution: {
    title: string;
    description: string;
  };
  deliverables: string[];
  process: {
    step: string;
    description: string;
  }[];
  whyChooseUs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  closingStatement: string;
}

interface ServicePageTemplateProps {
  service: ServiceData;
  otherServices: {
    name: string;
    description: string;
    href: string;
    icon?: LucideIcon;
  }[];
}

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Section icons mapping
const sectionIcons = {
  idealClients: Users,
  problems: Target,
  solution: Lightbulb,
  deliverables: Package,
  process: Workflow,
  whyChooseUs: Shield,
  faqs: HelpCircle,
};

// Decorative geometric shapes component
const DecorativeShapes = ({ variant = 'default' }: { variant?: 'default' | 'alt' | 'accent' }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    {variant === 'default' && (
      <>
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-primary/3 rounded-full blur-2xl" />
      </>
    )}
    {variant === 'alt' && (
      <>
        <div className="absolute top-0 left-[20%] w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute bottom-10 right-[15%] w-24 h-24 border border-primary/5 rounded-lg rotate-45" />
      </>
    )}
    {variant === 'accent' && (
      <>
        <div className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
      </>
    )}
  </div>
);

const ServicePageTemplate = ({ service, otherServices }: ServicePageTemplateProps) => {
  const ServiceIcon = service.icon || Sparkles;
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
          <DecorativeShapes variant="default" />
          <div className="container relative">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ServiceIcon className="w-6 h-6 text-primary" />
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Our Services
                </span>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
              >
                {service.headline}
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                {service.subheadline}
              </motion.p>
              <motion.div variants={scaleIn}>
                <a href="/contact">
                  <Button size="lg" className="text-base group">
                    Let's Talk 
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <DecorativeShapes variant="alt" />
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Who This Service Is For
                </h2>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4 mt-8"
              >
                {service.idealClients.map((client, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{client}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="relative py-16 md:py-20 bg-muted/30 overflow-hidden">
          <DecorativeShapes variant="accent" />
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-destructive" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Problems We Solve
                </h2>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-6 mt-8"
              >
                {service.problems.map((problem, i) => (
                  <motion.div key={i} variants={staggerItem}>
                    <Card className="border-destructive/20 bg-destructive/5 h-full hover:border-destructive/30 transition-colors duration-300">
                      <CardContent className="p-6 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                          <span className="text-destructive font-semibold text-sm">{i + 1}</span>
                        </div>
                        <p className="text-foreground">{problem}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.solution.title}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  {service.solution.description}
                </p>
              </motion.div>
              {/* Abstract visual element */}
              <motion.div 
                variants={scaleIn}
                className="mt-12 flex justify-center gap-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/20 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-16 h-1 bg-gradient-to-r from-primary/60 to-primary/10 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                  <div className="w-12 h-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What's Included */}
        <section className="relative py-16 md:py-20 bg-muted/30 overflow-hidden">
          <DecorativeShapes variant="default" />
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  What's Included
                </h2>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4"
              >
                {service.deliverables.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="font-medium text-foreground">{item}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-12">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Our Process
                </h2>
              </motion.div>
              <motion.div variants={staggerContainer} className="space-y-0">
                {service.process.map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={staggerItem}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0 shadow-lg">
                        {i + 1}
                      </div>
                      {i < service.process.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-primary/40 to-primary/10 mt-4" />
                      )}
                    </div>
                    <div className="pb-10">
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="relative py-16 md:py-20 bg-muted/30 overflow-hidden">
          <DecorativeShapes variant="alt" />
          <div className="container relative">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Why Choose Diyana Tech
                </h2>
              </motion.div>
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-4"
              >
                {service.whyChooseUs.map((reason, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Other Services */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div className="container relative">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
              >
                Explore Our Services
              </motion.h2>
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {otherServices.slice(0, 3).map((otherService, i) => {
                  const OtherServiceIcon = otherService.icon || Sparkles;
                  return (
                    <motion.a
                      key={i}
                      href={otherService.href}
                      variants={staggerItem}
                      className="group block p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <OtherServiceIcon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {otherService.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {otherService.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Learn More 
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-16 md:py-20 bg-muted/30 overflow-hidden">
          <DecorativeShapes variant="accent" />
          <div className="container relative">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
              </motion.div>
              <motion.div variants={staggerContainer}>
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faqs.map((faq, i) => (
                    <motion.div key={i} variants={staggerItem}>
                      <AccordionItem
                        value={`faq-${i}`}
                        className="bg-card rounded-xl px-6 shadow-card border-none"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <motion.section 
          className="py-16 md:py-24 bg-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  {service.closingStatement}
                </h2>
                <a href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-base group"
                  >
                    Get Started 
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
