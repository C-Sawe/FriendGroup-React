import React, { useState } from 'react';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [message, setMessage] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    let paymentData;
    switch (paymentMethod) {
      case 'card':
        if (!cardNumber || !expiryDate || !cvv) {
          setMessage('Please fill out all card details.');
          return;
        }
        paymentData = { method: 'Card', cardNumber, expiryDate, cvv };
        break;
      case 'paypal':
        if (!paypalEmail) {
          setMessage('Please enter your PayPal email.');
          return;
        }
        paymentData = { method: 'PayPal', email: paypalEmail };
        break;
      case 'mpesa':
        if (!mpesaNumber) {
          setMessage('Please enter your M-Pesa number.');
          return;
        }
        paymentData = { method: 'M-Pesa', number: mpesaNumber };
        break;
      default:
        return;
    }

    try {
      // Simulate API call to process payment (replace with actual API endpoint)
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
      const data = await response.json(); // Assuming API returns JSON response
      setMessage(data.message); // Display success or error message
    } catch (error) {
      console.error('Error processing payment:', error);
      setMessage('Failed to process payment.');
    }
  };

  const handlePaypalImage = () => {
    const paypalImage = prompt('Please enter your PayPal image URL:');
    // Handle PayPal image URL input
    console.log('PayPal Image URL:', paypalImage);
  };

  const handleMpesaPhoneNumber = () => {
    const mpesaNumber = prompt('Please enter your M-Pesa number:');
    setMpesaNumber(mpesaNumber); // Set M-Pesa number state
    console.log('M-Pesa Number:', mpesaNumber);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="mb-4">Choose Payment Method</h2>
          <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
            <label className={`btn btn-outline-primary ${paymentMethod === 'card' ? 'active' : ''}`}>
              <input type="radio" name="paymentMethod" value="card" onChange={() => setPaymentMethod('card')} /> Card
            </label>
            <label className={`btn btn-outline-primary ${paymentMethod === 'paypal' ? 'active' : ''}`}>
              <input type="radio" name="paymentMethod" value="paypal" onChange={() => setPaymentMethod('paypal')} /> PayPal
            </label>
            <label className={`btn btn-outline-primary ${paymentMethod === 'mpesa' ? 'active' : ''}`}>
              <input type="radio" name="paymentMethod" value="mpesa" onChange={() => setPaymentMethod('mpesa')} /> M-Pesa
            </label>
          </div>

          {paymentMethod === 'card' && (
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" className="form-control" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Pay with Card</button>
            </form>
          )}

          {paymentMethod === 'paypal' && (
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label htmlFor="paypalEmail">PayPal Email</label>
                <input type="email" className="form-control" id="paypalEmail" value={paypalEmail} onChange={(e) => setPaypalEmail(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handlePaypalImage}>Add PayPal Image</button>
              <button type="submit" className="btn btn-primary ml-2">Pay with PayPal</button>
            </form>
          )}

          {paymentMethod === 'mpesa' && (
            <form onSubmit={handlePayment}>
              <div className="form-group">
                <label htmlFor="mpesaNumber">M-Pesa Number</label>
                <input type="text" className="form-control" id="mpesaNumber" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleMpesaPhoneNumber}>Add M-Pesa Number</button>
              <button type="submit" className="btn btn-primary ml-2">Pay with M-Pesa</button>
            </form>
          )}

          {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
