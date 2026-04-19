import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { type LangCode, type Translation, translations, LANGUAGES } from '@/lib/i18n';

const STORAGE_KEY_LANG = 'portfolio_lang';
const STORAGE_KEY_ENABLED = 'portfolio_enabled_langs';

interface LanguageContextValue {
  lang: LangCode;
  setLang: (code: LangCode) => void;
  t: Translation;
  enabledLangs: LangCode[];
  setEnabledLangs: (langs: LangCode[]) => void;
  allLanguages: typeof LANGUAGES;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): LangCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_LANG) as LangCode | null;
    if (stored && stored in translations) return stored;
    const browser = navigator.language.split('-')[0] as LangCode;
    if (browser in translations) return browser;
  } catch {}
  return 'en';
}

function getInitialEnabled(): LangCode[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY_ENABLED);
    if (stored) {
      const parsed = JSON.parse(stored) as LangCode[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {}
  return LANGUAGES.map((l) => l.code);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(getInitialLang);
  const [enabledLangs, setEnabledLangsState] = useState<LangCode[]>(getInitialEnabled);

  const setLang = (code: LangCode) => {
    setLangState(code);
    try { localStorage.setItem(STORAGE_KEY_LANG, code); } catch {}
  };

  const setEnabledLangs = (langs: LangCode[]) => {
    if (langs.length === 0) return;
    setEnabledLangsState(langs);
    if (!langs.includes(lang)) setLang(langs[0]);
    try { localStorage.setItem(STORAGE_KEY_ENABLED, JSON.stringify(langs)); } catch {}
  };

  useEffect(() => {
    if (!enabledLangs.includes(lang)) {
      setLang(enabledLangs[0]);
    }
  }, [enabledLangs, lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang], enabledLangs, setEnabledLangs, allLanguages: LANGUAGES }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
