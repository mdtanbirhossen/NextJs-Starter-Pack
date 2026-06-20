"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

import {
  defaultLocale,
  getLanguageOption,
  isLocale,
  LANGUAGE_COOKIE,
  type Locale,
  type TextDirection,
} from "./config";
import { translations, type TranslationKey } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  dir: TextDirection;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

function setLanguageCookie(locale: Locale) {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LANGUAGE_COOKIE}=${locale}; path=/; max-age=${maxAge}; samesite=lax`;
}

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLocale?: Locale;
};

export function LanguageProvider({
  children,
  initialLocale = defaultLocale,
}: LanguageProviderProps) {
  const router = useRouter();
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale);
  const language = getLanguageOption(locale);

  React.useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = language.dir;
  }, [language.dir, locale]);

  const setLocale = React.useCallback(
    (nextLocale: Locale) => {
      if (!isLocale(nextLocale)) {
        return;
      }

      const nextLanguage = getLanguageOption(nextLocale);

      setLanguageCookie(nextLocale);
      setLocaleState(nextLocale);
      document.documentElement.lang = nextLocale;
      document.documentElement.dir = nextLanguage.dir;
      router.refresh();
    },
    [router]
  );

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: language.dir,
      setLocale,
      t: (key) => translations[locale][key] ?? translations.en[key],
    }),
    [language.dir, locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
