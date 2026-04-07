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

export const Chapter12ANOVA = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');
  // Calculator state: 3 groups
  const [groups, setGroups] = useState([
    { n: '', mean: '', ss: '' },
    { n: '', mean: '', ss: '' },
    { n: '', mean: '', ss: '' },
  ]);
  const [calcResult, setCalcResult] = useState(null);

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'example', label: 'Example 12.1', icon: FlaskConical },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'quiz', label: 'Quiz', icon: Play },
  ];

  const updateGroup = (idx, field, value) => {
    setGroups(prev => prev.map((g, i) => i === idx ? { ...g, [field]: value } : g));
  };

  const addGroup = () => {
    if (groups.length < 6) setGroups(prev => [...prev, { n: '', mean: '', ss: '' }]);
  };

  const removeGroup = () => {
    if (groups.length > 2) setGroups(prev => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    const parsed = groups.map(g => ({
      n: parseFloat(g.n),
      mean: parseFloat(g.mean),
      ss: parseFloat(g.ss),
    }));
    if (parsed.some(g => isNaN(g.n) || isNaN(g.mean) || isNaN(g.ss) || g.n < 1)) return;

    const k = parsed.length;
    const N = parsed.reduce((sum, g) => sum + g.n, 0);
    const grandTotal = parsed.reduce((sum, g) => sum + g.n * g.mean, 0);
    const grandMean = grandTotal / N;

    const ssBetween = parsed.reduce((sum, g) => sum + g.n * Math.pow(g.mean - grandMean, 2), 0);
    const ssWithin = parsed.reduce((sum, g) => sum + g.ss, 0);
    const ssTotal = ssBetween + ssWithin;

    const dfBetween = k - 1;
    const dfWithin = N - k;
    const dfTotal = N - 1;

    const msBetween = ssBetween / dfBetween;
    const msWithin = ssWithin / dfWithin;
    const fRatio = msBetween / msWithin;
    const eta2 = ssBetween / ssTotal;

    setCalcResult({ k, N, grandMean, ssBetween, ssWithin, ssTotal, dfBetween, dfWithin, dfTotal, msBetween, msWithin, fRatio, eta2 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch12-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 12</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Introduction to Analysis of Variance</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch12-tab-${tab.id}`}
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

        {/* ---- CONCEPTS TAB ---- */}
        {activeTab === 'concepts' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Why ANOVA Instead of Multiple t-Tests?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  When a study has <strong>three or more</strong> treatment conditions, running multiple t-tests inflates the <strong>experimentwise Type I error rate</strong> well beyond alpha. ANOVA performs a single test that keeps the overall risk of a false positive at the stated alpha level.
                </p>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-2">Example</h4>
                  <p className="text-sm text-muted-foreground">
                    With 3 groups you'd need 3 separate t-tests. Each at α = .05 gives a combined error rate of about .14 (14%), not .05. ANOVA avoids this problem.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">The Logic of ANOVA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  ANOVA works by comparing two estimates of population variance:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Between-Treatments Variance (MS<sub>between</sub>)</h4>
                    <p className="text-sm text-muted-foreground">Measures differences <em>between</em> group means. Includes treatment effects <strong>+ error</strong>.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-400 mb-2">Within-Treatments Variance (MS<sub>within</sub>)</h4>
                    <p className="text-sm text-muted-foreground">Measures variability <em>inside</em> each group. Reflects only <strong>random/unsystematic error</strong>.</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="text-lg font-mono font-semibold text-primary">F = MS<sub>between</sub> / MS<sub>within</sub></p>
                  <p className="text-sm text-muted-foreground">If no treatment effect exists, F ≈ 1. A large F suggests the treatment had an effect.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">ANOVA Formulas & SS Partitioning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Total variability is split into two additive components:</p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-3">
                  <p className="font-mono text-foreground">SS<sub>total</sub> = SS<sub>between</sub> + SS<sub>within</sub></p>
                  <p className="font-mono text-foreground">df<sub>total</sub> = df<sub>between</sub> + df<sub>within</sub></p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-1">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>between</sub></strong> = k − 1 &nbsp;(k = number of treatments)</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>within</sub></strong> = N − k &nbsp;(N = total number of scores)</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>total</sub></strong> = N − 1</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-1">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">MS<sub>between</sub></strong> = SS<sub>between</sub> / df<sub>between</sub></p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">MS<sub>within</sub></strong> = SS<sub>within</sub> / df<sub>within</sub></p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Effect Size: Eta Squared (η²)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Just as r² measures effect size for t-tests, <strong>η² (eta squared)</strong> measures the proportion of total variance explained by treatment differences in ANOVA:
                </p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-primary">η² = SS<sub>between</sub> / SS<sub>total</sub></p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="font-semibold text-emerald-400">Small</p>
                    <p className="text-muted-foreground">η² ≈ .01</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="font-semibold text-amber-400">Medium</p>
                    <p className="text-muted-foreground">η² ≈ .06</p>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <p className="font-semibold text-rose-400">Large</p>
                    <p className="text-muted-foreground">η² ≈ .14</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Post Hoc Tests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A significant F-ratio tells you that <em>at least one</em> mean differs, but <strong>not which ones</strong>. Post hoc tests compare pairs of means while controlling the experimentwise error rate.
                </p>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">Tukey's HSD</strong> — most common; compares every pair of means and maintains α across all comparisons.</p>
                  <p className="text-sm text-muted-foreground mt-2"><strong className="text-foreground">Scheffé test</strong> — more conservative; useful when group sizes are unequal.</p>
                </div>
                <p className="text-sm text-muted-foreground">Post hoc tests are only performed <strong>after</strong> obtaining a significant F.</p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* ---- EXAMPLE 12.1 TAB ---- */}
        {activeTab === 'example' && (
          <div className="space-y-5 fade-in">
            <Card className="border-2 border-orange-500/20 bg-orange-500/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-orange-400" />
                  Example 12.1: Sleep Deprivation and Cognitive Errors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A researcher investigates whether the amount of sleep affects the number of errors on a cognitive skills test. Three <strong>independent</strong> groups of <strong>n = 5</strong> participants each are randomly assigned to one of three sleep conditions the night before testing:
                </p>
                <div className="grid sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <p className="font-semibold text-rose-400">Group 1</p>
                    <p className="text-sm text-muted-foreground">2 hours of sleep</p>
                    <p className="text-xs text-muted-foreground mt-1">Scores: 3, 5, 5, 5, 7</p>
                    <p className="text-xs font-mono mt-1 text-foreground">T₁ = 25, M₁ = 5</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="font-semibold text-amber-400">Group 2</p>
                    <p className="text-sm text-muted-foreground">6 hours of sleep</p>
                    <p className="text-xs text-muted-foreground mt-1">Scores: 1, 3, 3, 3, 5</p>
                    <p className="text-xs font-mono mt-1 text-foreground">T₂ = 15, M₂ = 3</p>
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="font-semibold text-emerald-400">Group 3</p>
                    <p className="text-sm text-muted-foreground">10 hours of sleep</p>
                    <p className="text-xs text-muted-foreground mt-1">Scores: 0, 0, 0, 2, 3</p>
                    <p className="text-xs font-mono mt-1 text-foreground">T₃ = 5, M₃ = 1</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">k = 3 groups</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">n = 5 each</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">N = 15 total</Badge>
                  <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">G = 45</Badge>
                </div>
              </CardContent>
            </Card>

            <NHTStep step="1" title="State the Hypotheses & Select Alpha" color="border-blue-500/30 bg-blue-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50">
                  <p><strong className="text-foreground">H₀:</strong> μ₁ = μ₂ = μ₃ &nbsp;(Sleep has no effect on errors)</p>
                  <p><strong className="text-foreground">H₁:</strong> At least one μ differs &nbsp;(Sleep does affect errors)</p>
                  <p><strong className="text-foreground">α = .05</strong></p>
                </div>
                <p>Because the study compares <strong>three independent groups</strong>, we use a <strong>one-way ANOVA</strong> rather than t-tests.</p>
              </div>
            </NHTStep>

            <NHTStep step="2" title="Locate the Critical Region" color="border-emerald-500/30 bg-emerald-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p><strong className="text-foreground">df<sub>between</sub></strong> = k − 1 = 3 − 1 = <strong className="text-foreground">2</strong></p>
                  <p><strong className="text-foreground">df<sub>within</sub></strong> = N − k = 15 − 3 = <strong className="text-foreground">12</strong></p>
                  <p>For α = .05 with df = 2, 12:</p>
                </div>
                <div className="p-3 rounded bg-muted/50 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">Critical F = 3.89</p>
                </div>
                <p>We reject H₀ if the obtained F exceeds 3.89.</p>
              </div>
            </NHTStep>

            <NHTStep step="3" title="Compute the Test Statistic" color="border-amber-500/30 bg-amber-500/5">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">Step A: Compute SS values</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>SS₁ = 8 &nbsp; SS₂ = 8 &nbsp; SS₃ = 8</p>
                  <p className="text-foreground"><strong>SS<sub>within</sub></strong> = 8 + 8 + 8 = <strong>24</strong></p>
                </div>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>Grand Mean = G / N = 45 / 15 = <strong className="text-foreground">3</strong></p>
                  <p>SS<sub>between</sub> = Σn<sub>i</sub>(M<sub>i</sub> − M<sub>grand</sub>)²</p>
                  <p>= 5(5−3)² + 5(3−3)² + 5(1−3)²</p>
                  <p>= 5(4) + 5(0) + 5(4) = <strong className="text-foreground">40</strong></p>
                </div>
                <div className="p-3 rounded bg-muted/50 font-mono text-center">
                  <p>SS<sub>total</sub> = 40 + 24 = <strong className="text-foreground">64</strong></p>
                </div>

                <p className="font-semibold text-foreground">Step B: Compute MS values</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>MS<sub>between</sub> = SS<sub>between</sub> / df<sub>between</sub> = 40 / 2 = <strong className="text-foreground">20</strong></p>
                  <p>MS<sub>within</sub> = SS<sub>within</sub> / df<sub>within</sub> = 24 / 12 = <strong className="text-foreground">2</strong></p>
                </div>

                <p className="font-semibold text-foreground">Step C: Compute the F-ratio</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p>F = MS<sub>between</sub> / MS<sub>within</sub></p>
                  <p>F = 20 / 2 = <strong className="text-primary text-lg">10.00</strong></p>
                </div>

                {/* ANOVA Summary Table */}
                <p className="font-semibold text-foreground pt-2">ANOVA Summary Table</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-mono">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2 text-muted-foreground font-semibold">Source</th>
                        <th className="text-center p-2 text-muted-foreground font-semibold">SS</th>
                        <th className="text-center p-2 text-muted-foreground font-semibold">df</th>
                        <th className="text-center p-2 text-muted-foreground font-semibold">MS</th>
                        <th className="text-center p-2 text-muted-foreground font-semibold">F</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-2">Between</td>
                        <td className="p-2 text-center">40</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center">20</td>
                        <td className="p-2 text-center font-bold text-primary">10.00</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2">Within</td>
                        <td className="p-2 text-center">24</td>
                        <td className="p-2 text-center">12</td>
                        <td className="p-2 text-center">2</td>
                        <td className="p-2 text-center"></td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Total</td>
                        <td className="p-2 text-center font-semibold">64</td>
                        <td className="p-2 text-center font-semibold">14</td>
                        <td className="p-2 text-center"></td>
                        <td className="p-2 text-center"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </NHTStep>

            <NHTStep step="4" title="Make a Decision" color="border-violet-500/30 bg-violet-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400">REJECT H₀</p>
                  <p className="mt-1">The obtained F = <strong>10.00</strong> exceeds the critical value of <strong>3.89</strong>.</p>
                </div>
                <p><strong className="text-foreground">Conclusion:</strong> The amount of sleep has a significant effect on the number of cognitive errors, F(2, 12) = 10.00, p &lt; .05.</p>
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p className="font-mono text-foreground">η² = SS<sub>between</sub> / SS<sub>total</sub> = 40 / 64 = <strong>0.625</strong></p>
                  <p className="text-foreground">62.5% of the variance in cognitive errors is accounted for by sleep condition — a <strong>large</strong> effect.</p>
                </div>
                <p>Because the F is significant and there are more than two groups, <strong>post hoc tests</strong> (e.g., Tukey's HSD) would be needed to determine which specific pairs of means differ significantly.</p>
              </div>
            </NHTStep>
          </div>
        )}

        {/* ---- CALCULATOR TAB ---- */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">One-Way ANOVA Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter each group's sample size, mean, and SS to compute the full ANOVA summary table.</p>

                {groups.map((g, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">n{idx + 1}</label>
                      <input
                        type="number" value={g.n} onChange={e => updateGroup(idx, 'n', e.target.value)}
                        className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm"
                        placeholder="e.g. 5"
                        data-testid={`ch12-calc-n${idx + 1}`}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">M{idx + 1} (mean)</label>
                      <input
                        type="number" value={g.mean} onChange={e => updateGroup(idx, 'mean', e.target.value)}
                        className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm"
                        placeholder="e.g. 5"
                        data-testid={`ch12-calc-m${idx + 1}`}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">SS{idx + 1}</label>
                      <input
                        type="number" value={g.ss} onChange={e => updateGroup(idx, 'ss', e.target.value)}
                        className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm"
                        placeholder="e.g. 8"
                        data-testid={`ch12-calc-ss${idx + 1}`}
                      />
                    </div>
                  </div>
                ))}

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={addGroup} disabled={groups.length >= 6} data-testid="ch12-add-group-btn">+ Add Group</Button>
                  <Button variant="outline" size="sm" onClick={removeGroup} disabled={groups.length <= 2} data-testid="ch12-remove-group-btn">- Remove Group</Button>
                </div>

                <Button onClick={handleCalculate} className="w-full" size="lg" data-testid="ch12-calc-btn">
                  Compute ANOVA
                </Button>

                {calcResult && (
                  <div className="space-y-4 p-4 rounded-lg bg-muted/50 border-2 border-primary/10" data-testid="ch12-calc-result">
                    <h4 className="font-semibold text-foreground">ANOVA Summary Table</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm font-mono">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left p-2 text-muted-foreground">Source</th>
                            <th className="text-center p-2 text-muted-foreground">SS</th>
                            <th className="text-center p-2 text-muted-foreground">df</th>
                            <th className="text-center p-2 text-muted-foreground">MS</th>
                            <th className="text-center p-2 text-muted-foreground">F</th>
                          </tr>
                        </thead>
                        <tbody className="text-foreground">
                          <tr className="border-b border-border/50">
                            <td className="p-2">Between</td>
                            <td className="p-2 text-center">{calcResult.ssBetween.toFixed(2)}</td>
                            <td className="p-2 text-center">{calcResult.dfBetween}</td>
                            <td className="p-2 text-center">{calcResult.msBetween.toFixed(2)}</td>
                            <td className="p-2 text-center font-bold text-primary">{calcResult.fRatio.toFixed(2)}</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-2">Within</td>
                            <td className="p-2 text-center">{calcResult.ssWithin.toFixed(2)}</td>
                            <td className="p-2 text-center">{calcResult.dfWithin}</td>
                            <td className="p-2 text-center">{calcResult.msWithin.toFixed(2)}</td>
                            <td className="p-2 text-center"></td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Total</td>
                            <td className="p-2 text-center font-semibold">{calcResult.ssTotal.toFixed(2)}</td>
                            <td className="p-2 text-center font-semibold">{calcResult.dfTotal}</td>
                            <td className="p-2 text-center"></td>
                            <td className="p-2 text-center"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">Grand Mean = <strong className="text-foreground">{calcResult.grandMean.toFixed(4)}</strong></p>
                      <p className="text-muted-foreground">η² = SS<sub>between</sub> / SS<sub>total</sub> = {calcResult.ssBetween.toFixed(2)} / {calcResult.ssTotal.toFixed(2)} = <strong className="text-primary">{calcResult.eta2.toFixed(4)}</strong> ({(calcResult.eta2 * 100).toFixed(1)}% of variance)</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* ---- QUIZ TAB ---- */}
        {activeTab === 'quiz' && (
          <div className="flex flex-col items-center justify-center py-12 space-y-6 fade-in">
            <Card className="border-2 border-primary/10 max-w-lg w-full">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Chapter 12 Quiz</h3>
                  <p className="text-muted-foreground">Test your understanding of one-way ANOVA, the F-ratio, SS partitioning, effect size (η²), and post hoc tests.</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="outline">15 Questions</Badge>
                  <Badge variant="outline">Mixed Difficulty</Badge>
                  <Badge variant="outline">220 Points</Badge>
                </div>
                <Button onClick={onStartQuiz} size="lg" className="btn-glow" data-testid="ch12-start-quiz-btn">
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

export default Chapter12ANOVA;
