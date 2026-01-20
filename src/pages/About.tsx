import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Target, Award, Sparkles, ArrowRight } from 'lucide-react';
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
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                We're a team of creative thinkers & problem solvers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Founded in 2016, Tradency has grown from a small design studio to a full-service creative agency, 
                helping brands tell their stories in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/7]">
              <img
                src={teamImage}
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
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
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-secondary rounded-xl p-6 h-40 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary">2016</span>
                  </div>
                  <div className="bg-muted rounded-xl p-6 h-48">
                    <h4 className="font-semibold text-foreground mb-2">The Beginning</h4>
                    <p className="text-sm text-muted-foreground">Started with just 2 designers and a dream to make great design accessible.</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-muted rounded-xl p-6 h-48">
                    <h4 className="font-semibold text-foreground mb-2">Growth Phase</h4>
                    <p className="text-sm text-muted-foreground">Expanded our services and team to meet growing client demands.</p>
                  </div>
                  <div className="bg-primary rounded-xl p-6 h-40 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary-foreground">Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What drives us forward
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values shape everything we do, from how we work with clients to how we treat each other.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-background rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-full">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the people behind Tradency
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse group of creative minds, strategists, and tech enthusiasts united by a passion for great work.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div key={member.name} className="group">
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
                Ready to work together?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Let's create something amazing. Get in touch with our team to discuss your next project.
              </p>
              <Button size="lg" variant="secondary" className="group">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
