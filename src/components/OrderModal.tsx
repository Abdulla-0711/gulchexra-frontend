import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { translations, t } from '@/i18n/translations';
import { submitOrder } from '@/lib/api';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function OrderModal({ open, onClose }: Props) {
  const { lang } = useLanguage();
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ fullName: '', phone: '', address: '', email: '' });
  const [oferta, setOferta] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    const req = t(translations.order.required, lang);
    if (!form.fullName.trim()) errs.fullName = req;
    if (!form.phone.trim()) errs.phone = req;
    else if (!/^\+?[\d\s-]{9,}$/.test(form.phone.trim())) errs.phone = t(translations.order.invalidPhone, lang);
    if (!form.address.trim()) errs.address = req;
    if (!form.email.trim()) errs.email = req;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = t(translations.order.invalidEmail, lang);
    if (!oferta) errs.oferta = req;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus('loading');
    try {
      await submitOrder({
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
        email: form.email.trim(),
        oferta,
        totalPrice: 23,
        items: items.map(i => ({ productId: i.productId, quantity: i.quantity })),
      });
      setStatus('success');
      clearCart();
      setTimeout(() => { onClose(); setStatus('idle'); setForm({ fullName: '', phone: '', address: '', email: '' }); setOferta(false); }, 2000);
    } catch {
      setStatus('error');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border bg-background text-foreground text-sm font-body transition-colors focus:outline-none focus:ring-2 focus:ring-accent ${
      errors[field] ? 'border-destructive' : 'border-input'
    }`;

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-popover rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="font-display text-xl font-bold">{t(translations.order.title, lang)}</h2>
            <button onClick={onClose} className="p-1 hover:bg-secondary rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {status === 'success' ? (
            <div className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="font-display text-lg font-semibold">{t(translations.order.success, lang)}</p>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {t(translations.order.error, lang)}
                </div>
              )}

              <div>
                <input
                  placeholder={t(translations.order.fullName, lang)}
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                  className={inputClass('fullName')}
                />
                {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <input
                  placeholder={t(translations.order.phone, lang)}
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <input
                  placeholder={t(translations.order.address, lang)}
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  className={inputClass('address')}
                />
                {errors.address && <p className="text-destructive text-xs mt-1">{errors.address}</p>}
              </div>
              <div>
                <input
                  placeholder={t(translations.order.email, lang)}
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={oferta}
                  onChange={e => setOferta(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-accent"
                />
                <span className="text-sm text-foreground/70">{t(translations.order.oferta, lang)}</span>
              </label>
              {errors.oferta && <p className="text-destructive text-xs -mt-2">{errors.oferta}</p>}

              <div className="flex items-center justify-between pt-2 border-t">
                <span className="font-body font-semibold">{t(translations.order.totalPrice, lang)}:</span>
                <span className="font-display text-xl font-bold text-accent">
                  {totalPrice.toLocaleString()} {t(translations.products.price, lang)}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === 'loading' ? t(translations.order.submitting, lang) : t(translations.order.submit, lang)}
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
