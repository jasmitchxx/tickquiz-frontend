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
import AskAI from './pages/AskAI';
import AITutorAccessPage from './pages/AITutorAccessPage';
import AIPaymentPage from './pages/AIPaymentPage';
import AISubscribePage from './pages/AISubscribePage';
import AISuccessPage from './pages/AISuccessPage';

import AILoginPage from './pages/AILoginPage';















// ? UPDATED paths here:
import Header from './components/Header';
import Leaderboard from './components/Leaderboard';

function App() {
  const isAccessGranted = localStorage.getItem('quizAccessGranted') === 'true';

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/request-access" replace />} />

        {/* Public Routes */}
        <Route path="/request-access" element={<RequestAccessWithPayment />} />
        <Route path="/use-access-code" element={<UseAccessCodePage />} />
        <Route path="/select-subject" element={<SubjectSelectionPage />} />
        <Route path="/verify" element={<VerifyPaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/payment-failed" element={<PaymentFailedPage />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/leaderboard" element={<Leaderboard />} />



<Route
  path="/ask-ai"
  element={<AskAI />}
/>


<Route
  path="/ai-login"
  element={<AILoginPage />}
/>

<Route
  path="/ai-tutor-access"
  element={<AITutorAccessPage />}
/>
        
<Route
  path="/ai-payment"
  element={<AIPaymentPage />}
/>

<Route
  path="/ai-subscribe"
  element={<AISubscribePage />}
/>

<Route
  path="/ai-success"
  element={<AISuccessPage />}
/>

        {/* Protected Routes */}
        <Route
          path="/start"
          element={isAccessGranted ? <QuizStartPage /> : <Navigate to="/use-access-code" replace />}
        />
        <Route
          path="/quiz"
          element={isAccessGranted ? <QuizPage /> : <Navigate to="/use-access-code" replace />}
        />

        {/* Fallback 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center text-center text-red-600 font-bold text-2xl">
              404 � Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;