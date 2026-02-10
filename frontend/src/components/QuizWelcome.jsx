import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Target, Trophy, Clock, Award } from 'lucide-react';

export const QuizWelcome = ({ onStart, totalQuestions }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted">
      <Card className="w-full max-w-3xl card-elevated bounce-in border-2 border-primary/10">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Statistics Quiz
            </CardTitle>
            <CardDescription className="text-lg mt-3 text-muted-foreground">
              Chapter 1: Introduction to Statistics
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-muted/50 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              What You'll Learn
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Test your knowledge of fundamental statistical concepts including populations and samples, 
              variables and measurement scales, research methods, and statistical notation from the textbook 
              "Essentials of Statistics for the Behavioral Sciences."
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{totalQuestions} Questions</p>
                <p className="text-sm text-muted-foreground">Multiple choice</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">No Time Limit</p>
                <p className="text-sm text-muted-foreground">Take your time</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Earn Badges</p>
                <p className="text-sm text-muted-foreground">Unlock achievements</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-success/50 transition-colors">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Instant Feedback</p>
                <p className="text-sm text-muted-foreground">Learn as you go</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="outline" className="text-xs">Basic Definitions</Badge>
            <Badge variant="outline" className="text-xs">Research Methods</Badge>
            <Badge variant="outline" className="text-xs">Measurement Scales</Badge>
            <Badge variant="outline" className="text-xs">Statistical Notation</Badge>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-3 pt-6">
          <Button 
            onClick={onStart}
            size="lg"
            className="w-full text-lg h-14 btn-glow bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Start Quiz
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Good luck! Remember, this quiz is designed to help you learn.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};