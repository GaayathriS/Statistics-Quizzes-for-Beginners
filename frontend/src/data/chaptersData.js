// All Chapters Data Structure

export const chapters = [
  {
    id: 1,
    title: "Introduction to Statistics",
    description: "Test your knowledge of fundamental statistical concepts including populations and samples, variables and measurement scales, research methods, and statistical notation.",
    topics: ["Basic Definitions", "Research Methods", "Measurement Scales", "Statistical Notation"],
    questionCount: 15,
    color: "from-blue-600 to-blue-400"
  },
  {
    id: 2,
    title: "Frequency Distributions",
    description: "Test your knowledge of frequency distributions including tables, grouped data, graphs (histograms, polygons, bar graphs), percentiles, percentile ranks, and stem-and-leaf displays.",
    topics: ["Frequency Distribution Basics", "Grouped Frequency Distributions", "Percentiles and Percentile Ranks", "Graphs and Charts", "Stem-and-Leaf Displays"],
    questionCount: 15,
    color: "from-purple-600 to-purple-400"
  },
  {
    id: 3,
    title: "Central Tendency",
    description: "Test your knowledge of measures of central tendency including the mean, median, and mode, as well as how these measures relate to distribution shape and when to use each one.",
    topics: ["Central Tendency Basics", "The Mean", "The Median", "The Mode", "Selecting the Appropriate Measure", "Distribution Shape"],
    questionCount: 15,
    color: "from-emerald-600 to-emerald-400"
  },
  {
    id: 4,
    title: "Z-Scores",
    description: "Master z-scores, standardization, and the normal distribution. Includes interactive calculator, visual explanations, worked examples, and practice quiz.",
    topics: ["Z-Score Concepts", "Calculator", "Normal Table", "Quiz"],
    questionCount: 25,
    isStudyChapter: true,
    hasQuiz: true,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: 8,
    title: "Introduction to Hypothesis Testing",
    description: "Learn the logic of hypothesis testing, null and alternative hypotheses, Type I and Type II errors, alpha levels, critical regions, effect size (Cohen's d), and statistical power.",
    topics: ["Hypothesis Testing Logic", "Null & Alternative Hypotheses", "Type I & II Errors", "Effect Size", "Statistical Power"],
    questionCount: 15,
    color: "from-rose-600 to-rose-400"
  },
  {
    id: 9,
    title: "Introduction to the t Statistic",
    description: "Master the t statistic for hypothesis testing when population standard deviation is unknown. Covers t distribution, degrees of freedom, confidence intervals, and effect size measures.",
    topics: ["t Statistic", "Estimated Standard Error", "Degrees of Freedom", "t Distribution", "Confidence Intervals"],
    questionCount: 15,
    color: "from-violet-600 to-violet-400"
  },
  {
    id: 100,
    title: "Glossary",
    subtitle: "Chapters 1-9",
    description: "Review key terms and definitions from all chapters. Select a chapter to view its glossary of important statistical concepts.",
    topics: ["Key Terms", "Definitions", "Quick Reference"],
    questionCount: 0,
    isGlossaryChapter: true,
    color: "from-amber-600 to-amber-400"
  }
];

// Chapter Glossaries
export const chapterGlossaries = {
  1: [
    { term: "Population", definition: "The set of all individuals of interest in a particular study." },
    { term: "Sample", definition: "A set of individuals selected from a population, usually to represent the population in a study." },
    { term: "Random sample", definition: "A sample in which every individual in the population has an equal chance of being selected." },
    { term: "Variable", definition: "A characteristic or condition that can change or take different values for different individuals." },
    { term: "Data", definition: "Measurements or observations collected in a study." },
    { term: "Data set", definition: "A collection of measurements or observations." },
    { term: "Datum / Score (raw score)", definition: "A single measurement or observation." },
    { term: "Parameter", definition: "A numerical value that describes a population." },
    { term: "Statistic", definition: "A numerical value that describes a sample." },
    { term: "Descriptive statistics", definition: "Procedures used to organize and summarize data." },
    { term: "Inferential statistics", definition: "Techniques that use sample data to draw conclusions about a population." },
    { term: "Sampling error", definition: "The natural discrepancy between a sample statistic and its population parameter." },
    { term: "Construct", definition: "An internal characteristic that cannot be directly observed but helps explain behavior." },
    { term: "Operational definition", definition: "Defines a construct in terms of observable and measurable behaviors." },
    { term: "Nominal scale", definition: "Categories that differ only by name (no order or magnitude)." },
    { term: "Ordinal scale", definition: "Categories arranged in an ordered sequence." },
    { term: "Interval scale", definition: "Ordered categories with equal intervals; zero is arbitrary." },
    { term: "Ratio scale", definition: "An interval scale with an absolute zero point." },
    { term: "Independent variable", definition: "The variable manipulated by the researcher." },
    { term: "Quasi-independent variable", definition: "A grouping variable used in nonexperimental research." },
    { term: "Dependent variable", definition: "The variable measured to assess the effect of the independent variable." }
  ],
  2: [
    { term: "Frequency distribution", definition: "An organized summary of how often each score or category occurs in a data set." },
    { term: "Proportion", definition: "The fraction of the total represented by a specific part of the data." },
    { term: "Percentage", definition: "A proportion multiplied by 100." },
    { term: "Percentile", definition: "A score or value below which a given percentage of scores in a dataset falls, used to determine relative position." },
    { term: "Percentile rank", definition: "The percentage of scores in a distribution that are at or below a given score." },
    { term: "Range", definition: "The difference between the highest and lowest scores in a distribution." },
    { term: "Cumulative percentage", definition: "The percentage of scores at or below a given value when data are accumulated across categories." },
    { term: "Histogram", definition: "A graph for continuous data using adjacent bars to show frequency distribution." },
    { term: "Bar graph", definition: "A graph that compares discrete categories using separated bars." },
    { term: "Normal distribution", definition: "A symmetrical, bell-shaped theoretical distribution where most scores cluster around the mean." },
    { term: "Symmetrical distribution", definition: "A distribution where the left and right sides are mirror images and mean = median = mode." },
    { term: "Skewed distribution", definition: "A distribution with a long tail on one side due to extreme scores." },
    { term: "Positively skewed distribution", definition: "The tail extends to the right (a few unusually high scores)." },
    { term: "Negatively skewed distribution", definition: "The tail extends to the left (a few unusually low scores)." },
    { term: "Tail(s) of a distribution", definition: "The extreme ends of a distribution where very high or very low scores occur." }
  ],
  3: [
    { term: "Central tendency", definition: "A statistical measure used to identify a single score that best represents an entire distribution." },
    { term: "Mean", definition: "The arithmetic average of a set of scores, found by summing the scores and dividing by the number of scores." },
    { term: "Population mean (μ)", definition: "The mean calculated using all scores in a population." },
    { term: "Sample mean (M)", definition: "The mean calculated using scores in a sample." },
    { term: "Median", definition: "The score that divides a distribution into two equal halves; 50% of scores fall above and 50% fall below." },
    { term: "Mode", definition: "The score or category that occurs most frequently in a distribution." },
    { term: "Symmetrical distribution (central tendency)", definition: "A distribution in which mean, median, and mode are equal and located at the center." },
    { term: "Skewed distribution (central tendency)", definition: "A distribution in which extreme scores pull the mean toward the tail, causing mean, median, and mode to differ. Positive skew → mean pulled right. Negative skew → mean pulled left." }
  ],
  4: [
    { term: "Variability", definition: "A measure of how much scores in a distribution spread out or differ from one another." },
    { term: "Range", definition: "The difference between the highest and lowest scores in a distribution." },
    { term: "Deviation (deviation score)", definition: "The distance between a score and the mean, calculated as X − μ (or X − M)." },
    { term: "Sum of squares (SS)", definition: "The sum of the squared deviation scores; a measure of total variability in a set of scores." },
    { term: "Variance (σ² or s²)", definition: "The average of the squared deviations from the mean." },
    { term: "Population variance (σ²)", definition: "Variance computed by dividing SS by N." },
    { term: "Sample variance (s²)", definition: "Variance computed by dividing SS by n − 1." },
    { term: "Standard deviation (σ or s)", definition: "The square root of the variance; measures the average distance of scores from the mean." },
    { term: "Population standard deviation (σ)", definition: "Square root of population variance." },
    { term: "Sample standard deviation (s)", definition: "Square root of sample variance." },
    { term: "Degrees of freedom (df)", definition: "The number of scores free to vary when calculating a statistic; for a sample, df = n − 1." },
    { term: "Raw score", definition: "An original, untransformed data value." }
  ],
  5: [
    { term: "z-score (standard score)", definition: "A value that describes the exact location of a score within a distribution by indicating how many standard deviations the score is above or below the mean. Formula: z = (X − μ) / σ (population) or z = (X − M) / s (sample)." },
    { term: "Standardized distribution", definition: "A distribution that has been transformed so it has a mean of 0 and a standard deviation of 1." },
    { term: "z-score transformation (standardization)", definition: "The process of converting raw scores into z-scores to create a standardized distribution." },
    { term: "Unit normal distribution", definition: "A specific standardized normal distribution with mean = 0 and standard deviation = 1." },
    { term: "Unit normal table (z table)", definition: "A table that shows the proportion or percentage of scores corresponding to specific z-scores in the normal distribution." },
    { term: "Relationship between X and z", definition: "A z-score can be converted back to a raw score using: X = μ + zσ" }
  ],
  6: [
    { term: "Probability", definition: "A numerical value that describes the likelihood of an event occurring, ranging from 0 (impossible) to 1 (certain)." },
    { term: "Probability as a proportion", definition: "Probability is calculated as the proportion of times an outcome is expected to occur relative to all possible outcomes." },
    { term: "Normal distribution (probability context)", definition: "A theoretical, bell-shaped distribution used to determine probabilities and proportions of scores." },
    { term: "Probability and the normal distribution", definition: "The area under the normal curve corresponds to proportions and probabilities of scores." },
    { term: "Percentile", definition: "A score or value below which a given percentage of scores in a dataset falls, used to determine relative position." },
    { term: "Percentile rank", definition: "The percentage of scores at or below a particular value." },
    { term: "Using z-scores to find probability", definition: "z-scores are used with the unit normal table to determine the probability or proportion of scores in a normal distribution." }
  ],
  7: [
    { term: "Distribution of sample means", definition: "The distribution formed by all possible sample means for samples of a specific size drawn from a population." },
    { term: "Sampling distribution", definition: "A distribution of statistics obtained from all possible samples of a fixed size from a population." },
    { term: "Mean of the distribution of sample means (expected value of M)", definition: "The mean of the sampling distribution equals the population mean (μ)." },
    { term: "Standard error (σₘ)", definition: "The standard deviation of the distribution of sample means; measures the average distance between a sample mean and the population mean. Formula: σₘ = σ / √n" },
    { term: "Central limit theorem", definition: "For any population with mean μ and standard deviation σ, the distribution of sample means approaches a normal distribution as sample size increases, with mean μ and standard error σ/√n." },
    { term: "z-score for sample means", definition: "A z-score can be used to locate a sample mean within the distribution of sample means: z = (M − μ) / σₘ" }
  ],
  8: [
    { term: "Hypothesis testing", definition: "A statistical procedure used to evaluate a hypothesis about a population by using sample data." },
    { term: "Null hypothesis (H₀)", definition: "States that the treatment has no effect; there is no change, difference, or relationship in the population." },
    { term: "Alternative hypothesis (H₁)", definition: "States that the treatment does have an effect; there is a change, difference, or relationship in the population." },
    { term: "Alpha level (α)", definition: "The probability value used to define 'very unlikely' outcomes in a hypothesis test. It sets the risk of committing a Type I error. Common values are .05, .01, and .001." },
    { term: "Critical region", definition: "The extreme sample values that are very unlikely to occur if the null hypothesis is true. Defines the boundaries for rejecting H₀." },
    { term: "Test statistic", definition: "A statistic computed from sample data used to test hypotheses. For z-tests, the z-score serves as the test statistic." },
    { term: "Type I error", definition: "Occurs when a researcher rejects a null hypothesis that is actually true (false positive). Probability equals alpha (α)." },
    { term: "Type II error", definition: "Occurs when a researcher fails to reject a null hypothesis that is actually false (false negative). Probability represented by beta (β)." },
    { term: "Directional (one-tailed) test", definition: "A hypothesis test that specifies a direction (increase or decrease) for the expected treatment effect." },
    { term: "Nondirectional (two-tailed) test", definition: "A hypothesis test that does not specify a direction; looks for any difference from the null hypothesis." },
    { term: "Effect size", definition: "A measure of the absolute magnitude of a treatment effect, independent of sample size." },
    { term: "Cohen's d", definition: "Measures the size of a treatment effect by standardizing the mean difference: d = (M - μ) / σ" },
    { term: "Statistical power", definition: "The probability that the test will correctly reject a false null hypothesis. Power = 1 - β." }
  ],
  9: [
    { term: "t statistic", definition: "A test statistic used for hypothesis tests when the population standard deviation (σ) is unknown. Uses estimated standard error from the sample." },
    { term: "Estimated standard error (sₘ)", definition: "Used to estimate the standard error when σ is unknown. Computed from sample variance: sₘ = s / √n" },
    { term: "Degrees of freedom (df)", definition: "For a single-sample t-test, df = n - 1. Describes the number of scores free to vary when calculating a statistic." },
    { term: "t distribution", definition: "A family of distributions that approximates the normal distribution. Shape changes with degrees of freedom; approaches normal as df increases." },
    { term: "Single-sample t-test", definition: "Uses t = (M - μ) / sₘ to test hypotheses about a population mean when σ is unknown." },
    { term: "Independent-measures t-test", definition: "Compares two separate groups using t = (M₁ - M₂) / s(M₁-M₂) with pooled variance." },
    { term: "Repeated-measures t-test", definition: "Compares two conditions using the same participants; analyzes difference scores: t = Mᴅ / sₘᴅ" },
    { term: "Pooled variance (s²ₚ)", definition: "A weighted average of sample variances from two groups: s²ₚ = (SS₁ + SS₂) / (df₁ + df₂)" },
    { term: "Confidence interval", definition: "An interval of values centered around a sample statistic that provides a likely range for the unknown population parameter." },
    { term: "r² (coefficient of determination)", definition: "Measures the percentage of variance accounted for by the treatment: r² = t² / (t² + df)" }
  ]
};

// Get glossary by chapter ID
export const getChapterGlossary = (chapterId) => {
  return chapterGlossaries[chapterId] || [];
};

// Chapter 1 Questions (existing)
export const chapter1Questions = [
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

// Chapter 2 Questions
export const chapter2Questions = [
  {
    id: 1,
    question: "What is a frequency distribution?",
    options: [
      "A random arrangement of scores",
      "An organized tabulation of the number of individuals in each category",
      "A graph showing only the highest scores",
      "A measure of central tendency"
    ],
    correctAnswer: 1,
    explanation: "A frequency distribution is an organized tabulation of the number of individuals located in each category on the scale of measurement.",
    difficulty: "easy",
    topic: "Frequency Distribution Basics",
    points: 10
  },
  {
    id: 2,
    question: "In a grouped frequency distribution, each group is called:",
    options: [
      "A frequency",
      "A class interval",
      "A percentile",
      "A range"
    ],
    correctAnswer: 1,
    explanation: "In a grouped frequency distribution, scores are grouped into intervals called class intervals, which represent a range of values.",
    difficulty: "easy",
    topic: "Grouped Frequency Distributions",
    points: 10
  },
  {
    id: 3,
    question: "The percentile rank of a score indicates:",
    options: [
      "The absolute value of the score",
      "The percentage of individuals with scores at or below that score",
      "The highest possible score",
      "The average of all scores"
    ],
    correctAnswer: 1,
    explanation: "The percentile rank of a particular score is defined as the percentage of individuals in the distribution with scores at or below that particular value.",
    difficulty: "medium",
    topic: "Percentiles and Percentile Ranks",
    points: 15
  },
  {
    id: 4,
    question: "Which graph is most appropriate for displaying nominal data?",
    options: [
      "Histogram",
      "Polygon",
      "Bar graph",
      "Stem-and-leaf display"
    ],
    correctAnswer: 2,
    explanation: "A bar graph is used to display data from nominal scales where categories are distinct and separate. Bars are separated to emphasize that categories are discrete.",
    difficulty: "medium",
    topic: "Graphs and Charts",
    points: 15
  },
  {
    id: 5,
    question: "In a histogram, the bars:",
    options: [
      "Are always separated by spaces",
      "Touch each other to indicate continuous data",
      "Only show the mode",
      "Are used only for nominal data"
    ],
    correctAnswer: 1,
    explanation: "In a histogram, the bars touch each other to indicate that the scale is continuous and there are no gaps between categories.",
    difficulty: "easy",
    topic: "Graphs and Charts",
    points: 10
  },
  {
    id: 6,
    question: "A frequency polygon uses:",
    options: [
      "Bars to represent frequencies",
      "Dots connected by lines to represent frequencies",
      "Pie slices",
      "Stem and leaf notation"
    ],
    correctAnswer: 1,
    explanation: "A frequency polygon uses dots connected by straight lines, with each dot placed above the midpoint of the class interval at a height corresponding to the frequency.",
    difficulty: "easy",
    topic: "Graphs and Charts",
    points: 10
  },
  {
    id: 7,
    question: "The 50th percentile is also known as:",
    options: [
      "The mean",
      "The mode",
      "The median",
      "The range"
    ],
    correctAnswer: 2,
    explanation: "The 50th percentile divides the distribution exactly in half, which is the definition of the median.",
    difficulty: "easy",
    topic: "Percentiles and Percentile Ranks",
    points: 10
  },
  {
    id: 8,
    question: "In a stem-and-leaf display, the 'stem' typically represents:",
    options: [
      "The ones digit",
      "The tens digit (or first digits)",
      "The frequency",
      "The mode"
    ],
    correctAnswer: 1,
    explanation: "In a stem-and-leaf display, the stem typically represents the leading digit(s), usually the tens place, while the leaf represents the trailing digit(s).",
    difficulty: "medium",
    topic: "Stem-and-Leaf Displays",
    points: 15
  },
  {
    id: 9,
    question: "What is the cumulative frequency?",
    options: [
      "The frequency of the most common score",
      "The total of all frequencies at or below a particular score",
      "The difference between highest and lowest frequencies",
      "The average frequency"
    ],
    correctAnswer: 1,
    explanation: "Cumulative frequency is the accumulation of frequencies at or below a particular score, showing how many scores fall at or below each value.",
    difficulty: "medium",
    topic: "Frequency Distribution Basics",
    points: 15
  },
  {
    id: 10,
    question: "The width of class intervals in a grouped frequency distribution should typically be:",
    options: [
      "Random numbers",
      "Simple, whole numbers like 5, 10, or 20",
      "Always exactly 1",
      "Prime numbers only"
    ],
    correctAnswer: 1,
    explanation: "Class interval widths should be simple, round numbers (like 2, 5, 10, or 20) to make the frequency distribution easier to interpret and work with.",
    difficulty: "easy",
    topic: "Grouped Frequency Distributions",
    points: 10
  },
  {
    id: 11,
    question: "A relative frequency is expressed as:",
    options: [
      "A count of individuals",
      "A proportion or percentage of the total",
      "An absolute number",
      "A negative value"
    ],
    correctAnswer: 1,
    explanation: "Relative frequency expresses frequency as a proportion or percentage of the total number of observations, making it easier to compare distributions of different sizes.",
    difficulty: "easy",
    topic: "Frequency Distribution Basics",
    points: 10
  },
  {
    id: 12,
    question: "When constructing a frequency distribution, the number of class intervals should typically be between:",
    options: [
      "2 and 3",
      "5 and 15",
      "20 and 30",
      "50 and 100"
    ],
    correctAnswer: 1,
    explanation: "A well-constructed grouped frequency distribution should have between 5 and 15 class intervals to provide enough detail without being overwhelming.",
    difficulty: "medium",
    topic: "Grouped Frequency Distributions",
    points: 15
  },
  {
    id: 13,
    question: "The difference between apparent limits and real limits is:",
    options: [
      "There is no difference",
      "Real limits extend 0.5 units above and below the apparent limits",
      "Apparent limits are always larger",
      "Real limits only apply to nominal data"
    ],
    correctAnswer: 1,
    explanation: "Real limits extend 0.5 units above and below the apparent limits to account for the continuous nature of the underlying measurement scale.",
    difficulty: "hard",
    topic: "Grouped Frequency Distributions",
    points: 20
  },
  {
    id: 14,
    question: "What does a frequency distribution table typically include?",
    options: [
      "Only the highest scores",
      "Categories (X) and their frequencies (f)",
      "Only percentages",
      "Raw data without organization"
    ],
    correctAnswer: 1,
    explanation: "A frequency distribution table includes at minimum the categories or score values (X) and their corresponding frequencies (f), showing how often each value occurs.",
    difficulty: "easy",
    topic: "Frequency Distribution Basics",
    points: 10
  },
  {
    id: 15,
    question: "An ogive is:",
    options: [
      "Another name for a bar graph",
      "A graph of cumulative frequencies or percentages",
      "A type of pie chart",
      "A measure of variability"
    ],
    correctAnswer: 1,
    explanation: "An ogive is a line graph showing cumulative frequencies or cumulative percentages, useful for determining percentile ranks.",
    difficulty: "hard",
    topic: "Graphs and Charts",
    points: 20
  }
];

// Chapter 3 Questions
export const chapter3Questions = [
  {
    id: 1,
    question: "Central tendency is a statistical measure that:",
    options: [
      "Identifies a single value that describes the spread of scores",
      "Identifies a single value that is most typical or representative of the entire group",
      "Measures how different scores are from each other",
      "Counts the total number of scores"
    ],
    correctAnswer: 1,
    explanation: "Central tendency is a statistical measure that identifies a single value (usually the mean, median, or mode) that attempts to describe a set of data by identifying the central position within that set.",
    difficulty: "easy",
    topic: "Central Tendency Basics",
    points: 10
  },
  {
    id: 2,
    question: "The mean is calculated by:",
    options: [
      "Finding the middle score",
      "Dividing the sum of all scores by the number of scores",
      "Identifying the most frequent score",
      "Subtracting the lowest score from the highest"
    ],
    correctAnswer: 1,
    explanation: "The mean is computed by adding all scores (ΣX) and dividing by the number of scores (n or N): Mean = ΣX/n",
    difficulty: "easy",
    topic: "The Mean",
    points: 10
  },
  {
    id: 3,
    question: "Which measure of central tendency is most affected by extreme scores?",
    options: [
      "Mode",
      "Median",
      "Mean",
      "All are equally affected"
    ],
    correctAnswer: 2,
    explanation: "The mean is most affected by extreme scores (outliers) because every score contributes to the calculation. The median and mode are more resistant to extreme values.",
    difficulty: "medium",
    topic: "The Mean",
    points: 15
  },
  {
    id: 4,
    question: "The median is:",
    options: [
      "The arithmetic average",
      "The most frequently occurring score",
      "The middle score when scores are arranged in order",
      "The difference between highest and lowest scores"
    ],
    correctAnswer: 2,
    explanation: "The median is the middle score in a distribution when all scores are listed in order. It divides the distribution exactly in half.",
    difficulty: "easy",
    topic: "The Median",
    points: 10
  },
  {
    id: 5,
    question: "When a distribution has an even number of scores, the median is:",
    options: [
      "The lower of the two middle scores",
      "The higher of the two middle scores",
      "The average of the two middle scores",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "When there is an even number of scores, the median is calculated as the average of the two middle scores.",
    difficulty: "medium",
    topic: "The Median",
    points: 15
  },
  {
    id: 6,
    question: "The mode is:",
    options: [
      "The average score",
      "The middle score",
      "The score or category with the greatest frequency",
      "Half of the highest score"
    ],
    correctAnswer: 2,
    explanation: "The mode is the score or category that has the greatest frequency - the value that occurs most often in a distribution.",
    difficulty: "easy",
    topic: "The Mode",
    points: 10
  },
  {
    id: 7,
    question: "A distribution with two modes is called:",
    options: [
      "Unimodal",
      "Bimodal",
      "Multimodal",
      "Non-modal"
    ],
    correctAnswer: 1,
    explanation: "A bimodal distribution has two modes - two scores that occur with equal highest frequency.",
    difficulty: "easy",
    topic: "The Mode",
    points: 10
  },
  {
    id: 8,
    question: "In a positively skewed distribution, the mean is typically:",
    options: [
      "Equal to the median",
      "Less than the median",
      "Greater than the median",
      "Equal to the mode"
    ],
    correctAnswer: 2,
    explanation: "In a positively skewed distribution, the tail extends toward the higher scores, pulling the mean in that direction. Therefore, mean > median > mode.",
    difficulty: "hard",
    topic: "Distribution Shape",
    points: 20
  },
  {
    id: 9,
    question: "For nominal scale data, which measure of central tendency is appropriate?",
    options: [
      "Mean",
      "Median",
      "Mode",
      "All of the above"
    ],
    correctAnswer: 2,
    explanation: "Only the mode is appropriate for nominal data because nominal scales only categorize without ordering, making calculations of mean or median meaningless.",
    difficulty: "medium",
    topic: "Selecting the Appropriate Measure",
    points: 15
  },
  {
    id: 10,
    question: "When would the median be preferred over the mean?",
    options: [
      "When the distribution is perfectly symmetrical",
      "When there are extreme scores or the distribution is skewed",
      "When using nominal data",
      "The mean is always preferred"
    ],
    correctAnswer: 1,
    explanation: "The median is preferred when there are extreme scores or when the distribution is skewed, because it is not affected by outliers like the mean is.",
    difficulty: "medium",
    topic: "Selecting the Appropriate Measure",
    points: 15
  },
  {
    id: 11,
    question: "In a normal distribution:",
    options: [
      "Mean, median, and mode are all different",
      "Mean, median, and mode are all the same",
      "Only mean and median are equal",
      "Only mode and median are equal"
    ],
    correctAnswer: 1,
    explanation: "In a perfectly normal (symmetrical) distribution, the mean, median, and mode all have the same value and are located at the center of the distribution.",
    difficulty: "medium",
    topic: "Distribution Shape",
    points: 15
  },
  {
    id: 12,
    question: "The weighted mean is used when:",
    options: [
      "All scores are equally important",
      "Different scores contribute differently to the overall mean",
      "Calculating the mode",
      "The distribution is skewed"
    ],
    correctAnswer: 1,
    explanation: "The weighted mean is used when different scores or groups have different weights (importance) and should contribute differently to the overall mean.",
    difficulty: "hard",
    topic: "The Mean",
    points: 20
  },
  {
    id: 13,
    question: "A negatively skewed distribution has:",
    options: [
      "A tail extending toward the higher scores",
      "A tail extending toward the lower scores",
      "Two tails of equal length",
      "No tail"
    ],
    correctAnswer: 1,
    explanation: "A negatively skewed distribution has a tail extending toward the lower (negative) scores, with most scores piled up at the higher end.",
    difficulty: "medium",
    topic: "Distribution Shape",
    points: 15
  },
  {
    id: 14,
    question: "The symbol μ (mu) represents:",
    options: [
      "The sample mean",
      "The population mean",
      "The median",
      "The mode"
    ],
    correctAnswer: 1,
    explanation: "The Greek letter μ (mu) is used to represent the population mean. The sample mean is represented by M or x̄ (x-bar).",
    difficulty: "easy",
    topic: "Central Tendency Basics",
    points: 10
  },
  {
    id: 15,
    question: "Which is true about open-ended distributions?",
    options: [
      "The mean can always be calculated",
      "The exact mean cannot be calculated without knowing all values",
      "Open-ended distributions don't exist",
      "Only the mean can be used"
    ],
    correctAnswer: 1,
    explanation: "In open-ended distributions (where some categories are unlimited, like '10 or more'), the exact mean cannot be calculated because we don't know the actual values. The median or mode may be more appropriate.",
    difficulty: "hard",
    topic: "Selecting the Appropriate Measure",
    points: 20
  }
];

// Chapter 5: Exam 1 Practice Questions (25 questions covering Chapters 1-7)
export const chapter5Questions = [
  {
    id: 1,
    category: "Z-Scores",
    question: "A z-score of z = -2.00 indicates a location that is ______.",
    options: [
      "2 points below the mean",
      "2 standard deviations below the mean",
      "2 points above the mean",
      "2 standard deviations above the mean"
    ],
    correctAnswer: 1,
    explanation: "A negative z-score indicates below the mean, and the number (2) tells us how many standard deviations. So z = -2.00 means 2 standard deviations BELOW the mean.",
    difficulty: "medium",
    topic: "Z-Scores",
    points: 15
  },
  {
    id: 2,
    category: "Z-Scores",
    question: "For a population with μ = 80 and σ = 10, what is the z-score for X = 95?",
    options: ["z = +0.50", "z = +1.00", "z = +1.50", "z = +2.00"],
    correctAnswer: 2,
    explanation: "z = (X - μ) / σ = (95 - 80) / 10 = 15/10 = +1.50. The score is 15 points above the mean, which equals 1.5 standard deviations.",
    difficulty: "medium",
    topic: "Z-Scores",
    points: 15
  },
  {
    id: 3,
    category: "Z-Scores",
    question: "After a z-score transformation, the new distribution always has ______.",
    options: [
      "μ = 0 and σ = 0",
      "μ = 1 and σ = 0",
      "μ = 0 and σ = 1",
      "μ = 1 and σ = 1"
    ],
    correctAnswer: 2,
    explanation: "Z-score transformation (standardization) always produces a distribution with mean = 0 and standard deviation = 1. This is why it's called the 'standard' normal distribution.",
    difficulty: "medium",
    topic: "Z-Scores",
    points: 15
  },
  {
    id: 4,
    category: "Z-Scores",
    question: "Which z-score corresponds to a score that is above the mean?",
    options: ["z = -1.50", "z = 0", "z = +0.75", "Both z = 0 and z = +0.75"],
    correctAnswer: 2,
    explanation: "Positive z-scores indicate scores above the mean. z = +0.75 is above the mean, z = -1.50 is below, and z = 0 IS the mean (not above it).",
    difficulty: "easy",
    topic: "Z-Scores",
    points: 10
  },
  {
    id: 5,
    category: "Normal Distribution",
    question: "In a normal distribution, approximately what percentage of scores fall within ±1 standard deviation of the mean?",
    options: ["50%", "68%", "95%", "99%"],
    correctAnswer: 1,
    explanation: "The 68-95-99.7 rule! About 68% of scores fall within ±1 SD, 95% within ±2 SD, and 99.7% within ±3 SD of the mean.",
    difficulty: "easy",
    topic: "Normal Distribution",
    points: 10
  },
  {
    id: 6,
    category: "Normal Distribution",
    question: "A symmetrical distribution is one where ______.",
    options: [
      "The mean is greater than the median",
      "The mean is less than the median",
      "The mean, median, and mode are equal",
      "The tail extends to the right"
    ],
    correctAnswer: 2,
    explanation: "In a perfectly symmetrical distribution (like the normal distribution), the mean, median, and mode all occur at the same central point.",
    difficulty: "easy",
    topic: "Normal Distribution",
    points: 10
  },
  {
    id: 7,
    category: "Normal Distribution",
    question: "A distribution with a long tail extending to the right is called ______.",
    options: [
      "Negatively skewed",
      "Positively skewed",
      "Symmetrical",
      "Bimodal"
    ],
    correctAnswer: 1,
    explanation: "Positively skewed = tail to the RIGHT (toward positive numbers). Negatively skewed = tail to the LEFT. Remember: the tail points to the name (positive = right).",
    difficulty: "medium",
    topic: "Normal Distribution",
    points: 15
  },
  {
    id: 8,
    category: "Central Tendency",
    question: "Which measure of central tendency is most affected by extreme scores (outliers)?",
    options: ["Mean", "Median", "Mode", "All equally affected"],
    correctAnswer: 0,
    explanation: "The MEAN uses every score in its calculation, so extreme values pull it toward them. The median (middle score) and mode (most frequent) are resistant to outliers.",
    difficulty: "medium",
    topic: "Central Tendency",
    points: 15
  },
  {
    id: 9,
    category: "Central Tendency",
    question: "For the scores 2, 3, 4, 4, 5, 6, the mode is ______.",
    options: ["3", "4", "4.5", "There is no mode"],
    correctAnswer: 1,
    explanation: "The mode is the most frequently occurring score. In this dataset, 4 appears twice while all other values appear once, making 4 the mode.",
    difficulty: "easy",
    topic: "Central Tendency",
    points: 10
  },
  {
    id: 10,
    category: "Variability",
    question: "Standard deviation is ______.",
    options: [
      "The average of all scores",
      "The square of the variance",
      "The square root of the variance",
      "The range divided by 2"
    ],
    correctAnswer: 2,
    explanation: "Standard deviation = √variance. We take the square root to bring the measure back to the original units of measurement. Variance = SD².",
    difficulty: "medium",
    topic: "Variability",
    points: 15
  },
  {
    id: 11,
    category: "Variability",
    question: "If all scores in a dataset are identical, the standard deviation equals ______.",
    options: ["1", "0", "The mean", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "If all scores are the same, there is NO variability — no spread at all. Every score equals the mean, so every deviation is 0, making SD = 0.",
    difficulty: "medium",
    topic: "Variability",
    points: 15
  },
  {
    id: 12,
    category: "Sampling",
    question: "A ______ describes a population; a ______ describes a sample.",
    options: [
      "statistic; parameter",
      "parameter; statistic",
      "mean; median",
      "variable; constant"
    ],
    correctAnswer: 1,
    explanation: "Parameters describe POPULATIONS (μ, σ). Statistics describe SAMPLES (M, s). Memory trick: Population-Parameter, Sample-Statistic (both pairs start with same letter!).",
    difficulty: "easy",
    topic: "Sampling",
    points: 10
  },
  {
    id: 13,
    category: "Sampling",
    question: "The difference between a sample statistic and the population parameter is called ______.",
    options: [
      "Standard deviation",
      "Sampling error",
      "Statistical significance",
      "Standard error"
    ],
    correctAnswer: 1,
    explanation: "Sampling error is the natural discrepancy between a sample statistic and the true population parameter. It's expected and unavoidable when using samples.",
    difficulty: "medium",
    topic: "Sampling",
    points: 15
  },
  {
    id: 14,
    category: "Measurement Scales",
    question: "Jersey numbers on a basketball team represent which scale of measurement?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correctAnswer: 0,
    explanation: "Jersey numbers are just labels — player #23 isn't 'more' than player #11. No meaningful order or quantity. This is NOMINAL (names/categories only).",
    difficulty: "easy",
    topic: "Measurement Scales",
    points: 10
  },
  {
    id: 15,
    category: "Measurement Scales",
    question: "Temperature in Fahrenheit is an example of which scale?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correctAnswer: 2,
    explanation: "Fahrenheit has equal intervals (difference between 50° and 60° = difference between 80° and 90°), but 0°F isn't 'no temperature.' No true zero = INTERVAL scale.",
    difficulty: "hard",
    topic: "Measurement Scales",
    points: 20
  },
  {
    id: 16,
    category: "Measurement Scales",
    question: "Weight in pounds is measured on which scale?",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"],
    correctAnswer: 3,
    explanation: "Weight has a true zero (0 lbs = no weight), equal intervals, and meaningful ratios (20 lbs is twice as heavy as 10 lbs). This is the RATIO scale.",
    difficulty: "medium",
    topic: "Measurement Scales",
    points: 15
  },
  {
    id: 17,
    category: "Sampling Distributions",
    question: "The standard error of M measures ______.",
    options: [
      "How much individual scores vary",
      "How much sample means vary from the population mean",
      "The difference between mean and median",
      "The average score in the population"
    ],
    correctAnswer: 1,
    explanation: "Standard error of M (σM) measures the standard deviation of the distribution of sample means — how much sample means typically vary from the true population mean μ.",
    difficulty: "hard",
    topic: "Sampling Distributions",
    points: 20
  },
  {
    id: 18,
    category: "Sampling Distributions",
    question: "According to the Central Limit Theorem, as sample size increases, the distribution of sample means ______.",
    options: [
      "Becomes more skewed",
      "Approaches a normal distribution",
      "Has a larger standard error",
      "Moves away from the population mean"
    ],
    correctAnswer: 1,
    explanation: "The Central Limit Theorem states that as n increases, the distribution of sample means approaches normal, REGARDLESS of the shape of the original population.",
    difficulty: "hard",
    topic: "Sampling Distributions",
    points: 20
  },
  {
    id: 19,
    category: "Sampling Distributions",
    question: "The formula for standard error of the mean is ______.",
    options: ["σ × √n", "σ / √n", "σ / n", "σ × n"],
    correctAnswer: 1,
    explanation: "Standard error = σ / √n. As sample size (n) increases, standard error DECREASES — larger samples give more precise estimates of the population mean.",
    difficulty: "hard",
    topic: "Sampling Distributions",
    points: 20
  },
  {
    id: 20,
    category: "Research Methods",
    question: "The variable that is manipulated by the researcher is called the ______.",
    options: [
      "Dependent variable",
      "Independent variable",
      "Confounding variable",
      "Extraneous variable"
    ],
    correctAnswer: 1,
    explanation: "The INDEPENDENT variable is manipulated by the researcher. The DEPENDENT variable is measured to see if it was affected. Memory: DV 'depends' on what you do to the IV.",
    difficulty: "easy",
    topic: "Research Methods",
    points: 10
  },
  {
    id: 21,
    category: "Research Methods",
    question: "In a study where participants are classified by age group (young, middle, old), age is a ______.",
    options: [
      "Dependent variable",
      "Independent variable",
      "Quasi-independent variable",
      "Confounding variable"
    ],
    correctAnswer: 2,
    explanation: "Since age can't be manipulated (you can't randomly assign someone to be old!), it's a QUASI-independent variable — used to create groups but not truly manipulated.",
    difficulty: "hard",
    topic: "Research Methods",
    points: 20
  },
  {
    id: 22,
    category: "Probability",
    question: "A probability value can range from ______.",
    options: ["-1 to +1", "0 to 100", "0 to 1", "-∞ to +∞"],
    correctAnswer: 2,
    explanation: "Probability ranges from 0 (impossible) to 1 (certain). A probability of 0.5 means 50% chance. Values outside 0-1 are not valid probabilities.",
    difficulty: "easy",
    topic: "Probability",
    points: 10
  },
  {
    id: 23,
    category: "Z-Scores",
    question: "For a distribution with μ = 100 and σ = 15, what X value corresponds to z = -1.00?",
    options: ["X = 85", "X = 99", "X = 100", "X = 115"],
    correctAnswer: 0,
    explanation: "Work backwards: X = μ + (z × σ) = 100 + (-1 × 15) = 100 - 15 = 85. A z of -1 means one SD below the mean.",
    difficulty: "medium",
    topic: "Z-Scores",
    points: 15
  },
  {
    id: 24,
    category: "Descriptive Statistics",
    question: "Descriptive statistics are used to ______.",
    options: [
      "Make generalizations about populations from samples",
      "Summarize, organize, and simplify data",
      "Test hypotheses",
      "Determine causation"
    ],
    correctAnswer: 1,
    explanation: "Descriptive statistics DESCRIBE data — summarizing, organizing, and simplifying. INFERENTIAL statistics make generalizations from samples to populations.",
    difficulty: "easy",
    topic: "Descriptive Statistics",
    points: 10
  },
  {
    id: 25,
    category: "Variability",
    question: "The range is calculated as ______.",
    options: [
      "Highest score + lowest score",
      "Highest score - lowest score",
      "Mean - median",
      "Sum of scores / n"
    ],
    correctAnswer: 1,
    explanation: "Range = Highest score - Lowest score. It's the simplest measure of variability but is affected by outliers and ignores all scores in between.",
    difficulty: "easy",
    topic: "Variability",
    points: 10
  }
];

// Chapter 8 Questions - Introduction to Hypothesis Testing
export const chapter8Questions = [
  {
    id: 1,
    question: "What is the purpose of hypothesis testing?",
    options: [
      "To prove that a hypothesis is absolutely true",
      "To use sample data to evaluate a hypothesis about a population",
      "To calculate the mean of a sample",
      "To create frequency distributions"
    ],
    correctAnswer: 1,
    explanation: "Hypothesis testing is a statistical procedure used to evaluate a hypothesis about a population by using sample data. It doesn't prove anything absolutely, but helps make decisions based on probability.",
    difficulty: "easy",
    topic: "Hypothesis Testing Basics",
    points: 10
  },
  {
    id: 2,
    question: "The null hypothesis (H₀) typically states that:",
    options: [
      "The treatment has a significant effect",
      "The treatment has no effect or there is no difference",
      "The sample mean equals the sample standard deviation",
      "The researcher's prediction is correct"
    ],
    correctAnswer: 1,
    explanation: "The null hypothesis states that the treatment has no effect, meaning there is no change, difference, or relationship in the population. It represents the status quo.",
    difficulty: "easy",
    topic: "Null & Alternative Hypotheses",
    points: 10
  },
  {
    id: 3,
    question: "The alpha level (α) in hypothesis testing represents:",
    options: [
      "The probability of making a Type II error",
      "The probability of making a Type I error",
      "The effect size of the treatment",
      "The power of the statistical test"
    ],
    correctAnswer: 1,
    explanation: "The alpha level (α) defines the probability of rejecting a true null hypothesis (Type I error). Common alpha levels are .05, .01, and .001.",
    difficulty: "medium",
    topic: "Alpha Level",
    points: 15
  },
  {
    id: 4,
    question: "A Type I error occurs when:",
    options: [
      "You fail to reject a false null hypothesis",
      "You reject a true null hypothesis",
      "You accept a true alternative hypothesis",
      "You calculate the wrong test statistic"
    ],
    correctAnswer: 1,
    explanation: "A Type I error (false positive) occurs when a researcher rejects a null hypothesis that is actually true—concluding there is an effect when there isn't one.",
    difficulty: "medium",
    topic: "Type I & II Errors",
    points: 15
  },
  {
    id: 5,
    question: "A Type II error occurs when:",
    options: [
      "You reject a true null hypothesis",
      "You fail to reject a false null hypothesis",
      "You use the wrong alpha level",
      "You have too large a sample size"
    ],
    correctAnswer: 1,
    explanation: "A Type II error (false negative) occurs when a researcher fails to reject a null hypothesis that is actually false—missing a real treatment effect.",
    difficulty: "medium",
    topic: "Type I & II Errors",
    points: 15
  },
  {
    id: 6,
    question: "The critical region of a hypothesis test contains:",
    options: [
      "All possible sample means",
      "Only sample means equal to the population mean",
      "Extreme sample values unlikely to occur if H₀ is true",
      "The most common sample outcomes"
    ],
    correctAnswer: 2,
    explanation: "The critical region consists of extreme sample values that are very unlikely to occur if the null hypothesis is true. If the test statistic falls in this region, we reject H₀.",
    difficulty: "medium",
    topic: "Critical Region",
    points: 15
  },
  {
    id: 7,
    question: "If α = .05 in a two-tailed test, the critical region is located:",
    options: [
      "Entirely in the right tail",
      "Entirely in the left tail",
      "Split between both tails (2.5% in each)",
      "In the center of the distribution"
    ],
    correctAnswer: 2,
    explanation: "In a two-tailed test with α = .05, the critical region is split between both tails—2.5% in the upper tail and 2.5% in the lower tail.",
    difficulty: "medium",
    topic: "Critical Region",
    points: 15
  },
  {
    id: 8,
    question: "A one-tailed (directional) hypothesis test is used when:",
    options: [
      "You don't know which direction the effect will go",
      "You predict a specific direction for the treatment effect",
      "You want to reduce Type I errors",
      "The sample size is very small"
    ],
    correctAnswer: 1,
    explanation: "A one-tailed test is used when the researcher predicts a specific direction (increase or decrease) for the treatment effect, placing all of α in one tail.",
    difficulty: "easy",
    topic: "Directional Tests",
    points: 10
  },
  {
    id: 9,
    question: "Cohen's d is a measure of:",
    options: [
      "Statistical significance",
      "Effect size",
      "Type II error probability",
      "Sample size adequacy"
    ],
    correctAnswer: 1,
    explanation: "Cohen's d measures effect size—the magnitude of the treatment effect expressed in standard deviation units. It is independent of sample size.",
    difficulty: "easy",
    topic: "Effect Size",
    points: 10
  },
  {
    id: 10,
    question: "A Cohen's d value of 0.8 is generally considered:",
    options: [
      "A small effect",
      "A medium effect",
      "A large effect",
      "No effect"
    ],
    correctAnswer: 2,
    explanation: "Cohen's guidelines: d = 0.2 is small, d = 0.5 is medium, and d = 0.8 is large. So 0.8 represents a large effect size.",
    difficulty: "medium",
    topic: "Effect Size",
    points: 15
  },
  {
    id: 11,
    question: "Statistical power is defined as:",
    options: [
      "The probability of making a Type I error",
      "The probability of correctly rejecting a false null hypothesis",
      "The probability of failing to reject a true null hypothesis",
      "The size of the treatment effect"
    ],
    correctAnswer: 1,
    explanation: "Statistical power is the probability that a test will correctly reject a false null hypothesis (detecting a real effect). Power = 1 - β.",
    difficulty: "medium",
    topic: "Statistical Power",
    points: 15
  },
  {
    id: 12,
    question: "Which of the following increases statistical power?",
    options: [
      "Decreasing sample size",
      "Increasing sample size",
      "Increasing variability in the data",
      "Using a smaller alpha level"
    ],
    correctAnswer: 1,
    explanation: "Increasing sample size increases power because it reduces standard error, making it easier to detect a real effect.",
    difficulty: "medium",
    topic: "Statistical Power",
    points: 15
  },
  {
    id: 13,
    question: "If a researcher obtains a z-score of 2.50 with α = .05 (two-tailed), the decision should be to:",
    options: [
      "Fail to reject H₀",
      "Reject H₀",
      "Accept H₀",
      "Increase the sample size"
    ],
    correctAnswer: 1,
    explanation: "With α = .05 (two-tailed), the critical z-values are ±1.96. Since 2.50 > 1.96, it falls in the critical region, so we reject H₀.",
    difficulty: "hard",
    topic: "Making Decisions",
    points: 20
  },
  {
    id: 14,
    question: "The relationship between α and Type I error is:",
    options: [
      "α equals the probability of Type I error",
      "α equals the probability of Type II error",
      "α is unrelated to errors",
      "α reduces both types of errors equally"
    ],
    correctAnswer: 0,
    explanation: "The alpha level directly sets the probability of making a Type I error. If α = .05, there is a 5% chance of rejecting a true null hypothesis.",
    difficulty: "easy",
    topic: "Alpha Level",
    points: 10
  },
  {
    id: 15,
    question: "Which assumption is NOT required for hypothesis testing with z-scores?",
    options: [
      "Random sampling from the population",
      "Independent observations",
      "The population standard deviation (σ) must be known",
      "The sample size must be exactly 30"
    ],
    correctAnswer: 3,
    explanation: "Hypothesis testing with z-scores requires random sampling, independent observations, and known σ, but there is no requirement that n must equal exactly 30.",
    difficulty: "hard",
    topic: "Assumptions",
    points: 20
  }
];

// Chapter 9 Questions - Introduction to the t Statistic
export const chapter9Questions = [
  {
    id: 1,
    question: "When is the t statistic used instead of a z-score?",
    options: [
      "When the sample size is greater than 100",
      "When the population standard deviation (σ) is unknown",
      "When the data are nominal scale",
      "When you want a one-tailed test"
    ],
    correctAnswer: 1,
    explanation: "The t statistic is used when the population standard deviation (σ) is unknown and must be estimated from the sample data.",
    difficulty: "easy",
    topic: "t Statistic Basics",
    points: 10
  },
  {
    id: 2,
    question: "The estimated standard error (sₘ) is calculated as:",
    options: [
      "σ / √n",
      "s / √n",
      "s × √n",
      "σ × √n"
    ],
    correctAnswer: 1,
    explanation: "The estimated standard error uses the sample standard deviation: sₘ = s / √n (or equivalently √(s²/n)).",
    difficulty: "easy",
    topic: "Estimated Standard Error",
    points: 10
  },
  {
    id: 3,
    question: "For a single-sample t-test with n = 25, the degrees of freedom (df) equals:",
    options: [
      "25",
      "24",
      "26",
      "12.5"
    ],
    correctAnswer: 1,
    explanation: "For a single-sample t-test, df = n - 1. With n = 25, df = 25 - 1 = 24.",
    difficulty: "easy",
    topic: "Degrees of Freedom",
    points: 10
  },
  {
    id: 4,
    question: "As degrees of freedom increase, the t distribution:",
    options: [
      "Becomes more spread out",
      "Approaches the shape of a normal distribution",
      "Becomes more skewed",
      "Has larger critical values"
    ],
    correctAnswer: 1,
    explanation: "As df increases, the t distribution becomes more similar to the standard normal distribution. With very large df, they are nearly identical.",
    difficulty: "medium",
    topic: "t Distribution",
    points: 15
  },
  {
    id: 5,
    question: "Compared to the normal distribution, the t distribution has:",
    options: [
      "Less variability and thinner tails",
      "More variability and thicker (heavier) tails",
      "The same shape regardless of sample size",
      "No relationship to degrees of freedom"
    ],
    correctAnswer: 1,
    explanation: "The t distribution has more variability and heavier tails than the normal distribution, especially with small sample sizes. This accounts for the additional uncertainty from estimating σ.",
    difficulty: "medium",
    topic: "t Distribution",
    points: 15
  },
  {
    id: 6,
    question: "The formula for a single-sample t statistic is:",
    options: [
      "t = (M - μ) / σ",
      "t = (M - μ) / sₘ",
      "t = (X - M) / s",
      "t = (σ - μ) / n"
    ],
    correctAnswer: 1,
    explanation: "The single-sample t statistic is t = (M - μ) / sₘ, where sₘ is the estimated standard error (s/√n).",
    difficulty: "medium",
    topic: "t Statistic Formula",
    points: 15
  },
  {
    id: 7,
    question: "A repeated-measures t-test (paired-samples) is used when:",
    options: [
      "Comparing two completely separate groups",
      "The same participants are measured in two different conditions",
      "The population standard deviation is known",
      "You have more than two groups to compare"
    ],
    correctAnswer: 1,
    explanation: "A repeated-measures (or paired-samples) t-test is used when the same participants are measured twice, such as before and after a treatment.",
    difficulty: "medium",
    topic: "Types of t-tests",
    points: 15
  },
  {
    id: 8,
    question: "In an independent-measures t-test, pooled variance is used to:",
    options: [
      "Increase the sample size",
      "Estimate a common population variance from two samples",
      "Calculate degrees of freedom",
      "Determine the direction of the effect"
    ],
    correctAnswer: 1,
    explanation: "Pooled variance (s²ₚ) combines the variance estimates from two samples to get a single, better estimate of the common population variance.",
    difficulty: "medium",
    topic: "Pooled Variance",
    points: 15
  },
  {
    id: 9,
    question: "The formula for pooled variance is:",
    options: [
      "s²ₚ = (SS₁ + SS₂) / (df₁ + df₂)",
      "s²ₚ = (SS₁ - SS₂) / (n₁ + n₂)",
      "s²ₚ = SS₁ × SS₂",
      "s²ₚ = (n₁ + n₂) / (SS₁ + SS₂)"
    ],
    correctAnswer: 0,
    explanation: "Pooled variance is calculated as s²ₚ = (SS₁ + SS₂) / (df₁ + df₂), which is a weighted average of the two sample variances.",
    difficulty: "hard",
    topic: "Pooled Variance",
    points: 20
  },
  {
    id: 10,
    question: "A 95% confidence interval for μ means:",
    options: [
      "95% of sample means fall in this interval",
      "We are 95% confident the interval contains the true population mean",
      "The population mean equals 95",
      "There is a 95% chance our sample mean is correct"
    ],
    correctAnswer: 1,
    explanation: "A 95% confidence interval means we are 95% confident that the interval we constructed contains the true population mean μ.",
    difficulty: "medium",
    topic: "Confidence Intervals",
    points: 15
  },
  {
    id: 11,
    question: "What happens to the width of a confidence interval as sample size increases?",
    options: [
      "It gets wider",
      "It gets narrower",
      "It stays the same",
      "It becomes negative"
    ],
    correctAnswer: 1,
    explanation: "Larger samples produce smaller standard errors, which results in narrower (more precise) confidence intervals.",
    difficulty: "medium",
    topic: "Confidence Intervals",
    points: 15
  },
  {
    id: 12,
    question: "The r² statistic (coefficient of determination) measures:",
    options: [
      "The probability of Type I error",
      "The percentage of variance accounted for by the treatment",
      "The degrees of freedom",
      "The sample size needed for significance"
    ],
    correctAnswer: 1,
    explanation: "r² measures effect size as the proportion (percentage) of total variance in the dependent variable that is explained by the treatment. Formula: r² = t²/(t² + df).",
    difficulty: "medium",
    topic: "Effect Size",
    points: 15
  },
  {
    id: 13,
    question: "If t = 3.00 and df = 15, what is r²?",
    options: [
      "r² = 0.20",
      "r² = 0.38",
      "r² = 0.60",
      "r² = 0.75"
    ],
    correctAnswer: 1,
    explanation: "r² = t²/(t² + df) = 9/(9 + 15) = 9/24 = 0.375, which rounds to 0.38 or 38%.",
    difficulty: "hard",
    topic: "Effect Size",
    points: 20
  },
  {
    id: 14,
    question: "For an independent-measures t-test with n₁ = 10 and n₂ = 12, the degrees of freedom equals:",
    options: [
      "22",
      "20",
      "21",
      "10"
    ],
    correctAnswer: 1,
    explanation: "For an independent-measures t-test, df = (n₁ - 1) + (n₂ - 1) = n₁ + n₂ - 2 = 10 + 12 - 2 = 20.",
    difficulty: "medium",
    topic: "Degrees of Freedom",
    points: 15
  },
  {
    id: 15,
    question: "Which of the following is an assumption of the t-test?",
    options: [
      "The population must be exactly normal",
      "The observations within each sample must be independent",
      "The two samples must have identical variances",
      "The sample size must be at least 100"
    ],
    correctAnswer: 1,
    explanation: "A key assumption is that observations must be independent. While normality and homogeneity of variance are also assumptions, the t-test is robust to violations with adequate sample sizes.",
    difficulty: "medium",
    topic: "Assumptions",
    points: 15
  }
];

// Get questions by chapter
export const getChapterQuestions = (chapterId) => {
  switch(chapterId) {
    case 1: return chapter1Questions;
    case 2: return chapter2Questions;
    case 3: return chapter3Questions;
    case 5: return chapter5Questions;
    case 8: return chapter8Questions;
    case 9: return chapter9Questions;
    default: return [];
  }
};

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
    requirement: (score, total, timeSpent) => timeSpent < 180
  },
  {
    id: 'persistent',
    name: 'Persistent Learner',
    description: 'Completed all questions',
    icon: '💪',
    requirement: (score, total) => true
  }
];

// Performance messages based on score percentage
export const getPerformanceMessage = (percentage) => {
  if (percentage === 100) {
    return {
      title: "Perfect Score! 🎉",
      message: "Outstanding! You've mastered these concepts!",
      color: "text-primary"
    };
  } else if (percentage >= 90) {
    return {
      title: "Excellent Work! ⭐",
      message: "You have a strong understanding of the material!",
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
      message: "You're making progress. Spend more time reviewing.",
      color: "text-muted-foreground"
    };
  } else {
    return {
      title: "Keep Trying! 📖",
      message: "Statistics takes practice. Review and retake the quiz!",
      color: "text-muted-foreground"
    };
  }
};
