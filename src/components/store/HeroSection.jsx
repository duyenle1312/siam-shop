import React from 'react';
import { useLanguage } from '../LanguageContext';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1400&h=600&fit=crop"
          alt="Siam Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-stone-950/80 via-stone-950/60 to-transparent" />
      </div>

      <div className="relative px-6 md:px-12 lg:px-20 py-20 md:py-32 lg:py-40 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-200 text-xs font-medium tracking-wide uppercase">Sofia, Bulgaria</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg text-stone-300 mt-5 leading-relaxed max-w-md">
            {t('heroSubtitle')}
          </p>

          <Link to={createPageUrl('Products')}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-xl shadow-amber-500/20"
            >
              {t('shopNow')}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-stone-50 to-transparent" />
    </section>
  );
}