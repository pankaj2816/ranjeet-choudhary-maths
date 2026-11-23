import { CLASS_LIST } from './classes';

/**
 * Hindi names for fixed labels stored in the data (subjects, classes, types,
 * categories). Anything not listed is shown as stored.
 */
const HI: Record<string, string> = {
  // Subjects
  Algebra: 'बीजगणित',
  Calculus: 'कलन',
  'Geometry & Trigonometry': 'ज्यामिति एवं त्रिकोणमिति',
  'Statistics & Probability': 'सांख्यिकी एवं प्रायिकता',
  Mathematics: 'गणित',
  // Classes
  'Class 10': 'कक्षा 10',
  'Class 11': 'कक्षा 11',
  'Class 12': 'कक्षा 12',
  'JEE Main': 'JEE मेन',
  'All Classes': 'सभी कक्षाएँ',
  // Resource types
  'Chapter Notes': 'अध्याय नोट्स',
  'Solved Examples': 'हल किए गए उदाहरण',
  'Formula Sheet': 'सूत्र शीट',
  'Important Questions': 'महत्वपूर्ण प्रश्न',
  'Practice Worksheet': 'अभ्यास वर्कशीट',
  'Lab Activity Manual': 'गणित प्रयोगशाला गतिविधि मैनुअल',
  'Revision Material': 'रिवीज़न सामग्री',
  Book: 'पुस्तक',
  Other: 'अन्य',
  // Test types
  'Unit Test': 'यूनिट टेस्ट',
  'Periodic Test': 'आवधिक परीक्षा',
  'Term Examination': 'सत्र परीक्षा',
  'Board Mock Test': 'बोर्ड मॉक टेस्ट',
  'JEE Main DPP': 'JEE मेन DPP',
  'CBSE Sample Paper': 'CBSE नमूना प्रश्न पत्र',
  // Notice categories
  'Important Notice': 'महत्वपूर्ण सूचना',
  'Class Update': 'कक्षा अपडेट',
  'Test / Examination': 'टेस्ट / परीक्षा',
  Assignment: 'असाइनमेंट',
  'Study Material': 'अध्ययन सामग्री',
  'Question Paper': 'प्रश्न पत्र',
  'General Announcement': 'सामान्य घोषणा',
  // Chapters (taxonomy names used in uploads)
  'Real Numbers & Polynomials': 'वास्तविक संख्याएँ एवं बहुपद',
  'Linear & Quadratic Equations': 'रैखिक एवं द्विघात समीकरण',
  'Sequences and Series (AP & GP)': 'अनुक्रम तथा श्रेणी (AP व GP)',
  'Complex Numbers': 'सम्मिश्र संख्याएँ',
  'Permutations, Combinations & Binomial Theorem': 'क्रमचय, संचय एवं द्विपद प्रमेय',
  'Matrices and Determinants': 'आव्यूह एवं सारणिक',
  'Sets, Relations and Functions': 'समुच्चय, संबंध एवं फलन',
  'Linear Inequalities': 'रैखिक असमिकाएँ',
  'Triangles and Circles': 'त्रिभुज एवं वृत्त',
  'Coordinate Geometry & Straight Lines': 'निर्देशांक ज्यामिति एवं सरल रेखाएँ',
  'Trigonometric Functions & Identities': 'त्रिकोणमितीय फलन एवं सर्वसमिकाएँ',
  'Heights and Distances': 'ऊँचाई और दूरी',
  'Vectors and 3D Geometry': 'सदिश एवं त्रिविमीय ज्यामिति',
  'Areas and Volumes (Mensuration)': 'क्षेत्रफल एवं आयतन (क्षेत्रमिति)',
  // Article tags
  'Everyday maths': 'रोज़मर्रा का गणित',
  Geometry: 'ज्यामिति',
  Trigonometry: 'त्रिकोणमिति',
  'Number patterns': 'संख्या पैटर्न',
  Interest: 'ब्याज',
  'Video lesson': 'वीडियो क्लास',
};

const CHAPTER_HI: Record<string, string> = Object.fromEntries(
  CLASS_LIST.flatMap((c) => c.chapters.map((ch) => [ch.name, ch.nameHi] as const)),
);

export function term(value: string | undefined, isHi: boolean): string {
  if (!value) return '';
  return isHi ? HI[value] || CHAPTER_HI[value] || value : value;
}

/** Counts like "3 items" in either language. */
export function count(n: number, en: [string, string], hi: string, isHi: boolean) {
  return isHi ? `${n} ${hi}` : `${n} ${n === 1 ? en[0] : en[1]}`;
}

/** "90 Minutes" / "3 Hours" → Hindi */
export function duration(value: string | undefined, isHi: boolean): string {
  if (!value) return '';
  if (!isHi) return value;
  return value
    .replace(/\bMinutes?\b|\bMins?\b/i, 'मिनट')
    .replace(/\bHours?\b|\bHrs?\b/i, 'घंटे');
}

export function formatDate(iso: string, isHi: boolean, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(isHi ? 'hi-IN' : 'en-IN', opts);
}
