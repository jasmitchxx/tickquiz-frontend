import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestAccessWithPayment from './pages/RequestAccessWithPayment';
import VerifyPaymentPage from './pages/VerifyPaymentPage';
import SubjectSelectionPage from './pages/SubjectSelectionPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import QuizPage from './pages/QuizPage';
import PaymentFailedPage from './pages/PaymentFailedPage';
import UseAccessCodePage from './pages/UseAccessCodePage';
import QuizStartPage from './pages/QuizStartPage';
import About from './pages/About'; // ? new
import Contact from './pages/Contact'; // ? new
import Header from './components/Header'; // ? new

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RequestAccessWithPayment />} />
     <Route path="/select-subject" element={<SubjectSelectionPage />} />
        <Route path="/start" element={<QuizStartPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/use-access-code" element={<UseAccessCodePage />} /> {/* ? updated */}
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