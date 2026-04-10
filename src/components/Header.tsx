import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ShoppingCart, Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useCart } from "@/contexts/CartContext";
import { translations, t } from "@/i18n/translations";
import type { Language } from "@/i18n/translations";
import logo from "@/assets/logo.png";

const languages: { code: Language; label: string }[] = [
  { code: "uz", label: "O'z" },
  { code: "en", label: "En" },
  { code: "ru", label: "Ру" },
];

export default function Header() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: "/", label: t(translations.nav.home, lang) },
    { to: "/products", label: t(translations.nav.products, lang) },
    { to: "/about", label: t(translations.nav.about, lang) },
    { to: "/faq", label: t(translations.nav.faq, lang) },
    { to: "/contact", label: t(translations.nav.contact, lang) },
  ];

  return (
    <header className="sticky top-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logo}
                alt="ChevarCollection"
                className="h-10 w-auto lg:h-12 object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-base lg:text-lg font-bold tracking-wide text-foreground">
                Chevar
              </span>
              <span className="text-xs lg:text-sm text-accent font-medium tracking-[0.2em] uppercase">
                Collection
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-body text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === item.to
                    ? "text-accent"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-1.5 rounded-md text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {languages.find((l) => l.code === lang)?.label}
                </span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 bg-popover border rounded-lg shadow-lg overflow-hidden"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-accent/10 transition-colors ${
                          lang === l.code
                            ? "text-accent font-semibold"
                            : "text-foreground/70"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-foreground/70 hover:text-foreground transition-colors"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            <Link
              to="/cart"
              className="relative p-2 rounded-md text-foreground/70 hover:text-foreground transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-foreground/70"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-sm font-medium py-2 transition-colors ${
                    location.pathname === item.to
                      ? "text-accent"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
