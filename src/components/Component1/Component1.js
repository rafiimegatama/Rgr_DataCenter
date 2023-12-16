import React, { useState } from 'react';

function Component1({ initialText = 'Submit', clickedText = 'Submitted' }) {
  const [serverType, setServerType] = useState('');
  const [duration, setDuration] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const [os, setOs] = useState('');
  const [services, setServices] = useState([]);
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [text, setText] = useState(initialText);
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(clickedText);
    const cost = calculateCost();
    alert(`You have selected: ${quantity} ${serverType} server(s) with ${os} for ${duration} month(s) in ${location}. Additional services: ${services.join(', ')}. Total cost: $${cost}. A confirmation has been sent to ${email}. Payment method: ${paymentMethod}. Discount code: ${discountCode}`);
  };

  const handleServiceChange = (event) => {
    const value = event.target.value;
    setServices(prev => prev.includes(value) ? prev.filter(service => service !== value) : [...prev, value]);
  };

  const calculateCost = () => {
    // Add your cost calculation logic here
    return 0;
  };

  const handleReview = () => {
    setShowSummary(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* existing form fields */}
      <label>
        Select additional services:
        <select multiple value={services} onChange={handleServiceChange}>
          <option value="Backup">Backup</option>
          <option value="Security">Security</option>
          <option value="Support">Support</option>
        </select>
      </label>
      <label>
        Enter your email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>
        Select payment method:
        <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
          <option value="">--Please choose an option--</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
      </label>
      <label>
        Enter discount code:
        <input type="text" value={discountCode} onChange={e => setDiscountCode(e.target.value)} />
      </label>
      <button type="button" onClick={handleReview}>Review Selection</button>
      {showSummary && (
        <div>
          <p>You have selected: {quantity} {serverType} server(s) with {os} for {duration} month(s) in {location}. Additional services: {services.join(', ')}. Total cost: ${calculateCost()}</p>
        </div>
      )}
      <input type="submit" value={text} />
    </form>
  );
}

export default Component1;