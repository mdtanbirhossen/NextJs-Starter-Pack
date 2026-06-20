"use client";

import { Languages } from "lucide-react";

import { languageOptions, type Locale } from "@/i18n/config";
import { useLanguage } from "@/i18n/language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <label className="inline-flex h-8 items-center gap-2 rounded-lg border border-border bg-background px-2 text-sm text-foreground shadow-xs">
      <Languages className="size-4 text-muted-foreground" aria-hidden="true" />
      <span className="sr-only">{t("language")}</span>
      <select
        value={locale}
        aria-label={t("language")}
        className="h-full bg-transparent text-sm font-medium outline-none"
        onChange={(event) => setLocale(event.target.value as Locale)}
      >
        {languageOptions.map((language) => (
          <option key={language.code} value={language.code}>
            {language.nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
