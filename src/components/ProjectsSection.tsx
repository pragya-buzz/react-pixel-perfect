import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import project1 from '@/assets/project-branding.jpg';
import project2 from '@/assets/project-ux.jpg';
import project3 from '@/assets/project-webapp.jpg';

const projects = [
  {
    title: 'Branding & Digital Marketing',
    description: 'A complete rebrand for a Fortune 500 company including digital marketing strategy.',
    tags: ['Branding', 'Marketing'],
    image: project1,
    align: 'right',
  },
  {
    title: 'Holistic User Experience Design',
    description: 'Enterprise UX redesign focusing on user research and interface optimization.',
    tags: ['UX Design', 'Research'],
    image: project2,
    align: 'left',
  },
  {
    title: 'Cross-Platform Web Application',
    description: 'Full-stack development of a scalable SaaS platform for enterprise clients.',
    tags: ['Development', 'SaaS'],
    image: project3,
    align: 'right',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Projects</Badge>
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Our latest best projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Take a look at our most recent design & development projects
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                project.align === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={project.align === 'left' ? 'md:order-2' : ''}>
                <div className="rounded-2xl overflow-hidden shadow-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
              
              <div className={`space-y-4 ${project.align === 'left' ? 'md:order-1' : ''}`}>
                <div className="flex gap-2">
                  {project.tags.map((tag, j) => (
                    <Badge key={j} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-heading font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <button className="flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                  View Project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
