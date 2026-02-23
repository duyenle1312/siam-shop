export const mockProducts = [
  {
    id: 1,
    name: { en: "Thai Jasmine Rice 5kg", bg: "Тайландски жасминов ориз 5кг" },
    description: { 
      en: "Premium long-grain jasmine rice imported directly from Thailand. Perfect for stir-fries, curries and steamed rice dishes.", 
      bg: "Премиум дългозърнест жасминов ориз, внесен директно от Тайланд. Идеален за пържени ястия, къри и задушен ориз." 
    },
    price: 18.90,
    category: "rice_noodles",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop",
    inventory: 45,
    featured: true,
  },
  {
    id: 2,
    name: { en: "Pad Thai Noodles 400g", bg: "Пад Тай Нудли 400г" },
    description: { 
      en: "Authentic flat rice noodles perfect for making traditional Pad Thai at home.", 
      bg: "Автентични плоски оризови нудли, идеални за приготвяне на традиционен Пад Тай у дома." 
    },
    price: 5.50,
    category: "rice_noodles",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop",
    inventory: 80,
    featured: false,
  },
  {
    id: 3,
    name: { en: "Red Curry Paste 250g", bg: "Червена Къри Паста 250г" },
    description: { 
      en: "Aromatic Thai red curry paste made with dried red chilies, lemongrass, and galangal.", 
      bg: "Ароматна тайландска червена къри паста, направена от сушени червени чушки, лимонова трева и галангал." 
    },
    price: 7.20,
    category: "sauces_pastes",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=400&fit=crop",
    inventory: 35,
    featured: true,
  },
  {
    id: 4,
    name: { en: "Fish Sauce 500ml", bg: "Рибен Сос 500мл" },
    description: { 
      en: "Essential Thai fish sauce (Nam Pla) - the backbone of Thai cuisine. Adds umami depth to any dish.", 
      bg: "Есенциален тайландски рибен сос (Нам Пла) - основата на тайландската кухня. Добавя дълбочина умами на всяко ястие." 
    },
    price: 6.80,
    category: "sauces_pastes",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=400&fit=crop",
    inventory: 60,
    featured: false,
  },
  {
    id: 5,
    name: { en: "Coconut Milk 400ml", bg: "Кокосово Мляко 400мл" },
    description: { 
      en: "Rich and creamy coconut milk, perfect for curries, soups, and desserts.", 
      bg: "Богато и кремообразно кокосово мляко, идеално за къри, супи и десерти." 
    },
    price: 4.50,
    category: "canned",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=400&fit=crop",
    inventory: 120,
    featured: true,
  },
  {
    id: 6,
    name: { en: "Thai Basil Seeds", bg: "Тайландски Босилкови Семена" },
    description: { 
      en: "Fresh Thai holy basil seeds for growing your own authentic herbs at home.", 
      bg: "Пресни тайландски свещени босилкови семена за отглеждане на автентични билки у дома." 
    },
    price: 3.90,
    category: "spices_herbs",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=400&h=400&fit=crop",
    inventory: 25,
    featured: false,
  },
  {
    id: 7,
    name: { en: "Sriracha Hot Sauce 455ml", bg: "Сирача Лют Сос 455мл" },
    description: { 
      en: "The iconic Thai-style hot chili sauce. Adds a perfect kick to everything.", 
      bg: "Иконичният тайландски лют чили сос. Добавя перфектен лютив нюанс към всичко." 
    },
    price: 8.90,
    category: "sauces_pastes",
    image: "https://images.unsplash.com/photo-1678225105802-01949b1dff0d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inventory: 50,
    featured: true,
  },
  {
    id: 8,
    name: { en: "Thai Tea Mix 400g", bg: "Тайландски Чай Микс 400г" },
    description: { 
      en: "Authentic Thai iced tea mix. Just add water, sugar, and condensed milk for the perfect refreshment.", 
      bg: "Автентичен тайландски леден чай микс. Добавете вода, захар и кондензирано мляко за перфектно освежаване." 
    },
    price: 12.50,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=400&fit=crop",
    inventory: 30,
    featured: false,
  },
  {
    id: 9,
    name: { en: "Shrimp Chips 100g", bg: "Чипс с Скариди 100г" },
    description: { 
      en: "Crispy Thai shrimp crackers - a beloved snack throughout Southeast Asia.", 
      bg: "Хрупкави тайландски крекери със скариди - любима закуска в Югоизточна Азия." 
    },
    price: 3.20,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400&h=400&fit=crop",
    inventory: 90,
    featured: false,
  },
  {
    id: 10,
    name: { en: "Green Curry Paste 200g", bg: "Зелена Къри Паста 200г" },
    description: { 
      en: "Authentic Thai green curry paste with fresh green chilies, lemongrass, and kaffir lime.", 
      bg: "Автентична тайландска зелена къри паста с пресни зелени чушки, лимонова трева и кафир лайм." 
    },
    price: 6.90,
    category: "sauces_pastes",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=400&fit=crop",
    inventory: 40,
    featured: true,
  },
  {
    id: 11,
    name: { en: "Frozen Spring Rolls 500g", bg: "Замразени Спринг Ролс 500г" },
    description: { 
      en: "Ready-to-fry vegetable spring rolls. Crispy outside, savory inside.", 
      bg: "Готови за пържене зеленчукови спринг ролс. Хрупкави отвън, вкусни отвътре." 
    },
    price: 9.80,
    category: "frozen",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop",
    inventory: 2,
    featured: false,
  },
  {
    id: 12,
    name: { en: "Lemongrass Bundle", bg: "Връзка Лимонова Трева" },
    description: { 
      en: "Fresh lemongrass stalks. Essential for Tom Yum, curries, and stir-fries.", 
      bg: "Пресни стръкове лимонова трева. Задължителни за Том Ям, къри и пържени ястия." 
    },
    price: 2.80,
    category: "fresh",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop",
    inventory: 15,
    featured: false,
  },
];

export const mockNotifications = [
  {
    id: 1,
    title: { en: "Holiday Hours", bg: "Празнично работно време" },
    message: { 
      en: "We will be closed on March 3rd for Bulgaria's National Day. Happy Liberation Day!", 
      bg: "Ще бъдем затворени на 3-ти март за Националния празник на България. Честит Ден на Освобождението!" 
    },
    type: "openingHours",
    active: true,
    date: "2026-02-20",
  },
  {
    id: 2,
    title: { en: "New Mango Sticky Rice Kit!", bg: "Нов комплект за Манго с лепкав ориз!" },
    message: { 
      en: "Try our new Mango Sticky Rice DIY kit - everything you need for the perfect Thai dessert!", 
      bg: "Опитайте нашия нов комплект за Манго с лепкав ориз - всичко необходимо за перфектния тайландски десерт!" 
    },
    type: "newProduct",
    active: true,
    date: "2026-02-18",
  },
  {
    id: 3,
    title: { en: "10% Off All Sauces", bg: "10% намаление на всички сосове" },
    message: { 
      en: "This week only - get 10% off our entire sauces and pastes collection!", 
      bg: "Само тази седмица - 10% намаление на цялата ни колекция от сосове и пасти!" 
    },
    type: "promotion",
    active: false,
    date: "2026-02-15",
  },
];

export const categories = [
  "rice_noodles",
  "sauces_pastes",
  "spices_herbs",
  "snacks",
  "drinks",
  "frozen",
  "fresh",
  "canned",
];