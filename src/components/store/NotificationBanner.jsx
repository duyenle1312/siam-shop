import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { mockNotifications } from './mockData';
import { Bell, X, Clock, Sparkles, Tag, Info } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const typeIcons = {
  openingHours: Clock,
  newProduct: Sparkles,
  promotion: Tag,
  general: Info,
};

const typeColors = {
  openingHours: "bg-amber-50 border-amber-200 text-amber-900",
  newProduct: "bg-emerald-50 border-emerald-200 text-emerald-900",
  promotion: "bg-rose-50 border-rose-200 text-rose-900",
  general: "bg-slate-50 border-slate-200 text-slate-900",
};

export default function NotificationBanner() {
  const { language } = useLanguage();
  const activeNotifications = mockNotifications.filter(n => n.active);
  const [dismissed, setDismissed] = useState([]);

  const visible = activeNotifications.filter(n => !dismissed.includes(n.id));

  if (visible.length === 0) return null;

  return (
    <div className="space-y-2 px-4 md:px-8 pt-4">
      <AnimatePresence>
        {visible.map(notification => {
          const Icon = typeIcons[notification.type] || Info;
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className={`flex items-start gap-3 p-3.5 rounded-xl border ${typeColors[notification.type]} transition-all`}
            >
              <Icon className="w-4.5 h-4.5 mt-0.5 shrink-0 opacity-70" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{notification.title[language]}</p>
                <p className="text-xs opacity-75 mt-0.5">{notification.message[language]}</p>
              </div>
              <button
                onClick={() => setDismissed(prev => [...prev, notification.id])}
                className="shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
              >
                <X className="w-3.5 h-3.5 opacity-50" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}