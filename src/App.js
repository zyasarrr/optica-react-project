import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import { Search, ShoppingBag, Heart, Sun, Moon, Menu, X, Globe, UserRound, Instagram, Facebook, ArrowRight } from "lucide-react";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductDetail from "./pages/productdetail";
import Card from "./pages/card";
import { products } from "./data/products";

const StoreContext = createContext(null);
export const useStore = () => useContext(StoreContext);

const translations = {
  tr: {
    home:"Ana Sayfa", products:"Gözlükler", services:"Hizmetler", contact:"İletişim",
    search:"Ürün ara...", account:"Hesabım", cart:"Sepetim", heroEyebrow:"Yeni sezon koleksiyonu",
    heroTitle:"Tarzınızı yansıtan\nkusursuz çerçeve.", heroText:"Her bakışta kalite, her detayda stil. Size en uygun gözlüğü keşfedin.",
    discover:"Koleksiyonu keşfet", best:"Çok Satanlar", viewAll:"Tümünü gör", categories:"Kategorilere göre keşfet",
    optical:"Optik Gözlük", sunglasses:"Güneş Gözlüğü", computer:"Bilgisayar Gözlüğü", shapes:"Çerçeve şekline göre alışveriş",
    featured:"Öne çıkan ürünler", brands:"Popüler markalar", reviews:"Müşterilerimiz ne diyor?",
    visit:"Mağazamızı ziyaret edin", visitText:"Gözlükleri yakından incelemek ve size en uygun modeli bulmak için mağazamıza bekleriz.",
    storeButton:"Yol tarifi al", newsletter:"Yeniliklerden haberdar olun", newsletterText:"Yeni koleksiyonlar ve özel fırsatlar için e-posta listemize katılın.",
    subscribe:"Abone ol", email:"E-posta adresiniz", allProducts:"Tüm ürünler", filter:"Filtrele", sort:"Sırala",
    category:"Kategori", shape:"Çerçeve şekli", price:"Fiyat", brand:"Marka", clear:"Temizle", add:"Sepete ekle",
    details:"Ürün detayları", description:"Açıklama", delivery:"Teslimat ve iade", quantity:"Adet", empty:"Sepetiniz şu an boş.",
    continue:"Alışverişe devam et", subtotal:"Ara toplam", checkout:"WhatsApp ile sipariş ver", remove:"Kaldır",
    favorites:"Favoriler", noResults:"Aramanızla eşleşen ürün bulunamadı.", footerText:"Görüşünüzü yansıtan zamansız tasarımlar.",
    rights:"Tüm hakları saklıdır.", serviceTitle:"Gözünüz için doğru çözüm", serviceText:"Uzman desteği, kaliteli ürünler ve satış sonrası hizmet."
  },
  en: {
    home:"Home", products:"Eyewear", services:"Services", contact:"Contact",
    search:"Search products...", account:"My account", cart:"Cart", heroEyebrow:"New season collection",
    heroTitle:"Find the frame\nthat defines you.", heroText:"Quality in every glance, style in every detail. Discover your perfect pair.",
    discover:"Explore collection", best:"Best sellers", viewAll:"View all", categories:"Shop by category",
    optical:"Optical glasses", sunglasses:"Sunglasses", computer:"Computer glasses", shapes:"Shop by frame shape",
    featured:"Featured products", brands:"Popular brands", reviews:"What our customers say",
    visit:"Visit our store", visitText:"Visit us to explore the frames up close and find the perfect fit.",
    storeButton:"Get directions", newsletter:"Stay in the loop", newsletterText:"Join our list for new collections and exclusive offers.",
    subscribe:"Subscribe", email:"Your email address", allProducts:"All products", filter:"Filter", sort:"Sort",
    category:"Category", shape:"Frame shape", price:"Price", brand:"Brand", clear:"Clear", add:"Add to cart",
    details:"Product details", description:"Description", delivery:"Shipping & returns", quantity:"Quantity", empty:"Your cart is currently empty.",
    continue:"Continue shopping", subtotal:"Subtotal", checkout:"Order via WhatsApp", remove:"Remove",
    favorites:"Favorites", noResults:"No products match your search.", footerText:"Timeless designs that reflect your vision.",
    rights:"All rights reserved.", serviceTitle:"The right solution for your eyes", serviceText:"Expert guidance, quality products and after-sales care."
  }
};

function AppShell() {
  const [language, setLanguage] = useState(localStorage.getItem("optica-language") || "tr");
  const [theme, setTheme] = useState(localStorage.getItem("optica-theme") || "light");
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("optica-cart") || "[]"));
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("optica-favorites") || "[]"));
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[language];

  useEffect(() => { localStorage.setItem("optica-language", language); }, [language]);
  useEffect(() => { localStorage.setItem("optica-theme", theme); document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { localStorage.setItem("optica-cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("optica-favorites", JSON.stringify(favorites)); }, [favorites]);

  const addToCart = (product, quantity = 1) => setCart(current => {
    const found = current.find(item => item.id === product.id);
    return found ? current.map(item => item.id === product.id ? {...item, quantity:item.quantity + quantity} : item) : [...current, {...product, quantity}];
  });
  const updateQuantity = (id, quantity) => setCart(current => quantity <= 0 ? current.filter(x => x.id !== id) : current.map(x => x.id === id ? {...x, quantity} : x));
  const toggleFavorite = id => setFavorites(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);
  const value = useMemo(() => ({ language, setLanguage, theme, setTheme, t, cart, addToCart, updateQuantity, favorites, toggleFavorite, search, setSearch, products }), [language, theme, cart, favorites, search]);

  return <StoreContext.Provider value={value}>
    <div className="app">
      <div className="topbar"><span>Ücretsiz kargo · 1.500 TL üzeri alışverişlerde</span><span>+90 262 000 00 00</span></div>
      <header className="header">
        <button className="icon-btn mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">{mobileOpen ? <X/> : <Menu/>}</button>
        <Link to="/" className="logo"><span className="logo-mark">O</span>PTICA<span className="logo-dot">.</span></Link>
        <nav className={mobileOpen ? "nav nav-open" : "nav"}>
          <NavLink to="/" onClick={() => setMobileOpen(false)}>{t.home}</NavLink>
          <NavLink to="/urunler" onClick={() => setMobileOpen(false)}>{t.products}</NavLink>
          <a href="/#services" onClick={() => setMobileOpen(false)}>{t.services}</a>
          <a href="/#contact" onClick={() => setMobileOpen(false)}>{t.contact}</a>
        </nav>
        <div className="header-actions">
          <form className="search-box" onSubmit={e => {e.preventDefault(); window.location.href="/urunler";}}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search}/>
            <button aria-label="Search"><Search size={17}/></button>
          </form>
          <button className="icon-btn" title="Dil / Language" onClick={() => setLanguage(language === "tr" ? "en" : "tr")}><Globe size={19}/><small>{language.toUpperCase()}</small></button>
          <button className="icon-btn" title="Tema" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon size={19}/> : <Sun size={19}/>}</button>
          <Link className="icon-btn favorite-link" to="/favoriler" title={t.favorites}><Heart size={19}/><small>{favorites.length}</small></Link>
          <Link className="icon-btn cart-link" to="/sepet" title={t.cart}><ShoppingBag size={19}/><small>{cart.reduce((sum, item) => sum + item.quantity, 0)}</small></Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/urunler" element={<Product/>}/>
        <Route path="/urun/:id" element={<ProductDetail/>}/>
        <Route path="/sepet" element={<Card/>}/>
        <Route path="/favoriler" element={<Product favoritesOnly/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  </StoreContext.Provider>;
}

function Footer() {
  const {t} = useStore();
  return <footer className="footer" id="contact">
    <div className="footer-main">
      <div><Link to="/" className="logo footer-logo"><span className="logo-mark">O</span>PTICA<span className="logo-dot">.</span></Link><p>{t.footerText}</p><div className="socials"><a href="#instagram"><Instagram/></a><a href="#facebook"><Facebook/></a></div></div>
      <div><h4>{t.products}</h4><Link to="/urunler">Optik gözlük</Link><Link to="/urunler">Güneş gözlüğü</Link><Link to="/urunler">Bilgisayar gözlüğü</Link></div>
      <div><h4>Optica</h4><a href="#services">{t.services}</a><a href="#contact">{t.contact}</a><Link to="/sepet">{t.cart}</Link></div>
      <div><h4>İletişim</h4><p>İzmit, Kocaeli</p><p>+90 262 000 00 00</p><p>info@optica.com</p></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} OPTICA. {t.rights}</span><span>Güvenli alışveriş · Kolay iade</span></div>
  </footer>;
}

export default function App() { return <BrowserRouter><AppShell/></BrowserRouter>; }
