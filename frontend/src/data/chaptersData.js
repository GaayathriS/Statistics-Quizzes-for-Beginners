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
    description: "Master z-scores, standardization, and the normal distribution. Includes interactive calculator, visual explanations, and worked examples with the normal table.",
    topics: ["Z-Score Concepts", "Calculator", "Normal Table", "Worked Examples"],
    questionCount: 0, // This is a study chapter, not quiz
    isStudyChapter: true,
    color: "from-cyan-600 to-cyan-400"
  },
  {
    id: 5,
    title: "Exam 1 Practice",
    description: "Comprehensive practice exam covering Chapters 1-7 with 25 multiple choice questions. Test your knowledge before the real exam!",
    topics: ["Z-Scores", "Normal Distribution", "Central Tendency", "Variability", "Sampling", "Measurement Scales", "Probability"],
    questionCount: 25,
    isExamPractice: true,
    color: "from-green-600 to-green-400"
  }
];

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

// Get questions by chapter
export const getChapterQuestions = (chapterId) => {
  switch(chapterId) {
    case 1: return chapter1Questions;
    case 2: return chapter2Questions;
    case 3: return chapter3Questions;
    case 5: return chapter5Questions;
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
