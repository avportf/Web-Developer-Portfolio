import { motion } from 'framer-motion';
import { ArrowLeft, Check, Globe } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { type LangCode } from '@/lib/i18n';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

export default function Languages() {
  const [, navigate] = useLocation();
  const { lang, setLang, t, enabledLangs, setEnabledLangs, allLanguages } = useLanguage();

  const toggle = (code: LangCode) => {
    if (enabledLangs.includes(code)) {
      if (enabledLangs.length === 1) return;
      const next = enabledLangs.filter((c) => c !== code);
      setEnabledLangs(next);
    } else {
      setEnabledLangs([...enabledLangs, code]);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 font-mono"
            data-testid="link-back-portfolio"
          >
            <ArrowLeft size={16} />
            {t.languages.back}
          </button>

          <div className="flex items-center gap-3 mb-3">
            <Globe size={28} className="text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t.languages.pageTitle}
            </h1>
          </div>
          <p className="text-muted-foreground mb-10">{t.languages.pageDesc}</p>

          <div className="space-y-3">
            {allLanguages.map((language, idx) => {
              const isEnabled = enabledLangs.includes(language.code);
              const isCurrent = lang === language.code;
              const isLastEnabled = isEnabled && enabledLangs.length === 1;

              return (
                <motion.div
                  key={language.code}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`flex items-center justify-between p-5 rounded-xl border transition-colors ${
                    isCurrent
                      ? 'border-primary/50 bg-primary/5'
                      : isEnabled
                      ? 'border-border/50 bg-card hover:border-border'
                      : 'border-border/30 bg-card/40 opacity-60'
                  }`}
                  data-testid={`card-language-${language.code}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl select-none" role="img" aria-label={language.name}>
                      {language.flag}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-semibold">{language.nativeName}</span>
                        <span className="text-muted-foreground text-sm">({language.name})</span>
                        {isCurrent && (
                          <Badge variant="secondary" className="text-xs px-2 py-0 font-mono">
                            <Check size={10} className="mr-1" />
                            {t.languages.currentLabel}
                          </Badge>
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {language.code}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {isEnabled && !isCurrent && (
                      <button
                        onClick={() => setLang(language.code)}
                        className="text-xs font-mono text-primary hover:underline transition-colors"
                        data-testid={`button-set-lang-${language.code}`}
                      >
                        {t.languages.currentLabel === 'Active' ? 'Set active' : t.languages.currentLabel}
                      </button>
                    )}
                    <Switch
                      checked={isEnabled}
                      onCheckedChange={() => toggle(language.code)}
                      disabled={isLastEnabled}
                      aria-label={`${isEnabled ? 'Disable' : 'Enable'} ${language.name}`}
                      data-testid={`switch-language-${language.code}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-mono text-center">
            {t.languages.tip}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
