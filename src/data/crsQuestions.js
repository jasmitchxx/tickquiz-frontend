const crsQuestions = [
  {
    question: "Why were the seven deacons appointed in the early church?",
    options: ["To oversee financial donations only", "To assist the apostles in daily ministry and distribution", "To lead prayers in the temple", "To travel to other cities for evangelism"],
    answer: "To assist the apostles in daily ministry and distribution"
  },
  {
    question: "Which of the following was NOT a reason for the appointment of the seven deacons?",
    options: ["The widows were being neglected in daily food distribution", "The apostles needed time to preach and pray", "To stop persecution from authorities", "To maintain fairness in the community"],
    answer: "To stop persecution from authorities"
  },
  {
    question: "Who was the first Christian martyr?",
    options: ["Philip", "Stephen", "Saul", "Peter"],
    answer: "Stephen"
  },
  {
    question: "What was the main accusation against Stephen?",
    options: ["He stole money from the temple", "He spoke against Moses and God", "He refused to pay taxes", "He attacked Roman soldiers"],
    answer: "He spoke against Moses and God"
  },
  {
    question: "Which city became a center of evangelism due to the persecution of Christians?",
    options: ["Jerusalem", "Antioch", "Samaria", "Nazareth"],
    answer: "Samaria"
  },
  {
    question: "Philip's encounter with the Ethiopian eunuch highlights which of the following?",
    options: ["Importance of baptism and obedience to the Spirit", "The need to avoid non-Jews", "The value of wealth in ministry", "A call to military service"],
    answer: "Importance of baptism and obedience to the Spirit"
  },
  {
    question: "What was Saul doing before his conversion on the road to Damascus?",
    options: ["Helping the poor", "Persecuting Christians", "Preaching in synagogues", "Traveling to Rome"],
    answer: "Persecuting Christians"
  },
  {
    question: "After his conversion, Saul became known as:",
    options: ["Barnabas", "Paul", "Stephen", "Philip"],
    answer: "Paul"
  },
  {
    question: "What miracle happened to Peter at Joppa?",
    options: ["He healed a paralytic", "He raised Tabitha from the dead", "He fed 5", "000 people", "He walked on water"],
    answer: "He raised Tabitha from the dead"
  },
  {
    question: "Cornelius was notable for being:",
    options: ["A Roman centurion who feared God", "A Pharisee", "A Jewish high priest", "A merchant from Tyre"],
    answer: "A Roman centurion who feared God"
  },
  {
    question: "Peter defended his actions with Cornelius by stating:",
    options: ["God shows no favoritism and accepts all who fear Him", "Cornelius bribed him", "Only Jews should be saved", "He acted under Roman law"],
    answer: "God shows no favoritism and accepts all who fear Him"
  },
  {
    question: "Why was the church in Antioch significant?",
    options: ["It was the first Gentile church where disciples were called Christians", "It was the place of Paul's imprisonment", "It was a Jewish synagogue only", "It was built by Peter"],
    answer: "It was the first Gentile church where disciples were called Christians"
  },
  {
    question: "Who was martyred by Herod in Acts 12?",
    options: ["Peter", "James", "the brother of John", "Paul", "Barnabas"],
    answer: "James, the brother of John"
  },
  {
    question: "Peter's miraculous escape from prison demonstrates:",
    options: ["Human planning is enough to escape", "God's power and protection over His servants", "The weakness of Roman guards", "The importance of bribery"],
    answer: "God's power and protection over His servants"
  },
  {
    question: "What was a key lesson from Stephen's defense before the Sanhedrin?",
    options: ["Patience in suffering and faithfulness to God", "Avoid speaking in public", "Always seek political power", "Retaliate against oppressors"],
    answer: "Patience in suffering and faithfulness to God"
  },
  {
    question: "Which book of Acts records Philip and the Ethiopian eunuch?",
    options: ["Acts 2", "Acts 8", "Acts 15", "Acts 10"],
    answer: "Acts 8"
  },
  {
    question: "The apostles appointed deacons to ensure:",
    options: ["That preaching was halted", "Fair distribution to widows", "Collecting taxes", "Building the temple"],
    answer: "Fair distribution to widows"
  },
  {
    question: "Stephen accused the Jewish leaders of:",
    options: ["Rejecting the Holy Spirit and killing the prophets", "Being Roman collaborators", "Stealing temple gold", "Ignoring Moses' law"],
    answer: "Rejecting the Holy Spirit and killing the prophets"
  },
  {
    question: "The persecution of Christians led to:",
    options: ["The disappearance of the church", "The spread of the gospel beyond Jerusalem", "The closure of synagogues", "The rise of paganism"],
    answer: "The spread of the gospel beyond Jerusalem"
  },
  {
    question: "Saul's conversion illustrates:",
    options: ["That no one is beyond God's saving grace", "That only Jews can be saved", "That miracles never happen", "That Christians should avoid authorities"],
    answer: "That no one is beyond God's saving grace"
  },
  {
    question: "Which was a reason for convening the Council of Jerusalem?",
    options: ["Disputes over circumcision for Gentile converts", "Choosing new apostles", "Selecting a new high priest", "Translating the Scriptures"],
    answer: "Disputes over circumcision for Gentile converts"
  },
  {
    question: "The Council of Jerusalem decided that:",
    options: ["All Gentiles must be circumcised", "Gentiles need not follow the entire Mosaic Law", "No one should be baptized", "Jews must abandon the Law"],
    answer: "Gentiles need not follow the entire Mosaic Law"
  },
  {
    question: "A lesson from the Council of Jerusalem is that:",
    options: ["Dialogue can resolve church conflicts", "Violence is the solution", "Traditions should be ignored", "Gentiles are not welcome"],
    answer: "Dialogue can resolve church conflicts"
  },
  {
    question: "James emphasizes that faith without works is:",
    options: ["Sufficient for salvation", "Dead and ineffective", "Better than works", "Not required"],
    answer: "Dead and ineffective"
  },
  {
    question: "According to James, one demonstrates faith by:",
    options: ["Words only", "Actions and obedience", "Silence", "Attending synagogue"],
    answer: "Actions and obedience"
  },
  {
    question: "James warns against favoritism because it:",
    options: ["Promotes unity", "Causes division and sin", "Improves leadership", "Strengthens prayer life"],
    answer: "Causes division and sin"
  },
  {
    question: "A right attitude to prayer, according to James, includes:",
    options: ["Faith", "persistence", "and humility", "Only ritual repetition", "Ignoring God's will", "Avoiding fasting"],
    answer: "Faith, persistence, and humility"
  },
  {
    question: "Peter teaches good citizenship by advising Christians to:",
    options: ["Rebel against authorities", "Submit to government and do good", "Ignore taxes", "Prioritize wealth"],
    answer: "Submit to government and do good"
  },
  {
    question: "Christians living among non-Christians should:",
    options: ["Act with fear and secrecy", "Live honorable lives and avoid sin", "Follow pagan practices", "Remain isolated"],
    answer: "Live honorable lives and avoid sin"
  },
  {
    question: "Peter advises younger Christians to:",
    options: ["Submit to elders and resist the devil", "Lead rebellions", "Ignore elder guidance", "Avoid prayer"],
    answer: "Submit to elders and resist the devil"
  },
  {
    question: "Which is an example of interpersonal relationship among Christians?",
    options: ["Humility", "patience", "and love", "Jealousy and gossip", "Avoiding fellowship", "Seeking personal gain"],
    answer: "Humility, patience, and love"
  },
  {
    question: "Which of these is NOT part of Paul's first missionary journey?",
    options: ["Antioch", "Cyprus", "Lystra", "Rome"],
    answer: "Rome"
  },
  {
    question: "The main purpose of Paul's first missionary journey was to:",
    options: ["Spread the gospel to Jews and Gentiles", "Establish Roman law", "Collect taxes", "Build temples"],
    answer: "Spread the gospel to Jews and Gentiles"
  },
  {
    question: "Which of these cities did Paul visit first on his missionary journey?",
    options: ["Antioch", "Iconium", "Pisidian Antioch", "Lystra"],
    answer: "Pisidian Antioch"
  },
  {
    question: "The spread of Christianity to Antioch led to:",
    options: ["The term 'Christian' being used for the first time", "The church being destroyed", "Persecution ending", "Only Jewish converts"],
    answer: "The term 'Christian' being used for the first time"
  },
  {
    question: "The Council of Jerusalem's ruling allowed:",
    options: ["Gentiles to follow Mosaic Law fully", "Gentiles to follow select requirements", "No Gentiles were accepted", "Only circumcised Gentiles could join"],
    answer: "Gentiles to follow select requirements"
  },
  {
    question: "Which is a cause of unanswered prayers according to James?",
    options: ["Faith and humility", "Sin and selfish motives", "Persistence", "Seeking God's will"],
    answer: "Sin and selfish motives"
  },
  {
    question: "Partiality in the church can result in:",
    options: ["Unity", "Division and resentment", "Growth of faith", "Answered prayers"],
    answer: "Division and resentment"
  },
  {
    question: "Which of the following is a sign of good Christian citizenship?",
    options: ["Bribery", "Honesty and paying taxes", "Spreading rumors", "Rebellion"],
    answer: "Honesty and paying taxes"
  },
  {
    question: "The Ethiopian eunuch was reading which book when Philip approached him?",
    options: ["Genesis", "Isaiah", "Psalms", "Exodus"],
    answer: "Isaiah"
  },
  {
    question: "A key moral lesson from Saul's conversion is:",
    options: ["God can transform lives regardless of past actions", "Only the righteous can serve God", "Punishment is inevitable", "Wealth brings salvation"],
    answer: "God can transform lives regardless of past actions"
  },
  {
    question: "Stephen's speech to the Sanhedrin emphasizes:",
    options: ["Obedience to God over human authorities", "Rebellion against Rome", "Avoiding public debate", "Collecting money for the poor"],
    answer: "Obedience to God over human authorities"
  },
  {
    question: "A lesson from the early church persecution is that:",
    options: ["Misfortunes can lead to blessings and gospel spread", "Faith will always be easy", "Christians should hide", "Disobedience is rewarded"],
    answer: "Misfortunes can lead to blessings and gospel spread"
  },
  {
    question: "Which of the following cities did Paul and Barnabas first visit on their missionary journey?",
    options: ["Antioch in Syria", "Salamis", "Rome", "Corinth"],
    answer: "Salamis"
  },
  {
    question: "Paul's first missionary journey emphasized:",
    options: ["Teaching both Jews and Gentiles about Jesus", "Collecting money for the poor", "Building synagogues", "Fighting Roman authorities"],
    answer: "Teaching both Jews and Gentiles about Jesus"
  },
  {
    question: "Who accompanied Paul on his first missionary journey?",
    options: ["Silas", "Barnabas", "Timothy", "Luke"],
    answer: "Barnabas"
  },
  {
    question: "The question of circumcision at the Council of Jerusalem concerned:",
    options: ["Whether Gentile converts should follow Jewish law", "Whether Jewish converts should eat meat", "Whether to build churches in Rome", "Whether to baptize children only"],
    answer: "Whether Gentile converts should follow Jewish law"
  },
  {
    question: "The decision of the Council of Jerusalem allowed Gentile converts to:",
    options: ["Follow selected laws", "abstaining from idolatry", "sexual immorality", "and blood", "Follow all Jewish customs strictly", "Avoid baptism entirely", "Abandon all religious practices"],
    answer: "Follow selected laws, abstaining from idolatry, sexual immorality, and blood"
  },
  {
    question: "According to James, true faith is demonstrated by:",
    options: ["Prayer only", "Actions and good works", "Sermons", "Attendance at synagogue"],
    answer: "Actions and good works"
  },
  {
    question: "Favoritism in the church results in:",
    options: ["Unity and harmony", "Division", "resentment", "and sin", "Blessings for all", "Answered prayers"],
    answer: "Division, resentment, and sin"
  },
  {
    question: "James warns that prayers may go unanswered because of:",
    options: ["Faith and humility", "Sin and selfish motives", "Obedience", "Love for God"],
    answer: "Sin and selfish motives"
  },
  {
    question: "According to James, a person who claims to have faith but shows no works is:",
    options: ["Blameless", "Faithful", "Dead in faith", "Saved automatically"],
    answer: "Dead in faith"
  },
  {
    question: "Which of the following is an example of good Christian citizenship?",
    options: ["Bribery", "Honesty and paying taxes", "Rumor spreading", "Disobedience"],
    answer: "Honesty and paying taxes"
  },
  {
    question: "Christians living among non-Christians are encouraged to:",
    options: ["Hide their faith", "Live honorable lives and reflect God's values", "Participate in pagan practices", "Remain silent always"],
    answer: "Live honorable lives and reflect God's values"
  },
  {
    question: "Interpersonal relationships among Christians should reflect:",
    options: ["Humility", "patience", "and love", "Jealousy and competition", "Isolation", "Selfishness"],
    answer: "Humility, patience, and love"
  },
  {
    question: "One of the key teachings of Peter on interpersonal relationships is:",
    options: ["Elders should lead with love and care for the flock", "Ignore younger members", "Focus on wealth accumulation", "Always compete for leadership"],
    answer: "Elders should lead with love and care for the flock"
  },
  {
    question: "Paul emphasized that the mission of spreading the gospel:",
    options: ["Is only for Jews", "Should reach Jews and Gentiles alike", "Is optional", "Should be done secretly"],
    answer: "Should reach Jews and Gentiles alike"
  },
  {
    question: "Which of these cities did Paul visit on his first journey after Cyprus?",
    options: ["Pisidian Antioch", "Jerusalem", "Rome", "Corinth"],
    answer: "Pisidian Antioch"
  },
  {
    question: "Barnabas' role in Paul's journey was to:",
    options: ["Oppose him", "Encourage and support him", "Teach him Greek", "Fund the journey alone"],
    answer: "Encourage and support him"
  },
  {
    question: "The mission of Philip with the Ethiopian eunuch demonstrates:",
    options: ["Immediate obedience to the Spirit", "Cautious delay", "Seeking wealth first", "Avoiding Gentiles"],
    answer: "Immediate obedience to the Spirit"
  },
  {
    question: "The conversion of Cornelius shows that:",
    options: ["God shows favoritism", "God accepts all who fear Him", "Only Jews can be saved", "Gentiles are excluded"],
    answer: "God accepts all who fear Him"
  },
  {
    question: "Peter explained his actions with Cornelius by saying:",
    options: ["He was bribed", "God instructed him to accept Gentiles", "He ignored the law", "He acted independently"],
    answer: "God instructed him to accept Gentiles"
  },
  {
    question: "Stephen's death teaches Christians to:",
    options: ["Resist authority violently", "Be faithful even in persecution", "Abandon their faith", "Seek political power"],
    answer: "Be faithful even in persecution"
  },
  {
    question: "James emphasizes that showing favoritism is:",
    options: ["Acceptable in some cases", "A sin that harms the church", "Encouraged", "Required by law"],
    answer: "A sin that harms the church"
  },
  {
    question: "True faith according to James is:",
    options: ["Faith alone without works", "Faith shown in action and obedience", "Prayer only", "Attending services only"],
    answer: "Faith shown in action and obedience"
  },
  {
    question: "The right attitude to prayer includes:",
    options: ["Persistence", "faith", "and humility", "Ignoring God's will", "Selfish demands only", "Formal ritual only"],
    answer: "Persistence, faith, and humility"
  },
  {
    question: "Good citizenship involves:",
    options: ["Dishonesty", "Submitting to authorities and doing good", "Ignoring laws", "Promoting personal gain only"],
    answer: "Submitting to authorities and doing good"
  },
  {
    question: "Christians can show good citizenship by:",
    options: ["Paying taxes honestly", "Spreading rumors", "Engaging in bribery", "Avoiding responsibilities"],
    answer: "Paying taxes honestly"
  },
  {
    question: "Peter teaches that Christians living among non-Christians should:",
    options: ["Live honorable lives to glorify God", "Hide their faith completely", "Follow pagan customs", "Avoid interacting with neighbors"],
    answer: "Live honorable lives to glorify God"
  },
  {
    question: "Humility and patience among Christians help to:",
    options: ["Cause conflicts", "Build strong relationships", "Create division", "Increase jealousy"],
    answer: "Build strong relationships"
  },
  {
    question: "Peter's guidance to elders includes:",
    options: ["Serve willingly and guide with care", "Rule harshly", "Ignore the flock", "Seek personal gain"],
    answer: "Serve willingly and guide with care"
  },
  {
    question: "The moral lesson from Paul's journeys is that:",
    options: ["Mission requires courage and faith", "Avoid preaching to Gentiles", "Focus only on wealth", "Ministry is optional"],
    answer: "Mission requires courage and faith"
  },
  {
    question: "The spread of Christianity in Antioch led to:",
    options: ["Disciples were called Christians for the first time", "The church ended", "No Gentiles joined", "Only Jewish converts"],
    answer: "Disciples were called Christians for the first time"
  },
  {
    question: "James teaches that faith without works is:",
    options: ["Sufficient for salvation", "Dead and ineffective", "More important than works", "Required only for leaders"],
    answer: "Dead and ineffective"
  },
  {
    question: "Christians should avoid favoritism because it:",
    options: ["Builds harmony", "Leads to division and injustice", "Strengthens faith", "Improves reputation"],
    answer: "Leads to division and injustice"
  },
  {
    question: "The Ethiopian eunuch was baptized by Philip after:",
    options: ["Explaining the Scriptures and Jesus' role", "Asking the people to pray", "Consulting Jewish leaders", "Completing a ritual feast"],
    answer: "Explaining the Scriptures and Jesus' role"
  },
  {
    question: "The early church's persecution led to:",
    options: ["The gospel spreading to new regions", "Christians abandoning faith", "The destruction of churches", "Loss of converts"],
    answer: "The gospel spreading to new regions"
  },
  {
    question: "Peter's escape from prison illustrates:",
    options: ["God's power over human authorities", "Luck alone", "Bribery", "Roman weakness"],
    answer: "God's power over human authorities"
  },
  {
    question: "Stephen's speech reminds believers to:",
    options: ["Trust God and remain faithful", "Avoid all public speaking", "Ignore persecution", "Seek revenge"],
    answer: "Trust God and remain faithful"
  },
  {
    question: "A key teaching from Peter and James is that:",
    options: ["Faith and works should coexist", "Prayer is unnecessary", "Favoritism is acceptable", "Citizenship is irrelevant"],
    answer: "Faith and works should coexist"
  },
  {
    question: "Who accompanied Paul on his second missionary journey after Barnabas parted ways?",
    options: ["Timothy", "Silas", "Luke", "Mark"],
    answer: "Silas"
  },
  {
    question: "On the second missionary journey, Paul and Silas visited:",
    options: ["Philippi", "Thessalonica", "Berea", "Rome", "Athens", "Corinth", "Jerusalem", "Antioch", "Damascus", "Ephesus", "Crete", "Cyprus"],
    answer: "Philippi, Thessalonica, Berea"
  },
  {
    question: "Paul and Silas were imprisoned in Philippi for:",
    options: ["Stealing", "Casting out a spirit", "Teaching false doctrines", "Refusing to pay taxes"],
    answer: "Casting out a spirit"
  },
  {
    question: "The conversion of Lydia demonstrates:",
    options: ["Hospitality and faith", "Law enforcement in churches", "Rejection of Gentiles", "Avoiding baptism"],
    answer: "Hospitality and faith"
  },
  {
    question: "Paul's letters to the churches served to:",
    options: ["Teach", "correct", "and encourage believers", "Collect taxes", "Create divisions", "Replace the gospels"],
    answer: "Teach, correct, and encourage believers"
  },
  {
    question: "The effect of persecution on the early church was that it:",
    options: ["Spread the gospel to new regions", "Destroyed all churches", "Ended Christianity", "Made believers quit"],
    answer: "Spread the gospel to new regions"
  },
  {
    question: "Cornelius' household conversion shows that:",
    options: ["Faith is not limited by ethnicity", "Only Jews can be saved", "Faith requires circumcision", "Gentiles must adopt Jewish law entirely"],
    answer: "Faith is not limited by ethnicity"
  },
  {
    question: "Peter defended accepting Gentiles because:",
    options: ["God gave a vision instructing him to", "He wanted to avoid conflict", "It was a local custom", "He acted independently"],
    answer: "God gave a vision instructing him to"
  },
  {
    question: "Saul's conversion is recorded in which book of the Bible?",
    options: ["Acts", "Romans", "Galatians", "Corinthians"],
    answer: "Acts"
  },
  {
    question: "Stephen was the first Christian martyr because:",
    options: ["He boldly proclaimed Christ and faced opposition", "He was wealthy", "He traveled to Rome", "He baptized many"],
    answer: "He boldly proclaimed Christ and faced opposition"
  },
  {
    question: "The appointment of the seven deacons was to:",
    options: ["Ensure fair distribution of resources", "Lead the army", "Oversee taxation", "Replace apostles"],
    answer: "Ensure fair distribution of resources"
  },
  {
    question: "Nepotism and favoritism can result in:",
    options: ["Division and injustice", "Unity and growth", "Instant blessings", "Spiritual revival"],
    answer: "Division and injustice"
  },
  {
    question: "Philip's encounter with the Ethiopian eunuch highlights:",
    options: ["Immediate obedience to God's call", "Avoiding difficult missions", "Waiting for permission", "Disregarding Scripture"],
    answer: "Immediate obedience to God's call"
  },
  {
    question: "The Ethiopian eunuch was baptized in:",
    options: ["A river", "The temple", "His home", "A synagogue"],
    answer: "A river"
  },
  {
    question: "The church in Antioch is significant because:",
    options: ["Disciples were first called Christians there", "It was Paul's birthplace", "It rejected Gentiles", "It was the first Jewish synagogue"],
    answer: "Disciples were first called Christians there"
  },
  {
    question: "Peter's miraculous escape from prison shows:",
    options: ["God's power over authorities", "Luck alone", "Roman incompetence", "Bribery"],
    answer: "God's power over authorities"
  },
  {
    question: "Good citizenship for Christians includes:",
    options: ["Obedience to authorities and honesty", "Bribery", "Rumor spreading", "Neglecting duties"],
    answer: "Obedience to authorities and honesty"
  },
  {
    question: "Paul emphasized that the gospel should:",
    options: ["Reach Jews and Gentiles alike", "Be limited to Jews", "Ignore Gentiles", "Remain secretive"],
    answer: "Reach Jews and Gentiles alike"
  },
  {
    question: "Impartiality, according to James, means:",
    options: ["Not showing favoritism", "Choosing wealthy over poor", "Judging based on appearance", "Ignoring the needy"],
    answer: "Not showing favoritism"
  },
  {
    question: "Prayers may go unanswered because of:",
    options: ["Sinful motives and lack of faith", "Faith alone", "Good deeds only", "Attending services"],
    answer: "Sinful motives and lack of faith"
  },
  {
    question: "Interpersonal relationships among Christians should be based on:",
    options: ["Humility", "patience", "and love", "Competition", "Jealousy", "Isolation"],
    answer: "Humility, patience, and love"
  },
  {
    question: "Paul's encouragement to new churches included:",
    options: ["Endurance in trials and faithfulness", "Immediate wealth", "Political power", "Ignoring Jewish customs"],
    answer: "Endurance in trials and faithfulness"
  },
  {
    question: "The Council of Jerusalem demonstrates that:",
    options: ["Dialogue resolves conflicts in the church", "Faith is optional", "Only Jews are acceptable", "Rules can be ignored"],
    answer: "Dialogue resolves conflicts in the church"
  },
  {
    question: "Christians can demonstrate good citizenship by:",
    options: ["Paying taxes honestly and doing good deeds", "Ignoring laws", "Spreading rumors", "Seeking personal gain only"],
    answer: "Paying taxes honestly and doing good deeds"
  },
  {
    question: "Stephen's defense before the Sanhedrin highlights:",
    options: ["Faith", "courage", "and truth", "Avoidance of conflict", "Disobedience", "Seeking revenge"],
    answer: "Faith, courage, and truth"
  },
  {
    question: "The spread of Christianity due to persecution shows that:",
    options: ["Misfortunes can lead to blessings", "Faith fails under pressure", "Only Jerusalem matters", "God abandons the church"],
    answer: "Misfortunes can lead to blessings"
  },
  {
    question: "Paul's letters encourage Christians to:",
    options: ["Remain faithful and live morally upright lives", "Avoid prayer", "Ignore church teaching", "Focus on wealth"],
    answer: "Remain faithful and live morally upright lives"
  },
  {
    question: "Favoritism and nepotism affect the church by:",
    options: ["Creating division and resentment", "Building unity", "Encouraging good works", "Increasing blessings"],
    answer: "Creating division and resentment"
  },
  {
    question: "The decision of the Council of Jerusalem impacted the early church by:",
    options: ["Allowing Gentiles to join without full adherence to Jewish law", "Excluding all Gentiles", "Requiring full circumcision", "Ending missionary work"],
    answer: "Allowing Gentiles to join without full adherence to Jewish law"
  },
  {
    question: "Paul and Silas' imprisonment in Philippi led to:",
    options: ["Conversion of the jailer and family", "Church closure", "Abandoning the mission", "Violent retaliation"],
    answer: "Conversion of the jailer and family"
  },
  {
    question: "Peter's teaching on Christians living among non-Christians highlights:",
    options: ["Honorable conduct and submission", "Isolation", "Rebellion", "Ignoring moral duties"],
    answer: "Honorable conduct and submission"
  },
  {
    question: "The mission of Philip and the eunuch emphasizes:",
    options: ["Prompt obedience to God's guidance", "Delay in action", "Selective ministry", "Avoiding Gentiles"],
    answer: "Prompt obedience to God's guidance"
  },
  {
    question: "The early church spread despite persecution because:",
    options: ["Believers remained faithful and preached boldly", "They fled and abandoned the faith", "They gave in to authorities", "Only Jews converted"],
    answer: "Believers remained faithful and preached boldly"
  },
  {
    question: "James' teaching on works complements faith by showing that:",
    options: ["Faith without action is dead", "Faith alone is sufficient", "Works alone save", "Prayer alone is enough"],
    answer: "Faith without action is dead"
  },
  {
    question: "Good interpersonal relationships among Christians lead to:",
    options: ["Unity", "harmony", "and effective witness", "Conflict", "Division", "Isolation"],
    answer: "Unity, harmony, and effective witness"
  },
  {
    question: "The moral lesson from Peter and James includes:",
    options: ["Faith", "works", "prayer", "and honorable conduct", "Faith only", "Ignoring laws", "Favoring the rich"],
    answer: "Faith, works, prayer, and honorable conduct"
  },
  {
    question: "Paul's perseverance in missionary journeys teaches Christians to:",
    options: ["Endure trials and remain faithful", "Quit when persecuted", "Seek revenge", "Avoid preaching to Gentiles"],
    answer: "Endure trials and remain faithful"
  },
  {
    question: "The first Christian martyr, Stephen, exemplifies:",
    options: ["Faithfulness and courage under persecution", "Avoidance of confrontation", "Pursuit of power", "Compromise with authorities"],
    answer: "Faithfulness and courage under persecution"
  },
  {
    question: "The role of deacons in the early church was to:",
    options: ["Assist in practical needs and service", "Lead worship alone", "Fight persecution", "Write letters"],
    answer: "Assist in practical needs and service"
  },
  {
    question: "The spread of the gospel through persecution shows that:",
    options: ["God can turn misfortune into blessings", "Faith is weak under trials", "Persecution ends the church", "Believers lose hope"],
    answer: "God can turn misfortune into blessings"
  },
  {
    question: "Paul's third missionary journey focused largely on which city?",
    options: ["Ephesus", "Rome", "Philippi", "Corinth"],
    answer: "Ephesus"
  },
  {
    question: "During his journeys, Paul often appointed elders to:",
    options: ["Shepherd and guide local churches", "Collect taxes", "Fight persecution", "Perform miracles only"],
    answer: "Shepherd and guide local churches"
  },
  {
    question: "Paul advised Christians to be wise in dealings with:",
    options: ["Non-believers", "Only family", "Jewish leaders", "Roman soldiers"],
    answer: "Non-believers"
  },
  {
    question: "One effect of Paul's letters was to:",
    options: ["Strengthen faith and moral living", "Create divisions", "Ignore Jewish believers", "Focus on wealth"],
    answer: "Strengthen faith and moral living"
  },
  {
    question: "The Council of Jerusalem ruled that Gentiles should:",
    options: ["Not be burdened with full Jewish law", "Undergo circumcision", "Be excluded from churches", "Abandon faith"],
    answer: "Not be burdened with full Jewish law"
  },
  {
    question: "James teaches that favoritism can lead to:",
    options: ["Division and sin", "Unity and blessing", "Immediate miracles", "Protection from persecution"],
    answer: "Division and sin"
  },
  {
    question: "Prayers not answered may result from:",
    options: ["Unrepented sin or selfish motives", "Faithful worship", "Living morally", "Helping the poor"],
    answer: "Unrepented sin or selfish motives"
  },
  {
    question: "Peter's advice to elders includes:",
    options: ["Shepherd the flock willingly", "Avoid responsibility", "Seek honor from men", "Ignore challenges"],
    answer: "Shepherd the flock willingly"
  },
  {
    question: "Paul and Barnabas separated because of a disagreement over:",
    options: ["John Mark joining the mission", "Financial matters", "Doctrinal differences", "Roman authorities"],
    answer: "John Mark joining the mission"
  },
  {
    question: "The conversion of Saul demonstrates:",
    options: ["Transformation through Christ", "Physical healing", "Political gain", "Avoiding persecution"],
    answer: "Transformation through Christ"
  },
  {
    question: "Stephen's martyrdom resulted in:",
    options: ["Increased spread of Christianity", "Immediate church collapse", "Jewish conversion only", "Halt of missionary work"],
    answer: "Increased spread of Christianity"
  },
  {
    question: "The appointment of the seven deacons addressed:",
    options: ["Fair distribution to widows", "Church finance alone", "Missionary travels", "Temple rituals"],
    answer: "Fair distribution to widows"
  },
  {
    question: "Peter defended his actions toward Cornelius because:",
    options: ["God directed him in a vision", "He wished to please Jews", "He acted independently", "He avoided debate"],
    answer: "God directed him in a vision"
  },
  {
    question: "Paul's letters often contain instructions on:",
    options: ["Faith", "moral living", "and church order", "Roman law", "Jewish sacrifices", "Political strategy"],
    answer: "Faith, moral living, and church order"
  },
  {
    question: "The early church faced persecution from:",
    options: ["Religious leaders and political authorities", "Only other Christians", "Local merchants", "Foreign kings only"],
    answer: "Religious leaders and political authorities"
  },
  {
    question: "Impartiality in the church prevents:",
    options: ["Favoritism and discrimination", "Unity and growth", "Prayer", "Faith development"],
    answer: "Favoritism and discrimination"
  },
  {
    question: "Paul encouraged believers to remain steadfast in:",
    options: ["Persecution and trials", "Political affairs", "Wealth accumulation", "Jewish rituals only"],
    answer: "Persecution and trials"
  },
  {
    question: "Christians' interpersonal relationships should be marked by:",
    options: ["Humility", "patience", "and love", "Competitiveness and envy", "Isolation", "Favoritism"],
    answer: "Humility, patience, and love"
  },
  {
    question: "Saul's conversion changed him from:",
    options: ["Persecutor of Christians to apostle", "A fisherman to a soldier", "A king to a priest", "A tax collector to prophet"],
    answer: "Persecutor of Christians to apostle"
  },
  {
    question: "The church in Antioch is notable because:",
    options: ["Believers were first called Christians", "It was the first synagogue", "It rejected Gentiles", "It was the center of Jerusalem authority"],
    answer: "Believers were first called Christians"
  },
  {
    question: "Prayers should be offered with:",
    options: ["Faith", "humility", "and righteous motives", "Pride and selfish motives", "Random words", "For show only"],
    answer: "Faith, humility, and righteous motives"
  },
  {
    question: "The Council of Jerusalem is an example of:",
    options: ["Conflict resolution through dialogue", "Ignoring disagreements", "Forcing uniformity", "Avoiding Gentiles"],
    answer: "Conflict resolution through dialogue"
  },
  {
    question: "Favoritism and nepotism in the church can lead to:",
    options: ["Resentment and division", "Blessings and unity", "Faith growth", "Moral development"],
    answer: "Resentment and division"
  },
  {
    question: "Peter's teaching on living among non-Christians emphasizes:",
    options: ["Conduct worthy of God", "Avoiding all interaction", "Compromising faith", "Seeking worldly power"],
    answer: "Conduct worthy of God"
  },
  {
    question: "Stephen's defense before the council teaches:",
    options: ["Courage and faith in God", "Rebellion", "Self-defense alone", "Avoiding truth"],
    answer: "Courage and faith in God"
  },
  {
    question: "The effect of persecution on the early church includes:",
    options: ["Wider spread of the gospel", "Complete destruction", "Conversion of only Jews", "Halt in missionary work"],
    answer: "Wider spread of the gospel"
  },
  {
    question: "Paul's letters to new churches are meant to:",
    options: ["Instruct", "correct", "and encourage believers", "Collect money only", "Replace Scripture", "Limit Gentile participation"],
    answer: "Instruct, correct, and encourage believers"
  },
  {
    question: "Good interpersonal relationships among Christians produce:",
    options: ["Unity", "harmony", "and effective witness", "Conflict and jealousy", "Favoritism", "Isolation"],
    answer: "Unity, harmony, and effective witness"
  },
  {
    question: "Faith without works, according to James, is:",
    options: ["Dead", "Sufficient", "Superior to works", "Optional"],
    answer: "Dead"
  },
  {
    question: "Paul and Silas' imprisonment led to:",
    options: ["Conversion of the jailer", "Church destruction", "Abandonment of mission", "Violence"],
    answer: "Conversion of the jailer"
  },
  {
    question: "The mission of Philip demonstrates:",
    options: ["Prompt obedience and evangelism", "Delaying ministry", "Avoiding challenges", "Selective teaching"],
    answer: "Prompt obedience and evangelism"
  },
  {
    question: "Christians living among non-Christians should display:",
    options: ["Moral integrity and godly conduct", "Avoid interaction", "Worldly compromise", "Neglect"],
    answer: "Moral integrity and godly conduct"
  },
  {
    question: "The early church's response to persecution shows that:",
    options: ["Faith and courage can overcome trials", "Persecution destroys faith", "Believers flee", "Only Jews convert"],
    answer: "Faith and courage can overcome trials"
  },
  {
    question: "Peter instructed Christians to:",
    options: ["Resist the devil and submit to God", "Follow men blindly", "Ignore temptation", "Seek worldly honor"],
    answer: "Resist the devil and submit to God"
  },
  {
    question: "The spread of Christianity through persecution illustrates:",
    options: ["God turns trials into blessings", "Faith weakens", "Mission stops", "Church fails"],
    answer: "God turns trials into blessings"
  },
  {
    question: "Stephen's martyrdom is a model of:",
    options: ["Faithfulness and courage", "Avoiding confrontation", "Seeking revenge", "Compromising faith"],
    answer: "Faithfulness and courage"
  },
  {
    question: "The role of deacons in the early church was:",
    options: ["Practical service and distribution of resources", "Only teaching", "Leading armies", "Performing miracles alone"],
    answer: "Practical service and distribution of resources"
  },
  {
    question: "The Council of Jerusalem allowed Gentiles to:",
    options: ["Join the church without full adherence to Jewish law", "Be excluded", "Undergo full circumcision", "Abandon faith"],
    answer: "Join the church without full adherence to Jewish law"
  },
  {
    question: "Paul's missionary journeys teach Christians to:",
    options: ["Persevere despite persecution", "Quit when threatened", "Seek power", "Avoid Gentiles"],
    answer: "Persevere despite persecution"
  },
  {
    question: "James' teaching on works demonstrates:",
    options: ["Faith must be accompanied by action", "Faith alone is enough", "Prayer alone suffices", "Ignoring deeds is acceptable"],
    answer: "Faith must be accompanied by action"
  },
  {
    question: "Paul advised Christians to bear trials with:",
    options: ["Patience and faith", "Anger and revenge", "Fear and avoidance", "Indifference"],
    answer: "Patience and faith"
  },
  {
    question: "The Epistle of James emphasizes that:",
    options: ["Faith without works is dead", "Faith alone is sufficient", "Works are optional", "Prayer replaces faith"],
    answer: "Faith without works is dead"
  },
  {
    question: "Favoritism in the church can lead to:",
    options: ["Division and injustice", "Unity and growth", "Blessings only", "Faith strengthening"],
    answer: "Division and injustice"
  },
  {
    question: "Peter taught that elders should:",
    options: ["Shepherd the flock willingly", "Ignore challenges", "Seek personal gain", "Delegate everything"],
    answer: "Shepherd the flock willingly"
  },
  {
    question: "Paul's missionary journeys contributed to:",
    options: ["The spread of Christianity to new regions", "Limiting Christianity to Jerusalem", "Political dominance", "Roman favor only"],
    answer: "The spread of Christianity to new regions"
  },
  {
    question: "Prayers not answered may be due to:",
    options: ["Unrepented sin or selfish motives", "Faithful devotion", "Helping others", "Regular church attendance"],
    answer: "Unrepented sin or selfish motives"
  },
  {
    question: "Stephen's martyrdom teaches Christians to:",
    options: ["Stand firm in faith despite opposition", "Avoid challenges", "Seek revenge", "Ignore the truth"],
    answer: "Stand firm in faith despite opposition"
  },
  {
    question: "Paul and Barnabas separated due to:",
    options: ["Disagreement over John Mark", "Financial disputes", "Doctrinal differences", "Roman pressure"],
    answer: "Disagreement over John Mark"
  },
  {
    question: "The early church spread during persecution because:",
    options: ["Believers fled and shared the gospel", "Persecution ended church work", "Faith collapsed", "Only leaders moved"],
    answer: "Believers fled and shared the gospel"
  },
  {
    question: "Paul emphasized that Christians should be:",
    options: ["Courageous in faith and mission", "Passive and fearful", "Worldly-minded", "Exclusive to Jews"],
    answer: "Courageous in faith and mission"
  },
  {
    question: "Interpersonal relationships among Christians should be marked by:",
    options: ["Humility", "patience", "and love", "Jealousy and competition", "Favoritism", "Indifference"],
    answer: "Humility, patience, and love"
  },
  {
    question: "Philip's encounter with the Ethiopian eunuch illustrates:",
    options: ["Immediate obedience to the Holy Spirit", "Avoiding foreigners", "Delaying ministry", "Seeking personal gain"],
    answer: "Immediate obedience to the Holy Spirit"
  },
  {
    question: "The role of deacons in the early church included:",
    options: ["Practical service and caring for the needy", "Only preaching", "Military leadership", "Judicial authority"],
    answer: "Practical service and caring for the needy"
  },
  {
    question: "Christians should respond to persecution with:",
    options: ["Faith and courage", "Anger and retaliation", "Fear and hiding", "Neglect of duty"],
    answer: "Faith and courage"
  },
  {
    question: "Paul encouraged believers to:",
    options: ["Stand firm in faith and resist false teachings", "Follow traditions blindly", "Ignore moral conduct", "Focus only on rituals"],
    answer: "Stand firm in faith and resist false teachings"
  },
  {
    question: "Peter taught that Christians should:",
    options: ["Submit to authorities and live honorably", "Rebel against rulers", "Ignore civic duties", "Seek personal gain"],
    answer: "Submit to authorities and live honorably"
  },
  {
    question: "James' advice on prayer emphasizes:",
    options: ["Faith", "patience", "and righteous motives", "Random requests", "Selfish desires only", "Ignoring sin"],
    answer: "Faith, patience, and righteous motives"
  },
  {
    question: "Paul's letters aimed to:",
    options: ["Instruct", "correct", "and encourage believers", "Collect funds only", "Replace Scripture", "Limit Gentiles"],
    answer: "Instruct, correct, and encourage believers"
  },
  {
    question: "Favoritism and nepotism lead to:",
    options: ["Division and resentment", "Unity and growth", "Faith strengthening", "Blessings only"],
    answer: "Division and resentment"
  },
  {
    question: "Christians living among non-Christians should exhibit:",
    options: ["Integrity", "honesty", "and moral conduct", "Compromise faith", "Avoid interaction", "Disregard laws"],
    answer: "Integrity, honesty, and moral conduct"
  },
  {
    question: "Stephen's trial and defense teach:",
    options: ["Courage", "faith", "and standing for truth", "Avoiding responsibility", "Selfish motives", "Ignoring authority"],
    answer: "Courage, faith, and standing for truth"
  },
  {
    question: "The Council of Jerusalem addressed:",
    options: ["Whether Gentiles must follow Jewish law fully", "Church finance only", "Mission strategy", "Leadership disputes"],
    answer: "Whether Gentiles must follow Jewish law fully"
  },
  {
    question: "Paul advised Christians to:",
    options: ["Endure trials with faith and perseverance", "Seek comfort only", "Avoid challenges", "Focus on worldly gain"],
    answer: "Endure trials with faith and perseverance"
  },
  {
    question: "Interpersonal Christian relationships should reflect:",
    options: ["Love", "humility", "and patience", "Jealousy", "rivalry", "and pride", "Favoritism", "Isolation"],
    answer: "Love, humility, and patience"
  },
  {
    question: "Paul's conversion illustrates:",
    options: ["Transformation through Christ", "Escape from danger", "Political gain", "Avoiding persecution"],
    answer: "Transformation through Christ"
  },
  {
    question: "Peter's teaching on elders includes:",
    options: ["Shepherding willingly and being examples", "Delegating completely", "Seeking honor from men", "Ignoring challenges"],
    answer: "Shepherding willingly and being examples"
  },
  {
    question: "Good citizenship according to Peter includes:",
    options: ["Obeying laws", "paying taxes", "and moral conduct", "Bribery and favoritism", "Avoiding civic duties", "Seeking wealth only"],
    answer: "Obeying laws, paying taxes, and moral conduct"
  },
  {
    question: "The spread of Christianity during persecution shows that:",
    options: ["God turns trials into blessings", "Faith collapses under pressure", "Only leaders survive", "Church fails"],
    answer: "God turns trials into blessings"
  },
  {
    question: "Philip's mission demonstrates:",
    options: ["Prompt obedience and evangelism", "Delaying ministry", "Avoiding challenges", "Selective ministry"],
    answer: "Prompt obedience and evangelism"
  },
  {
    question: "The role of deacons included:",
    options: ["Practical service and caring for the needy", "Only preaching", "Military leadership", "Judicial authority"],
    answer: "Practical service and caring for the needy"
  },
  {
    question: "Faith must be accompanied by:",
    options: ["Works", "Prayer only", "Rituals only", "Silence"],
    answer: "Works"
  },
  {
    question: "Paul's letters teach:",
    options: ["Faith", "moral living", "and church order", "Jewish law only", "Political strategy", "Temple rituals only"],
    answer: "Faith, moral living, and church order"
  },
  {
    question: "Stephen's example encourages Christians to:",
    options: ["Remain faithful despite opposition", "Avoid confrontation", "Seek revenge", "Compromise truth"],
    answer: "Remain faithful despite opposition"
  },
  {
    question: "Favoritism and nepotism result in:",
    options: ["Resentment and division", "Unity and blessing", "Faith growth", "Blessings only"],
    answer: "Resentment and division"
  },
  {
    question: "Christians should live among non-Christians to:",
    options: ["Demonstrate godly behavior and witness", "Hide their faith", "Seek worldly gain", "Compromise values"],
    answer: "Demonstrate godly behavior and witness"
  },
  {
    question: "Christians should show good citizenship by:",
    options: ["Obeying laws", "paying taxes", "and serving society", "Ignoring laws", "Focusing only on wealth", "Being passive"],
    answer: "Obeying laws, paying taxes, and serving society"
  },
  {
    question: "Saul's conversion on the road to Damascus shows:",
    options: ["Transformation by Christ", "Escape from persecution", "Political ambition", "Avoiding Jewish law"],
    answer: "Transformation by Christ"
  },
  {
    question: "Cornelius and his household were converted because:",
    options: ["Peter preached God's word faithfully", "They followed the law blindly", "They sought wealth", "They avoided faith"],
    answer: "Peter preached God's word faithfully"
  },
  {
    question: "Peter defended his actions towards Cornelius by saying:",
    options: ["God shows no favoritism", "Gentiles are inferior", "Law must be enforced strictly", "Conversion is optional"],
    answer: "God shows no favoritism"
  },
  {
    question: "The mission of Philip to Samaria demonstrates:",
    options: ["The spread of the gospel beyond Jerusalem", "Avoiding foreigners", "Focusing only on Jews", "Limiting evangelism"],
    answer: "The spread of the gospel beyond Jerusalem"
  },
  {
    question: "Paul's first missionary journey included visits to:",
    options: ["Cyprus and Asia Minor", "Rome only", "Jerusalem only", "Egypt and Libya"],
    answer: "Cyprus and Asia Minor"
  },
  {
    question: "The decision of the Council of Jerusalem allowed:",
    options: ["Gentiles to join the church without circumcision", "Gentiles to be excluded", "Full Jewish law for Gentiles", "Abandoning faith"],
    answer: "Gentiles to join the church without circumcision"
  },
  {
    question: "The dispersion of the church led to:",
    options: ["The wider spread of Christianity", "Decline of faith", "Limited influence", "Isolation of believers"],
    answer: "The wider spread of Christianity"
  },
  {
    question: "The martyrdom of James teaches Christians to:",
    options: ["Remain faithful despite danger", "Avoid all responsibility", "Seek revenge", "Neglect prayer"],
    answer: "Remain faithful despite danger"
  },
  {
    question: "The gospel reached Antioch because:",
    options: ["Believers were scattered and evangelized", "Only Peter preached there", "Missionaries avoided the city", "Jews alone converted"],
    answer: "Believers were scattered and evangelized"
  },
  {
    question: "Faith demonstrated in works is important because:",
    options: ["It shows true belief in action", "Faith alone is visible", "Works replace faith", "Faith is private only"],
    answer: "It shows true belief in action"
  },
  {
    question: "Favoritism in the church leads to:",
    options: ["Division and conflict", "Unity and blessing", "Faith growth only", "No effect"],
    answer: "Division and conflict"
  },
  {
    question: "James advises that prayers should be offered with:",
    options: ["Faith and righteous motives", "Selfish desires only", "Random requests", "Neglect of sin"],
    answer: "Faith and righteous motives"
  },
  {
    question: "Christians should endure trials with:",
    options: ["Faith", "patience", "and courage", "Fear and avoidance", "Anger and retaliation", "Indifference"],
    answer: "Faith, patience, and courage"
  },
  {
    question: "The Council of Jerusalem demonstrates:",
    options: ["Conflict resolution through dialogue", "Ignoring disagreements", "Forcing uniformity", "Excluding Gentiles"],
    answer: "Conflict resolution through dialogue"
  },
  {
    question: "James' teaching on impartiality warns against:",
    options: ["Favoritism", "tribalism", "and discrimination", "Faithful devotion", "Random acts of kindness", "Prayer alone"],
    answer: "Favoritism, tribalism, and discrimination"
  },
  {
    question: "Paul's later missionary journeys focused on:",
    options: ["Strengthening existing churches and spreading the gospel", "Seeking wealth", "Political influence", "Avoiding Gentiles"],
    answer: "Strengthening existing churches and spreading the gospel"
  },
  {
    question: "The letters of Paul encouraged believers to:",
    options: ["Live holy lives", "love one another", "and resist sin", "Focus on rituals only", "Seek personal power", "Ignore moral conduct"],
    answer: "Live holy lives, love one another, and resist sin"
  },
  {
    question: "James teaches that the rich should:",
    options: ["Not show favoritism and help the needy", "Keep wealth for themselves", "Ignore the poor", "Favor relatives"],
    answer: "Not show favoritism and help the needy"
  },
  {
    question: "Peter advised Christians to submit to:",
    options: ["Authorities and masters as unto God", "No one", "Only elders", "Selective rules"],
    answer: "Authorities and masters as unto God"
  },
  {
    question: "Good citizenship in Christianity includes:",
    options: ["Paying taxes", "being honest", "and serving society", "Bribery", "Avoiding civic duties", "Personal gain only"],
    answer: "Paying taxes, being honest, and serving society"
  },
  {
    question: "Interpersonal relationships among Christians should show:",
    options: ["Humility", "patience", "and love", "Jealousy", "pride", "and rivalry", "Favoritism", "Isolation"],
    answer: "Humility, patience, and love"
  },
  {
    question: "The early church spread because:",
    options: ["Believers shared the gospel during persecution", "Only apostles preached", "Faith declined", "Missionaries avoided danger"],
    answer: "Believers shared the gospel during persecution"
  },
  {
    question: "The role of deacons was to:",
    options: ["Serve practical needs and care for the community", "Preach only", "Military service", "Judicial duties"],
    answer: "Serve practical needs and care for the community"
  },
  {
    question: "Stephen's martyrdom illustrates:",
    options: ["Faithfulness unto death and courage", "Fear of authority", "Avoidance of truth", "Compromise in faith"],
    answer: "Faithfulness unto death and courage"
  },
  {
    question: "Paul's first missionary journey taught that:",
    options: ["Faith requires boldness and perseverance", "Believers should avoid conflict", "Only Jews are saved", "Faith is private only"],
    answer: "Faith requires boldness and perseverance"
  },
  {
    question: "The Council of Jerusalem resolved:",
    options: ["Gentiles need not follow all Jewish laws", "Only Jews can join the church", "No rules are needed", "Circumcision is mandatory"],
    answer: "Gentiles need not follow all Jewish laws"
  },
  {
    question: "Faith without works is described by James as:",
    options: ["Dead", "Sufficient", "Optional", "Superior to works"],
    answer: "Dead"
  },
  {
    question: "Peter's teaching on elders emphasizes:",
    options: ["Shepherd willingly and be examples", "Delegate everything", "Seek personal honor", "Avoid responsibility"],
    answer: "Shepherd willingly and be examples"
  },
  {
    question: "Philip's obedience to the Holy Spirit demonstrates:",
    options: ["Immediate response and faithful service", "Avoiding foreigners", "Delaying ministry", "Seeking personal gain"],
    answer: "Immediate response and faithful service"
  },
  {
    question: "The dispersion of the church shows that:",
    options: ["Misfortunes can lead to blessings", "Faith collapses under persecution", "Only leaders survive", "Evangelism stops"],
    answer: "Misfortunes can lead to blessings"
  },
  {
    question: "Christians should live among non-Christians by:",
    options: ["Exemplifying moral behavior and honesty", "Hiding their faith", "Ignoring society", "Following worldly trends"],
    answer: "Exemplifying moral behavior and honesty"
  },
  {
    question: "Paul's letters instruct believers to:",
    options: ["Correct", "encourage", "and teach holy living", "Collect funds only", "Replace Scripture", "Exclude Gentiles"],
    answer: "Correct, encourage, and teach holy living"
  },
  {
    question: "Peter encouraged Christians to:",
    options: ["Live honorably among non-believers", "Rebel against rulers", "Ignore civic duties", "Seek personal gain"],
    answer: "Live honorably among non-believers"
  },
  {
    question: "James warns that favoritism causes:",
    options: ["Division", "resentment", "and injustice", "Unity and love", "Faith growth", "Blessings only"],
    answer: "Division, resentment, and injustice"
  },
  {
    question: "Faith demonstrated in actions shows:",
    options: ["True belief and obedience", "Private devotion only", "Works replace faith", "Faith is optional"],
    answer: "True belief and obedience"
  },
  {
    question: "The mission of Philip illustrates:",
    options: ["Spreading the gospel to new regions", "Focusing only on Jerusalem", "Avoiding Gentiles", "Limiting evangelism"],
    answer: "Spreading the gospel to new regions"
  },
  {
    question: "Paul's missionary journeys helped:",
    options: ["Establish churches and strengthen believers", "Gain political favor", "Avoid danger", "Limit Christianity to Jews"],
    answer: "Establish churches and strengthen believers"
  },
  {
    question: "The effect of persecution on the early church was:",
    options: ["Expansion and wider spread of the gospel", "Decline of faith", "Isolation of believers", "Collapse of mission"],
    answer: "Expansion and wider spread of the gospel"
  },
  {
    question: "Stephen's defense before the Sanhedrin emphasizes:",
    options: ["Faith", "courage", "and standing for truth", "Avoiding responsibility", "Selfish motives", "Ignoring God's call"],
    answer: "Faith, courage, and standing for truth"
  },
  {
    question: "The gospel reached Antioch when:",
    options: ["Believers were first called Christians", "Only Peter preached there", "Missionaries avoided it", "Jews alone converted"],
    answer: "Believers were first called Christians"
  },
  {
    question: "Peter's interpersonal teaching encourages Christians to:",
    options: ["Act with humility", "love", "and patience", "Be jealous and prideful", "Favor select groups", "Isolate themselves"],
    answer: "Act with humility, love, and patience"
  },
  {
    question: "Faith without works is considered:",
    options: ["Dead", "Complete", "Optional", "Superior to deeds"],
    answer: "Dead"
  },
  {
    question: "Peter encouraged submission to authorities to:",
    options: ["Live honorably and glorify God", "Avoid civic duties", "Gain personal favor", "Rebel selectively"],
    answer: "Live honorably and glorify God"
  },
  {
    question: "James' teaching on impartiality aims to:",
    options: ["Prevent discrimination and favoritism", "Promote inequality", "Favor the wealthy", "Ignore poor believers"],
    answer: "Prevent discrimination and favoritism"
  },
  {
    question: "Paul's letters guided early Christians to:",
    options: ["Moral living", "faithfulness", "and unity", "Seek wealth only", "Ignore others", "Focus on rituals only"],
    answer: "Moral living, faithfulness, and unity"
  },
  {
    question: "Good Christian citizenship is demonstrated by:",
    options: ["Obeying laws and serving society", "Avoiding civic duties", "Corruption and bribery", "Selfishness"],
    answer: "Obeying laws and serving society"
  },
  {
    question: "Persecution sometimes led to:",
    options: ["Blessings and spread of the gospel", "Faith collapse", "Abandonment of mission", "Isolation only"],
    answer: "Blessings and spread of the gospel"
  },
  {
    question: "Christians should manifest good citizenship by:",
    options: ["Being honest", "law-abiding", "and socially responsible", "Bribery", "Avoiding duties", "Seeking personal gain only"],
    answer: "Being honest, law-abiding, and socially responsible"
  },
  {
    question: "The Council of Jerusalem shows that conflict can be resolved through:",
    options: ["Dialogue and consultation", "Avoidance", "Force", "Exclusion"],
    answer: "Dialogue and consultation"
  },
  {
    question: "Paul's conversion demonstrates:",
    options: ["Transformation through Christ's power", "Political gain", "Avoiding persecution", "Escape from authority"],
    answer: "Transformation through Christ's power"
  },
  {
    question: "The role of deacons includes:",
    options: ["Serving the practical needs of the church", "Only preaching", "Military leadership", "Judicial power"],
    answer: "Serving the practical needs of the church"
  },
  {
    question: "Persecution contributed to:",
    options: ["The wider spread of Christianity", "Decline of the church", "Isolation of believers", "Faith collapse"],
    answer: "The wider spread of Christianity"
  },
  {
    question: "Paul's second missionary journey emphasized:",
    options: ["Strengthening new churches and reaching Macedonia and Greece", "Avoiding Jews", "Personal gain", "Political influence"],
    answer: "Strengthening new churches and reaching Macedonia and Greece"
  },
  {
    question: "The Epistle of James stresses that faith should be:",
    options: ["Active and expressed through good works", "Private only", "Optional", "Ritual-based only"],
    answer: "Active and expressed through good works"
  },
  {
    question: "Impartiality in the church means:",
    options: ["Treating all believers equally without favoritism", "Favoring the rich", "Ignoring the poor", "Excluding some members"],
    answer: "Treating all believers equally without favoritism"
  },
  {
    question: "Effective prayer requires:",
    options: ["Faith", "perseverance", "and righteousness", "Words only", "Showmanship", "Ignoring God's guidance"],
    answer: "Faith, perseverance, and righteousness"
  },
  {
    question: "Good citizenship includes:",
    options: ["Honesty", "integrity", "law-abiding behavior", "and social responsibility", "Corruption", "Selfishness", "Ignoring civic duties"],
    answer: "Honesty, integrity, law-abiding behavior, and social responsibility"
  },
  {
    question: "Peter teaches that interpersonal relationships among Christians should show:",
    options: ["Humility", "patience", "and love", "Jealousy and rivalry", "Partiality", "Indifference"],
    answer: "Humility, patience, and love"
  },
  {
    question: "The early church grew despite persecution because:",
    options: ["Believers spread the gospel boldly", "Faith collapsed", "Only leaders preached", "Believers avoided danger"],
    answer: "Believers spread the gospel boldly"
  },
  {
    question: "Stephen's trial highlights:",
    options: ["Faith", "courage", "and steadfastness", "Avoiding responsibility", "Seeking revenge", "Ignoring God's call"],
    answer: "Faith, courage, and steadfastness"
  },
  {
    question: "The mission of Philip and the Ethiopian Eunuch demonstrates:",
    options: ["Obedience and immediate response to the Holy Spirit", "Delaying ministry", "Avoiding foreigners", "Seeking personal gain"],
    answer: "Obedience and immediate response to the Holy Spirit"
  },
  {
    question: "The Council of Jerusalem was convened because:",
    options: ["There was disagreement about Gentile circumcision", "Jews wanted to dominate", "Paul sought power", "Church ignored laws"],
    answer: "There was disagreement about Gentile circumcision"
  },
  {
    question: "The decision of the Council of Jerusalem led to:",
    options: ["Gentiles being accepted without full adherence to Jewish law", "Church division", "Exclusion of Gentiles", "Favoring Jews only"],
    answer: "Gentiles being accepted without full adherence to Jewish law"
  },
  {
    question: "Favoritism and nepotism in the church lead to:",
    options: ["Division", "resentment", "and injustice", "Unity and blessings", "Faith growth", "No consequences"],
    answer: "Division, resentment, and injustice"
  },
  {
    question: "Faith without works is described as:",
    options: ["Dead", "Sufficient alone", "Optional", "Superior to deeds"],
    answer: "Dead"
  },
  {
    question: "Peter advised Christians to submit to authorities to:",
    options: ["Live honorably and glorify God", "Avoid civic duties", "Gain personal favor", "Rebel selectively"],
    answer: "Live honorably and glorify God"
  },
  {
    question: "Faith should be demonstrated through:",
    options: ["Good deeds", "obedience", "and service", "Words only", "Rituals only", "Selfish motives"],
    answer: "Good deeds, obedience, and service"
  },
  {
    question: "Christians living among non-Christians should avoid:",
    options: ["Immoral behavior and dishonesty", "Exemplifying integrity", "Godly influence", "Kindness"],
    answer: "Immoral behavior and dishonesty"
  },
  {
    question: "Paul's letters highlight the importance of:",
    options: ["Unity", "love", "and holiness", "Wealth accumulation", "Isolation", "Ignoring others"],
    answer: "Unity, love, and holiness"
  },
  {
    question: "Obedience to the Holy Spirit in ministry is shown by:",
    options: ["Immediate response and service", "Avoiding tasks", "Delaying action", "Self-interest"],
    answer: "Immediate response and service"
  },
  {
    question: "The spread of Christianity was aided by:",
    options: ["Persecution and evangelism", "Political support only", "Fear of authorities", "Avoiding non-believers"],
    answer: "Persecution and evangelism"
  },
  {
    question: "Paul's missionary journeys included:",
    options: ["Visits to Asia Minor", "Macedonia", "Greece", "and Rome", "Only Jerusalem", "Private preaching", "Avoiding Gentiles"],
    answer: "Visits to Asia Minor, Macedonia, Greece, and Rome"
  },
  {
    question: "The Ethiopian Eunuch was baptized by Philip after:",
    options: ["Receiving the gospel and expressing faith", "Being forced", "Ignoring Scripture", "Waiting indefinitely"],
    answer: "Receiving the gospel and expressing faith"
  },
  {
    question: "The importance of Antioch in the early church was that:",
    options: ["It became a center for missionary activity", "It was abandoned", "Only Jews gathered there", "Peter alone led the church"],
    answer: "It became a center for missionary activity"
  },
  {
    question: "Christians should maintain interpersonal relationships by:",
    options: ["Forgiving", "loving", "and helping one another", "Jealousy", "Favoritism", "Isolation"],
    answer: "Forgiving, loving, and helping one another"
  },
  {
    question: "James emphasizes that prayers should be:",
    options: ["Faithful", "persistent", "and righteous", "Formalistic only", "Ignored", "Superficial"],
    answer: "Faithful, persistent, and righteous"
  },
  {
    question: "Good Christian living includes:",
    options: ["Integrity", "service", "love", "and honesty", "Selfishness", "Ignoring others", "Bribery"],
    answer: "Integrity, service, love, and honesty"
  },
  {
    question: "The effect of persecution on the early church demonstrates that:",
    options: ["God can turn misfortune into blessings", "Faith collapses", "Believers fail", "Mission ends"],
    answer: "God can turn misfortune into blessings"
  },
  {
    question: "Christians living among non-Christians should demonstrate:",
    options: ["Respect", "honesty", "and integrity", "Hidden motives", "Immoral influence", "Fear of faith"],
    answer: "Respect, honesty, and integrity"
  },
  {
    question: "Peter encouraged elders to:",
    options: ["Shepherd willingly and be examples", "Delegate everything", "Seek personal gain", "Avoid responsibilities"],
    answer: "Shepherd willingly and be examples"
  },
  {
    question: "The early church expanded because:",
    options: ["Believers evangelized despite persecution", "Missionaries avoided preaching", "Faith declined", "Only leaders acted"],
    answer: "Believers evangelized despite persecution"
  },
  {
    question: "Stephen's courage shows that:",
    options: ["Faith can overcome fear and opposition", "Fear prevents action", "Compromise is better", "Avoid truth"],
    answer: "Faith can overcome fear and opposition"
  },
  {
    question: "Paul's letters helped early churches to:",
    options: ["Understand doctrine", "live holy lives", "and maintain unity", "Gain wealth", "Ignore others", "Focus on rituals only"],
    answer: "Understand doctrine, live holy lives, and maintain unity"
  },
  {
    question: "Faith is shown by:",
    options: ["Actions that demonstrate belief", "Words only", "Private rituals only", "Selective obedience"],
    answer: "Actions that demonstrate belief"
  },
  {
    question: "The main reason Saul persecuted Christians before his conversion was:",
    options: ["He believed they were breaking God's law", "He wanted to gain wealth", "He sought political power", "He was curious about Christianity"],
    answer: "He believed they were breaking God's law"
  },
  {
    question: "Saul's conversion demonstrates that:",
    options: ["God can transform anyone", "Faith is hereditary", "Only chosen leaders can be saved", "Actions alone save people"],
    answer: "God can transform anyone"
  },
  {
    question: "Peter performed miracles in Lydda and Joppa to:",
    options: ["Confirm God's power and strengthen faith", "Gain fame", "Earn money", "Avoid persecution"],
    answer: "Confirm God's power and strengthen faith"
  },
  {
    question: "Cornelius was converted because:",
    options: ["He was receptive to God's message and Peter preached to him", "He followed Jewish law strictly", "He sought wealth", "He forced the apostles"],
    answer: "He was receptive to God's message and Peter preached to him"
  },
  {
    question: "Peter defended his actions toward Cornelius by explaining:",
    options: ["God does not show favoritism", "Only Jews matter", "Gentiles cannot be saved", "He acted independently"],
    answer: "God does not show favoritism"
  },
  {
    question: "The Church in Antioch was significant because:",
    options: ["It became a base for missionary work", "It was the first Jewish-only church", "It avoided Gentiles", "It isolated believers"],
    answer: "It became a base for missionary work"
  },
  {
    question: "The martyrdom of James shows:",
    options: ["Faithfulness may lead to sacrifice", "Faith always avoids danger", "Leaders are invincible", "Persecution is unnecessary"],
    answer: "Faithfulness may lead to sacrifice"
  },
  {
    question: "Peter's miraculous escape from prison teaches:",
    options: ["God can deliver His servants miraculously", "Prayers are useless", "Believers must avoid risk", "Persecution always ends in failure"],
    answer: "God can deliver His servants miraculously"
  },
  {
    question: "Paul's first missionary journey shows the importance of:",
    options: ["Spreading the gospel and establishing churches", "Avoiding Gentiles", "Political influence", "Seeking personal gain"],
    answer: "Spreading the gospel and establishing churches"
  },
  {
    question: "Circumcision controversy was resolved at the Council of Jerusalem by:",
    options: ["Allowing Gentiles to join without full Jewish law", "Forcing Gentiles to obey all Jewish laws", "Excluding Gentiles", "Ignoring the question"],
    answer: "Allowing Gentiles to join without full Jewish law"
  },
  {
    question: "Conflict resolution in the early church was demonstrated by:",
    options: ["Dialogue and consultation", "Avoidance", "Force", "Exclusion"],
    answer: "Dialogue and consultation"
  },
  {
    question: "Unanswered prayers may result from:",
    options: ["Selfish motives", "lack of faith", "or disobedience", "Faith alone", "External rituals only", "Prayer timing only"],
    answer: "Selfish motives, lack of faith, or disobedience"
  },
  {
    question: "Peter instructs elders to:",
    options: ["Shepherd willingly and serve as examples", "Ignore responsibilities", "Seek personal glory", "Delegate all tasks"],
    answer: "Shepherd willingly and serve as examples"
  },
  {
    question: "Persecution of early Christians resulted in:",
    options: ["Wider spread of the gospel", "Collapse of faith", "Isolation of believers", "Abandoning mission"],
    answer: "Wider spread of the gospel"
  },
  {
    question: "Stephen's defence before the Sanhedrin demonstrates:",
    options: ["Courage and commitment to truth", "Avoiding responsibility", "Seeking revenge", "Ignoring God's call"],
    answer: "Courage and commitment to truth"
  },
  {
    question: "The seven deacons were appointed to:",
    options: ["Ensure fair distribution to widows and practical needs", "Preach only", "Hold political office", "Administer laws"],
    answer: "Ensure fair distribution to widows and practical needs"
  },
  {
    question: "Faith demonstrated in practice includes:",
    options: ["Helping others", "obeying God", "and serving faithfully", "Private rituals only", "Words only", "Selective obedience"],
    answer: "Helping others, obeying God, and serving faithfully"
  },
  {
    question: "Philip's encounter with the Ethiopian Eunuch highlights:",
    options: ["Immediate obedience and evangelism", "Delaying action", "Avoiding foreigners", "Self-interest"],
    answer: "Immediate obedience and evangelism"
  },
  {
    question: "Church growth despite persecution teaches:",
    options: ["God can turn misfortune into blessing", "Faith collapses easily", "Believers fail always", "Mission ends"],
    answer: "God can turn misfortune into blessing"
  },
  {
    question: "Christians should avoid in interpersonal relationships:",
    options: ["Jealousy", "favoritism", "and pride", "Love and service", "Humility", "Forgiveness"],
    answer: "Jealousy, favoritism, and pride"
  },
  {
    question: "The early church welcomed Gentiles because:",
    options: ["God shows no favoritism", "They were wealthy", "They were Jewish", "They followed rituals"],
    answer: "God shows no favoritism"
  },
  {
    question: "Paul's letters encouraged early churches to:",
    options: ["Live morally", "remain united", "and grow in faith", "Seek wealth", "Avoid responsibility", "Ignore others"],
    answer: "Live morally, remain united, and grow in faith"
  },
  {
    question: "Faith should be expressed through:",
    options: ["Works", "obedience", "and service", "Words only", "Rituals only", "Selfish motives"],
    answer: "Works, obedience, and service"
  },
  {
    question: "The significance of Antioch is that it:",
    options: ["Became a missionary hub", "Was abandoned", "Excluded Gentiles", "Was a private church"],
    answer: "Became a missionary hub"
  },
  {
    question: "Peter emphasized that prayer should be:",
    options: ["Faithful", "persistent", "and righteous", "Formal only", "Ignored", "Superficial"],
    answer: "Faithful, persistent, and righteous"
  },
  {
    question: "Early Christians spread the gospel through:",
    options: ["Evangelism and perseverance despite persecution", "Avoiding non-believers", "Fear of authority", "Political means"],
    answer: "Evangelism and perseverance despite persecution"
  },
  {
    question: "The council of Jerusalem demonstrates that:",
    options: ["Dialogue resolves church conflicts", "Force is best", "Avoidance works", "Exclusion is necessary"],
    answer: "Dialogue resolves church conflicts"
  },
  {
    question: "Paul's conversion shows that:",
    options: ["God can change anyone's life", "Faith is inherited", "Only leaders can be saved", "Actions alone save people"],
    answer: "God can change anyone's life"
  },
  {
    question: "Elders should:",
    options: ["Shepherd willingly and set an example", "Delegate everything", "Seek personal gain", "Avoid responsibilities"],
    answer: "Shepherd willingly and set an example"
  },
  {
    question: "Stephen's example encourages:",
    options: ["Standing firm in faith despite opposition", "Avoiding conflict", "Seeking revenge", "Compromising truth"],
    answer: "Standing firm in faith despite opposition"
  },
  {
    question: "Faith without works is:",
    options: ["Dead", "Superior", "Optional", "Complete"],
    answer: "Dead"
  },
  {
    question: "Persecution led to:",
    options: ["Spread of Christianity", "Faith collapse", "Isolation", "Mission failure"],
    answer: "Spread of Christianity"
  },
  {
    question: "Paul's missionary journeys aimed at:",
    options: ["Spreading the gospel and establishing churches", "Avoiding Gentiles", "Political influence", "Personal gain"],
    answer: "Spreading the gospel and establishing churches"
  },
  {
    question: "Peter's miracles confirmed:",
    options: ["God's power and strengthened faith", "Personal fame", "Wealth accumulation", "Avoidance of persecution"],
    answer: "God's power and strengthened faith"
  },
  {
    question: "Church growth occurred because:",
    options: ["Believers evangelized despite persecution", "Missionaries avoided preaching", "Faith declined", "Only leaders acted"],
    answer: "Believers evangelized despite persecution"
  },
  {
    question: "Philip's immediate obedience shows:",
    options: ["Holy Spirit guidance requires prompt action", "Delaying is acceptable", "Self-interest first", "Avoid foreigners"],
    answer: "Holy Spirit guidance requires prompt action"
  },
  {
    question: "The early church embraced Gentiles because:",
    options: ["God shows no favoritism", "They were rich", "They were Jewish", "They followed rituals"],
    answer: "God shows no favoritism"
  },
  {
    question: "Which book of the Bible gives an account of creation?",
    options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    answer: "Genesis"
  },
  {
    question: "Who was the first human created according to the Bible?",
    options: ["Adam", "Noah", "Abel", "Moses"],
    answer: "Adam"
  },
  {
    question: "Who killed his brother Abel out of jealousy?",
    options: ["Cain", "Seth", "Abel", "Joseph"],
    answer: "Cain"
  },
  {
    question: "Which king of Israel was known for his wisdom?",
    options: ["Solomon", "David", "Saul", "Rehoboam"],
    answer: "Solomon"
  },
  {
    question: "Who succeeded Solomon and was known for unwise policies?",
    options: ["Rehoboam", "Jeroboam", "Ahab", "Manasseh"],
    answer: "Rehoboam"
  },
  {
    question: "Which prophet was called while still a young boy to deliver God's message?",
    options: ["Jeremiah", "Ezekiel", "Isaiah", "Samuel"],
    answer: "Jeremiah"
  },
  {
    question: "God's covenant with Abram included:",
    options: ["Many descendants", "Kingdoms of Israel", "The Ten Commandments", "The Ark of the Covenant"],
    answer: "Many descendants"
  },
  {
    question: "Which prophet is associated with the New Covenant?",
    options: ["Jeremiah", "Isaiah", "Elijah", "Elisha"],
    answer: "Jeremiah"
  },
  {
    question: "Where did Elijah confront the prophets of Baal?",
    options: ["Mount Carmel", "Mount Sinai", "Mount Zion", "Mount Nebo"],
    answer: "Mount Carmel"
  },
  {
    question: "Joseph became a leader in which country?",
    options: ["Egypt", "Israel", "Babylon", "Canaan"],
    answer: "Egypt"
  },
  {
    question: "Who led the Israelites out of Egypt?",
    options: ["Moses", "Joshua", "Aaron", "Caleb"],
    answer: "Moses"
  },
  {
    question: "Which woman judge helped Israel defeat the Canaanites?",
    options: ["Deborah", "Hannah", "Esther", "Ruth"],
    answer: "Deborah"
  },
  {
    question: "Which prophet's servant, Gehazi, displayed greed?",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    answer: "Elisha"
  },
  {
    question: "Which prophet spoke against social injustice and false religion?",
    options: ["Amos", "Hosea", "Isaiah", "Ezekiel"],
    answer: "Amos"
  },
  {
    question: "Which prophet demonstrated God's divine love through his marriage?",
    options: ["Hosea", "Jeremiah", "Isaiah", "Ezekiel"],
    answer: "Hosea"
  },
  {
    question: "Which book teaches that individual responsibility matters?",
    options: ["Ezekiel 18", "Genesis", "Exodus", "Numbers"],
    answer: "Ezekiel 18"
  },
  {
    question: "Which prophet provided hope through the vision of dry bones?",
    options: ["Ezekiel", "Jeremiah", "Isaiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Flaws in the parenting of Eli affected which prophet?",
    options: ["Samuel", "David", "Solomon", "Isaiah"],
    answer: "Samuel"
  },
  {
    question: "Which king was known as the apostate of Judah?",
    options: ["Manasseh", "Josiah", "Ahab", "Saul"],
    answer: "Manasseh"
  },
  {
    question: "Which king was considered the reformer?",
    options: ["Josiah", "Manasseh", "Hezekiah", "Solomon"],
    answer: "Josiah"
  },
  {
    question: "Saul's disobedience led to which consequence?",
    options: ["Loss of kingship", "Death of David", "Destruction of Egypt", "Captivity in Babylon"],
    answer: "Loss of kingship"
  },
  {
    question: "Which prophet interpreted the will of God for the exiled nation?",
    options: ["Jeremiah", "Daniel", "Isaiah", "Elijah"],
    answer: "Jeremiah"
  },
  {
    question: "Which event illustrates faith and courage in God's power?",
    options: ["Daniel in the lions' den", "David and Goliath", "Moses crossing the Red Sea", "Joseph in Egypt"],
    answer: "Daniel in the lions' den"
  },
  {
    question: "Who was called a man after God's own heart?",
    options: ["David", "Saul", "Solomon", "Jeroboam"],
    answer: "David"
  },
  {
    question: "Which book teaches Christians about impartiality?",
    options: ["James", "1 Peter", "Hebrews", "Proverbs"],
    answer: "James"
  },
  {
    question: "Effective prayer in trials is taught in which book?",
    options: ["James", "1 Peter", "Matthew", "Mark"],
    answer: "James"
  },
  {
    question: "Which book teaches good citizenship among non-Christians?",
    options: ["1 Peter", "James", "Romans", "Hebrews"],
    answer: "1 Peter"
  },
  {
    question: "Which unit of Year 1 covers Cain and Abel?",
    options: ["Creation and the Fall of Humankind", "Making Decisions", "Divine Call", "God's Covenant"],
    answer: "Creation and the Fall of Humankind"
  },
  {
    question: "Which Unit covers Solomon's Wisdom?",
    options: ["Making Decisions", "Divine Call", "Creation and the Fall of Humankind", "Leadership Roles"],
    answer: "Making Decisions"
  },
  {
    question: "The call of Ezekiel is found in which book?",
    options: ["Ezekiel", "Jeremiah", "Isaiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "God's covenant with Abram includes which sign?",
    options: ["Circumcision", "Temple offering", "Golden calf", "Ark of the Covenant"],
    answer: "Circumcision"
  },
  {
    question: "Which prophet confronted King Ahab over idolatry?",
    options: ["Elijah", "Elisha", "Jeremiah", "Isaiah"],
    answer: "Elijah"
  },
  {
    question: "Joseph interpreted dreams for which Pharaoh?",
    options: ["Egyptian Pharaoh", "Babylonian King", "King Saul", "King Ahab"],
    answer: "Egyptian Pharaoh"
  },
  {
    question: "Who led the Israelites into the Promised Land?",
    options: ["Joshua", "Moses", "Aaron", "Caleb"],
    answer: "Joshua"
  },
  {
    question: "Deborah judged Israel during the time of:",
    options: ["The Judges", "The Kings", "The Prophets", "Exile"],
    answer: "The Judges"
  },
  {
    question: "Which prophet spoke against greed through Gehazi?",
    options: ["Elisha", "Elijah", "Amos", "Isaiah"],
    answer: "Elisha"
  },
  {
    question: "Which prophet married an unfaithful woman as a symbol?",
    options: ["Hosea", "Jeremiah", "Isaiah", "Ezekiel"],
    answer: "Hosea"
  },
  {
    question: "Faith and courage in Daniel 3 is shown through:",
    options: ["Shadrach", "Meshach", "Abednego", "Daniel alone", "Nebuchadnezzar", "The Jews in Babylon"],
    answer: "Shadrach, Meshach, Abednego"
  },
  {
    question: "Who repented after committing sin and was forgiven, demonstrating God's mercy?",
    options: ["David", "Saul", "Manasseh", "Solomon"],
    answer: "David"
  },
  {
    question: "Which book encourages Christians to treat all people equally?",
    options: ["James", "1 Peter", "Proverbs", "Hebrews"],
    answer: "James"
  },
  {
    question: "Which book teaches Christians to persevere under trials?",
    options: ["James", "1 Peter", "Romans", "Hebrews"],
    answer: "James"
  },
  {
    question: "Which king was disobedient and rejected by God as king?",
    options: ["Saul", "David", "Solomon", "Josiah"],
    answer: "Saul"
  },
  {
    question: "Jesus gave the Great Commission to:",
    options: ["His disciples", "The Pharisees", "The Sadducees", "The Romans"],
    answer: "His disciples"
  },
  {
    question: "Which teaching emphasizes Christians being 'salt and light' in society?",
    options: ["Usefulness of Salt and Light", "The Beatitudes", "Prayer", "Almsgiving"],
    answer: "Usefulness of Salt and Light"
  },
  {
    question: "Forgiveness as a teaching of Jesus is primarily found in:",
    options: ["Matt 18:21â€“35", "Matt 5:13â€“16", "Matt 6:1â€“4", "Matt 28:19â€“20"],
    answer: "Matt 18:21â€“35"
  },
  {
    question: "Which prophet was taken up to God in a whirlwind?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Who succeeded Moses as leader of Israel?",
    options: ["Joshua", "Caleb", "Aaron", "Phinehas"],
    answer: "Joshua"
  },
  {
    question: "Who was sold by his brothers into slavery in Egypt?",
    options: ["Joseph", "Benjamin", "David", "Samuel"],
    answer: "Joseph"
  },
  {
    question: "Which prophet confronted King Ahab and the prophets of Baal?",
    options: ["Elijah", "Isaiah", "Jeremiah", "Ezekiel"],
    answer: "Elijah"
  },
  {
    question: "Which prophet married Gomer as a symbol of Israel's unfaithfulness?",
    options: ["Hosea", "Jeremiah", "Isaiah", "Elisha"],
    answer: "Hosea"
  },
  {
    question: "Who was known for interpreting dreams in Babylon?",
    options: ["Daniel", "Joseph", "Moses", "Samuel"],
    answer: "Daniel"
  },
  {
    question: "The Garden of Eden is found in which chapters of Genesis?",
    options: ["Gen 2:4bâ€“25", "Gen 1:1â€“2:4a", "Gen 3:1â€“24", "Gen 4:1â€“16"],
    answer: "Gen 2:4bâ€“25"
  },
  {
    question: "Which king asked God for wisdom rather than riches?",
    options: ["Solomon", "David", "Saul", "Hezekiah"],
    answer: "Solomon"
  },
  {
    question: "Who was the first king of Israel?",
    options: ["Saul", "David", "Solomon", "Rehoboam"],
    answer: "Saul"
  },
  {
    question: "Which prophet's letter was sent to the exiles?",
    options: ["Jeremiah", "Daniel", "Ezekiel", "Isaiah"],
    answer: "Jeremiah"
  },
  {
    question: "Who were thrown into the fiery furnace for refusing to worship idols?",
    options: ["Shadrach", "Meshach", "Abednego", "Daniel", "Joseph", "David"],
    answer: "Shadrach, Meshach, Abednego"
  },
  {
    question: "Which unit focuses on the Nature of God in Year 2?",
    options: ["God's Universalism", "Creation and the Fall", "Making Decisions", "Leadership Roles"],
    answer: "God's Universalism"
  },
  {
    question: "Which prophet spoke about individual responsibility and accountability?",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which king was a reformer in Judah?",
    options: ["Josiah", "Manasseh", "Ahab", "Hezekiah"],
    answer: "Josiah"
  },
  {
    question: "Who denied Jesus three times before the crucifixion?",
    options: ["Peter", "John", "James", "Thomas"],
    answer: "Peter"
  },
  {
    question: "Which event is commemorated by the Last Supper?",
    options: ["Jesus' final meal with disciples", "Jesus' baptism", "Feeding of the 5000", "Crucifixion"],
    answer: "Jesus' final meal with disciples"
  },
  {
    question: "Which Unit covers Saul's disobedience?",
    options: ["Disobedience and Consequences", "Making Decisions", "Divine Call", "Faith in God"],
    answer: "Disobedience and Consequences"
  },
  {
    question: "Which prophet had a vision of dry bones?",
    options: ["Ezekiel", "Jeremiah", "Isaiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which king committed adultery and was confronted by the prophet Nathan?",
    options: ["David", "Solomon", "Saul", "Ahab"],
    answer: "David"
  },
  {
    question: "Which teaching emphasizes almsgiving?",
    options: ["Almsgiving â€“ Matt 6:1-4", "Prayer â€“ Matt 6:5-15", "Beatitudes â€“ Matt 5:1-12", "Forgiveness â€“ Matt 5:38-48"],
    answer: "Almsgiving â€“ Matt 6:1-4"
  },
  {
    question: "The Beatitudes and Woes are found in which gospel chapters?",
    options: ["Matt 5:1-12", "Luke 6:17-26", "Matt 6:1-15", "Mark 1:35", "Luke 9:18-29", "Matt 28:19-20", "Mark 14:3-9", "Matt 26:6-13"],
    answer: "Matt 5:1-12, Luke 6:17-26"
  },
  {
    question: "Jesus' teaching on salt and light encourages:",
    options: ["Being an influence for good", "Living in isolation", "Seeking riches", "Avoiding conflict"],
    answer: "Being an influence for good"
  },
  {
    question: "Which book teaches Christians about effective prayers in trials?",
    options: ["James", "1 Peter", "Romans", "Hebrews"],
    answer: "James"
  },
  {
    question: "Who were the Israelites led by during the conquest of Canaan?",
    options: ["Joshua", "Moses", "Caleb", "Aaron"],
    answer: "Joshua"
  },
  {
    question: "Which prophet was called while seeing a vision of God's throne?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which king built the temple in Jerusalem?",
    options: ["Solomon", "David", "Hezekiah", "Josiah"],
    answer: "Solomon"
  },
  {
    question: "Faith and power under persecution is demonstrated in:",
    options: ["Daniel 6", "Daniel 3", "Joseph in Egypt", "David and Goliath"],
    answer: "Daniel 6"
  },
  {
    question: "Who was the first judge of Israel mentioned in the Bible?",
    options: ["Deborah", "Gideon", "Samson", "Ehud"],
    answer: "Deborah"
  },
  {
    question: "Which king of Judah's reign is considered apostate?",
    options: ["Manasseh", "Josiah", "Hezekiah", "David"],
    answer: "Manasseh"
  },
  {
    question: "Who was the prophet during King Ahab's reign?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which book teaches Christians to be impartial in judgment?",
    options: ["James", "1 Peter", "Romans", "Hebrews"],
    answer: "James"
  },
  {
    question: "Which event marks Jesus' resurrection appearances?",
    options: ["Matt 28:1-20", "Mark 16:1-20", "Luke 24:1-53", "Matt 26:6-13", "Mark 14:3-9", "Matt 26:36-56", "Luke 22:39-53", "Matt 27:32-56", "Mark 15:21-41"],
    answer: "Matt 28:1-20, Mark 16:1-20, Luke 24:1-53"
  },
  {
    question: "Peter's denial of Jesus occurred during which event?",
    options: ["Gethsemane", "Last Supper", "Trial of Jesus", "Crucifixion"],
    answer: "Gethsemane"
  },
  {
    question: "Who was known for greed when requesting gifts from Naaman?",
    options: ["Gehazi", "Elisha", "Jeremiah", "Elijah"],
    answer: "Gehazi"
  },
  {
    question: "Which Unit teaches about the new covenant with God's people?",
    options: ["God's Covenant with Humankind", "Leadership Roles", "Making Decisions", "Disobedience and Consequences"],
    answer: "God's Covenant with Humankind"
  },
  {
    question: "Which prophet's book contains the vision of social injustice and true religion?",
    options: ["Amos", "Hosea", "Isaiah", "Jeremiah"],
    answer: "Amos"
  },
  {
    question: "Who was the mother of Samuel?",
    options: ["Hannah", "Eli's wife", "Mary", "Abigail"],
    answer: "Hannah"
  },
  {
    question: "Which Unit covers Faith in God under persecution?",
    options: ["Faith in God", "Disobedience and Consequences", "Leadership Roles", "Making Decisions"],
    answer: "Faith in God"
  },
  {
    question: "The Great Commission commands Christians to:",
    options: ["Make disciples of all nations", "Observe the Sabbath only", "Offer sacrifices", "Practice fasting only"],
    answer: "Make disciples of all nations"
  },
  {
    question: "Which prophet encouraged hope during exile?",
    options: ["Jeremiah", "Daniel", "Ezekiel", "Isaiah"],
    answer: "Jeremiah"
  },
  {
    question: "Which king's reign saw reforms in worship and adherence to God's law?",
    options: ["Josiah", "Manasseh", "Ahab", "Saul"],
    answer: "Josiah"
  },
  {
    question: "Which prophet saw a vision of God's glory and calling?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which disciple was present at the resurrection of Jesus?",
    options: ["All of the above", "Peter only", "John only", "James only"],
    answer: "All of the above"
  },
  {
    question: "Who was sold into slavery but later became a ruler in Egypt?",
    options: ["Joseph", "Benjamin", "David", "Moses"],
    answer: "Joseph"
  },
  {
    question: "Which Unit focuses on parental responsibilities in Year 2?",
    options: ["Parental Responsibilities", "Leadership Roles", "Disobedience and Consequences", "Faith in God"],
    answer: "Parental Responsibilities"
  },
  {
    question: "Which prophet had a vision of wheels within wheels?",
    options: ["Ezekiel", "Isaiah", "Daniel", "Jeremiah"],
    answer: "Ezekiel"
  },
  {
    question: "Who led the Israelites across the Jordan into Canaan?",
    options: ["Joshua", "Moses", "Aaron", "Caleb"],
    answer: "Joshua"
  },
  {
    question: "Which judge defeated the Midianites with only 300 men?",
    options: ["Gideon", "Deborah", "Samson", "Ehud"],
    answer: "Gideon"
  },
  {
    question: "Who was the prophet during the reign of King Manasseh?",
    options: ["Jeremiah", "Isaiah", "Daniel", "Ezekiel"],
    answer: "Jeremiah"
  },
  {
    question: "Which king's reign is known for apostasy?",
    options: ["Manasseh", "Josiah", "David", "Solomon"],
    answer: "Manasseh"
  },
  {
    question: "Which prophet spoke against social injustice and called for repentance?",
    options: ["Amos", "Hosea", "Isaiah", "Jeremiah"],
    answer: "Amos"
  },
  {
    question: "Who demonstrated courage by standing before King Ahab?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which book records the vision of God's holiness and calling of a prophet?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which unit teaches about the new covenant with humankind?",
    options: ["God's Covenant with Humankind", "Leadership Roles", "Making Decisions", "Faith in God"],
    answer: "God's Covenant with Humankind"
  },
  {
    question: "Who was known for his wisdom, wealth, and writings in proverbs?",
    options: ["Solomon", "David", "Hezekiah", "Josiah"],
    answer: "Solomon"
  },
  {
    question: "Which prophet's vision included dry bones coming to life?",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which teaching of Jesus emphasizes turning the other cheek?",
    options: ["Forgiveness", "Almsgiving", "Beatitudes", "Prayer"],
    answer: "Forgiveness"
  },
  {
    question: "Which king built the first temple in Jerusalem?",
    options: ["Solomon", "David", "Hezekiah", "Josiah"],
    answer: "Solomon"
  },
  {
    question: "Which king's reforms restored proper worship in Judah?",
    options: ["Josiah", "Manasseh", "Ahab", "Hezekiah"],
    answer: "Josiah"
  },
  {
    question: "Which disciple denied Jesus three times before the rooster crowed?",
    options: ["Peter", "John", "James", "Thomas"],
    answer: "Peter"
  },
  {
    question: "Who was the prophet called while seeing a vision of God's throne?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which event commemorates Jesus' final meal with His disciples?",
    options: ["Last Supper", "Crucifixion", "Gethsemane", "Resurrection"],
    answer: "Last Supper"
  },
  {
    question: "Which prophet challenged the prophets of Baal on Mount Carmel?",
    options: ["Elijah", "Isaiah", "Jeremiah", "Elisha"],
    answer: "Elijah"
  },
  {
    question: "Which prophet married an unfaithful woman to symbolize Israel's unfaithfulness?",
    options: ["Hosea", "Jeremiah", "Isaiah", "Elisha"],
    answer: "Hosea"
  },
  {
    question: "Who interpreted King Nebuchadnezzar's dreams?",
    options: ["Daniel", "Joseph", "Moses", "Samuel"],
    answer: "Daniel"
  },
  {
    question: "Which teaching emphasizes giving to the needy secretly?",
    options: ["Almsgiving", "Prayer", "Forgiveness", "Beatitudes"],
    answer: "Almsgiving"
  },
  {
    question: "The Beatitudes and Woes are recorded in which chapters?",
    options: ["Matt 5:1-12", "Luke 6:17-26", "Matt 6:1-15", "Mark 1:35", "Luke 9:18-29", "Matt 28:19-20", "Mark 14:3-9", "Matt 26:6-13"],
    answer: "Matt 5:1-12, Luke 6:17-26"
  },
  {
    question: "Which teaching highlights Christians as the 'salt of the earth'?",
    options: ["Usefulness of salt and light", "Forgiveness", "Almsgiving", "Prayer"],
    answer: "Usefulness of salt and light"
  },
  {
    question: "Which book encourages impartiality in Christian conduct?",
    options: ["James", "1 Peter", "Romans", "Hebrews"],
    answer: "James"
  },
  {
    question: "Who led the Israelites during the conquest of Canaan?",
    options: ["Joshua", "Moses", "Aaron", "Caleb"],
    answer: "Joshua"
  },
  {
    question: "Which prophet saw visions of God's glory and calling?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Faith and courage under persecution is demonstrated in which chapter?",
    options: ["Daniel 3", "Daniel 6", "Joseph in Egypt", "David and Goliath"],
    answer: "Daniel 3"
  },
  {
    question: "Who was the first judge mentioned in the Bible?",
    options: ["Deborah", "Gideon", "Samson", "Ehud"],
    answer: "Deborah"
  },
  {
    question: "Who was confronted by the prophet Nathan for sin?",
    options: ["David", "Solomon", "Saul", "Ahab"],
    answer: "David"
  },
  {
    question: "Which prophet wrote about hope during exile?",
    options: ["Jeremiah", "Daniel", "Ezekiel", "Isaiah"],
    answer: "Jeremiah"
  },
  {
    question: "Which king is considered apostate in Judah's history?",
    options: ["Manasseh", "Josiah", "Hezekiah", "David"],
    answer: "Manasseh"
  },
  {
    question: "Which Unit focuses on parental responsibilities?",
    options: ["Parental Responsibilities", "Leadership Roles", "Disobedience and Consequences", "Faith in God"],
    answer: "Parental Responsibilities"
  },
  {
    question: "Which book teaches about good citizenship?",
    options: ["1 Peter", "James", "Romans", "Hebrews"],
    answer: "1 Peter"
  },
  {
    question: "Who was thrown into the lions' den for faithfulness to God?",
    options: ["Daniel", "Joseph", "David", "Moses"],
    answer: "Daniel"
  },
  {
    question: "Which king sought wisdom above riches?",
    options: ["Solomon", "David", "Hezekiah", "Josiah"],
    answer: "Solomon"
  },
  {
    question: "Which prophet is associated with the vision of social injustice?",
    options: ["Amos", "Hosea", "Isaiah", "Jeremiah"],
    answer: "Amos"
  },
  {
    question: "Who was sold into slavery by his brothers?",
    options: ["Joseph", "Benjamin", "David", "Moses"],
    answer: "Joseph"
  },
  {
    question: "Which prophet encouraged repentance and faithfulness during Ahab's reign?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which unit teaches about the disobedience and consequences of kings?",
    options: ["Disobedience and Consequences", "Making Decisions", "Faith in God", "Leadership Roles"],
    answer: "Disobedience and Consequences"
  },
  {
    question: "Which disciple denied Jesus three times before the crucifixion?",
    options: ["Peter", "John", "James", "Thomas"],
    answer: "Peter"
  },
  {
    question: "Which book records Daniel's effective prayers during trials?",
    options: ["Daniel", "James", "Ezekiel", "Isaiah"],
    answer: "Daniel"
  },
  {
    question: "Which king restored proper worship in Judah?",
    options: ["Josiah", "Manasseh", "Ahab", "Hezekiah"],
    answer: "Josiah"
  },
  {
    question: "Who faced the Midianites with only 300 men?",
    options: ["Gideon", "Deborah", "Samson", "Ehud"],
    answer: "Gideon"
  },
  {
    question: "Which teaching emphasizes forgiveness and loving enemies?",
    options: ["Forgiveness", "Almsgiving", "Beatitudes", "Prayer"],
    answer: "Forgiveness"
  },
  {
    question: "Which prophet was called while still young and hesitant?",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    answer: "Jeremiah"
  },
  {
    question: "Who led the Israelites during the Exodus from Egypt?",
    options: ["Moses", "Joshua", "Aaron", "Caleb"],
    answer: "Moses"
  },
  {
    question: "Which unit discusses the Creation and the Fall of Humankind?",
    options: ["The Creation and the Fall of Humankind", "Leadership Roles", "Making Decisions", "Faith in God"],
    answer: "The Creation and the Fall of Humankind"
  },
  {
    question: "Who killed his brother out of jealousy?",
    options: ["Cain", "Abel", "Joseph", "Esau"],
    answer: "Cain"
  },
  {
    question: "Which king's wisdom included handling disputes fairly?",
    options: ["Solomon", "David", "Saul", "Hezekiah"],
    answer: "Solomon"
  },
  {
    question: "Which prophet's calling included the words 'before you were born I set you apart'?",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    answer: "Jeremiah"
  },
  {
    question: "Who succeeded Moses as the leader of Israel?",
    options: ["Joshua", "Caleb", "Aaron", "Gideon"],
    answer: "Joshua"
  },
  {
    question: "Which judge was also a prophetess in Israel?",
    options: ["Deborah", "Gideon", "Samson", "Ehud"],
    answer: "Deborah"
  },
  {
    question: "Which king tried to follow God but faced unwise policies after him?",
    options: ["Rehoboam", "David", "Hezekiah", "Josiah"],
    answer: "Rehoboam"
  },
  {
    question: "Which prophet called Israel to repent and obey God's laws?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which unit focuses on making decisions?",
    options: ["Making Decisions", "Faith in God", "Leadership Roles", "God's Covenant with Humankind"],
    answer: "Making Decisions"
  },
  {
    question: "Which king's reforms included tearing down idols in Judah?",
    options: ["Josiah", "Manasseh", "Ahab", "Hezekiah"],
    answer: "Josiah"
  },
  {
    question: "Who interpreted Pharaoh's dreams in Egypt?",
    options: ["Joseph", "Daniel", "Moses", "Samuel"],
    answer: "Joseph"
  },
  {
    question: "Which book contains visions of dry bones coming to life?",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Who refused to worship the king's idol and survived the fiery furnace?",
    options: ["Shadrach", "Meshach", "Abednego", "Daniel", "Joseph", "David"],
    answer: "Shadrach, Meshach, Abednego"
  },
  {
    question: "Which prophet challenged King Ahab and the prophets of Baal?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which unit highlights God's covenant with Abram?",
    options: ["God's Covenant with Humankind", "Faith in God", "Making Decisions", "Leadership Roles"],
    answer: "God's Covenant with Humankind"
  },
  {
    question: "Which unit highlights parental responsibilities in Israel?",
    options: ["Parental Responsibilities", "Leadership Roles", "Disobedience and Consequences", "Faith in God"],
    answer: "Parental Responsibilities"
  },
  {
    question: "Who betrayed Jesus leading to His arrest?",
    options: ["Judas Iscariot", "Peter", "John", "Thomas"],
    answer: "Judas Iscariot"
  },
  {
    question: "Which unit focuses on faith and courage under persecution?",
    options: ["Faith in God", "Leadership Roles", "Disobedience and Consequences", "Making Decisions"],
    answer: "Faith in God"
  },
  {
    question: "Who was anointed at Bethany by a woman with costly perfume?",
    options: ["Jesus", "David", "Solomon", "Moses"],
    answer: "Jesus"
  },
  {
    question: "Which unit deals with leadership roles in Israel?",
    options: ["Leadership Roles", "Making Decisions", "God's Covenant with Humankind", "Faith in God"],
    answer: "Leadership Roles"
  },
  {
    question: "Which prophet wrote about God's divine love using an unfaithful wife as symbol?",
    options: ["Hosea", "Amos", "Isaiah", "Jeremiah"],
    answer: "Hosea"
  },
  {
    question: "Which book teaches about effective prayer and perseverance?",
    options: ["James", "1 Peter", "Daniel", "Isaiah"],
    answer: "James"
  },
  {
    question: "Which prophet wrote a letter to the exiles in Babylon?",
    options: ["Jeremiah", "Ezekiel", "Isaiah", "Daniel"],
    answer: "Jeremiah"
  },
  {
    question: "Which king's sin brought about severe consequences for Israel?",
    options: ["Saul", "David", "Solomon", "Hezekiah"],
    answer: "Saul"
  },
  {
    question: "Which teaching emphasizes Christians as the 'light of the world'?",
    options: ["Usefulness of salt and light", "Forgiveness", "Almsgiving", "Prayer"],
    answer: "Usefulness of salt and light"
  },
  {
    question: "Which unit highlights hope for the future during exile?",
    options: ["Individual Responsibility and Hope for the Future", "Faith in God", "Leadership Roles", "Disobedience and Consequences"],
    answer: "Individual Responsibility and Hope for the Future"
  },
  {
    question: "Which prophet encouraged personal responsibility for sin in Ezekiel 18?",
    options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which book records the trial of Daniel in the lions' den?",
    options: ["Daniel", "James", "Isaiah", "Ezekiel"],
    answer: "Daniel"
  },
  {
    question: "Which disciple prayed in the Garden of Gethsemane before Jesus' arrest?",
    options: ["Jesus", "Peter", "John", "James"],
    answer: "Jesus"
  },
  {
    question: "Which king's reign is studied under the unit â€˜The Apostate and the Reformer'?",
    options: ["Manasseh and Josiah", "David and Solomon", "Saul and Rehoboam", "Hezekiah and Ahab"],
    answer: "Manasseh and Josiah"
  },
  {
    question: "Which prophet witnessed Elijah being taken to heaven in a whirlwind?",
    options: ["Elisha", "Isaiah", "Jeremiah", "Daniel"],
    answer: "Elisha"
  },
  {
    question: "Which unit emphasizes the supremacy of God over nations?",
    options: ["The Supremacy of God", "Making Decisions", "Leadership Roles", "Faith in God"],
    answer: "The Supremacy of God"
  },
  {
    question: "Which disciple denied Jesus but later repented and became a key leader?",
    options: ["Peter", "John", "James", "Thomas"],
    answer: "Peter"
  },
  {
    question: "Which prophet performed miracles including multiplying oil for a widow?",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    answer: "Elisha"
  },
  {
    question: "Which unit deals with consequences of disobedience in leadership?",
    options: ["Disobedience and Consequences", "Leadership Roles", "Faith in God", "Making Decisions"],
    answer: "Disobedience and Consequences"
  },
  {
    question: "Which teaching highlights forgiveness of debts as an example of God's forgiveness?",
    options: ["Forgiveness", "Almsgiving", "Beatitudes", "Prayer"],
    answer: "Forgiveness"
  },
  {
    question: "Which event commemorates Jesus' crucifixion and death?",
    options: ["Crucifixion", "Last Supper", "Resurrection", "Great Commission"],
    answer: "Crucifixion"
  },
  {
    question: "Who succeeded Moses and led Israel to the Promised Land?",
    options: ["Joshua", "Caleb", "Aaron", "Gideon"],
    answer: "Joshua"
  },
  {
    question: "Which prophet wrote about God's universalism through Jonah?",
    options: ["Jonah", "Amos", "Hosea", "Isaiah"],
    answer: "Jonah"
  },
  {
    question: "Which unit teaches about the trial, crucifixion, and resurrection of Jesus?",
    options: ["The Life of Jesus", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "The Life of Jesus"
  },
  {
    question: "Which disciple betrayed Jesus for thirty pieces of silver?",
    options: ["Judas Iscariot", "Peter", "John", "Thomas"],
    answer: "Judas Iscariot"
  },
  {
    question: "Which prophet challenged King Ahab over Naboth's vineyard?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which unit teaches about individual responsibility?",
    options: ["Individual Responsibility and Hope for the Future", "Making Decisions", "Leadership Roles", "Faith in God"],
    answer: "Individual Responsibility and Hope for the Future"
  },
  {
    question: "Which king disobeyed God's command and faced divine punishment?",
    options: ["Saul", "David", "Solomon", "Hezekiah"],
    answer: "Saul"
  },
  {
    question: "Which unit highlights hope and restoration for Israel?",
    options: ["Individual Responsibility and Hope for the Future", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "Individual Responsibility and Hope for the Future"
  },
  {
    question: "Which prophet was commanded to write letters to exiles in Babylon?",
    options: ["Jeremiah", "Ezekiel", "Isaiah", "Daniel"],
    answer: "Jeremiah"
  },
  {
    question: "Which prophet witnessed God's call and holiness in Isaiah's vision?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which prophet was called to speak against social injustice in Israel?",
    options: ["Amos", "Isaiah", "Jeremiah", "Hosea"],
    answer: "Amos"
  },
  {
    question: "Who was known for his courage in defeating the Midianites with a small army?",
    options: ["Gideon", "Joshua", "Deborah", "Samson"],
    answer: "Gideon"
  },
  {
    question: "Which unit focuses on greed and its effects?",
    options: ["Greed and its Effects", "Faith in God", "Making Decisions", "Leadership Roles"],
    answer: "Greed and its Effects"
  },
  {
    question: "Which prophet used symbolic acts to demonstrate Israel's unfaithfulness?",
    options: ["Hosea", "Isaiah", "Jeremiah", "Ezekiel"],
    answer: "Hosea"
  },
  {
    question: "Which king's disobedience led to the loss of his kingdom to the Philistines?",
    options: ["Saul", "David", "Solomon", "Rehoboam"],
    answer: "Saul"
  },
  {
    question: "Which unit highlights David as a man after God's own heart?",
    options: ["David: A man after God's own heart", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "David: A man after God's own heart"
  },
  {
    question: "Which disciple witnessed Jesus' resurrection first?",
    options: ["Mary Magdalene", "Peter", "John", "James"],
    answer: "Mary Magdalene"
  },
  {
    question: "Which prophet's visions included a valley of dry bones?",
    options: ["Ezekiel", "Jeremiah", "Isaiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which prophet was taken up to heaven in a whirlwind?",
    options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"],
    answer: "Elijah"
  },
  {
    question: "Which unit teaches about God's covenant with Israel at Mount Sinai?",
    options: ["God's Covenant with Humankind", "Leadership Roles", "Making Decisions", "Faith in God"],
    answer: "God's Covenant with Humankind"
  },
  {
    question: "Which judge delivered Israel from Canaanite oppression alongside Barak?",
    options: ["Deborah", "Gideon", "Samson", "Ehud"],
    answer: "Deborah"
  },
  {
    question: "Which king's reign was described as apostate due to idol worship?",
    options: ["Manasseh", "Josiah", "David", "Solomon"],
    answer: "Manasseh"
  },
  {
    question: "Which unit focuses on individual responsibility and hope for the future?",
    options: ["Individual Responsibility and Hope for the Future", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "Individual Responsibility and Hope for the Future"
  },
  {
    question: "Which event marks Jesus' institution of the Lord's Supper?",
    options: ["The Last Supper", "Crucifixion", "Resurrection", "Gethsemane Prayer"],
    answer: "The Last Supper"
  },
  {
    question: "Which unit emphasizes the importance of effective prayer?",
    options: ["Effective Prayers", "Making Decisions", "Faith in God", "Leadership Roles"],
    answer: "Effective Prayers"
  },
  {
    question: "Which prophet emphasized God's divine love through marriage imagery?",
    options: ["Hosea", "Jeremiah", "Isaiah", "Ezekiel"],
    answer: "Hosea"
  },
  {
    question: "Who interpreted the dreams of Nebuchadnezzar in Babylon?",
    options: ["Daniel", "Joseph", "Ezekiel", "Jeremiah"],
    answer: "Daniel"
  },
  {
    question: "Which prophet wrote a letter of guidance to the exiles in Babylon?",
    options: ["Jeremiah", "Isaiah", "Daniel", "Ezekiel"],
    answer: "Jeremiah"
  },
  {
    question: "Which unit deals with parental responsibilities and their effects?",
    options: ["Parental Responsibilities", "Leadership Roles", "Faith in God", "Disobedience and Consequences"],
    answer: "Parental Responsibilities"
  },
  {
    question: "Which event commemorates Jesus' resurrection?",
    options: ["The Resurrection", "The Last Supper", "The Crucifixion", "Gethsemane Prayer"],
    answer: "The Resurrection"
  },
  {
    question: "Who was anointed with costly perfume at Bethany?",
    options: ["Jesus", "David", "Moses", "Solomon"],
    answer: "Jesus"
  },
  {
    question: "Which unit highlights the supremacy of God during the reign of Ahab?",
    options: ["The Supremacy of God", "Making Decisions", "Faith in God", "Leadership Roles"],
    answer: "The Supremacy of God"
  },
  {
    question: "Which king's reforms restored worship of God in Judah?",
    options: ["Josiah", "Manasseh", "Ahab", "Hezekiah"],
    answer: "Josiah"
  },
  {
    question: "Which prophet performed miracles, including multiplying oil for a widow?",
    options: ["Elisha", "Elijah", "Isaiah", "Jeremiah"],
    answer: "Elisha"
  },
  {
    question: "Which king's unwise policies caused division in Israel?",
    options: ["Rehoboam", "David", "Solomon", "Hezekiah"],
    answer: "Rehoboam"
  },
  {
    question: "Which disciple prayed for boldness to preach after Pentecost?",
    options: ["Peter", "John", "James", "Paul"],
    answer: "Peter"
  },
  {
    question: "Which prophet called Israel to repentance and warned of exile?",
    options: ["Jeremiah", "Isaiah", "Ezekiel", "Daniel"],
    answer: "Jeremiah"
  },
  {
    question: "Which teaching emphasizes being salt and light in the world?",
    options: ["Usefulness of Salt and Light", "Forgiveness", "Almsgiving", "Prayer"],
    answer: "Usefulness of Salt and Light"
  },
  {
    question: "Which unit highlights the consequences of disobedience in leadership?",
    options: ["Disobedience and Consequences", "Leadership Roles", "Faith in God", "Making Decisions"],
    answer: "Disobedience and Consequences"
  },
  {
    question: "Which prophet's vision of God included seraphim and a burning coal?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which king's sin led to severe punishment for Israel?",
    options: ["Saul", "David", "Solomon", "Hezekiah"],
    answer: "Saul"
  },
  {
    question: "Which disciple witnessed Jesus' trial and crucifixion?",
    options: ["John", "Peter", "James", "Thomas"],
    answer: "John"
  },
  {
    question: "Which prophet emphasized justice, mercy, and humility in Israel?",
    options: ["Micah", "Isaiah", "Jeremiah", "Ezekiel"],
    answer: "Micah"
  },
  {
    question: "Which unit highlights hope for the exiles and the future restoration of Israel?",
    options: ["Individual Responsibility and Hope for the Future", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "Individual Responsibility and Hope for the Future"
  },
  {
    question: "Which prophet was commanded to eat a scroll as a sign to Israel?",
    options: ["Ezekiel", "Jeremiah", "Isaiah", "Daniel"],
    answer: "Ezekiel"
  },
  {
    question: "Which prophet's ministry emphasized caring for the poor and marginalized?",
    options: ["Amos", "Isaiah", "Jeremiah", "Hosea"],
    answer: "Amos"
  },
  {
    question: "Which event marks Jesus giving the Great Commission to His disciples?",
    options: ["The Great Commission", "The Resurrection", "The Last Supper", "Crucifixion"],
    answer: "The Great Commission"
  },
  {
    question: "Which king's unfaithfulness led to national idolatry and apostasy?",
    options: ["Manasseh", "Josiah", "David", "Solomon"],
    answer: "Manasseh"
  },
  {
    question: "Which disciple denied Jesus but later became the rock of the church?",
    options: ["Peter", "John", "James", "Thomas"],
    answer: "Peter"
  },
  {
    question: "Which unit focuses on God's covenant with Abram and Israel?",
    options: ["God's Covenant with Humankind", "Faith in God", "Leadership Roles", "Making Decisions"],
    answer: "God's Covenant with Humankind"
  },
  {
    question: "Which prophet emphasized God's holiness and need for repentance in Isaiah?",
    options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"],
    answer: "Isaiah"
  },
  {
    question: "Which disciple prayed continually for strength and guidance in Acts?",
    options: ["Peter", "John", "James", "Paul"],
    answer: "Peter"
  },
  {
    question: "Which king was known for wisdom, wealth, and building the temple?",
    options: ["Solomon", "David", "Saul", "Hezekiah"],
    answer: "Solomon"
  },
  {
    question: "Which of the following best describes the Beatitudes taught by Jesus?",
    options: ["Instructions on political leadership", "Blessings for certain attitudes and behaviors", "Rules for temple rituals", "Ways to gain wealth quickly"],
    answer: "Blessings for certain attitudes and behaviors"
  },
  {
    question: "According to Jesus, how should Christians act as 'salt and light'?",
    options: ["Preserve moral standards and illuminate truth", "Avoid society and live in isolation", "Focus only on personal wealth", "Follow all traditional customs blindly"],
    answer: "Preserve moral standards and illuminate truth"
  },
  {
    question: "Jesus said He came not to abolish the Law but to:",
    options: ["Change it completely", "Fulfill it", "Ignore it", "Replace it with new rules"],
    answer: "Fulfill it"
  },
  {
    question: "What is the correct teaching of Jesus on almsgiving?",
    options: ["Do it publicly to gain praise", "Do it secretly and sincerely", "Only give to those you know", "Avoid giving to anyone"],
    answer: "Do it secretly and sincerely"
  },
  {
    question: "Which is a correct example of Jesus' teaching on prayer?",
    options: ["Pray in public to show devotion", "Pray privately and sincerely", "Pray only during festivals", "Pray only when demanded by leaders"],
    answer: "Pray privately and sincerely"
  },
  {
    question: "Jesus taught that forgiveness should be:",
    options: ["Given only once", "Unlimited and sincere", "Given to friends only", "Given publicly for recognition"],
    answer: "Unlimited and sincere"
  },
  {
    question: "At Bethany, Jesus was anointed with expensive perfume to:",
    options: ["Celebrate a festival", "Prepare for His burial", "Cleanse the temple", "Show wealth"],
    answer: "Prepare for His burial"
  },
  {
    question: "The Last Supper is significant because it:",
    options: ["Showed Jesus eating with Pharisees", "Instituted the Lord's Supper and foreshadowed His sacrifice", "Was a political meeting", "Established new taxes"],
    answer: "Instituted the Lord's Supper and foreshadowed His sacrifice"
  },
  {
    question: "Jesus prayed in Gethsemane to:",
    options: ["Seek guidance and strength for the coming suffering", "Organize His followers", "Predict future kings", "Teach about wealth"],
    answer: "Seek guidance and strength for the coming suffering"
  },
  {
    question: "Peter denied Jesus three times because:",
    options: ["He was afraid of persecution", "He disagreed with Jesus", "He forgot the teachings", "He was leading a rebellion"],
    answer: "He was afraid of persecution"
  },
  {
    question: "The trial of Jesus illustrates:",
    options: ["Human injustice and fulfillment of prophecy", "How to run a temple", "The start of festivals", "The building of the synagogue"],
    answer: "Human injustice and fulfillment of prophecy"
  },
  {
    question: "Which event demonstrates Jesus' obedience to God even unto death?",
    options: ["His Baptism", "Crucifixion at Golgotha", "Feeding the 5000", "Turning water into wine"],
    answer: "Crucifixion at Golgotha"
  },
  {
    question: "The resurrection of Jesus is important because it:",
    options: ["Shows victory over sin and death", "Started a festival", "Brought political change", "Led to temple reforms"],
    answer: "Shows victory over sin and death"
  },
  {
    question: "The Great Commission calls Christians to:",
    options: ["Teach all nations", "baptize and make disciples", "Focus on temple rituals", "Avoid the world", "Amass wealth"],
    answer: "Teach all nations, baptize and make disciples"
  },
  {
    question: "James teaches Christians to show no favoritism, which means:",
    options: ["Treat all people equally regardless of status", "Respect only leaders", "Avoid interaction with outsiders", "Favor wealthy people only"],
    answer: "Treat all people equally regardless of status"
  },
  {
    question: "Effective prayer, according to James, requires:",
    options: ["Faith", "perseverance", "and sincerity", "Public recitation only", "Repetition of rituals", "Gifts for priests"],
    answer: "Faith, perseverance, and sincerity"
  },
  {
    question: "Good citizenship in 1 Peter teaches Christians to:",
    options: ["Submit to authorities and live honorably among all", "Rebel against unfair leaders", "Isolate from society", "Demand privileges for themselves"],
    answer: "Submit to authorities and live honorably among all"
  },
  {
    question: "Jesus' teaching on â€˜love your enemies' emphasizes:",
    options: ["Forgiveness and non-retaliation", "Only helping friends", "Ignoring conflicts", "Punishing those who oppose you"],
    answer: "Forgiveness and non-retaliation"
  },
  {
    question: "The purpose of the Lord's Prayer includes:",
    options: ["Seeking God's will", "provision", "forgiveness", "and protection", "Demanding wealth", "Gaining political power", "Performing rituals for show"],
    answer: "Seeking God's will, provision, forgiveness, and protection"
  },
  {
    question: "Jesus taught that worry about material needs should be replaced with:",
    options: ["Trust in God's provision and focus on righteousness", "Ignoring poverty", "Accumulating wealth aggressively", "Relying on human leaders"],
    answer: "Trust in God's provision and focus on righteousness"
  },
  {
    question: "Jesus' teaching on fasting emphasizes:",
    options: ["Humility and secrecy rather than public show", "Skipping meals to impress people", "Fasting only on festival days", "Avoiding personal devotion"],
    answer: "Humility and secrecy rather than public show"
  },
  {
    question: "Jesus' use of parables is meant to:",
    options: ["Teach spiritual truths through simple stories", "Confuse listeners", "Entertain the crowds", "Show His authority over laws"],
    answer: "Teach spiritual truths through simple stories"
  },
  {
    question: "The parable of the Good Samaritan teaches:",
    options: ["Love and compassion toward all", "even enemies", "Favoring one's ethnic group", "Ignoring strangers in need", "Following only religious rituals"],
    answer: "Love and compassion toward all, even enemies"
  },
  {
    question: "The parable of the Lost Sheep shows:",
    options: ["God's care for every individual", "The importance of numbers in society", "Favoring the wealthy", "Ignoring the weak"],
    answer: "God's care for every individual"
  },
  {
    question: "The resurrection appearances of Jesus taught the disciples:",
    options: ["That He is alive and His promises are true", "That miracles are no longer possible", "That the temple is more important", "To focus only on laws"],
    answer: "That He is alive and His promises are true"
  },
  {
    question: "The Ascension of Jesus demonstrates:",
    options: ["His exaltation and the sending of the Holy Spirit", "His withdrawal from society", "The need for political action", "The end of miracles"],
    answer: "His exaltation and the sending of the Holy Spirit"
  },
  {
    question: "Jesus' teaching about treasures in heaven encourages:",
    options: ["Focusing on eternal rather than temporary wealth", "Avoiding work", "Ignoring responsibilities", "Storing earthly goods only"],
    answer: "Focusing on eternal rather than temporary wealth"
  },
  {
    question: "Jesus taught that judging others should be done with:",
    options: ["Humility and self-reflection", "Strict criticism", "Public punishment", "Favoritism"],
    answer: "Humility and self-reflection"
  },
  {
    question: "According to 1 Peter, suffering for doing good should be met with:",
    options: ["Endurance and trust in God", "Revenge", "Avoidance of responsibility", "Blaming others"],
    answer: "Endurance and trust in God"
  },
  {
    question: "The early church prayed:",
    options: ["Together", "continually", "and with faith", "Occasionally in private only", "Only at festivals", "Only for political favors"],
    answer: "Together, continually, and with faith"
  },
  {
    question: "Christians are called to be witnesses by:",
    options: ["Proclaiming the gospel and living exemplary lives", "Forcing conversions", "Avoiding society", "Focusing only on rituals"],
    answer: "Proclaiming the gospel and living exemplary lives"
  },
  {
    question: "Effective prayer in James is characterized by:",
    options: ["Patience", "faith", "and righteous living", "Public show of devotion", "Reciting rituals mindlessly", "Giving gifts to leaders"],
    answer: "Patience, faith, and righteous living"
  },
  {
    question: "Christians are to honor authorities because:",
    options: ["It reflects God's order and promotes peace", "Authorities are always perfect", "It avoids responsibilities", "It ensures material wealth"],
    answer: "It reflects God's order and promotes peace"
  },
  {
    question: "Peter encourages Christians to live among non-Christians by:",
    options: ["Doing good deeds and maintaining a godly witness", "Avoiding contact with them", "Being critical openly", "Adopting worldly practices"],
    answer: "Doing good deeds and maintaining a godly witness"
  },
  {
    question: "Jesus' teaching on retaliation (turning the other cheek) means:",
    options: ["Respond to evil with patience and love", "Seek revenge", "Ignore injustice completely", "Report every wrong to authorities"],
    answer: "Respond to evil with patience and love"
  },
  {
    question: "The main lesson of the Parable of the Unforgiving Servant is:",
    options: ["Forgive others as God forgives you", "Seek compensation", "Retaliate when wronged", "Only forgive friends"],
    answer: "Forgive others as God forgives you"
  },
  {
    question: "The purpose of Jesus' miracles includes:",
    options: ["Demonstrating God's power and encouraging faith", "Gaining popularity", "Political influence", "Avoiding responsibilities"],
    answer: "Demonstrating God's power and encouraging faith"
  },
  {
    question: "The feeding of the 5000 shows:",
    options: ["God's provision and care for the needy", "A political gathering", "A temple ritual", "A lesson about taxes"],
    answer: "God's provision and care for the needy"
  },
  {
    question: "Walking on water teaches us about:",
    options: ["Faith in Christ even amid fear", "Physical training", "Controlling nature", "Ignoring challenges"],
    answer: "Faith in Christ even amid fear"
  },
  {
    question: "Jesus calming the storm demonstrates:",
    options: ["His authority over nature and assurance for believers", "The power of the disciples", "Need for political power", "The importance of wealth"],
    answer: "His authority over nature and assurance for believers"
  },
  {
    question: "The resurrection is central to Christianity because:",
    options: ["It validates Jesus as the Son of God and His promises", "It ends the need for prayer", "It begins political freedom", "It focuses only on rituals"],
    answer: "It validates Jesus as the Son of God and His promises"
  },
  {
    question: "Jesus' Great Commission commands believers to:",
    options: ["Spread the gospel", "baptize", "and make disciples", "Focus only on their local community", "Avoid outsiders", "Prioritize wealth accumulation"],
    answer: "Spread the gospel, baptize, and make disciples"
  },
  {
    question: "The Beatitudes highlight attitudes such as:",
    options: ["Meekness", "mercy", "righteousness", "and purity", "Aggression", "wealth", "pride", "and power", "Isolation and avoidance", "Strict legalism"],
    answer: "Meekness, mercy, righteousness, and purity"
  },
  {
    question: "Jesus' teaching on judging others includes:",
    options: ["Examining oneself before correcting others", "Publicly condemning", "Ignoring wrongdoing", "Favoring friends only"],
    answer: "Examining oneself before correcting others"
  },
  {
    question: "Christians are called to be witnesses through:",
    options: ["Words and exemplary conduct", "Coercion or force", "Only rituals", "Avoiding society"],
    answer: "Words and exemplary conduct"
  },
  {
    question: "Forgiveness in Jesus' teaching is:",
    options: ["Continuous and sincere", "Occasional and selective", "Only to friends", "Public for praise"],
    answer: "Continuous and sincere"
  },
  {
    question: "Almsgiving should be done:",
    options: ["Humbly and privately", "For public recognition", "Only to the wealthy", "Rarely and reluctantly"],
    answer: "Humbly and privately"
  },
  {
    question: "Fasting is meant to:",
    options: ["Draw closer to God with humility", "Show off piety", "Gain material rewards", "Avoid devotion"],
    answer: "Draw closer to God with humility"
  },
  {
    question: "Prayer is effective when:",
    options: ["It is sincere", "persistent", "and faithful", "It is loud and public", "It is ritualistic only", "It is occasional and careless"],
    answer: "It is sincere, persistent, and faithful"
  },
  {
    question: "Good works without faith are:",
    options: ["Dead and ineffective", "Sufficient for salvation", "Optional", "Hidden from God"],
    answer: "Dead and ineffective"
  },
  {
    question: "Christians should treat all people:",
    options: ["Equally", "without favoritism", "Favoring wealthy members", "Avoiding strangers", "Preferring only believers"],
    answer: "Equally, without favoritism"
  },
  {
    question: "The resurrection appearances encouraged the disciples to:",
    options: ["Believe in Jesus' triumph over death", "Abandon their mission", "Focus only on wealth", "Celebrate festivals only"],
    answer: "Believe in Jesus' triumph over death"
  },
  {
    question: "Living among non-Christians should be characterized by:",
    options: ["Godly conduct and good reputation", "Avoidance and isolation", "Harsh criticism", "Mimicking non-believers"],
    answer: "Godly conduct and good reputation"
  },
  {
    question: "Jesus' command to love enemies teaches:",
    options: ["Compassion and forgiveness even toward adversaries", "Favoritism for friends", "Ignoring opponents", "Revenge"],
    answer: "Compassion and forgiveness even toward adversaries"
  },
  {
    question: "The main lesson of the Parable of the Good Samaritan is:",
    options: ["Love and help others regardless of differences", "Ignore strangers", "Favor family only", "Focus on rituals only"],
    answer: "Love and help others regardless of differences"
  },
  {
    question: "The parable of the Lost Sheep illustrates:",
    options: ["God's care for every individual", "Ignoring the lost", "Focusing only on numbers", "Favoring leaders"],
    answer: "God's care for every individual"
  },
  {
    question: "Jesus' teaching on treasures encourages:",
    options: ["Invest in eternal values rather than earthly wealth", "Seek wealth above all", "Avoid responsibility", "Focus on earthly possessions only"],
    answer: "Invest in eternal values rather than earthly wealth"
  },
  {
    question: "Jesus' miracles served to:",
    options: ["Confirm His divine authority and inspire faith", "Entertain crowds", "Gain political advantage", "Test disciples' loyalty"],
    answer: "Confirm His divine authority and inspire faith"
  },
  {
    question: "Discipleship requires:",
    options: ["Following Christ with commitment and obedience", "Occasional church attendance", "Being popular among peers", "Avoiding responsibilities"],
    answer: "Following Christ with commitment and obedience"
  },
  {
    question: "Paul teaches that love is:",
    options: ["Patient", "kind", "and selfless", "Conditional and selective", "Focused on personal gain", "Only for friends"],
    answer: "Patient, kind, and selfless"
  },
  {
    question: "The early church devoted themselves to:",
    options: ["Apostles' teaching", "fellowship", "breaking of bread", "and prayer", "Political influence", "Wealth accumulation", "Personal advancement only"],
    answer: "Apostles' teaching, fellowship, breaking of bread, and prayer"
  },
  {
    question: "Spiritual gifts in the church are meant to:",
    options: ["Edify the body of Christ and serve others", "Gain personal recognition", "Create divisions", "Focus on self-interest"],
    answer: "Edify the body of Christ and serve others"
  },
  {
    question: "The fruit of the Spirit includes:",
    options: ["Love", "joy", "peace", "patience", "kindness", "goodness", "faithfulness", "gentleness", "self-control", "Wealth", "popularity", "power", "pride", "Isolation", "revenge", "greed", "anger", "Indifference", "selfishness", "laziness", "harshness"],
    answer: "Love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control"
  },
  {
    question: "Christian unity is maintained by:",
    options: ["Humility", "patience", "and forgiveness", "Ignoring others' faults", "Seeking personal advantage", "Avoiding fellowship"],
    answer: "Humility, patience, and forgiveness"
  },
  {
    question: "The purpose of baptism is to:",
    options: ["Publicly identify with Christ and His death and resurrection", "Gain social status", "Fulfill rituals only", "Avoid responsibility"],
    answer: "Publicly identify with Christ and His death and resurrection"
  },
  {
    question: "Communion reminds believers of:",
    options: ["Christ's sacrifice and covenant with humanity", "Only tradition", "Political authority", "Personal achievements"],
    answer: "Christ's sacrifice and covenant with humanity"
  },
  {
    question: "Paul's letters encourage Christians to live:",
    options: ["Holy", "disciplined", "and loving lives", "Casual and indifferent lives", "Independent of moral standards", "Focusing only on wealth"],
    answer: "Holy, disciplined, and loving lives"
  },
  {
    question: "The greatest commandment, according to Jesus, is:",
    options: ["Love God and love your neighbor as yourself", "Accumulate wealth", "Seek power", "Avoid responsibility"],
    answer: "Love God and love your neighbor as yourself"
  },
  {
    question: "Faith without love results in:",
    options: ["Nothing; love is essential to Christian living", "Immediate success", "Recognition by people", "Avoiding service"],
    answer: "Nothing; love is essential to Christian living"
  },
  {
    question: "Christians are called to forgive because:",
    options: ["God forgave us first", "It improves social status", "It avoids obligations", "It is optional"],
    answer: "God forgave us first"
  },
  {
    question: "The early church shared possessions to:",
    options: ["Meet each other's needs and demonstrate unity", "Display wealth", "Gain political influence", "Only for show"],
    answer: "Meet each other's needs and demonstrate unity"
  },
  {
    question: "Christian giving should be:",
    options: ["Generous", "cheerful", "and willing", "Reluctant and forced", "Secretive to avoid praise", "Limited to family only"],
    answer: "Generous, cheerful, and willing"
  },
  {
    question: "Christians are to submit to authorities because:",
    options: ["God has established them to maintain order", "Authorities are always perfect", "It avoids responsibilities", "It ensures wealth"],
    answer: "God has established them to maintain order"
  },
  {
    question: "Stewardship of resources involves:",
    options: ["Managing God's gifts responsibly", "Accumulating for personal gain", "Ignoring obligations", "Avoiding accountability"],
    answer: "Managing God's gifts responsibly"
  },
  {
    question: "The Lord's Prayer teaches:",
    options: ["Dependence on God", "forgiveness", "and submission to His will", "Selfish requests", "Avoidance of responsibility", "Public show of piety"],
    answer: "Dependence on God, forgiveness, and submission to His will"
  },
  {
    question: "Living as salt and light means:",
    options: ["Influencing others positively and maintaining godly witness", "Seeking attention", "Avoiding society", "Criticizing others openly"],
    answer: "Influencing others positively and maintaining godly witness"
  },
  {
    question: "Jesus' teaching on wealth warns:",
    options: ["Do not make wealth an ultimate priority over God", "Wealth is evil", "Avoid all resources", "Ignore generosity"],
    answer: "Do not make wealth an ultimate priority over God"
  },
  {
    question: "The early Christians faced persecution but:",
    options: ["Remained steadfast in faith and witness", "Abandoned their mission", "Sought revenge", "Focused on wealth"],
    answer: "Remained steadfast in faith and witness"
  },
  {
    question: "Christian joy is:",
    options: ["Rooted in God's presence and salvation", "not circumstances", "Dependent on material gain", "Avoiding responsibilities", "Temporary pleasure only"],
    answer: "Rooted in God's presence and salvation, not circumstances"
  },
  {
    question: "Paul describes the body of Christ to emphasize:",
    options: ["Interdependence and unity among believers", "Individualism", "Competition among members", "Secrecy and avoidance"],
    answer: "Interdependence and unity among believers"
  },
  {
    question: "Christian patience helps believers to:",
    options: ["Endure trials and maintain hope", "Avoid challenges", "Seek revenge", "Focus on material gain"],
    answer: "Endure trials and maintain hope"
  },
  {
    question: "The principle of humility calls Christians to:",
    options: ["Consider others better than themselves", "Seek praise", "Avoid helping others", "Accumulate power"],
    answer: "Consider others better than themselves"
  },
  {
    question: "Christians are called to resist temptation by:",
    options: ["Relying on God's strength and Scripture", "Avoiding prayer", "Giving in gradually", "Blaming others"],
    answer: "Relying on God's strength and Scripture"
  },
  {
    question: "Paul's letters emphasize hope because:",
    options: ["It sustains believers through suffering", "It guarantees wealth", "It avoids responsibility", "It ensures social recognition"],
    answer: "It sustains believers through suffering"
  },
  {
    question: "Spiritual maturity includes:",
    options: ["Knowledge", "godly character", "and service", "Popularity", "wealth", "and influence", "Avoidance of responsibility", "Only ritual observance"],
    answer: "Knowledge, godly character, and service"
  },
  {
    question: "Faith is demonstrated through:",
    options: ["Obedience and good works", "Words alone", "Avoiding responsibilities", "Seeking personal gain"],
    answer: "Obedience and good works"
  },
  {
    question: "The early church prayed collectively to:",
    options: ["Seek God's guidance and strengthen unity", "Show off", "Avoid challenges", "Gain worldly influence"],
    answer: "Seek God's guidance and strengthen unity"
  },
  {
    question: "The greatest example of servant leadership is:",
    options: ["Jesus washing His disciples' feet", "Political authority", "Accumulating power", "Avoiding responsibility"],
    answer: "Jesus washing His disciples' feet"
  },
  {
    question: "Christian endurance requires:",
    options: ["Persevering in faith during trials", "Avoiding difficulties", "Seeking comfort first", "Ignoring responsibilities"],
    answer: "Persevering in faith during trials"
  },
  {
    question: "The letters of Paul teach that believers are:",
    options: ["Justified by faith and called to holy living", "Saved by works alone", "Independent of God", "Focused on personal gain"],
    answer: "Justified by faith and called to holy living"
  },
  {
    question: "Living in peace with all means:",
    options: ["Avoid unnecessary conflict and promote reconciliation", "Avoid everyone", "Seek revenge", "Isolate from society"],
    answer: "Avoid unnecessary conflict and promote reconciliation"
  },
  {
    question: "Generosity in the early church reflected:",
    options: ["God's love and concern for others", "Desire for recognition", "Avoidance of sharing", "Focusing only on personal needs"],
    answer: "God's love and concern for others"
  },
  {
    question: "Christians are warned against:",
    options: ["Being deceived by false teachings", "Learning truth", "Helping others", "Practicing humility"],
    answer: "Being deceived by false teachings"
  },
  {
    question: "Evangelism involves:",
    options: ["Sharing the gospel both by word and example", "Forcing beliefs", "Avoiding non-believers", "Keeping faith private"],
    answer: "Sharing the gospel both by word and example"
  },
  {
    question: "Faithful stewardship includes:",
    options: ["Using talents and resources to glorify God", "Focusing on self", "Ignoring responsibilities", "Accumulating wealth only"],
    answer: "Using talents and resources to glorify God"
  },
  {
    question: "Paul's instructions to Titus and Timothy include:",
    options: ["Teaching sound doctrine and encouraging godly living", "Seeking popularity", "Avoiding difficult tasks", "Focusing only on rituals"],
    answer: "Teaching sound doctrine and encouraging godly living"
  },
  {
    question: "Christians are to bear one another's burdens by:",
    options: ["Supporting and encouraging fellow believers", "Avoiding involvement", "Seeking personal advantage", "Criticizing publicly"],
    answer: "Supporting and encouraging fellow believers"
  },
  {
    question: "Faith produces perseverance because:",
    options: ["Believers trust God in trials and remain hopeful", "It guarantees comfort", "It avoids challenges", "It depends on luck"],
    answer: "Believers trust God in trials and remain hopeful"
  },
  {
    question: "Jesus taught that the greatest in the kingdom of God is:",
    options: ["The servant who humbly serves others", "The one with power", "The wealthy", "The influential politician"],
    answer: "The servant who humbly serves others"
  },
  {
    question: "Godly living affects the community by:",
    options: ["Promoting justice", "peace", "and love", "Focusing on self", "Seeking recognition", "Avoiding responsibility"],
    answer: "Promoting justice, peace, and love"
  },
  {
    question: "Enduring suffering for Christ results in:",
    options: ["Spiritual growth and hope", "Immediate reward", "Escape from responsibilities", "Popularity"],
    answer: "Spiritual growth and hope"
  },
];

export default crsQuestions;