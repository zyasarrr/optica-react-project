import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useStore } from "../App";
import { formatPrice } from "../data/products";

export default function Card() {
  const {cart,updateQuantity,language,t} = useStore();
  const total = cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
  const message = encodeURIComponent("Merhaba, aşağıdaki ürünler için sipariş vermek istiyorum:\n" + cart.map(x=>`${x.name} x ${x.quantity} - ${formatPrice(x.price* x.quantity,language)}`).join("\n") + `\nToplam: ${formatPrice(total,language)}`);
  return <main className="container cart-page"><div className="breadcrumbs"><Link to="/">Ana Sayfa</Link> / {t.cart}</div><div className="section-heading"><div><span className="eyebrow">YOUR SELECTION</span><h1>{t.cart}</h1></div></div>
    {!cart.length ? <div className="empty-state"><ShoppingBag size={42}/><h2>{t.empty}</h2><Link className="primary-btn" to="/urunler">{t.continue}</Link></div> :
    <div className="cart-layout"><div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="cart-item-info"><span>{item.brand}</span><h3>{item.name}</h3><b>{formatPrice(item.price,language)}</b><div className="quantity"><button onClick={()=>updateQuantity(item.id,item.quantity-1)}><Minus size={14}/></button><span>{item.quantity}</span><button onClick={()=>updateQuantity(item.id,item.quantity+1)}><Plus size={14}/></button></div></div><button className="remove-btn" onClick={()=>updateQuantity(item.id,0)}><Trash2 size={17}/><span>{t.remove}</span></button></div>)}</div>
    <aside className="cart-summary"><h3>Sipariş özeti</h3><div><span>{t.subtotal}</span><b>{formatPrice(total,language)}</b></div><div><span>Kargo</span><b>{total>=1500?"Ücretsiz":"Ödeme sırasında hesaplanır"}</b></div><hr/><div className="summary-total"><span>Toplam</span><strong>{formatPrice(total,language)}</strong></div><a className="primary-btn checkout-btn" href={`https://wa.me/905550000000?text=${message}`} target="_blank" rel="noreferrer">{t.checkout}</a><Link className="continue-link" to="/urunler">{t.continue}</Link></aside></div>}
  </main>;
}
