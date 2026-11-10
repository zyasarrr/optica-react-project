import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal } from "lucide-react";
import { useStore } from "../App";
import ProductCard from "../components/ProductCard";

export default function Product({favoritesOnly=false}) {
  const {t, products, search, favorites} = useStore();
  const [category,setCategory] = useState("Tümü");
  const [shape,setShape] = useState("Tümü");
  const [sort,setSort] = useState("featured");
  const [maxPrice,setMaxPrice] = useState(5000);
  const list = useMemo(() => {
    let data = products.filter(p => (!favoritesOnly || favorites.includes(p.id)) &&
      (category==="Tümü" || p.category===category) &&
      (shape==="Tümü" || p.shape===shape) &&
      p.price<=maxPrice &&
      `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(search.toLowerCase()));
    if(sort==="low") data.sort((a,b)=>a.price-b.price);
    if(sort==="high") data.sort((a,b)=>b.price-a.price);
    if(sort==="rating") data.sort((a,b)=>b.rating-a.rating);
    return data;
  },[products,category,shape,sort,maxPrice,search,favorites,favoritesOnly]);
  return <main className="listing-page container">
    <div className="breadcrumbs"><Link to="/">Ana Sayfa</Link> / {favoritesOnly ? t.favorites : t.allProducts}</div>
    <div className="listing-title"><div><span className="eyebrow">OPTICA COLLECTION</span><h1>{favoritesOnly?t.favorites:t.allProducts}</h1><p>{list.length} ürün listeleniyor</p></div><div className="sort-control"><SlidersHorizontal size={17}/><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Öne çıkanlar</option><option value="low">Fiyat: düşükten yükseğe</option><option value="high">Fiyat: yüksekten düşüğe</option><option value="rating">En yüksek puan</option></select></div></div>
    <div className="listing-layout"><aside className="filters"><div className="filter-head"><h3>{t.filter}</h3><button onClick={()=>{setCategory("Tümü");setShape("Tümü");setMaxPrice(5000);}}>Temizle</button></div>
      <div className="filter-group"><h4>{t.category}</h4>{["Tümü","Optik","Güneş"].map(x=><label key={x}><input type="radio" checked={category===x} onChange={()=>setCategory(x)}/>{x==="Tümü"?"Tümü":x}</label>)}</div>
      <div className="filter-group"><h4>{t.shape}</h4>{["Tümü","Dikdörtgen","Yuvarlak","Kare","Kedi Gözü","Oval"].map(x=><label key={x}><input type="radio" checked={shape===x} onChange={()=>setShape(x)}/>{x}</label>)}</div>
      <div className="filter-group"><h4>{t.price}</h4><input type="range" min="1000" max="5000" step="100" value={maxPrice} onChange={e=>setMaxPrice(Number(e.target.value))}/><p>₺1.000 — ₺{maxPrice.toLocaleString("tr-TR")}</p></div>
    </aside><div className="listing-products">{list.length ? <div className="product-grid">{list.map(p=><ProductCard key={p.id} product={p}/>)}</div> : <div className="empty-state"><h3>{t.noResults}</h3><button className="primary-btn" onClick={()=>{setCategory("Tümü");setShape("Tümü");setMaxPrice(5000);}}>Filtreleri temizle</button></div>}</div></div>
  </main>;
}
