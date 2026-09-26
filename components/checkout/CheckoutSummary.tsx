import Image from "next/image";

const items = [
  { name: "adipising elit, sed do eiusmod tempor", detail: "Lorem ipsum dollar...", price: "$24.69" },
  { name: "sed do eiusmod tempor adipisicing elit", detail: "Lorem ipsum dollar...", price: "$24.69" },
];

export default function CheckoutSummary() {
  return (
    <aside className="checkout-summary" aria-labelledby="checkout-summary-title">
      <h2 id="checkout-summary-title">Summary</h2>
      <ul className="checkout-summary__items">
        {items.map((item) => (
          <li className="checkout-summary__item" key={item.name}>
            <Image src="/images/classroom-teacher.webp" alt="" width={160} height={108} sizes="120px" />
            <div className="checkout-summary__item-copy">
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
              <strong>{item.price}</strong>
            </div>
          </li>
        ))}
      </ul>
      <dl className="checkout-totals">
        <div><dt>Subtotal</dt><dd>$51.38</dd></div>
        <div><dt>Coupon Discount</dt><dd>0 %</dd></div>
        <div><dt>TAX</dt><dd>5</dd></div>
        <div className="checkout-totals__total"><dt>Total</dt><dd>$56.38</dd></div>
      </dl>
    </aside>
  );
}
