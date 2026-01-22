import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, HelpCircle, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportSettings } from '@/lib/animations';

const faqs = [
  {
    question: "What services does Tradency offer?",
    answer: "We offer a comprehensive range of creative services including brand strategy, visual identity design, UI/UX design, web development, social media management, content creation, graphic design, and merchandise design. Our team works collaboratively to deliver integrated solutions that elevate your brand."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A brand identity project typically takes 4-8 weeks, while a full website design and development can range from 6-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific needs."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both project-based and retainer pricing models. Project pricing is determined after understanding your requirements, scope, and deliverables. For ongoing work, we offer monthly retainer packages. Contact us for a custom quote tailored to your needs."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with businesses of all sizes, from early-stage startups to established enterprises. We have tailored packages and approaches for different business stages. Whether you're launching a new venture or refreshing an existing brand, we can help."
  },
  {
    question: "What is your design process?",
    answer: "Our process typically includes: Discovery (understanding your business and goals), Strategy (defining the approach), Design (creating concepts and refining), Development (building the final product), and Launch (deployment and handover). We keep you involved at every stage with regular check-ins and feedback sessions."
  },
  {
    question: "Can you help with just one service, or do I need a full package?",
    answer: "Absolutely! While we offer comprehensive packages, we're happy to help with individual services. Whether you need just a logo refresh, a single landing page, or ongoing social media support, we can customize our offerings to match your needs."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages. This can include website updates, content creation, brand guideline enforcement, and strategic consulting. Many of our clients continue working with us on a retainer basis for ongoing needs."
  },
  {
    question: "How do we get started?",
    answer: "Getting started is easy! Simply reach out through our contact page or click 'Let's Talk' to schedule a discovery call. We'll discuss your project, goals, and how we can help. From there, we'll provide a proposal outlining scope, timeline, and investment."
  },
  {
    question: "What makes Tradency different from other agencies?",
    answer: "We combine strategic thinking with creative execution, ensuring every design decision is purposeful. Our collaborative approach means you're a partner in the process, not just a client. We pride ourselves on delivering work that not only looks great but drives real business results."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes! We work with clients globally. Our streamlined digital workflow includes video calls, collaborative tools, and regular updates to ensure seamless communication regardless of location. We've successfully delivered projects for clients across different time zones."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <HelpCircle className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
              >
                FAQ
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground"
              >
                Find answers to common questions about our services, process, and how we can help your business grow.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="pb-16 md:pb-24 overflow-hidden">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div key={index} variants={staggerItem}>
                    <AccordionItem 
                      value={`item-${index}`} 
                      className="bg-card rounded-xl px-6 shadow-card border-none"
                    >
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <motion.div 
              className="max-w-3xl mx-auto text-center bg-muted/50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
            >
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border border-primary/10 rounded-full" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-primary/10 rounded-lg rotate-12" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Still have questions?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find the answer you're looking for? Our team is here to help.
                </p>
                <a href="/contact">
                  <Button size="lg" className="group">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
