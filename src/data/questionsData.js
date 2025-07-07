// SHS Imports
import physicsQuestions from './physicsQuestions';
import chemistryQuestions from './chemistryQuestions';
import addMathsQuestions from './addMathsQuestions';
import biologyQuestions from './shsBiologyQuestions';
import coreMathsQuestions from './coreMathsQuestions';
import coreScienceQuestions from './coreScienceQuestions';
import economicsQuestions from './economicsQuestions';
import geographyQuestions from './geographyQuestions';
import electiveictQuestions from './electiveictQuestions';
import englishQuestions from './englishQuestions';
import socialstudiesQuestions from './socialstudiesQuestions';
import accountingQuestions from './accountingQuestions';
import costAccountingQuestions from './costAccountingQuestions';
import businessManagementQuestions from './businessManagementQuestions';

// JHS Imports
import jhscareerTechQuestions from './jhscareerTechQuestions';
import jhscomputingQuestions from './jhscomputingQuestions';
import jhscoreScienceQuestions from './jhscoreScienceQuestions';
import jhscreativeArtsAndDesignQuestions from './jhscreativeArtsAndDesignQuestions';
import jhsenglishLanguageQuestions from './jhsenglishLanguageQuestions';
import jhsfrenchQuestions from './jhsfrenchQuestions';
import jhsrmeQuestions from './jhsrmeQuestions';
import jhssocialStudiesQuestions from './jhssocialStudiesQuestions';
import jhsmathsQuestions from './jhsmathsQuestions';

const questionsData = {
  SHS: {
    physics: physicsQuestions,
    chemistry: chemistryQuestions,
    addmaths: addMathsQuestions,
    biology: biologyQuestions,
    coremaths: coreMathsQuestions,
    corescience: coreScienceQuestions,
    economics: economicsQuestions,
    geography: geographyQuestions,
    electiveict: electiveictQuestions,
    english: englishQuestions,
    socialstudies: socialstudiesQuestions,
    accounting: accountingQuestions,
    costaccounting: costAccountingQuestions,
    businessmanagement: businessManagementQuestions,
  },
  JHS: {
    careertech: jhscareerTechQuestions,
    computing: jhscomputingQuestions,
    corescience: jhscoreScienceQuestions,
    creativeartsanddesign: jhscreativeArtsAndDesignQuestions,
    englishlanguage: jhsenglishLanguageQuestions,
    french: jhsfrenchQuestions,
    rme: jhsrmeQuestions,
    socialstudies: jhssocialStudiesQuestions,
    maths: jhsmathsQuestions,
  }
};

export default questionsData;