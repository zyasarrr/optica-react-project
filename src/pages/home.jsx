import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ShieldCheck, Truck, RefreshCw, Headphones } from "lucide-react";
import { useStore } from "../App";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const {t, products} = useStore();
  const categories = [
    {title:t.optical, sub:"Günlük stilinize uygun", img:"https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=85", filter:"Optik"},
    {title:t.sunglasses, sub:"Güneşli günlerin tamamlayıcısı", img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85", filter:"Güneş"},
    {title:t.computer, sub:"Ekran karşısında konfor", img:"https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85", filter:"Optik"}
  ];
  return <main>
    <section className="hero">
      <div className="hero-copy"><span className="eyebrow">{t.heroEyebrow}</span><h1>{t.heroTitle}</h1><p>{t.heroText}</p><Link className="primary-btn" to="/urunler">{t.discover}<ArrowRight size={17}/></Link></div>
      <div className="hero-image"><img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1500&q=90" alt="Optica eyewear collection"/><div className="hero-note">OPTICA / 2026<br/><strong>See it your way.</strong></div></div>
    </section>
    <section className="section container">
      <div className="section-heading"><div><span className="eyebrow">OPTICA SELECTION</span><h2>{t.best}</h2></div><Link className="text-link" to="/urunler">{t.viewAll}<ArrowUpRight size={17}/></Link></div>
      <div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>
    <section className="category-section"><div className="container"><div className="section-heading"><div><span className="eyebrow">FIND YOUR STYLE</span><h2>{t.categories}</h2></div></div><div className="category-grid">{categories.map((c,i)=><Link className="category-card" to="/urunler" key={i}><img src={c.img} alt={c.title}/><div><span>{c.sub}</span><h3>{c.title}</h3><b><ArrowUpRight/></b></div></Link>)}</div></div></section>
    <section className="section container">
      <div className="section-heading"><div><span className="eyebrow">CURATED FOR YOU</span><h2>{t.featured}</h2></div><Link className="text-link" to="/urunler">{t.viewAll}<ArrowUpRight size={17}/></Link></div>
      <div className="product-grid">{products.slice(4,8).map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>
    <section className="shape-banner container"><div><span className="eyebrow">THE RIGHT FIT</span><h2>{t.shapes}</h2><p>Yüzünüze ve tarzınıza en uygun çerçeveyi keşfedin.</p><Link className="primary-btn" to="/urunler">{t.discover}<ArrowRight size={16}/></Link></div><div className="shape-pills"><span>Square</span><span>Rectangle</span><span>Round</span><span>Cat Eye</span><span>Oval</span></div></section>
    <section className="brand-strip"><div className="container"><span className="eyebrow">SELECTED LABELS</span><h2>{t.brands}</h2><div className="brand-list"><span>Ray-Ban</span><span>VOGUE</span><span>Polaroid</span><span>OAKLEY</span><span>OPTICA</span><span>Armani</span></div></div></section>
    <section className="section container reviews"><span className="eyebrow">CUSTOMER STORIES</span><h2>{t.reviews}</h2><div className="review-grid"><blockquote>“Ürün kalitesi ve mağaza deneyimi beklentimin üzerindeydi.”<b>— Deniz K.</b></blockquote><blockquote>“Doğru çerçeveyi seçmem için çok yardımcı oldular.”<b>— Ayşe M.</b></blockquote><blockquote>“Hızlı teslimat ve özenli paketleme. Tavsiye ederim.”<b>— Mert A.</b></blockquote></div></section>
    <section className="store-section" id="services"><div className="container store-inner"><div><span className="eyebrow">COME SAY HELLO</span><h2>{t.visit}</h2><p>{t.visitText}</p><a className="primary-btn" href="https://maps.google.com/?q=Izmit+Kocaeli" target="_blank" rel="noreferrer">{t.storeButton}<ArrowUpRight size={16}/></a></div><img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85" alt=""/></div></section>
    <section className="service-row container"><div><ShieldCheck/><h3>Güvenli alışveriş</h3><p>Güvenli ödeme altyapısı</p></div><div><Truck/><h3>Ücretsiz kargo</h3><p>Belirli tutar üzeri</p></div><div><RefreshCw/><h3>Kolay iade</h3><p>Kolay ve şeffaf süreç</p></div><div><Headphones/><h3>Uzman desteği</h3><p>Her zaman yanınızdayız</p></div></section>
    <section className="newsletter"><div className="container newsletter-inner"><div><h2>{t.newsletter}</h2><p>{t.newsletterText}</p></div><form onSubmit={e=>{e.preventDefault();alert("Teşekkürler!");}}><input type="email" required placeholder={t.email}/><button>{t.subscribe}<ArrowRight size={16}/></button></form></div></section>
  </main>;
}
