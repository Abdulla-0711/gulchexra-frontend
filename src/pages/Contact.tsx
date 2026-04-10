import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/i18n/translations';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function Contact() {
  const { lang } = useLanguage();

  const info = [
    { icon: MapPin, label: t(translations.contact.address, lang), value: t(translations.contact.addressValue, lang) },
    { icon: Clock, label: t(translations.contact.hours, lang), value: translations.contact.hoursValue.uz },
    { icon: Phone, label: t(translations.contact.phone, lang), value: '+998 93 398 51 02\n+998 93 572 00 06\n+998 94 802 66 62' },
    { icon: Mail, label: t(translations.contact.email, lang), value: 'Zebo8026.zm@gmail.com' },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold mb-10"
        >
          {t(translations.contact.title, lang)}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {info.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
