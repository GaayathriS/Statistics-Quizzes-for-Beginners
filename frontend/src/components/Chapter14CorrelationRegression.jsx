import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowLeft, BookOpen, Calculator, Play, FlaskConical, ChevronDown, ChevronUp } from 'lucide-react';

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
    { id: 'nht', label: 'NHT Example', icon: FlaskConical },
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

        {/* ---- NHT EXAMPLE TAB ---- */}
        {activeTab === 'nht' && (
          <div className="space-y-4 fade-in">
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="text-xl">NHT for Pearson Correlation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  A clinical researcher wants to know whether there is a significant linear relationship between <strong>depression</strong> (measured by PHQ-9 scores) and <strong>fear</strong> (measured by FERT scores) in a sample of <strong>n = 25</strong> therapy patients.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <p className="font-semibold text-blue-400 text-sm">PHQ-9 (X)</p>
                    <p className="text-xs text-muted-foreground mt-1">Patient Health Questionnaire — measures depression severity on a 0–27 scale. Higher scores = more depressed.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <p className="font-semibold text-rose-400 text-sm">FERT (Y)</p>
                    <p className="text-xs text-muted-foreground mt-1">Facial Emotion Recognition Task — measures fear recognition accuracy. Higher scores = greater fear response.</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">After collecting data from all 25 participants, the researcher computes the Pearson correlation and obtains <strong className="text-foreground">r = .52</strong>.</p>
              </CardContent>
            </Card>

            <NHTStep step="1" title="State the Hypotheses" color="border-blue-500/30 bg-blue-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p><strong className="text-foreground">H₀: ρ = 0</strong> &nbsp; There is no linear relationship between PHQ-9 depression scores and FERT fear scores in the population.</p>
                  <p><strong className="text-foreground">H₁: ρ ≠ 0</strong> &nbsp; There is a significant linear relationship between PHQ-9 and FERT scores in the population.</p>
                </div>
                <p>Notice that the null hypothesis uses <strong>ρ (rho)</strong>, the <em>population</em> correlation — not r, which is the sample statistic. This is a <strong>two-tailed</strong> test because the researcher has no directional prediction.</p>
              </div>
            </NHTStep>

            <NHTStep step="2" title="Set Alpha & Locate the Critical Region" color="border-emerald-500/30 bg-emerald-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p><strong className="text-foreground">α = .05</strong></p>
                  <p><strong className="text-foreground">df = n − 2 = 25 − 2 = 23</strong></p>
                </div>
                <p>For a Pearson correlation, degrees of freedom are <strong>n − 2</strong>. Using the critical values table for r with df = 23 and α = .05 (two-tailed):</p>
                <div className="p-3 rounded bg-muted/50 text-center">
                  <p className="text-lg font-mono font-semibold text-foreground">Critical r = ± .396</p>
                </div>
                <p>We reject H₀ if the obtained r falls beyond ± .396 (i.e., if |r| &gt; .396).</p>
              </div>
            </NHTStep>

            <NHTStep step="3" title="Compute the Test Statistic (r)" color="border-amber-500/30 bg-amber-500/5">
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>The test statistic for a Pearson correlation is <strong>r itself</strong>. Unlike t-tests or ANOVA, we compare our obtained r directly against the critical value from the r table.</p>
                <div className="p-3 rounded bg-muted/50 font-mono text-center space-y-1">
                  <p className="text-muted-foreground">r = SP / √(SS<sub>X</sub> · SS<sub>Y</sub>)</p>
                </div>
                <p>The researcher computed the Pearson correlation from the PHQ-9 and FERT data:</p>
                <div className="p-3 rounded bg-muted/50 text-center">
                  <p className="text-xl font-mono font-semibold text-primary">r = .52</p>
                </div>
                <div className="p-3 rounded bg-blue-500/10 border border-blue-500/20 space-y-1">
                  <p className="font-semibold text-blue-400">Interpreting the obtained r</p>
                  <p className="text-muted-foreground"><strong>Direction:</strong> Positive (+.52) — higher depression scores are associated with higher fear scores.</p>
                  <p className="text-muted-foreground"><strong>Strength:</strong> |.52| &gt; .50 → Strong relationship.</p>
                </div>
              </div>
            </NHTStep>

            <NHTStep step="4" title="Make a Decision" color="border-violet-500/30 bg-violet-500/5">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="p-3 rounded bg-muted/50 space-y-1 font-mono text-center">
                  <p>Obtained r = <strong className="text-primary">.52</strong></p>
                  <p>Critical r = ± <strong className="text-foreground">.396</strong></p>
                  <p className="text-foreground">|.52| = .52 &gt; .396</p>
                </div>
                <div className="p-3 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <p className="font-semibold text-emerald-400">REJECT H₀</p>
                  <p className="mt-1">The obtained r = .52 exceeds the critical boundary of ± .396.</p>
                </div>
                <p><strong className="text-foreground">Conclusion:</strong> There is a statistically significant positive correlation between PHQ-9 depression scores and FERT fear scores, r(23) = .52, p &lt; .05.</p>
                <div className="p-3 rounded bg-muted/50 space-y-1">
                  <p className="font-semibold text-foreground">Effect size:</p>
                  <p className="font-mono text-foreground">r² = (.52)² = <strong>.2704</strong></p>
                  <p>Approximately <strong>27%</strong> of the variance in fear scores (FERT) is accounted for by its relationship with depression scores (PHQ-9).</p>
                </div>
              </div>
            </NHTStep>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-4 space-y-3">
                <h4 className="font-semibold text-foreground">Key Takeaways for Correlation NHT</h4>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="p-3 rounded-lg bg-muted/50 flex items-start gap-2">
                    <span className="text-primary font-bold">1</span>
                    <p>The null hypothesis is always <strong>H₀: ρ = 0</strong> — use the population symbol ρ (rho), not the sample r.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 flex items-start gap-2">
                    <span className="text-primary font-bold">2</span>
                    <p>Degrees of freedom for Pearson r are <strong>df = n − 2</strong>.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 flex items-start gap-2">
                    <span className="text-primary font-bold">3</span>
                    <p>The test statistic is <strong>r itself</strong> — you compare it directly to the critical r value from the table.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 flex items-start gap-2">
                    <span className="text-primary font-bold">4</span>
                    <p>A significant correlation does <strong>not</strong> mean causation — depression may not <em>cause</em> fear (or vice versa). A third variable could explain both.</p>
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
