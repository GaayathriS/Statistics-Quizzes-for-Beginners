# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams (PSYC 2001 at LMU). The app is structured into chapters matching the textbook "Essentials of Statistics for the Behavioral Sciences, 10th Edition." The current focus is on **Exam 2** covering Chapters 8-12.

## User Persona
- **Primary User**: Psychology student preparing for statistics exams
- **Secondary User**: Private tutor helping student study

## Core Requirements
1. Multi-chapter quiz and study guide application
2. Each chapter can be a quiz, study guide, or both
3. NHT (Null Hypothesis Testing) example walkthroughs with step-by-step explanations
4. Interactive calculators for key computations
5. Comprehensive glossary organized by chapter
6. Consistent quiz UI with Previous/Submit/Next navigation and progress bar
7. Balanced answer distribution across A/B/C/D options

## Tech Stack
- React.js, Tailwind CSS, Lucide React icons, Shadcn/UI
- FastAPI (Backend - minimal, health check only)
- All content stored client-side in `chaptersData.js`

## What's Been Implemented

### Quiz-Only Chapters
- Chapter 1: Introduction to Statistics (15 questions)
- Chapter 2: Frequency Distributions (15 questions)
- Chapter 3: Central Tendency (15 questions)

### Study + Quiz Chapters (Exam 2 Focus)
- **Chapter 4**: Z-Scores — Calculator, bell curve, normal table guide, 25 quiz questions
- **Chapter 8**: Introduction to Hypothesis Testing — Key Concepts, **Example 8.1** (Red Shirt Study, z-test), 15 quiz questions
- **Chapter 9**: Introduction to the t Statistic — Key Concepts (t vs z, t distribution, r², CI), **Example 9.2** (eReader Alertness, single-sample t), 15 quiz questions
- **Chapter 10**: The t Test for Two Independent Samples — Concepts, **Example 10.2** (Lighting & Dishonesty), Levene's Test, Pooled Variance Calculator, 15 quiz questions
- **Chapter 11**: The t Test for Two Related Samples — Concepts (repeated-measures vs independent, comparison table), **Example 11.2** (eReader repeated-measures), Repeated-Measures t Calculator, 15 quiz questions
- **Chapter 12**: Introduction to Analysis of Variance (ANOVA) — Key Concepts (Why ANOVA, Logic, SS Partitioning, η², Post Hoc Tests), **Example 12.1** (Sleep Deprivation & Cognitive Errors), One-Way ANOVA Calculator, 15 quiz questions

### NHT Example Walkthroughs (Feb 2026)
Each follows the 4-step process with collapsible sections:
| Example | Design | Key Data | Result |
|---------|--------|----------|--------|
| 8.1 Red Shirt | z-test | μ=16, σ=3, n=36, M=17.2 | z=+2.40, reject H₀ |
| 9.2 eReader | Single-sample t | μ=50, n=9, M=46, SS=162 | t=−2.67, reject H₀ |
| 10.2 Lighting | Independent t | n₁=8 M₁=8, n₂=8 M₂=12 | t=−2.67, reject H₀ |
| 11.2 eReader RM | Repeated-measures t | n=9, M_D=4, SS=162 | t=+2.67, reject H₀ |
| 12.1 Sleep Deprivation | One-way ANOVA | k=3, n=5 each, M₁=5, M₂=3, M₃=1 | F=10.00, reject H₀, η²=.625 |

### Glossary (Chapters 1-11)
- Chapters 1-11: Fully populated
- Chapter 12: Pending (user deferred to later)

### Quiz UI Features
- Progress bar at top, Previous/Submit/Next navigation
- Saved answer state when navigating back
- Balanced answer distribution across A/B/C/D

## Architecture
```
/app/frontend/src/
  App.js                                # Main router
  data/chaptersData.js                  # All content
  components/
    QuizWelcome.jsx                     # Chapter list
    QuizQuestion.jsx                    # Quiz with Previous/Submit/Next
    QuizResults.jsx                     # Results summary
    Chapter4ZScores.jsx                 # Ch4 study
    Chapter8HypothesisTesting.jsx       # Ch8 study + Example 8.1
    Chapter9TStatistic.jsx              # Ch9 study + Example 9.2
    Chapter10IndependentT.jsx           # Ch10 study + Example 10.2
    Chapter11RepeatedMeasures.jsx       # Ch11 study + Example 11.2 + Calculator
    Chapter12ANOVA.jsx                  # Ch12 study + Example 12.1 + ANOVA Calculator
    Chapter5Glossary.jsx                # Glossary (Ch 1-11)
```

## Prioritized Backlog

### P0 (Done)
- [x] All chapter quizzes (1-4, 8-12)
- [x] Study sections for Ch 4, 8, 9, 10, 11, 12
- [x] NHT walkthroughs for Examples 8.1, 9.2, 10.2, 11.2, 12.1
- [x] Glossary for Chapters 1-11
- [x] Balanced answer distributions
- [x] Previous/Submit/Next quiz navigation

### P1 (Upcoming)
- [ ] Glossary terms for Chapter 12 (ANOVA)
- [ ] Practice Exam Mode (random questions from Chapters 8-12)
- [ ] Deployment fix (restart loop issue)

### P2 (Future)
- [ ] Split chaptersData.js into chapter-specific files
- [ ] Progress persistence (localStorage)
- [ ] Timed practice mode
- [ ] Print-friendly study guide export
- [ ] Additional chapters as course progresses
