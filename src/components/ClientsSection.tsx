import { Sparkles, Shield, Users, Globe, Zap } from 'lucide-react';

const clients = [
  { icon: Sparkles, name: 'Astrolab' },
  { icon: Shield, name: 'Freshteam' },
  { icon: Users, name: 'SENTRY' },
  { icon: Globe, name: 'Globalnotes' },
  { icon: Zap, name: 'InVision' },
  { icon: Sparkles, name: 'OutLiners' },
];

const ClientsSection = () => {
  return (
    <section className="py-8 border-y border-border bg-muted/30">
      <div className="container">
        <div className="flex items-center gap-8 overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-muted-foreground shrink-0"
              >
                <client.icon className="w-5 h-5" />
                <span className="font-semibold text-sm whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
