import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, FlaskConical, Play, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const NHTStep = ({ step, title, children, color }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`border-2 rounded-xl overflow-hidden ${color}`}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 font-semibold text-left">
        <span className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">{step}</span>
          {title}
        </span>
        {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {open && <div className="px-4 pb-4 space-y-3">{children}</div>}
    </div>
  );
};

export const Chapter9TStatistic = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'example', label: 'Example 9.2', icon: FlaskConical },
    { id: 'quiz', label: 'Quiz', icon: Play },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch9-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 9</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Introduction to the t Statistic</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch9-tab-${tab.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Concepts Tab */}
        {activeTab === 'concepts' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Why the t Statistic?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In Chapter 8 we used z-scores, which require knowing the population standard deviation (&#963;). In real research, <strong>&#963; is almost never known</strong>. The t statistic solves this by replacing &#963; with the <strong>sample standard deviation (s)</strong>.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">z-score (Ch 8)</h4>
                    <p className="text-sm font-mono text-center text-muted-foreground">z = (M &#8722; &#956;) / &#963;<sub>M</sub></p>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Requires known &#963;</p>
                  </div>
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <h4 className="font-semibold text-violet-400 mb-2">t statistic (Ch 9)</h4>
                    <p className="text-sm font-mono text-center text-muted-foreground">t = (M &#8722; &#956;) / s<sub>M</sub></p>
                    <p className="text-xs text-muted-foreground mt-2 text-center">Uses sample s to estimate &#963;</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Estimated Standard Error</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Since we don't know &#963;, we compute the <strong>estimated standard error</strong> from the sample:</p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="font-mono text-foreground">s<sup>2</sup> = SS / (n &#8722; 1)&nbsp;&nbsp;&nbsp;(sample variance)</p>
                  <p className="font-mono text-foreground">s<sub>M</sub> = &#8730;(s<sup>2</sup> / n)&nbsp;&nbsp;&nbsp;(estimated standard error)</p>
                </div>
                <p className="text-sm text-muted-foreground">We divide by <strong>n &#8722; 1</strong> (not n) to get an unbiased estimate of the population variance.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">The t Distribution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">The t distribution looks like a normal curve but has <strong>heavier tails</strong> due to the extra uncertainty from estimating &#963;.</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Small df</p>
                    <p className="text-sm font-semibold text-foreground">Wide & flat</p>
                    <p className="text-xs text-muted-foreground">More spread, larger critical values</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Large df</p>
                    <p className="text-sm font-semibold text-foreground">Approaches normal</p>
                    <p className="text-xs text-muted-foreground">Less spread, smaller critical values</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 text-center">
                    <p className="text-xs text-muted-foreground mb-1">df = &#8734;</p>
                    <p className="text-sm font-semibold text-foreground">Identical to z</p>
                    <p className="text-xs text-muted-foreground">Same as standard normal</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Degrees of freedom:</strong> df = n &#8722; 1. As df increases, the t distribution becomes narrower and more normal.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Effect Size: r&#178;</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">r&#178; tells us the <strong>proportion of variance</strong> in the dependent variable accounted for by the treatment:</p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">r&#178; = t&#178; / (t&#178; + df)</p>
                </div>
                <div className="flex gap-4 justify-center text-sm">
                  <Badge variant="outline">Small: r&#178; &#8776; .01</Badge>
                  <Badge variant="outline">Medium: r&#178; &#8776; .09</Badge>
                  <Badge variant="outline">Large: r&#178; &#8776; .25</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Confidence Intervals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">A confidence interval provides a range of plausible values for the population mean:</p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">&#956; = M &#177; t(s<sub>M</sub>)</p>
                </div>
                <p className="text-sm text-muted-foreground">For a 95% CI, use the critical t-value for &#945; = .05 (two-tailed) with your df. This means that if we repeated the study many times, 95% of the intervals would contain the true &#956;.</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Example 9.2 Tab */}
        {activeTab === 'example' && (
          <div className="space-y-5 fade-in">
            <Card className="border-2 border-cyan-500/20 bg-cyan-500/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-cyan-400" />
                  Example 9.2: eReader and Alertness
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A researcher investigates whether reading from a <strong>light-emitting eReader</strong> before bedtime affects alertness the next morning. Participants spend at least 15 minutes using an eReader during the hour before sleeping, then take a standardized cognitive alertness test the next morning. For the general population, alertness scores average <strong>&#956; = 50</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A sample of <strong>n = 9</strong> volunteers has an average score of <strong>M = 46</strong> with <strong>SS = 162</strong>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">&#956; = 50</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">n = 9</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">M = 46</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">SS = 162</Badge>
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">&#963; is UNKNOWN &#8594; use t</Badge>
                </div>
              </CardContent>
            </Card>

            <NHTStep step="1" title="State the Hypotheses & Select Alpha" color="border-blue-500/30 bg-blue-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50">
                  <p><strong className="text-foreground">H&#8320;:</strong> The eReader has no effect on alertness. &#956; = 50</p>
                  <p><strong className="text-foreground">H&#8321;:</strong> The eReader does affect alertness. &#956; &#8800; 50</p>
                  <p><strong className="text-foreground">&#945; = .05</strong> (two-tailed test)</p>
                </div>
                <p>Because &#963; is unknown, we'll use a <strong className="text-foreground">t-test</strong> instead of a z-test.</p>
              </div>
            </NHTStep>

            <NHTStep step="2" title="Locate the Critical Region" color="border-emerald-500/30 bg-emerald-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p><strong className="text-foreground">df</strong> = n &#8722; 1 = 9 &#8722; 1 = <strong className="text-foreground">8</strong></p>
                  <p>For &#945; = .05 (two-tailed) with df = 8:</p>
                </div>
                <div className="p-3 rounded bg-muted/50 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">Critical t = &#177;2.306</p>
                </div>
                <p>If our calculated t is beyond &#177;2.306, we reject H&#8320;.</p>
              </div>
            </NHTStep>

            <NHTStep step="3" title="Compute the Test Statistic" color="border-amber-500/30 bg-amber-500/5">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Step A: Sample variance</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center">
                  <p>s&#178; = SS / (n &#8722; 1) = 162 / 8 = <strong className="text-foreground">20.25</strong></p>
                </div>
                <p className="font-semibold text-foreground">Step B: Estimated standard error</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center">
                  <p>s<sub>M</sub> = &#8730;(s&#178; / n) = &#8730;(20.25 / 9) = &#8730;2.25 = <strong className="text-foreground">1.50</strong></p>
                </div>
                <p className="font-semibold text-foreground">Step C: The t statistic</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>t = (M &#8722; &#956;) / s<sub>M</sub></p>
                  <p>t = (46 &#8722; 50) / 1.50</p>
                  <p>t = &#8722;4 / 1.50 = <strong className="text-primary text-lg">&#8722;2.67</strong></p>
                </div>
              </div>
            </NHTStep>

            <NHTStep step="4" title="Make a Decision" color="border-violet-500/30 bg-violet-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400">REJECT H&#8320;</p>
                  <p className="mt-1">The t-value of <strong>&#8722;2.67</strong> is beyond the critical boundary of <strong>&#8722;2.306</strong>, placing it in the critical region.</p>
                </div>
                <p><strong className="text-foreground">Conclusion:</strong> Reading from a light-emitting eReader before bedtime significantly reduces alertness the following morning, t(8) = &#8722;2.67, p &lt; .05.</p>
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p className="font-mono text-foreground">Effect size: r&#178; = (&#8722;2.67)&#178; / ((&#8722;2.67)&#178; + 8) = 7.13 / 15.13 &#8776; 0.47</p>
                  <p className="text-foreground">47% of the variance in alertness is accounted for by eReader use &#8212; a <strong>large</strong> effect.</p>
                </div>
              </div>
            </NHTStep>
          </div>
        )}

        {/* Quiz Tab */}
        {activeTab === 'quiz' && (
          <div className="flex flex-col items-center justify-center py-12 space-y-6 fade-in">
            <Card className="border-2 border-primary/10 max-w-lg w-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Chapter 9 Quiz</h3>
                  <p className="text-muted-foreground">Test your understanding of the t statistic, estimated standard error, degrees of freedom, r&#178;, and confidence intervals.</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">15 Questions</Badge>
                  <Badge variant="outline">Mixed Difficulty</Badge>
                  <Badge variant="outline">205 Points</Badge>
                </div>
                <Button onClick={onStartQuiz} size="lg" className="btn-glow" data-testid="ch9-start-quiz-btn">
                  Start Quiz <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter9TStatistic;
