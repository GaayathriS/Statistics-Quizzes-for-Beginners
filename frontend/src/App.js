import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BookOpen, Calculator, Table2, ClipboardList, ChevronRight, ChevronLeft, Check, X, RotateCcw, Target, Brain, TrendingUp } from "lucide-react";

// Z-Score data and content
const zScoreAnalogies = [
  {
    title: "The Basketball Team Analogy",
    icon: "🏀",
    content: "Imagine you're on a basketball team where the average height is 6'0\" (mean = 72 inches) with players typically varying by about 3 inches (SD = 3). If you're 6'6\" (78 inches), your z-score is +2.0 — meaning you're 2 standard deviations ABOVE average. If you're 5'6\" (66 inches), your z-score is -2.0 — you're 2 SDs BELOW average.",
    formula: "z = (78 - 72) / 3 = +2.0"
  },
  {
    title: "The Test Score Story",
    icon: "📝",
    content: "Your class takes an exam. The average is 75 (mean) and most scores fall within 10 points of that (SD = 10). You scored 85. Your z-score? +1.0! You're exactly one standard deviation above the class average. Your friend scored 55? That's z = -2.0, two SDs below.",
    formula: "z = (85 - 75) / 10 = +1.0"
  },
  {
    title: "The 'How Unusual Am I?' Meter",
    icon: "📊",
    content: "Think of z-scores as your 'unusualness meter.' A z-score of 0 means you're perfectly average. ±1 means you're in the typical range (68% of people). ±2 means you're getting unusual (only 5% are this far out). ±3? You're rare — only 0.3% are here!",
    formula: "z = 0 → Average | z = ±1 → Typical | z = ±2 → Unusual | z = ±3 → Rare"
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
    content: "The numerical value tells you the DISTANCE from the mean, measured in standard deviations. z = 1.5 means 1.5 standard deviations away from the mean.",
    highlight: "Bigger number = Further from average"
  },
  {
    title: "Standardization Magic",
    content: "Z-score transformation converts ANY distribution to a standard scale with mean = 0 and SD = 1. This lets you compare apples to oranges — like SAT scores to GPA!",
    highlight: "After transformation: μ = 0, σ = 1"
  }
];

// Exam 1 MCQ Questions based on the study guide
const examQuestions = [
  // Z-Score Questions
  {
    id: 1,
    category: "Z-Scores",
    question: "A z-score of z = -2.00 indicates a location that is ______.",
    options: [
      "2 points below the mean",
      "2 standard deviations below the mean",
      "2 points above the mean",
      "2 standard deviations above the mean"
    ],
    correct: 1,
    explanation: "A negative z-score indicates below the mean, and the number (2) tells us how many standard deviations. So z = -2.00 means 2 standard deviations BELOW the mean."
  },
  {
    id: 2,
    category: "Z-Scores",
    question: "For a population with μ = 80 and σ = 10, what is the z-score for X = 95?",
    options: ["z = +0.50", "z = +1.00", "z = +1.50", "z = +2.00"],
    correct: 2,
    explanation: "z = (X - μ) / σ = (95 - 80) / 10 = 15/10 = +1.50. The score is 15 points above the mean, which equals 1.5 standard deviations."
  },
  {
    id: 3,
    category: "Z-Scores",
    question: "After a z-score transformation, the new distribution always has ______.",
    options: [
      "μ = 0 and σ = 0",
      "μ = 1 and σ = 0",
      "μ = 0 and σ = 1",
      "μ = 1 and σ = 1"
    ],
    correct: 2,
    explanation: "Z-score transformation (standardization) always produces a distribution with mean = 0 and standard deviation = 1. This is why it's called the 'standard' normal distribution."
  },
  {
    id: 4,
    category: "Z-Scores",
    question: "Which z-score corresponds to a score that is above the mean?",
    options: ["z = -1.50", "z = 0", "z = +0.75", "Both z = 0 and z = +0.75"],
    correct: 2,
    explanation: "Positive z-scores indicate scores above the mean. z = +0.75 is above the mean, z = -1.50 is below, and z = 0 IS the mean (not above it)."
  },
  // Normal Distribution Questions
  {
    id: 5,
    category: "Normal Distribution",
    question: "In a normal distribution, approximately what percentage of scores fall within ±1 standard deviation of the mean?",
    options: ["50%", "68%", "95%", "99%"],
    correct: 1,
    explanation: "The 68-95-99.7 rule! About 68% of scores fall within ±1 SD, 95% within ±2 SD, and 99.7% within ±3 SD of the mean."
  },
  {
    id: 6,
    category: "Normal Distribution",
    question: "A symmetrical distribution is one where ______.",
    options: [
      "The mean is greater than the median",
      "The mean is less than the median",
      "The mean, median, and mode are equal",
      "The tail extends to the right"
    ],
    correct: 2,
    explanation: "In a perfectly symmetrical distribution (like the normal distribution), the mean, median, and mode all occur at the same central point."
  },
  {
    id: 7,
    category: "Normal Distribution",
    question: "A distribution with a long tail extending to the right is called ______.",
    options: [
      "Negatively skewed",
      "Positively skewed",
      "Symmetrical",
      "Bimodal"
    ],
    correct: 1,
    explanation: "Positively skewed = tail to the RIGHT (toward positive numbers). Negatively skewed = tail to the LEFT. Remember: the tail points to the name (positive = right)."
  },
  // Central Tendency Questions
  {
    id: 8,
    category: "Central Tendency",
    question: "Which measure of central tendency is most affected by extreme scores (outliers)?",
    options: ["Mean", "Median", "Mode", "All equally affected"],
    correct: 0,
    explanation: "The MEAN uses every score in its calculation, so extreme values pull it toward them. The median (middle score) and mode (most frequent) are resistant to outliers."
  },
  {
    id: 9,
    category: "Central Tendency",
    question: "For the scores 2, 3, 4, 4, 5, 6, the mode is ______.",
    options: ["3", "4", "4.5", "There is no mode"],
    correct: 1,
    explanation: "The mode is the most frequently occurring score. In this dataset, 4 appears twice while all other values appear once, making 4 the mode."
  },
  // Variability Questions
  {
    id: 10,
    category: "Variability",
    question: "Standard deviation is ______.",
    options: [
      "The average of all scores",
      "The square of the variance",
      "The square root of the variance",
      "The range divided by 2"
    ],
    correct: 2,
    explanation: "Standard deviation = √variance. We take the square root to bring the measure back to the original units of measurement. Variance = SD²."
  },
  {
    id: 11,
    category: "Variability",
    question: "If all scores in a dataset are identical, the standard deviation equals ______.",
    options: ["1", "0", "The mean", "Cannot be determined"],
    correct: 1,
    explanation: "If all scores are the same, there is NO variability — no spread at all. Every score equals the mean, so every deviation is 0, making SD = 0."
  },
  // Sampling & Populations
  {
    id: 12,
    category: "Sampling",
    question: "A ______ describes a population; a ______ describes a sample.",
    options: [
      "statistic; parameter",
      "parameter; statistic",
      "mean; median",
      "variable; constant"
    ],
    correct: 1,
    explanation: "Parameters describe POPULATIONS (μ, σ). Statistics describe SAMPLES (M, s). Memory trick: Population-Parameter, Sample-Statistic (both pairs start with same letter!)."
  },
  {
    id: 13,
    category: "Sampling",
    question: "The difference between a sample statistic and the population parameter is called ______.",
    options: [
      "Standard deviation",
      "Sampling error",
      "Statistical significance",
      "Standard error"
    ],
    correct: 1,
    explanation: "Sampling error is the natural discrepancy between a sample statistic and the true population parameter. It's expected and unavoidable when using samples."
  },
  // Measurement Scales
  {
    id: 14,
    category: "Measurement Scales",
    question: "Jersey numbers on a basketball team represent which scale of measurement?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correct: 0,
    explanation: "Jersey numbers are just labels — player #23 isn't 'more' than player #11. No meaningful order or quantity. This is NOMINAL (names/categories only)."
  },
  {
    id: 15,
    category: "Measurement Scales",
    question: "Temperature in Fahrenheit is an example of which scale?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correct: 2,
    explanation: "Fahrenheit has equal intervals (difference between 50° and 60° = difference between 80° and 90°), but 0°F isn't 'no temperature.' No true zero = INTERVAL scale."
  },
  {
    id: 16,
    category: "Measurement Scales",
    question: "Weight in pounds is measured on which scale?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correct: 3,
    explanation: "Weight has a true zero (0 lbs = no weight), equal intervals, and meaningful ratios (20 lbs is twice as heavy as 10 lbs). This is the RATIO scale."
  },
  // Standard Error & Central Limit Theorem
  {
    id: 17,
    category: "Sampling Distributions",
    question: "The standard error of M measures ______.",
    options: [
      "How much individual scores vary",
      "How much sample means vary from the population mean",
      "The difference between mean and median",
      "The average score in the population"
    ],
    correct: 1,
    explanation: "Standard error of M (σM) measures the standard deviation of the distribution of sample means — how much sample means typically vary from the true population mean μ."
  },
  {
    id: 18,
    category: "Sampling Distributions",
    question: "According to the Central Limit Theorem, as sample size increases, the distribution of sample means ______.",
    options: [
      "Becomes more skewed",
      "Approaches a normal distribution",
      "Has a larger standard error",
      "Moves away from the population mean"
    ],
    correct: 1,
    explanation: "The Central Limit Theorem states that as n increases, the distribution of sample means approaches normal, REGARDLESS of the shape of the original population."
  },
  {
    id: 19,
    category: "Sampling Distributions",
    question: "The formula for standard error of the mean is ______.",
    options: ["σ × √n", "σ / √n", "σ / n", "σ × n"],
    correct: 1,
    explanation: "Standard error = σ / √n. As sample size (n) increases, standard error DECREASES — larger samples give more precise estimates of the population mean."
  },
  // Research Methods
  {
    id: 20,
    category: "Research Methods",
    question: "The variable that is manipulated by the researcher is called the ______.",
    options: [
      "Dependent variable",
      "Independent variable",
      "Confounding variable",
      "Extraneous variable"
    ],
    correct: 1,
    explanation: "The INDEPENDENT variable is manipulated by the researcher. The DEPENDENT variable is measured to see if it was affected. Memory: DV 'depends' on what you do to the IV."
  },
  {
    id: 21,
    category: "Research Methods",
    question: "In a study where participants are classified by age group (young, middle, old), age is a ______.",
    options: [
      "Dependent variable",
      "Independent variable",
      "Quasi-independent variable",
      "Confounding variable"
    ],
    correct: 2,
    explanation: "Since age can't be manipulated (you can't randomly assign someone to be old!), it's a QUASI-independent variable — used to create groups but not truly manipulated."
  },
  // Probability
  {
    id: 22,
    category: "Probability",
    question: "A probability value can range from ______.",
    options: ["-1 to +1", "0 to 100", "0 to 1", "-∞ to +∞"],
    correct: 2,
    explanation: "Probability ranges from 0 (impossible) to 1 (certain). A probability of 0.5 means 50% chance. Values outside 0-1 are not valid probabilities."
  },
  {
    id: 23,
    category: "Z-Scores",
    question: "For a distribution with μ = 100 and σ = 15, what X value corresponds to z = -1.00?",
    options: ["X = 85", "X = 99", "X = 100", "X = 115"],
    correct: 0,
    explanation: "Work backwards: X = μ + (z × σ) = 100 + (-1 × 15) = 100 - 15 = 85. A z of -1 means one SD below the mean."
  },
  {
    id: 24,
    category: "Descriptive Statistics",
    question: "Descriptive statistics are used to ______.",
    options: [
      "Make generalizations about populations from samples",
      "Summarize, organize, and simplify data",
      "Test hypotheses",
      "Determine causation"
    ],
    correct: 1,
    explanation: "Descriptive statistics DESCRIBE data — summarizing, organizing, and simplifying. INFERENTIAL statistics make generalizations from samples to populations."
  },
  {
    id: 25,
    category: "Variability",
    question: "The range is calculated as ______.",
    options: [
      "Highest score + lowest score",
      "Highest score - lowest score",
      "Mean - median",
      "Sum of scores / n"
    ],
    correct: 1,
    explanation: "Range = Highest score - Lowest score. It's the simplest measure of variability but is affected by outliers and ignores all scores in between."
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
      {/* Grid lines */}
      {[-3, -2, -1, 0, 1, 2, 3].map(z => (
        <g key={z}>
          <line 
            x1={scaleX(z)} y1={height - padding} 
            x2={scaleX(z)} y2={padding} 
            stroke="#334155" strokeWidth="1" strokeDasharray="4"
          />
          <text x={scaleX(z)} y={height - 10} textAnchor="middle" fill="#94a3b8" fontSize="12">
            {z}
          </text>
        </g>
      ))}
      
      {/* Area shading for percentages */}
      {showAreas && (
        <>
          <path 
            d={`M ${scaleX(-1)} ${scaleY(0)} ${points.filter(p => p.x >= -1 && p.x <= 1).map((p, i) => 
              `${i === 0 ? 'L' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`
            ).join(' ')} L ${scaleX(1)} ${scaleY(0)} Z`}
            fill="#22c55e" fillOpacity="0.3"
          />
          <text x={scaleX(0)} y={scaleY(0.15)} textAnchor="middle" fill="#22c55e" fontSize="11" fontWeight="bold">
            68%
          </text>
        </>
      )}

      {/* Bell curve */}
      <path d={pathD} fill="none" stroke="#60a5fa" strokeWidth="3"/>
      
      {/* Mean line */}
      <line x1={scaleX(0)} y1={height - padding} x2={scaleX(0)} y2={padding} stroke="#f59e0b" strokeWidth="2"/>
      
      {/* Highlight point */}
      {highlightZ !== 0 && (
        <>
          <line x1={highlightX} y1={height - padding} x2={highlightX} y2={highlightY} stroke="#ef4444" strokeWidth="2" strokeDasharray="4"/>
          <circle cx={highlightX} cy={highlightY} r="6" fill="#ef4444"/>
          <text x={highlightX} y={highlightY - 15} textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="bold">
            z = {highlightZ.toFixed(1)}
          </text>
        </>
      )}

      {/* Labels */}
      <text x={scaleX(0)} y={height - padding + 30} textAnchor="middle" fill="#f59e0b" fontSize="11">
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
  const [mode, setMode] = useState('toZ'); // 'toZ' or 'toX'

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
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => { setMode('toZ'); setResult(null); }}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            mode === 'toZ' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Raw Score → Z-Score
        </button>
        <button
          onClick={() => { setMode('toX'); setResult(null); }}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
            mode === 'toX' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Z-Score → Raw Score
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">
            {mode === 'toZ' ? 'X (Raw Score)' : 'z (Z-Score)'}
          </label>
          <input
            type="number"
            value={x}
            onChange={(e) => setX(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            placeholder={mode === 'toZ' ? '85' : '1.5'}
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">μ (Mean)</label>
          <input
            type="number"
            value={mean}
            onChange={(e) => setMean(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            placeholder="75"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-400 mb-1">σ (Std Dev)</label>
          <input
            type="number"
            value={sd}
            onChange={(e) => setSd(e.target.value)}
            className="w-full bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            placeholder="10"
          />
        </div>
      </div>

      <button
        onClick={calculate}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-6 bg-slate-900/50 rounded-lg p-4">
          <div className="text-center mb-4">
            <span className="text-slate-400">{mode === 'toZ' ? 'Z-Score' : 'Raw Score'} = </span>
            <span className="text-3xl font-bold text-green-400">{result.value.toFixed(4)}</span>
          </div>
          <div className="border-t border-slate-700 pt-4">
            <h4 className="text-sm font-semibold text-slate-400 mb-2">Step-by-Step:</h4>
            <div className="font-mono text-sm text-slate-300 space-y-1">
              {result.steps.map((step, i) => (
                <div key={i} className={step.startsWith('Step') ? 'text-blue-400 mt-2' : 'ml-2'}>
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
    </div>
  );
};

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'concepts', label: 'Z-Score Concepts', icon: Brain },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'table', label: 'Normal Table', icon: Table2 },
    { id: 'exam', label: 'Exam 1 Practice', icon: ClipboardList },
  ];

  return (
    <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-lg text-white">PSYC 2001 Study Guide</span>
          </div>
          <div className="flex gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                data-testid={`nav-${section.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <section.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Section 1: Z-Score Concepts
const ConceptsSection = () => {
  const [activeAnalogy, setActiveAnalogy] = useState(0);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Understanding <span className="text-blue-400">Z-Scores</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Master the concept that bridges descriptive and inferential statistics
        </p>
      </div>

      {/* Visual Bell Curve */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          The Normal Distribution
        </h2>
        <BellCurve showAreas={true} />
        <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-slate-900/50 rounded-lg p-3">
            <div className="text-green-400 font-bold">68%</div>
            <div className="text-slate-400">within ±1 SD</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3">
            <div className="text-yellow-400 font-bold">95%</div>
            <div className="text-slate-400">within ±2 SD</div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-3">
            <div className="text-red-400 font-bold">99.7%</div>
            <div className="text-slate-400">within ±3 SD</div>
          </div>
        </div>
      </div>

      {/* Key Concepts Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {keyConceptCards.map((card, index) => (
          <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
            <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
            <p className="text-slate-300 whitespace-pre-line mb-4">{card.content}</p>
            <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300 font-mono text-sm">
              {card.highlight}
            </div>
          </div>
        ))}
      </div>

      {/* Analogies Carousel */}
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          Real-World Analogies
        </h2>
        
        <div className="relative">
          <div className="bg-slate-900/70 rounded-xl p-6">
            <div className="text-4xl mb-4">{zScoreAnalogies[activeAnalogy].icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">
              {zScoreAnalogies[activeAnalogy].title}
            </h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              {zScoreAnalogies[activeAnalogy].content}
            </p>
            <div className="bg-green-600/20 border border-green-500/30 rounded-lg px-4 py-2 text-green-300 font-mono text-sm">
              {zScoreAnalogies[activeAnalogy].formula}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {zScoreAnalogies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveAnalogy(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeAnalogy ? 'bg-blue-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Formula Summary */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 border border-blue-500/30">
        <h2 className="text-xl font-semibold text-white mb-4">The Z-Score Formula</h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">z = (X - μ) / σ</div>
            <div className="text-slate-400">Population Z-Score</div>
          </div>
          <div className="text-slate-500 text-2xl">or</div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">z = (X - M) / s</div>
            <div className="text-slate-400">Sample Z-Score</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-white font-bold">X</div>
            <div className="text-slate-400">Raw Score</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-white font-bold">μ or M</div>
            <div className="text-slate-400">Mean</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-white font-bold">σ or s</div>
            <div className="text-slate-400">Std Dev</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3">
            <div className="text-white font-bold">z</div>
            <div className="text-slate-400">Z-Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section 2: Calculator
const CalculatorSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Z-Score <span className="text-cyan-400">Calculator</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Practice calculations with step-by-step solutions
        </p>
      </div>
      
      <ZScoreCalculator />

      {/* Practice Problems */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">Practice These!</h2>
        <div className="space-y-4">
          {[
            { q: "μ = 100, σ = 15, X = 130. Find z.", a: "z = +2.00" },
            { q: "μ = 50, σ = 8, X = 42. Find z.", a: "z = -1.00" },
            { q: "μ = 75, σ = 10, z = +1.5. Find X.", a: "X = 90" },
          ].map((prob, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4 flex justify-between items-center">
              <span className="text-slate-300">{prob.q}</span>
              <span className="text-green-400 font-mono bg-green-900/30 px-3 py-1 rounded">{prob.a}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Section 3: Normal Table Guide
const TableSection = () => {
  const commonZScores = [
    { z: "0.00", body: ".5000", tail: ".5000" },
    { z: "1.00", body: ".8413", tail: ".1587" },
    { z: "1.96", body: ".9750", tail: ".0250" },
    { z: "2.00", body: ".9772", tail: ".0228" },
    { z: "2.58", body: ".9951", tail: ".0049" },
    { z: "3.00", body: ".9987", tail: ".0013" },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Using the <span className="text-yellow-400">Normal Table</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Table B.1 - Your exam companion
        </p>
      </div>

      {/* How to use the table */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">How to Read the Table</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-blue-400 font-bold mb-2">Column A: Z</div>
            <p className="text-slate-300 text-sm">The z-score value you're looking up</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-green-400 font-bold mb-2">Column B: Body</div>
            <p className="text-slate-300 text-sm">Proportion from mean to z (larger portion)</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="text-red-400 font-bold mb-2">Column C: Tail</div>
            <p className="text-slate-300 text-sm">Proportion beyond z (smaller portion)</p>
          </div>
        </div>
      </div>

      {/* Common values */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 overflow-x-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Common Z-Scores to Know</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-3 px-4 text-blue-400">Z-Score</th>
              <th className="py-3 px-4 text-green-400">Body (Column B)</th>
              <th className="py-3 px-4 text-red-400">Tail (Column C)</th>
              <th className="py-3 px-4 text-slate-400">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {commonZScores.map((row, i) => (
              <tr key={i} className="border-b border-slate-800">
                <td className="py-3 px-4 font-mono text-white">{row.z}</td>
                <td className="py-3 px-4 font-mono text-green-300">{row.body}</td>
                <td className="py-3 px-4 font-mono text-red-300">{row.tail}</td>
                <td className="py-3 px-4 text-slate-400 text-sm">
                  {row.z === "0.00" && "Exactly at the mean (50/50 split)"}
                  {row.z === "1.00" && "84% below, 16% above"}
                  {row.z === "1.96" && "Critical value for 95% CI"}
                  {row.z === "2.00" && "~95% of scores are between ±2"}
                  {row.z === "2.58" && "Critical value for 99% CI"}
                  {row.z === "3.00" && "Only 0.13% are more extreme"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-6 border border-yellow-500/30">
        <h2 className="text-xl font-semibold text-white mb-4">Exam Tips for Using the Table</h2>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>The table only shows POSITIVE z-scores. For negative z, use symmetry!</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>Body + Tail always = 1.0000 (100% of the distribution)</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>For "what % is above z = 1.5?" → Use the TAIL column</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
            <span>For "what % is below z = -1.5?" → Same as tail for +1.5 (symmetry!)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Section 4: Exam Practice
const ExamSection = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, attempted: 0 });
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', ...new Set(examQuestions.map(q => q.category))];
  
  const filteredQuestions = filterCategory === 'All' 
    ? examQuestions 
    : examQuestions.filter(q => q.category === filterCategory);

  const currentQuestion = filteredQuestions[currentQ] || filteredQuestions[0];

  const handleAnswer = (optionIndex) => {
    if (showExplanation) return;
    
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    if (!answeredQuestions.has(currentQuestion.id)) {
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion.id]));
      setScore(prev => ({
        correct: prev.correct + (optionIndex === currentQuestion.correct ? 1 : 0),
        attempted: prev.attempted + 1
      }));
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQ((prev) => (prev + 1) % filteredQuestions.length);
  };

  const prevQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCurrentQ((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const resetQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore({ correct: 0, attempted: 0 });
    setAnsweredQuestions(new Set());
  };

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Exam 1 <span className="text-green-400">Practice</span>
        </h1>
        <p className="text-slate-400 text-lg">
          25 questions covering Chapters 1-7
        </p>
      </div>

      {/* Score & Filter */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="bg-slate-800/50 rounded-xl px-6 py-3 border border-slate-700">
          <span className="text-slate-400">Score: </span>
          <span className="text-2xl font-bold text-green-400">{score.correct}</span>
          <span className="text-slate-500"> / {score.attempted}</span>
          {score.attempted > 0 && (
            <span className="ml-2 text-slate-400">
              ({Math.round((score.correct / score.attempted) * 100)}%)
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">Filter:</span>
          <select
            value={filterCategory}
            onChange={(e) => { setFilterCategory(e.target.value); setCurrentQ(0); setSelectedAnswer(null); setShowExplanation(false); }}
            className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:outline-none"
            data-testid="category-filter"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={resetQuiz}
            className="p-2 bg-slate-800 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            title="Reset Quiz"
            data-testid="reset-quiz-btn"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
        <div className="bg-slate-900/50 px-6 py-3 flex justify-between items-center border-b border-slate-700">
          <span className="text-slate-400">
            Question {currentQ + 1} of {filteredQuestions.length}
          </span>
          <span className="bg-blue-600/30 text-blue-300 px-3 py-1 rounded-full text-sm">
            {currentQuestion.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl text-white mb-6" data-testid="question-text">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left px-4 py-3 rounded-lg border transition-all ";
              
              if (showExplanation) {
                if (index === currentQuestion.correct) {
                  buttonClass += "bg-green-600/20 border-green-500 text-green-300";
                } else if (index === selectedAnswer && index !== currentQuestion.correct) {
                  buttonClass += "bg-red-600/20 border-red-500 text-red-300";
                } else {
                  buttonClass += "bg-slate-900/50 border-slate-700 text-slate-400";
                }
              } else {
                buttonClass += selectedAnswer === index 
                  ? "bg-blue-600/20 border-blue-500 text-blue-300"
                  : "bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-500";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={buttonClass}
                  data-testid={`option-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full border flex items-center justify-center text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showExplanation && index === currentQuestion.correct && (
                      <Check className="w-5 h-5 ml-auto text-green-400" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQuestion.correct && (
                      <X className="w-5 h-5 ml-auto text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-6 bg-slate-900/70 rounded-lg p-4 border border-slate-600" data-testid="explanation">
              <h4 className="text-sm font-semibold text-slate-400 mb-2">Explanation:</h4>
              <p className="text-slate-300">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="bg-slate-900/50 px-6 py-4 flex justify-between border-t border-slate-700">
          <button
            onClick={prevQuestion}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-slate-700 transition-all"
            data-testid="prev-question-btn"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          <button
            onClick={nextQuestion}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-all"
            data-testid="next-question-btn"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Progress</h3>
        <div className="flex flex-wrap gap-2">
          {filteredQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => { setCurrentQ(i); setSelectedAnswer(null); setShowExplanation(false); }}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                answeredQuestions.has(q.id)
                  ? 'bg-green-600/30 text-green-300 border border-green-500/50'
                  : i === currentQ
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App
function App() {
  const [activeSection, setActiveSection] = useState('concepts');

  const renderSection = () => {
    switch (activeSection) {
      case 'concepts':
        return <ConceptsSection />;
      case 'calculator':
        return <CalculatorSection />;
      case 'table':
        return <TableSection />;
      case 'exam':
        return <ExamSection />;
      default:
        return <ConceptsSection />;
    }
  };

  return (
    <div className="App min-h-screen bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
                <main className="max-w-5xl mx-auto px-4 py-8">
                  {renderSection()}
                </main>
                <footer className="text-center py-6 text-slate-500 text-sm border-t border-slate-800">
                  PSYC 2001 - Statistical Methods for Psychology | Exam 1 Study Guide
                </footer>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
