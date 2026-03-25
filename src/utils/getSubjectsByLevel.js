const getSubjectsByLevel = (level) => {
  const SHS_SUBJECTS = [
    "Physics", "Chemistry", "Biology", "CoreMaths", "AddMaths",
    "English", "SocialStudies", "Geography", "Economics",
    "ElectiveICT", "Accounting", "CostAccounting", "BusinessManagement"
  ];

  const JHS_SUBJECTS = [
    "EnglishLanguage", "Maths", "CoreScience", "SocialStudies",
    "CareerTech", "Computing", "RME", "French", "CreativeArtsAndDesign"
  ];

  if (level === 'SHS') return SHS_SUBJECTS;
  if (level === 'JHS') return JHS_SUBJECTS;
  return [];
};

export default getSubjectsByLevel;
