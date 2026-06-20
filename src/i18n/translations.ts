import type { Locale } from "./config";

export const translations = {
  en: {
    language: "Language",
    brandName: "Acme",
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    login: "Login",
    signup: "Sign up",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  bn: {
    language: "\u09ad\u09be\u09b7\u09be",
    brandName: "Acme",
    home: "\u09b9\u09cb\u09ae",
    features: "\u09ab\u09bf\u099a\u09be\u09b0",
    pricing: "\u09ae\u09c2\u09b2\u09cd\u09af",
    about:
      "\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7",
    contact: "\u09af\u09cb\u0997\u09be\u09af\u09cb\u0997",
    login: "\u09b2\u0997\u0987\u09a8",
    signup: "\u09b8\u09be\u0987\u09a8 \u0986\u09aa",
    openMenu: "\u09ae\u09c7\u09a8\u09c1 \u0996\u09c1\u09b2\u09c1\u09a8",
    closeMenu:
      "\u09ae\u09c7\u09a8\u09c1 \u09ac\u09a8\u09cd\u09a7 \u0995\u09b0\u09c1\u09a8",
  },
  ur: {
    language: "\u0632\u0628\u0627\u0646",
    brandName: "Acme",
    home: "\u06c1\u0648\u0645",
    features: "\u0641\u06cc\u0686\u0631\u0632",
    pricing: "\u0642\u06cc\u0645\u062a\u06cc\u06ba",
    about:
      "\u06c1\u0645\u0627\u0631\u06d2 \u0628\u0627\u0631\u06d2 \u0645\u06cc\u06ba",
    contact: "\u0631\u0627\u0628\u0637\u06c1",
    login: "\u0644\u0627\u06af \u0627\u0646",
    signup: "\u0633\u0627\u0626\u0646 \u0627\u067e",
    openMenu: "\u0645\u06cc\u0646\u0648 \u06a9\u06be\u0648\u0644\u06cc\u06ba",
    closeMenu:
      "\u0645\u06cc\u0646\u0648 \u0628\u0646\u062f \u06a9\u0631\u06cc\u06ba",
  },
  hi: {
    language: "\u092d\u093e\u0937\u093e",
    brandName: "Acme",
    home: "\u0939\u094b\u092e",
    features: "\u092b\u0940\u091a\u0930\u094d\u0938",
    pricing: "\u092a\u094d\u0930\u093e\u0907\u0938\u093f\u0902\u0917",
    about:
      "\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902",
    contact: "\u0938\u0902\u092a\u0930\u094d\u0915",
    login: "\u0932\u0949\u0917\u093f\u0928",
    signup: "\u0938\u093e\u0907\u0928 \u0905\u092a",
    openMenu: "\u092e\u0947\u0928\u0942 \u0916\u094b\u0932\u0947\u0902",
    closeMenu:
      "\u092e\u0947\u0928\u0942 \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["en"];
