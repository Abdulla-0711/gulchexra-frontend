import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, ShoppingCart, Minus, Plus, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { translations, t } from "@/i18n/translations";
import { fetchProductById } from "@/lib/api";
import OrderModal from "@/components/OrderModal";
import { toast } from "sonner";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [orderOpen, setOrderOpen] = useState(false);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-8 h-8 animate-spin text-accent" />
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex flex-col items-center justify-center py-32">
        <p className="text-muted-foreground mb-4">
          {t(translations.products.empty, lang)}
        </p>
        <button
          onClick={() => navigate("/products")}
          className="text-accent hover:underline"
        >
          {t(translations.productDetail.back, lang)}
        </button>
      </div>
    );
  }

  const name = product[`name_${lang}`] || product.name_en;
  const description = product[`description_${lang}`] || product.description_en;

  const handleAdd = () => {
    addItem(
      {
        productId: product.id,
        name,
        price: product.price,
        image: product.image,
      },
      quantity,
    );

    toast.success(
      lang === "uz"
        ? "Savatga qo'shildi"
        : lang === "ru"
          ? "Добавлено в корзину"
          : "Added to cart",
    );
  };

  const handleBuy = () => {
    addItem(
      {
        productId: product.id,
        name,
        price: product.price,
        image: product.image,
      },
      quantity,
    );
    setOrderOpen(true);
  };

  return (
    <div className="py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t(translations.productDetail.back, lang)}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden border"
          >
            <img
              src={product.image}
              alt={name}
              className="w-full aspect-square object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {name}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {description}
            </p>

            <div className="text-3xl font-bold text-accent mb-8">
              {Number(product.price).toLocaleString()}{" "}
              {t(translations.products.price, lang)}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-medium">
                {t(translations.productDetail.quantity, lang)}:
              </span>

              <div className="flex items-center gap-3 border rounded-lg px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-accent transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>

                <span className="w-8 text-center font-semibold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-accent transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3.5 rounded-xl font-semibold hover:bg-accent/10 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {t(translations.products.addToCart, lang)}
              </button>

              <button
                onClick={handleBuy}
                className="flex-1 bg-accent text-accent-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity gold-glow"
              >
                {t(translations.productDetail.buyNow, lang)}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </div>
  );
}
