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

export const Chapter8HypothesisTesting = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'example', label: 'Example 8.1', icon: FlaskConical },
    { id: 'quiz', label: 'Quiz', icon: Play },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch8-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 8</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Introduction to Hypothesis Testing</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch8-tab-${tab.id}`}
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
                <CardTitle className="text-xl">The Logic of Hypothesis Testing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hypothesis testing is a systematic 4-step procedure that uses sample data to decide whether a treatment or condition has an effect on a population. The logic is indirect: we assume the treatment has <strong>no effect</strong> (null hypothesis), then check whether our data are too unlikely under that assumption.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Null Hypothesis (H&#8320;)</h4>
                    <p className="text-sm text-muted-foreground">States the treatment has <strong>no effect</strong>. The population mean is unchanged. Example: H&#8320;: &#956; = 16</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-400 mb-2">Alternative Hypothesis (H&#8321;)</h4>
                    <p className="text-sm text-muted-foreground">States the treatment <strong>does</strong> have an effect. The population mean has changed. Example: H&#8321;: &#956; &#8800; 16</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">The 4-Step Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { step: '1', title: 'State Hypotheses & Alpha', desc: 'Define H\u2080 and H\u2081. Choose the significance level (\u03b1), typically .05.' },
                    { step: '2', title: 'Locate the Critical Region', desc: 'Find the z (or t) boundary values that mark the \"unlikely\" zone. For \u03b1 = .05 two-tailed, critical z = \u00b11.96.' },
                    { step: '3', title: 'Compute the Test Statistic', desc: 'Calculate the z-score (or t) from your sample data. Compare how far the sample mean is from \u03bc in standard-error units.' },
                    { step: '4', title: 'Make a Decision', desc: 'If the test statistic falls in the critical region \u2192 reject H\u2080. Otherwise \u2192 fail to reject H\u2080.' },
                  ].map(item => (
                    <div key={item.step} className="flex gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">{item.step}</div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Errors in Hypothesis Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                    <h4 className="font-semibold text-red-400 mb-2">Type I Error (False Positive)</h4>
                    <p className="text-sm text-muted-foreground">Rejecting a <strong>true</strong> H&#8320;. You conclude there is an effect when there isn't one. Probability = &#945;.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-400 mb-2">Type II Error (False Negative)</h4>
                    <p className="text-sm text-muted-foreground">Failing to reject a <strong>false</strong> H&#8320;. You miss a real effect. Probability = &#946;.</p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <h4 className="font-semibold text-violet-400 mb-2">Statistical Power = 1 &#8722; &#946;</h4>
                  <p className="text-sm text-muted-foreground">The probability of correctly detecting a real effect. Increased by: larger n, larger effect, larger &#945;.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Effect Size: Cohen's d</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Cohen's d measures <strong>how large</strong> the treatment effect is, independent of sample size:</p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">d = (M &#8722; &#956;) / &#963;</p>
                </div>
                <div className="flex gap-4 justify-center text-sm">
                  <Badge variant="outline">Small: d = 0.2</Badge>
                  <Badge variant="outline">Medium: d = 0.5</Badge>
                  <Badge variant="outline">Large: d = 0.8</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Example 8.1 Tab */}
        {activeTab === 'example' && (
          <div className="space-y-5 fade-in">
            <Card className="border-2 border-rose-500/20 bg-rose-500/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-rose-400" />
                  Example 8.1: The Red Shirt Study
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A researcher investigates whether waitresses wearing <strong>red shirts</strong> receive larger tips from male customers. Restaurant records show that waitresses' tips from male customers normally average <strong>&#956; = 16%</strong> of the bill with a standard deviation of <strong>&#963; = 3</strong> percentage points. During the study, waitresses wear red shirts and the researcher records tips for a sample of <strong>n = 36</strong> male customers. The sample mean tip is <strong>M = 17.2%</strong>.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">&#956; = 16</Badge>
                  <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">&#963; = 3</Badge>
                  <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">n = 36</Badge>
                  <Badge className="bg-rose-500/20 text-rose-300 border-rose-500/30">M = 17.2</Badge>
                </div>
              </CardContent>
            </Card>

            <NHTStep step="1" title="State the Hypotheses & Select Alpha" color="border-blue-500/30 bg-blue-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50">
                  <p><strong className="text-foreground">H&#8320;:</strong> The red shirt has no effect on tipping. &#956; = 16</p>
                  <p><strong className="text-foreground">H&#8321;:</strong> The red shirt does affect tipping. &#956; &#8800; 16</p>
                  <p><strong className="text-foreground">&#945; = .05</strong> (two-tailed test)</p>
                </div>
                <p>We use a two-tailed test because we're asking whether tips change in <em>either</em> direction (higher or lower).</p>
              </div>
            </NHTStep>

            <NHTStep step="2" title="Locate the Critical Region" color="border-emerald-500/30 bg-emerald-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Since &#963; is known, we use a <strong className="text-foreground">z-test</strong>.</p>
                <p>For &#945; = .05 (two-tailed), the critical boundaries are:</p>
                <div className="p-3 rounded bg-muted/50 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">Critical z = &#177;1.96</p>
                </div>
                <p>If our calculated z falls beyond &#177;1.96, we reject H&#8320;.</p>
              </div>
            </NHTStep>

            <NHTStep step="3" title="Compute the Test Statistic" color="border-amber-500/30 bg-amber-500/5">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">First, calculate the standard error:</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>&#963;<sub>M</sub> = &#963; / &#8730;n = 3 / &#8730;36 = 3 / 6 = <strong className="text-foreground">0.50</strong></p>
                </div>
                <p className="font-semibold text-foreground">Then compute the z-score:</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>z = (M &#8722; &#956;) / &#963;<sub>M</sub></p>
                  <p>z = (17.2 &#8722; 16) / 0.50</p>
                  <p>z = 1.2 / 0.50 = <strong className="text-primary text-lg">+2.40</strong></p>
                </div>
              </div>
            </NHTStep>

            <NHTStep step="4" title="Make a Decision" color="border-violet-500/30 bg-violet-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400">REJECT H&#8320;</p>
                  <p className="mt-1">The z-score of <strong>+2.40</strong> exceeds the critical boundary of <strong>+1.96</strong>, placing it in the critical region.</p>
                </div>
                <p><strong className="text-foreground">Conclusion:</strong> Wearing a red shirt has a statistically significant effect on tips from male customers. Waitresses wearing red received significantly larger tips than the baseline average of 16%.</p>
                <div className="p-3 rounded bg-muted/50">
                  <p className="font-mono text-foreground">Effect size: d = (17.2 &#8722; 16) / 3 = 0.40 (medium effect)</p>
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">Chapter 8 Quiz</h3>
                  <p className="text-muted-foreground">Test your understanding of hypothesis testing concepts, the 4-step process, Type I & II errors, and effect size.</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">15 Questions</Badge>
                  <Badge variant="outline">Mixed Difficulty</Badge>
                  <Badge variant="outline">205 Points</Badge>
                </div>
                <Button onClick={onStartQuiz} size="lg" className="btn-glow" data-testid="ch8-start-quiz-btn">
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

export default Chapter8HypothesisTesting;
