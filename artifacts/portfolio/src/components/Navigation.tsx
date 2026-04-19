import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';
import { Globe, ChevronDown, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { LangCode } from '@/lib/i18n';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const { lang, setLang, t, enabledLangs, allLanguages } = useLanguage();

  const navItems = [
    { id: 'about',      label: t.nav.about },
    { id: 'skills',     label: t.nav.skills },
    { id: 'projects',   label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact',    label: t.nav.contact },
  ];

  const visibleLanguages = allLanguages.filter((l) => enabledLangs.includes(l.code));
  const currentLang = allLanguages.find((l) => l.code === lang);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['hero', ...navItems.map((item) => item.id)];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const selectLang = (code: LangCode) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="font-mono font-bold text-xl tracking-tighter hover:text-primary transition-colors"
          data-testid="link-home"
        >
          <span className="text-primary">&lt;</span>dev<span className="text-primary">/&gt;</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
              }`}
              data-testid={`link-nav-${item.id}`}
            >
              <span className="text-primary/50 text-xs mr-1 font-mono">0{idx + 1}.</span>
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="h-0.5 bg-primary mt-1"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language switcher — only show if more than one language is enabled */}
          {visibleLanguages.length > 1 && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono px-2 py-1 rounded-md hover:bg-primary/5"
                data-testid="button-lang-switcher"
                aria-label="Switch language"
              >
                <Globe size={15} />
                <span>{currentLang?.flag}</span>
                <span className="uppercase text-xs tracking-widest">{lang}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-card border border-border/50 rounded-xl shadow-xl overflow-hidden z-50"
                    data-testid="dropdown-lang"
                  >
                    {visibleLanguages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => selectLang(language.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-primary/10 ${
                          lang === language.code ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                        }`}
                        data-testid={`button-select-lang-${language.code}`}
                      >
                        <span className="text-base">{language.flag}</span>
                        <span className="font-medium">{language.nativeName}</span>
                        {lang === language.code && (
                          <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                    <div className="border-t border-border/50">
                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors font-mono"
                        onClick={() => { setLangOpen(false); navigate('/languages'); }}
                        data-testid="link-manage-languages"
                      >
                        <Settings size={12} />
                        {t.nav.manageLanguages}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Show globe icon linking to /languages even when only one language enabled */}
          {visibleLanguages.length === 1 && (
            <button
              onClick={() => navigate('/languages')}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              data-testid="link-languages-icon"
              aria-label={t.nav.manageLanguages}
            >
              <Globe size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
