"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PanelsTopLeft, X } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/language-provider";
import type { TranslationKey } from "@/i18n/translations";

type NavItem = {
  href: string;
  label: TranslationKey;
};

const navItems: NavItem[] = [
  { href: "/", label: "home" },
  { href: "/#features", label: "features" },
  { href: "/#pricing", label: "pricing" },
  { href: "/#about", label: "about" },
  { href: "/#contact", label: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold tracking-normal"
          aria-label={t("brandName")}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <PanelsTopLeft className="size-5" aria-hidden="true" />
          </span>
          <span className="text-base">{t("brandName")}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              isActive={item.href === "/" && pathname === "/"}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link href="/login">{t("login")}</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">{t("signup")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
            <span className="sr-only">
              {isMenuOpen ? t("closeMenu") : t("openMenu")}
            </span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background md:hidden"
        >
          <nav
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile primary"
          >
            {navItems.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                isActive={item.href === "/" && pathname === "/"}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </MobileNavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-4">
              <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  {t("login")}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  {t("signup")}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  isActive,
  className,
  ...props
}: React.ComponentProps<typeof Link> & { isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        isActive && "bg-muted text-foreground",
        className
      )}
      {...props}
    />
  );
}

function MobileNavLink({
  href,
  isActive,
  className,
  ...props
}: React.ComponentProps<typeof Link> & { isActive?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex h-10 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        isActive && "bg-muted text-foreground",
        className
      )}
      {...props}
    />
  );
}
