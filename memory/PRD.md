# PSYC 2001 Study Guide App - PRD

## Original Problem Statement
A private tutor needs a web application to help a student study for statistics exams (PSYC 2001 at LMU). Structured by chapters from "Essentials of Statistics for the Behavioral Sciences, 10th Edition."

## Tech Stack
React.js, Tailwind CSS, Shadcn/UI, FastAPI (health check only). All content client-side.

## Implemented Chapters (All Study + Quiz)
| Ch | Topic | NHT Example | Calculator | Quiz |
|----|-------|-------------|------------|------|
| 1 | Intro to Statistics | - | - | 15Q |
| 2 | Frequency Distributions | - | - | 15Q |
| 3 | Central Tendency | - | - | 15Q |
| 4 | Z-Scores | - | Z-Score calc | 25Q |
| 8 | Hypothesis Testing | Ex 8.1 | - | 15Q |
| 9 | t Statistic | Ex 9.2 | - | 15Q |
| 10 | Independent t | Ex 10.2 | Pooled Variance | 15Q |
| 11 | Repeated-Measures t | Ex 11.2 | RM t calc | 15Q |
| 12 | One-Way ANOVA | Ex 12.1 | ANOVA calc | 15Q |
| 13 | Two-Factor ANOVA | - | Two-Factor calc | 15Q |
| 14 | Correlation & Regression | - | r, r², regression | 15Q |

## Other Features
- **Practice Exam 3**: 30 MCQ with SPSS output scenarios (Ch 12-13)
- **Glossary**: Chapters 1-13 (Ch 14 deferred)
- **Quiz UX**: Back button, direct quiz launch, progress bar, Previous/Next, answer shuffling

## Backlog
### P1
- [ ] Glossary terms for Ch 14
- [ ] Deployment fix (restart loop)
### P2
- [ ] Split chaptersData.js into per-chapter files
- [ ] Progress persistence (localStorage)
- [ ] Additional practice exams
- [ ] Timed practice mode
