import { motion } from 'framer-motion';
import { Cloud } from 'lucide-react';
import {
  SiReact, SiTypescript, SiNodedotjs, SiPostgresql,
  SiTailwindcss, SiNextdotjs, SiDocker,
} from 'react-icons/si';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: 'React',        icon: SiReact,       color: '#61DAFB' },
    { name: 'TypeScript',   icon: SiTypescript,  color: '#3178C6' },
    { name: 'Node.js',      icon: SiNodedotjs,   color: '#339933' },
    { name: 'Next.js',      icon: SiNextdotjs,   color: '#ffffff' },
    { name: 'PostgreSQL',   icon: SiPostgresql,  color: '#4169E1' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Docker',       icon: SiDocker,      color: '#2496ED' },
    { name: 'AWS',          icon: Cloud,         color: '#FF9900' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center">
              <span className="text-primary font-mono text-xl md:text-2xl mr-2 font-normal">02.</span>
              {t.skills.title}
            </h2>
            <div className="h-px bg-border/50 flex-grow max-w-xs" />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="group relative p-6 rounded-xl border border-border/50 bg-card hover:bg-card/80 transition-colors overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <skill.icon
                    className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = `drop-shadow(0 0 8px ${skill.color}40)`;
                      (e.currentTarget as HTMLElement).style.color = skill.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = 'grayscale(100%)';
                      (e.currentTarget as HTMLElement).style.color = '';
                    }}
                  />
                  <span className="font-mono text-sm tracking-wide">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <h4 className="text-primary font-mono mb-4">{t.skills.frontend}</h4>
              <ul className="space-y-2 text-muted-foreground font-mono">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Redux / Zustand</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-primary font-mono mb-4">{t.skills.backend}</h4>
              <ul className="space-y-2 text-muted-foreground font-mono">
                <li>Node.js / Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>GraphQL / Apollo</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-primary font-mono mb-4">{t.skills.devops}</h4>
              <ul className="space-y-2 text-muted-foreground font-mono">
                <li>Docker</li>
                <li>AWS (EC2, S3, RDS)</li>
                <li>CI/CD (GitHub Actions)</li>
                <li>Git / GitHub</li>
                <li>Jest / Cypress</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
