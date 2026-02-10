import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Trophy, RotateCcw, CheckCircle2, XCircle, Award, TrendingUp } from 'lucide-react';
import { getPerformanceMessage, badges } from '../data/quizData';

export const QuizResults = ({ 
  score, 
  totalQuestions, 
  totalPoints,
  earnedPoints,
  answers,
  timeSpent,
  onRestart 
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const percentage = Math.round((score / totalQuestions) * 100);
  const performanceData = getPerformanceMessage(percentage);
  
  useEffect(() => {
    // Animate score counter
    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= score) {
        setDisplayScore(score);
        clearInterval(timer);
      } else {
        setDisplayScore(Math.floor(current));
      }
    }, duration / steps);
    
    // Calculate earned badges
    const earned = badges.filter(badge => 
      badge.requirement(score, totalQuestions, timeSpent, answers)
    );
    setEarnedBadges(earned);
    
    // Show confetti for good scores
    if (percentage >= 80) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    return () => clearInterval(timer);
  }, [score, totalQuestions, timeSpent, answers, percentage]);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  const getLetterGrade = () => {
    if (percentage >= 97) return 'A+';
    if (percentage >= 93) return 'A';
    if (percentage >= 90) return 'A-';
    if (percentage >= 87) return 'B+';
    if (percentage >= 83) return 'B';
    if (percentage >= 80) return 'B-';
    if (percentage >= 77) return 'C+';
    if (percentage >= 73) return 'C';
    if (percentage >= 70) return 'C-';
    if (percentage >= 67) return 'D+';
    if (percentage >= 63) return 'D';
    if (percentage >= 60) return 'D-';
    return 'F';
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="w-full max-w-4xl space-y-6">
        {/* Main Results Card */}
        <Card className="card-elevated border-2 border-primary/10 bounce-in">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl flex items-center justify-center shadow-lg animate-pulse">
              <Trophy className="w-12 h-12 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className={`text-5xl sm:text-6xl font-bold ${performanceData.color}`}>
                {performanceData.title}
              </CardTitle>
              <CardDescription className="text-lg mt-3">
                {performanceData.message}
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Score Circle */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="hsl(var(--muted))"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="hsl(var(--primary))"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 88}`}
                    strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold text-foreground">{percentage}%</span>
                  <span className="text-lg font-semibold text-primary">{getLetterGrade()}</span>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 text-center border border-primary/20">
                <div className="text-3xl font-bold text-primary">{displayScore}</div>
                <div className="text-sm text-muted-foreground mt-1">Correct</div>
                <div className="text-xs text-muted-foreground">out of {totalQuestions}</div>
              </div>
              
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-4 text-center border border-secondary/20">
                <div className="text-3xl font-bold text-secondary">{earnedPoints}</div>
                <div className="text-sm text-muted-foreground mt-1">Points</div>
                <div className="text-xs text-muted-foreground">out of {totalPoints}</div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-4 text-center border border-accent/20">
                <div className="text-3xl font-bold text-accent">{formatTime(timeSpent)}</div>
                <div className="text-sm text-muted-foreground mt-1">Time</div>
                <div className="text-xs text-muted-foreground">Total spent</div>
              </div>
              
              <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-4 text-center border border-success/20">
                <div className="text-3xl font-bold text-success">{earnedBadges.length}</div>
                <div className="text-sm text-muted-foreground mt-1">Badges</div>
                <div className="text-xs text-muted-foreground">Earned</div>
              </div>
            </div>
            
            {/* Badges Section */}
            {earnedBadges.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-foreground">Achievements Unlocked</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {earnedBadges.map((badge) => (
                    <div 
                      key={badge.id}
                      className="flex items-center gap-3 p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20 bounce-in"
                    >
                      <span className="text-3xl">{badge.icon}</span>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{badge.name}</p>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Question Review */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Question Review</h3>
              </div>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {answers.map((answer, index) => (
                  <div 
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      answer.correct 
                        ? 'bg-success/5 border-success/20 hover:bg-success/10' 
                        : 'bg-destructive/5 border-destructive/20 hover:bg-destructive/10'
                    }`}
                  >
                    {answer.correct ? (
                      <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        Q{index + 1}: {answer.question}
                      </p>
                      <p className="text-xs text-muted-foreground">{answer.topic}</p>
                    </div>
                    <Badge variant={answer.correct ? "success" : "destructive"} className="flex-shrink-0">
                      {answer.correct ? `+${answer.points}` : '0'} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                onClick={onRestart}
                size="lg"
                className="flex-1 btn-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retake Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};