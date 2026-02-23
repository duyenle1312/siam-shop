import React from 'react';
import { useLanguage } from '../LanguageContext';
import { categories } from './mockData';
import { cn } from "@/lib/utils";

export default function CategoryFilter({ selected, onSelect }) {
  const { t } = useLanguage();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300",
          !selected
            ? "bg-emerald-700 text-white shadow-lg shadow-emerald-700/20"
            : "bg-stone-100 text-stone-500 hover:bg-stone-200"
        )}
      >
        {t('allCategories')}
      </button>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap",
            selected === cat
              ? "bg-emerald-700 text-white shadow-lg shadow-emerald-700/20"
              : "bg-stone-100 text-stone-500 hover:bg-stone-200"
          )}
        >
          {t(cat)}
        </button>
      ))}
    </div>
  );
}