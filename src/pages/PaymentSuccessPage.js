import { useLocation } from 'react-router-dom';

export default function PaymentSuccessPage() {
  const location = useLocation();
  const { accessCode, phone } = location.state || {};

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">✅ Payment Successful!</h1>
      <p>We’ve sent your access code to <strong>{phone}</strong>.</p>
      <p className="mt-4">Code: <code className="text-lg">{accessCode}</code></p>
    </div>
  );
}
