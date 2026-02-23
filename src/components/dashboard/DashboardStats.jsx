import React from 'react';
import { useLanguage } from '../LanguageContext';
import { mockProducts, mockNotifications } from '../store/mockData';
import { Package, AlertTriangle, Bell, DollarSign } from 'lucide-react';

export default function DashboardStats() {
  const { t } = useLanguage();

  const totalProducts = mockProducts.length;
  const lowStock = mockProducts.filter(p => p.inventory <= 5).length;
  const activeNotifs = mockNotifications.filter(n => n.active).length;
  const totalRevenue = mockProducts.reduce((sum, p) => sum + p.price * p.inventory, 0);

  const stats = [
    { label: t('totalProducts'), value: totalProducts, icon: Package, color: "bg-emerald-50 text-emerald-700", iconBg: "bg-emerald-100" },
    { label: t('lowStock'), value: lowStock, icon: AlertTriangle, color: "bg-amber-50 text-amber-700", iconBg: "bg-amber-100" },
    { label: t('activeNotifications'), value: activeNotifs, icon: Bell, color: "bg-blue-50 text-blue-700", iconBg: "bg-blue-100" },
    { label: t('totalRevenue'), value: `${totalRevenue.toFixed(0)} ${t('currency')}`, icon: DollarSign, color: "bg-violet-50 text-violet-700", iconBg: "bg-violet-100" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i} className={`${stat.color} rounded-2xl p-5 border border-transparent`}>
            <div className={`${stat.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs opacity-70 mt-1 font-medium">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}