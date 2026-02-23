import React from 'react';
import { useLanguage } from '../LanguageContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏯</span>
              <span className="text-lg font-bold text-white tracking-tight">Thai Market BG</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400">
              {t('footerAbout')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('contactUs')}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" />
                <span className="text-sm">{t('address')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">+359 2 987 6543</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">info@thaimarketbg.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('openHours')}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">{t('monFri')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">{t('sat')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-sm">{t('sun')}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{t('followUs')}</h3>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'TikTok'].map(social => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-stone-800 hover:bg-amber-500 hover:text-stone-900 flex items-center justify-center text-xs font-bold transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-xs text-stone-500">
            © 2026 Thai Market BG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}