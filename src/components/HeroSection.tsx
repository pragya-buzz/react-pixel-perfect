import { Play, Star, Users, FolderCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-team.jpg';

const stats = [
  { icon: Star, value: '3+', label: 'Years of experience' },
  { icon: Users, value: 'Trusted by 50+', label: 'business' },
  { icon: FolderCheck, value: '20+', label: 'Completed Projects' },
];

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Top-rated Digital Agency
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Let's build the{' '}
              <span className="text-gradient">next big thing</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-lg">
              Tradency has built over 15+ innovative platforms, web & mobile applications 
              using every technology feasible to turn your vision into reality.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">Let's Talk</Button>
              <button className="flex items-center gap-3 text-sm font-medium group">
                <span className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Play size={16} className="ml-0.5" />
                </span>
                Watch how we work
              </button>
            </div>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Team collaboration"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card rounded-xl shadow-card p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Global offline</p>
                  <p className="font-semibold text-sm">Service Provider</p>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="absolute -right-4 md:-right-8 top-1/4 bg-card rounded-xl shadow-card p-4 border border-border space-y-3">
              {stats.slice(1).map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
