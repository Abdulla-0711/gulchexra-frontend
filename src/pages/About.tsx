import { motion } from 'framer-motion';
import { Shield, Sparkles, Truck, Palette, Globe, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, t } from '@/i18n/translations';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6 },
};

export default function About() {
  const { lang } = useLanguage();

  const advantages = [
    { icon: Shield, ...translations.whyUs.quality },
    { icon: Sparkles, ...translations.whyUs.attention },
    { icon: Truck, ...translations.whyUs.delivery },
    { icon: Palette, ...translations.whyUs.stone },
    {
      icon: Globe,
      title: { uz: 'Xalqaro hamkorlik', en: 'International Partnership', ru: 'Международное сотрудничество' },
      desc: { uz: "Qozog'iston, Qirg'iziston, Tojikiston va mintaqaviy bozorlar bilan hamkorlik", en: 'Partnerships with Kazakhstan, Kyrgyzstan, Tajikistan, and regional markets', ru: 'Сотрудничество с Казахстаном, Кыргызстаном, Таджикистаном и региональными рынками' },
    },
    {
      icon: Award,
      title: { uz: '21 yillik tajriba', en: '21 Years of Experience', ru: '21 год опыта' },
      desc: { uz: "2005-yildan beri to'qimachilik sohasida faoliyat yuritamiz", en: 'Operating in the textile industry since 2005', ru: 'Работаем в текстильной отрасли с 2005 года' },
    },
  ];

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold mb-8"
        >
          {t(translations.about.title, lang)}
        </motion.h1>

        <motion.div {...fadeUp} className="max-w-3xl mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(translations.about.established, lang)}
          </p>
        </motion.div>

        <motion.h2 {...fadeUp} className="font-display text-2xl md:text-3xl font-bold mb-10">
          {t(translations.about.advantages, lang)}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border hover:shadow-lg hover:gold-glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{t(item.title, lang)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(item.desc, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
