import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestAccessWithPayment from './pages/RequestAccessWithPayment';
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import QuizStartPage from './pages/QuizStartPage';
import QuizPage from './pages/QuizPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import UseAccessCodePage from './pages/UseAccessCodePage'; // Optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestAccessWithPayment />} />
        <Route path="/start" element={<QuizStartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/use-code" element={<UseAccessCodePage />} /> {/* Optional */}
        <Route path="/verify" element={<VerifyPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />
      </Routes>
    </Router>
  );
}

export default App;