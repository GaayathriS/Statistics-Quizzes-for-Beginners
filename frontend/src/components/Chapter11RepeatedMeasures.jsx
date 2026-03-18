import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, FlaskConical, Calculator, Play, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

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

export const Chapter11RepeatedMeasures = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');
  const [calcN, setCalcN] = useState('');
  const [calcMD, setCalcMD] = useState('');
  const [calcSS, setCalcSS] = useState('');
  const [calcMuD, setCalcMuD] = useState('0');
  const [calcResult, setCalcResult] = useState(null);

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'example', label: 'Example 11.2', icon: FlaskConical },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'quiz', label: 'Quiz', icon: Play },
  ];

  const handleCalculate = () => {
    const n = parseFloat(calcN);
    const md = parseFloat(calcMD);
    const ss = parseFloat(calcSS);
    const muD = parseFloat(calcMuD) || 0;
    if (isNaN(n) || isNaN(md) || isNaN(ss) || n < 2) return;

    const df = n - 1;
    const variance = ss / df;
    const stdError = Math.sqrt(variance / n);
    const tStat = (md - muD) / stdError;
    const r2 = (tStat * tStat) / (tStat * tStat + df);

    setCalcResult({ df, variance, stdError, tStat, r2 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch11-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 11</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">The t Test for Two Related Samples</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch11-tab-${tab.id}`}
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
                <CardTitle className="text-xl">Repeated-Measures Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A <strong>repeated-measures</strong> (within-subjects) design uses the <strong>same group of participants</strong> in all treatment conditions. Each person is measured twice, giving two scores per participant. This eliminates individual differences as a source of variability.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-teal-500/10 border border-teal-500/20">
                    <h4 className="font-semibold text-teal-400 mb-2">Advantage</h4>
                    <p className="text-sm text-muted-foreground">Eliminates individual differences between groups. Requires fewer participants. Each subject is their own control.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h4 className="font-semibold text-amber-400 mb-2">Disadvantage</h4>
                    <p className="text-sm text-muted-foreground">Risk of order effects, practice effects, and carryover effects from being in multiple conditions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Difference Scores (D)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">The key to repeated-measures: convert two scores per person into a <strong>single difference score</strong>:</p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">D = X&#8322; &#8722; X&#8321;</p>
                </div>
                <p className="text-sm text-muted-foreground">Where X&#8321; is the score in the first condition and X&#8322; is the score in the second condition. Then the hypothesis test is performed on the D values, just like a single-sample t-test.</p>
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">M<sub>D</sub></strong> = mean of the difference scores</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">SS</strong> = sum of squared deviations of D values from M<sub>D</sub></p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">The Repeated-Measures t Statistic</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Structurally <strong>identical</strong> to the single-sample t from Chapter 9, but uses D values:</p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-3">
                  <p className="font-mono text-foreground">s&#178; = SS / (n &#8722; 1)</p>
                  <p className="font-mono text-foreground">s<sub>MD</sub> = &#8730;(s&#178; / n)</p>
                  <p className="text-lg font-mono font-semibold text-primary">t = (M<sub>D</sub> &#8722; &#956;<sub>D</sub>) / s<sub>MD</sub></p>
                </div>
                <p className="text-sm text-muted-foreground">Where &#956;<sub>D</sub> is typically 0 under H&#8320;, and df = n &#8722; 1 (n = number of difference scores).</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Repeated-Measures vs. Independent-Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 text-muted-foreground">Feature</th>
                        <th className="text-left p-2 text-muted-foreground">Independent (Ch 10)</th>
                        <th className="text-left p-2 text-muted-foreground">Repeated (Ch 11)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium text-foreground">Participants</td>
                        <td className="p-2">Two separate groups</td>
                        <td className="p-2">Same group, measured twice</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium text-foreground">Data</td>
                        <td className="p-2">Compare two sample means</td>
                        <td className="p-2">Compute D scores, test M<sub>D</sub></td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium text-foreground">df</td>
                        <td className="p-2">n&#8321; + n&#8322; &#8722; 2</td>
                        <td className="p-2">n &#8722; 1</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-medium text-foreground">Variability</td>
                        <td className="p-2">Pooled variance from two groups</td>
                        <td className="p-2">Variance of D scores only</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium text-foreground">Key risk</td>
                        <td className="p-2">Individual differences add noise</td>
                        <td className="p-2">Order/practice/carryover effects</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Example 11.2 Tab */}
        {activeTab === 'example' && (
          <div className="space-y-5 fade-in">
            <Card className="border-2 border-teal-500/20 bg-teal-500/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-teal-400" />
                  Example 11.2: eReader and Alertness (Repeated-Measures)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A researcher investigates whether reading from a <strong>light-emitting eReader</strong> before bedtime affects alertness the next morning. A sample of <strong>n = 9</strong> volunteers is tested under both conditions: once after a normal evening (no eReader) and once after spending at least 15 minutes on an eReader before sleep. Each participant takes a standardized cognitive alertness test the next morning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Difference scores are computed (D = no-eReader &#8722; eReader), yielding <strong>M<sub>D</sub> = 4</strong> and <strong>SS = 162</strong>. Positive D means alertness was <em>lower</em> after eReader use.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">n = 9</Badge>
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">M_D = 4</Badge>
                  <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30">SS = 162</Badge>
                  <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">Same participants &#8594; Repeated-Measures t</Badge>
                </div>
              </CardContent>
            </Card>

            <NHTStep step="1" title="State the Hypotheses & Select Alpha" color="border-blue-500/30 bg-blue-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50">
                  <p><strong className="text-foreground">H&#8320;:</strong> The eReader has no effect on alertness. &#956;<sub>D</sub> = 0</p>
                  <p><strong className="text-foreground">H&#8321;:</strong> The eReader does affect alertness. &#956;<sub>D</sub> &#8800; 0</p>
                  <p><strong className="text-foreground">&#945; = .05</strong> (two-tailed test)</p>
                </div>
                <p>Because the same participants are measured in both conditions, we use a <strong className="text-foreground">repeated-measures t-test</strong> on the difference scores.</p>
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
              </div>
            </NHTStep>

            <NHTStep step="3" title="Compute the Test Statistic" color="border-amber-500/30 bg-amber-500/5">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Step A: Variance of the D scores</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center">
                  <p>s&#178; = SS / (n &#8722; 1) = 162 / 8 = <strong className="text-foreground">20.25</strong></p>
                </div>
                <p className="font-semibold text-foreground">Step B: Estimated standard error for M<sub>D</sub></p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center">
                  <p>s<sub>MD</sub> = &#8730;(s&#178; / n) = &#8730;(20.25 / 9) = &#8730;2.25 = <strong className="text-foreground">1.50</strong></p>
                </div>
                <p className="font-semibold text-foreground">Step C: The repeated-measures t statistic</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>t = (M<sub>D</sub> &#8722; &#956;<sub>D</sub>) / s<sub>MD</sub></p>
                  <p>t = (4 &#8722; 0) / 1.50</p>
                  <p>t = 4 / 1.50 = <strong className="text-primary text-lg">+2.67</strong></p>
                </div>
              </div>
            </NHTStep>

            <NHTStep step="4" title="Make a Decision" color="border-violet-500/30 bg-violet-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400">REJECT H&#8320;</p>
                  <p className="mt-1">The t-value of <strong>+2.67</strong> exceeds the critical boundary of <strong>+2.306</strong>, placing it in the critical region.</p>
                </div>
                <p><strong className="text-foreground">Conclusion:</strong> Reading from an eReader before bedtime significantly reduces alertness the following morning, t(8) = 2.67, p &lt; .05.</p>
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p className="font-mono text-foreground">r&#178; = (2.67)&#178; / ((2.67)&#178; + 8) = 7.13 / 15.13 &#8776; 0.47</p>
                  <p className="text-foreground">47% of the variance in alertness is accounted for by eReader use &#8212; a <strong>large</strong> effect.</p>
                </div>
              </div>
            </NHTStep>
          </div>
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Repeated-Measures t Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter your difference-score data to compute the t statistic step by step.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Number of participants (n)</label>
                    <input
                      type="number" value={calcN} onChange={e => setCalcN(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 border-border bg-background text-foreground"
                      placeholder="e.g., 9" data-testid="ch11-calc-n"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Mean difference (M_D)</label>
                    <input
                      type="number" value={calcMD} onChange={e => setCalcMD(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 border-border bg-background text-foreground"
                      placeholder="e.g., 4" data-testid="ch11-calc-md"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">SS (sum of squares for D)</label>
                    <input
                      type="number" value={calcSS} onChange={e => setCalcSS(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 border-border bg-background text-foreground"
                      placeholder="e.g., 162" data-testid="ch11-calc-ss"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">&#956;_D (usually 0)</label>
                    <input
                      type="number" value={calcMuD} onChange={e => setCalcMuD(e.target.value)}
                      className="w-full p-3 rounded-lg border-2 border-border bg-background text-foreground"
                      placeholder="0" data-testid="ch11-calc-mu"
                    />
                  </div>
                </div>
                <Button onClick={handleCalculate} className="w-full" size="lg" data-testid="ch11-calc-btn">
                  Calculate t Statistic
                </Button>

                {calcResult && (
                  <div className="space-y-3 p-4 rounded-lg bg-muted/50 border-2 border-primary/10" data-testid="ch11-calc-result">
                    <h4 className="font-semibold text-foreground">Step-by-Step Solution</h4>
                    <div className="space-y-2 text-sm font-mono">
                      <p className="text-muted-foreground">df = n &#8722; 1 = <strong className="text-foreground">{calcResult.df}</strong></p>
                      <p className="text-muted-foreground">s&#178; = SS / df = {calcSS} / {calcResult.df} = <strong className="text-foreground">{calcResult.variance.toFixed(4)}</strong></p>
                      <p className="text-muted-foreground">s_MD = &#8730;(s&#178; / n) = &#8730;({calcResult.variance.toFixed(4)} / {calcN}) = <strong className="text-foreground">{calcResult.stdError.toFixed(4)}</strong></p>
                      <p className="text-muted-foreground">t = (M_D &#8722; &#956;_D) / s_MD = ({calcMD} &#8722; {calcMuD || 0}) / {calcResult.stdError.toFixed(4)} = <strong className="text-primary text-lg">{calcResult.tStat.toFixed(4)}</strong></p>
                      <p className="text-muted-foreground">r&#178; = t&#178; / (t&#178; + df) = <strong className="text-foreground">{calcResult.r2.toFixed(4)}</strong> ({(calcResult.r2 * 100).toFixed(1)}% of variance)</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
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
                  <h3 className="text-2xl font-bold text-foreground mb-2">Chapter 11 Quiz</h3>
                  <p className="text-muted-foreground">Test your understanding of the repeated-measures t-test, difference scores, and when to use within-subjects designs.</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">15 Questions</Badge>
                  <Badge variant="outline">Mixed Difficulty</Badge>
                  <Badge variant="outline">210 Points</Badge>
                </div>
                <Button onClick={onStartQuiz} size="lg" className="btn-glow" data-testid="ch11-start-quiz-btn">
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

export default Chapter11RepeatedMeasures;
