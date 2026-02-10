# Statistics Quiz Application

An interactive and gamified quiz application based on **Chapter 1: Introduction to Statistics** from the textbook *"Essentials of Statistics for the Behavioral Sciences, Tenth Edition"*.

## Features

### 🎯 Interactive Learning Experience
- **15 Comprehensive Questions** covering all major topics from Chapter 1
- **Multiple Choice Format** with instant feedback
- **Detailed Explanations** for every answer
- **Progress Tracking** with visual progress bar

### 🏆 Gamification Elements
- **Points System** - Earn points based on question difficulty (10/15/20 pts)
- **Achievement Badges** - Unlock badges like "Perfect Score", "Statistics Ace", "Quick Scholar"
- **Performance Grading** - Get letter grades (A+ to F) based on your score
- **Time Tracking** - Monitor how long you take to complete the quiz

### 📚 Topics Covered
- **Basic Definitions** - Statistics, populations, samples, parameters
- **Populations and Samples** - Understanding sampling error
- **Types of Statistics** - Descriptive vs. Inferential statistics
- **Variable Types** - Discrete vs. Continuous variables
- **Scales of Measurement** - Nominal, Ordinal, Interval, Ratio
- **Research Methods** - Correlational, Experimental, Nonexperimental
- **Statistical Notation** - Symbols and summation notation
- **Measurement Concepts** - Operational definitions, constructs

## Design System

### Color Palette
- **Primary (Teal/Cyan)**: `#0EA5E9` - Engagement and primary actions
- **Secondary (Trust Blue)**: `#3B82F6` - Academic and data elements
- **Accent (Warm Orange)**: `#F59E0B` - Rewards and highlights
- **Success (Calm Green)**: `#10B981` - Correct answers and achievements

### Typography
- **Headings**: Space Grotesk (Modern, tech-forward)
- **Body Text**: Inter (Clean, readable)

### Design Features
- Clean, modern card-based layout
- Smooth animations and transitions
- Microinteractions on hover and click
- Responsive design for all screen sizes
- Accessible color contrasts (WCAG AA compliant)

## User Flow

1. **Welcome Screen**
   - Introduction to the quiz
   - Display of features and topics
   - Start button to begin

2. **Quiz Questions**
   - One question at a time
   - Select answer from 4 options
   - Submit to receive instant feedback
   - View explanation before moving forward
   - Track progress and score

3. **Results Screen**
   - Circular score indicator with percentage
   - Letter grade assignment
   - Detailed statistics (correct count, points, time)
   - Unlocked achievement badges
   - Question-by-question review
   - Option to retake quiz

## Technology Stack

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **Lucide React** - Icon library
- **Radix UI** - Accessible primitives

### Design Tools
- Custom design system with HSL color tokens
- CSS animations and transitions
- Responsive utilities

## Getting Started

The application is already running at `http://localhost:3000`

### Key Files
- `/app/frontend/src/App.js` - Main application component
- `/app/frontend/src/data/quizData.js` - Quiz questions and badge configuration
- `/app/frontend/src/components/QuizWelcome.jsx` - Welcome screen
- `/app/frontend/src/components/QuizQuestion.jsx` - Question display
- `/app/frontend/src/components/QuizResults.jsx` - Results screen
- `/app/frontend/src/index.css` - Design system tokens

## Badge System

Earn badges by meeting specific criteria:

- 🏆 **Perfect Score** - Get 100% on the quiz
- ⭐ **Statistics Ace** - Score 90% or higher
- ⚡ **Quick Scholar** - Complete in under 3 minutes
- 💪 **Persistent Learner** - Complete all questions
- 🎯 **Notation Expert** - Get all notation questions correct

## Performance Messages

The app provides motivational feedback based on your score:
- **100%**: "Perfect Score! Outstanding! You've mastered Chapter 1 concepts!"
- **90-99%**: "Excellent Work! You have a strong understanding of statistics fundamentals!"
- **80-89%**: "Great Job! You're doing well! Just a few concepts to review."
- **70-79%**: "Good Effort! You're on the right track. Review the material and try again!"
- **60-69%**: "Keep Learning! You're making progress. Spend more time reviewing Chapter 1."
- **Below 60%**: "Keep Trying! Statistics takes practice. Review Chapter 1 and retake the quiz!"

## Testing

All features have been comprehensively tested:
- ✅ Welcome page display and navigation
- ✅ Quiz flow and question display
- ✅ Answer selection and feedback system
- ✅ Score tracking and calculation
- ✅ Results page and statistics
- ✅ Badge awarding logic
- ✅ Retake functionality
- ✅ Responsive design
- ✅ Visual animations and transitions

## Notes

This is a **frontend prototype** with all functionality implemented using React state management. No backend is required for the quiz to function - all questions, answers, and scoring logic are handled on the frontend.

---

**Made with Emergent** 🚀
