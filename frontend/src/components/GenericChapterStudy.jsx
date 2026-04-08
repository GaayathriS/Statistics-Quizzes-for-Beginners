import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, Play } from 'lucide-react';

const chapterContent = {
  1: {
    badge: 'Chapter 1',
    title: 'Introduction to Statistics',
    concepts: [
      { title: 'Populations and Samples', content: 'A population is the entire group of interest; a sample is a subset selected to represent it. Parameters describe populations (μ, σ); statistics describe samples (M, s).' },
      { title: 'Descriptive vs. Inferential Statistics', content: 'Descriptive statistics organize and summarize data (tables, graphs, averages). Inferential statistics use sample data to make generalizations about a population.' },
      { title: 'Variables and Measurement', content: 'Variables are characteristics that can change across individuals. They can be discrete (separate categories) or continuous (infinite values between any two points).' },
      { title: 'Scales of Measurement', content: 'Nominal (categories only), Ordinal (ranked order), Interval (equal intervals, arbitrary zero), Ratio (equal intervals, true zero). The scale determines which statistics are appropriate.' },
      { title: 'Research Methods', content: 'Experimental method manipulates an independent variable (IV) and measures a dependent variable (DV) to establish cause and effect. Correlational and quasi-experimental methods describe relationships but cannot prove causation.' },
      { title: 'Statistical Notation', content: 'Σ means summation. N = population size, n = sample size. X represents individual scores. ΣX = sum of all scores.' },
    ],
  },
  2: {
    badge: 'Chapter 2',
    title: 'Frequency Distributions',
    concepts: [
      { title: 'Frequency Distribution Tables', content: 'An organized tabulation showing how often each score or category occurs. Includes X (score) and f (frequency) columns. Can also include relative frequency (proportion) and cumulative frequency.' },
      { title: 'Grouped Frequency Distributions', content: 'When the range of scores is large, scores are grouped into class intervals (typically 5-15 intervals with simple widths like 5 or 10). Real limits extend ±0.5 beyond apparent limits.' },
      { title: 'Graphs: Histograms & Polygons', content: 'Histograms use adjacent bars for interval/ratio data. Frequency polygons use dots connected by lines. Bar graphs use separated bars for nominal/ordinal data.' },
      { title: 'Distribution Shapes', content: 'Symmetrical distributions have matching left and right sides. Positively skewed = tail to the right. Negatively skewed = tail to the left. Normal distribution = bell-shaped and symmetrical.' },
      { title: 'Percentiles & Percentile Ranks', content: 'A percentile is the score below which a given percentage falls. Percentile rank is the percentage of scores at or below a given value. The 50th percentile = median.' },
      { title: 'Stem-and-Leaf Displays', content: 'A compact display where the stem shows the leading digit(s) and the leaf shows the trailing digit. Preserves the original data while showing the distribution shape.' },
    ],
  },
  3: {
    badge: 'Chapter 3',
    title: 'Central Tendency',
    concepts: [
      { title: 'The Mean', content: 'The arithmetic average: M = ΣX / n. Uses every score, so it is sensitive to extreme values (outliers). The population mean is μ; the sample mean is M.' },
      { title: 'The Median', content: 'The middle score when data are arranged in order. Divides the distribution in half. For an even number of scores, average the two middle values. Resistant to outliers.' },
      { title: 'The Mode', content: 'The most frequently occurring score. A distribution can be unimodal (one mode), bimodal (two modes), or multimodal. The only measure suitable for nominal data.' },
      { title: 'Choosing the Right Measure', content: 'Mean: best for symmetrical interval/ratio data. Median: best when distribution is skewed or has outliers. Mode: best for nominal data or describing the most typical category.' },
      { title: 'Central Tendency & Distribution Shape', content: 'Symmetrical: mean = median = mode. Positively skewed: mode < median < mean (mean pulled toward tail). Negatively skewed: mean < median < mode.' },
      { title: 'Weighted Mean', content: 'Used when combining means from groups of different sizes: weighted mean = Σ(n·M) / Σn. Larger groups contribute more to the overall mean.' },
    ],
  },
};

export const GenericChapterStudy = ({ chapterId, onBack, onStartQuiz }) => {
  const chapter = chapterContent[chapterId];
  if (!chapter) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid={`ch${chapterId}-back-btn`}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">{chapter.badge}</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{chapter.title}</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          <button
            data-testid={`ch${chapterId}-tab-concepts`}
            className="flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all whitespace-nowrap bg-primary text-primary-foreground"
          >
            <BookOpen className="w-4 h-4" />
            Key Concepts
          </button>
          <button
            onClick={onStartQuiz}
            data-testid={`ch${chapterId}-tab-quiz`}
            className="flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all whitespace-nowrap text-muted-foreground hover:bg-muted"
          >
            <Play className="w-4 h-4" />
            Quiz
          </button>
        </div>

        {/* Concepts */}
        <div className="space-y-4 fade-in">
          {chapter.concepts.map((concept, idx) => (
            <Card key={idx} className="border-2 border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{concept.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">{concept.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericChapterStudy;
