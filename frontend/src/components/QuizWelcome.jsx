import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Target, ChevronRight, Brain, TrendingUp, BookMarked } from 'lucide-react';
import { chapters } from '../data/chaptersData';

export const QuizWelcome = ({ onSelectChapter }) => {
  const getChapterIcon = (chapterId) => {
    switch(chapterId) {
      case 4: return TrendingUp;
      case 100: return BookMarked;
      default: return BookOpen;
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
            <BookOpen className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Statistics Quiz
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essentials of Statistics for the Behavioral Sciences
          </p>
        </div>

        {/* Chapter Selection */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2 text-foreground">
            <Target className="w-5 h-5 text-primary" />
            Select a Chapter
          </h2>

          <div className="grid gap-4">
            {chapters.map((chapter) => {
              const IconComponent = getChapterIcon(chapter.id);
              
              return (
                <Card 
                  key={chapter.id}
                  className="cursor-pointer hover:border-primary/50 transition-all hover:shadow-lg group border-2"
                  onClick={() => onSelectChapter(chapter)}
                  data-testid={`chapter-${chapter.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Chapter Number */}
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${chapter.color} text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform`}>
                        {chapter.id}
                      </div>

                      {/* Chapter Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-lg font-semibold text-foreground">
                            Chapter {chapter.id}: {chapter.title}
                            {chapter.subtitle && <span className="text-muted-foreground font-normal"> ({chapter.subtitle})</span>}
                          </h3>
                          {chapter.isStudyChapter && (
                            <Badge variant="outline" className="text-xs bg-cyan-500/10 text-cyan-500 border-cyan-500/30">
                              <Brain className="w-3 h-3 mr-1" />
                              Study + Quiz
                            </Badge>
                          )}
                          {chapter.isGlossaryChapter && (
                            <Badge variant="outline" className="text-xs bg-amber-500/10 text-amber-500 border-amber-500/30">
                              <BookMarked className="w-3 h-3 mr-1" />
                              Reference
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {chapter.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {chapter.topics.slice(0, 3).map((topic, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                            {chapter.topics.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{chapter.topics.length - 3}
                              </Badge>
                            )}
                          </div>
                          {chapter.questionCount > 0 && !chapter.isGlossaryChapter && (
                            <Badge variant="outline" className="ml-2">
                              {chapter.questionCount} Questions
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground">
          Select a chapter to begin your quiz journey
        </p>
      </div>
    </div>
  );
};

export default QuizWelcome;
