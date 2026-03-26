import { useState, useEffect } from 'react';

const MAX_ATTEMPTS = 6;

export default function useQuizAttempts() {
  const [remaining, setRemaining] = useState(MAX_ATTEMPTS);

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || {};
    setRemaining(attempts.remaining !== undefined ? attempts.remaining : MAX_ATTEMPTS);
  }, []);

  const startAttempt = () => {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts')) || { remaining: MAX_ATTEMPTS };

    if (attempts.remaining <= 0) return false;

    attempts.remaining -= 1;
    localStorage.setItem('quizAttempts', JSON.stringify(attempts));
    setRemaining(attempts.remaining);
    return true;
  };

  return { remaining, startAttempt };
}