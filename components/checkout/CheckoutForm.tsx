"use client";

import { useState } from "react";

const methods = [
  { id: "paypal", label: "PayPal" },
  { id: "amex", label: "American Express" },
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
] as const;

export default function CheckoutForm() {
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("paypal");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Checkout processing is not connected yet. No payment has been made.");
  }

  return (
    <section className="checkout-form-card" aria-labelledby="checkout-title">
      <h1 id="checkout-title">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className="payment-methods">
          <legend>Cart Type</legend>
          <div className="payment-methods__options">
            {methods.map((item) => (
              <label className={`payment-method${method === item.id ? " payment-method--selected" : ""}`} key={item.id}>
                <input
                  type="radio"
                  name="payment-method"
                  value={item.id}
                  checked={method === item.id}
                  onChange={() => setMethod(item.id)}
                  aria-label={item.label}
                />
                <span className={`payment-logo payment-logo--${item.id}`} aria-hidden="true">
                  {item.id === "paypal" ? <><b>P</b><i>P</i></> : null}
                  {item.id === "amex" ? <><b>AMERICAN</b><b>EXPRESS</b></> : null}
                  {item.id === "visa" ? <b>VISA</b> : null}
                  {item.id === "mastercard" ? <><i /><i /></> : null}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="checkout-fields">
          <label className="checkout-field">
            <span>Name on Card</span>
            <input type="text" name="cardholder" placeholder="Enter name on Card" autoComplete="cc-name" required />
          </label>
          <label className="checkout-field">
            <span>Card Number</span>
            <input type="text" name="card-number" placeholder="Enter Card Number" inputMode="numeric" autoComplete="cc-number" maxLength={23} pattern="[0-9 ]{13,23}" title="Enter a valid card number" required />
          </label>
          <div className="checkout-fields__split">
            <label className="checkout-field">
              <span>Expiration Date (MM/YY)</span>
              <input type="text" name="expiry" placeholder="Enter Expiration Date" autoComplete="cc-exp" inputMode="numeric" maxLength={5} pattern="(0[1-9]|1[0-2])/[0-9]{2}" title="Use MM/YY format" required />
            </label>
            <label className="checkout-field">
              <span>CVC</span>
              <input type="password" name="cvc" placeholder="Enter CVC" autoComplete="cc-csc" inputMode="numeric" maxLength={4} pattern="[0-9]{3,4}" title="Enter a 3 or 4 digit security code" required />
            </label>
          </div>
        </div>

        <label className="checkout-save">
          <input type="checkbox" name="save-card" />
          <span>Save my information for faster checkout</span>
        </label>
        <button className="checkout-submit" type="submit">Confirm Payment</button>
        {message ? <p className="checkout-message" role="status">{message}</p> : null}
      </form>
    </section>
  );
}
