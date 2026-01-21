import { Check, ArrowRight } from 'lucide-react';
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

export interface ServiceData {
  name: string;
  headline: string;
  subheadline: string;
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
  }[];
}

const ServicePageTemplate = ({ service, otherServices }: ServicePageTemplateProps) => {
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
                  Our Services
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                {service.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                {service.subheadline}
              </p>
              <a href="/contact">
                <Button size="lg" className="text-base">
                  Let's Talk <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Who This Service Is For
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.idealClients.map((client, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{client}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problems We Solve */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Problems We Solve
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.problems.map((problem, i) => (
                  <Card key={i} className="border-destructive/20 bg-destructive/5">
                    <CardContent className="p-6">
                      <p className="text-foreground">{problem}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                {service.solution.title}
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                {service.solution.description}
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                What's Included
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-card"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="font-medium text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Our Process
              </h2>
              <div className="space-y-8">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                        {i + 1}
                      </div>
                      {i < service.process.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/20 mt-4" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Why Choose Diyana Tech
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.whyChooseUs.map((reason, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl shadow-card"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Explore Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {otherServices.slice(0, 3).map((otherService, i) => (
                  <a
                    key={i}
                    href={otherService.href}
                    className="group block p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {otherService.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {otherService.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
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
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                {service.closingStatement}
              </h2>
              <a href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base"
                >
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
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

export default ServicePageTemplate;
