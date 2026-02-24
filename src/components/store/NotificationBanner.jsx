import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { mockNotifications } from "./mockData";
import { Bell, X, Clock, Sparkles, Tag, Info } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const activeNotifications = mockNotifications.filter((n) => n.active);
  const [dismissed, setDismissed] = useState([]);

  const visible = activeNotifications.filter((n) => !dismissed.includes(n.id));

  if (visible.length === 0) return null;

  return (
    <div className="">
      <AnimatePresence>
        {visible.map((notification) => {
          const Icon = typeIcons[notification.type] || Info;
          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              className={`flex items-start gap-3 p-3.5 border ${typeColors[notification.type]} transition-all`}
            >
              <div className="flex-1 min-w-0 text-center">
                <div className="flex flex-row gap-2 justify-center">
                  <Icon className="w-3 h-3 mt-0.5 shrink-0 opacity-70" />
                  <p className="text-xs font-semibold">
                    {notification.title[language]}
                  </p>{" "}<span className="text-xs opacity-75">
                  {notification.message[language]}
                </span>
                </div>
                {/* <span className="text-xs opacity-75 mt-0.5">
                  {notification.message[language]}
                </span> */}
              </div>
              <button
                onClick={() =>
                  setDismissed((prev) => [...prev, notification.id])
                }
                className="shrink-0 p-1 rounded-lg hover:bg-black/5 transition-colors"
              >
                <X className="w-3 h-3 opacity-50" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
