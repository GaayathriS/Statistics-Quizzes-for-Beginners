# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams (PSYC 2001 at LMU). The app is structured into chapters matching the textbook "Essentials of Statistics for the Behavioral Sciences, 10th Edition."

## Tech Stack
- React.js, Tailwind CSS, Lucide React icons, Shadcn/UI
- FastAPI (Backend - minimal, health check only)
- All content stored client-side

## What's Been Implemented

### All Chapters (Study + Quiz format)
- **Ch 1**: Introduction to Statistics — Key Concepts, 15 quiz questions
- **Ch 2**: Frequency Distributions — Key Concepts, 15 quiz questions
- **Ch 3**: Central Tendency — Key Concepts, 15 quiz questions
- **Ch 4**: Z-Scores — Calculator, bell curve, normal table guide, 25 quiz questions
- **Ch 8**: Hypothesis Testing — Key Concepts, Example 8.1 NHT, 15 quiz questions
- **Ch 9**: The t Statistic — Key Concepts, Example 9.2 NHT, 15 quiz questions
- **Ch 10**: Independent t Test — Concepts, Example 10.2 NHT, Calculator, 15 quiz questions
- **Ch 11**: Repeated-Measures t — Concepts, Example 11.2 NHT, Calculator, 15 quiz questions
- **Ch 12**: One-Way ANOVA — Concepts, Example 12.1 NHT, ANOVA Calculator, 15 quiz questions
- **Ch 13**: Two-Factor ANOVA — Concepts, Two-Factor Calculator, 15 quiz questions (no NHT)

### Practice Exams
- **Practice Exam 3** (Chapters 12-13): 30 MCQ in real exam format with SPSS output scenarios
  - Block 1 (Q01-06): One-Way ANOVA — Therapy & Stress (Descriptives + ANOVA table)
  - Block 2 (Q07-11): One-Way ANOVA with Tukey HSD — Study Methods & Exam Scores
  - Block 3 (Q12-19): Two-Factor 2×2 — Caffeine × Sleep Deprivation (full factorial output)
  - Block 4 (Q20-25): Two-Factor 2×3 — Gender × Exercise (non-significant interaction)
  - Block 5 (Q26-30): Standalone conceptual questions

### Glossary (Chapters 1-13)
- All chapters fully populated

### Quiz UX
- Back to Chapters button on all quiz/exam screens
- Direct quiz launch from study chapter tabs
- Progress bar, Previous/Submit/Next navigation
- Answer shuffling, balanced distributions

## Architecture
```
/app/frontend/src/
  App.js
  data/chaptersData.js
  components/
    GenericChapterStudy.jsx
    Chapter4ZScores.jsx
    Chapter8-13 study components
    Chapter5Glossary.jsx
    PracticeExam3.jsx
    QuizWelcome/QuizQuestion/QuizResults.jsx
```

## Prioritized Backlog
### P1 (Upcoming)
- [ ] Deployment fix (restart loop)
### P2 (Future)
- [ ] Split chaptersData.js into per-chapter files
- [ ] Progress persistence (localStorage)
- [ ] Additional practice exams as course progresses
- [ ] Timed practice mode
- [ ] Print-friendly study guide export
