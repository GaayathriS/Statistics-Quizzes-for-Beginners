// Chapter 1: Introduction to Statistics - Quiz Questions

export const quizQuestions = [
  {
    id: 1,
    question: "What is the definition of statistics?",
    options: [
      "A set of mathematical procedures for organizing, summarizing, and interpreting information",
      "A collection of numerical data only",
      "The study of populations in biology",
      "A method for collecting survey responses"
    ],
    correctAnswer: 0,
    explanation: "Statistics is a set of mathematical procedures for organizing, summarizing, and interpreting information. It's not limited to just numerical data or specific fields.",
    difficulty: "easy",
    topic: "Basic Definitions",
    points: 10
  },
  {
    id: 2,
    question: "What is the difference between a population and a sample?",
    options: [
      "There is no difference",
      "A population is the entire group of interest; a sample is a subset of that population",
      "A sample is larger than a population",
      "A population is always numerical data"
    ],
    correctAnswer: 1,
    explanation: "A population is the set of all individuals of interest in a particular study, while a sample is a set of individuals selected from that population, usually intended to represent the population.",
    difficulty: "easy",
    topic: "Populations and Samples",
    points: 10
  },
  {
    id: 3,
    question: "Which term describes a characteristic of a population?",
    options: [
      "Statistic",
      "Parameter",
      "Variable",
      "Sample"
    ],
    correctAnswer: 1,
    explanation: "A parameter is a characteristic that describes a population, while a statistic describes a sample.",
    difficulty: "easy",
    topic: "Parameters and Statistics",
    points: 10
  },
  {
    id: 4,
    question: "What is sampling error?",
    options: [
      "An error made by the researcher during data collection",
      "The naturally occurring discrepancy between a sample statistic and the corresponding population parameter",
      "A mistake in calculating statistics",
      "An error in the measurement instrument"
    ],
    correctAnswer: 1,
    explanation: "Sampling error is the naturally occurring discrepancy or error that exists between a sample statistic and the corresponding population parameter. It occurs because samples cannot perfectly represent populations.",
    difficulty: "medium",
    topic: "Sampling Error",
    points: 15
  },
  {
    id: 5,
    question: "Which type of statistics is used to summarize and organize data?",
    options: [
      "Inferential statistics",
      "Descriptive statistics",
      "Parametric statistics",
      "Correlational statistics"
    ],
    correctAnswer: 1,
    explanation: "Descriptive statistics are procedures used to summarize, organize, and simplify data. Inferential statistics, on the other hand, use sample data to make general statements about a population.",
    difficulty: "easy",
    topic: "Types of Statistics",
    points: 10
  },
  {
    id: 6,
    question: "A continuous variable is:",
    options: [
      "A variable with separate, indivisible categories",
      "A variable for which there are an infinite number of possible values between any two observed values",
      "A variable that can only be measured in whole numbers",
      "A variable that is always categorical"
    ],
    correctAnswer: 1,
    explanation: "A continuous variable is one for which there are an infinite number of possible values that fall between any two observed values. It is divisible into an infinite number of fractional parts.",
    difficulty: "medium",
    topic: "Variable Types",
    points: 15
  },
  {
    id: 7,
    question: "Which scale of measurement has an arbitrary zero point?",
    options: [
      "Nominal scale",
      "Ordinal scale",
      "Interval scale",
      "Ratio scale"
    ],
    correctAnswer: 2,
    explanation: "An interval scale has ordered categories with equal intervals, but the zero point is arbitrary and does not indicate a zero amount of the variable. Ratio scales, in contrast, have an absolute zero point.",
    difficulty: "hard",
    topic: "Scales of Measurement",
    points: 20
  },
  {
    id: 8,
    question: "In which type of scale are measurements simply labeled and categorized?",
    options: [
      "Nominal scale",
      "Ordinal scale",
      "Interval scale",
      "Ratio scale"
    ],
    correctAnswer: 0,
    explanation: "A nominal scale consists of categories that have different names. Measurements on a nominal scale label and categorize observations but do not make any quantitative distinctions between observations.",
    difficulty: "easy",
    topic: "Scales of Measurement",
    points: 10
  },
  {
    id: 9,
    question: "What is an operational definition?",
    options: [
      "A definition found in a dictionary",
      "A definition that identifies a measurement procedure for measuring an external behavior to define and measure a hypothetical construct",
      "A definition used only in medicine",
      "A theoretical definition without practical application"
    ],
    correctAnswer: 1,
    explanation: "An operational definition identifies a measurement procedure (a set of operations) for measuring an external behavior and uses the resulting measurements as a definition and measurement of a hypothetical construct.",
    difficulty: "medium",
    topic: "Measurement and Variables",
    points: 15
  },
  {
    id: 10,
    question: "In the correlational method:",
    options: [
      "One variable is manipulated while another is observed",
      "Two different variables are observed to determine if there is a relationship between them",
      "Only one variable is measured",
      "Cause and effect can be definitively established"
    ],
    correctAnswer: 1,
    explanation: "The correlational method involves observing two different variables to determine whether there is a relationship between them. Unlike experimental methods, it does not involve manipulation and cannot establish cause and effect.",
    difficulty: "medium",
    topic: "Research Methods",
    points: 15
  },
  {
    id: 11,
    question: "What distinguishes the experimental method from other research methods?",
    options: [
      "It uses surveys",
      "It involves manipulating one variable while observing another",
      "It only uses descriptive statistics",
      "It requires a larger sample size"
    ],
    correctAnswer: 1,
    explanation: "The experimental method is distinguished by the manipulation of one variable (independent variable) while another variable (dependent variable) is observed and measured. This allows for cause-and-effect conclusions.",
    difficulty: "medium",
    topic: "Research Methods",
    points: 15
  },
  {
    id: 12,
    question: "What does the symbol Σ represent in statistical notation?",
    options: [
      "Mean",
      "Standard deviation",
      "Summation",
      "Sample size"
    ],
    correctAnswer: 2,
    explanation: "The Greek letter sigma (Σ) is used to represent summation in statistical notation. It indicates that you should add up a set of values.",
    difficulty: "easy",
    topic: "Statistical Notation",
    points: 10
  },
  {
    id: 13,
    question: "Which symbol represents the number of scores in a sample?",
    options: [
      "N",
      "n",
      "Σ",
      "X"
    ],
    correctAnswer: 1,
    explanation: "The lowercase 'n' represents the number of scores in a sample, while uppercase 'N' represents the number of scores in a population.",
    difficulty: "easy",
    topic: "Statistical Notation",
    points: 10
  },
  {
    id: 14,
    question: "A discrete variable:",
    options: [
      "Can have infinite fractional values between whole numbers",
      "Consists of separate, indivisible categories",
      "Is always measured on a ratio scale",
      "Can never be numerical"
    ],
    correctAnswer: 1,
    explanation: "A discrete variable consists of separate, indivisible categories. No values can exist between two neighboring categories. Examples include the number of children in a family or the number of students in a class.",
    difficulty: "medium",
    topic: "Variable Types",
    points: 15
  },
  {
    id: 15,
    question: "What is inferential statistics used for?",
    options: [
      "Only to create graphs and charts",
      "To make general statements about a population based on sample data",
      "To summarize data without making predictions",
      "To collect data from participants"
    ],
    correctAnswer: 1,
    explanation: "Inferential statistics are statistical methods that use sample data to make general statements about a population. This allows researchers to draw conclusions beyond the immediate data.",
    difficulty: "easy",
    topic: "Types of Statistics",
    points: 10
  }
];

// Achievement badges configuration
export const badges = [
  {
    id: 'perfect',
    name: 'Perfect Score!',
    description: 'Got 100% on the quiz',
    icon: '🏆',
    requirement: (score, total) => score === total
  },
  {
    id: 'ace',
    name: 'Statistics Ace',
    description: 'Scored 90% or higher',
    icon: '⭐',
    requirement: (score, total) => (score / total) >= 0.9
  },
  {
    id: 'scholar',
    name: 'Quick Scholar',
    description: 'Completed quiz in record time',
    icon: '⚡',
    requirement: (score, total, timeSpent) => timeSpent < 180 // less than 3 minutes
  },
  {
    id: 'persistent',
    name: 'Persistent Learner',
    description: 'Completed all questions',
    icon: '💪',
    requirement: (score, total) => true // Always awarded for completion
  },
  {
    id: 'expert',
    name: 'Notation Expert',
    description: 'Got all notation questions correct',
    icon: '🎯',
    requirement: (score, total, timeSpent, details) => {
      const notationQuestions = details.filter(q => q.topic === 'Statistical Notation');
      return notationQuestions.every(q => q.correct);
    }
  }
];

// Performance messages based on score percentage
export const getPerformanceMessage = (percentage) => {
  if (percentage === 100) {
    return {
      title: "Perfect Score! 🎉",
      message: "Outstanding! You've mastered Chapter 1 concepts!",
      color: "text-primary"
    };
  } else if (percentage >= 90) {
    return {
      title: "Excellent Work! ⭐",
      message: "You have a strong understanding of statistics fundamentals!",
      color: "text-success"
    };
  } else if (percentage >= 80) {
    return {
      title: "Great Job! 👏",
      message: "You're doing well! Just a few concepts to review.",
      color: "text-secondary"
    };
  } else if (percentage >= 70) {
    return {
      title: "Good Effort! 📚",
      message: "You're on the right track. Review the material and try again!",
      color: "text-accent"
    };
  } else if (percentage >= 60) {
    return {
      title: "Keep Learning! 💡",
      message: "You're making progress. Spend more time reviewing Chapter 1.",
      color: "text-muted-foreground"
    };
  } else {
    return {
      title: "Keep Trying! 📖",
      message: "Statistics takes practice. Review Chapter 1 and retake the quiz!",
      color: "text-muted-foreground"
    };
  }
};