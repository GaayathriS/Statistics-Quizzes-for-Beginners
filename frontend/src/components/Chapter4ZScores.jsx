import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Brain, Calculator, Table2, TrendingUp, Target, Check, 
  ChevronLeft, BookOpen, ArrowLeft
} from 'lucide-react';

// Z-Score Analogies Data
const zScoreAnalogies = [
  {
    title: "The Basketball Team Analogy",
    icon: "🏀",
    content: "Imagine you're on a basketball team where the average height is 6'0\" (mean = 72 inches) with players typically varying by about 3 inches (SD = 3). If you're 6'6\" (78 inches), your z-score is +2.0 — meaning you're 2 standard deviations ABOVE average.",
    formula: "z = (78 - 72) / 3 = +2.0"
  },
  {
    title: "The Test Score Story",
    icon: "📝",
    content: "Your class takes an exam. The average is 75 (mean) and most scores fall within 10 points of that (SD = 10). You scored 85. Your z-score? +1.0! You're exactly one standard deviation above the class average.",
    formula: "z = (85 - 75) / 10 = +1.0"
  },
  {
    title: "The 'How Unusual Am I?' Meter",
    icon: "📊",
    content: "Think of z-scores as your 'unusualness meter.' A z-score of 0 means you're perfectly average. ±1 means you're in the typical range (68% of people). ±2 means you're getting unusual (only 5% are this far out). ±3? You're rare!",
    formula: "z = 0 → Average | z = ±1 → Typical | z = ±2 → Unusual"
  }
];

const keyConceptCards = [
  {
    title: "What IS a Z-Score?",
    content: "A z-score tells you exactly WHERE a score sits in a distribution. It answers: 'How many standard deviations away from the mean is this score?'",
    highlight: "Z-score = (X - μ) / σ"
  },
  {
    title: "The Sign Matters!",
    content: "POSITIVE z-score (+) → Score is ABOVE the mean\nNEGATIVE z-score (-) → Score is BELOW the mean\nZERO z-score (0) → Score IS the mean",
    highlight: "+ Above | - Below | 0 = Mean"
  },
  {
    title: "The Number Matters Too!",
    content: "The numerical value tells you the DISTANCE from the mean, measured in standard deviations. z = 1.5 means 1.5 standard deviations away.",
    highlight: "Bigger number = Further from average"
  },
  {
    title: "Standardization Magic",
    content: "Z-score transformation converts ANY distribution to a standard scale with mean = 0 and SD = 1. This lets you compare apples to oranges!",
    highlight: "After transformation: μ = 0, σ = 1"
  }
];

// Bell Curve Component
const BellCurve = ({ highlightZ = 0, showAreas = false }) => {
  const points = [];
  for (let x = -4; x <= 4; x += 0.1) {
    const y = Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
    points.push({ x, y });
  }

  const width = 400;
  const height = 200;
  const padding = 40;

  const scaleX = (x) => ((x + 4) / 8) * (width - 2 * padding) + padding;
  const scaleY = (y) => height - padding - (y / 0.4) * (height - 2 * padding);

  const pathD = points.map((p, i) => 
    `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`
  ).join(' ');

  const highlightX = scaleX(highlightZ);
  const highlightY = scaleY(Math.exp(-0.5 * highlightZ * highlightZ) / Math.sqrt(2 * Math.PI));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-md mx-auto">
      {[-3, -2, -1, 0, 1, 2, 3].map(z => (
        <g key={z}>
          <line 
            x1={scaleX(z)} y1={height - padding} 
            x2={scaleX(z)} y2={padding} 
            stroke="hsl(var(--muted))" strokeWidth="1" strokeDasharray="4"
          />
          <text x={scaleX(z)} y={height - 10} textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="12">
            {z}
          </text>
        </g>
      ))}
      
      {showAreas && (
        <>
          <path 
            d={`M ${scaleX(-1)} ${scaleY(0)} ${points.filter(p => p.x >= -1 && p.x <= 1).map((p, i) => 
              `${i === 0 ? 'L' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`
            ).join(' ')} L ${scaleX(1)} ${scaleY(0)} Z`}
            fill="hsl(var(--success))" fillOpacity="0.3"
          />
          <text x={scaleX(0)} y={scaleY(0.15)} textAnchor="middle" fill="hsl(var(--success))" fontSize="11" fontWeight="bold">
            68%
          </text>
        </>
      )}

      <path d={pathD} fill="none" stroke="hsl(var(--primary))" strokeWidth="3"/>
      <line x1={scaleX(0)} y1={height - padding} x2={scaleX(0)} y2={padding} stroke="hsl(var(--accent))" strokeWidth="2"/>
      
      {highlightZ !== 0 && (
        <>
          <line x1={highlightX} y1={height - padding} x2={highlightX} y2={highlightY} stroke="hsl(var(--destructive))" strokeWidth="2" strokeDasharray="4"/>
          <circle cx={highlightX} cy={highlightY} r="6" fill="hsl(var(--destructive))"/>
          <text x={highlightX} y={highlightY - 15} textAnchor="middle" fill="hsl(var(--destructive))" fontSize="12" fontWeight="bold">
            z = {highlightZ.toFixed(1)}
          </text>
        </>
      )}

      <text x={scaleX(0)} y={height - padding + 25} textAnchor="middle" fill="hsl(var(--accent))" fontSize="11">
        μ (mean)
      </text>
    </svg>
  );
};

// Z-Score Calculator Component
const ZScoreCalculator = () => {
  const [x, setX] = useState('');
  const [mean, setMean] = useState('');
  const [sd, setSd] = useState('');
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState('toZ');

  const calculate = () => {
    if (mode === 'toZ') {
      const z = (parseFloat(x) - parseFloat(mean)) / parseFloat(sd);
      if (!isNaN(z)) {
        setResult({
          value: z,
          steps: [
            `Step 1: Identify values`,
            `   X = ${x}, μ = ${mean}, σ = ${sd}`,
            `Step 2: Apply formula z = (X - μ) / σ`,
            `   z = (${x} - ${mean}) / ${sd}`,
            `   z = ${parseFloat(x) - parseFloat(mean)} / ${sd}`,
            `   z = ${z.toFixed(4)}`,
            `Step 3: Interpret`,
            `   This score is ${Math.abs(z).toFixed(2)} SD ${z >= 0 ? 'ABOVE' : 'BELOW'} the mean`
          ]
        });
      }
    } else {
      const xVal = parseFloat(mean) + (parseFloat(x) * parseFloat(sd));
      if (!isNaN(xVal)) {
        setResult({
          value: xVal,
          steps: [
            `Step 1: Identify values`,
            `   z = ${x}, μ = ${mean}, σ = ${sd}`,
            `Step 2: Apply formula X = μ + (z × σ)`,
            `   X = ${mean} + (${x} × ${sd})`,
            `   X = ${mean} + ${parseFloat(x) * parseFloat(sd)}`,
            `   X = ${xVal.toFixed(4)}`,
            `Step 3: Interpret`,
            `   A z-score of ${x} corresponds to raw score ${xVal.toFixed(2)}`
          ]
        });
      }
    }
  };

  return (
    <Card className="border-2 border-primary/20">
      <CardContent className="pt-6 space-y-6">
        <div className="flex gap-2">
          <Button
            onClick={() => { setMode('toZ'); setResult(null); }}
            variant={mode === 'toZ' ? 'default' : 'outline'}
            className="flex-1"
          >
            Raw Score → Z-Score
          </Button>
          <Button
            onClick={() => { setMode('toX'); setResult(null); }}
            variant={mode === 'toX' ? 'default' : 'outline'}
            className="flex-1"
          >
            Z-Score → Raw Score
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-muted-foreground mb-1">
              {mode === 'toZ' ? 'X (Raw Score)' : 'z (Z-Score)'}
            </label>
            <input
              type="number"
              value={x}
              onChange={(e) => setX(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
              placeholder={mode === 'toZ' ? '85' : '1.5'}
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">μ (Mean)</label>
            <input
              type="number"
              value={mean}
              onChange={(e) => setMean(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
              placeholder="75"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-1">σ (Std Dev)</label>
            <input
              type="number"
              value={sd}
              onChange={(e) => setSd(e.target.value)}
              className="w-full bg-background border border-input rounded-lg px-3 py-2 focus:border-primary focus:outline-none"
              placeholder="10"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full btn-glow">
          Calculate
        </Button>

        {result && (
          <div className="bg-muted/50 rounded-lg p-4 space-y-4">
            <div className="text-center">
              <span className="text-muted-foreground">{mode === 'toZ' ? 'Z-Score' : 'Raw Score'} = </span>
              <span className="text-3xl font-bold text-success">{result.value.toFixed(4)}</span>
            </div>
            <div className="border-t border-border pt-4">
              <h4 className="text-sm font-semibold text-muted-foreground mb-2">Step-by-Step:</h4>
              <div className="font-mono text-sm space-y-1">
                {result.steps.map((step, i) => (
                  <div key={i} className={step.startsWith('Step') ? 'text-primary mt-2 font-semibold' : 'ml-2 text-foreground'}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
            {mode === 'toZ' && (
              <div className="mt-4">
                <BellCurve highlightZ={result.value} />
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Common Z-Scores Table
const commonZScores = [
  { z: "0.00", body: ".5000", tail: ".5000", meaning: "Exactly at the mean (50/50 split)" },
  { z: "1.00", body: ".8413", tail: ".1587", meaning: "84% below, 16% above" },
  { z: "1.96", body: ".9750", tail: ".0250", meaning: "Critical value for 95% CI" },
  { z: "2.00", body: ".9772", tail: ".0228", meaning: "~95% of scores are between ±2" },
  { z: "2.58", body: ".9951", tail: ".0049", meaning: "Critical value for 99% CI" },
  { z: "3.00", body: ".9987", tail: ".0013", meaning: "Only 0.13% are more extreme" },
];

// Tabs for Chapter 4
const Chapter4Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'concepts', label: 'Concepts', icon: Brain },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'table', label: 'Normal Table', icon: Table2 },
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
    </div>
  );
};

// Main Chapter 4 Component
export const Chapter4ZScores = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('concepts');
  const [activeAnalogy, setActiveAnalogy] = useState(0);

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
          <Badge className="mb-4 bg-cyan-600/20 text-cyan-400 border-cyan-500/30">
            Chapter 4
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Z-Scores
          </h1>
          <p className="text-muted-foreground mt-2">
            Master the concept that bridges descriptive and inferential statistics
          </p>
        </div>

        <Chapter4Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Concepts Tab */}
        {activeTab === 'concepts' && (
          <div className="space-y-6 fade-in">
            {/* Bell Curve */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  The Normal Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <BellCurve showAreas={true} />
                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-success font-bold">68%</div>
                    <div className="text-muted-foreground">within ±1 SD</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-accent font-bold">95%</div>
                    <div className="text-muted-foreground">within ±2 SD</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3">
                    <div className="text-destructive font-bold">99.7%</div>
                    <div className="text-muted-foreground">within ±3 SD</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Concepts */}
            <div className="grid md:grid-cols-2 gap-4">
              {keyConceptCards.map((card, index) => (
                <Card key={index} className="border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line mb-4">{card.content}</p>
                    <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 font-mono text-sm text-primary">
                      {card.highlight}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Analogies */}
            <Card className="border-2 border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-success" />
                  Real-World Analogies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 rounded-xl p-6">
                  <div className="text-4xl mb-4">{zScoreAnalogies[activeAnalogy].icon}</div>
                  <h3 className="text-xl font-bold mb-3">{zScoreAnalogies[activeAnalogy].title}</h3>
                  <p className="text-muted-foreground mb-4">{zScoreAnalogies[activeAnalogy].content}</p>
                  <div className="bg-success/10 border border-success/20 rounded-lg px-4 py-2 font-mono text-sm text-success">
                    {zScoreAnalogies[activeAnalogy].formula}
                  </div>
                </div>
                <div className="flex justify-center gap-2 mt-4">
                  {zScoreAnalogies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveAnalogy(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeAnalogy ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Formula Summary */}
            <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>The Z-Score Formula</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-around gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">z = (X - μ) / σ</div>
                    <div className="text-muted-foreground">Population Z-Score</div>
                  </div>
                  <div className="text-muted-foreground text-2xl">or</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">z = (X - M) / s</div>
                    <div className="text-muted-foreground">Sample Z-Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6 fade-in">
            <ZScoreCalculator />
            
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Practice These!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { q: "μ = 100, σ = 15, X = 130. Find z.", a: "z = +2.00" },
                  { q: "μ = 50, σ = 8, X = 42. Find z.", a: "z = -1.00" },
                  { q: "μ = 75, σ = 10, z = +1.5. Find X.", a: "X = 90" },
                ].map((prob, i) => (
                  <div key={i} className="bg-muted/50 rounded-lg p-4 flex justify-between items-center">
                    <span className="text-foreground">{prob.q}</span>
                    <Badge variant="outline" className="text-success border-success/30 bg-success/10">
                      {prob.a}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Normal Table Tab */}
        {activeTab === 'table' && (
          <div className="space-y-6 fade-in">
            {/* How to Read the Table */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>How to Read Table B.1</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-primary font-bold mb-2">Column A: Z</div>
                    <p className="text-sm text-muted-foreground">The z-score value you're looking up</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-success font-bold mb-2">Column B: Body</div>
                    <p className="text-sm text-muted-foreground">Proportion from mean to z (larger portion)</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-destructive font-bold mb-2">Column C: Tail</div>
                    <p className="text-sm text-muted-foreground">Proportion beyond z (smaller portion)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Worked Examples */}
            <Card className="border-2 border-success/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-success" />
                  Worked Example: Positive Z-Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Question:</p>
                  <p className="text-muted-foreground">On an IQ test with μ = 100 and σ = 15, what proportion of people score <strong className="text-success">below 115</strong>?</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">1</Badge>
                    <div>
                      <p className="text-sm text-muted-foreground">Convert to z-score:</p>
                      <p className="font-mono text-primary">z = (115 - 100) / 15 = <strong>+1.00</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">2</Badge>
                    <div>
                      <p className="text-sm text-muted-foreground">Look up z = 1.00 in Table B.1:</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="bg-primary/10">Column A: z = 1.00</Badge>
                        <Badge variant="outline" className="bg-success/10 text-success">Column B: .8413</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">3</Badge>
                    <div>
                      <p className="text-success font-semibold">Answer: .8413 or 84.13% score below 115</p>
                    </div>
                  </div>
                </div>
                <div className="bg-success/10 border-l-4 border-success p-3 rounded">
                  <p className="text-sm"><strong>Key insight:</strong> For positive z-scores, "below" = use Column B (Body)</p>
                </div>
              </CardContent>
            </Card>

            {/* Negative Z-Score Example */}
            <Card className="border-2 border-destructive/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-destructive" />
                  Worked Example: Negative Z-Score
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-medium mb-2">Question:</p>
                  <p className="text-muted-foreground">On the same IQ test, what proportion score <strong className="text-destructive">below 85</strong>?</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">1</Badge>
                    <div>
                      <p className="text-sm text-muted-foreground">Convert to z-score:</p>
                      <p className="font-mono text-primary">z = (85 - 100) / 15 = <strong>-1.00</strong></p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">2</Badge>
                    <div>
                      <p className="text-sm text-muted-foreground">Table only has positive z's! Use symmetry:</p>
                      <p className="text-accent mt-1">Look up z = 1.00, use Column C (Tail): .1587</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-0.5">3</Badge>
                    <div>
                      <p className="text-destructive font-semibold">Answer: .1587 or 15.87% score below 85</p>
                    </div>
                  </div>
                </div>
                <div className="bg-destructive/10 border-l-4 border-destructive p-3 rounded">
                  <p className="text-sm"><strong>Key insight:</strong> For negative z-scores, "below" = use Column C (Tail)!</p>
                </div>
              </CardContent>
            </Card>

            {/* Common Z-Scores Table */}
            <Card className="border-2 border-primary/10">
              <CardHeader>
                <CardTitle>Common Z-Scores to Know</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 text-primary">Z-Score</th>
                      <th className="py-3 px-4 text-success">Body (B)</th>
                      <th className="py-3 px-4 text-destructive">Tail (C)</th>
                      <th className="py-3 px-4 text-muted-foreground">Meaning</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonZScores.map((row, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="py-3 px-4 font-mono">{row.z}</td>
                        <td className="py-3 px-4 font-mono text-success">{row.body}</td>
                        <td className="py-3 px-4 font-mono text-destructive">{row.tail}</td>
                        <td className="py-3 px-4 text-sm text-muted-foreground">{row.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle>Quick Reference: Which Column?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-success/10 rounded-lg p-4">
                    <p className="text-success font-semibold mb-2">For POSITIVE z-scores (+)</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• "Below" → <strong className="text-success">Column B (Body)</strong></li>
                      <li>• "Above" → <strong className="text-destructive">Column C (Tail)</strong></li>
                    </ul>
                  </div>
                  <div className="bg-destructive/10 rounded-lg p-4">
                    <p className="text-destructive font-semibold mb-2">For NEGATIVE z-scores (-)</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• "Below" → <strong className="text-destructive">Column C (Tail)</strong></li>
                      <li>• "Above" → <strong className="text-success">Column B (Body)</strong></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Exam Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "The table only shows POSITIVE z-scores. For negative z, use symmetry!",
                    "Body + Tail always = 1.0000 (100% of the distribution)",
                    "For 'what % is above z = 1.5?' → Use the TAIL column",
                    "For 'what % is below z = -1.5?' → Same as tail for +1.5 (symmetry!)"
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter4ZScores;
