import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const PracticeExamSelect = ({ onBack, onSelectExam }) => {
  const exams = [
    { id: 3, title: 'Practice Exam 3', chapters: 'Chapters 12-13', topics: 'One-Way ANOVA, Two-Factor ANOVA, SPSS Output', questions: 30, color: 'from-slate-700 to-slate-500' },
    { id: 4, title: 'Practice Exam 4', chapters: 'Chapter 14', topics: 'Correlation, Regression, Pearson r, r², SPSS Output', questions: 30, color: 'from-sky-700 to-sky-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="pe-select-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Practice Exams</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Select a Practice Exam</h1>
          </div>
        </div>

        <div className="space-y-4">
          {exams.map(exam => (
            <Card key={exam.id} className="border-2 border-primary/10 hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => onSelectExam(exam.id)} data-testid={`pe-select-exam-${exam.id}`}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${exam.color} text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform`}>
                  {exam.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{exam.title}</h3>
                  <p className="text-sm text-muted-foreground">{exam.chapters} — {exam.topics}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{exam.questions}Q</Badge>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeExamSelect;
