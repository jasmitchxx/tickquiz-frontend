const englishQuestions = [
  {
    question: "Which of the following is in the simple past tense?",
    options: [
      "He eats rice.",
      "He ate rice.",
      "He will eat rice.",
      "He is eating rice."
    ],
    answer: "He ate rice."
  },
  {
    question: "Identify the past continuous form:",
    options: [
      "She sang a song.",
      "She had sung a song.",
      "She was singing a song.",
      "She will sing a song."
    ],
    answer: "She was singing a song."
  },
  {
    question: "Choose the sentence in the past perfect tense:",
    options: [
      "He has written the letter.",
      "He had written the letter.",
      "He wrote the letter.",
      "He writes the letter."
    ],
    answer: "He had written the letter."
  },
  {
    question: "Which sentence is in the past perfect continuous tense?",
    options: [
      "She had been reading for two hours.",
      "She was reading a book.",
      "She reads every day.",
      "She had read the book."
    ],
    answer: "She had been reading for two hours."
  },
  {
    question: "Which of the following expresses future time?",
    options: [
      "I go to school.",
      "I will go to school.",
      "I have gone to school.",
      "I went to school."
    ],
    answer: "I will go to school."
  },
  {
    question: "Identify the sentence that uses the future perfect tense:",
    options: [
      "I will be going to town.",
      "I will have finished by noon.",
      "I will go to the market.",
      "I shall go now."
    ],
    answer: "I will have finished by noon."
  },
  {
    question: "Which word in the sentence is an adverb? 'She sings beautifully.'",
    options: [
      "She",
      "Sings",
      "Beautifully",
      "Song"
    ],
    answer: "Beautifully"
  },
  {
    question: "Identify the sentence with an adverb of frequency:",
    options: [
      "He quickly ran home.",
      "He always comes late.",
      "He ran slowly.",
      "He spoke softly."
    ],
    answer: "He always comes late."
  },
  {
    question: "Choose the correct preposition: 'He is good ___ mathematics.'",
    options: [
      "in",
      "at",
      "on",
      "with"
    ],
    answer: "at"
  },
  {
    question: "Identify the preposition in this sentence: 'The book is under the table.'",
    options: [
      "book",
      "is",
      "under",
      "table"
    ],
    answer: "under"
  },
  {
    question: "Which of the following is in the simple past tense?",
    options: ["He eats rice.", "He ate rice.", "He will eat rice.", "He is eating rice."],
    answer: "He ate rice."
  },
  {
    question: "Identify the past continuous form:",
    options: ["She sang a song.", "She had sung a song.", "She was singing a song.", "She will sing a song."],
    answer: "She was singing a song."
  },
  {
    question: "Choose the sentence in the past perfect tense:",
    options: ["He has written the letter.", "He had written the letter.", "He wrote the letter.", "He writes the letter."],
    answer: "He had written the letter."
  },
  {
    question: "Which sentence is in the past perfect continuous tense?",
    options: ["She had been reading for two hours.", "She was reading a book.", "She reads every day.", "She had read the book."],
    answer: "She had been reading for two hours."
  },

  // Future Time
  {
    question: "Which of the following expresses future time?",
    options: ["I go to school.", "I will go to school.", "I have gone to school.", "I went to school."],
    answer: "I will go to school."
  },
  {
    question: "Identify the sentence that uses the future perfect tense:",
    options: ["I will be going to town.", "I will have finished by noon.", "I will go to the market.", "I shall go now."],
    answer: "I will have finished by noon."
  },

  // Adverbs
  {
    question: "Which word in the sentence is an adverb? 'She sings beautifully.'",
    options: ["She", "Sings", "Beautifully", "Song"],
    answer: "Beautifully"
  },
  {
    question: "Identify the sentence with an adverb of frequency:",
    options: ["He quickly ran home.", "He always comes late.", "He ran slowly.", "He spoke softly."],
    answer: "He always comes late."
  },

  // Prepositions
  {
    question: "Choose the correct preposition: 'He is good ___ mathematics.'",
    options: ["in", "at", "on", "with"],
    answer: "at"
  },
  {
    question: "Identify the preposition in this sentence: 'The book is under the table.'",
    options: ["book", "is", "under", "table"],
    answer: "under"
  },

  // Conjunctions
  {
    question: "Which of these is a coordinating conjunction?",
    options: ["Although", "Because", "And", "Unless"],
    answer: "And"
  },

  // Interjections
  {
    question: "Which of the following is an interjection?",
    options: ["Wow!", "Go", "Quickly", "Run"],
    answer: "Wow!"
  },

  // Phrases
  {
    question: "Which of the following is a noun phrase?",
    options: ["the big brown dog", "runs quickly", "under the table", "have been going"],
    answer: "the big brown dog"
  },

  // Clauses
  {
    question: "Which is an example of an independent clause?",
    options: ["Because she was late", "Although it rained", "I went home", "When he arrived"],
    answer: "I went home"
  },

  // Synonyms
  {
    question: "What is the synonym of 'happy'?",
    options: ["Sad", "Joyful", "Angry", "Cold"],
    answer: "Joyful"
  },
  {
    question: "Choose the word closest in meaning to 'swift':",
    options: ["slow", "fast", "lazy", "quiet"],
    answer: "fast"
  },

  // Antonyms
  {
    question: "What is the antonym of 'brave'?",
    options: ["Bold", "Fearless", "Timid", "Strong"],
    answer: "Timid"
  },

  // Comprehension
  {
    question: "Why was Ama admired by her teachers and classmates?",
    options: ["She was quiet", "She was always late", "She performed excellently", "She liked to sing"],
    answer: "She performed excellently"
  },
  // Tense & Aspect
  {
    question: "Which sentence is in the present perfect tense?",
    options: ["He eats now.", "He has eaten.", "He is eating.", "He ate."],
    answer: "He has eaten."
  },
  {
    question: "Identify the past participle form of the verb 'write':",
    options: ["Wrote", "Written", "Writes", "Writing"],
    answer: "Written"
  },

  // Adverbs
  {
    question: "What type of adverb is used in 'She arrived early'?",
    options: ["Adverb of time", "Adverb of manner", "Adverb of place", "Adverb of frequency"],
    answer: "Adverb of time"
  },
  {
    question: "Choose the adverb of manner:",
    options: ["Yesterday", "Quickly", "Soon", "Everywhere"],
    answer: "Quickly"
  },

  // Prepositions
  {
    question: "Which preposition completes the sentence? 'We walked ___ the river.'",
    options: ["across", "between", "into", "above"],
    answer: "across"
  },
  {
    question: "Choose the correct preposition: 'He sat ___ the chair.'",
    options: ["on", "in", "at", "over"],
    answer: "on"
  },

  // Conjunctions
  {
    question: "Which sentence correctly uses a subordinating conjunction?",
    options: [
      "I was tired and went to bed.",
      "He is tall but slow.",
      "She came because she was invited.",
      "Come and sit down."
    ],
    answer: "She came because she was invited."
  },

  // Interjections
  {
    question: "Which interjection expresses surprise?",
    options: ["Ouch!", "Wow!", "Hurray!", "Oops!"],
    answer: "Wow!"
  },

  // Phrases
  {
    question: "What type of phrase is 'has been sleeping'?",
    options: ["Noun phrase", "Verb phrase", "Adjective phrase", "Adverb phrase"],
    answer: "Verb phrase"
  },

  // Clauses
  {
    question: "Identify the dependent clause:",
    options: ["He runs fast", "When the sun sets", "I like mangoes", "They danced all night"],
    answer: "When the sun sets"
  },

  // Synonyms
  {
    question: "Select the synonym for 'huge':",
    options: ["Tiny", "Massive", "Short", "Narrow"],
    answer: "Massive"
  },
  {
    question: "Which word is closest in meaning to 'intelligent'?",
    options: ["Foolish", "Smart", "Slow", "Rough"],
    answer: "Smart"
  },

  // Antonyms
  {
    question: "What is the opposite of 'generous'?",
    options: ["Kind", "Mean", "Friendly", "Helpful"],
    answer: "Mean"
  },
  {
    question: "Choose the antonym for 'ascend':",
    options: ["Climb", "Rise", "Go", "Descend"],
    answer: "Descend"
  },

  // Comprehension
  {
    question: "Read the passage: 'Kofi always woke up early and watered the plants before school.' What habit does Kofi have?",
    options: ["Sleeping late", "Skipping school", "Waking early", "Playing games"],
    answer: "Waking early"
  },
  {
    question: "What can we infer from the statement: 'She cried silently as the rain fell'?",
    options: ["She was joyful", "She was in pain", "She was quietly sad", "She was laughing"],
    answer: "She was quietly sad"
  },

  // Vocabulary: Word Use
  {
    question: "Choose the correct word: 'The boy was too weak to ___ the box.'",
    options: ["lift", "leave", "list", "let"],
    answer: "lift"
  },
  {
    question: "Pick the correct word: 'He lost his watch while ___ the field.'",
    options: ["crossing", "cross", "across", "crosses"],
    answer: "crossing"
  },

  // Mixed Grammar
  {
    question: "Which sentence is correct?",
    options: [
      "He go to school everyday.",
      "He goes to school every day.",
      "He gone to school daily.",
      "He going to school each day."
    ],
    answer: "He goes to school every day."
  },
  {
    question: "Choose the correct form: 'She ___ her homework when I arrived.'",
    options: ["has finished", "had finished", "will finish", "finishing"],
    answer: "had finished"
  },

  // More Conjunctions
  {
    question: "Which is a correlative conjunction?",
    options: ["Because", "Neither...nor", "Although", "If"],
    answer: "Neither...nor"
  },
  {
    question: "Identify the sentence with both a coordinating and a subordinating conjunction:",
    options: [
      "I stayed home because I was ill and tired.",
      "I slept early.",
      "He went and came.",
      "They left when it rained."
    ],
    answer: "I stayed home because I was ill and tired."
  },
  // Tense
  {
    question: "What tense is used in: 'He had been studying for hours before the test'?",
    options: ["Past simple", "Past perfect", "Past perfect continuous", "Present perfect"],
    answer: "Past perfect continuous"
  },
  {
    question: "Which of the following is in the present continuous tense?",
    options: ["He will go", "He goes", "He is going", "He went"],
    answer: "He is going"
  },

  // Future Time
  {
    question: "Which sentence shows future continuous tense?",
    options: ["I eat dinner", "I am eating dinner", "I will be eating dinner", "I have eaten dinner"],
    answer: "I will be eating dinner"
  },

  // Adverbs
  {
    question: "Choose the adverb of place:",
    options: ["Here", "Often", "Loudly", "Never"],
    answer: "Here"
  },
  {
    question: "What kind of adverb is 'rarely'?",
    options: ["Place", "Manner", "Time", "Frequency"],
    answer: "Frequency"
  },

  // Prepositions
  {
    question: "Which preposition shows direction?",
    options: ["On", "To", "At", "With"],
    answer: "To"
  },
  {
    question: "Identify the prepositional phrase: 'She sat on the mat.'",
    options: ["She sat", "On the mat", "The mat", "Sat on"],
    answer: "On the mat"
  },

  // Conjunctions
  {
    question: "Select the subordinating conjunction:",
    options: ["And", "But", "Because", "Or"],
    answer: "Because"
  },

  // Interjections
  {
    question: "Choose the interjection used for pain:",
    options: ["Yay!", "Oops!", "Ouch!", "Hurray!"],
    answer: "Ouch!"
  },

  // Phrases
  {
    question: "Which of the following is an adverbial phrase?",
    options: ["a shiny object", "ran very fast", "the red ball", "the old man"],
    answer: "ran very fast"
  },

  // Clauses
  {
    question: "Which clause is independent?",
    options: ["Because he cried", "When I arrived", "She sings", "Although it rained"],
    answer: "She sings"
  },

  // Synonyms
  {
    question: "Choose the synonym for 'bright':",
    options: ["Dull", "Dim", "Intelligent", "Dark"],
    answer: "Intelligent"
  },
  {
    question: "Which word is closest in meaning to 'angry'?",
    options: ["Happy", "Furious", "Calm", "Gentle"],
    answer: "Furious"
  },

  // Antonyms
  {
    question: "Select the antonym for 'polite':",
    options: ["Respectful", "Friendly", "Rude", "Kind"],
    answer: "Rude"
  },
  {
    question: "What is the opposite of 'include'?",
    options: ["Add", "Cover", "Remove", "Increase"],
    answer: "Remove"
  },

  // Comprehension
  {
    question: "From the passage: 'Yaw enjoyed playing football every afternoon.' What was Yaw's favourite activity?",
    options: ["Reading", "Singing", "Football", "Dancing"],
    answer: "Football"
  },
  {
    question: "Passage: 'Mariam smiled as she received the award.' Why did Mariam smile?",
    options: ["She was embarrassed", "She was angry", "She was proud and happy", "She was tired"],
    answer: "She was proud and happy"
  },

  // Sentence structure
  {
    question: "Which is a compound sentence?",
    options: [
      "He ran and jumped.",
      "She came because I called.",
      "He came, and she left.",
      "Since he arrived, I have slept."
    ],
    answer: "He came, and she left."
  },
  {
    question: "Identify the simple sentence:",
    options: [
      "Though it rained, they played.",
      "He walked to school.",
      "She likes dancing and singing.",
      "If she comes, I will leave."
    ],
    answer: "He walked to school."
  },

  // Word Use
  {
    question: "Choose the correct verb: 'The boy ___ the ball into the net.'",
    options: ["kick", "kicking", "kicked", "kicks"],
    answer: "kicked"
  },
  {
    question: "Fill in the blank: 'She ___ to the market before noon.'",
    options: ["has gone", "goes", "gone", "going"],
    answer: "has gone"
  },

  // Punctuation
  {
    question: "Which sentence uses punctuation correctly?",
    options: [
      "He said 'I am tired.'",
      "He said, I am tired.",
      "He said, 'I am tired.'",
      "He said 'I am tired'."
    ],
    answer: "He said, 'I am tired.'"
  },
  {
    question: "What punctuation mark ends a question?",
    options: ["Period", "Comma", "Exclamation mark", "Question mark"],
    answer: "Question mark"
  },

  // Capitalization
  {
    question: "Which word should begin with a capital letter?",
    options: ["river", "school", "ghana", "city"],
    answer: "ghana"
  },
  {
    question: "Choose the sentence with correct capitalization:",
    options: [
      "we went to Kumasi.",
      "We went to kumasi.",
      "we went to kumasi.",
      "We went to Kumasi."
    ],
    answer: "We went to Kumasi."
  },

  // Vocabulary in Context
  {
    question: "What is the meaning of 'generous' in the sentence: 'She is generous to the poor'?",
    options: ["Selfish", "Kind and giving", "Strict", "Harsh"],
    answer: "Kind and giving"
  },
  {
    question: "Find the correct word: 'The rain was so ___ that we could not hear him.'",
    options: ["slight", "light", "heavy", "gentle"],
    answer: "heavy"
  },

  // Error Identification
  {
    question: "Identify the error: 'She go to the market every day.'",
    options: ["She", "go", "to", "every"],
    answer: "go"
  },
  {
    question: "Which part of the sentence is wrong? 'They was playing football in the rain.'",
    options: ["They", "was", "playing", "in"],
    answer: "was"
  },
  // Tense & Aspect
  {
    question: "What tense is used in: 'They had finished the meal before we arrived'?",
    options: ["Present perfect", "Past perfect", "Past continuous", "Future perfect"],
    answer: "Past perfect"
  },
  {
    question: "Identify the tense: 'He was walking to school when it started to rain.'",
    options: ["Past simple", "Past perfect", "Past continuous", "Present continuous"],
    answer: "Past continuous"
  },
  {
    question: "Which tense is used in: 'She has lived here for ten years'?",
    options: ["Present perfect", "Past simple", "Past perfect", "Future perfect"],
    answer: "Present perfect"
  },
  {
    question: "Choose the past perfect continuous form:",
    options: ["She was working", "She had worked", "She had been working", "She has been working"],
    answer: "She had been working"
  },

  // Future Time
  {
    question: "Which of the following expresses future time?",
    options: ["I walk to school", "I have walked", "I will walk to school", "I am walking"],
    answer: "I will walk to school"
  },
  {
    question: "Which is future perfect tense?",
    options: ["I will have eaten", "I eat", "I ate", "I will eat"],
    answer: "I will have eaten"
  },

  // Adverbs
  {
    question: "What kind of adverb is 'loudly'?",
    options: ["Time", "Manner", "Place", "Frequency"],
    answer: "Manner"
  },
  {
    question: "Identify the adverb in the sentence: 'He drives carefully.'",
    options: ["drives", "He", "carefully", "car"],
    answer: "carefully"
  },

  // Prepositions
  {
    question: "Choose the correct preposition: 'She was born ___ July.'",
    options: ["on", "at", "in", "to"],
    answer: "in"
  },
  {
    question: "Fill in the blank: 'He went to the store ___ a loaf of bread.'",
    options: ["with", "for", "at", "to"],
    answer: "for"
  },

  // Conjunctions
  {
    question: "Which is a coordinating conjunction?",
    options: ["Although", "Because", "But", "Since"],
    answer: "But"
  },
  {
    question: "What is the function of a conjunction?",
    options: ["To describe", "To join words or clauses", "To compare nouns", "To express feeling"],
    answer: "To join words or clauses"
  },

  // Interjections
  {
    question: "What does the interjection 'Alas!' express?",
    options: ["Surprise", "Joy", "Sorrow", "Anger"],
    answer: "Sorrow"
  },
  {
    question: "Which is an interjection?",
    options: ["Beautiful", "Because", "Wow", "Quickly"],
    answer: "Wow"
  },

  // Phrases
  {
    question: "Which is a noun phrase?",
    options: ["very quickly", "the big house", "has been running", "under the table"],
    answer: "the big house"
  },
  {
    question: "Identify the verb phrase:",
    options: ["a new book", "was singing", "very fast", "the small girl"],
    answer: "was singing"
  },

  // Clauses
  {
    question: "Which of these is an independent clause?",
    options: ["Before he came", "If I can", "I went home", "Though she cried"],
    answer: "I went home"
  },
  {
    question: "A clause must contain:",
    options: ["a noun", "a verb", "a subject and a verb", "a preposition"],
    answer: "a subject and a verb"
  },

  // Synonyms
  {
    question: "Find the synonym for 'brave':",
    options: ["Coward", "Strong", "Courageous", "Soft"],
    answer: "Courageous"
  },
  {
    question: "Choose the word similar in meaning to 'tiny':",
    options: ["Small", "Big", "Loud", "Tall"],
    answer: "Small"
  },

  // Antonyms
  {
    question: "Which is the antonym of 'sharp'?",
    options: ["Pointy", "Blunt", "Narrow", "Quick"],
    answer: "Blunt"
  },
  {
    question: "What is the opposite of 'increase'?",
    options: ["Add", "Multiply", "Decrease", "Grow"],
    answer: "Decrease"
  },

  // Vocabulary in Context
  {
    question: "Choose the best word: 'The ___ dog barked all night.'",
    options: ["quiet", "loud", "noisy", "silent"],
    answer: "noisy"
  },
  {
    question: "Select the correct word: 'He spoke in a ___ voice.'",
    options: ["softly", "soft", "softer", "softest"],
    answer: "soft"
  },

  // Comprehension (passage-based)
  {
    question: "Passage: 'Ama studied hard and passed the exam.' Why did Ama pass?",
    options: ["She got help", "She guessed", "She studied hard", "She was lucky"],
    answer: "She studied hard"
  },
  {
    question: "Passage: 'The boy ran as fast as he could, but the bus had already left.' What can we say about the boy?",
    options: ["He caught the bus", "He was late", "He was angry", "He was tired"],
    answer: "He was late"
  },

  // Sentence Correction
  {
    question: "Correct this: 'He do his homework every day.'",
    options: ["He does his homework every day.", "He did his homework every day.", "He has his homework every day.", "He done his homework every day."],
    answer: "He does his homework every day."
  },
  {
    question: "Find the error: 'They enjoys playing football.'",
    options: ["They", "enjoys", "playing", "football"],
    answer: "enjoys"
  },

  // Sentence Types
  {
    question: "Which of the following is an interrogative sentence?",
    options: ["He ate mangoes.", "Did you eat?", "Eat your food.", "What a nice meal!"],
    answer: "Did you eat?"
  },
  {
    question: "Which sentence is exclamatory?",
    options: ["Go to bed.", "He is here.", "What a beautiful day!", "Are you ready?"],
    answer: "What a beautiful day!"
  },

  // Spelling
  {
    question: "Which of these is correctly spelled?",
    options: ["Definately", "Definetely", "Definitely", "Definantly"],
    answer: "Definitely"
  },
  {
    question: "Choose the correct spelling:",
    options: ["Recieve", "Receive", "Receeve", "Resieve"],
    answer: "Receive"
  },

  // Capitalization
  {
    question: "Which word must be capitalized?",
    options: ["monday", "tree", "school", "book"],
    answer: "monday"
  },
  {
    question: "Select the sentence with correct capitalization:",
    options: ["i live in accra.", "I live in Accra.", "I live in accra.", "i live in Accra."],
    answer: "I live in Accra."
  },

  // Word Forms
  {
    question: "What is the noun form of 'decide'?",
    options: ["decision", "decider", "deciding", "decide"],
    answer: "decision"
  },
  {
    question: "Choose the adjective form of 'beauty':",
    options: ["beautiful", "beautify", "beauty", "beautician"],
    answer: "beautiful"
  },

  // Figures of Speech
  {
    question: "What figure of speech is 'as brave as a lion'?",
    options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
    answer: "Simile"
  },
  {
    question: "Which is a metaphor?",
    options: ["He ran like the wind", "Her voice is music", "She was as cold as ice", "He danced like a star"],
    answer: "Her voice is music"
  },

  // Pronouns
  {
    question: "Choose the correct pronoun: '___ is going to the market.'",
    options: ["Him", "Her", "He", "Them"],
    answer: "He"
  },
  {
    question: "Which is a possessive pronoun?",
    options: ["He", "Hers", "Her", "She"],
    answer: "Hers"
  },

  // Articles
  {
    question: "Which article fits? '___ apple a day keeps the doctor away.'",
    options: ["An", "A", "The", "No article"],
    answer: "An"
  },
  {
    question: "Choose the correct sentence:",
    options: ["He is a honest man.", "He is an honest man.", "He is the honest man.", "He is honest man."],
    answer: "He is an honest man."
  },
  // Tense & Aspect
  {
    question: "Which sentence is in the simple past tense?",
    options: ["He is playing", "He has played", "He played", "He will play"],
    answer: "He played"
  },
  {
    question: "Identify the present perfect continuous tense:",
    options: ["I have eaten", "I have been eating", "I eat", "I ate"],
    answer: "I have been eating"
  },

  // Future Time
  {
    question: "Which sentence is in the future continuous tense?",
    options: ["She will be cooking dinner", "She cooks dinner", "She has cooked dinner", "She is cooking dinner"],
    answer: "She will be cooking dinner"
  },
  {
    question: "Select the future form: 'They ___ arrive tomorrow.'",
    options: ["will", "has", "had", "have"],
    answer: "will"
  },

  // Adverbs
  {
    question: "Which word is an adverb of frequency?",
    options: ["Always", "Quickly", "Below", "Every"],
    answer: "Always"
  },
  {
    question: "Choose the adverb: 'The cat moved silently through the room.'",
    options: ["cat", "moved", "silently", "room"],
    answer: "silently"
  },

  // Prepositions
  {
    question: "Fill in the blank: 'The book is ___ the table.'",
    options: ["under", "reading", "fast", "light"],
    answer: "under"
  },
  {
    question: "Which is a prepositional phrase?",
    options: ["ran fast", "jumped high", "on the roof", "very nice"],
    answer: "on the roof"
  },

  // Conjunctions
  {
    question: "Identify the conjunction in the sentence: 'She sang and danced.'",
    options: ["sang", "danced", "and", "she"],
    answer: "and"
  },
  {
    question: "Choose the correct word to join these clauses: 'I was tired ___ I slept.'",
    options: ["because", "but", "so", "although"],
    answer: "so"
  },

  // Interjections
  {
    question: "Which interjection shows joy?",
    options: ["Alas!", "Oops!", "Hurray!", "Ugh!"],
    answer: "Hurray!"
  },
  {
    question: "Which sentence uses an interjection correctly?",
    options: ["Wow! That’s amazing.", "He wow went away.", "She wowed him.", "Wow is going."],
    answer: "Wow! That’s amazing."
  },

  // Phrases
  {
    question: "Which is a verb phrase?",
    options: ["has been crying", "the tall tree", "on the mat", "quickly and quietly"],
    answer: "has been crying"
  },
  {
    question: "Choose the noun phrase:",
    options: ["was singing loudly", "the tall boy", "across the field", "very quickly"],
    answer: "the tall boy"
  },

  // Clauses
  {
    question: "Which is a dependent clause?",
    options: ["He ran fast", "Though he was late", "It rained", "She slept early"],
    answer: "Though he was late"
  },
  {
    question: "A complex sentence must have:",
    options: ["two independent clauses", "one clause only", "one independent and one dependent clause", "no verbs"],
    answer: "one independent and one dependent clause"
  },

  // Synonyms
  {
    question: "Choose the synonym for 'happy':",
    options: ["Sad", "Joyful", "Angry", "Hungry"],
    answer: "Joyful"
  },
  {
    question: "What is similar in meaning to 'fast'?",
    options: ["Quick", "Slow", "Late", "Careful"],
    answer: "Quick"
  },

  // Antonyms
  {
    question: "Select the antonym of 'hot':",
    options: ["Warm", "Boiling", "Cold", "Burning"],
    answer: "Cold"
  },
  {
    question: "Choose the opposite of 'start':",
    options: ["Begin", "End", "Continue", "Stop"],
    answer: "End"
  },

  // Vocabulary in Context
  {
    question: "What is the meaning of 'generous' in: 'He is generous with his money'?",
    options: ["Selfish", "Careful", "Giving", "Greedy"],
    answer: "Giving"
  },
  {
    question: "Select the correct word: 'He is known for his ___ decisions.'",
    options: ["wise", "wisdom", "wiser", "wisely"],
    answer: "wise"
  },

  // Comprehension
  {
    question: "Passage: 'Kojo arrived late but still completed the exam.' What can we say about Kojo?",
    options: ["He failed", "He finished late", "He completed the exam", "He missed the exam"],
    answer: "He completed the exam"
  },
  {
    question: "Passage: 'Adjoa sang beautifully at the event.' How did Adjoa perform?",
    options: ["Poorly", "Beautifully", "Loudly", "Quickly"],
    answer: "Beautifully"
  },

  // Sentence Correction
  {
    question: "Find the correct sentence:",
    options: ["She go home early.", "She goes home early.", "She gone home early.", "She going home early."],
    answer: "She goes home early."
  },
  {
    question: "Correct this: 'He don't know the answer.'",
    options: ["He doesn't know the answer.", "He don't knows the answer.", "He do not know the answer.", "He not know the answer."],
    answer: "He doesn't know the answer."
  },

  // Sentence Types
  {
    question: "Which is a declarative sentence?",
    options: ["Are you coming?", "Come here!", "She is here.", "What a day!"],
    answer: "She is here."
  },
  {
    question: "Choose the imperative sentence:",
    options: ["You are late.", "Where is your bag?", "Close the door.", "How funny!"],
    answer: "Close the door."
  },

  // Spelling
  {
    question: "Which of these is correct?",
    options: ["Acomodation", "Accomodation", "Accommodation", "Acommadation"],
    answer: "Accommodation"
  },
  {
    question: "Correct spelling of the word is:",
    options: ["Enviroment", "Environment", "Environement", "Envirnment"],
    answer: "Environment"
  },

  // Capitalization
  {
    question: "Select the correctly capitalized sentence:",
    options: ["The sun sets in the west.", "The sun Sets in the west.", "The Sun sets in the West.", "The sun sets in the West."],
    answer: "The sun sets in the west."
  },
  {
    question: "Which sentence is correct?",
    options: ["We visited cape coast.", "We visited Cape coast.", "We visited Cape Coast.", "we visited Cape Coast."],
    answer: "We visited Cape Coast."
  },

  // Word Forms
  {
    question: "Choose the noun form of 'arrive':",
    options: ["arriving", "arrived", "arrival", "arrives"],
    answer: "arrival"
  },
  {
    question: "What is the verb form of 'decision'?",
    options: ["decider", "deciding", "decide", "decided"],
    answer: "decide"
  },

  // Figures of Speech
  {
    question: "Which is an example of personification?",
    options: ["The tree danced in the wind.", "He is as brave as a lion.", "He roared like a lion.", "She is an angel."],
    answer: "The tree danced in the wind."
  },
  {
    question: "Identify the hyperbole:",
    options: ["I’ve told you a million times!", "She ran fast.", "It’s raining a lot.", "The cake is sweet."],
    answer: "I’ve told you a million times!"
  },

  // Pronouns
  {
    question: "Which of these is a reflexive pronoun?",
    options: ["Myself", "Me", "I", "They"],
    answer: "Myself"
  },
  {
    question: "Choose the relative pronoun:",
    options: ["That", "He", "Him", "She"],
    answer: "That"
  },

  // Articles
  {
    question: "Select the correct article: '___ moon is bright tonight.'",
    options: ["A", "An", "The", "No article"],
    answer: "The"
  },
  {
    question: "Which is correct?",
    options: ["He bought a orange.", "He bought an orange.", "He bought orange.", "He bought the orange."],
    answer: "He bought an orange."
  },
  // Tense and Aspect
  {
    question: "Which of the following is in the past perfect tense?",
    options: ["He had eaten before I came", "He eats rice", "He is eating rice", "He was eating rice"],
    answer: "He had eaten before I came"
  },
  {
    question: "Identify the sentence in past perfect continuous:",
    options: ["She was dancing", "She had been dancing", "She danced", "She had danced"],
    answer: "She had been dancing"
  },

  // Future Time
  {
    question: "Which sentence shows future intention?",
    options: ["He goes to school", "He went to school", "He is going to school tomorrow", "He had gone to school"],
    answer: "He is going to school tomorrow"
  },
  {
    question: "Select the correct sentence in future perfect:",
    options: ["I will have finished by 5pm", "I will finishing", "I will finishes", "I will have finish"],
    answer: "I will have finished by 5pm"
  },

  // Adverbs
  {
    question: "Identify the adverb in the sentence: 'He spoke softly.'",
    options: ["He", "spoke", "softly", "the"],
    answer: "softly"
  },
  {
    question: "Choose the sentence that contains an adverb of time:",
    options: ["She works quickly", "They arrived yesterday", "He drives carefully", "He talks softly"],
    answer: "They arrived yesterday"
  },

  // Prepositions
  {
    question: "What is the preposition in this sentence: 'The pen is on the table'?",
    options: ["pen", "on", "is", "table"],
    answer: "on"
  },
  {
    question: "Complete the sentence: 'He sat ___ the chair.'",
    options: ["on", "to", "in", "under"],
    answer: "on"
  },

  // Conjunctions
  {
    question: "Identify the conjunction: 'He is tall and strong.'",
    options: ["He", "tall", "and", "strong"],
    answer: "and"
  },
  {
    question: "Which sentence uses 'although' correctly?",
    options: ["Although he was tired, he kept running.", "Although he tired he run.", "Although he run.", "Although tired he kept."],
    answer: "Although he was tired, he kept running."
  },

  // Interjections
  {
    question: "Choose the correct interjection for fear:",
    options: ["Yikes!", "Yay!", "Aha!", "Bravo!"],
    answer: "Yikes!"
  },
  {
    question: "Which sentence includes an interjection?",
    options: ["Wow! That’s great.", "He wowed her.", "They walked wow.", "She is wow."],
    answer: "Wow! That’s great."
  },

  // Phrases
  {
    question: "Which group of words is an adverbial phrase?",
    options: ["at noon", "the blue car", "was eating", "a loud noise"],
    answer: "at noon"
  },
  {
    question: "Identify the noun phrase:",
    options: ["a group of students", "ran fast", "danced quickly", "under the tree"],
    answer: "a group of students"
  },

  // Clauses
  {
    question: "Which of these is an independent clause?",
    options: ["Although he was tired", "Because it was late", "He went home", "When she sings"],
    answer: "He went home"
  },
  {
    question: "Choose the dependent clause:",
    options: ["She smiled", "I arrived early", "Before he left", "They slept"],
    answer: "Before he left"
  },

  // Synonyms
  {
    question: "Synonym of 'intelligent' is:",
    options: ["Dull", "Smart", "Lazy", "Weak"],
    answer: "Smart"
  },
  {
    question: "Choose the synonym for 'strong':",
    options: ["Weak", "Sturdy", "Small", "Soft"],
    answer: "Sturdy"
  },

  // Antonyms
  {
    question: "Opposite of 'early' is:",
    options: ["Prompt", "Late", "Soon", "Quick"],
    answer: "Late"
  },
  {
    question: "Antonym of 'hardworking' is:",
    options: ["Lazy", "Busy", "Smart", "Quick"],
    answer: "Lazy"
  },

  // Vocabulary in Context
  {
    question: "In context: 'She is very punctual.' Punctual means:",
    options: ["late", "timely", "absent", "fast"],
    answer: "timely"
  },
  {
    question: "The word 'demanding' in 'He has a demanding job' means:",
    options: ["easy", "challenging", "boring", "lazy"],
    answer: "challenging"
  },

  // Comprehension
  {
    question: "Passage: 'Ama wakes up at 5am and jogs for an hour every day.' What does this tell us about Ama?",
    options: ["She is lazy", "She is active", "She sleeps all day", "She is careless"],
    answer: "She is active"
  },
  {
    question: "Passage: 'The crowd cheered as the team scored the goal.' What happened?",
    options: ["The team lost", "The team left", "The team scored", "The crowd left"],
    answer: "The team scored"
  },

  // Sentence Correction
  {
    question: "Correct this: 'She don't go to school.'",
    options: ["She does not go to school.", "She don’t goes to school.", "She not go to school.", "She doesn’t goes school."],
    answer: "She does not go to school."
  },
  {
    question: "Which sentence is grammatically correct?",
    options: ["He have gone home.", "He has gone home.", "He has go home.", "He have goes home."],
    answer: "He has gone home."
  },

  // Sentence Types
  {
    question: "Which sentence is interrogative?",
    options: ["She runs fast.", "Do you like rice?", "Close the door.", "How sad!"],
    answer: "Do you like rice?"
  },
  {
    question: "Which is an exclamatory sentence?",
    options: ["What a beautiful dress!", "She is kind.", "Are you okay?", "Shut the door."],
    answer: "What a beautiful dress!"
  },

  // Spelling
  {
    question: "Choose the correct spelling:",
    options: ["Definately", "Definitely", "Defenetely", "Definatelye"],
    answer: "Definitely"
  },
  {
    question: "Correct spelling of the word is:",
    options: ["Pronounciation", "Pronunciation", "Prononciation", "Pronounciate"],
    answer: "Pronunciation"
  },

  // Capitalization
  {
    question: "Which is correctly capitalized?",
    options: ["My uncle lives in Accra.", "My Uncle lives in accra.", "My uncle Lives in Accra.", "My uncle lives In Accra."],
    answer: "My uncle lives in Accra."
  },
  {
    question: "Choose the sentence with proper capitalization:",
    options: ["i am going home.", "I am going home.", "i Am Going Home.", "I am Going Home."],
    answer: "I am going home."
  },

  // Word Forms
  {
    question: "What is the adjective form of 'beauty'?",
    options: ["Beautiful", "Beautify", "Beautiness", "Beautee"],
    answer: "Beautiful"
  },
  {
    question: "Select the noun form of 'decide':",
    options: ["Deciding", "Decision", "Decider", "Decidee"],
    answer: "Decision"
  },

  // Figures of Speech
  {
    question: "Which is a metaphor?",
    options: ["He is a lion on the field.", "He runs like a lion.", "He roared loudly.", "He acted bravely."],
    answer: "He is a lion on the field."
  },
  {
    question: "Which is a simile?",
    options: ["She sings like a bird.", "She is a bird.", "The bird sang.", "She sings beautifully."],
    answer: "She sings like a bird."
  },

  // Pronouns
  {
    question: "Which is a demonstrative pronoun?",
    options: ["This", "He", "They", "We"],
    answer: "This"
  },
  {
    question: "Choose the correct pronoun to complete: '___ are playing outside.'",
    options: ["They", "Them", "Their", "Theirs"],
    answer: "They"
  },

  // Articles
  {
    question: "Which sentence uses the correct article?",
    options: ["He saw a elephant.", "He saw an elephant.", "He saw the elephant.", "He saw elephant."],
    answer: "He saw an elephant."
  },
  {
    question: "Identify the correct sentence:",
    options: ["I need a advice.", "I need some advice.", "I need an advice.", "I need the advice."],
    answer: "I need some advice."
  },
  // Summary – Understanding Main Idea
  {
    question: "What is the main purpose of a summary?",
    options: [
      "To write every detail of a passage",
      "To list all characters in a story",
      "To state the main idea in few words",
      "To copy exactly what was written"
    ],
    answer: "To state the main idea in few words"
  },
  {
    question: "Which of the following is the best summary of: 'Kofi studied hard, attended extra classes, and passed his exams with distinction'?",
    options: [
      "Kofi passed his exams.",
      "Kofi studied, attended classes, and passed.",
      "Kofi's hard work led to success.",
      "Kofi liked school."
    ],
    answer: "Kofi's hard work led to success."
  },

  // Summary – Practice
  {
    question: "Choose the best summary: 'The children were playing when the rain began. They ran home to avoid getting wet.'",
    options: [
      "The children ran home because of rain.",
      "The rain fell on the children.",
      "The children were wet.",
      "It rained during play."
    ],
    answer: "The children ran home because of rain."
  },
  {
    question: "Select the correct summary: 'Although she was tired, Akua helped her brother with homework before sleeping.'",
    options: [
      "Akua helped her brother before sleeping.",
      "Akua was tired and slept.",
      "Akua refused to help.",
      "Akua did nothing."
    ],
    answer: "Akua helped her brother before sleeping."
  },

  // Grammar – Verb Tenses
  {
    question: "Which tense is used in: 'I had already eaten'?",
    options: ["Past continuous", "Present perfect", "Past perfect", "Future perfect"],
    answer: "Past perfect"
  },
  {
    question: "Identify the tense: 'By 2025, they will have completed the project.'",
    options: ["Future perfect", "Present", "Past", "Past perfect"],
    answer: "Future perfect"
  },

  // Comprehension – Inference
  {
    question: "Passage: 'John cleaned his shoes and packed his bag at night.' What can you infer?",
    options: [
      "John was preparing for school.",
      "John was sleeping.",
      "John went out to play.",
      "John lost his shoes."
    ],
    answer: "John was preparing for school."
  },
  {
    question: "Passage: 'After the announcement, the crowd cheered and clapped.' What happened?",
    options: [
      "Bad news was given.",
      "People got angry.",
      "The news was good.",
      "They were silent."
    ],
    answer: "The news was good."
  },

  // Vocabulary – Synonyms
  {
    question: "Synonym of 'happy' is:",
    options: ["sad", "joyful", "cry", "mad"],
    answer: "joyful"
  },
  {
    question: "Select the synonym of 'quick':",
    options: ["slow", "fast", "small", "tired"],
    answer: "fast"
  },

  // Vocabulary – Antonyms
  {
    question: "Antonym of 'strong' is:",
    options: ["weak", "bold", "smart", "solid"],
    answer: "weak"
  },
  {
    question: "Opposite of 'early' is:",
    options: ["timely", "soon", "late", "fast"],
    answer: "late"
  },

  // Grammar – Prepositions
  {
    question: "Choose the correct preposition: 'He sat ___ the desk.'",
    options: ["at", "in", "on", "into"],
    answer: "at"
  },
  {
    question: "Which sentence uses a preposition correctly?",
    options: [
      "He jumped on the chair.",
      "He jumped the chair.",
      "He jumped with the chair.",
      "He jumped chair."
    ],
    answer: "He jumped on the chair."
  },

  // Grammar – Conjunctions
  {
    question: "Identify the correct sentence:",
    options: [
      "She is tired but she working.",
      "She is tired, but she is working.",
      "She tired, but working.",
      "She working, and tired."
    ],
    answer: "She is tired, but she is working."
  },
  {
    question: "Which conjunction fits: 'I will go out ___ it does not rain.'",
    options: ["but", "although", "if", "unless"],
    answer: "if"
  },

  // Grammar – Interjections
  {
    question: "Which is an interjection?",
    options: ["Alas!", "However", "And", "Therefore"],
    answer: "Alas!"
  },
  {
    question: "Choose the correct usage of an interjection:",
    options: [
      "Hurray! We won the match.",
      "He said hurray to her.",
      "They were hurray.",
      "He hurrayed away."
    ],
    answer: "Hurray! We won the match."
  },

  // Grammar – Phrases
  {
    question: "Identify the adverbial phrase:",
    options: ["with his friends", "at night", "a big house", "a young girl"],
    answer: "at night"
  },
  {
    question: "Which is a noun phrase?",
    options: ["The tall boy", "Very quickly", "Before dawn", "Has gone"],
    answer: "The tall boy"
  },

  // Grammar – Clauses
  {
    question: "Choose the dependent clause:",
    options: ["Because it rained", "They played football", "I slept well", "He arrived late"],
    answer: "Because it rained"
  },
  {
    question: "Which is an independent clause?",
    options: ["She ran away", "Since you left", "Although tired", "Because she cried"],
    answer: "She ran away"
  },

  // Grammar – Word Class
  {
    question: "Identify the verb in the sentence: 'The baby cried loudly.'",
    options: ["baby", "cried", "loudly", "the"],
    answer: "cried"
  },
  {
    question: "Which word is an adjective?",
    options: ["beautiful", "sing", "carefully", "truth"],
    answer: "beautiful"
  },

  // Writing – Sentence Completion
  {
    question: "Complete the sentence: 'The boy ran ___ the road.'",
    options: ["across", "above", "under", "out"],
    answer: "across"
  },
  {
    question: "Fill in the blank: 'The dog barked ___ the stranger.'",
    options: ["at", "on", "in", "into"],
    answer: "at"
  },

  // Summary – Pick the Best Option
  {
    question: "Best summary: 'Kojo wakes up early, sweeps the compound, and helps in the kitchen before school.'",
    options: [
      "Kojo is lazy.",
      "Kojo is helpful and hardworking.",
      "Kojo sleeps a lot.",
      "Kojo is a child."
    ],
    answer: "Kojo is helpful and hardworking."
  },
  {
    question: "Select the best summary: 'The driver slowed down because of the traffic jam ahead.'",
    options: [
      "The driver was tired.",
      "Traffic caused the driver to slow down.",
      "There was no traffic.",
      "The driver stopped."
    ],
    answer: "Traffic caused the driver to slow down."
  },

  // Vocabulary – Confused Words
  {
    question: "Which word fits: 'The _____ is shining brightly.'",
    options: ["sun", "son", "soon", "seen"],
    answer: "sun"
  },
  {
    question: "Which is correct: 'I want to _____ a new dress.'",
    options: ["buy", "by", "bye", "buoy"],
    answer: "buy"
  },
  // Summary
  {
    question: "Best summary: 'Ama read the book, took notes, and revised daily.'",
    options: [
      "Ama liked reading.",
      "Ama took notes from the book.",
      "Ama was a good student.",
      "Ama studied the book carefully."
    ],
    answer: "Ama studied the book carefully."
  },
  {
    question: "Choose the best summary: 'Yaw overslept and missed the school bus, so he had to walk.'",
    options: [
      "Yaw missed school.",
      "Yaw walked to school because he missed the bus.",
      "Yaw hated the bus.",
      "Yaw was punished."
    ],
    answer: "Yaw walked to school because he missed the bus."
  },

  {
    question: "Identify the tense: 'They had been working since morning.'",
    options: ["Past continuous", "Present perfect", "Past perfect continuous", "Future perfect"],
    answer: "Past perfect continuous"
  },
  {
    question: "What is the tense of this sentence? 'He will be arriving soon.'",
    options: ["Future perfect", "Future continuous", "Past perfect", "Present perfect"],
    answer: "Future continuous"
  },

  {
    question: "Passage: 'She carried an umbrella although the sky was clear.' What can be inferred?",
    options: [
      "She liked umbrellas.",
      "She feared rain.",
      "She was protecting herself from the sun.",
      "She forgot her hat."
    ],
    answer: "She feared rain."
  },
  {
    question: "Passage: 'Kweku looked everywhere but couldn’t find his phone.' What can you infer?",
    options: [
      "Kweku had lost his phone.",
      "He was lazy.",
      "He didn’t like his phone.",
      "His phone was stolen."
    ],
    answer: "Kweku had lost his phone."
  },
  {
    question: "Synonym of 'brave' is:",
    options: ["coward", "bold", "fear", "weak"],
    answer: "bold"
  },
  {
    question: "Select the synonym of 'angry':",
    options: ["furious", "calm", "happy", "kind"],
    answer: "furious"
  },
  {
    question: "Antonym of 'generous' is:",
    options: ["kind", "stingy", "friendly", "open"],
    answer: "stingy"
  },
  {
    question: "Opposite of 'rise' is:",
    options: ["jump", "climb", "fall", "lift"],
    answer: "fall"
  },
  {
    question: "Choose the correct preposition: 'She is fond ___ music.'",
    options: ["with", "at", "of", "on"],
    answer: "of"
  },
  {
    question: "Identify the correct sentence:",
    options: [
      "He is married with her.",
      "He is married to her.",
      "He is married by her.",
      "He is married on her."
    ],
    answer: "He is married to her."
  },

  // Grammar – Conjunctions
  {
    question: "Select the correct conjunction: 'He was tired ___ continued working.'",
    options: ["but", "and", "because", "or"],
    answer: "but"
  },
  {
    question: "Which sentence uses 'although' correctly?",
    options: [
      "Although he was late, he was allowed in.",
      "He although was late, he entered.",
      "Although he late was, entered.",
      "Although he late, allowed in."
    ],
    answer: "Although he was late, he was allowed in."
  },

  // Grammar – Interjections
  {
    question: "Which sentence contains an interjection?",
    options: [
      "Wow! That was amazing.",
      "I saw her running.",
      "He went to market.",
      "She speaks French."
    ],
    answer: "Wow! That was amazing."
  },
  {
    question: "Identify the interjection in the sentence: 'Oops! I broke the plate.'",
    options: ["Oops!", "I", "broke", "plate"],
    answer: "Oops!"
  },

  // Grammar – Phrases
  {
    question: "Identify the verb phrase:",
    options: ["has been working", "under the table", "a tall girl", "in the bag"],
    answer: "has been working"
  },
  {
    question: "Which is a prepositional phrase?",
    options: ["in the morning", "have gone", "the lazy cat", "ran fast"],
    answer: "in the morning"
  },

  // Grammar – Clauses
  {
    question: "Which is a dependent clause?",
    options: ["If I had time", "She sings well", "They went home", "He walks fast"],
    answer: "If I had time"
  },
  {
    question: "Identify the independent clause:",
    options: ["I love chocolate", "Although tired", "Since I came", "Because I slept"],
    answer: "I love chocolate"
  },

  // Word Usage – Confused Words
  {
    question: "Which is correct: 'He threw the ball ____ the wall.'",
    options: ["against", "again", "gainst", "a gain"],
    answer: "against"
  },
  {
    question: "Choose the correct word: 'Their books are on ____ desk.'",
    options: ["there", "they’re", "their", "theirs"],
    answer: "their"
  },

  // Sentence Completion
  {
    question: "Complete the sentence: 'She was happy ___ she passed the test.'",
    options: ["because", "although", "unless", "and"],
    answer: "because"
  },
  {
    question: "Fill in the blank: 'If I ___ you, I would apologize.'",
    options: ["was", "were", "am", "be"],
    answer: "were"
  },

  // Summary – Reading Strategy
  {
    question: "When writing a summary, avoid:",
    options: [
      "Retelling the entire passage",
      "Using your own words",
      "Focusing on main points",
      "Being brief"
    ],
    answer: "Retelling the entire passage"
  },
  {
    question: "A good summary should:",
    options: [
      "Contain exact words from the text",
      "Be very long",
      "Include key points only",
      "Have every example"
    ],
    answer: "Include key points only"
  },

  // Comprehension Practice
  {
    question: "Passage: 'The storm destroyed several homes, leaving many without shelter.' What is the main idea?",
    options: [
      "The storm was fun.",
      "People were homeless after the storm.",
      "Homes are expensive.",
      "It rained for days."
    ],
    answer: "People were homeless after the storm."
  },
  {
    question: "Passage: 'Kwame trained daily and improved his speed.' What is the result of his training?",
    options: [
      "He got tired.",
      "He became slower.",
      "His speed improved.",
      "He quit running."
    ],
    answer: "His speed improved."
  },

  // Synonyms and Antonyms – Word Skills
  {
    question: "Antonym of 'modern' is:",
    options: ["ancient", "recent", "bright", "old"],
    answer: "ancient"
  },
  {
    question: "Synonym of 'assist' is:",
    options: ["help", "hurt", "delay", "avoid"],
    answer: "help"
  },

  // Spelling and Vocabulary
  {
    question: "Which of these is correctly spelled?",
    options: ["enviroment", "environment", "enviorment", "envaironment"],
    answer: "environment"
  },
  {
    question: "Choose the correct spelling:",
    options: ["acommodation", "accommodation", "accomadation", "acomodation"],
    answer: "accommodation"
  }
];

export default englishQuestions;