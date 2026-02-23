import { useMemo, useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import { mockProducts } from "../components/store/mockData";
import Footer from "../components/store/Footer";
import { Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { useParams } from "react-router-dom";
import { useCart } from "@/components/store/CartContext";

export default function ProductDetail() {
  const { language, t } = useLanguage();

  const { slug } = useParams();

  const product = useMemo(
    () => mockProducts.find((p) => String(p.slug) === slug),
    [slug],
  );

  const isOutOfStock = product.inventory <= 0;
  const isLowStock = product.inventory > 0 && product.inventory <= 5;
  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-stone-400">
        {t("productNotFound")}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-20">
        {/* Back */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("back")}
        </button>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="p-0 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name[language]}
              className="object-contain max-h-[360px] rounded-2xl border border-stone-200 "
            />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-stone-900">
                {product.name[language]}
              </h1>
              <p className="text-stone-500 text-base mt-2">
                {product.description[language]}
              </p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-xl font-semibold text-emerald-600">
                {product.price.toFixed(2)} €
              </div>
              <div className="text-xl font-semibold text-emerald-600">
                {(product.price * 1.95583).toFixed(2)} лв
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-stone-600">{t("quantity")}</span>
              <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="w-12 text-center text-sm">{qty}</div>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!isOutOfStock) addToCart(product);
              }}
              disabled={isOutOfStock}
              className={`flex items-center justify-center gap-2 px-5 p-2.5 rounded-xl transition-all duration-300 ${
                isOutOfStock
                  ? "bg-stone-100 text-stone-300 cursor-not-allowed"
                  : "bg-emerald-700 text-white hover:bg-emerald-800 hover:scale-105 active:scale-95 shadow-lg shadow-emerald-700/20"
              }`}
            >
              {t("addToCart")} <ShoppingBag className="w-4 h-4 ml-2" />
            </button>

            {/* Extra Info */}
            <div className="pt-6 border-t border-stone-200 text-sm text-stone-500 space-y-2">
              <p>
                <strong>{t("category")}:</strong> {t(product.category)}
              </p>
              {product.weight && (
                <p>
                  <strong>{t("weight")}:</strong> {product.weight}
                </p>
              )}
              {product.origin && (
                <p>
                  <strong>{t("origin")}:</strong> {product.origin}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
