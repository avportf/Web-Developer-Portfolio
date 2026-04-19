import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center">
              <span className="text-primary font-mono text-xl md:text-2xl mr-2 font-normal">01.</span>
              {t.about.title}
            </h2>
            <div className="h-px bg-border/50 flex-grow max-w-xs" />
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="md:col-span-2 relative group">
              <div className="relative rounded-lg overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500 bg-card aspect-square max-w-xs mx-auto">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <div className="w-full h-full flex flex-col p-4 bg-[#1e1e1e] font-mono text-sm leading-relaxed overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-primary">const</span> <span className="text-blue-400">developer</span> = {'{'}
                  <div className="pl-4">
                    <span className="text-foreground">name:</span> <span className="text-green-400">'Alex Chen'</span>,<br />
                    <span className="text-foreground">role:</span> <span className="text-green-400">'Full Stack'</span>,<br />
                    <span className="text-foreground">location:</span> <span className="text-green-400">'San Francisco'</span>,<br />
                    <span className="text-foreground">coffee:</span> <span className="text-purple-400">true</span>,<br />
                    <span className="text-foreground">sleep:</span> <span className="text-purple-400">false</span>,<br />
                    <span className="text-foreground">hobbies:</span> {'['}<br />
                    <div className="pl-4">
                      <span className="text-green-400">'mechanical keyboards'</span>,<br />
                      <span className="text-green-400">'bouldering'</span>,<br />
                      <span className="text-green-400">'indie games'</span>
                    </div>
                    {']'}
                  </div>
                  {'}'};
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
