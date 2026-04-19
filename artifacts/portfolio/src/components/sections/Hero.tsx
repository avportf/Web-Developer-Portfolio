import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.png';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-20" />
        <img src={heroBg} alt="Abstract Code Background" className="w-full h-full object-cover opacity-30" />
      </div>

      <div className="absolute inset-0 z-20 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl"
        >
          <div className="font-mono text-primary mb-4" data-testid="text-hero-greeting">{t.hero.greeting}</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4" data-testid="text-hero-name">
            Alex <span className="text-primary">Chen</span>.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6" data-testid="text-hero-role">
            {t.hero.role}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed" data-testid="text-hero-bio">
            {t.hero.bio}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="font-mono font-medium hover-elevate-2 transition-all duration-300"
              onClick={() => scrollTo('projects')}
              data-testid="button-view-work"
            >
              {t.hero.ctaWork}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-mono font-medium hover-elevate-2 transition-all duration-300 border-primary/20 hover:border-primary/50 text-foreground"
              onClick={() => scrollTo('contact')}
              data-testid="button-contact"
            >
              {t.hero.ctaContact}
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-github">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-linkedin">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-social-twitter">
              <Twitter size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 animate-bounce"
      >
        <button onClick={() => scrollTo('about')} className="text-muted-foreground hover:text-primary transition-colors" data-testid="button-scroll-down">
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  );
}
