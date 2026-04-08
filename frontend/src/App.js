import React, { useState, useEffect } from 'react';
import './App.css';
import { QuizWelcome } from './components/QuizWelcome';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizResults } from './components/QuizResults';
import { Chapter4ZScores } from './components/Chapter4ZScores';
import { Chapter8HypothesisTesting } from './components/Chapter8HypothesisTesting';
import { Chapter9TStatistic } from './components/Chapter9TStatistic';
import { Chapter10IndependentT } from './components/Chapter10IndependentT';
import { Chapter11RepeatedMeasures } from './components/Chapter11RepeatedMeasures';
import { Chapter12ANOVA } from './components/Chapter12ANOVA';
import { Chapter13TwoFactorANOVA } from './components/Chapter13TwoFactorANOVA';
import { GenericChapterStudy } from './components/GenericChapterStudy';
import { Chapter5Glossary } from './components/Chapter5Glossary';
import { getChapterQuestions, chapter1Questions, chapter2Questions, chapter3Questions, chapter5Questions, chapter8Questions, chapter9Questions, chapter10Questions, chapter11Questions, chapter12Questions, chapter13Questions, chapters } from './data/chaptersData';
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
    
    // Study chapters route to their study components
    if (chapter.isStudyChapter) {
      switch (chapter.id) {
        case 1: setAppState('chapter1'); return;
        case 2: setAppState('chapter2'); return;
        case 3: setAppState('chapter3'); return;
        case 4: setAppState('chapter4'); return;
        case 8: setAppState('chapter8'); return;
        case 9: setAppState('chapter9'); return;
        case 10: setAppState('chapter10'); return;
        case 11: setAppState('chapter11'); return;
        case 12: setAppState('chapter12'); return;
        case 13: setAppState('chapter13'); return;
        default: break;
      }
    }
    
    if (chapter.isGlossaryChapter) {
      setAppState('chapter5');
      return;
    }
    
    const questions = getChapterQuestions(chapter.id);
    startQuiz(questions);
  };

  const handleStartChapter1Quiz = () => startQuiz(chapter1Questions);
  const handleStartChapter2Quiz = () => startQuiz(chapter2Questions);
  const handleStartChapter3Quiz = () => startQuiz(chapter3Questions);
  const handleStartChapter4Quiz = () => startQuiz(chapter5Questions);
  const handleStartChapter8Quiz = () => startQuiz(chapter8Questions);
  const handleStartChapter9Quiz = () => startQuiz(chapter9Questions);
  const handleStartChapter10Quiz = () => startQuiz(chapter10Questions);
  const handleStartChapter11Quiz = () => startQuiz(chapter11Questions);
  const handleStartChapter12Quiz = () => startQuiz(chapter12Questions);
  const handleStartChapter13Quiz = () => startQuiz(chapter13Questions);

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

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const finalTimeSpent = Math.floor((Date.now() - startTime) / 1000);
      setTimeSpent(finalTimeSpent);
      setAppState('results');
    }
  };

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
      
      {appState === 'chapter1' && (
        <GenericChapterStudy chapterId={1} onBack={handleBackToChapters} onStartQuiz={handleStartChapter1Quiz} />
      )}

      {appState === 'chapter2' && (
        <GenericChapterStudy chapterId={2} onBack={handleBackToChapters} onStartQuiz={handleStartChapter2Quiz} />
      )}

      {appState === 'chapter3' && (
        <GenericChapterStudy chapterId={3} onBack={handleBackToChapters} onStartQuiz={handleStartChapter3Quiz} />
      )}

      {appState === 'chapter4' && (
        <Chapter4ZScores onBack={handleBackToChapters} onStartQuiz={handleStartChapter4Quiz} />
      )}

      {appState === 'chapter8' && (
        <Chapter8HypothesisTesting onBack={handleBackToChapters} onStartQuiz={handleStartChapter8Quiz} />
      )}

      {appState === 'chapter9' && (
        <Chapter9TStatistic onBack={handleBackToChapters} onStartQuiz={handleStartChapter9Quiz} />
      )}

      {appState === 'chapter10' && (
        <Chapter10IndependentT onBack={handleBackToChapters} onStartQuiz={handleStartChapter10Quiz} />
      )}

      {appState === 'chapter11' && (
        <Chapter11RepeatedMeasures onBack={handleBackToChapters} onStartQuiz={handleStartChapter11Quiz} />
      )}

      {appState === 'chapter12' && (
        <Chapter12ANOVA onBack={handleBackToChapters} onStartQuiz={handleStartChapter12Quiz} />
      )}

      {appState === 'chapter13' && (
        <Chapter13TwoFactorANOVA onBack={handleBackToChapters} onStartQuiz={handleStartChapter13Quiz} />
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
