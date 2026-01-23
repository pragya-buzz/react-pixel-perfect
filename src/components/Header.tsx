import { useState } from 'react';
import { Menu, X, ChevronDown, Code, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { designDevServices, brandingServices, marketingServices } from '@/data/servicesData';

const navItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'FAQ', href: '/faq' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="text-xl md:text-2xl font-bold text-foreground">
          Tradency
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </a>
          
          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Design & Development Column */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                          <Code className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">Design & Development</span>
                        </div>
                        <ul className="space-y-2">
                          {designDevServices.map((service) => (
                            <li key={service.slug}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={`/services/${service.slug}`}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Branding & Strategy Column */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                          <Palette className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">Branding & Strategy</span>
                        </div>
                        <ul className="space-y-2">
                          {brandingServices.map((service) => (
                            <li key={service.slug}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={`/services/${service.slug}`}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Growth & Marketing Column */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">Growth & Marketing</span>
                        </div>
                        <ul className="space-y-2">
                          {marketingServices.map((service) => (
                            <li key={service.slug}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={`/services/${service.slug}`}
                                  className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* View All Services Link */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href="/services"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        View All Services →
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/#projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href="/#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
          <a
            href="/faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <a href="/contact">
            <Button size="sm">Let's Talk</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="container py-4 flex flex-col gap-2">
            <a
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            
            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-4 py-2 space-y-4">
                  {/* Design & Development */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Design & Development</span>
                    </div>
                    <div className="pl-5 space-y-1">
                      {designDevServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Branding & Strategy */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Palette className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Branding & Strategy</span>
                    </div>
                    <div className="pl-5 space-y-1">
                      {brandingServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Growth & Marketing */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="text-xs font-semibold text-foreground">Growth & Marketing</span>
                    </div>
                    <div className="pl-5 space-y-1">
                      {marketingServices.map((service) => (
                        <a
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/services"
                    className="block text-sm font-medium text-primary py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services →
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="/#testimonials"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="/faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </a>
            <a href="/contact" className="mt-2">
              <Button size="sm" className="w-fit">Let's Talk</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
