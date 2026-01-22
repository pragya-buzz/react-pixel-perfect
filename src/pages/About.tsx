import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn, viewportSettings } from '@/lib/animations';
import teamImage from '@/assets/hero-team.jpg';

const values = [
  {
    icon: Target,
    title: 'Purpose-Driven',
    description: 'Every project we take on has a clear purpose. We focus on creating meaningful impact for your brand.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'We work closely with our clients, treating every partnership as a true collaboration.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, delivering work that exceeds expectations.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We embrace new technologies and creative approaches to keep your brand ahead of the curve.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '8+', label: 'Years Experience' },
  { value: '25+', label: 'Team Members' },
];

const team = [
  { name: 'Sarah Johnson', role: 'Founder & CEO', image: '/placeholder.svg' },
  { name: 'Michael Chen', role: 'Creative Director', image: '/placeholder.svg' },
  { name: 'Emily Davis', role: 'Head of Strategy', image: '/placeholder.svg' },
  { name: 'David Wilson', role: 'Lead Developer', image: '/placeholder.svg' },
];

const About = () => {
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
              <motion.span 
                variants={fadeInUp}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                About Us
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              >
                We're a team of creative thinkers & problem solvers
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Founded in 2016, Tradency has grown from a small design studio to a full-service creative agency, 
                helping brands tell their stories in the digital age.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Image Section */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <motion.div 
              className="relative rounded-2xl overflow-hidden aspect-[16/7]"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={scaleIn}
            >
              <img
                src={teamImage}
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary overflow-hidden">
          <div className="container">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {stats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  variants={staggerItem}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInLeft}
              >
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From passion project to industry leader
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    What started as a passion project in a small apartment has evolved into a 
                    thriving creative agency with a global client base. Our journey has been 
                    driven by one simple belief: great design has the power to transform businesses.
                  </p>
                  <p>
                    Over the years, we've had the privilege of working with startups, Fortune 500 
                    companies, and everything in between. Each project has taught us something new 
                    and pushed us to grow.
                  </p>
                  <p>
                    Today, our team of 25+ talented individuals continues to push boundaries, 
                    combining creativity with strategy to deliver results that matter.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={staggerContainer}
              >
                <motion.div className="space-y-4" variants={staggerItem}>
                  <div className="bg-secondary rounded-xl p-6 h-40 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">2016</span>
                  </div>
                  <div className="bg-muted rounded-xl p-6 h-48">
                    <h4 className="font-semibold text-foreground mb-2">The Beginning</h4>
                    <p className="text-sm text-muted-foreground">Started with just 2 designers and a dream to make great design accessible.</p>
                  </div>
                </motion.div>
                <motion.div className="space-y-4 mt-8" variants={staggerItem}>
                  <div className="bg-muted rounded-xl p-6 h-48">
                    <h4 className="font-semibold text-foreground mb-2">Growth Phase</h4>
                    <p className="text-sm text-muted-foreground">Expanded our services and team to meet growing client demands.</p>
                  </div>
                  <div className="bg-primary rounded-xl p-6 h-40 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground">Today</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted overflow-hidden">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What drives us forward
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values shape everything we do, from how we work with clients to how we treat each other.
              </p>
            </motion.div>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {values.map((value) => (
                <motion.div 
                  key={value.title} 
                  className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
                  variants={staggerItem}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="container">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the people behind Tradency
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse group of creative minds, strategists, and tech enthusiasts united by a passion for great work.
              </p>
            </motion.div>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={staggerContainer}
            >
              {team.map((member) => (
                <motion.div 
                  key={member.name} 
                  className="group"
                  variants={staggerItem}
                >
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-4 bg-muted">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="py-16 md:py-24 bg-primary"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
        >
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to work together?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's create something amazing. Get in touch with our team to discuss your next project.
              </p>
              <a href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
