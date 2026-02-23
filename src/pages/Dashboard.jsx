import React, { useState } from 'react';
import { useLanguage } from '../components/LanguageContext';
import DashboardStats from '../components/dashboard/DashboardStats';
import ProductManager from '../components/dashboard/ProductManager';
import NotificationManager from '../components/dashboard/NotificationManager';
import { LayoutDashboard, Package, Bell } from 'lucide-react';
import { cn } from "@/lib/utils";

const tabs = [
  { key: 'overview', icon: LayoutDashboard },
  { key: 'products', icon: Package },
  { key: 'notifications', icon: Bell },
];

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const tabLabels = {
    overview: t('overview'),
    products: t('manageProducts'),
    notifications: t('manageNotifications'),
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-8">
        <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-8">
          {t('dashboardTitle')}
        </h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap",
                  activeTab === tab.key
                    ? "bg-stone-900 text-white shadow-lg shadow-stone-900/10"
                    : "bg-white text-stone-500 border border-stone-200 hover:bg-stone-50"
                )}
              >
                <Icon className="w-4 h-4" />
                {tabLabels[tab.key]}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <DashboardStats />
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">{t('manageProducts')}</h3>
                <ProductManager />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">{t('manageNotifications')}</h3>
                <NotificationManager />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'products' && <ProductManager />}
        {activeTab === 'notifications' && <NotificationManager />}
      </div>
    </div>
  );
}