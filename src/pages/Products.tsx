import { dataTagErrorSymbol, useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, t } from "@/i18n/translations";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import { Loader2, AlertCircle, PackageOpen } from "lucide-react";

export default function Products() {
  const { lang } = useLanguage();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  console.log(products);

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold mb-10"
        >
          {t(translations.products.title, lang)}
        </motion.h1>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent mb-3" />
            <p className="text-muted-foreground">
              {t(translations.products.loading, lang)}
            </p>
          </div>
        )}

        {isError && (
          <div className="flex flex-col items-center justify-center py-20">
            <AlertCircle className="w-12 h-12 text-destructive mb-3" />
            <p className="text-muted-foreground">
              {t(translations.products.error, lang)}
            </p>
          </div>
        )}

        {products && products.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <PackageOpen className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-muted-foreground">
              {t(translations.products.empty, lang)}
            </p>
          </div>
        )}

        {products && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
