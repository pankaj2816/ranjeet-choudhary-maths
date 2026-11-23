import { ClassLevel } from '@/lib/types';

export type Grade = '10' | '11' | '12';

export interface ClassInfo {
  grade: Grade;
  level: ClassLevel;
  href: string;
  /** Short subtitle shown on cards and headers */
  course: string;
  courseHi: string;
  /** NCERT maths chapters, with a keyword used to filter items */
  chapters: { name: string; nameHi: string; key: string }[];
}

export const CLASS_LIST: ClassInfo[] = [
  {
    grade: '10',
    level: 'Class 10',
    href: '/class-10',
    course: 'Mathematics · Boards',
    courseHi: 'गणित · बोर्ड',
    chapters: [
      { name: 'Real Numbers', nameHi: 'वास्तविक संख्याएँ', key: 'real number' },
      { name: 'Polynomials', nameHi: 'बहुपद', key: 'polynomial' },
      { name: 'Pair of Linear Equations in Two Variables', nameHi: 'दो चर वाले रैखिक समीकरण युग्म', key: 'linear equation' },
      { name: 'Quadratic Equations', nameHi: 'द्विघात समीकरण', key: 'quadratic' },
      { name: 'Arithmetic Progressions', nameHi: 'समांतर श्रेढ़ियाँ', key: 'arithmetic' },
      { name: 'Triangles', nameHi: 'त्रिभुज', key: 'triangle' },
      { name: 'Coordinate Geometry', nameHi: 'निर्देशांक ज्यामिति', key: 'coordinate' },
      { name: 'Introduction to Trigonometry', nameHi: 'त्रिकोणमिति का परिचय', key: 'trigonometr' },
      { name: 'Circles', nameHi: 'वृत्त', key: 'circle' },
      { name: 'Surface Areas and Volumes', nameHi: 'पृष्ठीय क्षेत्रफल और आयतन', key: 'volume' },
      { name: 'Statistics', nameHi: 'सांख्यिकी', key: 'statistic' },
      { name: 'Probability', nameHi: 'प्रायिकता', key: 'probability' },
    ],
  },
  {
    grade: '11',
    level: 'Class 11',
    href: '/class-11',
    course: 'Mathematics · Boards & JEE Main',
    courseHi: 'गणित · बोर्ड और JEE मेन',
    chapters: [
      { name: 'Sets', nameHi: 'समुच्चय', key: 'set' },
      { name: 'Relations and Functions', nameHi: 'संबंध एवं फलन', key: 'function' },
      { name: 'Trigonometric Functions', nameHi: 'त्रिकोणमितीय फलन', key: 'trigonometr' },
      { name: 'Complex Numbers and Quadratic Equations', nameHi: 'सम्मिश्र संख्याएँ और द्विघातीय समीकरण', key: 'complex' },
      { name: 'Linear Inequalities', nameHi: 'रैखिक असमिकाएँ', key: 'inequalit' },
      { name: 'Permutations and Combinations', nameHi: 'क्रमचय और संचय', key: 'permutation' },
      { name: 'Binomial Theorem', nameHi: 'द्विपद प्रमेय', key: 'binomial' },
      { name: 'Sequences and Series', nameHi: 'अनुक्रम तथा श्रेणी', key: 'sequence' },
      { name: 'Straight Lines', nameHi: 'सरल रेखाएँ', key: 'straight line' },
      { name: 'Conic Sections', nameHi: 'शंकु परिच्छेद', key: 'conic' },
      { name: 'Introduction to Three Dimensional Geometry', nameHi: 'त्रिविमीय ज्यामिति का परिचय', key: 'three dimensional' },
      { name: 'Limits and Derivatives', nameHi: 'सीमा और अवकलज', key: 'limit' },
      { name: 'Statistics', nameHi: 'सांख्यिकी', key: 'statistic' },
      { name: 'Probability', nameHi: 'प्रायिकता', key: 'probability' },
    ],
  },
  {
    grade: '12',
    level: 'Class 12',
    href: '/class-12',
    course: 'Mathematics · Boards & JEE Main',
    courseHi: 'गणित · बोर्ड और JEE मेन',
    chapters: [
      { name: 'Relations and Functions', nameHi: 'संबंध एवं फलन', key: 'function' },
      { name: 'Inverse Trigonometric Functions', nameHi: 'प्रतिलोम त्रिकोणमितीय फलन', key: 'inverse trig' },
      { name: 'Matrices', nameHi: 'आव्यूह', key: 'matri' },
      { name: 'Determinants', nameHi: 'सारणिक', key: 'determinant' },
      { name: 'Continuity and Differentiability', nameHi: 'सांतत्य तथा अवकलनीयता', key: 'continuity' },
      { name: 'Application of Derivatives', nameHi: 'अवकलज के अनुप्रयोग', key: 'application of derivative' },
      { name: 'Integrals', nameHi: 'समाकलन', key: 'integra' },
      { name: 'Application of Integrals', nameHi: 'समाकलनों के अनुप्रयोग', key: 'area' },
      { name: 'Differential Equations', nameHi: 'अवकल समीकरण', key: 'differential equation' },
      { name: 'Vector Algebra', nameHi: 'सदिश बीजगणित', key: 'vector' },
      { name: 'Three Dimensional Geometry', nameHi: 'त्रिविमीय ज्यामिति', key: 'three dimensional' },
      { name: 'Linear Programming', nameHi: 'रैखिक प्रोग्रामन', key: 'linear programming' },
      { name: 'Probability', nameHi: 'प्रायिकता', key: 'probability' },
    ],
  },
];

export const getClassInfo = (grade: Grade) => CLASS_LIST.find((c) => c.grade === grade)!;

/** True if an item tagged with `itemClass` belongs on the page for `level`. */
export function belongsToClass(itemClass: string | undefined, level: ClassLevel): boolean {
  if (!itemClass || itemClass === 'All Classes') return true;
  return itemClass === level;
}
