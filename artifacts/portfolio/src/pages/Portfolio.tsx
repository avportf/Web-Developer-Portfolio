import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Portfolio() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground relative">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Designed & Built with intent. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
