import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2, XCircle, Lightbulb, RotateCcw, Home } from 'lucide-react';

const SPSSTable = ({ headers, rows, caption }) => (
  <div className="my-3">
    {caption && <p className="text-xs font-semibold text-center text-muted-foreground mb-1">{caption}</p>}
    <div className="overflow-x-auto">
      <table className="w-full text-xs border border-border">
        <thead>
          <tr className="bg-muted/70">{headers.map((h, i) => <th key={i} className="border border-border px-2 py-1 text-left font-semibold text-foreground">{h}</th>)}</tr>
        </thead>
        <tbody>{rows.map((row, i) => (
          <tr key={i} className="border-b border-border/50">{row.map((cell, j) => <td key={j} className="border border-border/30 px-2 py-1 text-muted-foreground">{cell}</td>)}</tr>
        ))}</tbody>
      </table>
    </div>
  </div>
);

const ScenarioStudyGPA = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-studygpa">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 01 through 07 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A researcher examines the relationship between hours spent studying per week and GPA in a sample of n = 25 college students. Alpha is set at .05.</p>
      <SPSSTable caption="Correlations" headers={['', 'Study_Hours', 'GPA']} rows={[
        ['Study_Hours — Pearson Correlation', '1', '.720**'],
        ['Study_Hours — Sig. (2-tailed)', '', '.000'],
        ['Study_Hours — N', '25', '25'],
        ['GPA — Pearson Correlation', '.720**', '1'],
        ['GPA — Sig. (2-tailed)', '.000', ''],
        ['GPA — N', '25', '25'],
      ]} />
      <p className="text-xs text-muted-foreground italic">**. Correlation is significant at the 0.01 level (2-tailed).</p>
    </CardContent>
  </Card>
);

const ScenarioAnxiety = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-anxiety">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 08 through 14 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A psychologist examines whether anxiety level (X) predicts test performance (Y) in n = 20 students. Alpha is set at .05.</p>
      <SPSSTable caption="Model Summary" headers={['Model', 'R', 'R Square', 'Adjusted R Square', 'Std. Error of the Estimate']} rows={[
        ['1', '.650', '.423', '.391', '8.12'],
      ]} />
      <SPSSTable caption="Coefficients" headers={['Model', 'B', 'Std. Error', 'Beta', 't', 'Sig.']} rows={[
        ['(Constant)', '92.40', '5.30', '', '17.43', '.000'],
        ['Anxiety', '-1.80', '.45', '-.650', '-4.00', '.001'],
      ]} />
    </CardContent>
  </Card>
);

const ScenarioSleep = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-sleep">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 15 through 20 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A researcher measures hours of sleep and reaction time (in milliseconds) in n = 30 participants. Alpha is set at .05.</p>
      <SPSSTable caption="Correlations" headers={['', 'Sleep_Hours', 'Reaction_Time']} rows={[
        ['Sleep_Hours — Pearson Correlation', '1', '-.380*'],
        ['Sleep_Hours — Sig. (2-tailed)', '', '.038'],
        ['Sleep_Hours — N', '30', '30'],
        ['Reaction_Time — Pearson Correlation', '-.380*', '1'],
        ['Reaction_Time — Sig. (2-tailed)', '.038', ''],
        ['Reaction_Time — N', '30', '30'],
      ]} />
      <p className="text-xs text-muted-foreground italic">*. Correlation is significant at the 0.05 level (2-tailed).</p>
    </CardContent>
  </Card>
);

const scenarioMap = {
  studyGPA: ScenarioStudyGPA,
  anxiety: ScenarioAnxiety,
  sleep: ScenarioSleep,
};

const examQuestions = [
  // Block 1: Study Hours & GPA Correlation (Q01-Q07)
  { id: 1, scenarioKey: 'studyGPA', question: "01. What is the Pearson correlation between study hours and GPA?", options: ["r = .000", "r = .720", "r = 25", "r = 1.00"], correctAnswer: 1, explanation: "The Pearson Correlation value at the intersection of Study_Hours and GPA is .720. This is the correlation coefficient." },
  { id: 2, scenarioKey: 'studyGPA', question: "02. Is this correlation statistically significant at α = .05?", options: ["No, because r is less than 1.00", "No, because N = 25 is too small", "Yes, because .720 is greater than .05", "Yes, because the Sig. (2-tailed) value of .000 is less than .05"], correctAnswer: 3, explanation: "Statistical significance is determined by the Sig. (p-value), not by the size of r itself. Since p = .000 < .05, the correlation is significant." },
  { id: 3, scenarioKey: 'studyGPA', question: "03. What is the coefficient of determination (r²) for this correlation?", options: [".720", ".360", ".518", ".280"], correctAnswer: 2, explanation: "r² = (.720)² = .5184 ≈ .518. This means 51.8% of the variance in GPA is accounted for by its relationship with study hours." },
  { id: 4, scenarioKey: 'studyGPA', question: "04. What is the direction of this correlation?", options: ["Positive — as study hours increase, GPA tends to increase", "Negative — as study hours increase, GPA tends to decrease", "Zero — there is no relationship", "Cannot be determined from the output"], correctAnswer: 0, explanation: "The correlation is +.720 (positive). This means higher study hours are associated with higher GPA." },
  { id: 5, scenarioKey: 'studyGPA', question: "05. How would you describe the strength of this correlation?", options: ["Weak", "Strong", "Moderate", "Perfect"], correctAnswer: 1, explanation: "By convention, |r| > .50 is considered strong. Since r = .720, this is a strong positive correlation." },
  { id: 6, scenarioKey: 'studyGPA', question: "06. Based on these results, can we conclude that studying more CAUSES a higher GPA?", options: ["Yes, because the correlation is statistically significant", "Yes, because r² > .50", "No, because the sample size is too small", "No, because correlation does not imply causation"], correctAnswer: 3, explanation: "Regardless of how strong or significant a correlation is, we cannot infer causation. A third variable (e.g., motivation) could explain both, or the direction could be reversed." },
  { id: 7, scenarioKey: 'studyGPA', question: "07. Since we rejected the null hypothesis (ρ = 0), what type of error might we be making?", options: ["Type I error", "Type II error", "Standard error", "Sampling error"], correctAnswer: 0, explanation: "When we reject H₀, we risk a Type I error — incorrectly concluding there is a relationship when the true population correlation is zero." },
  // Block 2: Anxiety & Test Performance Regression (Q08-Q14)
  { id: 8, scenarioKey: 'anxiety', question: "08. Based on the Coefficients table, what is the regression equation?", options: ["Ŷ = 92.40X − 1.80", "Ŷ = 5.30X + .45", "Ŷ = −1.80X + 92.40", "Ŷ = .650X + 92.40"], correctAnswer: 2, explanation: "The regression equation uses B values from the Coefficients table: Ŷ = bX + a = −1.80X + 92.40. The constant (92.40) is the Y-intercept and Anxiety's B (−1.80) is the slope." },
  { id: 9, scenarioKey: 'anxiety', question: "09. What does the slope of −1.80 mean in context?", options: ["Anxiety has no effect on test performance", "For each 1-unit increase in anxiety, test performance is predicted to decrease by 1.80 points", "For each 1-unit increase in test performance, anxiety decreases by 1.80", "The average test score is 1.80"], correctAnswer: 1, explanation: "The slope (b = −1.80) means that for every additional unit of anxiety, the predicted test performance drops by 1.80 points." },
  { id: 10, scenarioKey: 'anxiety', question: "10. What is r² (R Square) for this regression?", options: [".423", ".650", ".391", ".001"], correctAnswer: 0, explanation: "R Square = .423, as shown in the Model Summary. This means 42.3% of the variance in test performance is predicted by anxiety level." },
  { id: 11, scenarioKey: 'anxiety', question: "11. How would you interpret r² = .423?", options: ["The correlation is .423", "Anxiety is not a significant predictor", "The slope is .423", "42.3% of the variance in test performance is predicted by its relationship with anxiety"], correctAnswer: 3, explanation: "r² = .423 means that anxiety accounts for 42.3% of the variability in test scores. The remaining 57.7% is unexplained by this model." },
  { id: 12, scenarioKey: 'anxiety', question: "12. If a student has an anxiety score of 10, what is their predicted test score?", options: ["Ŷ = 110.40", "Ŷ = 90.60", "Ŷ = 74.40", "Ŷ = 10.80"], correctAnswer: 2, explanation: "Ŷ = −1.80(10) + 92.40 = −18.00 + 92.40 = 74.40." },
  { id: 13, scenarioKey: 'anxiety', question: "13. What is the direction of the relationship between anxiety and test performance?", options: ["Negative — higher anxiety is associated with lower test scores", "Positive — higher anxiety is associated with higher test scores", "Zero — no relationship", "Curvilinear"], correctAnswer: 0, explanation: "The negative slope (−1.80) and the negative Pearson Correlation (Beta = −.650) both indicate a negative relationship." },
  { id: 14, scenarioKey: 'anxiety', question: "14. Is anxiety a statistically significant predictor of test performance at α = .05?", options: ["No, because R = .650 is greater than .05", "Yes, because the Sig. value for Anxiety (.001) is less than .05", "No, because the constant is significant", "Yes, because t = −4.00 is negative"], correctAnswer: 1, explanation: "The Sig. (p-value) for the Anxiety predictor is .001, which is less than .05. Anxiety is a significant predictor of test performance." },
  // Block 3: Sleep & Reaction Time (Q15-Q20)
  { id: 15, scenarioKey: 'sleep', question: "15. What is the Pearson correlation between sleep hours and reaction time?", options: ["r = .038", "r = 30", "r = 1.00", "r = −.380"], correctAnswer: 3, explanation: "The Pearson Correlation at the intersection of Sleep_Hours and Reaction_Time is −.380." },
  { id: 16, scenarioKey: 'sleep', question: "16. What is the direction of this relationship?", options: ["Positive — more sleep is associated with slower reaction time", "Zero — no relationship exists", "Negative — more sleep is associated with faster (lower) reaction time", "Cannot be determined"], correctAnswer: 2, explanation: "The negative sign (−.380) indicates that more sleep is associated with lower (faster) reaction times." },
  { id: 17, scenarioKey: 'sleep', question: "17. How would you describe the strength of r = −.380?", options: ["Weak", "Moderate", "Strong", "Perfect"], correctAnswer: 1, explanation: "By convention, |r| between .30 and .50 is considered moderate. Since |−.380| = .380, this is a moderate negative correlation." },
  { id: 18, scenarioKey: 'sleep', question: "18. What is r² for this correlation?", options: [".144", ".380", ".038", ".620"], correctAnswer: 0, explanation: "r² = (−.380)² = .1444 ≈ .144. About 14.4% of the variance in reaction time is accounted for by sleep." },
  { id: 19, scenarioKey: 'sleep', question: "19. Is this correlation significant at α = .05?", options: ["No, because r is negative", "No, because .380 is less than .50", "Yes, because N = 30 is large", "Yes, because p = .038 is less than .05"], correctAnswer: 3, explanation: "The Sig. (2-tailed) value is .038, which is less than α = .05. The correlation is statistically significant at the .05 level." },
  { id: 20, scenarioKey: 'sleep', question: "20. Would this correlation be significant at α = .01?", options: ["No, because p = .038 is greater than .01", "Yes, because p = .038 is less than .01", "Yes, because the correlation is negative", "No, because r² is less than .01"], correctAnswer: 0, explanation: "At α = .01, we need p ≤ .01. Since p = .038 > .01, the correlation would NOT be significant at the stricter .01 level." },
  // Block 4: Conceptual — Scatter Plots & Interpreting r (Q21-Q25)
  { id: 21, question: "21. A scatter plot with data points forming an upward pattern from left to right indicates:", options: ["No correlation", "A negative correlation", "A positive correlation", "A curvilinear relationship"], correctAnswer: 2, explanation: "An upward pattern (low X with low Y, high X with high Y) indicates a positive correlation." },
  { id: 22, question: "22. Which of the following values of r represents the STRONGEST relationship?", options: ["r = .72", "r = −.85", "r = .15", "r = −.40"], correctAnswer: 1, explanation: "Strength is determined by the absolute value of r: |−.85| = .85 is the largest, making it the strongest relationship, despite being negative." },
  { id: 23, question: "23. The null hypothesis when testing a Pearson correlation is:", options: ["H₀: r = 0", "H₀: r ≠ 0", "H₁: ρ ≠ 0", "H₀: ρ = 0"], correctAnswer: 3, explanation: "The null hypothesis states that the population correlation (ρ, rho) equals zero — there is no linear relationship in the population. Note: we use ρ (population parameter), not r (sample statistic)." },
  { id: 24, question: "24. A researcher finds r = .80 with n = 5, and another finds r = .25 with n = 200. Which correlation is more likely to be statistically significant?", options: ["r = .80 with n = 5, because .80 is larger", "Neither can be significant", "r = .25 with n = 200, because larger samples provide more power", "Both are equally likely to be significant"], correctAnswer: 2, explanation: "Statistical significance depends on both the size of r AND the sample size. With n = 200, even a modest r = .25 has high statistical power and is likely significant, while r = .80 with only n = 5 may not reach significance." },
  { id: 25, question: "25. If only students with GPAs between 3.5 and 4.0 were studied, what would likely happen to the observed correlation between study hours and GPA?", options: ["It would be underestimated (closer to zero) due to restricted range", "It would be overestimated", "It would remain exactly the same", "It would become negative"], correctAnswer: 0, explanation: "Restricting the range of either variable reduces the observed variability and typically makes the correlation appear weaker (closer to zero) than it truly is in the full population." },
  // Standalone Conceptual (Q26-Q30)
  { id: 26, question: "26. The regression line (best-fitting line) always passes through which point?", options: ["The origin (0, 0)", "The point (M_X, M_Y) — the means of X and Y", "The highest data point", "The Y-intercept only"], correctAnswer: 1, explanation: "The least-squares regression line always passes through the point defined by the mean of X and the mean of Y: (M_X, M_Y)." },
  { id: 27, question: "27. In the equation Ŷ = 3X + 10, if X increases by 2 units, Ŷ increases by:", options: ["2", "10", "13", "6"], correctAnswer: 3, explanation: "The slope is 3, meaning each 1-unit increase in X produces a 3-unit increase in Ŷ. For a 2-unit increase: 3 × 2 = 6." },
  { id: 28, question: "28. The standard error of estimate in regression measures:", options: ["The average distance between actual Y values and predicted Ŷ values", "The strength of the correlation", "The slope of the regression line", "The significance of the predictor"], correctAnswer: 0, explanation: "The standard error of estimate quantifies how much the actual Y values typically deviate from the regression line's predicted values. Smaller values mean better predictions." },
  { id: 29, question: "29. An r² of .25 means:", options: ["The correlation is .25", "r = .50", "25% of the variance in Y is accounted for by its relationship with X", "75% of the variance in Y is accounted for by X"], correctAnswer: 2, explanation: "r² = .25 means 25% of the variance in Y is explained by X. The remaining 75% is unexplained. Note that r = √.25 = .50, but the interpretation of r² is about proportion of variance." },
  { id: 30, question: "30. Which of the following is NOT a property measured by the Pearson correlation?", options: ["Direction of the relationship", "Strength of the linear relationship", "Form of the relationship (linear)", "Whether X causes changes in Y"], correctAnswer: 3, explanation: "Pearson r measures direction, form (linear), and strength. It does NOT measure or establish causation. Correlation ≠ causation." },
];

function shuffleOptions(q) {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return { ...q, options: indices.map(i => q.options[i]), correctAnswer: indices.indexOf(q.correctAnswer) };
}

export const PracticeExam4 = ({ onBack }) => {
  const [started, setStarted] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = useMemo(() => examQuestions.map(shuffleOptions), []);
  const totalQ = questions.length;
  const current = questions[currentIdx];
  const correctCount = Object.values(answeredQuestions).filter(a => a.correct).length;
  const progress = ((currentIdx + 1) / totalQ) * 100;
  const savedState = answeredQuestions[currentIdx];

  const handleSelect = (idx) => { if (!isSubmitted && !savedState) setSelectedAnswer(idx); };
  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const correct = selectedAnswer === current.correctAnswer;
    setAnsweredQuestions(prev => ({ ...prev, [currentIdx]: { selected: selectedAnswer, correct } }));
    setIsSubmitted(true);
  };
  const handleNext = () => {
    if (currentIdx < totalQ - 1) {
      const ns = answeredQuestions[currentIdx + 1];
      setCurrentIdx(currentIdx + 1); setSelectedAnswer(ns ? ns.selected : null); setIsSubmitted(!!ns);
    } else setShowResults(true);
  };
  const handlePrevious = () => {
    if (currentIdx > 0) {
      const ps = answeredQuestions[currentIdx - 1];
      setCurrentIdx(currentIdx - 1); setSelectedAnswer(ps ? ps.selected : null); setIsSubmitted(!!ps);
    }
  };
  const activeState = savedState || (isSubmitted ? { selected: selectedAnswer, correct: selectedAnswer === current.correctAnswer } : null);

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6 flex items-center justify-center">
        <Card className="border-2 border-primary/10 max-w-2xl w-full">
          <CardContent className="p-8 space-y-6">
            <Button variant="ghost" size="sm" onClick={onBack} data-testid="pe4-back-btn" className="text-muted-foreground"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-1">Practice Exam</Badge>
              <h1 className="text-3xl font-bold text-foreground">Practice Exam 4</h1>
              <p className="text-sm text-muted-foreground italic">PSYC 2001 Statistical Methods in Psych — David J. Hardy, Ph.D., Spring 2026</p>
              <div className="p-4 rounded-lg bg-muted/50 text-left space-y-2 text-sm text-muted-foreground">
                <p>This exam is comprised of <strong className="text-foreground">30 multiple-choice questions</strong> based on material from <strong className="text-foreground">Chapter 14</strong> and SPSS instruction.</p>
                <p>Topics: Pearson correlation (r), coefficient of determination (r²), linear regression, scatter plots, SPSS correlation & regression output.</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">30 Questions</Badge>
                <Badge variant="outline">Chapter 14</Badge>
                <Badge variant="outline">SPSS Output</Badge>
              </div>
              <Button size="lg" onClick={() => setStarted(true)} data-testid="pe4-start-btn">Start Exam <ChevronRight className="w-5 h-5 ml-2" /></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    const pct = Math.round((correctCount / totalQ) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6 flex items-center justify-center">
        <Card className="border-2 border-primary/10 max-w-lg w-full">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Exam Complete</h2>
            <div className={`text-6xl font-bold ${pct >= 70 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>{pct}%</div>
            <p className="text-muted-foreground">{correctCount} out of {totalQ} correct</p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={onBack} data-testid="pe4-results-home"><Home className="w-4 h-4 mr-2" />Home</Button>
              <Button onClick={() => { setStarted(false); setCurrentIdx(0); setSelectedAnswer(null); setIsSubmitted(false); setAnsweredQuestions({}); setShowResults(false); }} data-testid="pe4-results-retry"><RotateCcw className="w-4 h-4 mr-2" />Retry</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const ScenarioComponent = current.scenarioKey ? scenarioMap[current.scenarioKey] : null;

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-4xl mx-auto space-y-4 flex-1">
        <Button variant="ghost" size="sm" onClick={onBack} data-testid="pe4-quiz-back-btn" className="text-muted-foreground"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Button>
        <div className="space-y-2 fade-in">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Question {currentIdx + 1} of {totalQ}</span>
            <span className="text-muted-foreground">{correctCount} correct</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        {ScenarioComponent && <ScenarioComponent />}
        <Card className="border-2 border-primary/10">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground leading-relaxed" data-testid="pe4-question-text">{current.question}</h3>
            <div className="space-y-2">
              {current.options.map((opt, idx) => {
                const letter = String.fromCharCode(97 + idx);
                let optClass = 'border-2 border-border hover:border-primary/50';
                if (activeState) {
                  if (idx === current.correctAnswer) optClass = 'border-2 border-emerald-500 bg-emerald-500/10';
                  else if (idx === activeState.selected && !activeState.correct) optClass = 'border-2 border-rose-500 bg-rose-500/10';
                  else optClass = 'border-2 border-border opacity-50';
                } else if (selectedAnswer === idx) optClass = 'border-2 border-primary bg-primary/10';
                return (
                  <button key={idx} onClick={() => handleSelect(idx)} disabled={!!activeState} data-testid={`pe4-option-${letter}`}
                    className={`w-full text-left p-4 rounded-lg transition-all ${optClass}`}>
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{letter}</span>
                      <span className="text-sm text-foreground">{opt}</span>
                      {activeState && idx === current.correctAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 ml-auto" />}
                      {activeState && idx === activeState.selected && !activeState.correct && <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5 ml-auto" />}
                    </div>
                  </button>
                );
              })}
            </div>
            {activeState && (
              <div className={`p-4 rounded-lg ${activeState.correct ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-rose-500/10 border border-rose-500/20'}`}>
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{current.explanation}</p>
                </div>
              </div>
            )}
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" onClick={handlePrevious} disabled={currentIdx === 0} data-testid="pe4-prev-btn"><ChevronLeft className="w-4 h-4 mr-1" /> Previous</Button>
              {!activeState ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null} data-testid="pe4-submit-btn">Submit</Button>
              ) : (
                <Button onClick={handleNext} data-testid="pe4-next-btn">{currentIdx < totalQ - 1 ? <>Next <ChevronRight className="w-4 h-4 ml-1" /></> : 'Finish Exam'}</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PracticeExam4;
