import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../data/questionsData';

function QuizPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('quizUser'));
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    if (!user || !user.subject) {
      navigate('/start');
      return;
    }

    const all = questionsData[user.subject] || [];
    const unique = Array.from(new Set(all.map(q => JSON.stringify(q)))).map(q =>
      JSON.parse(q)
    );
    const shuffled = unique.sort(() => 0.5 - Math.random()).slice(0, 60);
    setQuestions(shuffled);
  }, [navigate, user]);

  const handleAnswer = () => {
    if (selected === null) return;
    if (questions[current].answer === selected) {
      setScore(prev => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(prev => prev + 1);
      setSelected(null);
    } else {
      setQuizDone(true);
    }
  };

  const getGrade = (percentage) => {
    if (percentage >= 75) return { grade: 'A1', remark: 'Excellent' };
    if (percentage >= 70) return { grade: 'B2', remark: 'Very Good' };
    if (percentage >= 65) return { grade: 'B3', remark: 'Good' };
    if (percentage >= 60) return { grade: 'C4', remark: 'Credit' };
    if (percentage >= 55) return { grade: 'C5', remark: 'Credit' };
    if (percentage >= 50) return { grade: 'C6', remark: 'Credit' };
    if (percentage >= 45) return { grade: 'D7', remark: 'Pass' };
    if (percentage >= 40) return { grade: 'E8', remark: 'Pass' };
    return { grade: 'F9', remark: 'Fail' };
  };

  if (!user || !user.subject) return <p>Loading user data...</p>;
  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestion = questions[current];

  if (quizDone) {
    const percentage = Math.round((score / questions.length) * 100);
    const { grade, remark } = getGrade(percentage);

    return (
      <div style={styles.container}>
        <h2>Quiz Completed</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Subject:</strong> {user.subject}</p>
        <p><strong>Score:</strong> {score} / {questions.length}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
        <p><strong>Grade:</strong> {grade}</p>
        <p><strong>Remark:</strong> {remark}</p>
        <button onClick={() => navigate('/start')} style={styles.buttonPrimary}>
          Take Another Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h3>Question {current + 1} of {questions.length}</h3>
      <div style={styles.questionBox}>
        <p style={styles.questionText}>{currentQuestion.question}</p>
        <div>
          {currentQuestion.options.map((opt, idx) => (
            <div key={idx} style={styles.optionWrapper}>
              <label>
                <input
                  type="radio"
                  name="option"
                  value={opt}
                  checked={selected === opt}
                  onChange={() => setSelected(opt)}
                  style={{ marginRight: 8 }}
                />
                {opt}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleAnswer} style={styles.buttonGreen}>
        {current + 1 === questions.length ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: '2rem auto',
    padding: '1.5rem',
    borderRadius: 8,
    border: '1px solid #ccc',
    backgroundColor: '#ffffff',
    minHeight: '420px', // Lock height
    transition: 'none',
    boxShadow: '0 0 8px rgba(0,0,0,0.05)'
  },
  questionBox: {
    marginBottom: '1rem',
    minHeight: '140px', // Ensures question section does not shift height
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5'
  },
  questionText: {
    fontSize: '1.1rem',
    fontWeight: '500',
    marginBottom: '1rem'
  },
  optionWrapper: {
    marginBottom: 8
  },
  buttonGreen: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  buttonPrimary: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default QuizPage;