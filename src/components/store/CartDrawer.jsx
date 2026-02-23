import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useCart } from './CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

export default function CartDrawer() {
  const { language, t } = useLanguage();
  const { cartItems, updateQuantity, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl">
                  <ShoppingBag className="w-5 h-5 text-emerald-700" />
                </div>
                <h2 className="text-lg font-bold text-stone-900">{t('yourCart')}</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl hover:bg-stone-50 transition-colors"
              >
                <X className="w-5 h-5 text-stone-400" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-stone-400">
                  <ShoppingBag className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-sm">{t('emptyCart')}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence>
                    {cartItems.map(item => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 p-3 rounded-xl bg-stone-50"
                      >
                        <img
                          src={item.image}
                          alt={item.name[language]}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-stone-800 truncate">
                            {item.name[language]}
                          </h4>
                          <p className="text-sm font-bold text-emerald-700 mt-0.5">
                            {item.price.toFixed(2)} {t('currency')}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.qty - 1)}
                              className="p-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.qty + 1)}
                              className="p-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-stone-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-sm font-bold text-stone-700">
                            {(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-stone-100 p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-stone-500">{t('total')}</span>
                  <span className="text-2xl font-bold text-stone-900">
                    {cartTotal.toFixed(2)} <span className="text-sm font-medium text-stone-400">{t('currency')}</span>
                  </span>
                </div>
                <Button className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-700/20">
                  {t('checkout')}
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}