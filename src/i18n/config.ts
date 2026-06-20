export const LANGUAGE_COOKIE = "NEXT_LOCALE";

export const locales = ["en", "bn", "ur", "hi"] as const;

export type Locale = (typeof locales)[number];

export type TextDirection = "ltr" | "rtl";

export type LanguageOption = {
  code: Locale;
  label: string;
  nativeLabel: string;
  dir: TextDirection;
};

export const defaultLocale: Locale = "en";

export const languageOptions: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    dir: "ltr",
  },
  {
    code: "bn",
    label: "Bangla",
    nativeLabel: "বাংলা",
    dir: "ltr",
  },
  {
    code: "ur",
    label: "Urdu",
    nativeLabel: "اردو",
    dir: "rtl",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिन्दी",
    dir: "ltr",
  },
];

export function isLocale(value: string | undefined): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export function getLanguageOption(locale: Locale) {
  return (
    languageOptions.find((language) => language.code === locale) ??
    languageOptions[0]
  );
}
