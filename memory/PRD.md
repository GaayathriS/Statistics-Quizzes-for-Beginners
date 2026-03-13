# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams. The app is structured into chapters matching a statistics textbook, with quizzes, study guides, and a glossary.

## User Persona
- **Primary User**: Psychology student preparing for statistics exams
- **Secondary User**: Private tutor helping student study

## Core Requirements
1. Multi-chapter quiz and study guide application
2. Each chapter can be a quiz, study guide, or both
3. Interactive calculators and visual explanations for key chapters
4. Comprehensive glossary organized by chapter
5. Consistent quiz interface across all chapters

## Tech Stack
- React.js (Frontend), Tailwind CSS, Lucide React icons
- FastAPI (Backend - minimal, health check only)
- All content stored client-side in `chaptersData.js`

## What's Been Implemented

### Chapters with Quizzes Only
- Chapter 1: Introduction to Statistics (15 questions)
- Chapter 2: Frequency Distributions (15 questions)
- Chapter 3: Central Tendency (15 questions)
- Chapter 8: Introduction to Hypothesis Testing (15 questions)
- Chapter 9: Introduction to the t Statistic (15 questions)

### Study + Quiz Chapters
- Chapter 4: Z-Scores — Interactive calculator, bell curve visualization, normal table guide, 25 quiz questions
- Chapter 10: The t Test for Two Independent Samples — Concepts, Levene's Test explanation, Pooled Variance Calculator, 15 quiz questions (Completed Feb 2026)

### Glossary
- Chapters 1-7: Fully populated with terms
- Chapters 8 & 9: Empty (by user request, to be added later)
- Chapter 10: Not yet added

## Architecture
```
/app/frontend/src/
  App.js                              # Main router (welcome, chapter4, chapter10, chapter5, quiz, results)
  data/chaptersData.js                # All content: chapters array, glossaries, question arrays
  components/
    QuizWelcome.jsx                   # Chapter list / home screen
    QuizQuestion.jsx                  # Quiz question display
    QuizResults.jsx                   # Quiz results summary
    Chapter4ZScores.jsx               # Ch4 study view
    Chapter10IndependentT.jsx         # Ch10 study view (Concepts, Levene's, Calculator)
    Chapter5Glossary.jsx              # Glossary view
```

## Prioritized Backlog

### P0 (Done)
- [x] All chapter quizzes (1-4, 8-10)
- [x] Chapter 4 study section
- [x] Chapter 10 study section
- [x] Glossary for Chapters 1-7

### P1 (Upcoming)
- [ ] Add glossary terms for Chapters 8 & 9
- [ ] Add glossary terms for Chapter 10

### P2 (Future)
- [ ] Add more chapters as textbook progresses
- [ ] Split chaptersData.js into chapter-specific files for maintainability
- [ ] Progress persistence (localStorage)
- [ ] Timed practice mode
