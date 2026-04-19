import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.png';
import project2 from '@/assets/project-2.png';
import project3 from '@/assets/project-3.png';

export default function Projects() {
  const projects = [
    {
      title: 'Nexus Dashboard',
      description: 'A comprehensive analytics dashboard for tracking user engagement and revenue metrics. Features real-time data visualization, customizable widgets, and dark/light mode support.',
      tech: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
      github: '#',
      external: '#',
      image: project1,
      reverse: false,
    },
    {
      title: 'Aura Commerce',
      description: 'A headless e-commerce storefront built for high performance and conversion. Includes a custom cart implementation, Stripe integration, and Algolia search.',
      tech: ['Next.js', 'Stripe', 'Sanity', 'Zustand'],
      github: '#',
      external: '#',
      image: project2,
      reverse: true,
    },
    {
      title: 'FinTrack Mobile',
      description: 'A cross-platform mobile application for personal finance management. Syncs securely with bank accounts using Plaid API and provides ML-driven spending insights.',
      tech: ['React Native', 'Node.js', 'PostgreSQL', 'Plaid API'],
      github: '#',
      external: '#',
      image: project3,
      reverse: false,
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center">
              <span className="text-primary font-mono text-xl md:text-2xl mr-2 font-normal">03.</span>
              Some Things I've Built
            </h2>
            <div className="h-px bg-border/50 flex-grow max-w-xs"></div>
          </div>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-12 gap-8 items-center ${project.reverse ? 'rtl' : ''}`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 relative group rounded-xl overflow-hidden border border-border/50 ${project.reverse ? 'md:col-start-6 md:col-end-13 md:row-start-1' : 'md:col-start-1 md:col-end-8'}`}>
                <a href={project.external} className="block relative aspect-video" data-testid={`link-project-img-${idx}`}>
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </a>
              </div>

              {/* Project Content */}
              <div className={`md:col-span-6 relative z-20 ${project.reverse ? 'md:col-start-1 md:col-end-7 md:text-left' : 'md:col-start-7 md:col-end-13 md:text-right'} p-6 md:p-0 bg-card/90 md:bg-transparent rounded-xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none border border-border/50 md:border-none`}>
                <p className="font-mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-6 text-foreground hover:text-primary transition-colors">
                  <a href={project.external} data-testid={`link-project-title-${idx}`}>{project.title}</a>
                </h3>
                
                <div className={`md:bg-card md:border md:border-border/50 md:p-6 md:rounded-xl md:shadow-lg mb-6 text-muted-foreground ${project.reverse ? '' : 'md:-ml-12'} relative z-30`}>
                  <p>{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 font-mono text-sm text-muted-foreground mb-8 ${project.reverse ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-4 ${project.reverse ? 'justify-start' : 'md:justify-end'}`}>
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-github-${idx}`}>
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-project-external-${idx}`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
