import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestAccessWithPayment from './pages/RequestAccessWithPayment';
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import QuizPage from './pages/QuizPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import UseAccessCodePage from './pages/UseAccessCodePage';
import QuizStartPage from './pages/QuizStartPage'; // ? Add this line

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestAccessWithPayment />} />
        <Route path="/start" element={<QuizStartPage />} /> {/* ? Add this route */}
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/use-code" element={<UseAccessCodePage />} />
        <Route path="/verify" element={<VerifyPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />
      </Routes>
    </Router>
  );
}

export default App;