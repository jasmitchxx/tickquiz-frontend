import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RequestAccessWithPayment from './pages/RequestAccessWithPayment';
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import About from './pages/About';
import Contact from './pages/Contact';
import SubjectSelectionPage from './pages/SubjectSelectionPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import QuizPage from './pages/QuizPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import UseAccessCodePage from './pages/UseAccessCodePage';
import QuizStartPage from './pages/QuizStartPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* ? Redirect "/" to "/request-access" directly */}
        <Route path="/" element={<Navigate to="/request-access" replace />} />
        
        <Route path="/request-access" element={<RequestAccessWithPayment />} />
        <Route path="/use-access-code" element={<UseAccessCodePage />} />
        <Route path="/select-subject" element={<SubjectSelectionPage />} />
        <Route path="/start" element={<QuizStartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/verify" element={<VerifyPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;