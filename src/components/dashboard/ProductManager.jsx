import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { mockProducts, categories } from '../store/mockData';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, Upload, Package } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function ProductManager() {
  const { language, t } = useLanguage();
  const [products, setProducts] = useState(mockProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const emptyProduct = {
    id: Date.now(),
    name: { en: '', bg: '' },
    description: { en: '', bg: '' },
    price: 0,
    category: 'rice_noodles',
    image: '',
    inventory: 0,
    featured: false,
  };

  const handleSave = () => {
    if (editingProduct) {
      const exists = products.find(p => p.id === editingProduct.id);
      if (exists) {
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? editingProduct : p));
      } else {
        setProducts(prev => [...prev, editingProduct]);
      }
    }
    setShowDialog(false);
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-stone-900">{t('manageProducts')}</h2>
        <Button
          onClick={() => {
            setEditingProduct({ ...emptyProduct, id: Date.now() });
            setShowDialog(true);
          }}
          className="bg-emerald-700 hover:bg-emerald-800 rounded-xl gap-2"
        >
          <Plus className="w-4 h-4" />
          {t('addProduct')}
        </Button>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100">
                <th className="text-left text-xs font-semibold text-stone-500 uppercase tracking-wider px-5 py-4">Product</th>
                <th className="text-left text-xs font-semibold text-stone-500 uppercase tracking-wider px-5 py-4">{t('category')}</th>
                <th className="text-left text-xs font-semibold text-stone-500 uppercase tracking-wider px-5 py-4">{t('price')}</th>
                <th className="text-left text-xs font-semibold text-stone-500 uppercase tracking-wider px-5 py-4">{t('inventory')}</th>
                <th className="text-right text-xs font-semibold text-stone-500 uppercase tracking-wider px-5 py-4">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b border-stone-50 hover:bg-stone-50/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-stone-800">{product.name[language]}</p>
                        <p className="text-xs text-stone-400 truncate max-w-[200px]">{product.description[language]}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant="secondary" className="text-xs bg-stone-100 text-stone-600 font-medium">
                      {t(product.category)}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-sm font-semibold text-stone-800">{product.price.toFixed(2)} {t('currency')}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <Package className={`w-3.5 h-3.5 ${product.inventory <= 5 ? 'text-amber-500' : 'text-emerald-500'}`} />
                      <span className={`text-sm font-medium ${product.inventory <= 5 ? 'text-amber-600' : 'text-stone-700'}`}>
                        {product.inventory}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-lg"
                        onClick={() => {
                          setEditingProduct({ ...product });
                          setShowDialog(true);
                        }}
                      >
                        <Pencil className="w-3.5 h-3.5 text-stone-400" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-lg hover:bg-red-50 hover:text-red-500"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Add Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              {editingProduct && products.find(p => p.id === editingProduct.id) ? t('editProduct') : t('addProduct')}
            </DialogTitle>
          </DialogHeader>

          {editingProduct && (
            <div className="space-y-5 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Name (EN)</Label>
                  <Input
                    value={editingProduct.name.en}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      name: { ...editingProduct.name, en: e.target.value }
                    })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Име (BG)</Label>
                  <Input
                    value={editingProduct.name.bg}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      name: { ...editingProduct.name, bg: e.target.value }
                    })}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Description (EN)</Label>
                  <Textarea
                    value={editingProduct.description.en}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      description: { ...editingProduct.description, en: e.target.value }
                    })}
                    className="rounded-xl h-20"
                  />
                </div>
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">Описание (BG)</Label>
                  <Textarea
                    value={editingProduct.description.bg}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      description: { ...editingProduct.description, bg: e.target.value }
                    })}
                    className="rounded-xl h-20"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs text-stone-500 mb-1.5 block">{t('category')}</Label>
                <Select
                  value={editingProduct.category}
                  onValueChange={(val) => setEditingProduct({ ...editingProduct, category: val })}
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat} value={cat}>{t(cat)}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">{t('price')} ({t('currency')})</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) || 0 })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-xs text-stone-500 mb-1.5 block">{t('inventory')}</Label>
                  <Input
                    type="number"
                    value={editingProduct.inventory}
                    onChange={(e) => setEditingProduct({ ...editingProduct, inventory: parseInt(e.target.value) || 0 })}
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div>
                <Label className="text-xs text-stone-500 mb-1.5 block">{t('uploadImage')}</Label>
                <div className="border-2 border-dashed border-stone-200 rounded-xl p-6 text-center hover:border-emerald-300 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto text-stone-300 mb-2" />
                  <p className="text-xs text-stone-400">Click to upload or drag & drop</p>
                  {editingProduct.image && (
                    <img src={editingProduct.image} alt="" className="w-16 h-16 rounded-lg object-cover mx-auto mt-3" />
                  )}
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 rounded-xl"
                  onClick={() => { setShowDialog(false); setEditingProduct(null); }}
                >
                  {t('cancel')}
                </Button>
                <Button
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 rounded-xl"
                  onClick={handleSave}
                >
                  {t('save')}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}