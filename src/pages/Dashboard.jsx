import { useEffect, useState } from "react";
import { useLanguage } from "../components/LanguageContext";
import ProductManager from "../components/dashboard/ProductManager";
import NotificationManager from "../components/dashboard/NotificationManager";
import { LayoutDashboard, Package, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

// shadcn ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const tabs = [
  { key: "overview", icon: LayoutDashboard },
  { key: "products", icon: Package },
  { key: "notifications", icon: Bell },
];

const DASHBOARD_PASSWORD = import.meta.env.VITE_DASHBOARD_PASSWORD;

export default function Dashboard() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("products");

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check auth on load
  useEffect(() => {
    const saved = localStorage.getItem("dashboard_auth");
    if (saved === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = () => {
    if (password === DASHBOARD_PASSWORD) {
      localStorage.setItem("dashboard_auth", "true");
      setIsAuthenticated(true);
      setError("");
      setPassword("");
    } else {
      setError("Incorrect password");
    }
  };

  const tabLabels = {
    products: t("manageProducts"),
    notifications: t("manageNotifications"),
  };

  return (
    <>
      {/* Password Modal */}
      {!isAuthenticated && (<Dialog open={!isAuthenticated}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Protected Dashboard</DialogTitle>
            <DialogDescription>
              Please enter the password to continue.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />

            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            <Button className="w-full" onClick={handleSubmit}>
              Unlock
            </Button>
          </div>
        </DialogContent>
      </Dialog>)}

      {/* Dashboard */}
      {isAuthenticated && (
        <div className="min-h-screen bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 py-8">
            <h1 className="text-3xl font-bold text-stone-900 tracking-tight mb-8">
              {t("dashboardTitle")}
            </h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {tabs.map((tab) => {
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
            {activeTab === "products" && <ProductManager />}
            {activeTab === "notifications" && <NotificationManager />}
          </div>
        </div>
      )}
    </>
  );
}