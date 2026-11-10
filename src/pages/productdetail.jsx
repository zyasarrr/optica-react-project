import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { useStore } from "../App";
import { formatPrice } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const {id} = useParams();
  const {products,language,t,addToCart,favorites,toggleFavorite} = useStore();
  const product = products.find(p=>p.id===id);
  const [quantity,setQuantity] = useState(1);
  const [activeTab,setActiveTab] = useState("description");
  if(!product) return <main className="container empty-state"><h1>Ürün bulunamadı</h1><Link className="primary-btn" to="/urunler">Ürünlere dön</Link></main>;
  const saved = favorites.includes(product.id);
  return <main className="container detail-page">
    <div className="breadcrumbs"><Link to="/">Ana Sayfa</Link> / <Link to="/urunler">Gözlükler</Link> / {product.name}</div>
    <div className="detail-layout"><div className="detail-image"><img src={product.image} alt={product.name}/></div><div className="detail-info"><span className="eyebrow">{product.brand} · {product.category}</span><h1>{product.name}</h1><div className="detail-rating">★★★★★ <span>{product.rating} / 5.0 · 24 değerlendirme</span></div><div className="detail-price">{formatPrice(product.price,language)} {product.oldPrice&&<del>{formatPrice(product.oldPrice,language)}</del>}</div><p className="detail-description">Günlük kullanım için tasarlanan bu model, zamansız çizgileri ve dengeli formuyla stilinizi tamamlar. Hafif yapısı ve özenli detaylarıyla gün boyu konfor sunar.</p><div className="detail-spec"><span>Çerçeve şekli</span><b>{product.shape}</b><span>Renk</span><b>{product.color}</b><span>Marka</span><b>{product.brand}</b></div><div className="buy-row"><div className="quantity"><button onClick={()=>setQuantity(Math.max(1,quantity-1))}><Minus size={15}/></button><span>{quantity}</span><button onClick={()=>setQuantity(quantity+1)}><Plus size={15}/></button></div><button className="primary-btn add-cart" onClick={()=>addToCart(product,quantity)}>{t.add}</button><button className={`outline-icon ${saved?"saved":""}`} onClick={()=>toggleFavorite(product.id)}><Heart fill={saved?"currentColor":"none"}/></button></div><div className="detail-benefits"><span><Truck/> Hızlı ve güvenli teslimat</span><span><ShieldCheck/> Güvenli alışveriş</span></div></div></div>
    <div className="detail-tabs"><div className="tab-buttons"><button className={activeTab==="description"?"selected":""} onClick={()=>setActiveTab("description")}>{t.description}</button><button className={activeTab==="delivery"?"selected":""} onClick={()=>setActiveTab("delivery")}>{t.delivery}</button></div><p>{activeTab==="description"?"Optica koleksiyonundan seçilen bu model; kalite, konfor ve tasarımı bir araya getirir. Ürün görselleri temsilidir.": "Siparişleriniz özenle paketlenir. İade ve değişim koşulları için mağazamızla iletişime geçebilirsiniz."}</p></div>
    <section className="section"><div className="section-heading"><h2>Benzer ürünler</h2><Link className="text-link" to="/urunler">Tümünü gör</Link></div><div className="product-grid">{products.filter(p=>p.id!==product.id).slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div></section>
  </main>;
}
