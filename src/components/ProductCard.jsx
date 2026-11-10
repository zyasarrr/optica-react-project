import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useStore } from "../App";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { language, t, addToCart, favorites, toggleFavorite } = useStore();
  const saved = favorites.includes(product.id);
  return <article className="product-card">
    <div className="product-image-wrap">
      <Link to={`/urun/${product.id}`}><img src={product.image} alt={product.name}/></Link>
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <button className={`heart-btn ${saved ? "active" : ""}`} onClick={() => toggleFavorite(product.id)} aria-label="Favorilere ekle"><Heart size={18} fill={saved ? "currentColor" : "none"}/></button>
      <button className="quick-add" onClick={() => addToCart(product)}><ShoppingBag size={15}/>{t.add}</button>
    </div>
    <div className="product-meta"><span>{product.brand}</span><span><Star size={12} fill="currentColor"/> {product.rating}</span></div>
    <Link to={`/urun/${product.id}`} className="product-name">{product.name}</Link>
    <div className="product-price">{formatPrice(product.price, language)} {product.oldPrice && <del>{formatPrice(product.oldPrice, language)}</del>}</div>
  </article>;
}
