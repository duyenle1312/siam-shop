import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    cart: "Cart",
    dashboard: "Dashboard",
    allCategories: "All Categories",

    // Categories
    rice_noodles: "Rice & Noodles",
    sauces_pastes: "Sauces & Pastes",
    spices_herbs: "Spices & Herbs",
    snacks: "Snacks",
    drinks: "Drinks",
    frozen: "Frozen",
    fresh: "Fresh Produce",
    canned: "Canned Goods",

    // Storefront
    heroTitle: "Authentic Thai Flavors",
    heroSubtitle: "Your gateway to Thailand's finest ingredients in Bulgaria",
    shopNow: "Shop Now",
    featuredProducts: "Featured Products",
    searchProducts: "Search products...",
    addToCart: "Add to Cart",
    outOfStock: "Out of Stock",
    viewAll: "View All",
    price: "Price",
    inStock: "In Stock",
    items: "items",

    // Cart
    yourCart: "Your Cart",
    emptyCart: "Your cart is empty",
    total: "Total",
    checkout: "Checkout",
    remove: "Remove",
    continueShopping: "Continue Shopping",

    // Product Detail
    description: "Description",
    relatedProducts: "You May Also Like",
    backToShop: "Back to Shop",
    quantity: "Quantity",

    // Dashboard
    dashboardTitle: "Store Dashboard",
    manageProducts: "Manage Products",
    manageNotifications: "Notifications",
    overview: "Overview",
    totalProducts: "Total Products",
    lowStock: "Low Stock",
    activeNotifications: "Active Notices",
    totalRevenue: "Est. Revenue",

    // Product Management
    addProduct: "Add Product",
    editProduct: "Edit Product",
    productName: "Product Name",
    productDescription: "Description",
    category: "Category",
    uploadImage: "Upload Image",
    inventory: "Inventory",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    actions: "Actions",

    // Notifications
    addNotification: "Add Notification",
    notificationTitle: "Title",
    notificationMessage: "Message",
    type: "Type",
    active: "Active",
    inactive: "Inactive",
    openingHours: "Opening Hours",
    newProduct: "New Product",
    promotion: "Promotion",
    general: "General",
    status: "Status",

    // Footer
    footerAbout:
      "Bringing the authentic taste of Thailand to Bulgaria since 2023.",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    openHours: "Opening Hours",
    monFri: "Thu - Tue: 11:00 - 19:00",
    sat: "Wed: 11:00 - 15:30",
    sun: "Sun: Closed",
    address: 'ul. "Gurgulyat" 25, 1463 Sofia, Bulgaria',
    currency: "€",
    back: "Back",
  },
  bg: {
    home: "Начало",
    products: "Продукти",
    cart: "Кошница",
    dashboard: "Табло",
    allCategories: "Всички категории",

    rice_noodles: "Ориз и Нудли",
    sauces_pastes: "Сосове и Пасти",
    spices_herbs: "Подправки и Билки",
    snacks: "Снаксове",
    drinks: "Напитки",
    frozen: "Замразени",
    fresh: "Пресни продукти",
    canned: "Консерви",

    heroTitle: "Автентични тайландски вкусове",
    heroSubtitle:
      "Вашият портал към най-добрите съставки от Тайланд в България",
    shopNow: "Пазарувай",
    featuredProducts: "Избрани продукти",
    searchProducts: "Търси продукти...",
    addToCart: "Добави в кошницата",
    outOfStock: "Изчерпан",
    viewAll: "Виж всички",
    price: "Цена",
    inStock: "В наличност",
    items: "артикула",

    yourCart: "Вашата кошница",
    emptyCart: "Кошницата е празна",
    total: "Общо",
    checkout: "Поръчай",
    remove: "Премахни",
    continueShopping: "Продължи пазаруването",

    description: "Описание",
    relatedProducts: "Може да ви хареса също",
    backToShop: "Обратно към магазина",
    quantity: "Количество",

    dashboardTitle: "Табло на магазина",
    manageProducts: "Управление на продукти",
    manageNotifications: "Известия",
    overview: "Преглед",
    totalProducts: "Общо продукти",
    lowStock: "Ниска наличност",
    activeNotifications: "Активни известия",
    totalRevenue: "Прибл. приходи",

    addProduct: "Добави продукт",
    editProduct: "Редактирай продукт",
    productName: "Име на продукт",
    productDescription: "Описание",
    category: "Категория",
    uploadImage: "Качи снимка",
    inventory: "Наличност",
    save: "Запази",
    cancel: "Отказ",
    delete: "Изтрий",
    actions: "Действия",

    addNotification: "Добави известие",
    notificationTitle: "Заглавие",
    notificationMessage: "Съобщение",
    type: "Тип",
    active: "Активно",
    inactive: "Неактивно",
    openingHours: "Работно време",
    newProduct: "Нов продукт",
    promotion: "Промоция",
    general: "Общо",
    status: "Статус",

    footerAbout: "Доставяме автентичния вкус на Тайланд в България от 2023г.",
    contactUs: "Свържете се с нас",
    followUs: "Последвайте ни",
    openHours: "Работно време",
    monFri: "Чет - Вто: 11:00 - 19:00",
    sat: "Сря: 11:00 - 15:30",
    sun: "Нед: Затворено",
    address: 'ул. "Гургулят" 25, 1463 София, България',
    currency: "€",
    back: "Назад",
  },
th: {
    // Navigation
    home: "หน้าแรก",
    products: "สินค้า",
    cart: "ตะกร้า",
    dashboard: "แดชบอร์ด",
    allCategories: "หมวดหมู่ทั้งหมด",

    // Categories
    rice_noodles: "ข้าว & เส้น",
    sauces_pastes: "ซอส & เครื่องปรุง",
    spices_herbs: "เครื่องเทศ & สมุนไพร",
    snacks: "ของว่าง",
    drinks: "เครื่องดื่ม",
    frozen: "แช่แข็ง",
    fresh: "ผลไม้และผักสด",
    canned: "อาหารกระป๋อง",

    // Storefront
    heroTitle: "รสชาติไทยแท้",
    heroSubtitle: "แหล่งวัตถุดิบคุณภาพจากประเทศไทยในบัลแกเรีย",
    shopNow: "ช็อปเลย",
    featuredProducts: "สินค้าขายดี",
    searchProducts: "ค้นหาสินค้า...",
    addToCart: "เพิ่มลงตะกร้า",
    outOfStock: "สินค้าหมด",
    viewAll: "ดูทั้งหมด",
    price: "ราคา",
    inStock: "มีสินค้า",
    items: "ชิ้น",

    // Cart
    yourCart: "ตะกร้าของคุณ",
    emptyCart: "ตะกร้าว่าง",
    total: "รวม",
    checkout: "ชำระเงิน",
    remove: "ลบ",
    continueShopping: "ช็อปต่อ",

    // Product Detail
    description: "คำอธิบาย",
    relatedProducts: "สินค้าแนะนำ",
    backToShop: "กลับไปที่ร้าน",
    quantity: "จำนวน",

    // Dashboard
    dashboardTitle: "แดชบอร์ดร้านค้า",
    manageProducts: "จัดการสินค้า",
    manageNotifications: "การแจ้งเตือน",
    overview: "ภาพรวม",
    totalProducts: "จำนวนสินค้า",
    lowStock: "สินค้าน้อย",
    activeNotifications: "การแจ้งเตือนที่ใช้งานอยู่",
    totalRevenue: "ประมาณรายได้",

    // Product Management
    addProduct: "เพิ่มสินค้า",
    editProduct: "แก้ไขสินค้า",
    productName: "ชื่อสินค้า",
    productDescription: "คำอธิบาย",
    category: "หมวดหมู่",
    uploadImage: "อัปโหลดรูปภาพ",
    inventory: "สต็อก",
    save: "บันทึก",
    cancel: "ยกเลิก",
    delete: "ลบ",
    actions: "การกระทำ",

    // Notifications
    addNotification: "เพิ่มการแจ้งเตือน",
    notificationTitle: "หัวข้อ",
    notificationMessage: "ข้อความ",
    type: "ประเภท",
    active: "ใช้งาน",
    inactive: "ไม่ใช้งาน",
    openingHours: "เวลาทำการ",
    newProduct: "สินค้าใหม่",
    promotion: "โปรโมชั่น",
    general: "ทั่วไป",
    status: "สถานะ",

    // Footer
    footerAbout: "นำรสชาติไทยแท้สู่บัลแกเรียตั้งแต่ปี 2023",
    contactUs: "ติดต่อเรา",
    followUs: "ติดตามเรา",
    openHours: "เวลาทำการ",
    monFri: "พฤ - อังคาร: 11:00 - 19:00",
    sat: "พุธ: 11:00 - 15:30",
    sun: "อาทิตย์: ปิด",
    address: 'ถนน "Gurgulyat" 25, 1463 โซเฟีย, บัลแกเรีย',
    currency: "€",
    back: "กลับ",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("bg");

  const t = (key) =>
    translations[language]?.[key] || translations.en[key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}