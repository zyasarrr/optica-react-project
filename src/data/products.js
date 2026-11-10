export const products = [
  { id: "op-101", name: "Vista Classic", category: "Optik", shape: "Dikdörtgen", brand: "Optica", price: 1890, oldPrice: 2290, color: "Siyah", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=85", tag: "Çok Satan", rating: 4.8 },
  { id: "op-102", name: "Aurelia Round", category: "Optik", shape: "Yuvarlak", brand: "Aurelia", price: 2150, oldPrice: 2590, color: "Altın", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85", tag: "Yeni", rating: 4.9 },
  { id: "op-103", name: "Coastal Wave", category: "Güneş", shape: "Kare", brand: "Coastal", price: 2490, oldPrice: 2890, color: "Siyah", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85", tag: "Popüler", rating: 4.7 },
  { id: "op-104", name: "Luna Vision Tortoise", category: "Optik", shape: "Kedi Gözü", brand: "Luna", price: 1990, oldPrice: null, color: "Desenli", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85", tag: "", rating: 4.6 },
  { id: "op-105", name: "AeroLite Ultra", category: "Optik", shape: "Dikdörtgen", brand: "AeroLite", price: 1750, oldPrice: 1990, color: "Gümüş", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85", tag: "Avantajlı", rating: 4.8 },
  { id: "op-106", name: "Noir Atelier", category: "Güneş", shape: "Yuvarlak", brand: "Atelier", price: 2790, oldPrice: null, color: "Siyah", image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=85", tag: "Yeni", rating: 4.9 },
  { id: "op-107", name: "Urban Edge", category: "Güneş", shape: "Kare", brand: "Urban", price: 2290, oldPrice: 2690, color: "Kahverengi", image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?auto=format&fit=crop&w=900&q=85", tag: "", rating: 4.5 },
  { id: "op-108", name: "Minimal Line", category: "Optik", shape: "Oval", brand: "Optica", price: 1650, oldPrice: null, color: "Şeffaf", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85", tag: "", rating: 4.7 },
];

export const formatPrice = (price, language = "tr") =>
  new Intl.NumberFormat(language === "tr" ? "tr-TR" : "en-US", {
    style: "currency", currency: language === "tr" ? "TRY" : "USD",
    maximumFractionDigits: 0
  }).format(language === "tr" ? price : price / 30);
