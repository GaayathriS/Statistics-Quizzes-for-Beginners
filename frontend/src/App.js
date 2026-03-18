import React, { useState, useEffect } from 'react';
import './App.css';
import { QuizWelcome } from './components/QuizWelcome';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { Chapter4ZScores } from './components/Chapter4ZScores';
import { Chapter10IndependentT } from './components/Chapter10IndependentT';
import { Chapter5Glossary } from './components/Chapter5Glossary';
import { getChapterQuestions, chapter5Questions, chapter10Questions, chapters } from './data/chaptersData';
import { Toaster } from './components/ui/sonner';

function App() {
  const [appState, setAppState] = useState('welcome');
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  // Track answered questions for Previous navigation
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  
  const totalQuestions = quizQuestions.length;
  const totalPoints = quizQuestions.reduce((sum, q) => sum + q.points, 0);
  
  useEffect(() => {
    if (appState === 'quiz' && startTime) {
      const interval = setInterval(() => {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [appState, startTime]);

  const startQuiz = (questions) => {
    setQuizQuestions(questions);
    setAppState('quiz');
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setScore(0);
    setEarnedPoints(0);
    setAnswers([]);
    setAnsweredQuestions({});
  };
  
  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
    
    if (chapter.isStudyChapter && chapter.id === 4) {
      setAppState('chapter4');
      return;
    }

    if (chapter.isStudyChapter && chapter.id === 10) {
      setAppState('chapter10');
      return;
    }
    
    if (chapter.isGlossaryChapter) {
      setAppState('chapter5');
      return;
    }
    
    const questions = getChapterQuestions(chapter.id);
    startQuiz(questions);
  };

  const handleStartChapter4Quiz = () => startQuiz(chapter5Questions);
  const handleStartChapter10Quiz = () => startQuiz(chapter10Questions);

  // Called when user clicks "Submit Answer"
  const handleSubmitAnswer = (selectedAnswer, isCorrect) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setEarnedPoints(prev => prev + currentQuestion.points);
    }
    
    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      topic: currentQuestion.topic || currentQuestion.category,
      correct: isCorrect,
      points: isCorrect ? currentQuestion.points : 0,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer
    }]);

    setAnsweredQuestions(prev => ({
      ...prev,
      [currentQuestionIndex]: { selectedAnswer, isCorrect }
    }));
  };

  // Called when user clicks "Next Question"
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(finalTimeSpent);
      setAppState('results');
    }
  };

  // Called when user clicks "Previous"
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleRestart = () => {
    setAppState('welcome');
    setSelectedChapter(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setEarnedPoints(0);
    setAnswers([]);
    setStartTime(null);
    setTimeSpent(0);
    setQuizQuestions([]);
    setAnsweredQuestions({});
  };

  const handleBackToChapters = () => {
    setAppState('welcome');
    setSelectedChapter(null);
  };
  
  return (
    <div className="App min-h-screen">
      {appState === 'welcome' && (
        <QuizWelcome onSelectChapter={handleSelectChapter} />
      )}
      
      {appState === 'chapter4' && (
        <Chapter4ZScores onBack={handleBackToChapters} onStartQuiz={handleStartChapter4Quiz} />
      )}

      {appState === 'chapter10' && (
        <Chapter10IndependentT onBack={handleBackToChapters} onStartQuiz={handleStartChapter10Quiz} />
      )}

      {appState === 'chapter5' && (
        <Chapter5Glossary onBack={handleBackToChapters} />
      )}
      
      {appState === 'quiz' && quizQuestions.length > 0 && (
        <QuizQuestion 
          question={quizQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onSubmitAnswer={handleSubmitAnswer}
          onNext={handleNextQuestion}
          onPrevious={handlePreviousQuestion}
          canGoPrevious={currentQuestionIndex > 0}
          savedState={answeredQuestions[currentQuestionIndex] || null}
          currentScore={earnedPoints}
          chapterTitle={selectedChapter?.title}
        />
      )}
      
      {appState === 'results' && (
        <QuizResults 
          score={score}
          totalQuestions={totalQuestions}
          totalPoints={totalPoints}
          earnedPoints={earnedPoints}
          answers={answers}
          timeSpent={timeSpent}
          onRestart={handleRestart}
          chapterTitle={selectedChapter?.title}
          chapterId={selectedChapter?.id}
        />
      )}
      
      <Toaster />
    </div>
  );
}

export default App;
