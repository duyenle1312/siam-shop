import React from 'react';
import { useLanguage } from '../LanguageContext';
import { useCart } from './CartContext';
import { ShoppingBag, Package } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onClick }) {
  const { language, t } = useLanguage();
  const { addToCart } = useCart();
  const isOutOfStock = product.inventory <= 0;
  const isLowStock = product.inventory > 0 && product.inventory <= 5;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-100/50 transition-all duration-500"
    >
      <div
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={() => onClick?.(product)}
      >
        <img
          src={product.image}
          alt={product.name[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white/90 text-stone-800 text-xs font-semibold px-3 py-1.5 rounded-full">
              {t('outOfStock')}
            </span>
          </div>
        )}
        {isLowStock && !isOutOfStock && (
          <div className="absolute top-3 left-3">
            <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
              <Package className="w-3 h-3" />
              {product.inventory} left
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-xs text-[10px] font-medium text-stone-500 px-2 py-1 rounded-full">
            {t(product.category)}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3
          className="font-semibold text-stone-800 text-sm leading-snug mb-1 cursor-pointer hover:text-emerald-700 transition-colors line-clamp-2"
          onClick={() => onClick?.(product)}
        >
          {product.name[language]}
        </h3>
        <p className="text-xs text-stone-400 line-clamp-1 mb-3">
          {product.description[language]}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-stone-900">
            {product.price.toFixed(2)} <span className="text-xs font-medium text-stone-400">{t('currency')}</span>
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!isOutOfStock) addToCart(product);
            }}
            disabled={isOutOfStock}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isOutOfStock
                ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                : 'bg-emerald-700 text-white hover:bg-emerald-800 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-700/20'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}