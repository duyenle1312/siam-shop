import { useState, useMemo } from 'react';
import { useLanguage } from '../components/LanguageContext';
import { mockProducts } from '../components/store/mockData';
import ProductCard from '../components/store/ProductCard';
import CategoryFilter from '../components/store/CategoryFilter';
import Footer from '../components/store/Footer';
import { Search } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function Products() {
  const { language, t } = useLanguage();
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || null;

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);

  const filtered = useMemo(() => {
    return mockProducts.filter(p => {
      const matchCategory = !category || p.category === category;
      const matchSearch = !search ||
        p.name[language].toLowerCase().includes(search.toLowerCase()) ||
        p.description[language].toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [search, category, language]);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
            {t('products')}
          </h1>
          <p className="text-stone-500 mt-2 text-sm">
            {filtered.length} {t('items')}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              placeholder={t('searchProducts')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 h-12 rounded-xl border border-stone-200 bg-white focus-visible:ring-emerald-500 w-full"
              type="text"
            />
          </div>
          <CategoryFilter selected={category} onSelect={setCategory} />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => {}}
              />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400 text-sm">No products found</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}