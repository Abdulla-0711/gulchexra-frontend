import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Truck, Palette } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const { lang } = useLanguage();
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const stats = [
    { value: "21+", label: t(translations.stats.experience, lang) },
    { value: "10,000+", label: t(translations.stats.projects, lang) },
    { value: "4+", label: t(translations.stats.partners, lang) },
    { value: "100%", label: t(translations.stats.quality, lang) },
  ];

  const whyItems = [
    { icon: Shield, ...translations.whyUs.quality },
    { icon: Sparkles, ...translations.whyUs.attention },
    { icon: Truck, ...translations.whyUs.delivery },
    { icon: Palette, ...translations.whyUs.stone },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* BG IMAGE */}
        <img
          src={heroBg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* OVERLAY (lightda yengil, darkda kuchli) */}
        <div
          className="absolute inset-0 
    bg-gradient-to-r 
    from-white/80 via-white/5 to-transparent
    dark:from-black/80 dark:via-black/60 dark:to-transparent
  "
        />

        {/* BLUR EFFECT */}
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        {/* CONTENT */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* BADGE */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
        bg-accent/10 backdrop-blur-md border border-accent/20
        text-accent text-sm font-medium mb-6 shadow-sm
      "
            >
              <Sparkles className="w-4 h-4" />
              <span>Est. 2005</span>
            </div>

            {/* TITLE */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
                {t(translations.hero.title, lang)}
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {t(translations.hero.subtitle, lang)}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 
            bg-accent text-accent-foreground 
            px-8 py-4 rounded-xl font-semibold text-lg 
            hover:scale-105 hover:opacity-90 
            transition-all duration-300 shadow-lg gold-glow
          "
              >
                {t(translations.hero.cta, lang)}
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 
            px-8 py-4 rounded-xl font-semibold text-lg 
            border border-border bg-background/60 backdrop-blur-md
            hover:bg-background transition-all
          "
              >
                {lang === "uz"
                  ? "Batafsil"
                  : lang === "ru"
                    ? "Подробнее"
                    : "Learn more"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {products && products.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              {...fadeUp}
              className="flex items-center justify-between mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                {t(translations.featured.title, lang)}
              </h2>
              <Link
                to="/products"
                className="flex items-center gap-1 text-accent font-medium hover:underline"
              >
                {t(translations.featured.viewAll, lang)}{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t(translations.whyUs.title, lang)}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-background border hover:shadow-lg hover:gold-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {t(item.title, lang)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(item.desc, lang)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-center mb-12"
          >
            {t(translations.faq.title, lang)}
          </motion.h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {translations.faq.items.slice(0, 3).map((item, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="group p-5 rounded-xl border bg-card hover:shadow-sm transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer font-display font-semibold list-none">
                  {t(item.q, lang)}
                  <span className="text-accent transition-transform group-open:rotate-45 text-xl">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t(item.a, lang)}
                </p>
              </motion.details>
            ))}
          </div>
          <motion.div {...fadeUp} className="text-center mt-8">
            <Link
              to="/faq"
              className="text-accent font-medium hover:underline inline-flex items-center gap-1"
            >
              {t(translations.featured.viewAll, lang)}{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t(translations.contact.title, lang)}
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              {t(translations.footer.description, lang)}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {t(translations.contact.title, lang)}{" "}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
