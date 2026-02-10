import React, { useState, useEffect } from 'react';
import './App.css';
import { QuizWelcome } from './components/QuizWelcome';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { quizQuestions } from './data/quizData';
import { Toaster } from './components/ui/sonner';

function App() {
  const [quizState, setQuizState] = useState('welcome'); // welcome, quiz, results
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  
  const totalQuestions = quizQuestions.length;
  const totalPoints = quizQuestions.reduce((sum, q) => sum + q.points, 0);
  
  useEffect(() => {
    // Track time spent on quiz
    if (quizState === 'quiz' && startTime) {
      const interval = setInterval(() => {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [quizState, startTime]);
  
  const handleStartQuiz = () => {
    setQuizState('quiz');
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setScore(0);
    setEarnedPoints(0);
    setAnswers([]);
  };
  
  const handleAnswer = (selectedAnswer, isCorrect) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update score and points
    if (isCorrect) {
      setScore(prev => prev + 1);
      setEarnedPoints(prev => prev + currentQuestion.points);
    }
    
    // Store answer details for review
    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      topic: currentQuestion.topic,
      correct: isCorrect,
      points: isCorrect ? currentQuestion.points : 0,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer
    }]);
    
    // Move to next question or show results
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz completed
      const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(finalTimeSpent);
      setQuizState('results');
    }
  };
  
  const handleRestart = () => {
    setQuizState('welcome');
    setCurrentQuestionIndex(0);
    setScore(0);
    setEarnedPoints(0);
    setAnswers([]);
    setStartTime(null);
    setTimeSpent(0);
  };
  
  return (
    <div className="App min-h-screen">
      {quizState === 'welcome' && (
        <QuizWelcome 
          onStart={handleStartQuiz}
          totalQuestions={totalQuestions}
        />
      )}
      
      {quizState === 'quiz' && (
        <QuizQuestion 
          question={quizQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
          currentScore={earnedPoints}
        />
      )}
      
      {quizState === 'results' && (
        <QuizResults 
          score={score}
          totalQuestions={totalQuestions}
          totalPoints={totalPoints}
          earnedPoints={earnedPoints}
          answers={answers}
          timeSpent={timeSpent}
          onRestart={handleRestart}
        />
      )}
      
      <Toaster />
    </div>
  );
}

export default App;