import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/i18n/translations';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-gold">Chevar Textile</h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              {t(translations.footer.description, lang)}
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t(translations.nav.products, lang)}</h4>
            <nav className="flex flex-col gap-2">
              {[
                { to: '/', label: t(translations.nav.home, lang) },
                { to: '/products', label: t(translations.nav.products, lang) },
                { to: '/about', label: t(translations.nav.about, lang) },
                { to: '/contact', label: t(translations.nav.contact, lang) },
              ].map(item => (
                <Link key={item.to} to={item.to} className="text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t(translations.contact.title, lang)}</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span>{t(translations.contact.addressValue, lang)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-gold" />
                <span>+998 93 398 51 02</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-gold" />
                <span>Zebo8026.zm@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Chevar Textile. {t(translations.footer.rights, lang)}.
        </div>
      </div>
    </footer>
  );
}
