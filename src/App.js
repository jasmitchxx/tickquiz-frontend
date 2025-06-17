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
import Leaderboard from './components/Leaderboard'; // ? Imported

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/request-access" replace />} />

        {/* Quiz Flow Routes */}
        <Route path="/request-access" element={<RequestAccessWithPayment />} />
        <Route path="/use-access-code" element={<UseAccessCodePage />} />
        <Route path="/select-subject" element={<SubjectSelectionPage />} />
        <Route path="/start" element={<QuizStartPage />} />
        <Route path="/quiz" element={<QuizPage />} />

        {/* Payment Result Routes */}
        <Route path="/verify" element={<VerifyPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />

        {/* Info Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ? Leaderboard Route */}
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;