import React, { useState } from 'react';
import { X, CreditCard, Smartphone, Wallet, Shield, Lock } from 'lucide-react';

// CHANGED: Added new PaymentModal component interface for payment processing
interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    movie: string;
    theater: string;
    date: string;
    time: string;
    total: number;
  };
}

// CHANGED: Created complete PaymentModal component with multiple payment gateways
const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, bookingDetails }) => {
  // CHANGED: Added state management for payment method selection and form data
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  if (!isOpen) return null;

  // CHANGED: Added multiple payment method options with icons and descriptions
  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: Wallet,
      description: 'Pay with your PayPal account'
    },
    {
      id: 'apple',
      name: 'Apple Pay',
      icon: Smartphone,
      description: 'Touch ID or Face ID'
    },
    {
      id: 'google',
      name: 'Google Pay',
      icon: Smartphone,
      description: 'Pay with Google'
    }
  ];

  // CHANGED: Added payment processing simulation with loading states
  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful! Your tickets have been booked.');
      onClose();
    }, 2000);
  };

  // CHANGED: Added card number formatting function for better UX
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // CHANGED: Added expiry date formatting function (MM/YY format)
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    // CHANGED: Added full-screen modal overlay with backdrop blur
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* CHANGED: Added modal header with close button */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Complete Payment</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* CHANGED: Added booking summary section showing ticket details */}
          <div className="bg-black rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Movie</span>
                <span className="text-white">{bookingDetails.movie}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Theater</span>
                <span className="text-white">{bookingDetails.theater}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Date & Time</span>
                <span className="text-white">{bookingDetails.date} at {bookingDetails.time}</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-white">Total</span>
                  <span className="text-red-500">${bookingDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CHANGED: Added payment method selection grid */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Select Payment Method</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedPayment === method.id
                      ? 'border-red-500 bg-red-500/10'
                      : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <method.icon className={`h-6 w-6 ${
                      selectedPayment === method.id ? 'text-red-500' : 'text-gray-400'
                    }`} />
                    <div>
                      <div className={`font-semibold ${
                        selectedPayment === method.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {method.name}
                      </div>
                      <div className="text-sm text-gray-400">{method.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CHANGED: Added credit card form with validation and formatting */}
          {selectedPayment === 'card' && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Card Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({...cardDetails, number: formatCardNumber(e.target.value)})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({...cardDetails, expiry: formatExpiry(e.target.value)})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CHANGED: Added PayPal payment option display */}
          {selectedPayment === 'paypal' && (
            <div className="mb-6 p-6 bg-gray-800 rounded-lg text-center">
              <Wallet className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <p className="text-white mb-2">You'll be redirected to PayPal</p>
              <p className="text-gray-400 text-sm">Complete your payment securely with PayPal</p>
            </div>
          )}

          {/* CHANGED: Added Apple Pay option display */}
          {selectedPayment === 'apple' && (
            <div className="mb-6 p-6 bg-gray-800 rounded-lg text-center">
              <Smartphone className="h-12 w-12 text-white mx-auto mb-3" />
              <p className="text-white mb-2">Use Touch ID or Face ID</p>
              <p className="text-gray-400 text-sm">Authenticate with your biometric data</p>
            </div>
          )}

          {/* CHANGED: Added Google Pay option display */}
          {selectedPayment === 'google' && (
            <div className="mb-6 p-6 bg-gray-800 rounded-lg text-center">
              <Smartphone className="h-12 w-12 text-blue-500 mx-auto mb-3" />
              <p className="text-white mb-2">Pay with Google</p>
              <p className="text-gray-400 text-sm">Use your saved payment methods from Google</p>
            </div>
          )}

          {/* CHANGED: Added security information section */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-white font-semibold text-sm">Secure Payment</p>
                <p className="text-gray-400 text-xs">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </div>

          {/* CHANGED: Added payment button with loading states */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
              isProcessing
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 text-white transform hover:scale-105'
            }`}
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Lock className="h-5 w-5" />
                <span>Pay ${bookingDetails.total.toFixed(2)}</span>
              </>
            )}
          </button>

          {/* CHANGED: Added terms and conditions notice */}
          <p className="text-gray-400 text-xs text-center mt-4">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;