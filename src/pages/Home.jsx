import { useLanguage } from '../components/LanguageContext';
import { mockProducts } from '../components/store/mockData';
import HeroSection from '../components/store/HeroSection';
import ProductCard from '../components/store/ProductCard';
import NotificationBanner from '../components/store/NotificationBanner';
import Footer from '../components/store/Footer';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();
  const featured = mockProducts.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-stone-50">
      <NotificationBanner />
      <HeroSection />

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-widest">{t('featuredProducts')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 tracking-tight">
              {t('featuredProducts')}
            </h2>
          </div>
          <Link
            to={createPageUrl('Products')}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            {t('viewAll')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {featured.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => {}}
            />
          ))}
        </div>

        <Link
          to={createPageUrl('Products')}
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm font-semibold text-emerald-700"
        >
          {t('viewAll')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Categories Showcase */}
      <section className="bg-stone-100/50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 tracking-tight text-center mb-12">
            {t('allCategories')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['rice_noodles', 'sauces_pastes', 'spices_herbs', 'drinks'].map((cat, i) => {
              const catImages = [
                "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop",
              ];
              return (
                <Link
                  key={cat}
                  to={createPageUrl('Products') + `?category=${cat}`}
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden"
                >
                  <img src={catImages[i]} alt={t(cat)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-sm md:text-base">{t(cat)}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}