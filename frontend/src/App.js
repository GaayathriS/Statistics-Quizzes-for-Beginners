import React, { useState, useEffect } from 'react';
import './App.css';
import { QuizWelcome } from './components/QuizWelcome';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { Chapter4ZScores } from './components/Chapter4ZScores';
import { getChapterQuestions, chapters } from './data/chaptersData';
import { Toaster } from './components/ui/sonner';

function App() {
  const [appState, setAppState] = useState('welcome'); // welcome, chapter4, quiz, results
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [timeSpent, setTimeSpent] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
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
  
  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
    
    // Chapter 4 is a study chapter (no quiz)
    if (chapter.isStudyChapter) {
      setAppState('chapter4');
      return;
    }
    
    // Load questions for this chapter
    const questions = getChapterQuestions(chapter.id);
    setQuizQuestions(questions);
    
    // Start the quiz
    setAppState('quiz');
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
    setScore(0);
    setEarnedPoints(0);
    setAnswers([]);
  };
  
  const handleAnswer = (selectedAnswer, isCorrect) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setEarnedPoints(prev => prev + currentQuestion.points);
    }
    
    setAnswers(prev => [...prev, {
      question: currentQuestion.question,
      topic: currentQuestion.topic,
      correct: isCorrect,
      points: isCorrect ? currentQuestion.points : 0,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer
    }]);
    
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(finalTimeSpent);
      setAppState('results');
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
        <Chapter4ZScores onBack={handleBackToChapters} />
      )}
      
      {appState === 'quiz' && quizQuestions.length > 0 && (
        <QuizQuestion 
          question={quizQuestions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onAnswer={handleAnswer}
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
