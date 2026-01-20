import { Zap, Shield, HeartHandshake, Clock } from 'lucide-react';

const features = [
  { icon: Zap, label: 'Experienced Delivery' },
  { icon: Shield, label: 'Industry Compliant Security' },
  { icon: HeartHandshake, label: 'Always Client-Focused' },
  { icon: Clock, label: 'Results Oriented' },
];

const PowerSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                About Company
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              We're leading The Power Of Technology
            </h2>

            <p className="text-muted-foreground">
              As a team at Tradency, Web Development Company, we help you develop ideas, 
              innovate disruptively, collaborate to develop fully functional digital 
              products and platforms using an Agile Methodology that enables quick and 
              reliable deliveries with a focus on maximizing value and minimizing waste.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <div className="text-6xl md:text-7xl font-bold mb-2">12+</div>
              <p className="text-lg opacity-90">years of experience</p>
              <p className="text-sm opacity-75 mt-4">
                Delivering exceptional digital solutions for businesses worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerSection;
