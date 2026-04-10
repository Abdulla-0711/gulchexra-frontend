import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { translations, t } from '@/i18n/translations';
import type { Product } from '@/types/product';
import { toast } from 'sonner';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { lang } = useLanguage();
  const { addItem } = useCart();

  const name = product[`name_${lang}`] || product.name_en;
  const description = product[`description_${lang}`] || product.description_en;

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name,
      price: product.price,
      image: product.image,
    });
    toast.success(lang === 'uz' ? "Savatga qo'shildi" : lang === 'ru' ? 'Добавлено в корзину' : 'Added to cart');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 lg:p-5">
        <h3 className="font-display text-lg font-semibold mb-1 line-clamp-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent">
            {product.price.toLocaleString()} {t(translations.products.price, lang)}
          </span>
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={handleAdd}
            className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="w-4 h-4" />
            {t(translations.products.addToCart, lang)}
          </button>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center px-3 py-2.5 rounded-lg border text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
