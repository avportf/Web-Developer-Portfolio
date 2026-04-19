import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const COMPANIES = ['Upstatement', 'Scout', 'Apple'];
const PERIODS = ['May 2018 - Present', 'January 2016 - April 2018', 'July - December 2017'];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center">
              <span className="text-primary font-mono text-xl md:text-2xl mr-2 font-normal">04.</span>
              {t.experience.title}
            </h2>
            <div className="h-px bg-border/50 flex-grow max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[300px]">
            <div className="flex overflow-x-auto md:flex-col border-b md:border-b-0 md:border-l border-border/50 md:min-w-[150px] hide-scrollbar scroll-smooth">
              {COMPANIES.map((company, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-4 md:py-3 font-mono text-sm whitespace-nowrap md:whitespace-normal transition-all relative
                    ${activeTab === idx ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                  data-testid={`tab-experience-${idx}`}
                >
                  {activeTab === idx && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 md:h-full md:w-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  {company}
                </button>
              ))}
            </div>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-medium mb-2">
                    {t.experience.roles[activeTab]}{' '}
                    <span className="text-primary">
                      @ <a href="#" className="hover:underline">{COMPANIES[activeTab]}</a>
                    </span>
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground mb-6">{PERIODS[activeTab]}</p>

                  <ul className="space-y-4">
                    {t.experience.duties[activeTab].map((duty, idx) => (
                      <li key={idx} className="relative pl-6 text-muted-foreground leading-relaxed">
                        <span className="absolute left-0 top-2 w-2 h-2 text-primary font-mono leading-none">▹</span>
                        {duty}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
