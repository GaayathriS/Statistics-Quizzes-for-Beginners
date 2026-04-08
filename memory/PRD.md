# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams (PSYC 2001 at LMU). The app is structured into chapters matching the textbook "Essentials of Statistics for the Behavioral Sciences, 10th Edition."

## Tech Stack
- React.js, Tailwind CSS, Lucide React icons, Shadcn/UI
- FastAPI (Backend - minimal, health check only)
- All content stored client-side in `chaptersData.js`

## What's Been Implemented

### All Chapters (Study + Quiz format)
- **Chapter 1**: Introduction to Statistics — Key Concepts (6 cards), 15 quiz questions
- **Chapter 2**: Frequency Distributions — Key Concepts (6 cards), 15 quiz questions
- **Chapter 3**: Central Tendency — Key Concepts (6 cards), 15 quiz questions
- **Chapter 4**: Z-Scores — Calculator, bell curve, normal table guide, 25 quiz questions
- **Chapter 8**: Hypothesis Testing — Key Concepts, **Example 8.1** NHT, 15 quiz questions
- **Chapter 9**: The t Statistic — Key Concepts, **Example 9.2** NHT, 15 quiz questions
- **Chapter 10**: Independent t Test — Concepts, **Example 10.2** NHT, Pooled Variance Calculator, 15 quiz questions
- **Chapter 11**: Repeated-Measures t — Concepts, **Example 11.2** NHT, Calculator, 15 quiz questions
- **Chapter 12**: One-Way ANOVA — Concepts, **Example 12.1** NHT, ANOVA Calculator, 15 quiz questions
- **Chapter 13**: Two-Factor ANOVA — Concepts (factorial design, main effects, interactions, SS partitioning, F-ratios, η²), Two-Factor ANOVA Calculator, 15 quiz questions, NO NHT example

### Quiz UX
- Back to Chapters button on quiz screen
- Quiz tab in study chapters directly starts quiz (no intermediate landing page)
- Progress bar, Previous/Submit/Next navigation
- Balanced answer distributions across A/B/C/D

### Glossary (Chapters 1-13)
- All chapters 1-13 fully populated with terms
- Ch 12: 16 ANOVA terms (F-ratio, eta squared, Tukey's HSD, etc.)
- Ch 13: 8 Two-Factor ANOVA terms (factorial design, main effect, interaction, simple main effects, etc.)
- Basic/cross-cutting terms (effect size) added to Ch 8

## Architecture
```
/app/frontend/src/
  App.js
  data/chaptersData.js
  components/
    GenericChapterStudy.jsx         # Reusable for Ch 1, 2, 3
    Chapter4ZScores.jsx
    Chapter8HypothesisTesting.jsx
    Chapter9TStatistic.jsx
    Chapter10IndependentT.jsx
    Chapter11RepeatedMeasures.jsx
    Chapter12ANOVA.jsx
    Chapter13TwoFactorANOVA.jsx
    Chapter5Glossary.jsx
    QuizWelcome.jsx / QuizQuestion.jsx / QuizResults.jsx
```

## Prioritized Backlog

### P1 (Upcoming)
- [ ] Practice Exam Mode (random questions from Chapters 8-13)
- [ ] Deployment fix (restart loop issue)

### P2 (Future)
- [ ] Split chaptersData.js into chapter-specific files
- [ ] Progress persistence (localStorage)
- [ ] Timed practice mode
- [ ] Print-friendly study guide export
- [ ] Additional chapters as course progresses
