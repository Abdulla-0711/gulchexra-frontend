import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/i18n/translations';

export default function FAQ() {
  const { lang } = useLanguage();

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold mb-10"
        >
          {t(translations.faq.title, lang)}
        </motion.h1>

        <div className="max-w-2xl mx-auto space-y-4">
          {translations.faq.items.map((item, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="group p-5 rounded-xl border bg-card hover:shadow-sm transition-shadow"
            >
              <summary className="flex items-center justify-between cursor-pointer font-display font-semibold list-none">
                {t(item.q, lang)}
                <span className="text-accent transition-transform group-open:rotate-45 text-xl ml-4 shrink-0">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t(item.a, lang)}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  );
}
