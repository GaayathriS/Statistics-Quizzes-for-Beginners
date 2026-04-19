import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, Calculator, Play } from 'lucide-react';

export const Chapter14CorrelationRegression = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');
  const [sp, setSp] = useState('');
  const [ssx, setSsx] = useState('');
  const [ssy, setSsy] = useState('');
  const [meanX, setMeanX] = useState('');
  const [meanY, setMeanY] = useState('');
  const [predictX, setPredictX] = useState('');
  const [calcResult, setCalcResult] = useState(null);

  const tabs = [
    { id: 'concepts', label: 'Key Concepts', icon: BookOpen },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
  ];

  const handleCalculate = () => {
    const spVal = parseFloat(sp);
    const ssxVal = parseFloat(ssx);
    const ssyVal = parseFloat(ssy);
    const mxVal = parseFloat(meanX);
    const myVal = parseFloat(meanY);
    if ([spVal, ssxVal, ssyVal, mxVal, myVal].some(isNaN) || ssxVal === 0 || ssyVal === 0) return;

    const r = spVal / Math.sqrt(ssxVal * ssyVal);
    const r2 = r * r;
    const b = spVal / ssxVal;
    const a = myVal - b * mxVal;
    const xPred = parseFloat(predictX);
    const yHat = !isNaN(xPred) ? b * xPred + a : null;

    setCalcResult({ r, r2, b, a, yHat, xPred: !isNaN(xPred) ? xPred : null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} data-testid="ch14-back-btn">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <Badge variant="secondary" className="mb-1">Chapter 14</Badge>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Correlation and Regression</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-border pb-2 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              data-testid={`ch14-tab-${tab.id}`}
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
            data-testid="ch14-tab-quiz"
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
                <CardTitle className="text-xl">What Is Correlation?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Correlation measures the <strong>strength and direction</strong> of the linear relationship between two variables (X and Y). It answers the question: as one variable changes, does the other variable tend to change in a consistent, predictable way?
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <p className="font-semibold text-emerald-400">Positive (+)</p>
                    <p className="text-xs text-muted-foreground mt-1">X increases, Y increases</p>
                    <p className="text-xs text-muted-foreground">e.g., study time & exam score</p>
                  </div>
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-center">
                    <p className="font-semibold text-rose-400">Negative (−)</p>
                    <p className="text-xs text-muted-foreground mt-1">X increases, Y decreases</p>
                    <p className="text-xs text-muted-foreground">e.g., absences & grades</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 text-center">
                    <p className="font-semibold text-foreground">Zero (0)</p>
                    <p className="text-xs text-muted-foreground mt-1">No linear pattern</p>
                    <p className="text-xs text-muted-foreground">X and Y are unrelated</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Pearson Correlation Coefficient (r)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Pearson r</strong> quantifies the linear relationship on a scale from <strong>−1 to +1</strong>:
                </p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-2">
                  <p className="text-lg font-mono font-semibold text-primary">r = SP / √(SS<sub>X</sub> · SS<sub>Y</sub>)</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-1 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">SP</strong> = Sum of Products of deviations = Σ(X − M<sub>X</sub>)(Y − M<sub>Y</sub>)</p>
                  <p><strong className="text-foreground">SS<sub>X</sub></strong> = Σ(X − M<sub>X</sub>)²</p>
                  <p><strong className="text-foreground">SS<sub>Y</sub></strong> = Σ(Y − M<sub>Y</sub>)²</p>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <p className="font-semibold text-emerald-400">Strong</p>
                    <p className="text-muted-foreground">|r| &gt; .50</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="font-semibold text-amber-400">Moderate</p>
                    <p className="text-muted-foreground">|r| = .30 – .50</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <p className="font-semibold text-foreground">Weak</p>
                    <p className="text-muted-foreground">|r| &lt; .30</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Coefficient of Determination (r²)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>r²</strong> tells you the proportion of variance in Y that is predicted or accounted for by its relationship with X.
                </p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="text-lg font-mono font-semibold text-primary">r² = (r)²</p>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h4 className="font-semibold text-blue-400 mb-2">Example</h4>
                  <p className="text-sm text-muted-foreground">
                    If r = .70, then r² = .49. This means 49% of the variance in Y is accounted for by its linear relationship with X. The remaining 51% is unexplained.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Linear Regression</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Regression uses the correlation to make <strong>predictions</strong>. The linear regression equation defines the best-fitting straight line through the data:
                </p>
                <div className="p-4 rounded-lg bg-muted text-center space-y-3">
                  <p className="text-lg font-mono font-semibold text-primary">Ŷ = bX + a</p>
                </div>
                <div className="p-3 rounded-lg bg-muted/50 space-y-2 text-sm text-muted-foreground">
                  <p><strong className="text-foreground">Ŷ</strong> = predicted value of Y</p>
                  <p><strong className="text-foreground">b (slope)</strong> = SP / SS<sub>X</sub> &nbsp; — how much Ŷ changes for each 1-unit increase in X</p>
                  <p><strong className="text-foreground">a (Y-intercept)</strong> = M<sub>Y</sub> − b · M<sub>X</sub> &nbsp; — the predicted Y when X = 0</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Standard Error of Estimate</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>standard error of estimate</strong> measures the average distance between the actual Y values and the predicted Ŷ values. It quantifies the typical prediction error of the regression line.
                </p>
                <div className="p-4 rounded-lg bg-muted text-center">
                  <p className="font-mono text-foreground">Smaller error → better predictions</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">Important Cautions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid gap-3">
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <p className="text-sm font-semibold text-rose-400">Correlation ≠ Causation</p>
                    <p className="text-xs text-muted-foreground mt-1">A correlation between X and Y does not mean X causes Y. A third variable could be responsible, or the direction could be reversed.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <p className="text-sm font-semibold text-amber-400">Restricted Range</p>
                    <p className="text-xs text-muted-foreground mt-1">If the range of X or Y is limited (restricted), the correlation may underestimate the true relationship.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400">Outliers</p>
                    <p className="text-xs text-muted-foreground mt-1">Extreme scores can dramatically change the value of r, making the correlation appear stronger or weaker than it truly is.</p>
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
                <CardTitle className="text-xl">Correlation & Regression Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Enter the summary statistics to compute Pearson r, r², and the regression equation.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SP (Sum of Products)</label>
                    <input type="number" value={sp} onChange={e => setSp(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 48" data-testid="ch14-calc-sp" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>X</sub></label>
                    <input type="number" value={ssx} onChange={e => setSsx(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 32" data-testid="ch14-calc-ssx" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">SS<sub>Y</sub></label>
                    <input type="number" value={ssy} onChange={e => setSsy(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 72" data-testid="ch14-calc-ssy" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">M<sub>X</sub> (Mean of X)</label>
                    <input type="number" value={meanX} onChange={e => setMeanX(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 4" data-testid="ch14-calc-mx" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">M<sub>Y</sub> (Mean of Y)</label>
                    <input type="number" value={meanY} onChange={e => setMeanY(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 6" data-testid="ch14-calc-my" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">Predict Ŷ for X = (optional)</label>
                    <input type="number" value={predictX} onChange={e => setPredictX(e.target.value)}
                      className="w-full p-2 rounded-lg border-2 border-border bg-background text-foreground text-sm" placeholder="e.g. 5" data-testid="ch14-calc-predict" />
                  </div>
                </div>

                <Button onClick={handleCalculate} className="w-full" size="lg" data-testid="ch14-calc-btn">
                  Compute
                </Button>

                {calcResult && (
                  <div className="space-y-4 p-4 rounded-lg bg-muted/50 border-2 border-primary/10" data-testid="ch14-calc-result">
                    <h4 className="font-semibold text-foreground">Results</h4>
                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="p-3 rounded-lg bg-muted/70">
                        <p className="text-muted-foreground">Pearson r</p>
                        <p className="text-xl font-bold text-primary">{calcResult.r.toFixed(4)}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-muted/70">
                        <p className="text-muted-foreground">r² (Coefficient of Determination)</p>
                        <p className="text-xl font-bold text-primary">{calcResult.r2.toFixed(4)} <span className="text-sm font-normal text-muted-foreground">({(calcResult.r2 * 100).toFixed(1)}%)</span></p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-muted/70 text-sm">
                      <p className="text-muted-foreground mb-1">Regression Equation</p>
                      <p className="text-lg font-mono font-semibold text-foreground">Ŷ = {calcResult.b.toFixed(4)}X + {calcResult.a.toFixed(4)}</p>
                      <p className="text-xs text-muted-foreground mt-1">Slope (b) = {calcResult.b.toFixed(4)} &nbsp;|&nbsp; Y-intercept (a) = {calcResult.a.toFixed(4)}</p>
                    </div>
                    {calcResult.yHat !== null && (
                      <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm">
                        <p className="text-muted-foreground">Prediction</p>
                        <p className="text-foreground">For X = {calcResult.xPred}, <strong className="text-primary">Ŷ = {calcResult.yHat.toFixed(4)}</strong></p>
                      </div>
                    )}
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

export default Chapter14CorrelationRegression;
