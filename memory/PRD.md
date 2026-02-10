# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs to help a student understand z-scores better for their upcoming PSYC 2001 (Statistical Methods for Psychology) Exam 1 at LMU. The exam is MCQ format, covers Chapters 1-7, and is happening tomorrow.

## User Persona
- **Primary User**: Psychology student preparing for statistics exam
- **Secondary User**: Private tutor helping student study

## Core Requirements
1. Visual explanations of z-scores with bell curve
2. Real-world analogies for conceptual understanding
3. Interactive z-score calculator with step-by-step solutions
4. Normal table guide (Table B.1)
5. Exam 1 practice MCQs covering all exam topics

## What's Been Implemented (Jan 2026)

### Section 1: Z-Score Concepts
- Interactive bell curve visualization with 68-95-99.7 rule
- 4 key concept cards explaining z-score fundamentals
- 3 real-world analogies (basketball height, test scores, unusualness meter)
- Formula summary with population vs sample notation

### Section 2: Z-Score Calculator
- Bidirectional calculator (X→z and z→X)
- Step-by-step solution display
- Visual bell curve showing z-score position
- Practice problems included

### Section 3: Normal Table Guide
- How to read Table B.1 (Columns A, B, C)
- Common z-scores reference table
- Exam tips for using the table

### Section 4: Exam 1 Practice
- 25 MCQ questions covering all Exam 1 topics:
  - Z-Scores (7 questions)
  - Normal Distribution (3 questions)
  - Central Tendency (2 questions)
  - Variability (3 questions)
  - Sampling (2 questions)
  - Measurement Scales (3 questions)
  - Sampling Distributions (3 questions)
  - Research Methods (2 questions)
- Category filter
- Score tracking
- Detailed explanations for each answer
- Progress indicator

## Tech Stack
- React.js (Frontend)
- Tailwind CSS (Styling)
- Lucide React (Icons)
- No backend needed (all data client-side)

## Prioritized Backlog
### P0 (Done)
- [x] Z-score visual explanations
- [x] Interactive calculator
- [x] Exam practice MCQs

### P1 (Future)
- [ ] Add more practice questions
- [ ] Timed practice mode (60 min for 25 questions like real exam)
- [ ] Print-friendly cheat sheet generator
- [ ] SPSS output interpretation practice

### P2 (Nice to have)
- [ ] Progress persistence (localStorage)
- [ ] Dark/light mode toggle
- [ ] Additional chapters for future exams
