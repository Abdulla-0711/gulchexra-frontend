import { motion } from "framer-motion";
import heroBg from "@/assets/hero4.jpg";
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
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* BG IMAGE */}
        <img
          src={heroBg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* DARK/LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10 dark:from-black/85 dark:via-black/65 dark:to-black/20" />

        {/* EXTRA DEPTH */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* DECOR BLUR CIRCLES */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl" />

        {/* SOFT BLUR */}
        <div className="absolute inset-0 backdrop-blur-[3px]" />

        {/* CONTENT */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/10 text-accent text-sm font-medium mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span>Est. 2005</span>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                <span className="block text-foreground">
                  {t(translations.hero.title, lang)}
                </span>
                <span className="block bg-gradient-to-r from-accent via-yellow-500 to-orange-400 bg-clip-text text-transparent mt-2">
                  Premium Textile Design
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                {t(translations.hero.subtitle, lang)}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
                >
                  {t(translations.hero.cta, lang)}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg border border-border bg-background/60 backdrop-blur-md hover:bg-background/80 hover:scale-105 transition-all duration-300 shadow-md"
                >
                  {lang === "uz"
                    ? "Batafsil"
                    : lang === "ru"
                      ? "Подробнее"
                      : "Learn more"}
                </Link>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
                <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-border p-4 shadow-lg">
                  <h3 className="text-2xl font-bold text-accent">21+</h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "uz"
                      ? "Yillik tajriba"
                      : lang === "ru"
                        ? "Лет опыта"
                        : "Years of experience"}
                  </p>
                </div>

                <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-border p-4 shadow-lg">
                  <h3 className="text-2xl font-bold text-accent">10K+</h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "uz"
                      ? "Loyihalar"
                      : lang === "ru"
                        ? "Проекты"
                        : "Projects"}
                  </p>
                </div>

                <div className="rounded-2xl bg-background/60 backdrop-blur-md border border-border p-4 shadow-lg col-span-2 sm:col-span-1">
                  <h3 className="text-2xl font-bold text-accent">100%</h3>
                  <p className="text-sm text-muted-foreground">
                    {lang === "uz"
                      ? "Sifatli mahsulot"
                      : lang === "ru"
                        ? "Качество"
                        : "Quality"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE CARD */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="rounded-[32px] border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-6">
                  <img
                    src={heroBg}
                    alt="preview"
                    className="w-full h-[420px] object-cover rounded-[24px]"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-xl">
                    <p className="text-sm text-muted-foreground">
                      {lang === "uz"
                        ? "Elegant dizayn"
                        : lang === "ru"
                          ? "Элегантный дизайн"
                          : "Elegant design"}
                    </p>
                    <h4 className="text-lg font-semibold">
                      {lang === "uz"
                        ? "Yuqori sifatli ishlab chiqarish"
                        : lang === "ru"
                          ? "Высокое качество"
                          : "High-quality production"}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
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
