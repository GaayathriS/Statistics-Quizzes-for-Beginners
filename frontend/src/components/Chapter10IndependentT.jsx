import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Brain, Calculator, TrendingUp, Target, Check, AlertTriangle,
  BookOpen, ArrowLeft, ClipboardList, Users, Scale
} from 'lucide-react';

// Key Concept Cards
const keyConceptCards = [
  {
    title: "What is an Independent-Measures Design?",
    content: "A research design that uses two separate groups of participants. Each group represents a different treatment condition or population. Also called a between-subjects design.",
    highlight: "Two separate groups → Compare their means"
  },
  {
    title: "The Big Question",
    content: "Is the difference between two sample means (M₁ - M₂) large enough to conclude that the populations are truly different, or could it just be sampling error?",
    highlight: "Real difference or just chance?"
  },
  {
    title: "Pooled Variance (s²p)",
    content: "Combines variance estimates from both samples into a single, weighted average. Gives more weight to larger samples for a better population variance estimate.",
    highlight: "s²p = (SS₁ + SS₂) / (df₁ + df₂)"
  },
  {
    title: "The t Statistic Formula",
    content: "Measures how many standard errors the obtained mean difference is from zero (the expected difference under H₀).",
    highlight: "t = (M₁ - M₂) / s(M₁-M₂)"
  }
];

// Levene's Test Decision Guide
const levenesDecisionGuide = [
  {
    scenario: "Levene's p > .05",
    action: "Homogeneity of variance assumed",
    result: "Use standard independent t-test",
    color: "bg-green-500/20 border-green-500/50 text-green-400"
  },
  {
    scenario: "Levene's p ≤ .05",
    action: "Homogeneity of variance violated",
    result: "Use Welch's adjusted t-test",
    color: "bg-red-500/20 border-red-500/50 text-red-400"
  }
];

// Pooled Variance Calculator Component
const PooledVarianceCalculator = () => {
  const [ss1, setSs1] = useState('');
  const [ss2, setSs2] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const SS1 = parseFloat(ss1);
    const SS2 = parseFloat(ss2);
    const N1 = parseFloat(n1);
    const N2 = parseFloat(n2);
    
    if (isNaN(SS1) || isNaN(SS2) || isNaN(N1) || isNaN(N2) || N1 < 2 || N2 < 2) {
      return;
    }

    const df1 = N1 - 1;
    const df2 = N2 - 1;
    const dfTotal = df1 + df2;
    const pooledVar = (SS1 + SS2) / dfTotal;
    const standardError = Math.sqrt((pooledVar / N1) + (pooledVar / N2));

    setResult({
      df1,
      df2,
      dfTotal,
      pooledVar,
      standardError,
      steps: [
        `Step 1: Calculate degrees of freedom`,
        `   df₁ = n₁ - 1 = ${N1} - 1 = ${df1}`,
        `   df₂ = n₂ - 1 = ${N2} - 1 = ${df2}`,
        `   df_total = ${df1} + ${df2} = ${dfTotal}`,
        ``,
        `Step 2: Calculate pooled variance`,
        `   s²p = (SS₁ + SS₂) / (df₁ + df₂)`,
        `   s²p = (${SS1} + ${SS2}) / ${dfTotal}`,
        `   s²p = ${SS1 + SS2} / ${dfTotal}`,
        `   s²p = ${pooledVar.toFixed(4)}`,
        ``,
        `Step 3: Calculate estimated standard error`,
        `   s(M₁-M₂) = √(s²p/n₁ + s²p/n₂)`,
        `   s(M₁-M₂) = √(${pooledVar.toFixed(4)}/${N1} + ${pooledVar.toFixed(4)}/${N2})`,
        `   s(M₁-M₂) = √(${(pooledVar/N1).toFixed(4)} + ${(pooledVar/N2).toFixed(4)})`,
        `   s(M₁-M₂) = ${standardError.toFixed(4)}`
      ]
    });
  };

  const reset = () => {
    setSs1('');
    setSs2('');
    setN1('');
    setN2('');
    setResult(null);
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Pooled Variance Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-center">Group 1</h4>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">SS₁ (Sum of Squares)</label>
              <input
                type="number"
                value={ss1}
                onChange={(e) => setSs1(e.target.value)}
                className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="e.g., 120"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">n₁ (Sample Size)</label>
              <input
                type="number"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
                className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="e.g., 10"
              />
            </div>
          </div>
          
          <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-center">Group 2</h4>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">SS₂ (Sum of Squares)</label>
              <input
                type="number"
                value={ss2}
                onChange={(e) => setSs2(e.target.value)}
                className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="e.g., 80"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">n₂ (Sample Size)</label>
              <input
                type="number"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
                className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
                placeholder="e.g., 12"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={calculate} className="flex-1 btn-glow">
            Calculate
          </Button>
          <Button onClick={reset} variant="outline">
            Reset
          </Button>
        </div>

        {result && (
          <div className="bg-muted/50 rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-background rounded-lg p-3">
                <div className="text-sm text-muted-foreground">Total df</div>
                <div className="text-2xl font-bold text-primary">{result.dfTotal}</div>
              </div>
              <div className="bg-background rounded-lg p-3">
                <div className="text-sm text-muted-foreground">Pooled Variance (s²p)</div>
                <div className="text-2xl font-bold text-success">{result.pooledVar.toFixed(4)}</div>
              </div>
              <div className="bg-background rounded-lg p-3">
                <div className="text-sm text-muted-foreground">Std Error s(M₁-M₂)</div>
                <div className="text-2xl font-bold text-accent">{result.standardError.toFixed(4)}</div>
              </div>
            </div>
            
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Step-by-Step:</h4>
              <div className="font-mono text-sm space-y-1">
                {result.steps.map((step, i) => (
                  <div key={i} className={step.startsWith('Step') ? 'text-primary mt-2 font-semibold' : step === '' ? 'h-2' : 'ml-2 text-foreground'}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Tabs for Chapter 10
const Chapter10Tabs = ({ activeTab, setActiveTab, onStartQuiz }) => {
  const tabs = [
    { id: 'concepts', label: 'Concepts', icon: Brain },
    { id: 'levenes', label: "Levene's Test", icon: Scale },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
  ];

  return (
    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          variant={activeTab === tab.id ? 'default' : 'outline'}
          className="flex items-center gap-2"
          data-testid={`tab-${tab.id}`}
        >
          <tab.icon className="w-4 h-4" />
          {tab.label}
        </Button>
      ))}
      <Button
        onClick={onStartQuiz}
        variant="outline"
        className="flex items-center gap-2 border-green-500/50 hover:bg-green-500/10"
        data-testid="tab-quiz"
      >
        <ClipboardList className="w-4 h-4" />
        Quiz
      </Button>
    </div>
  );
};

// Main Chapter 10 Component
export const Chapter10IndependentT = ({ onBack, onStartQuiz }) => {
  const [activeTab, setActiveTab] = useState('concepts');

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Chapters
          </Button>
        </div>

        <div className="text-center py-4">
          <Badge className="mb-4 bg-pink-600/20 text-pink-400 border-pink-500/30">
            Chapter 10
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            The t Test for Two Independent Samples
          </h1>
          <p className="text-muted-foreground mt-2">
            Compare means from two separate groups
          </p>
        </div>

        <Chapter10Tabs activeTab={activeTab} setActiveTab={setActiveTab} onStartQuiz={onStartQuiz} />

        {/* Concepts Tab */}
        {activeTab === 'concepts' && (
          <div className="space-y-6 fade-in">
            {/* Visual: Two Groups */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Independent-Measures Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-around gap-4 py-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-500/20 rounded-xl flex items-center justify-center mb-2 mx-auto border-2 border-blue-500/50">
                      <span className="text-3xl font-bold text-blue-400">M₁</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Group 1</div>
                    <div className="text-xs text-muted-foreground">(Treatment)</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-muted-foreground">vs</div>
                    <div className="text-sm text-primary mt-2">Compare</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-500/20 rounded-xl flex items-center justify-center mb-2 mx-auto border-2 border-purple-500/50">
                      <span className="text-3xl font-bold text-purple-400">M₂</span>
                    </div>
                    <div className="text-sm text-muted-foreground">Group 2</div>
                    <div className="text-xs text-muted-foreground">(Control)</div>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <p className="text-muted-foreground">
                    <strong>Question:</strong> Is the difference (M₁ - M₂) big enough to be meaningful, or just due to chance?
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Key Concepts Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {keyConceptCards.map((card, index) => (
                <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{card.content}</p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm text-primary">
                      {card.highlight}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hypotheses */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Hypotheses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-muted-foreground mb-2">Null Hypothesis (H₀)</h4>
                    <p className="text-lg font-mono text-center py-2">μ₁ - μ₂ = 0</p>
                    <p className="text-sm text-muted-foreground text-center">No difference between populations</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-muted-foreground mb-2">Alternative Hypothesis (H₁)</h4>
                    <p className="text-lg font-mono text-center py-2">μ₁ - μ₂ ≠ 0</p>
                    <p className="text-sm text-muted-foreground text-center">There is a real difference</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Degrees of Freedom */}
            <Card className="border-2 border-success/20 bg-gradient-to-r from-success/5 to-emerald/5">
              <CardHeader>
                <CardTitle>Degrees of Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="text-3xl font-bold text-success mb-2">df = n₁ + n₂ - 2</div>
                  <p className="text-muted-foreground">or equivalently: df = (n₁ - 1) + (n₂ - 1)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Levene's Test Tab */}
        {activeTab === 'levenes' && (
          <div className="space-y-6 fade-in">
            {/* What is Levene's Test */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  What is Levene's Test?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Levene's test checks the <strong>homogeneity of variance assumption</strong> — whether the two populations have approximately equal variances. This is important because the standard independent t-test assumes equal variances.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Levene's Null Hypothesis</h4>
                    <p className="font-mono text-center text-lg py-2">H₀: σ₁² = σ₂²</p>
                    <p className="text-sm text-muted-foreground text-center">Variances are equal</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Levene's Alternative</h4>
                    <p className="font-mono text-center text-lg py-2">H₁: σ₁² ≠ σ₂²</p>
                    <p className="text-sm text-muted-foreground text-center">Variances are not equal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Guide */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-accent" />
                  How to Interpret Levene's Test
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {levenesDecisionGuide.map((item, index) => (
                  <div key={index} className={`rounded-lg p-4 border-2 ${item.color}`}>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="font-semibold text-lg">{item.scenario}</h4>
                        <p className="text-sm opacity-80">{item.action}</p>
                      </div>
                      <Badge className={item.color}>
                        {item.result}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary">
                  <h4 className="font-semibold mb-2">Remember:</h4>
                  <p className="text-sm text-muted-foreground">
                    For Levene's test, we <strong>want</strong> a non-significant result (p &gt; .05) so we can proceed with the standard t-test. A significant Levene's test means the variances are unequal and we should use Welch's correction.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SPSS Output Guide */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Reading SPSS Output
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  SPSS provides two rows in the independent t-test output:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-3 px-4">Row</th>
                        <th className="py-3 px-4">When to Use</th>
                        <th className="py-3 px-4">Levene's p-value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-3 px-4 font-semibold text-success">Equal variances assumed</td>
                        <td className="py-3 px-4">Standard t-test</td>
                        <td className="py-3 px-4">&gt; .05</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold text-destructive">Equal variances not assumed</td>
                        <td className="py-3 px-4">Welch's t-test</td>
                        <td className="py-3 px-4">≤ .05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Why It Matters */}
            <Card className="border-2 border-success/20">
              <CardHeader>
                <CardTitle>Why Does Homogeneity of Variance Matter?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Unequal variances can bias the t statistic, especially with unequal sample sizes",
                    "The pooled variance estimate assumes both populations have the same variance",
                    "Violations can lead to incorrect p-values and wrong conclusions",
                    "Welch's adjustment corrects the degrees of freedom to account for unequal variances"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 fade-in">
            <PooledVarianceCalculator />

            {/* Practice Problems */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Practice These!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { q: "SS₁ = 120, n₁ = 10, SS₂ = 80, n₂ = 12. Find s²p.", a: "s²p = 10.00" },
                  { q: "SS₁ = 45, n₁ = 6, SS₂ = 55, n₂ = 6. Find df.", a: "df = 10" },
                  { q: "s²p = 16, n₁ = 8, n₂ = 8. Find s(M₁-M₂).", a: "s(M₁-M₂) = 2.00" },
                ].map((prob, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-4 flex justify-between items-center flex-wrap gap-2">
                    <span className="text-foreground">{prob.q}</span>
                    <Badge variant="outline" className="text-success border-success/30 bg-success/10">
                      {prob.a}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Formula Reference */}
            <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Formula Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Pooled Variance</div>
                    <div className="text-xl font-mono text-primary">s²p = (SS₁ + SS₂) / (df₁ + df₂)</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Standard Error</div>
                    <div className="text-xl font-mono text-primary">s(M₁-M₂) = √(s²p/n₁ + s²p/n₂)</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-2">t Statistic</div>
                    <div className="text-xl font-mono text-primary">t = (M₁ - M₂) / s(M₁-M₂)</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Degrees of Freedom</div>
                    <div className="text-xl font-mono text-primary">df = n₁ + n₂ - 2</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter10IndependentT;
