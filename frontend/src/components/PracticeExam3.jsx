import React, { useState, useMemo } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ArrowLeft, ChevronRight, ChevronLeft, CheckCircle2, XCircle, Lightbulb, RotateCcw, Home } from 'lucide-react';

/* ====== SPSS SCENARIO RENDERERS ====== */
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

const ScenarioTherapy = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-therapy">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 01 through 06 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A psychologist compares stress levels (measured by Perceived Stress Scale scores) across three therapy conditions: Cognitive Behavioral Therapy (CBT), Medication Only, and a Waitlist Control group. We will set alpha at .05. Note that any question about NHT is based on a two-tailed test.</p>
      <SPSSTable caption="Descriptives" headers={['Group', 'N', 'Mean', 'Std. Deviation', 'Std. Error']} rows={[
        ['CBT', '15', '22.40', '4.85', '1.25'],
        ['Medication', '15', '28.60', '5.12', '1.32'],
        ['Control', '15', '31.80', '5.47', '1.41'],
      ]} />
      <SPSSTable caption="ANOVA" headers={['Source', 'Sum of Squares', 'df', 'Mean Square', 'F', 'Sig.']} rows={[
        ['Between Groups', '686.80', '2', '343.40', '13.16', '.000'],
        ['Within Groups', '1095.60', '42', '26.09', '', ''],
        ['Total', '1782.40', '44', '', '', ''],
      ]} />
    </CardContent>
  </Card>
);

const ScenarioStudyMethods = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-study">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 07 through 11 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A professor compares exam performance across three study methods: Flashcards, Group Study, and Practice Tests. Each group has n = 12 students. Alpha is set at .05.</p>
      <SPSSTable caption="Descriptives" headers={['Study Method', 'N', 'Mean', 'Std. Deviation']} rows={[
        ['Flashcards', '12', '72.50', '8.30'],
        ['Group Study', '12', '74.17', '7.90'],
        ['Practice Tests', '12', '84.83', '6.45'],
      ]} />
      <SPSSTable caption="ANOVA" headers={['Source', 'Sum of Squares', 'df', 'Mean Square', 'F', 'Sig.']} rows={[
        ['Between Groups', '1180.06', '2', '590.03', '9.48', '.001'],
        ['Within Groups', '2054.75', '33', '62.27', '', ''],
        ['Total', '3234.81', '35', '', '', ''],
      ]} />
      <SPSSTable caption="Post Hoc Tests - Tukey HSD" headers={['(I) Method', '(J) Method', 'Mean Diff (I-J)', 'Sig.']} rows={[
        ['Flashcards', 'Group Study', '-1.67', '.875'],
        ['Flashcards', 'Practice Tests', '-12.33', '.001'],
        ['Group Study', 'Practice Tests', '-10.67', '.003'],
      ]} />
    </CardContent>
  </Card>
);

const ScenarioCaffeineSleep = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-caffeine">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 12 through 19 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A researcher examines the effects of caffeine (No Caffeine vs. Caffeine) and sleep condition (Normal Sleep vs. Sleep Deprived) on errors during an attention task. This is a 2 x 2 between-subjects factorial design with n = 10 per cell. Alpha is set at .05.</p>
      <SPSSTable caption="Descriptive Statistics — Dependent Variable: Errors" headers={['Caffeine', 'Sleep', 'Mean', 'Std. Deviation', 'N']} rows={[
        ['No Caffeine', 'Normal Sleep', '8.20', '2.90', '10'],
        ['No Caffeine', 'Sleep Deprived', '14.70', '3.13', '10'],
        ['Caffeine', 'Normal Sleep', '6.40', '2.76', '10'],
        ['Caffeine', 'Sleep Deprived', '9.10', '3.21', '10'],
      ]} />
      <SPSSTable caption="Tests of Between-Subjects Effects — Dependent Variable: Errors" headers={['Source', 'Type III SS', 'df', 'Mean Square', 'F', 'Sig.']} rows={[
        ['Caffeine', '72.90', '1', '72.90', '8.10', '.007'],
        ['Sleep', '180.63', '1', '180.63', '20.07', '.000'],
        ['Caffeine * Sleep', '40.00', '1', '40.00', '4.44', '.042'],
        ['Error', '324.00', '36', '9.00', '', ''],
        ['Corrected Total', '617.53', '39', '', '', ''],
      ]} />
    </CardContent>
  </Card>
);

const ScenarioGenderExercise = () => (
  <Card className="border-2 border-amber-500/20 bg-amber-500/5 mb-4" data-testid="spss-scenario-gender">
    <CardContent className="p-4 space-y-2">
      <p className="text-sm font-semibold text-foreground">Please answer questions 20 through 25 based on the SPSS output below.</p>
      <p className="text-sm text-muted-foreground">A health psychologist examines the effects of gender (Male vs. Female) and exercise frequency (None, Moderate, High) on anxiety scores in a 2 x 3 between-subjects factorial design. There are n = 8 participants per cell. Alpha is set at .05.</p>
      <SPSSTable caption="Tests of Between-Subjects Effects — Dependent Variable: Anxiety Score" headers={['Source', 'Type III SS', 'df', 'Mean Square', 'F', 'Sig.']} rows={[
        ['Gender', '12.04', '1', '12.04', '1.34', '.254'],
        ['Exercise', '284.38', '2', '142.19', '15.80', '.000'],
        ['Gender * Exercise', '3.79', '2', '1.90', '0.21', '.812'],
        ['Error', '378.00', '42', '9.00', '', ''],
        ['Corrected Total', '678.21', '47', '', '', ''],
      ]} />
    </CardContent>
  </Card>
);

const scenarioMap = {
  therapy: ScenarioTherapy,
  studyMethods: ScenarioStudyMethods,
  caffeineSleep: ScenarioCaffeineSleep,
  genderExercise: ScenarioGenderExercise,
};

/* ====== EXAM QUESTIONS ====== */
const examQuestions = [
  // Block 1: Therapy ANOVA (Q01-Q06)
  { id: 1, scenarioKey: 'therapy', question: "01. What is the null hypothesis here?", options: ["H₀: at least one μ is different", "H₀: M₁ = M₂ = M₃", "H₀: μ₁ = μ₂ = μ₃", "H₀: μCBT < μMed < μControl"], correctAnswer: 2, explanation: "The null hypothesis for ANOVA states that all population means are equal: H₀: μ₁ = μ₂ = μ₃. Note we use μ (population parameters), not M (sample statistics)." },
  { id: 2, scenarioKey: 'therapy', question: "02. What statistical test is being conducted here?", options: ["An independent-samples t test", "A paired-samples t test", "A single-sample z test", "A one-way analysis of variance (ANOVA)"], correctAnswer: 3, explanation: "With three independent groups being compared, this is a one-way ANOVA. ANOVA is used when comparing three or more group means." },
  { id: 3, scenarioKey: 'therapy', question: "03. With alpha set at .05, is this ANOVA statistically significant?", options: ["Yes, because p is equal to or less than .05", "No, because p is greater than .05", "Yes, because F = 13.16 is less than .05", "No, because p is equal to or less than .05"], correctAnswer: 0, explanation: "The Sig. (p-value) is .000, which is less than α = .05. Therefore, we reject H₀ and conclude the result is statistically significant." },
  { id: 4, scenarioKey: 'therapy', question: "04. What does the F statistic equal here?", options: ["F = 343.40", "F = 13.16", "F = 26.09", "F = 686.80"], correctAnswer: 1, explanation: "The F statistic is found in the F column of the ANOVA table: F = 13.16. This is the ratio of MS_between (343.40) to MS_within (26.09)." },
  { id: 5, scenarioKey: 'therapy', question: "05. What does eta squared (η²) equal for this analysis?", options: ["η² = .39", "η² = .13", "η² = .61", "η² = .26"], correctAnswer: 0, explanation: "η² = SS_between / SS_total = 686.80 / 1782.40 = .385 ≈ .39. This is a large effect — 39% of the variance in stress is accounted for by therapy condition." },
  { id: 6, scenarioKey: 'therapy', question: "06. What is the most appropriate conclusion?", options: ["CBT leads to the highest stress levels among the three groups", "There is no significant difference in stress levels across therapy conditions", "Medication is the most effective treatment for stress", "There is a significant difference in stress levels across the three therapy conditions; post hoc tests are needed to determine which groups differ"], correctAnswer: 3, explanation: "A significant F tells us at least one mean differs, but not which ones. With k = 3 groups and a significant result, post hoc tests (e.g., Tukey's HSD) are needed to identify specific differences." },
  // Block 2: Study Methods with Post Hoc (Q07-Q11)
  { id: 7, scenarioKey: 'studyMethods', question: "07. What is the independent variable in this study?", options: ["Exam performance", "Study method (Flashcards, Group Study, Practice Tests)", "The 12 students in each group", "The professor"], correctAnswer: 1, explanation: "The independent variable is what the researcher manipulates or categorizes — here, the study method with three levels." },
  { id: 8, scenarioKey: 'studyMethods', question: "08. What is the dependent variable?", options: ["Exam score", "Study method", "Number of students", "Tukey's HSD"], correctAnswer: 0, explanation: "The dependent variable is the outcome being measured — in this case, exam performance (score)." },
  { id: 9, scenarioKey: 'studyMethods', question: "09. Based on the Tukey post hoc results, which pairs of study methods differ significantly from each other?", options: ["All three pairs differ significantly", "Only Flashcards vs. Group Study", "None of the pairs differ significantly", "Flashcards vs. Practice Tests AND Group Study vs. Practice Tests"], correctAnswer: 3, explanation: "The Tukey post hoc shows: Flashcards vs Group Study (p = .875, not sig.), Flashcards vs Practice Tests (p = .001, sig.), Group Study vs Practice Tests (p = .003, sig.). Two of the three pairs are significantly different." },
  { id: 10, scenarioKey: 'studyMethods', question: "10. Based on the post hoc results, do Flashcards and Group Study differ significantly?", options: ["Yes, because the mean difference is negative", "Yes, because p < .05", "No, because p = .875 is greater than .05", "No, because F = 9.48 is greater than .05"], correctAnswer: 2, explanation: "For the Flashcards vs. Group Study comparison, p = .875, which is well above .05. These two methods do not produce significantly different exam scores." },
  { id: 11, scenarioKey: 'studyMethods', question: "11. What does η² equal, and how would you interpret it?", options: ["η² = .09, a medium effect", "η² = .36, a large effect", "η² = .58, a large effect", "η² = .18, a medium effect"], correctAnswer: 1, explanation: "η² = SS_between / SS_total = 1180.06 / 3234.81 = .365 ≈ .36. By Cohen's guidelines, this is a large effect (> .14). Study method accounts for about 36% of the variance in exam scores." },
  // Block 3: Caffeine × Sleep 2×2 (Q12-Q19)
  { id: 12, scenarioKey: 'caffeineSleep', question: "12. What type of design is this?", options: ["A 2 × 2 between-subjects factorial design", "A one-way ANOVA with four groups", "A 2 × 2 repeated-measures design", "A mixed factorial design"], correctAnswer: 0, explanation: "This is a 2 × 2 (Caffeine × Sleep) between-subjects factorial design. Each participant is in only one of the four cells." },
  { id: 13, scenarioKey: 'caffeineSleep', question: "13. How many treatment conditions (cells) are in this design?", options: ["2", "3", "6", "4"], correctAnswer: 3, explanation: "A 2 × 2 design has 2 × 2 = 4 cells: (No Caffeine + Normal), (No Caffeine + Deprived), (Caffeine + Normal), (Caffeine + Deprived)." },
  { id: 14, scenarioKey: 'caffeineSleep', question: "14. Is the main effect of caffeine significant at α = .05?", options: ["No, because p = .007 is greater than .05", "Yes, because p = .007 is less than .05", "No, because F = 8.10 is greater than .05", "Yes, because caffeine has two levels"], correctAnswer: 1, explanation: "For the Caffeine main effect, F = 8.10 and p = .007. Since p < .05, the main effect of caffeine is statistically significant." },
  { id: 15, scenarioKey: 'caffeineSleep', question: "15. Is the Caffeine × Sleep interaction significant at α = .05?", options: ["Yes, because p = .042 is less than .05", "No, because p = .042 is greater than .05", "Yes, because F = 4.44 is greater than 1", "No, because the interaction SS is the smallest"], correctAnswer: 0, explanation: "For the interaction, F = 4.44 and p = .042. Since .042 < .05, the interaction is statistically significant." },
  { id: 16, scenarioKey: 'caffeineSleep', question: "16. What is η² for the sleep main effect?", options: ["η² = .12", "η² = .07", "η² = .29", "η² = .52"], correctAnswer: 2, explanation: "η² = SS_sleep / SS_total = 180.63 / 617.53 = .293 ≈ .29. Sleep condition accounts for about 29% of the total variance in errors — a large effect." },
  { id: 17, scenarioKey: 'caffeineSleep', question: "17. What does the significant interaction between caffeine and sleep mean?", options: ["Caffeine and sleep have no effect on errors", "Both main effects must be non-significant", "Only the sleep main effect matters", "The effect of caffeine on errors depends on the sleep condition"], correctAnswer: 3, explanation: "A significant interaction means the effect of one factor changes depending on the level of the other. Here, caffeine's effect on errors differs for normally-rested vs. sleep-deprived participants." },
  { id: 18, scenarioKey: 'caffeineSleep', question: "18. Looking at the cell means, what pattern does the interaction show?", options: ["Caffeine increases errors equally in both sleep conditions", "Caffeine reduces errors more for sleep-deprived participants (5.60 fewer) than for normally-rested participants (1.80 fewer)", "Sleep deprivation has no effect in the caffeine condition", "The cell means are all approximately equal"], correctAnswer: 1, explanation: "No Caffeine: normal=8.20, deprived=14.70 (diff=6.50). Caffeine: normal=6.40, deprived=9.10 (diff=2.70). Caffeine reduces errors more for sleep-deprived (14.70→9.10 = 5.60 reduction) than normal sleep (8.20→6.40 = 1.80 reduction)." },
  { id: 19, scenarioKey: 'caffeineSleep', question: "19. Since we rejected the null hypothesis for the interaction, what type of error might we be making?", options: ["Type I error", "Type II error", "Measurement error", "Standard error"], correctAnswer: 0, explanation: "When we reject H₀, we risk a Type I error — concluding there is an effect when there actually isn't. The probability of this error equals α = .05." },
  // Block 4: Gender × Exercise 2×3 (Q20-Q25)
  { id: 20, scenarioKey: 'genderExercise', question: "20. How many cells are in this factorial design?", options: ["2", "3", "6", "5"], correctAnswer: 2, explanation: "A 2 × 3 design has 2 × 3 = 6 cells (Male-None, Male-Moderate, Male-High, Female-None, Female-Moderate, Female-High)." },
  { id: 21, scenarioKey: 'genderExercise', question: "21. What is the degrees of freedom for the Gender × Exercise interaction?", options: ["1", "2", "3", "42"], correctAnswer: 1, explanation: "df_interaction = df_Gender × df_Exercise = (2−1)(3−1) = 1 × 2 = 2. You can also read it directly from the SPSS table." },
  { id: 22, scenarioKey: 'genderExercise', question: "22. Is the main effect of exercise significant at α = .05?", options: ["No, because F = 15.80 is greater than .05", "No, because p = .000 is less than .05", "Yes, because p (.000) is equal to or less than .05", "Yes, because there are three levels of exercise"], correctAnswer: 2, explanation: "For the Exercise main effect, F = 15.80 and Sig. = .000, which is less than .05. The main effect of exercise on anxiety is statistically significant." },
  { id: 23, scenarioKey: 'genderExercise', question: "23. Is the Gender × Exercise interaction significant?", options: ["No, because p = .812 is greater than .05", "Yes, because p = .812 is less than 1", "Yes, because there is a main effect of exercise", "No, because F = 0.21 is less than 1"], correctAnswer: 0, explanation: "For the interaction, F = 0.21 and p = .812, which is well above .05. The interaction is not significant." },
  { id: 24, scenarioKey: 'genderExercise', question: "24. What does the non-significant interaction tell us?", options: ["Gender has a significant effect on anxiety", "Exercise has no effect on anxiety", "The effect of exercise on anxiety does not depend on gender", "Post hoc tests are unnecessary"], correctAnswer: 2, explanation: "A non-significant interaction means the effect of one factor is roughly the same across levels of the other factor. Exercise affects anxiety similarly for males and females." },
  { id: 25, scenarioKey: 'genderExercise', question: "25. If you graphed the cell means, what would you expect to see?", options: ["Lines that cross each other", "A single flat line", "All points at the same value", "Roughly parallel lines"], correctAnswer: 3, explanation: "A non-significant interaction means the lines in an interaction plot would be approximately parallel, indicating the effect of exercise is similar for both genders." },
  // Standalone Conceptual (Q26-Q30)
  { id: 26, question: "26. Why do researchers use ANOVA instead of conducting multiple t-tests when comparing three or more groups?", options: ["t-tests cannot compare means from different groups", "Multiple t-tests inflate the experimentwise Type I error rate beyond alpha", "ANOVA is always more powerful than t-tests", "t-tests require larger sample sizes than ANOVA"], correctAnswer: 1, explanation: "Each t-test carries its own α risk. With 3 groups, you'd need 3 comparisons, and the combined (experimentwise) error rate rises to about .14 — well above .05. ANOVA keeps the overall α at the stated level." },
  { id: 27, question: "27. When the null hypothesis is true (no treatment effect), the expected value of the F-ratio is approximately:", options: ["0", "Less than 1", "1.00", "Greater than the critical value"], correctAnswer: 2, explanation: "When H₀ is true, both MS_between and MS_within estimate the same error variance, so F = MS_between / MS_within ≈ 1.00." },
  { id: 28, question: "28. In a two-factor ANOVA, the error term (denominator) for ALL three F-ratios is:", options: ["MS_A", "MS_AxB", "MS_between", "MS_within"], correctAnswer: 3, explanation: "MS_within serves as the error term for the main effect of A, the main effect of B, and the A × B interaction. All three F-ratios use MS_within in the denominator." },
  { id: 29, question: "29. A post hoc test (such as Tukey's HSD) is needed when:", options: ["The F-ratio is significant and there are more than two treatment conditions", "The F-ratio is not significant", "You have a 2 × 2 factorial design", "The effect size is small"], correctAnswer: 0, explanation: "A significant F with more than two groups tells you at least one mean differs, but not which ones. Post hoc tests make pairwise comparisons to find the specific differences." },
  { id: 30, question: "30. A key advantage of a factorial design over running separate single-factor experiments is:", options: ["It always produces larger F-ratios", "It can detect interactions between factors, which separate experiments cannot", "It requires fewer participants total", "It eliminates the need for post hoc tests"], correctAnswer: 1, explanation: "The defining advantage of factorial designs is the ability to examine how factors combine — the interaction effect. Separate experiments would completely miss this." },
];

/* ====== SHUFFLE HELPER ====== */
function shuffleOptions(q) {
  const indices = q.options.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return {
    ...q,
    options: indices.map(i => q.options[i]),
    correctAnswer: indices.indexOf(q.correctAnswer),
    _originalOrder: indices,
  };
}

/* ====== COMPONENT ====== */
export const PracticeExam3 = ({ onBack }) => {
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
      setCurrentIdx(currentIdx + 1);
      const nextSaved = answeredQuestions[currentIdx + 1];
      setSelectedAnswer(nextSaved ? nextSaved.selected : null);
      setIsSubmitted(!!nextSaved);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      const prevSaved = answeredQuestions[currentIdx - 1];
      setSelectedAnswer(prevSaved ? prevSaved.selected : null);
      setIsSubmitted(!!prevSaved);
    }
  };

  const activeState = savedState || (isSubmitted ? { selected: selectedAnswer, correct: selectedAnswer === current.correctAnswer } : null);

  /* ====== LANDING PAGE ====== */
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4 sm:p-6 flex items-center justify-center">
        <Card className="border-2 border-primary/10 max-w-2xl w-full">
          <CardContent className="p-8 space-y-6">
            <Button variant="ghost" size="sm" onClick={onBack} data-testid="pe3-back-btn" className="text-muted-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Chapters
            </Button>
            <div className="text-center space-y-4">
              <Badge variant="secondary" className="text-sm px-4 py-1">Practice Exam</Badge>
              <h1 className="text-3xl font-bold text-foreground">Practice Exam 3</h1>
              <p className="text-sm text-muted-foreground italic">PSYC 2001 Statistical Methods in Psych — David J. Hardy, Ph.D., Spring 2026</p>
              <div className="p-4 rounded-lg bg-muted/50 text-left space-y-2 text-sm text-muted-foreground">
                <p>This exam is comprised of <strong className="text-foreground">30 multiple-choice questions</strong> based on material from <strong className="text-foreground">Chapters 12-13</strong> and SPSS instruction.</p>
                <p>Be sure to answer each question. Note that <strong className="text-foreground">any question about null hypothesis testing (NHT) is based on a two-tailed (or two-sided) test</strong>.</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">30 Questions</Badge>
                <Badge variant="outline">Chapters 12-13</Badge>
                <Badge variant="outline">SPSS Output</Badge>
              </div>
              <Button size="lg" onClick={() => setStarted(true)} data-testid="pe3-start-btn" className="mt-4">
                Start Exam <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ====== RESULTS PAGE ====== */
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
              <Button variant="outline" onClick={onBack} data-testid="pe3-results-home"><Home className="w-4 h-4 mr-2" />Home</Button>
              <Button onClick={() => { setStarted(false); setCurrentIdx(0); setSelectedAnswer(null); setIsSubmitted(false); setAnsweredQuestions({}); setShowResults(false); }} data-testid="pe3-results-retry"><RotateCcw className="w-4 h-4 mr-2" />Retry</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ====== QUESTION PAGE ====== */
  const ScenarioComponent = current.scenarioKey ? scenarioMap[current.scenarioKey] : null;

  return (
    <div className="min-h-screen flex flex-col p-4 sm:p-6 bg-gradient-to-br from-background via-background to-muted">
      <div className="w-full max-w-4xl mx-auto space-y-4 flex-1">
        {/* Back button */}
        <Button variant="ghost" size="sm" onClick={onBack} data-testid="pe3-quiz-back-btn" className="text-muted-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Chapters
        </Button>

        {/* Progress */}
        <div className="space-y-2 fade-in">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Question {currentIdx + 1} of {totalQ}</span>
            <span className="text-muted-foreground">{correctCount} correct</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* SPSS Scenario */}
        {ScenarioComponent && <ScenarioComponent />}

        {/* Question */}
        <Card className="border-2 border-primary/10">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground leading-relaxed" data-testid="pe3-question-text">{current.question}</h3>
            <div className="space-y-2">
              {current.options.map((opt, idx) => {
                const letter = String.fromCharCode(97 + idx);
                let optClass = 'border-2 border-border hover:border-primary/50';
                if (activeState) {
                  if (idx === current.correctAnswer) optClass = 'border-2 border-emerald-500 bg-emerald-500/10';
                  else if (idx === activeState.selected && !activeState.correct) optClass = 'border-2 border-rose-500 bg-rose-500/10';
                  else optClass = 'border-2 border-border opacity-50';
                } else if (selectedAnswer === idx) {
                  optClass = 'border-2 border-primary bg-primary/10';
                }
                return (
                  <button key={idx} onClick={() => handleSelect(idx)} disabled={!!activeState}
                    data-testid={`pe3-option-${letter}`}
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

            {/* Explanation */}
            {activeState && (
              <div className={`p-4 rounded-lg ${activeState.correct ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-rose-500/10 border border-rose-500/20'}`}>
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{current.explanation}</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <Button variant="outline" onClick={handlePrevious} disabled={currentIdx === 0} data-testid="pe3-prev-btn">
                <ChevronLeft className="w-4 h-4 mr-1" /> Previous
              </Button>
              {!activeState ? (
                <Button onClick={handleSubmit} disabled={selectedAnswer === null} data-testid="pe3-submit-btn">Submit</Button>
              ) : (
                <Button onClick={handleNext} data-testid="pe3-next-btn">
                  {currentIdx < totalQ - 1 ? <>Next <ChevronRight className="w-4 h-4 ml-1" /></> : 'Finish Exam'}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PracticeExam3;
