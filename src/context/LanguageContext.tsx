'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'hinglish';

export interface Translations {
  // Nav
  nav: {
    home: string;
    about: string;
    subjects: string;
    updates: string;
    studyMaterials: string;
    questionPapers: string;
    solutions: string;
    contact: string;
    search: string;
    admin: string;
  };
  // Banner
  banner: {
    announcement: string;
    text: string;
    viewNotice: string;
  };
  // Hero
  hero: {
    badge: string;
    centersCount: string;
    titleLine1: string;
    titleHighlight: string;
    description: string;
    organicTitle: string;
    organicSub: string;
    inorganicTitle: string;
    inorganicSub: string;
    practicalTitle: string;
    practicalSub: string;
    ctaMaterials: string;
    ctaNotices: string;
    ctaContact: string;
    statStudents: string;
    statConcept: string;
    statPapers: string;
    teacherCardRole: string;
    teachingAt: string;
    teachingCenters: string;
    teachingExp: string;
    experienceYears: string;
  };
  // Stats
  stats: {
    expTitle: string;
    expDesc: string;
    centersTitle: string;
    centersDesc: string;
    masteryTitle: string;
    masteryDesc: string;
    studentsTitle: string;
    studentsDesc: string;
  };
  // Subjects
  subjects: {
    badge: string;
    title: string;
    subtitle: string;
    organicName: string;
    organicDesc: string;
    inorganicName: string;
    inorganicDesc: string;
    practicalName: string;
    practicalDesc: string;
    exploreBtn: string;
  };
  // Notice board
  notices: {
    badge: string;
    title: string;
    subtitle: string;
    viewAll: string;
    downloadBtn: string;
    pinned: string;
    allBatches: string;
    clickToRead: string;
  };
  // Featured Materials
  materials: {
    badge: string;
    title: string;
    subtitle: string;
    viewVault: string;
    previewBtn: string;
    downloadBtn: string;
    downloadsText: string;
  };
  // Papers & Solutions
  papersSolutions: {
    badge: string;
    title: string;
    subtitle: string;
    viewSolution: string;
    viewPaper: string;
    downloadPdf: string;
    allPapersBtn: string;
    allSolutionsBtn: string;
    solutionReady: string;
    officialKey: string;
  };
  // Why Learn
  whyLearn: {
    badge: string;
    title: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    pillar5Title: string;
    pillar5Desc: string;
    pillar6Title: string;
    pillar6Desc: string;
  };
  // Portfolio
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    bannerTag: string;
    bannerHeading: string;
    bannerSub: string;
    readBio: string;
  };
  // Interactive Tool
  interactive: {
    badge: string;
    title: string;
    subtitle: string;
    selectTopic: string;
    reactionBoxTitle: string;
    mechanismTitle: string;
    takeawayTitle: string;
    examRelevance: string;
  };
  // CTA
  cta: {
    badge: string;
    title: string;
    description: string;
    joinBtn: string;
    emailBtn: string;
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    classLabel: string;
    messageLabel: string;
    sendBtn: string;
    sending: string;
    centersTitle: string;
    schedulesTitle: string;
    faqTitle: string;
  };
  // About Page
  about: {
    heroBadge: string;
    heroTitle: string;
    heroDesc: string;
    journeyBadge: string;
    journeyTitle: string;
    journeyP1: string;
    journeyP2: string;
    statExp: string;
    statExpLabel: string;
    statCenters: string;
    statCentersLabel: string;
    statStudents: string;
    statStudentsLabel: string;
    philosophyBadge: string;
    philosophyQuote: string;
    philosophySub: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    step5Title: string;
    step5Desc: string;
    step6Title: string;
    step6Desc: string;
    centersBadge: string;
    centersTitle: string;
    centersSub: string;
    center1Name: string;
    center1Batch: string;
    center1Schedule: string;
    center2Name: string;
    center2Batch: string;
    center2Schedule: string;
    center3Name: string;
    center3Batch: string;
    center3Schedule: string;
    credentialsBadge: string;
    credentialsTitle: string;
    credentialsSub: string;
    qual1Title: string;
    qual1Desc: string;
    qual2Title: string;
    qual2Desc: string;
    qual3Title: string;
    qual3Desc: string;
    qual4Title: string;
    qual4Desc: string;
    ctaTitle: string;
    ctaSub: string;
    ctaContactBtn: string;
    ctaNotesBtn: string;
  };
  // Inner Pages Common
  pages: {
    allClasses: string;
    allSubjects: string;
    allCategories: string;
    allTypes: string;
    searchPlaceholder: string;
    downloadBtn: string;
    previewBtn: string;
    viewSolutionBtn: string;
    viewPaperBtn: string;
    closeBtn: string;
    noResults: string;
    noResultsSub: string;
  };
  // Premium home page
  home: {
    eyebrow: string;
    factYears: string;
    factCenters: string;
    factStudents: string;
    secAbout: string;
    aboutTitle: string;
    readProfile: string;
    secSubjects: string;
    secMethod: string;
    methodTitle: string;
    secResources: string;
    resourcesTitle: string;
    latestNotes: string;
    latestPapers: string;
    download: string;
    paper: string;
    solution: string;
    viewAll: string;
    secNotices: string;
    readNotice: string;
    secVisit: string;
    visitTitle: string;
    visitSub: string;
    enquire: string;
    whatsapp: string;
    call: string;
    footerLine: string;
    resources: string;
    notesNav: string;
    articlesNav: string;
    learnLabel: string;
    learnTitle: string;
    learnSub: string;
    notesForClass: string;
    allNotes: string;
    allArticles: string;
  };
  // Class pages
  classes: {
    navLabel: string;
    chooseLabel: string;
    chooseTitle: string;
    chooseSub: string;
    pageLabel: string;
    everything: string;
    notesBooks: string;
    papers: string;
    solutions: string;
    notices: string;
    chapters: string;
    share: string;
    copyLink: string;
    copied: string;
    emptyTitle: string;
    emptyBody: string;
    item: string;
    items: string;
    open: string;
    searchPlaceholder: string;
  };
  // Footer
  footer: {
    tagline: string;
    specializationsTitle: string;
    centersTitle: string;
    resourcesTitle: string;
    rightsReserved: string;
  };
}

const EN: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    subjects: 'Subjects',
    updates: 'Notice Board',
    studyMaterials: 'Study Materials',
    questionPapers: 'Question Papers',
    solutions: 'Solutions',
    contact: 'Contact',
    search: 'Search',
    admin: 'Admin'
  },
  banner: {
    announcement: 'Important Announcement',
    text: '📢 Admissions open for Class 10, 11 & 12 Maths batches. Check the Notice Board!',
    viewNotice: 'View Notice'
  },
  hero: {
    badge: '8+ Years of Teaching Mathematics',
    centersCount: '3 Coaching Centers',
    titleLine1: 'Learn Maths with',
    titleHighlight: 'Ranjeet Choudhary Sir',
    description: 'Clear, step-by-step Mathematics for Class 10, 11 and 12: Algebra, Calculus, Trigonometry and Probability, taught from first principles for CBSE Boards and JEE Main.',
    organicTitle: 'Algebra',
    organicSub: 'Equations, Sequences & Matrices',
    inorganicTitle: 'Calculus',
    inorganicSub: 'Limits, Derivatives & Integrals',
    practicalTitle: 'Geometry & Trigonometry',
    practicalSub: 'Triangles, Identities & Coordinates',
    ctaMaterials: 'Access Study Materials',
    ctaNotices: 'Notice Board & Updates',
    ctaContact: 'Email Ranjeet Sir',
    statStudents: '5,000+ Students Taught',
    statConcept: '100% Concept-Driven Learning',
    statPapers: 'Free Question Papers & Solutions',
    teacherCardRole: 'Mathematics Teacher • 8+ Years Exp',
    teachingAt: 'Teaching At',
    teachingCenters: '3 Coaching Centers',
    teachingExp: 'Experience',
    experienceYears: '8+ Years'
  },
  stats: {
    expTitle: '8+ Years',
    expDesc: 'Of classroom and board exam Maths teaching',
    centersTitle: '3 Coaching Centers',
    centersDesc: 'Active classroom batches across institutes',
    masteryTitle: '100% Conceptual',
    masteryDesc: 'Understanding why a method works, not just the steps',
    studentsTitle: '5,000+ Students',
    studentsDesc: 'Taught for CBSE Boards and JEE Main'
  },
  subjects: {
    badge: 'Core Maths Curriculum',
    title: 'Three pillars of school Mathematics',
    subtitle: 'A structured, first-principles way of teaching that helps students see why each formula works, practise it properly and write clean answers in exams.',
    organicName: 'Algebra',
    organicDesc: 'Polynomials, quadratic equations, sequences and series, matrices, determinants, permutations and the binomial theorem.',
    inorganicName: 'Calculus',
    inorganicDesc: 'Limits, continuity, differentiation and its applications, integration, area under curves and differential equations.',
    practicalName: 'Geometry & Trigonometry',
    practicalDesc: 'Triangles and circles, trigonometric ratios and identities, coordinate geometry, conic sections, vectors and 3D geometry.',
    exploreBtn: 'Explore Topics & Notes'
  },
  notices: {
    badge: 'Official Announcements',
    title: 'Latest Notices, Exam Dates & Batch Updates',
    subtitle: 'Test schedules, assignment deadlines, holiday notices and special doubt classes across all coaching centers.',
    viewAll: 'View All Notices',
    downloadBtn: 'Download Attachment',
    pinned: 'Pinned Announcement',
    allBatches: 'All Batches',
    clickToRead: 'Click to read full announcement'
  },
  materials: {
    badge: 'Free Study Material',
    title: 'Featured Chapter Notes & Formula Sheets',
    subtitle: 'Download PDF notes, formula sheets, solved examples and revision sheets prepared by Ranjeet Choudhary Sir.',
    viewVault: 'View All Study Material',
    previewBtn: 'Preview PDF',
    downloadBtn: 'Download PDF',
    downloadsText: 'downloads'
  },
  papersSolutions: {
    badge: 'Practice & Check',
    title: 'Latest Question Papers & Worked Solutions',
    subtitle: 'Practise with unit tests, previous year papers and board mock tests, then check every step with worked solutions.',
    viewSolution: 'View Solution',
    viewPaper: 'View Paper',
    downloadPdf: 'Download PDF',
    allPapersBtn: 'Browse All Papers',
    allSolutionsBtn: 'Browse All Solutions',
    solutionReady: 'Solution Available',
    officialKey: 'Worked Solution & Marking Key'
  },
  whyLearn: {
    badge: 'Teaching Method',
    title: 'Why Learn Maths with Ranjeet Sir?',
    subtitle: 'A 6-step method that turns formulas and long problems into clear, logical steps.',
    pillar1Title: 'First-Principles Foundation',
    pillar1Desc: 'Every formula is derived or explained before it is used, so students know where it comes from.',
    pillar2Title: 'Visual Understanding',
    pillar2Desc: 'Graphs, number lines and diagrams make abstract ideas like functions, limits and vectors easy to see.',
    pillar3Title: 'Solved Examples First',
    pillar3Desc: 'Each method is shown on a worked example before students try it themselves.',
    pillar4Title: 'Graded Practice',
    pillar4Desc: 'From NCERT and exemplar questions to board sample papers and JEE Main level problems.',
    pillar5Title: 'Mistake Analysis & Doubts',
    pillar5Desc: 'Regular test reviews to catch sign errors, calculation slips and common traps.',
    pillar6Title: 'Board Answer Writing',
    pillar6Desc: 'How to present 3-mark and 5-mark answers step by step so no marks are lost.'
  },
  portfolio: {
    badge: 'In the Classroom',
    title: 'Teaching Experience & Portfolio',
    subtitle: 'Classroom lectures, doubt sessions and test reviews with Ranjeet Sir.',
    bannerTag: 'Dedicated Academic Mentorship',
    bannerHeading: 'Active Batches Across 3 Coaching Centers',
    bannerSub: 'Guiding Class 10, 11 and 12 students and JEE Main aspirants.',
    readBio: 'Read Full Profile'
  },
  interactive: {
    badge: 'Concept explorer',
    title: 'Five key ideas, step by step',
    subtitle: 'Pick a topic to see the formula, the steps and why it matters in exams.',
    selectTopic: 'Select Maths Topic:',
    reactionBoxTitle: 'Key Formula',
    mechanismTitle: 'Step-by-Step Method:',
    takeawayTitle: 'Key Rule:',
    examRelevance: 'Why it matters in exams:'
  },
  cta: {
    badge: 'Admissions & Guidance',
    title: 'Ready to Score Well in Maths?',
    description: 'Join Ranjeet Choudhary Sir’s Class 10, 11 and 12 Maths batches. Limited seats for individual attention.',
    joinBtn: 'Send Admission Inquiry',
    emailBtn: 'Contact via Email'
  },
  contact: {
    title: 'Get in Touch with Ranjeet Choudhary Sir',
    subtitle: 'Have a question about batch timings, admissions or test series? Send an inquiry or reach out directly.',
    nameLabel: 'Your Full Name *',
    emailLabel: 'Email Address *',
    phoneLabel: 'Phone Number (Optional)',
    classLabel: 'Student Class',
    messageLabel: 'Your Message or Question *',
    sendBtn: 'Submit Inquiry Message',
    sending: 'Submitting...',
    centersTitle: 'Coaching Centers & Locations',
    schedulesTitle: 'Weekly Class Schedule',
    faqTitle: 'Frequently Asked Questions'
  },
  about: {
    heroBadge: 'Teacher Profile',
    heroTitle: 'About Ranjeet Choudhary Sir',
    heroDesc: 'Mathematics teacher with 8+ years of experience teaching Class 10, 11 and 12 students for Boards and JEE Main.',
    journeyBadge: 'Teaching Journey',
    journeyTitle: 'Making Maths Clear Through Logic and Practice',
    journeyP1: 'Ranjeet Choudhary Sir started teaching with one goal: to show students that Maths is not about memorising formulas but about understanding why they work. Over the past 8+ years he has taught Class 10, 11 and 12 Mathematics for CBSE Boards and JEE Main.',
    journeyP2: 'He holds a B.Sc., a B.Ed. and an M.Sc. in Mathematics. In class he builds every chapter from the basics, solves examples step by step on the board, and gives graded practice so that students can handle any question with confidence.',
    statExp: '8+',
    statExpLabel: 'Years Experience',
    statCenters: '3',
    statCentersLabel: 'Coaching Centers',
    statStudents: '5,000+',
    statStudentsLabel: 'Students Taught',
    philosophyBadge: 'Teaching Philosophy',
    philosophyQuote: '“Maths becomes easy when you understand the why, not just the how.”',
    philosophySub: 'The 6-step method followed in every batch and doubt class.',
    step1Title: '1. Build Strong Basics',
    step1Desc: 'Start every chapter from definitions and simple cases before moving to harder problems.',
    step2Title: '2. See the Idea',
    step2Desc: 'Use graphs, diagrams and number lines so that each concept makes visual sense.',
    step3Title: '3. Learn from Solved Examples',
    step3Desc: 'Work through model examples on the board, explaining the reason for every step.',
    step4Title: '4. Graded Practice',
    step4Desc: 'Practise from NCERT and exemplar questions up to board sample papers and JEE Main problems.',
    step5Title: '5. Detailed Mistake Analysis',
    step5Desc: 'Regular unit test reviews to catch sign errors, calculation slips and common traps.',
    step6Title: '6. Exam Temperament',
    step6Desc: 'Time management, neat step-wise presentation for board answers, and speed tactics for MCQs.',
    centersBadge: 'Teaching Locations',
    centersTitle: 'Active Coaching Center Batches',
    centersSub: 'Ranjeet Sir takes offline classes, doubt sessions and weekly tests at these coaching centers.',
    center1Name: 'Catalyst Career Institute',
    center1Batch: 'Class 12 Maths: Boards & JEE Main',
    center1Schedule: 'Mon, Wed, Fri • 4:30 PM – 7:30 PM (Sector 14 Center)',
    center2Name: 'Apex Science Academy',
    center2Batch: 'Class 11 Maths Foundation',
    center2Schedule: 'Tue, Thu, Sat • 4:30 PM – 7:30 PM (Model Town Center)',
    center3Name: 'Prerana Learning Hub',
    center3Batch: 'Class 10 Maths Board Batch',
    center3Schedule: 'Sunday Special • 9:00 AM – 2:00 PM (South Ext Center)',
    credentialsBadge: 'Qualifications',
    credentialsTitle: 'Academic Qualifications',
    credentialsSub: 'Formal qualifications behind Ranjeet Sir’s teaching.',
    qual1Title: 'Master of Science (M.Sc.) in Mathematics',
    qual1Desc: 'Postgraduate degree in Mathematics.',
    qual2Title: 'Bachelor of Education (B.Ed.)',
    qual2Desc: 'Trained in teaching methods, classroom assessment and remedial teaching.',
    qual3Title: 'Bachelor of Science (B.Sc.)',
    qual3Desc: 'Undergraduate degree with Mathematics.',
    qual4Title: '8+ Years Teaching Maths',
    qual4Desc: 'Teaching Class 10, 11 and 12 Mathematics for Boards and JEE Main.',
    ctaTitle: 'Learn Maths with Complete Clarity',
    ctaSub: 'Contact Ranjeet Sir for batch admissions, study material or guidance.',
    ctaContactBtn: 'Send Inquiry Message',
    ctaNotesBtn: 'Explore Study Materials'
  },
  pages: {
    allClasses: 'All Classes',
    allSubjects: 'All Subjects',
    allCategories: 'All Categories',
    allTypes: 'All Types',
    searchPlaceholder: 'Search by topic, chapter, or keyword...',
    downloadBtn: 'Download PDF',
    previewBtn: 'Preview PDF',
    viewSolutionBtn: 'View Solution',
    viewPaperBtn: 'View Paper',
    closeBtn: 'Close',
    noResults: 'No materials found matching your search criteria.',
    noResultsSub: 'Try adjusting your search keywords or removing selected filters.'
  },
  home: {
    eyebrow: 'Mathematics · Class 10, 11 & 12 · JEE Main',
    factYears: 'years of teaching',
    factCenters: 'coaching centres',
    factStudents: 'students taught',
    secAbout: 'About',
    aboutTitle: 'Concepts first. The marks follow.',
    readProfile: 'Read full profile',
    secSubjects: 'What he teaches',
    secMethod: 'Method',
    methodTitle: 'How a chapter is taught',
    secResources: 'Free resources',
    resourcesTitle: 'Notes, papers and worked solutions',
    latestNotes: 'Latest study material',
    latestPapers: 'Recent question papers',
    download: 'Download',
    paper: 'Paper',
    solution: 'Solution',
    viewAll: 'View all',
    secNotices: 'Notice board',
    readNotice: 'Read notice',
    secVisit: 'Join a batch',
    visitTitle: 'Study with Ranjeet Sir at a centre near you.',
    visitSub: 'Ask about batch timings, fees or a free demo class. You will get a reply within a day.',
    enquire: 'Send an enquiry',
    whatsapp: 'WhatsApp',
    call: 'Call',
    footerLine: 'Maths, understood.',
    resources: 'Resources',
    notesNav: 'Concept notes',
    articlesNav: 'Articles',
    learnLabel: 'Read & learn',
    learnTitle: 'Maths around you',
    learnSub: 'Short illustrated articles and simple chapter notes that make concepts click.',
    notesForClass: 'Concept notes for this class',
    allNotes: 'All concept notes',
    allArticles: 'All articles'
  },
  classes: {
    navLabel: 'Classes',
    chooseLabel: 'Your class',
    chooseTitle: 'Choose your class',
    chooseSub: 'Everything for your class in one place: notes, books, test papers, solutions and notices.',
    pageLabel: 'Class',
    everything: 'Everything',
    notesBooks: 'Notes & books',
    papers: 'Question papers',
    solutions: 'Solutions',
    notices: 'Notices',
    chapters: 'Chapters',
    share: 'Share on WhatsApp',
    copyLink: 'Copy link',
    copied: 'Link copied',
    emptyTitle: 'Nothing here yet',
    emptyBody: 'Ranjeet Sir will add material for this class soon. Please check back later.',
    item: 'item',
    items: 'items',
    open: 'Open',
    searchPlaceholder: 'Search this class…'
  },
  footer: {
    tagline: 'Helping students understand Algebra, Calculus, Geometry and Trigonometry with 8+ years of Maths teaching.',
    specializationsTitle: 'Specializations',
    centersTitle: 'Coaching Centers',
    resourcesTitle: 'Student Resources',
    rightsReserved: 'All rights reserved. Ranjeet Choudhary Maths.'
  }
};

const HI: Translations = {
  nav: {
    home: 'होम',
    about: 'परिचय',
    subjects: 'विषय',
    updates: 'नोटिस बोर्ड',
    studyMaterials: 'अध्ययन सामग्री',
    questionPapers: 'प्रश्न पत्र',
    solutions: 'समाधान',
    contact: 'संपर्क करें',
    search: 'खोजें',
    admin: 'एडमिन'
  },
  banner: {
    announcement: 'महत्वपूर्ण सूचना',
    text: '📢 कक्षा 10, 11 और 12 गणित बैच में प्रवेश शुरू। नोटिस बोर्ड देखें!',
    viewNotice: 'नोटिस देखें'
  },
  hero: {
    badge: 'गणित पढ़ाने का 8+ वर्षों का अनुभव',
    centersCount: '3 कोचिंग केंद्र',
    titleLine1: 'गणित को आसान बनाएं',
    titleHighlight: 'रणजीत चौधरी सर के साथ',
    description: 'कक्षा 10, 11 और 12 के लिए साफ़, चरण-दर-चरण गणित: बीजगणित, कलन, त्रिकोणमिति और प्रायिकता। CBSE बोर्ड और JEE मेन के लिए मूल से समझाया गया।',
    organicTitle: 'बीजगणित',
    organicSub: 'समीकरण, अनुक्रम और आव्यूह',
    inorganicTitle: 'कलन',
    inorganicSub: 'सीमा, अवकलज और समाकलन',
    practicalTitle: 'ज्यामिति एवं त्रिकोणमिति',
    practicalSub: 'त्रिभुज, सर्वसमिकाएँ और निर्देशांक',
    ctaMaterials: 'नोट्स डाउनलोड करें',
    ctaNotices: 'नोटिस बोर्ड देखें',
    ctaContact: 'सर को ईमेल भेजें',
    statStudents: '5,000+ विद्यार्थियों को पढ़ाया',
    statConcept: '100% कॉन्सेप्ट-आधारित पढ़ाई',
    statPapers: 'फ्री प्रश्न पत्र और समाधान',
    teacherCardRole: 'गणित शिक्षक • 8+ वर्ष अनुभव',
    teachingAt: 'पढ़ाने के केंद्र',
    teachingCenters: '3 कोचिंग केंद्र',
    teachingExp: 'अनुभव',
    experienceYears: '8+ वर्ष'
  },
  stats: {
    expTitle: '8+ वर्ष',
    expDesc: 'कक्षा और बोर्ड परीक्षा के लिए गणित पढ़ाने का अनुभव',
    centersTitle: '3 कोचिंग केंद्र',
    centersDesc: 'संस्थानों में नियमित और सक्रिय बैच',
    masteryTitle: '100% कॉन्सेप्ट',
    masteryDesc: 'सिर्फ़ स्टेप नहीं, यह भी समझना कि तरीका क्यों काम करता है',
    studentsTitle: '5,000+ विद्यार्थी',
    studentsDesc: 'CBSE बोर्ड और JEE मेन के लिए पढ़ाया'
  },
  subjects: {
    badge: 'गणित के मुख्य भाग',
    title: 'स्कूल गणित के तीन मुख्य स्तंभ',
    subtitle: 'मूल से पढ़ाने का व्यवस्थित तरीका, जिससे विद्यार्थी समझें कि हर सूत्र क्यों काम करता है, सही अभ्यास करें और परीक्षा में साफ़ उत्तर लिखें।',
    organicName: 'बीजगणित',
    organicDesc: 'बहुपद, द्विघात समीकरण, अनुक्रम और श्रेणी, आव्यूह, सारणिक, क्रमचय और द्विपद प्रमेय।',
    inorganicName: 'कलन',
    inorganicDesc: 'सीमा, सांतत्य, अवकलन और उसके अनुप्रयोग, समाकलन, वक्रों के नीचे का क्षेत्रफल और अवकल समीकरण।',
    practicalName: 'ज्यामिति एवं त्रिकोणमिति',
    practicalDesc: 'त्रिभुज और वृत्त, त्रिकोणमितीय अनुपात व सर्वसमिकाएँ, निर्देशांक ज्यामिति, शंकु परिच्छेद, सदिश और त्रिविमीय ज्यामिति।',
    exploreBtn: 'सिलेबस और नोट्स देखें'
  },
  notices: {
    badge: 'कक्षा सूचनाएं',
    title: 'ताज़ा नोटिस, परीक्षा तिथियां और क्लास अपडेट',
    subtitle: 'सभी कोचिंग केंद्रों के टेस्ट शेड्यूल, होमवर्क, डाउट क्लास और छुट्टी से जुड़ी जानकारी यहां देखें।',
    viewAll: 'सभी नोटिस देखें',
    downloadBtn: 'फाइल डाउनलोड करें',
    pinned: 'मुख्य नोटिस',
    allBatches: 'सभी बैच',
    clickToRead: 'पूरी सूचना पढ़ने के लिए क्लिक करें'
  },
  materials: {
    badge: 'मुफ़्त अध्ययन सामग्री',
    title: 'चैप्टर नोट्स और फॉर्मूला शीट्स',
    subtitle: 'रणजीत चौधरी सर द्वारा बनाए गए PDF नोट्स, सूत्र शीट, हल किए गए उदाहरण और रिवीज़न शीट डाउनलोड करें।',
    viewVault: 'सभी नोट्स देखें',
    previewBtn: 'PDF देखें',
    downloadBtn: 'डाउनलोड करें',
    downloadsText: 'डाउनलोड'
  },
  papersSolutions: {
    badge: 'अभ्यास और जाँच',
    title: 'प्रश्न पत्र और हल सहित समाधान',
    subtitle: 'यूनिट टेस्ट, पिछले वर्षों के पेपर और बोर्ड मॉक टेस्ट हल करें, फिर हर स्टेप को समाधान से जाँचें।',
    viewSolution: 'समाधान देखें',
    viewPaper: 'पेपर देखें',
    downloadPdf: 'PDF डाउनलोड करें',
    allPapersBtn: 'सभी प्रश्न पत्र',
    allSolutionsBtn: 'सभी समाधान',
    solutionReady: 'समाधान उपलब्ध',
    officialKey: 'हल सहित समाधान और अंक योजना'
  },
  whyLearn: {
    badge: 'पढ़ाने का तरीका',
    title: 'रणजीत सर से गणित क्यों पढ़ें?',
    subtitle: '6 चरणों का तरीका जो सूत्रों और लंबे सवालों को साफ़, तार्किक स्टेप में बदल देता है।',
    pillar1Title: 'मज़बूत मूल आधार',
    pillar1Desc: 'हर सूत्र को इस्तेमाल से पहले समझाया या सिद्ध किया जाता है, ताकि पता हो वह कहाँ से आया।',
    pillar2Title: 'चित्र से समझ',
    pillar2Desc: 'ग्राफ़, संख्या रेखा और चित्रों से फलन, सीमा और सदिश जैसे विचार आसानी से समझ आते हैं।',
    pillar3Title: 'पहले हल किए उदाहरण',
    pillar3Desc: 'हर तरीका पहले एक उदाहरण पर दिखाया जाता है, फिर विद्यार्थी खुद हल करते हैं।',
    pillar4Title: 'क्रमिक अभ्यास',
    pillar4Desc: 'NCERT और एक्ज़ेम्प्लर से लेकर बोर्ड सैंपल पेपर और JEE मेन स्तर तक के सवाल।',
    pillar5Title: 'गलतियों का विश्लेषण और डाउट',
    pillar5Desc: 'नियमित टेस्ट रिव्यू, जिसमें चिह्न की गलती, गणना की चूक और आम जाल पकड़े जाते हैं।',
    pillar6Title: 'बोर्ड उत्तर लेखन',
    pillar6Desc: '3 और 5 अंक के उत्तर स्टेप-वार कैसे लिखें ताकि कोई अंक न कटे।'
  },
  portfolio: {
    badge: 'कक्षा में',
    title: 'पढ़ाने का अनुभव',
    subtitle: 'रणजीत सर की कक्षाएँ, डाउट सेशन और टेस्ट रिव्यू।',
    bannerTag: 'समर्पित मार्गदर्शन',
    bannerHeading: '3 कोचिंग केंद्रों में सक्रिय बैच',
    bannerSub: 'कक्षा 10, 11 और 12 तथा JEE मेन के विद्यार्थियों का मार्गदर्शन।',
    readBio: 'पूरा परिचय पढ़ें'
  },
  interactive: {
    badge: 'कॉन्सेप्ट एक्सप्लोरर',
    title: 'पाँच मुख्य विचार, चरण-दर-चरण',
    subtitle: 'कोई विषय चुनें और सूत्र, स्टेप और परीक्षा में उसका महत्व देखें।',
    selectTopic: 'गणित का विषय चुनें:',
    reactionBoxTitle: 'मुख्य सूत्र',
    mechanismTitle: 'चरण-दर-चरण तरीका:',
    takeawayTitle: 'मुख्य नियम:',
    examRelevance: 'परीक्षा में महत्व:'
  },
  cta: {
    badge: 'प्रवेश और मार्गदर्शन',
    title: 'गणित में अच्छे अंक लाने के लिए तैयार हैं?',
    description: 'रणजीत चौधरी सर के कक्षा 10, 11 और 12 गणित बैच से जुड़ें। हर विद्यार्थी पर ध्यान देने के लिए सीमित सीटें।',
    joinBtn: 'प्रवेश के लिए पूछें',
    emailBtn: 'ईमेल से संपर्क करें'
  },
  contact: {
    title: 'रणजीत चौधरी सर से संपर्क करें',
    subtitle: 'बैच टाइमिंग, प्रवेश या टेस्ट सीरीज़ के बारे में कोई सवाल? संदेश भेजें या सीधे संपर्क करें।',
    nameLabel: 'आपका पूरा नाम *',
    emailLabel: 'ईमेल पता *',
    phoneLabel: 'फ़ोन नंबर (वैकल्पिक)',
    classLabel: 'विद्यार्थी की कक्षा',
    messageLabel: 'आपका संदेश या सवाल *',
    sendBtn: 'संदेश भेजें',
    sending: 'भेजा जा रहा है...',
    centersTitle: 'कोचिंग केंद्र और पते',
    schedulesTitle: 'साप्ताहिक कक्षा समय',
    faqTitle: 'अक्सर पूछे जाने वाले सवाल'
  },
  about: {
    heroBadge: 'शिक्षक परिचय',
    heroTitle: 'रणजीत चौधरी सर के बारे में',
    heroDesc: 'गणित शिक्षक, जिन्हें कक्षा 10, 11 और 12 के विद्यार्थियों को बोर्ड और JEE मेन के लिए पढ़ाने का 8+ वर्षों का अनुभव है।',
    journeyBadge: 'पढ़ाने का सफ़र',
    journeyTitle: 'तर्क और अभ्यास से गणित को साफ़ बनाना',
    journeyP1: 'रणजीत चौधरी सर ने एक लक्ष्य के साथ पढ़ाना शुरू किया: विद्यार्थियों को दिखाना कि गणित सूत्र रटने का नहीं, बल्कि यह समझने का विषय है कि वे क्यों काम करते हैं। पिछले 8+ वर्षों में उन्होंने कक्षा 10, 11 और 12 का गणित CBSE बोर्ड और JEE मेन के लिए पढ़ाया है।',
    journeyP2: 'उन्होंने B.Sc., B.Ed. और गणित में M.Sc. की है। कक्षा में वे हर अध्याय को मूल से शुरू करते हैं, बोर्ड पर उदाहरण चरण-दर-चरण हल करते हैं और क्रमिक अभ्यास देते हैं ताकि विद्यार्थी हर सवाल आत्मविश्वास से हल कर सकें।',
    statExp: '8+',
    statExpLabel: 'वर्षों का अनुभव',
    statCenters: '3',
    statCentersLabel: 'कोचिंग केंद्र',
    statStudents: '5,000+',
    statStudentsLabel: 'विद्यार्थियों को पढ़ाया',
    philosophyBadge: 'पढ़ाने का दर्शन',
    philosophyQuote: '“जब आप ‘क्यों’ समझ लेते हैं, सिर्फ़ ‘कैसे’ नहीं, तब गणित आसान हो जाता है।”',
    philosophySub: 'हर बैच और डाउट क्लास में अपनाया जाने वाला 6 चरणों का तरीका।',
    step1Title: '1. मज़बूत मूल आधार',
    step1Desc: 'हर अध्याय परिभाषाओं और आसान उदाहरणों से शुरू, फिर कठिन सवाल।',
    step2Title: '2. विचार को देखना',
    step2Desc: 'ग्राफ़, चित्र और संख्या रेखा से हर अवधारणा को समझना।',
    step3Title: '3. हल किए उदाहरणों से सीखना',
    step3Desc: 'बोर्ड पर मॉडल उदाहरण हल करना और हर स्टेप का कारण बताना।',
    step4Title: '4. क्रमिक अभ्यास',
    step4Desc: 'NCERT और एक्ज़ेम्प्लर से लेकर बोर्ड सैंपल पेपर और JEE मेन के सवाल तक।',
    step5Title: '5. गलतियों का विस्तृत विश्लेषण',
    step5Desc: 'नियमित यूनिट टेस्ट रिव्यू से चिह्न की गलती, गणना की चूक और आम जाल पकड़ना।',
    step6Title: '6. परीक्षा की तैयारी',
    step6Desc: 'समय प्रबंधन, बोर्ड उत्तरों का साफ़ स्टेप-वार लेखन और MCQ के लिए गति।',
    centersBadge: 'पढ़ाने के स्थान',
    centersTitle: 'कोचिंग केंद्रों के सक्रिय बैच',
    centersSub: 'रणजीत सर इन कोचिंग केंद्रों पर ऑफ़लाइन कक्षाएँ, डाउट सेशन और साप्ताहिक टेस्ट लेते हैं।',
    center1Name: 'कैटलिस्ट करियर इंस्टीट्यूट',
    center1Batch: 'कक्षा 12 गणित: बोर्ड और JEE मेन',
    center1Schedule: 'सोम, बुध, शुक्र • शाम 4:30 – 7:30 (सेक्टर 14 केंद्र)',
    center2Name: 'एपेक्स साइंस एकेडमी',
    center2Batch: 'कक्षा 11 गणित फ़ाउंडेशन',
    center2Schedule: 'मंगल, गुरु, शनि • शाम 4:30 – 7:30 (मॉडल टाउन केंद्र)',
    center3Name: 'प्रेरणा लर्निंग हब',
    center3Batch: 'कक्षा 10 गणित बोर्ड बैच',
    center3Schedule: 'रविवार विशेष • सुबह 9:00 – दोपहर 2:00 (साउथ एक्सटेंशन केंद्र)',
    credentialsBadge: 'योग्यताएँ',
    credentialsTitle: 'शैक्षणिक योग्यताएँ',
    credentialsSub: 'रणजीत सर की पढ़ाई और प्रशिक्षण।',
    qual1Title: 'गणित में M.Sc. (स्नातकोत्तर)',
    qual1Desc: 'गणित में स्नातकोत्तर उपाधि।',
    qual2Title: 'B.Ed. (शिक्षा स्नातक)',
    qual2Desc: 'शिक्षण विधियों, कक्षा मूल्यांकन और उपचारात्मक शिक्षण में प्रशिक्षित।',
    qual3Title: 'B.Sc. (विज्ञान स्नातक)',
    qual3Desc: 'गणित विषय के साथ स्नातक उपाधि।',
    qual4Title: '8+ वर्षों से गणित शिक्षण',
    qual4Desc: 'बोर्ड और JEE मेन के लिए कक्षा 10, 11 और 12 का गणित।',
    ctaTitle: 'पूरी स्पष्टता के साथ गणित सीखें',
    ctaSub: 'बैच प्रवेश, अध्ययन सामग्री या मार्गदर्शन के लिए रणजीत सर से संपर्क करें।',
    ctaContactBtn: 'संदेश भेजें',
    ctaNotesBtn: 'अध्ययन सामग्री देखें'
  },
  pages: {
    allClasses: 'सभी कक्षाएँ',
    allSubjects: 'सभी विषय',
    allCategories: 'सभी श्रेणियाँ',
    allTypes: 'सभी प्रकार',
    searchPlaceholder: 'विषय, अध्याय या शब्द से खोजें...',
    downloadBtn: 'PDF डाउनलोड करें',
    previewBtn: 'PDF देखें',
    viewSolutionBtn: 'समाधान देखें',
    viewPaperBtn: 'पेपर देखें',
    closeBtn: 'बंद करें',
    noResults: 'आपकी खोज से मेल खाती कोई सामग्री नहीं मिली।',
    noResultsSub: 'खोज के शब्द बदलें या चुने हुए फ़िल्टर हटाएँ।'
  },
  home: {
    eyebrow: 'गणित · कक्षा 10, 11 और 12 · JEE मेन',
    factYears: 'वर्षों का अनुभव',
    factCenters: 'कोचिंग केंद्र',
    factStudents: 'विद्यार्थियों को पढ़ाया',
    secAbout: 'परिचय',
    aboutTitle: 'पहले समझ, फिर अंक।',
    readProfile: 'पूरा परिचय पढ़ें',
    secSubjects: 'वे क्या पढ़ाते हैं',
    secMethod: 'तरीका',
    methodTitle: 'एक अध्याय कैसे पढ़ाया जाता है',
    secResources: 'मुफ़्त सामग्री',
    resourcesTitle: 'नोट्स, प्रश्न पत्र और हल सहित समाधान',
    latestNotes: 'नई अध्ययन सामग्री',
    latestPapers: 'हाल के प्रश्न पत्र',
    download: 'डाउनलोड',
    paper: 'पेपर',
    solution: 'समाधान',
    viewAll: 'सभी देखें',
    secNotices: 'नोटिस बोर्ड',
    readNotice: 'नोटिस पढ़ें',
    secVisit: 'बैच से जुड़ें',
    visitTitle: 'अपने पास के केंद्र पर रणजीत सर से पढ़ें।',
    visitSub: 'बैच टाइमिंग, फ़ीस या मुफ़्त डेमो क्लास के बारे में पूछें। एक दिन के अंदर जवाब मिलेगा।',
    enquire: 'पूछताछ भेजें',
    whatsapp: 'व्हाट्सऐप',
    call: 'कॉल करें',
    footerLine: 'गणित, जो समझ आए।',
    resources: 'सामग्री',
    notesNav: 'कॉन्सेप्ट नोट्स',
    articlesNav: 'लेख',
    learnLabel: 'पढ़ें और सीखें',
    learnTitle: 'हमारे आस-पास का गणित',
    learnSub: 'छोटे चित्र-सहित लेख और आसान अध्याय नोट्स जो अवधारणाएँ साफ़ कर दें।',
    notesForClass: 'इस कक्षा के कॉन्सेप्ट नोट्स',
    allNotes: 'सभी कॉन्सेप्ट नोट्स',
    allArticles: 'सभी लेख'
  },
  classes: {
    navLabel: 'कक्षाएँ',
    chooseLabel: 'आपकी कक्षा',
    chooseTitle: 'अपनी कक्षा चुनें',
    chooseSub: 'आपकी कक्षा की हर चीज़ एक जगह: नोट्स, किताबें, टेस्ट पेपर, समाधान और नोटिस।',
    pageLabel: 'कक्षा',
    everything: 'सब कुछ',
    notesBooks: 'नोट्स और किताबें',
    papers: 'प्रश्न पत्र',
    solutions: 'समाधान',
    notices: 'नोटिस',
    chapters: 'अध्याय',
    share: 'व्हाट्सऐप पर भेजें',
    copyLink: 'लिंक कॉपी करें',
    copied: 'लिंक कॉपी हो गया',
    emptyTitle: 'अभी यहाँ कुछ नहीं है',
    emptyBody: 'रणजीत सर जल्द ही इस कक्षा की सामग्री जोड़ेंगे। कृपया बाद में देखें।',
    item: 'सामग्री',
    items: 'सामग्री',
    open: 'खोलें',
    searchPlaceholder: 'इस कक्षा में खोजें…'
  },
  footer: {
    tagline: '8+ वर्षों के गणित शिक्षण के साथ विद्यार्थियों को बीजगणित, कलन, ज्यामिति और त्रिकोणमिति समझाना।',
    specializationsTitle: 'विशेषज्ञता',
    centersTitle: 'कोचिंग केंद्र',
    resourcesTitle: 'विद्यार्थी सामग्री',
    rightsReserved: 'सर्वाधिकार सुरक्षित। रणजीत चौधरी गणित।'
  }
};

// The site offers English and Hindi; the older "Hinglish" option reuses English.
export const TRANSLATIONS: Record<Language, Translations> = {
  en: EN,
  hi: HI,
  hinglish: EN,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  /** True when Hindi is selected */
  isHi: boolean;
  /** Inline bilingual string: L('Download', 'डाउनलोड') */
  L: (en: string, hi: string) => string;
  /** Content field with optional Hindi version: pick(item.title, item.titleHi) */
  pick: (en: string | undefined, hi?: string | undefined) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('ranjeet_maths_lang');
    } catch {
      // storage unavailable
    }
    // The site offers English and Hindi; an older "Hinglish" choice falls back to English.
    if (saved === 'hi') {
      // Restores the saved choice after mount; state update is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState('hi');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const setLanguage = (lang: Language) => {
    const next: Language = lang === 'hi' ? 'hi' : 'en';
    setLanguageState(next);
    try {
      localStorage.setItem('ranjeet_maths_lang', next);
    } catch {
      // storage unavailable
    }
  };

  const isHi = language === 'hi';
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const L = (en: string, hi: string) => (isHi ? hi : en);
  const pick = (en: string | undefined, hi?: string | undefined) => (isHi && hi && hi.trim() ? hi : en || '');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isHi, L, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
