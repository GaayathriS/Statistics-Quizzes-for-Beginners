# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams (PSYC 2001 at LMU). The app is structured into chapters matching the textbook "Essentials of Statistics for the Behavioral Sciences, 10th Edition." The current focus is on **Exam 2** covering Chapters 8-11, scheduled for March 23rd.

## User Persona
- **Primary User**: Psychology student preparing for statistics exams
- **Secondary User**: Private tutor helping student study

## Core Requirements
1. Multi-chapter quiz and study guide application
2. Each chapter can be a quiz, study guide, or both
3. Interactive calculators and visual explanations for key chapters
4. Comprehensive glossary organized by chapter (terms from study guide)
5. Consistent quiz interface with Previous/Submit/Next navigation
6. Answer positions should be varied (not biased toward one option)

## Tech Stack
- React.js (Frontend), Tailwind CSS, Lucide React icons, Shadcn/UI
- FastAPI (Backend - minimal, health check only)
- All content stored client-side in `chaptersData.js`

## What's Been Implemented

### Chapters with Quizzes Only
- Chapter 1: Introduction to Statistics (15 questions)
- Chapter 2: Frequency Distributions (15 questions)
- Chapter 3: Central Tendency (15 questions)
- Chapter 8: Introduction to Hypothesis Testing (15 questions) - answers balanced
- Chapter 9: Introduction to the t Statistic (15 questions) - answers balanced
- Chapter 10 quiz: 15 questions accessible from study view - answers balanced

### Study + Quiz Chapters
- Chapter 4: Z-Scores — Interactive calculator, bell curve, normal table guide, 25 quiz questions
- Chapter 10: The t Test for Two Independent Samples — Concepts, Levene's Test, Pooled Variance Calculator, 15 quiz questions

### Glossary (Chapters 1-11)
- Chapters 1-7: Fully populated
- Chapter 8: 11 terms (hypothesis testing, null/alternative hypotheses, alpha, Type I/II errors, power, etc.)
- Chapter 9: 7 terms (estimated standard error, t statistic, df, t distribution, r², hypotheses)
- Chapter 10: 6 terms (independent-measures design, pooled variance, estimated standard error, hypotheses)
- Chapter 11: 6 terms (repeated-measures design, difference scores, estimated standard error, hypotheses)

### Quiz UI Features (Feb 2026)
- Progress bar at top showing question X of Y
- Previous button (bottom left) to review earlier questions
- Submit button (bottom right) to answer
- Next button to advance after feedback
- Saved answer state when navigating back (read-only review)

## Architecture
```
/app/frontend/src/
  App.js                              # Main router with quiz state management
  data/chaptersData.js                # All content: chapters, glossaries, questions
  components/
    QuizWelcome.jsx                   # Chapter list / home screen
    QuizQuestion.jsx                  # Quiz with Previous/Submit/Next navigation
    QuizResults.jsx                   # Results summary
    Chapter4ZScores.jsx               # Ch4 study view
    Chapter10IndependentT.jsx         # Ch10 study view
    Chapter5Glossary.jsx              # Glossary (Chapters 1-11)
```

## Prioritized Backlog

### P0 (Done)
- [x] All chapter quizzes (1-4, 8-10)
- [x] Chapter 4 and 10 study sections
- [x] Glossary for Chapters 1-11
- [x] Balanced answer distribution for Ch 8-10
- [x] Previous/Submit/Next quiz navigation

### P1 (Upcoming)
- [ ] Create Chapter 11 (The t Test for Two Related Samples) - Study + Quiz

### P2 (Future)
- [ ] Add more chapters as textbook progresses
- [ ] Split chaptersData.js into chapter-specific files
- [ ] Progress persistence (localStorage)
- [ ] Timed practice mode
