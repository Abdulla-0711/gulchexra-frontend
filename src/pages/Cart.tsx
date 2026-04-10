import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { translations, t } from '@/i18n/translations';
import OrderModal from '@/components/OrderModal';

export default function Cart() {
  const { lang } = useLanguage();
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [orderOpen, setOrderOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
        <p className="text-lg text-muted-foreground mb-6">{t(translations.cart.empty, lang)}</p>
        <Link to="/products" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
          <ArrowLeft className="w-4 h-4" />
          {t(translations.cart.continueShopping, lang)}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl md:text-4xl font-bold mb-10"
        >
          {t(translations.cart.title, lang)}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.productId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 p-4 rounded-xl border bg-card"
              >
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold truncate">{item.name}</h3>
                  <p className="text-accent font-bold mt-1">
                    {item.price.toLocaleString()} {t(translations.products.price, lang)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} className="p-1 border rounded hover:bg-secondary transition-colors">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-1 border rounded hover:bg-secondary transition-colors">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button onClick={() => removeItem(item.productId)} className="p-1.5 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm">
                    {(item.price * item.quantity).toLocaleString()} {t(translations.products.price, lang)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 rounded-xl border bg-card sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-lg font-semibold">{t(translations.cart.total, lang)}</span>
                <span className="font-display text-2xl font-bold text-accent">
                  {totalPrice.toLocaleString()} {t(translations.products.price, lang)}
                </span>
              </div>
              <button
                onClick={() => setOrderOpen(true)}
                className="w-full bg-accent text-accent-foreground py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity gold-glow"
              >
                {t(translations.cart.checkout, lang)}
              </button>
              <Link
                to="/products"
                className="block text-center mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(translations.cart.continueShopping, lang)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
}
