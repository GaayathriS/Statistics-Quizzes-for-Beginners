import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2, XCircle, ChevronRight, Lightbulb } from 'lucide-react';
import { Progress } from './ui/progress';

export const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  currentScore 
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const progressPercentage = ((questionNumber - 1) / totalQuestions) * 100;
  
  const handleAnswerSelect = (answerIndex) => {
    if (showFeedback) return; // Prevent changing answer after submission
    setSelectedAnswer(answerIndex);
  };
  
  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };
  
  const handleNext = () => {
    onAnswer(selectedAnswer, isCorrect);
    // Reset state for next question
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
  };
  
  const getOptionClassName = (index) => {
    const baseClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ";
    
    if (!showFeedback) {
      if (selectedAnswer === index) {
        return baseClass + "border-primary bg-primary/10 shadow-md transform scale-[1.02]";
      }
      return baseClass + "border-border bg-card hover:border-primary/50 hover:bg-muted/50 cursor-pointer";
    }
    
    // Show feedback
    if (index === question.correctAnswer) {
      return baseClass + "border-success bg-success/10 shadow-md";
    }
    if (selectedAnswer === index && !isCorrect) {
      return baseClass + "border-destructive bg-destructive/10 shake";
    }
    return baseClass + "border-border bg-muted opacity-60";
  };
  
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'easy': return 'bg-success text-success-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-4xl space-y-6">
        {/* Progress Bar */}
        <div className="space-y-3 fade-in">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-muted-foreground">
              Question {questionNumber} of {totalQuestions}
            </p>
            <Badge variant="outline" className="font-semibold">
              Score: {currentScore} pts
            </Badge>
          </div>
          <Progress value={progressPercentage} className="h-3" />
        </div>
        
        {/* Question Card */}
        <Card className="card-elevated border-2 border-primary/10 fade-in">
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <CardTitle className="text-2xl sm:text-3xl leading-tight text-foreground">
                {question.question}
              </CardTitle>
              <div className="flex flex-col gap-2">
                <Badge className={getDifficultyColor(question.difficulty)}>
                  {question.difficulty}
                </Badge>
                <Badge variant="outline" className="text-xs whitespace-nowrap">
                  {question.points} pts
                </Badge>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit">
              {question.topic}
            </Badge>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showFeedback}
                  className={getOptionClassName(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                      showFeedback && index === question.correctAnswer
                        ? 'bg-success text-success-foreground'
                        : showFeedback && selectedAnswer === index && !isCorrect
                        ? 'bg-destructive text-destructive-foreground'
                        : selectedAnswer === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1 text-base sm:text-lg text-foreground">{option}</span>
                    {showFeedback && index === question.correctAnswer && (
                      <CheckCircle2 className="w-6 h-6 text-success pulse-success" />
                    )}
                    {showFeedback && selectedAnswer === index && !isCorrect && (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg border-2 fade-in ${
                isCorrect 
                  ? 'bg-success/10 border-success/30' 
                  : 'bg-destructive/10 border-destructive/30'
              }`}>
                <div className="flex items-start gap-3">
                  <Lightbulb className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    isCorrect ? 'text-success' : 'text-destructive'
                  }`} />
                  <div className="flex-1">
                    <p className={`font-semibold mb-2 ${
                      isCorrect ? 'text-success' : 'text-destructive'
                    }`}>
                      {isCorrect ? 'Correct! 🎉' : 'Not quite right'}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Action Button */}
            <div className="pt-4">
              {!showFeedback ? (
                <Button 
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  size="lg"
                  className="w-full sm:w-auto btn-glow"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  size="lg"
                  className="w-full sm:w-auto btn-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                >
                  {questionNumber === totalQuestions ? 'View Results' : 'Next Question'}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};