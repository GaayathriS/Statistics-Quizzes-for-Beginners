import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, ArrowLeft, ChevronRight, Search } from 'lucide-react';
import { chapterGlossaries } from '../data/chaptersData';

// Chapter list for glossary selection
const glossaryChapters = [
  { id: 1, title: "Introduction to Statistics", color: "from-blue-600 to-blue-400" },
  { id: 2, title: "Frequency Distributions", color: "from-purple-600 to-purple-400" },
  { id: 3, title: "Central Tendency", color: "from-emerald-600 to-emerald-400" },
  { id: 4, title: "Variability", color: "from-orange-600 to-orange-400" },
  { id: 5, title: "Z-Scores", color: "from-cyan-600 to-cyan-400" },
  { id: 6, title: "Probability", color: "from-pink-600 to-pink-400" },
  { id: 7, title: "Distribution of Sample Means", color: "from-indigo-600 to-indigo-400" },
  { id: 8, title: "Introduction to Hypothesis Testing", color: "from-rose-600 to-rose-400" },
  { id: 9, title: "Introduction to the t Statistic", color: "from-violet-600 to-violet-400" },
  { id: 10, title: "The t Test for Two Independent Samples", color: "from-pink-600 to-pink-400" },
  { id: 11, title: "The t Test for Two Related Samples", color: "from-teal-600 to-teal-400" },
  { id: 12, title: "Introduction to Analysis of Variance", color: "from-orange-600 to-amber-500" },
  { id: 13, title: "Two-Factor Analysis of Variance", color: "from-red-600 to-rose-500" },
  { id: 14, title: "Correlation and Regression", color: "from-sky-600 to-sky-400" },
];

export const Chapter5Glossary = ({ onBack }) => {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const glossary = selectedChapter ? (chapterGlossaries[selectedChapter.id] || []) : [];
  
  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
    setSearchTerm('');
  };

  const handleBackToSelection = () => {
    setSelectedChapter(null);
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={selectedChapter ? handleBackToSelection : onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            {selectedChapter ? 'Back to Chapter List' : 'Back to Chapters'}
          </Button>
        </div>

        <div className="text-center py-4">
          <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-500/30">
            Chapter 5
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            Glossary
          </h1>
          <p className="text-muted-foreground mt-2">
            {selectedChapter 
              ? `Chapter ${selectedChapter.id}: ${selectedChapter.title}`
              : 'Key terms and definitions from Chapters 1-14'
            }
          </p>
        </div>

        {/* Chapter Selection View */}
        {!selectedChapter && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              Select a Chapter
            </h2>
            
            <div className="grid gap-3">
              {glossaryChapters.map((chapter) => {
                const termCount = chapterGlossaries[chapter.id]?.length || 0;
                const hasTerms = termCount > 0;
                
                return (
                  <Card 
                    key={chapter.id}
                    className={`cursor-pointer transition-all border-2 ${
                      hasTerms 
                        ? 'hover:border-amber-500/50 hover:shadow-lg' 
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    onClick={() => hasTerms && handleSelectChapter(chapter)}
                    data-testid={`glossary-chapter-${chapter.id}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${chapter.color} text-white font-bold text-lg shadow-md`}>
                          {chapter.id}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">Chapter {chapter.id}: {chapter.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {hasTerms ? `${termCount} terms` : 'Coming soon'}
                          </p>
                        </div>
                        {hasTerms && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Glossary Terms View */}
        {selectedChapter && (
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg focus:border-primary focus:outline-none"
                data-testid="glossary-search"
              />
            </div>

            {/* Term Count */}
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30">
                {filteredGlossary.length} {filteredGlossary.length === 1 ? 'term' : 'terms'}
              </Badge>
            </div>

            {/* Terms List */}
            {filteredGlossary.length > 0 ? (
              <div className="grid gap-3">
                {filteredGlossary.map((item, index) => (
                  <Card key={index} className="border-2 border-border/50 hover:border-amber-500/30 transition-colors">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-foreground mb-2">{item.term}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-2 border-dashed border-border">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    {searchTerm ? 'No terms match your search.' : 'No glossary terms available for this chapter yet.'}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter5Glossary;
