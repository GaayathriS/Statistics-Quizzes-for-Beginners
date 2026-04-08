import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, Calculator, Play, ChevronDown, ChevronUp } from 'lucide-react';

export const Chapter13TwoFactorANOVA = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');
  // Calculator state
  const [calcSSA, setCalcSSA] = useState('');
  const [calcSSB, setCalcSSB] = useState('');
  const [calcSSAB, setCalcSSAB] = useState('');
  const [calcSSW, setCalcSSW] = useState('');
  const [calcDFA, setCalcDFA] = useState('');
  const [calcDFB, setCalcDFB] = useState('');
  const [calcDFAB, setCalcDFAB] = useState('');
  const [calcDFW, setCalcDFW] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
  ];

  const handleCalculate = () => {
    const ssA = parseFloat(calcSSA);
    const ssB = parseFloat(calcSSB);
    const ssAB = parseFloat(calcSSAB);
    const ssW = parseFloat(calcSSW);
    const dfA = parseFloat(calcDFA);
    const dfB = parseFloat(calcDFB);
    const dfAB = parseFloat(calcDFAB);
    const dfW = parseFloat(calcDFW);
    if ([ssA, ssB, ssAB, ssW, dfA, dfB, dfAB, dfW].some(isNaN)) return;

    const msA = ssA / dfA;
    const msB = ssB / dfB;
    const msAB = ssAB / dfAB;
    const msW = ssW / dfW;
    const fA = msA / msW;
    const fB = msB / msW;
    const fAB = msAB / msW;
    const ssTotal = ssA + ssB + ssAB + ssW;
    const dfTotal = dfA + dfB + dfAB + dfW;
    const eta2A = ssA / ssTotal;
    const eta2B = ssB / ssTotal;
    const eta2AB = ssAB / ssTotal;

    setCalcResult({ msA, msB, msAB, msW, fA, fB, fAB, ssTotal, dfTotal, eta2A, eta2B, eta2AB });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch13-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 13</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Two-Factor Analysis of Variance</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch13-tab-${tab.id}`}
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
          <button
            onClick={onStartQuiz}
            data-testid="ch13-tab-quiz"
            className="flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all whitespace-nowrap text-muted-foreground hover:bg-muted"
          >
            <Play className="w-4 h-4" />
            Quiz
          </button>
        </div>

        {/* ---- CONCEPTS TAB ---- */}
        {activeTab === 'concepts' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">What Is a Two-Factor Design?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A <strong>two-factor design</strong> (also called a <strong>factorial design</strong>) studies the effects of <strong>two independent variables</strong> (factors) simultaneously. Each factor has two or more levels, and every combination of levels is represented.
                </p>
                <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <h4 className="font-semibold text-orange-400 mb-2">Factorial Notation</h4>
                  <p className="text-sm text-muted-foreground">
                    A <strong>2 x 3 design</strong> means Factor A has 2 levels and Factor B has 3 levels, producing 2 x 3 = <strong>6 treatment conditions</strong> (cells).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Main Effects and Interactions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Two-factor ANOVA tests <strong>three separate hypotheses</strong>:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <h4 className="font-semibold text-blue-400 mb-2">Main Effect of Factor A</h4>
                    <p className="text-sm text-muted-foreground">Are there mean differences across the levels of Factor A, averaging over Factor B? Tested by F<sub>A</sub> = MS<sub>A</sub> / MS<sub>within</sub>.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <h4 className="font-semibold text-emerald-400 mb-2">Main Effect of Factor B</h4>
                    <p className="text-sm text-muted-foreground">Are there mean differences across the levels of Factor B, averaging over Factor A? Tested by F<sub>B</sub> = MS<sub>B</sub> / MS<sub>within</sub>.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <h4 className="font-semibold text-violet-400 mb-2">A x B Interaction</h4>
                    <p className="text-sm text-muted-foreground">Does the effect of one factor <em>depend on</em> the level of the other factor? Tested by F<sub>AxB</sub> = MS<sub>AxB</sub> / MS<sub>within</sub>.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Understanding Interactions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  An <strong>interaction</strong> exists when the effect of one factor changes depending on the level of the other factor. In a graph of cell means, non-parallel lines suggest an interaction.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold text-foreground mb-2">No Interaction</h4>
                    <p className="text-sm text-muted-foreground">Lines in a graph of means are roughly <strong>parallel</strong>. The effect of Factor A is the same at every level of Factor B.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold text-foreground mb-2">Interaction Present</h4>
                    <p className="text-sm text-muted-foreground">Lines are <strong>not parallel</strong> (they cross or converge). The effect of Factor A depends on which level of Factor B you look at.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">SS Partitioning in Two-Factor ANOVA</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Total variability is divided into <strong>four</strong> components:</p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="font-mono text-foreground">SS<sub>total</sub> = SS<sub>A</sub> + SS<sub>B</sub> + SS<sub>AxB</sub> + SS<sub>within</sub></p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-1">
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">SS<sub>between treatments</sub></strong> = SS<sub>A</sub> + SS<sub>B</sub> + SS<sub>AxB</sub></p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>A</sub></strong> = number of levels of A − 1</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>B</sub></strong> = number of levels of B − 1</p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>AxB</sub></strong> = df<sub>A</sub> x df<sub>B</sub></p>
                  <p className="text-sm text-muted-foreground"><strong className="text-foreground">df<sub>within</sub></strong> = N − (number of cells)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">The Three F-Ratios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">Each hypothesis gets its own F-ratio, all using MS<sub>within</sub> as the error term:</p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="font-mono text-foreground">F<sub>A</sub> = MS<sub>A</sub> / MS<sub>within</sub></p>
                  <p className="font-mono text-foreground">F<sub>B</sub> = MS<sub>B</sub> / MS<sub>within</sub></p>
                  <p className="font-mono text-primary font-semibold">F<sub>AxB</sub> = MS<sub>AxB</sub> / MS<sub>within</sub></p>
                </div>
                <p className="text-sm text-muted-foreground">Each F is evaluated against its own critical value, determined by its own df and α level. A significant interaction is typically the most interesting finding because it reveals that the factors do not act independently.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Effect Size: η² for Each Effect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  You can compute a separate η² for each of the three effects:
                </p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="font-mono text-foreground">η²<sub>A</sub> = SS<sub>A</sub> / SS<sub>total</sub></p>
                  <p className="font-mono text-foreground">η²<sub>B</sub> = SS<sub>B</sub> / SS<sub>total</sub></p>
                  <p className="font-mono text-foreground">η²<sub>AxB</sub> = SS<sub>AxB</sub> / SS<sub>total</sub></p>
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
          </div>
        )}

        {/* ---- CALCULATOR TAB ---- */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Two-Factor ANOVA Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter each source's SS and df to compute the full two-factor ANOVA summary table.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>A</sub> (Factor A)</label>
                    <input type="number" value={calcSSA} onChange={e => setCalcSSA(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 20" data-testid="ch13-calc-ssa" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">df<sub>A</sub></label>
                    <input type="number" value={calcDFA} onChange={e => setCalcDFA(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 1" data-testid="ch13-calc-dfa" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>B</sub> (Factor B)</label>
                    <input type="number" value={calcSSB} onChange={e => setCalcSSB(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 32" data-testid="ch13-calc-ssb" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">df<sub>B</sub></label>
                    <input type="number" value={calcDFB} onChange={e => setCalcDFB(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 2" data-testid="ch13-calc-dfb" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>AxB</sub> (Interaction)</label>
                    <input type="number" value={calcSSAB} onChange={e => setCalcSSAB(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 40" data-testid="ch13-calc-ssab" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">df<sub>AxB</sub></label>
                    <input type="number" value={calcDFAB} onChange={e => setCalcDFAB(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 2" data-testid="ch13-calc-dfab" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>within</sub> (Error)</label>
                    <input type="number" value={calcSSW} onChange={e => setCalcSSW(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 60" data-testid="ch13-calc-ssw" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">df<sub>within</sub></label>
                    <input type="number" value={calcDFW} onChange={e => setCalcDFW(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 24" data-testid="ch13-calc-dfw" />
                  </div>
                </div>

                <Button onClick={handleCalculate} className="w-full" size="lg" data-testid="ch13-calc-btn">
                  Compute Two-Factor ANOVA
                </Button>

                {calcResult && (
                  <div className="space-y-4 p-4 rounded-lg bg-muted/50 border-2 border-primary/10" data-testid="ch13-calc-result">
                    <h4 className="font-semibold text-foreground">Two-Factor ANOVA Summary Table</h4>
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
                            <td className="p-2">Factor A</td>
                            <td className="p-2 text-center">{parseFloat(calcSSA).toFixed(2)}</td>
                            <td className="p-2 text-center">{calcDFA}</td>
                            <td className="p-2 text-center">{calcResult.msA.toFixed(2)}</td>
                            <td className="p-2 text-center font-bold text-blue-400">{calcResult.fA.toFixed(2)}</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-2">Factor B</td>
                            <td className="p-2 text-center">{parseFloat(calcSSB).toFixed(2)}</td>
                            <td className="p-2 text-center">{calcDFB}</td>
                            <td className="p-2 text-center">{calcResult.msB.toFixed(2)}</td>
                            <td className="p-2 text-center font-bold text-emerald-400">{calcResult.fB.toFixed(2)}</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-2">A x B</td>
                            <td className="p-2 text-center">{parseFloat(calcSSAB).toFixed(2)}</td>
                            <td className="p-2 text-center">{calcDFAB}</td>
                            <td className="p-2 text-center">{calcResult.msAB.toFixed(2)}</td>
                            <td className="p-2 text-center font-bold text-violet-400">{calcResult.fAB.toFixed(2)}</td>
                          </tr>
                          <tr className="border-b border-border/50">
                            <td className="p-2">Within</td>
                            <td className="p-2 text-center">{parseFloat(calcSSW).toFixed(2)}</td>
                            <td className="p-2 text-center">{calcDFW}</td>
                            <td className="p-2 text-center">{calcResult.msW.toFixed(2)}</td>
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
                      <p className="text-muted-foreground">η²<sub>A</sub> = <strong className="text-blue-400">{calcResult.eta2A.toFixed(4)}</strong> ({(calcResult.eta2A * 100).toFixed(1)}%)</p>
                      <p className="text-muted-foreground">η²<sub>B</sub> = <strong className="text-emerald-400">{calcResult.eta2B.toFixed(4)}</strong> ({(calcResult.eta2B * 100).toFixed(1)}%)</p>
                      <p className="text-muted-foreground">η²<sub>AxB</sub> = <strong className="text-violet-400">{calcResult.eta2AB.toFixed(4)}</strong> ({(calcResult.eta2AB * 100).toFixed(1)}%)</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter13TwoFactorANOVA;
