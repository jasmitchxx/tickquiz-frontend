const historyQuestions = [
  {
    question: "Which of the following best defines the study of history?",
    options: ["The study of current political events", "The study of past human activities and societies", "The study of future predictions", "The study of natural phenomena"],
    answer: "The study of past human activities and societies"
  },
  {
    question: "Which of these is a non-documentary source of African history?",
    options: ["Newspapers", "Diaries", "Archaeological findings", "Travel journals"],
    answer: "Archaeological findings"
  },
  {
    question: "The hunter-gatherer period in Africa is characterized by:",
    options: ["Permanent settlements with agriculture", "Hunting and gathering with pebble tools", "Construction of pyramids", "Extensive trade with Europe"],
    answer: "Hunting and gathering with pebble tools"
  },
  {
    question: "Which of the following periods came after the Early Stone Age in Africa?",
    options: ["Middle Stone Age", "Iron Age", "Late Stone Age II", "Bronze Age"],
    answer: "Middle Stone Age"
  },
  {
    question: "The main purpose of using an interdisciplinary approach in African history is to:",
    options: ["Reduce the cost of research", "Combine multiple sources like literature and geography for comprehensive understanding", "Focus only on oral traditions", "Ignore archaeological evidence"],
    answer: "Combine multiple sources like literature and geography for comprehensive understanding"
  },
  {
    question: "Pharaonic Egypt is considered advanced because it achieved high levels in:",
    options: ["Technology", "writing", "administration", "and medicine", "Fishing and hunting", "Nomadic herding", "Grassland agriculture only"],
    answer: "Technology, writing, administration, and medicine"
  },
  {
    question: "Which factor most facilitated the spread of Egyptian civilization to other regions?",
    options: ["The Sahara Desert", "The Nile River and Mediterranean trade routes", "The Bantu migration", "The discovery of gold in Nubia"],
    answer: "The Nile River and Mediterranean trade routes"
  },
  {
    question: "Christianity first spread in Africa mainly through:",
    options: ["West African empires", "Pharaonic Egypt and Nilotic Sudan", "Berber traders", "Swahili city-states"],
    answer: "Pharaonic Egypt and Nilotic Sudan"
  },
  {
    question: "Axum's location facilitated its links with other civilizations because:",
    options: ["It was on a remote mountain with no trade", "It was near the Red Sea and accessible to Arabian and Indian traders", "It was entirely desert", "It had no ports or rivers"],
    answer: "It was near the Red Sea and accessible to Arabian and Indian traders"
  },
  {
    question: "Which of the following was a key feature of Axumite civilization?",
    options: ["Monopoly on trans-Saharan trade", "High levels of art", "culture", "and metal technology", "Complete isolation from neighbors", "Nomadic lifestyle with no towns"],
    answer: "High levels of art, culture, and metal technology"
  },
  {
    question: "The Berber civilization in North Africa was known for:",
    options: ["Being purely pastoral with no trade", "Art", "technology", "religion", "and trans-Saharan commerce", "Construction of pyramids like Egypt", "Exclusive reliance on hunting"],
    answer: "Art, technology, religion, and trans-Saharan commerce"
  },
  {
    question: "The Bantu migrations influenced Africa by:",
    options: ["Introducing agriculture", "iron tools", "and languages to new regions", "Building pyramids in Egypt", "Starting the Trans-Atlantic slave trade", "Replacing Berber kingdoms entirely"],
    answer: "Introducing agriculture, iron tools, and languages to new regions"
  },
  {
    question: "Swahili civilization emerged mainly as a result of:",
    options: ["Isolation from other regions", "Fusion of Arabic", "Persian", "and Bantu cultures through trade", "European colonization in the 16th century", "Nomadic herding in inland Africa"],
    answer: "Fusion of Arabic, Persian, and Bantu cultures through trade"
  },
  {
    question: "Which feature distinguishes Swahili city-states from other African settlements?",
    options: ["Nomadic lifestyle", "International trade", "city-based organization", "and metal technology", "Lack of written language", "No contact with outsiders"],
    answer: "International trade, city-based organization, and metal technology"
  },
  {
    question: "Islam spread into West African Sudan primarily through:",
    options: ["Military conquest by Europeans", "Trade routes across the Sahara", "Migration of the Bantu", "Egyptian missionaries"],
    answer: "Trade routes across the Sahara"
  },
  {
    question: "A major negative effect of the Trans-Saharan trade was:",
    options: ["Introduction of literacy", "Spread of slavery and forced religious conversion", "Introduction of iron-working", "Development of towns"],
    answer: "Spread of slavery and forced religious conversion"
  },
  {
    question: "Which environmental factor influenced the culture of West African Sudan?",
    options: ["Desert and grasslands shaping pastoral and nomadic life", "Volcanic eruptions", "Dense rainforests only", "Tundra and permafrost"],
    answer: "Desert and grasslands shaping pastoral and nomadic life"
  },
  {
    question: "The main states of pre-colonial Ghana included:",
    options: ["Dagomba", "Asante", "Fante", "and Ewe", "Zulu", "Xhosa", "and Shona", "Mali", "Songhai", "and Kanem", "Egypt and Nubia"],
    answer: "Dagomba, Asante, Fante, and Ewe"
  },
  {
    question: "Which political system is centralized in pre-colonial Ghana?",
    options: ["Asante kingdom", "Tallensi society", "Guans", "Nomadic Fulanis"],
    answer: "Asante kingdom"
  },
  {
    question: "Theocracies in pre-colonial Ghana were exemplified by:",
    options: ["Dagomba", "Ga-Adangbe and Guans", "Asante", "Fante"],
    answer: "Ga-Adangbe and Guans"
  },
  {
    question: "Which is a common factor that promoted the growth of West African forest and coastal states?",
    options: ["Fertile land", "iron casting", "and trade with Europeans", "Isolation from trade networks", "Nomadic lifestyle", "Dependence solely on hunting"],
    answer: "Fertile land, iron casting, and trade with Europeans"
  },
  {
    question: "Which European nation first reached the Gold Coast in the 15th century?",
    options: ["Portugal", "Britain", "France", "Netherlands"],
    answer: "Portugal"
  },
  {
    question: "The main reason Europeans came to West Africa was:",
    options: ["Trade in gold", "ivory", "and slaves", "To settle permanently", "To study African cultures", "To build pyramids"],
    answer: "Trade in gold, ivory, and slaves"
  },
  {
    question: "The term 'Middle Passage' refers to:",
    options: ["The journey of enslaved Africans across the Atlantic", "European migration to Africa", "Trade routes in the Sahara", "African migration to Europe"],
    answer: "The journey of enslaved Africans across the Atlantic"
  },
  {
    question: "Which African kingdom actively participated in the slave trade?",
    options: ["Asante", "Mali", "Songhai", "Axum"],
    answer: "Asante"
  },
  {
    question: "Elmina Castle was built by which European country?",
    options: ["Portugal", "Britain", "Netherlands", "France"],
    answer: "Portugal"
  },
  {
    question: "The primary goods traded by Europeans in West Africa before slaves were:",
    options: ["Gold and ivory", "Textiles only", "Rice only", "Spices only"],
    answer: "Gold and ivory"
  },
  {
    question: "The main impact of the trans-Atlantic slave trade on African societies was:",
    options: ["Population loss and social disruption", "Rapid industrialization", "Spread of Christianity only", "Agricultural expansion"],
    answer: "Population loss and social disruption"
  },
  {
    question: "Which European nation abolished the slave trade first?",
    options: ["Britain", "Portugal", "France", "Spain"],
    answer: "Britain"
  },
  {
    question: "The Berlin Conference of 1884â€“1885 is significant because:",
    options: ["It regulated the colonization of Africa by European powers", "It ended the trans-Saharan trade", "It was a trade agreement between African kingdoms", "It promoted African independence"],
    answer: "It regulated the colonization of Africa by European powers"
  },
  {
    question: "Which African country successfully resisted European colonization in the 19th century?",
    options: ["Ethiopia", "Ghana", "Nigeria", "Senegal"],
    answer: "Ethiopia"
  },
  {
    question: "Indirect rule in colonial Africa meant:",
    options: ["European powers ruled through local chiefs", "Colonies ruled themselves", "Europeans left entirely", "Colonies were ruled directly by kings"],
    answer: "European powers ruled through local chiefs"
  },
  {
    question: "Direct rule in colonial Africa is best associated with:",
    options: ["France", "Britain", "Portugal", "Netherlands"],
    answer: "France"
  },
  {
    question: "The main cash crop introduced during colonial rule in Ghana was:",
    options: ["Cocoa", "Rice", "Cotton", "Tea"],
    answer: "Cocoa"
  },
  {
    question: "Which European country controlled the Gold Coast before independence?",
    options: ["Britain", "Portugal", "France", "Germany"],
    answer: "Britain"
  },
  {
    question: "The Ashanti wars were fought between the British and:",
    options: ["Asante kingdom", "Mali Empire", "Songhai Empire", "Benin Kingdom"],
    answer: "Asante kingdom"
  },
  {
    question: "Colonial education in Africa aimed mainly to:",
    options: ["Train Africans to work in European administration", "Promote African languages", "Teach only African history", "Create military leaders"],
    answer: "Train Africans to work in European administration"
  },
  {
    question: "The term 'Protectorate' refers to:",
    options: ["A territory controlled and protected by a foreign power", "A fully independent nation", "A trading post only", "A slave camp"],
    answer: "A territory controlled and protected by a foreign power"
  },
  {
    question: "The main export of the Gold Coast under colonial rule was:",
    options: ["Cocoa", "Gold", "Timber", "Palm oil"],
    answer: "Cocoa"
  },
  {
    question: "The introduction of European currencies in Africa led to:",
    options: ["Integration into global trade", "Abandonment of trade", "Rise of barter system", "Population decline"],
    answer: "Integration into global trade"
  },
  {
    question: "Colonial infrastructure such as railways was built mainly to:",
    options: ["Transport raw materials to ports", "Promote tourism", "Connect African kingdoms", "Facilitate education"],
    answer: "Transport raw materials to ports"
  },
  {
    question: "Which African nationalist leader is known as the 'Father of Ghanaian Independence'?",
    options: ["Kwame Nkrumah", "J. B. Danquah", "Edward Akufo-Addo", "Kofi Busia"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The Pan-African movement aimed to:",
    options: ["Unite Africans and people of African descent worldwide", "Promote European colonization", "Encourage African isolation", "Create trade monopolies"],
    answer: "Unite Africans and people of African descent worldwide"
  },
  {
    question: "The Cocoa Hold-Up of 1930s in Ghana was a protest against:",
    options: ["Low prices and colonial policies", "Slavery", "War taxes", "European schools"],
    answer: "Low prices and colonial policies"
  },
  {
    question: "The main purpose of missionary schools in colonial Africa was:",
    options: ["Religious conversion and literacy", "Military training", "Gold mining", "Tax collection"],
    answer: "Religious conversion and literacy"
  },
  {
    question: "Indirect rule helped Britain to:",
    options: ["Reduce administrative costs by using local authorities", "Promote direct European governance", "Abolish local customs", "Control only urban areas"],
    answer: "Reduce administrative costs by using local authorities"
  },
  {
    question: "The main resistance of African societies to colonial rule included:",
    options: ["Armed rebellion and passive resistance", "Migration to Europe", "Building castles", "Ignoring Europeans completely"],
    answer: "Armed rebellion and passive resistance"
  },
  {
    question: "The Berlin Conference led to:",
    options: ["Partition of Africa without African consent", "End of slave trade", "African independence", "Introduction of cocoa"],
    answer: "Partition of Africa without African consent"
  },
  {
    question: "The main commodity traded by Europeans along the Swahili coast was:",
    options: ["Ivory", "gold", "and slaves", "Cocoa", "Palm oil", "Rice"],
    answer: "Ivory, gold, and slaves"
  },
  {
    question: "Which African state signed treaties with Europeans voluntarily to gain protection?",
    options: ["Ashanti", "Mali", "Songhai", "Benin"],
    answer: "Ashanti"
  },
  {
    question: "The concept of 'Scramble for Africa' refers to:",
    options: ["Rapid colonization by European powers in the late 19th century", "Trade of gold and salt", "Spread of Islam", "African migrations"],
    answer: "Rapid colonization by European powers in the late 19th century"
  },
  {
    question: "Colonial cash crops included all except:",
    options: ["Rice", "cocoa", "cotton", "tea", "Gold", "Cocoa", "Coffee"],
    answer: "Gold"
  },
  {
    question: "European colonization led to:",
    options: ["Disruption of African political systems", "Strengthening African empires", "Isolation of African societies", "Complete industrialization"],
    answer: "Disruption of African political systems"
  },
  {
    question: "Which African resistance leader fought against the British in southern Africa?",
    options: ["Shaka Zulu", "Samori Ture", "Kwame Nkrumah", "Mansa Musa"],
    answer: "Shaka Zulu"
  },
  {
    question: "The main source of labor for European plantations in the Americas was:",
    options: ["Enslaved Africans", "Voluntary African workers", "European indentured labor", "Asian workers"],
    answer: "Enslaved Africans"
  },
  {
    question: "The triangular trade connected:",
    options: ["Europe", "Africa", "and the Americas", "Africa and Asia only", "Europe and Asia only", "Africa and Europe only"],
    answer: "Europe, Africa, and the Americas"
  },
  {
    question: "The end of colonial rule in Africa began mainly after:",
    options: ["World War II", "World War I", "The French Revolution", "The Berlin Conference"],
    answer: "World War II"
  },
  {
    question: "Which African country was the first to gain independence in the 20th century?",
    options: ["Ghana", "Nigeria", "Kenya", "South Africa"],
    answer: "Ghana"
  },
  {
    question: "Colonial borders often ignored:",
    options: ["Ethnic and cultural boundaries", "Rivers", "Mountains", "Climate zones"],
    answer: "Ethnic and cultural boundaries"
  },
  {
    question: "Which African nationalist movement used non-violent protest against colonialism?",
    options: ["Kwame Nkrumah's CPP", "Shaka Zulu", "Asante rebellion", "Songhai Empire"],
    answer: "Kwame Nkrumah's CPP"
  },
  {
    question: "Missionaries contributed to colonial rule by:",
    options: ["Educating and converting Africans to Christianity", "Arming local armies", "Running gold mines", "Leading rebellions"],
    answer: "Educating and converting Africans to Christianity"
  },
  {
    question: "The main motivation for European colonization was:",
    options: ["Economic exploitation and political power", "African independence", "Spread of African culture", "Global peace"],
    answer: "Economic exploitation and political power"
  },
  {
    question: "The 19th-century slave trade declined mainly due to:",
    options: ["Abolition movements in Europe", "European demand for slaves", "African wars", "Discovery of gold in West Africa"],
    answer: "Abolition movements in Europe"
  },
  {
    question: "Which African kingdom was known for trade with the Portuguese along the Kongo River?",
    options: ["Kongo", "Mali", "Ashanti", "Songhai"],
    answer: "Kongo"
  },
  {
    question: "Colonial taxation in Africa often led to:",
    options: ["Resistance and revolts", "Increased African wealth", "Industrial growth", "Complete compliance"],
    answer: "Resistance and revolts"
  },
  {
    question: "The introduction of railways and roads by colonial powers primarily aimed at:",
    options: ["Extracting and exporting resources", "Tourism", "African industrialization", "Education"],
    answer: "Extracting and exporting resources"
  },
  {
    question: "European explorers in Africa mainly sought:",
    options: ["Trade routes", "wealth", "and scientific knowledge", "To settle permanently", "To end slavery", "To fight wars"],
    answer: "Trade routes, wealth, and scientific knowledge"
  },
  {
    question: "The Ashanti-British wars lasted mainly because of:",
    options: ["Resistance to British colonial expansion", "European trade disagreements", "Missionary work", "Religious conversion"],
    answer: "Resistance to British colonial expansion"
  },
  {
    question: "African resistance to colonization was strongest in:",
    options: ["Ethiopia and Asante", "Mali and Songhai", "Swahili city-states", "Benin only"],
    answer: "Ethiopia and Asante"
  },
  {
    question: "The main role of African intermediaries in the slave trade was:",
    options: ["Capturing and selling slaves to Europeans", "Leading colonial armies", "Spreading Christianity", "Building railways"],
    answer: "Capturing and selling slaves to Europeans"
  },
  {
    question: "Colonial rule in Africa often changed traditional authority by:",
    options: ["Undermining or co-opting chiefs", "Strengthening African kings", "Eliminating taxes", "Promoting democracy"],
    answer: "Undermining or co-opting chiefs"
  },
  {
    question: "European powers justified colonization using the idea of:",
    options: ["Civilizing mission (White Manâ€™s Burden)", "African independence", "Global peace", "Free trade for Africans"],
    answer: "Civilizing mission (White Manâ€™s Burden)"
  },
  {
    question: "Which year did Ghana gain independence from British colonial rule?",
    options: ["1957", "1960", "1947", "1963"],
    answer: "1957"
  },
  {
    question: "Who became the first Prime Minister of independent Ghana?",
    options: ["Kwame Nkrumah", "J. B. Danquah", "Edward Akufo-Addo", "Kofi Busia"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The Convention Peopleâ€™s Party (CPP) was founded by:",
    options: ["Kwame Nkrumah", "J. B. Danquah", "Edward Akufo-Addo", "Kofi Busia"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The purpose of the Positive Action campaign in Ghana was to:",
    options: ["Demand self-government through non-violent protests", "Promote cocoa farming", "Encourage European settlement", "Build schools"],
    answer: "Demand self-government through non-violent protests"
  },
  {
    question: "Which African country was the second to gain independence after Ghana?",
    options: ["Guinea", "Nigeria", "Kenya", "Senegal"],
    answer: "Guinea"
  },
  {
    question: "Pan-Africanism promoted:",
    options: ["Unity and cooperation among African countries", "Colonial domination", "European trade monopolies", "Isolation of African states"],
    answer: "Unity and cooperation among African countries"
  },
  {
    question: "The Organization of African Unity (OAU) was formed in:",
    options: ["1963", "1957", "1975", "1960"],
    answer: "1963"
  },
  {
    question: "One of the main objectives of the OAU was to:",
    options: ["Promote African unity and eradicate colonialism", "Divide African nations", "Support European powers", "Encourage African isolation"],
    answer: "Promote African unity and eradicate colonialism"
  },
  {
    question: "The main political challenge after independence in Africa was:",
    options: ["Nation-building and integration of diverse ethnic groups", "Starting slavery", "Invading Europe", "Eliminating cocoa farming"],
    answer: "Nation-building and integration of diverse ethnic groups"
  },
  {
    question: "Which method did most African countries use to gain independence?",
    options: ["Negotiation and political struggle", "Military conquest of Europe", "Trade agreements only", "Colonial taxation"],
    answer: "Negotiation and political struggle"
  },
  {
    question: "The French policy of assimilation meant:",
    options: ["Colonies were made culturally French", "Colonies were independent", "Colonies were ignored", "Colonies traded only with Britain"],
    answer: "Colonies were made culturally French"
  },
  {
    question: "Which country was the last to gain independence in Africa?",
    options: ["Zimbabwe", "Ghana", "Algeria", "Kenya"],
    answer: "Zimbabwe"
  },
  {
    question: "Kwame Nkrumah introduced which economic policy in Ghana?",
    options: ["Industrialization through state planning", "Free market laissez-faire", "Feudalism", "Colonial taxation"],
    answer: "Industrialization through state planning"
  },
  {
    question: "The term 'neo-colonialism' refers to:",
    options: ["Indirect control of independent states by foreign powers", "Complete independence without foreign influence", "Slave trade continuation", "European settlement in Africa"],
    answer: "Indirect control of independent states by foreign powers"
  },
  {
    question: "The First Republic of Ghana was declared in:",
    options: ["1960", "1957", "1966", "1970"],
    answer: "1960"
  },
  {
    question: "The overthrow of Kwame Nkrumahâ€™s government occurred in:",
    options: ["1966", "1957", "1972", "1960"],
    answer: "1966"
  },
  {
    question: "The main reason for political instability in post-independence Africa was:",
    options: ["Ethnic rivalries and weak institutions", "Abundance of resources", "European protection", "Pan-Africanism"],
    answer: "Ethnic rivalries and weak institutions"
  },
  {
    question: "The term 'one-party state' in Africa referred to:",
    options: ["A political system dominated by a single party", "A federation of multiple parties", "Colonial administration", "Military government only"],
    answer: "A political system dominated by a single party"
  },
  {
    question: "Julius Nyerere introduced which policy in Tanzania?",
    options: ["Ujamaa (African socialism)", "Neo-colonialism", "Capitalism", "Feudalism"],
    answer: "Ujamaa (African socialism)"
  },
  {
    question: "The African National Congress (ANC) is associated with:",
    options: ["Struggle against apartheid in South Africa", "Independence of Ghana", "Economic planning in Nigeria", "French colonial policies"],
    answer: "Struggle against apartheid in South Africa"
  },
  {
    question: "The Mau Mau uprising was a resistance movement in:",
    options: ["Kenya", "Ghana", "Nigeria", "Algeria"],
    answer: "Kenya"
  },
  {
    question: "The main goal of the Pan-African Congresses was to:",
    options: ["End colonialism and promote African unity", "Promote European trade", "Support apartheid", "Colonial taxation"],
    answer: "End colonialism and promote African unity"
  },
  {
    question: "Which countryâ€™s independence inspired other African nations to fight for freedom?",
    options: ["Ghana", "Egypt", "South Africa", "Algeria"],
    answer: "Ghana"
  },
  {
    question: "The Kwame Nkrumah Ideological Institute focused on:",
    options: ["Political education and socialism", "Cocoa farming", "Colonial administration", "European history"],
    answer: "Political education and socialism"
  },
  {
    question: "The policy of apartheid was implemented in:",
    options: ["South Africa", "Ghana", "Kenya", "Nigeria"],
    answer: "South Africa"
  },
  {
    question: "The Pan-African movement was started by:",
    options: ["Africans and people of African descent in the diaspora", "European settlers", "Colonial governments", "United Nations"],
    answer: "Africans and people of African descent in the diaspora"
  },
  {
    question: "The Casablanca Conference (1961) was focused on:",
    options: ["African unity and anti-colonialism", "European trade", "Colonial taxation", "African industrialization only"],
    answer: "African unity and anti-colonialism"
  },
  {
    question: "The purpose of the Non-Aligned Movement for African countries was:",
    options: ["Maintain independence from both US and Soviet influence", "Align with Europe only", "Promote colonialism", "Encourage slavery"],
    answer: "Maintain independence from both US and Soviet influence"
  },
  {
    question: "Which African country had a federal system after independence?",
    options: ["Nigeria", "Ghana", "Kenya", "Tanzania"],
    answer: "Nigeria"
  },
  {
    question: "The main economic challenge after independence in Africa was:",
    options: ["Dependence on primary commodities", "Over-industrialization", "Abundant capital", "Complete self-sufficiency"],
    answer: "Dependence on primary commodities"
  },
  {
    question: "Who was the first President of Nigeria after independence?",
    options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Kwame Nkrumah", "Julius Nyerere"],
    answer: "Nnamdi Azikiwe"
  },
  {
    question: "Which African leader is known for 'African socialism'?",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Patrice Lumumba", "Jomo Kenyatta"],
    answer: "Julius Nyerere"
  },
  {
    question: "The Mau Mau movement fought mainly against:",
    options: ["British colonial rule in Kenya", "French colonization", "Apartheid in South Africa", "Portuguese colonies"],
    answer: "British colonial rule in Kenya"
  },
  {
    question: "The main aim of independence movements in Africa was:",
    options: ["Political freedom and self-determination", "Promote European rule", "Increase slave trade", "Support colonial taxation"],
    answer: "Political freedom and self-determination"
  },
  {
    question: "The Pan-African Congress of 1945 was held in:",
    options: ["Manchester", "UK", "Accra", "Ghana", "Dakar", "Senegal", "Lagos", "Nigeria"],
    answer: "Manchester, UK"
  },
  {
    question: "Which countryâ€™s independence marked the beginning of the wave of African independence?",
    options: ["Ghana", "Algeria", "Kenya", "Nigeria"],
    answer: "Ghana"
  },
  {
    question: "The first all-African government after independence was in:",
    options: ["Ghana", "South Africa", "Kenya", "Nigeria"],
    answer: "Ghana"
  },
  {
    question: "The independence of Algeria came after:",
    options: ["A long war with France", "Negotiation without conflict", "European support", "Economic sanctions only"],
    answer: "A long war with France"
  },
  {
    question: "The term 'neo-colonialism' was popularized by:",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nnamdi Azikiwe", "Patrice Lumumba"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The first African country to become a republic in the 20th century was:",
    options: ["Ghana", "Nigeria", "Kenya", "Tanzania"],
    answer: "Ghana"
  },
  {
    question: "Which African leader was assassinated shortly after independence?",
    options: ["Patrice Lumumba", "Kwame Nkrumah", "Julius Nyerere", "Jomo Kenyatta"],
    answer: "Patrice Lumumba"
  },
  {
    question: "The Organization of African Unity later became:",
    options: ["African Union", "Commonwealth of Nations", "United Nations", "Non-Aligned Movement"],
    answer: "African Union"
  },
  {
    question: "Post-independence Africa faced political instability due to:",
    options: ["Military coups and ethnic rivalries", "European support", "Abundant resources", "Unity only"],
    answer: "Military coups and ethnic rivalries"
  },
  {
    question: "The first Prime Minister of Kenya after independence was:",
    options: ["Jomo Kenyatta", "Kwame Nkrumah", "Patrice Lumumba", "Julius Nyerere"],
    answer: "Jomo Kenyatta"
  },
  {
    question: "African nationalism aimed to:",
    options: ["End colonialism and promote self-rule", "Support European powers", "Divide Africa", "Promote slavery"],
    answer: "End colonialism and promote self-rule"
  },
  {
    question: "The Pan-African movement influenced:",
    options: ["Independence struggles across Africa", "European expansion", "Colonial taxation", "Slave trade"],
    answer: "Independence struggles across Africa"
  },
  {
    question: "Which African country experienced a bloody liberation war against Portuguese rule?",
    options: ["Mozambique", "Ghana", "Nigeria", "Tanzania"],
    answer: "Mozambique"
  },
  {
    question: "The independence of African countries encouraged:",
    options: ["Other colonies to demand freedom", "Further colonization", "European settlement", "Neo-colonialism only"],
    answer: "Other colonies to demand freedom"
  },
  {
    question: "Kwame Nkrumahâ€™s slogan for African unity was:",
    options: ["â€˜Africa Must Uniteâ€™", "â€˜Colonies Foreverâ€™", "â€˜European Africaâ€™", "â€˜Neo-Colonial Africaâ€™"],
    answer: "â€˜Africa Must Uniteâ€™"
  },
  {
    question: "Post-independence African leaders faced challenges in:",
    options: ["Economic development", "nation-building", "and political stability", "Colonial taxation only", "European wars", "Slave trade management"],
    answer: "Economic development, nation-building, and political stability"
  },
  {
    question: "The first African country to adopt socialism as a state policy was:",
    options: ["Ghana", "Tanzania", "Kenya", "Nigeria"],
    answer: "Ghana"
  },
  {
    question: "Which African country fought a long war for independence against France?",
    options: ["Algeria", "Ghana", "Kenya", "Nigeria"],
    answer: "Algeria"
  },
  {
    question: "The main impact of African independence movements was:",
    options: ["Political freedom and self-determination", "European expansion", "Slave trade continuation", "Colonial taxation only"],
    answer: "Political freedom and self-determination"
  },
  {
    question: "Julius Nyerereâ€™s Ujamaa villages were aimed at:",
    options: ["Promoting communal farming and socialism", "European trade", "Colonial taxation", "Independence movements"],
    answer: "Promoting communal farming and socialism"
  },
  {
    question: "The independence of Zimbabwe was achieved in:",
    options: ["1980", "1970", "1965", "1990"],
    answer: "1980"
  },
  {
    question: "The struggle against apartheid ended with:",
    options: ["Democratic elections in 1994", "European intervention", "Colonial expansion", "Military defeat of Africa"],
    answer: "Democratic elections in 1994"
  },
  {
    question: "The first female head of state in Africa was:",
    options: ["Ellen Johnson Sirleaf", "Kwame Nkrumah", "Julius Nyerere", "Patrice Lumumba"],
    answer: "Ellen Johnson Sirleaf"
  },
  {
    question: "Which river is the longest in Africa?",
    options: ["Nile", "Congo", "Niger", "Zambezi"],
    answer: "Nile"
  },
  {
    question: "The Sahara Desert is located in which part of Africa?",
    options: ["North Africa", "West Africa", "East Africa", "Southern Africa"],
    answer: "North Africa"
  },
  {
    question: "Mount Kilimanjaro is located in which country?",
    options: ["Tanzania", "Kenya", "Uganda", "Ethiopia"],
    answer: "Tanzania"
  },
  {
    question: "Which of the following is a major lake in Africa?",
    options: ["Lake Victoria", "Lake Michigan", "Lake Superior", "Lake Baikal"],
    answer: "Lake Victoria"
  },
  {
    question: "The Great Rift Valley is found mainly in:",
    options: ["East Africa", "West Africa", "North Africa", "Southern Africa"],
    answer: "East Africa"
  },
  {
    question: "Which African country has the largest population?",
    options: ["Nigeria", "Ethiopia", "Egypt", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "Africa is divided into how many regions for geographical purposes?",
    options: ["5", "4", "6", "3"],
    answer: "5"
  },
  {
    question: "Which country is known as the 'Rainbow Nation'?",
    options: ["South Africa", "Ghana", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "The main natural vegetation in the Sahel is:",
    options: ["Savannah grassland", "Rainforest", "Desert", "Mediterranean scrub"],
    answer: "Savannah grassland"
  },
  {
    question: "Which of the following is a cultural festival in West Africa?",
    options: ["Durbar", "Carnival in Brazil", "Oktoberfest", "Diwali"],
    answer: "Durbar"
  },
  {
    question: "The primary occupation of people in the African savannah is:",
    options: ["Farming and livestock rearing", "Fishing", "Mining", "Industrial work"],
    answer: "Farming and livestock rearing"
  },
  {
    question: "The main economic activity of countries along the Nile is:",
    options: ["Agriculture", "Mining", "Tourism", "Fishing"],
    answer: "Agriculture"
  },
  {
    question: "Which language is widely spoken in North Africa?",
    options: ["Arabic", "Swahili", "English", "French"],
    answer: "Arabic"
  },
  {
    question: "Traditional African music often uses:",
    options: ["Drums and percussion", "Piano and violin", "Electric guitars only", "Synthesizers only"],
    answer: "Drums and percussion"
  },
  {
    question: "The Sahara Desert is known for its:",
    options: ["Extreme temperatures and sand dunes", "Rainfall and forests", "Snowfall", "Volcanic activity"],
    answer: "Extreme temperatures and sand dunes"
  },
  {
    question: "The dominant religion in North Africa is:",
    options: ["Islam", "Christianity", "Hinduism", "Buddhism"],
    answer: "Islam"
  },
  {
    question: "Which of these African countries is landlocked?",
    options: ["Mali", "Ghana", "Senegal", "Egypt"],
    answer: "Mali"
  },
  {
    question: "The African Union (AU) headquarters is located in:",
    options: ["Addis Ababa", "Ethiopia", "Abuja", "Nigeria", "Nairobi", "Kenya", "Accra", "Ghana"],
    answer: "Addis Ababa, Ethiopia"
  },
  {
    question: "Which African river flows into the Atlantic Ocean?",
    options: ["Niger", "Tigris", "Yangtze", "Volga"],
    answer: "Niger"
  },
  {
    question: "The main environmental problem in the Sahel is:",
    options: ["Desertification", "Flooding", "Earthquakes", "Volcanoes"],
    answer: "Desertification"
  },
  {
    question: "The Horn of Africa includes the following countries except:",
    options: ["Ghana", "Ethiopia", "Somalia", "Djibouti"],
    answer: "Ghana"
  },
  {
    question: "The Kente cloth is traditionally associated with which African ethnic group?",
    options: ["Akan", "Zulu", "Masai", "Hausa"],
    answer: "Akan"
  },
  {
    question: "Which African country is famous for its pyramids besides Egypt?",
    options: ["Sudan", "Nigeria", "Kenya", "Ethiopia"],
    answer: "Sudan"
  },
  {
    question: "The main economic activity in coastal West Africa is:",
    options: ["Fishing", "Mining", "Tourism", "Manufacturing"],
    answer: "Fishing"
  },
  {
    question: "The Serengeti National Park is located in:",
    options: ["Tanzania", "Kenya", "South Africa", "Botswana"],
    answer: "Tanzania"
  },
  {
    question: "The major ethnic group in Kenya is:",
    options: ["Kikuyu", "Yoruba", "Zulu", "Akan"],
    answer: "Kikuyu"
  },
  {
    question: "Africa is rich in natural resources such as:",
    options: ["Gold", "diamonds", "and oil", "Coal only", "Timber only", "Rice only"],
    answer: "Gold, diamonds, and oil"
  },
  {
    question: "Which African lake is the largest by area?",
    options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
    answer: "Lake Victoria"
  },
  {
    question: "The African continent is divided into how many climatic zones?",
    options: ["5", "3", "4", "6"],
    answer: "5"
  },
  {
    question: "The Niger Delta is important because of:",
    options: ["Oil production", "Cocoa farming", "Tourism", "Fishing only"],
    answer: "Oil production"
  },
  {
    question: "The major desert in southern Africa is:",
    options: ["Kalahari", "Sahara", "Namib", "Gobi"],
    answer: "Kalahari"
  },
  {
    question: "The African traditional religion often involves:",
    options: ["Ancestor worship and rituals", "Only Islam", "Only Christianity", "Buddhism"],
    answer: "Ancestor worship and rituals"
  },
  {
    question: "The Sahel region lies between:",
    options: ["The Sahara and Sudanian Savannah", "Rainforest and Sahara", "Savannah and rainforest", "Desert and ocean"],
    answer: "The Sahara and Sudanian Savannah"
  },
  {
    question: "Which African country is famous for Timbuktu, an ancient center of learning?",
    options: ["Mali", "Ghana", "Senegal", "Nigeria"],
    answer: "Mali"
  },
  {
    question: "The Niger River flows into:",
    options: ["Gulf of Guinea", "Mediterranean Sea", "Indian Ocean", "Red Sea"],
    answer: "Gulf of Guinea"
  },
  {
    question: "Which African country has French as its official language?",
    options: ["Senegal", "Ghana", "Kenya", "Nigeria"],
    answer: "Senegal"
  },
  {
    question: "The Maasai are primarily found in:",
    options: ["Kenya and Tanzania", "Ghana and Nigeria", "South Africa only", "Ethiopia only"],
    answer: "Kenya and Tanzania"
  },
  {
    question: "Which African country is the largest by land area?",
    options: ["Algeria", "Sudan", "DR Congo", "Libya"],
    answer: "Algeria"
  },
  {
    question: "The African Great Lakes are mainly found in:",
    options: ["East Africa", "West Africa", "North Africa", "Southern Africa"],
    answer: "East Africa"
  },
  {
    question: "The Sahara Desert is expanding due to:",
    options: ["Desertification and climate change", "Flooding", "Volcanic activity", "Urbanization"],
    answer: "Desertification and climate change"
  },
  {
    question: "The most widely spoken African language is:",
    options: ["Swahili", "Arabic", "English", "French"],
    answer: "Swahili"
  },
  {
    question: "The primary source of water for Egypt is:",
    options: ["The Nile River", "Lake Victoria", "Lake Chad", "Congo River"],
    answer: "The Nile River"
  },
  {
    question: "Which African country is known for Victoria Falls?",
    options: ["Zambia/Zimbabwe", "South Africa", "Kenya", "Ghana"],
    answer: "Zambia/Zimbabwe"
  },
  {
    question: "The African savannah supports which type of wildlife?",
    options: ["Lions", "elephants", "and giraffes", "Penguins and polar bears", "Kangaroos and koalas", "Tigers and pandas"],
    answer: "Lions, elephants, and giraffes"
  },
  {
    question: "The major mountain range in Morocco is:",
    options: ["Atlas Mountains", "Drakensberg", "Ruwenzori", "Kilimanjaro"],
    answer: "Atlas Mountains"
  },
  {
    question: "Africa faces which major environmental challenges?",
    options: ["Deforestation", "desertification", "and pollution", "Glacial melting only", "Tsunamis only", "Earthquakes only"],
    answer: "Deforestation, desertification, and pollution"
  },
  {
    question: "Which African country is part of the Nile Basin?",
    options: ["Egypt", "Nigeria", "South Africa", "Senegal"],
    answer: "Egypt"
  },
  {
    question: "Which country is known as the 'Gateway to East Africa'?",
    options: ["Kenya", "Ghana", "Nigeria", "Morocco"],
    answer: "Kenya"
  },
  {
    question: "Which African country is famous for its rock-hewn churches in Lalibela?",
    options: ["Ethiopia", "Nigeria", "Ghana", "Kenya"],
    answer: "Ethiopia"
  },
  {
    question: "The Kalahari Desert is mainly in:",
    options: ["Botswana", "Namibia", "and South Africa", "Egypt and Libya", "Kenya and Tanzania", "Ghana and Mali"],
    answer: "Botswana, Namibia, and South Africa"
  },
  {
    question: "The Congo Basin is known for:",
    options: ["Dense rainforest and biodiversity", "Deserts", "Savannah only", "Tundra"],
    answer: "Dense rainforest and biodiversity"
  },
  {
    question: "Africa is sometimes called the 'Cradle of Humankind' because:",
    options: ["Fossil evidence of early humans was found there", "It is the largest continent", "It has many deserts", "It is richest in oil"],
    answer: "Fossil evidence of early humans was found there"
  },
  {
    question: "Which African country is famous for its Masai Mara National Reserve?",
    options: ["Kenya", "Ghana", "Nigeria", "South Africa"],
    answer: "Kenya"
  },
  {
    question: "The dominant religion in Ethiopia is:",
    options: ["Christianity", "Islam", "Hinduism", "Buddhism"],
    answer: "Christianity"
  },
  {
    question: "The main environmental concern in the Congo rainforest is:",
    options: ["Deforestation", "Desertification", "Flooding", "Earthquakes"],
    answer: "Deforestation"
  },
  {
    question: "Which African country has the most ethnic diversity?",
    options: ["Nigeria", "Ghana", "Kenya", "Egypt"],
    answer: "Nigeria"
  },
  {
    question: "Which African country is known for the Okavango Delta?",
    options: ["Botswana", "Kenya", "Nigeria", "Ghana"],
    answer: "Botswana"
  },
  {
    question: "The African Union aims to:",
    options: ["Promote unity", "peace", "and development", "Colonize Africa", "Promote only one language", "Divide African countries"],
    answer: "Promote unity, peace, and development"
  },
  {
    question: "The Sahara Desert is primarily composed of:",
    options: ["Sand dunes", "gravel plains", "and rocks", "Grasslands only", "Rainforest", "Mountains only"],
    answer: "Sand dunes, gravel plains, and rocks"
  },
  {
    question: "Which of the following was a major trade item in pre-colonial West Africa?",
    options: ["Gold", "Oil", "Diamonds", "Coal"],
    answer: "Gold"
  },
  {
    question: "The trans-Saharan trade connected North Africa with:",
    options: ["West Africa", "East Africa", "Southern Africa", "Central Africa"],
    answer: "West Africa"
  },
  {
    question: "Which European country first established trade posts along the Gold Coast?",
    options: ["Portugal", "Britain", "France", "Netherlands"],
    answer: "Portugal"
  },
  {
    question: "The Berlin Conference of 1884-1885 led to:",
    options: ["The partition of Africa by European powers", "African independence", "A major African trade alliance", "The abolition of slavery"],
    answer: "The partition of Africa by European powers"
  },
  {
    question: "Which of these was a major crop introduced by colonial powers in Africa?",
    options: ["Cocoa", "Rice", "Millet", "Yam"],
    answer: "Cocoa"
  },
  {
    question: "The Ashanti kingdom was located in which present-day country?",
    options: ["Ghana", "Nigeria", "Togo", "Benin"],
    answer: "Ghana"
  },
  {
    question: "Colonial rule in Africa was mainly justified by Europeans as:",
    options: ["The 'civilizing mission'", "Promoting African culture", "Preserving African independence", "Expanding African trade unions"],
    answer: "The 'civilizing mission'"
  },
  {
    question: "Cash crop farming was promoted by colonial authorities primarily for:",
    options: ["Export to Europe", "Local consumption", "Industrial development in Africa", "Food for slaves"],
    answer: "Export to Europe"
  },
  {
    question: "The main economic activity in North Africa under colonial rule was:",
    options: ["Agriculture and trade", "Mining only", "Fishing only", "Tourism only"],
    answer: "Agriculture and trade"
  },
  {
    question: "Which African country was never formally colonized by a European power?",
    options: ["Ethiopia", "Nigeria", "Kenya", "Ghana"],
    answer: "Ethiopia"
  },
  {
    question: "Indirect rule was a system introduced by which colonial power in Africa?",
    options: ["Britain", "France", "Portugal", "Germany"],
    answer: "Britain"
  },
  {
    question: "Which system allowed colonial powers to govern through local chiefs?",
    options: ["Indirect rule", "Direct rule", "Assimilation", "Apartheid"],
    answer: "Indirect rule"
  },
  {
    question: "Which European country controlled Algeria?",
    options: ["France", "Britain", "Portugal", "Germany"],
    answer: "France"
  },
  {
    question: "Which African leader is associated with the independence of Ghana?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The main purpose of the African National Congress (ANC) was to:",
    options: ["Fight apartheid and promote independence", "Establish colonial rule", "Promote European trade", "Support indirect rule"],
    answer: "Fight apartheid and promote independence"
  },
  {
    question: "Which African country was the first to gain independence from colonial rule?",
    options: ["Ghana", "Nigeria", "Kenya", "Algeria"],
    answer: "Ghana"
  },
  {
    question: "The term 'scramble for Africa' refers to:",
    options: ["The rapid colonization of Africa by European powers", "African countries uniting for trade", "African exploration of Europe", "Migration within Africa"],
    answer: "The rapid colonization of Africa by European powers"
  },
  {
    question: "Which African country was colonized by Belgium?",
    options: ["DR Congo", "Ghana", "Kenya", "Senegal"],
    answer: "DR Congo"
  },
  {
    question: "Apartheid in South Africa was a system of:",
    options: ["Racial segregation", "Democratic governance", "Free trade", "Pan-African unity"],
    answer: "Racial segregation"
  },
  {
    question: "The major mineral resource in South Africa is:",
    options: ["Gold and diamonds", "Oil", "Copper", "Coal only"],
    answer: "Gold and diamonds"
  },
  {
    question: "Which African country was colonized by Italy?",
    options: ["Eritrea", "Ghana", "Kenya", "Senegal"],
    answer: "Eritrea"
  },
  {
    question: "The British colony in East Africa that became independent in 1963 was:",
    options: ["Kenya", "Tanzania", "Uganda", "Somalia"],
    answer: "Kenya"
  },
  {
    question: "Which African country was a French colony?",
    options: ["Senegal", "Ghana", "Nigeria", "Kenya"],
    answer: "Senegal"
  },
  {
    question: "The main export commodity of West Africa under colonial rule was:",
    options: ["Cocoa", "Sugar", "Rice", "Wheat"],
    answer: "Cocoa"
  },
  {
    question: "Which African country gained independence under Julius Nyerere?",
    options: ["Tanzania", "Kenya", "Uganda", "Ghana"],
    answer: "Tanzania"
  },
  {
    question: "The main purpose of the Mau Mau uprising was to:",
    options: ["End British colonial rule in Kenya", "Promote French trade", "Support Belgian rule", "Colonize Tanzania"],
    answer: "End British colonial rule in Kenya"
  },
  {
    question: "Which of the following is an important African regional economic organization?",
    options: ["ECOWAS", "EU", "ASEAN", "OPEC"],
    answer: "ECOWAS"
  },
  {
    question: "The Organisation of African Unity (OAU) was later replaced by:",
    options: ["African Union (AU)", "ECOWAS", "UN", "Commonwealth"],
    answer: "African Union (AU)"
  },
  {
    question: "Colonial railways in Africa were mainly built to:",
    options: ["Transport raw materials to ports", "Promote local tourism", "Connect villages for schools", "Provide passenger services only"],
    answer: "Transport raw materials to ports"
  },
  {
    question: "The Scramble for Africa was formalized at which conference?",
    options: ["Berlin Conference", "Paris Conference", "London Conference", "Madrid Conference"],
    answer: "Berlin Conference"
  },
  {
    question: "Which African country was colonized by Germany?",
    options: ["Namibia", "Ghana", "Nigeria", "Senegal"],
    answer: "Namibia"
  },
  {
    question: "The major agricultural export from colonial West Africa was:",
    options: ["Cocoa and peanuts", "Rice only", "Yam only", "Wheat only"],
    answer: "Cocoa and peanuts"
  },
  {
    question: "Which of these countries is a member of ECOWAS?",
    options: ["Ghana", "Kenya", "South Africa", "Egypt"],
    answer: "Ghana"
  },
  {
    question: "Pan-Africanism was influenced by the ideas of:",
    options: ["Kwame Nkrumah and W.E.B. Du Bois", "Hitler and Mussolini", "Napoleon only", "Churchill only"],
    answer: "Kwame Nkrumah and W.E.B. Du Bois"
  },
  {
    question: "The major challenge facing African economies after independence was:",
    options: ["Dependence on single export commodities", "High industrialization", "Surplus food", "Excess workforce"],
    answer: "Dependence on single export commodities"
  },
  {
    question: "The African continent is rich in which natural resources?",
    options: ["Gold", "diamonds", "oil", "and minerals", "Rice only", "Corn only", "Wheat only"],
    answer: "Gold, diamonds, oil, and minerals"
  },
  {
    question: "Which African country experienced the Apartheid system?",
    options: ["South Africa", "Ghana", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "The main objective of colonial education was:",
    options: ["Train Africans to serve the colonial administration", "Develop African universities fully", "Promote African science only", "Teach only indigenous knowledge"],
    answer: "Train Africans to serve the colonial administration"
  },
  {
    question: "Which African country gained independence peacefully in 1960?",
    options: ["Nigeria", "Kenya", "Algeria", "Ghana"],
    answer: "Nigeria"
  },
  {
    question: "The main currency used in French West African colonies was:",
    options: ["Franc", "Dollar", "Pound", "Shilling"],
    answer: "Franc"
  },
  {
    question: "The main port city in colonial Ghana was:",
    options: ["Takoradi", "Accra", "Kumasi", "Tamale"],
    answer: "Takoradi"
  },
  {
    question: "Which African country was formerly known as Upper Volta?",
    options: ["Burkina Faso", "Ghana", "Mali", "Benin"],
    answer: "Burkina Faso"
  },
  {
    question: "The discovery of oil in Africa mainly took place in:",
    options: ["Nigeria", "Kenya", "Tanzania", "Ethiopia"],
    answer: "Nigeria"
  },
  {
    question: "Which African leader promoted the vision of a United Africa?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The cash crop cocoa was introduced by colonial authorities in which country?",
    options: ["Ghana", "Kenya", "Tanzania", "Nigeria"],
    answer: "Ghana"
  },
  {
    question: "Which African country has the largest oil reserves?",
    options: ["Nigeria", "Ghana", "Kenya", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "The colonial borders in Africa often ignored:",
    options: ["Ethnic and cultural boundaries", "Rivers only", "Mountains only", "Trade routes only"],
    answer: "Ethnic and cultural boundaries"
  },
  {
    question: "Which African country was a Portuguese colony?",
    options: ["Mozambique", "Ghana", "Nigeria", "Kenya"],
    answer: "Mozambique"
  },
  {
    question: "Which African country is famous for diamond mining?",
    options: ["Botswana", "Ghana", "Kenya", "Nigeria"],
    answer: "Botswana"
  },
  {
    question: "The main objective of African independence movements was:",
    options: ["End colonial rule", "Promote colonial trade", "Increase European influence", "Expand slavery"],
    answer: "End colonial rule"
  },
  {
    question: "Which African country was known as Gold Coast under colonial rule?",
    options: ["Ghana", "Nigeria", "Kenya", "Togo"],
    answer: "Ghana"
  },
  {
    question: "Which African leader is known for leading the independence struggle in Algeria?",
    options: ["Ahmed Ben Bella", "Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela"],
    answer: "Ahmed Ben Bella"
  },
  {
    question: "Who was the first President of independent Ghana?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Patrice Lumumba"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The Mau Mau uprising took place in which country?",
    options: ["Kenya", "Ghana", "Nigeria", "Tanzania"],
    answer: "Kenya"
  },
  {
    question: "Which African leader introduced the policy of Ujamaa in Tanzania?",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "Julius Nyerere"
  },
  {
    question: "The Apartheid system was officially ended in South Africa in which year?",
    options: ["1994", "1980", "1975", "2000"],
    answer: "1994"
  },
  {
    question: "Which African country was the first to gain independence from colonial rule in 1957?",
    options: ["Ghana", "Nigeria", "Kenya", "Algeria"],
    answer: "Ghana"
  },
  {
    question: "Nelson Mandela was imprisoned for how many years?",
    options: ["27", "20", "15", "30"],
    answer: "27"
  },
  {
    question: "The Rwandan genocide occurred in which year?",
    options: ["1994", "1989", "2000", "1990"],
    answer: "1994"
  },
  {
    question: "The main purpose of the African Union (AU) is to:",
    options: ["Promote unity and development among African states", "Colonize new territories", "Promote European trade", "Divide African states"],
    answer: "Promote unity and development among African states"
  },
  {
    question: "Which African country was led by Patrice Lumumba at independence?",
    options: ["DR Congo", "Ghana", "Kenya", "Tanzania"],
    answer: "DR Congo"
  },
  {
    question: "The Biafra War took place in which country?",
    options: ["Nigeria", "Ghana", "Kenya", "Togo"],
    answer: "Nigeria"
  },
  {
    question: "Which African leader is famous for anti-apartheid activism?",
    options: ["Nelson Mandela", "Kwame Nkrumah", "Julius Nyerere", "Haile Selassie"],
    answer: "Nelson Mandela"
  },
  {
    question: "The policy of Apartheid in South Africa was introduced by which political party?",
    options: ["National Party", "African National Congress", "Pan African Congress", "Democratic Party"],
    answer: "National Party"
  },
  {
    question: "Which African country experienced a civil war between 1991 and 2002?",
    options: ["Sierra Leone", "Ghana", "Kenya", "Nigeria"],
    answer: "Sierra Leone"
  },
  {
    question: "The independence of Zimbabwe was achieved in which year?",
    options: ["1980", "1975", "1990", "1985"],
    answer: "1980"
  },
  {
    question: "Which African leader ruled Ethiopia during the 20th century before being deposed in 1974?",
    options: ["Haile Selassie", "Kwame Nkrumah", "Julius Nyerere", "Mobutu Sese Seko"],
    answer: "Haile Selassie"
  },
  {
    question: "Which African country was colonized by Belgium until 1960?",
    options: ["DR Congo", "Ghana", "Nigeria", "Kenya"],
    answer: "DR Congo"
  },
  {
    question: "The Eritrean War of Independence was fought against which country?",
    options: ["Ethiopia", "Sudan", "Libya", "Somalia"],
    answer: "Ethiopia"
  },
  {
    question: "Which leader was instrumental in the Pan-African Congress of 1900?",
    options: ["W.E.B. Du Bois", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "W.E.B. Du Bois"
  },
  {
    question: "Which African country was formerly known as Rhodesia?",
    options: ["Zimbabwe", "Zambia", "Botswana", "Malawi"],
    answer: "Zimbabwe"
  },
  {
    question: "The African National Congress (ANC) was founded in which year?",
    options: ["1912", "1950", "1960", "1890"],
    answer: "1912"
  },
  {
    question: "The Congo Crisis occurred after independence in which year?",
    options: ["1960", "1957", "1970", "1965"],
    answer: "1960"
  },
  {
    question: "Which African leader is known for promoting non-alignment during the Cold War?",
    options: ["Kwame Nkrumah", "Nelson Mandela", "Haile Selassie", "Julius Nyerere"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The Ethiopian victory at the Battle of Adwa in 1896 was against which European power?",
    options: ["Italy", "France", "Britain", "Portugal"],
    answer: "Italy"
  },
  {
    question: "Which African country was led by Mobutu Sese Seko?",
    options: ["DR Congo", "Ghana", "Kenya", "Nigeria"],
    answer: "DR Congo"
  },
  {
    question: "Which African country experienced the longest civil war in modern African history?",
    options: ["Sudan", "Ghana", "Kenya", "Nigeria"],
    answer: "Sudan"
  },
  {
    question: "The Mau Mau rebellion was primarily against:",
    options: ["British colonial rule", "French colonial rule", "Belgian colonial rule", "Italian colonial rule"],
    answer: "British colonial rule"
  },
  {
    question: "The first Prime Minister of independent Kenya was:",
    options: ["Jomo Kenyatta", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "Jomo Kenyatta"
  },
  {
    question: "The Soweto Uprising occurred in which country?",
    options: ["South Africa", "Ghana", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country was involved in the Ogaden War of 1977-1978?",
    options: ["Ethiopia", "Ghana", "Nigeria", "Kenya"],
    answer: "Ethiopia"
  },
  {
    question: "Which African leader is known as the 'Father of the Nation' in Tanzania?",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "Julius Nyerere"
  },
  {
    question: "Which African country was formerly called Upper Volta?",
    options: ["Burkina Faso", "Ghana", "Benin", "Togo"],
    answer: "Burkina Faso"
  },
  {
    question: "The Nigerian Civil War was also known as the:",
    options: ["Biafra War", "Mau Mau Rebellion", "Liberation War", "Ogaden War"],
    answer: "Biafra War"
  },
  {
    question: "Which African leader introduced the concept of 'African Socialism'?",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "Julius Nyerere"
  },
  {
    question: "Which African country was formerly called the Gold Coast?",
    options: ["Ghana", "Nigeria", "Kenya", "Togo"],
    answer: "Ghana"
  },
  {
    question: "The Organization of African Unity (OAU) was formed to:",
    options: ["Promote political and economic unity in Africa", "Increase European trade", "Divide African colonies", "Colonize new territories"],
    answer: "Promote political and economic unity in Africa"
  },
  {
    question: "Which African leader was overthrown in a coup in 1966 in Ghana?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "Which African country was colonized by Portugal until 1975?",
    options: ["Mozambique", "Ghana", "Kenya", "Nigeria"],
    answer: "Mozambique"
  },
  {
    question: "The apartheid system was legally enforced by which South African government policy?",
    options: ["Segregation laws", "Pan-African policy", "Ujamaa", "Indirect rule"],
    answer: "Segregation laws"
  },
  {
    question: "Which African country experienced the Rwandan Genocide in 1994?",
    options: ["Rwanda", "Burundi", "Kenya", "Tanzania"],
    answer: "Rwanda"
  },
  {
    question: "Which African leader was assassinated in 1961 in Congo?",
    options: ["Patrice Lumumba", "Kwame Nkrumah", "Julius Nyerere", "Haile Selassie"],
    answer: "Patrice Lumumba"
  },
  {
    question: "Which African leader was the first president of Tanzania?",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Nelson Mandela", "Haile Selassie"],
    answer: "Julius Nyerere"
  },
  {
    question: "Which African country achieved independence from France in 1960?",
    options: ["Senegal", "Ghana", "Nigeria", "Kenya"],
    answer: "Senegal"
  },
  {
    question: "Which African country was formerly known as Zaire?",
    options: ["DR Congo", "Ghana", "Nigeria", "Kenya"],
    answer: "DR Congo"
  },
  {
    question: "The end of colonial rule in Africa mainly occurred during which decade?",
    options: ["1960s", "1950s", "1970s", "1980s"],
    answer: "1960s"
  },
  {
    question: "Which African leader promoted the ideology of Negritude?",
    options: ["Leopold Senghor", "Kwame Nkrumah", "Julius Nyerere", "Haile Selassie"],
    answer: "Leopold Senghor"
  },
  {
    question: "Which African country was led by FÃ©lix HouphouÃ«t-Boigny?",
    options: ["CÃ´te dâ€™Ivoire", "Ghana", "Nigeria", "Kenya"],
    answer: "CÃ´te dâ€™Ivoire"
  },
  {
    question: "Which African countryâ€™s liberation struggle was led by Sam Nujoma?",
    options: ["Namibia", "Ghana", "Kenya", "Nigeria"],
    answer: "Namibia"
  },
  {
    question: "Which African leader declared the policy of 'Positive Neutralism'?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "Which African country was formerly known as Bechuanaland?",
    options: ["Botswana", "Ghana", "Nigeria", "Kenya"],
    answer: "Botswana"
  },
  {
    question: "Which African leader became the first black president of South Africa?",
    options: ["Nelson Mandela", "Kwame Nkrumah", "Julius Nyerere", "Haile Selassie"],
    answer: "Nelson Mandela"
  },
  {
    question: "Which African country experienced the Eritrean War of Independence?",
    options: ["Eritrea", "Ghana", "Kenya", "Nigeria"],
    answer: "Eritrea"
  },
  {
    question: "Which African leader is associated with Pan-Africanism and the Ghanaian independence movement?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "Which African countryâ€™s independence movement was led by AmÃ­lcar Cabral?",
    options: ["Guinea-Bissau", "Ghana", "Nigeria", "Kenya"],
    answer: "Guinea-Bissau"
  },
  {
    question: "Which is the largest desert in Africa?",
    options: ["Sahara", "Kalahari", "Namib", "Gobi"],
    answer: "Sahara"
  },
  {
    question: "The longest river in Africa is:",
    options: ["Nile", "Congo", "Niger", "Zambezi"],
    answer: "Nile"
  },
  {
    question: "Which African country has the highest population?",
    options: ["Nigeria", "Egypt", "Ethiopia", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "The Great Rift Valley passes through which of these countries?",
    options: ["Kenya", "Nigeria", "Ghana", "Morocco"],
    answer: "Kenya"
  },
  {
    question: "The main climate of the Sahel region is:",
    options: ["Semi-arid", "Tropical rainforest", "Savannah", "Mediterranean"],
    answer: "Semi-arid"
  },
  {
    question: "Lake Victoria is shared by which countries?",
    options: ["Uganda", "Kenya", "Tanzania", "Nigeria", "Ghana", "Togo", "Sudan", "Chad", "Egypt", "Kenya", "Ethiopia", "Somalia"],
    answer: "Uganda, Kenya, Tanzania"
  },
  {
    question: "The Niger River flows into which body of water?",
    options: ["Atlantic Ocean", "Indian Ocean", "Mediterranean Sea", "Red Sea"],
    answer: "Atlantic Ocean"
  },
  {
    question: "Which African country has the largest land area?",
    options: ["Algeria", "Sudan", "DR Congo", "Libya"],
    answer: "Algeria"
  },
  {
    question: "The vegetation type covering most of Central Africa is:",
    options: ["Tropical rainforest", "Savannah", "Desert", "Mediterranean scrub"],
    answer: "Tropical rainforest"
  },
  {
    question: "Which African lake is the second largest by surface area?",
    options: ["Lake Tanganyika", "Lake Victoria", "Lake Chad", "Lake Malawi"],
    answer: "Lake Victoria"
  },
  {
    question: "The African country known as the 'Horn of Africa' is:",
    options: ["Somalia", "Ethiopia", "Kenya", "Djibouti"],
    answer: "Somalia"
  },
  {
    question: "Which river is the main source of hydroelectric power in Egypt?",
    options: ["Nile", "Congo", "Niger", "Zambezi"],
    answer: "Nile"
  },
  {
    question: "The Kalahari Desert is mainly found in which country?",
    options: ["Botswana", "Egypt", "Sudan", "Morocco"],
    answer: "Botswana"
  },
  {
    question: "Which African country is completely landlocked?",
    options: ["Chad", "Ghana", "Nigeria", "Senegal"],
    answer: "Chad"
  },
  {
    question: "The Victoria Falls is located on which river?",
    options: ["Zambezi", "Nile", "Congo", "Niger"],
    answer: "Zambezi"
  },
  {
    question: "Which African region has the highest rainfall?",
    options: ["West African rainforest", "Sahara", "Sahel", "Kalahari"],
    answer: "West African rainforest"
  },
  {
    question: "Which country is known for having a tropical rainforest climate?",
    options: ["DR Congo", "Egypt", "Libya", "Algeria"],
    answer: "DR Congo"
  },
  {
    question: "The Serengeti Plains are mainly found in which country?",
    options: ["Tanzania", "Kenya", "Uganda", "Ethiopia"],
    answer: "Tanzania"
  },
  {
    question: "The Sahara Desert stretches across how many African countries approximately?",
    options: ["10", "5", "3", "15"],
    answer: "10"
  },
  {
    question: "Which African country is famous for the Nile River Delta?",
    options: ["Egypt", "Sudan", "Ethiopia", "Nigeria"],
    answer: "Egypt"
  },
  {
    question: "Lake Chad is mainly located in which country?",
    options: ["Chad", "Nigeria", "Cameroon", "Niger"],
    answer: "Chad"
  },
  {
    question: "The most populous city in Africa is:",
    options: ["Lagos", "Cairo", "Kinshasa", "Johannesburg"],
    answer: "Lagos"
  },
  {
    question: "The Cape of Good Hope is located in which country?",
    options: ["South Africa", "Namibia", "Mozambique", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country has both a desert and rainforest?",
    options: ["Nigeria", "Egypt", "Sudan", "Libya"],
    answer: "Nigeria"
  },
  {
    question: "Which African lake is the deepest?",
    options: ["Lake Tanganyika", "Lake Victoria", "Lake Chad", "Lake Malawi"],
    answer: "Lake Tanganyika"
  },
  {
    question: "Which African country is most affected by desertification?",
    options: ["Niger", "Gabon", "Uganda", "Seychelles"],
    answer: "Niger"
  },
  {
    question: "Which of these rivers flows through the Congo rainforest?",
    options: ["Congo River", "Nile", "Niger", "Zambezi"],
    answer: "Congo River"
  },
  {
    question: "Which African region is known for the Sahel belt?",
    options: ["Semi-arid zone south of Sahara", "Tropical rainforest", "Desert", "Mediterranean coast"],
    answer: "Semi-arid zone south of Sahara"
  },
  {
    question: "Which African country is famous for its volcanic mountains and lakes?",
    options: ["Rwanda", "Nigeria", "Ghana", "Libya"],
    answer: "Rwanda"
  },
  {
    question: "Which African country is known as the 'Pearl of Africa'?",
    options: ["Uganda", "Kenya", "Ghana", "Nigeria"],
    answer: "Uganda"
  },
  {
    question: "The population density of Africa is highest in which region?",
    options: ["West Africa", "Sahara", "Namibia", "Botswana"],
    answer: "West Africa"
  },
  {
    question: "Which African country is famous for the Okavango Delta?",
    options: ["Botswana", "South Africa", "Namibia", "Zambia"],
    answer: "Botswana"
  },
  {
    question: "Which African river is known as the 'River of Swamps'?",
    options: ["Congo River", "Nile", "Niger", "Zambezi"],
    answer: "Congo River"
  },
  {
    question: "The Atlas Mountains are located in which region?",
    options: ["Northwest Africa", "East Africa", "West Africa", "Central Africa"],
    answer: "Northwest Africa"
  },
  {
    question: "Which African country has the largest area of savannah?",
    options: ["Sudan", "DR Congo", "Ghana", "Kenya"],
    answer: "Sudan"
  },
  {
    question: "The island of Madagascar is located in which ocean?",
    options: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Indian Ocean"
  },
  {
    question: "Which African country is most affected by drought?",
    options: ["Somalia", "Gabon", "Seychelles", "Malawi"],
    answer: "Somalia"
  },
  {
    question: "Which African river flows through Egypt and Sudan?",
    options: ["Nile", "Congo", "Niger", "Zambezi"],
    answer: "Nile"
  },
  {
    question: "The Victoria Falls is also known locally as:",
    options: ["Mosi-oa-Tunya", "Niagara", "Tugela", "Kalambo"],
    answer: "Mosi-oa-Tunya"
  },
  {
    question: "Which African country has the largest area of tropical rainforest?",
    options: ["DR Congo", "Nigeria", "Kenya", "Ghana"],
    answer: "DR Congo"
  },
  {
    question: "The Sahara Desert covers parts of how many African countries?",
    options: ["10", "5", "3", "12"],
    answer: "10"
  },
  {
    question: "Which African country has the most varied climate zones?",
    options: ["South Africa", "Egypt", "Libya", "Niger"],
    answer: "South Africa"
  },
  {
    question: "Which African country is the main producer of cocoa?",
    options: ["CÃ´te dâ€™Ivoire", "Ghana", "Nigeria", "Cameroon"],
    answer: "CÃ´te dâ€™Ivoire"
  },
  {
    question: "Which African region is known for the Serengeti ecosystem?",
    options: ["East Africa", "West Africa", "North Africa", "Central Africa"],
    answer: "East Africa"
  },
  {
    question: "Which African lake is shared by Malawi, Mozambique, and Tanzania?",
    options: ["Lake Malawi", "Lake Victoria", "Lake Tanganyika", "Lake Chad"],
    answer: "Lake Malawi"
  },
  {
    question: "Which African country is famous for its coral reefs?",
    options: ["Seychelles", "Kenya", "Ghana", "Nigeria"],
    answer: "Seychelles"
  },
  {
    question: "Which African desert is considered the oldest?",
    options: ["Namib", "Sahara", "Kalahari", "Atacama"],
    answer: "Namib"
  },
  {
    question: "Which African river has the largest discharge volume?",
    options: ["Congo River", "Nile", "Niger", "Zambezi"],
    answer: "Congo River"
  },
  {
    question: "Which African country is called the 'Land of a Thousand Hills'?",
    options: ["Rwanda", "Uganda", "Kenya", "Ghana"],
    answer: "Rwanda"
  },
  {
    question: "Which African country has Lake Tanganyika?",
    options: ["Tanzania", "DR Congo", "Burundi", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which African country lies entirely in the tropics?",
    options: ["Democratic Republic of Congo", "Morocco", "Egypt", "South Africa"],
    answer: "Democratic Republic of Congo"
  },
  {
    question: "Which African country has the highest mountain peak?",
    options: ["Tanzania", "Kenya", "Uganda", "Ethiopia"],
    answer: "Tanzania"
  },
  {
    question: "Which African country is the largest producer of gold?",
    options: ["South Africa", "Ghana", "Nigeria", "Egypt"],
    answer: "South Africa"
  },
  {
    question: "Cocoa is mainly grown in which West African country?",
    options: ["Ghana", "Nigeria", "Mali", "Senegal"],
    answer: "Ghana"
  },
  {
    question: "Which African country is the leading exporter of oil?",
    options: ["Nigeria", "Algeria", "Angola", "Libya"],
    answer: "Nigeria"
  },
  {
    question: "Which of these is a major cash crop in Africa?",
    options: ["Coffee", "Maize", "Rice", "Cassava"],
    answer: "Coffee"
  },
  {
    question: "The main trading commodity in East Africa is:",
    options: ["Coffee", "Cocoa", "Oil", "Cotton"],
    answer: "Coffee"
  },
  {
    question: "Which country is the largest producer of platinum in Africa?",
    options: ["South Africa", "Zimbabwe", "Botswana", "Namibia"],
    answer: "South Africa"
  },
  {
    question: "Which African country is the leading exporter of cocoa beans?",
    options: ["CÃ´te dâ€™Ivoire", "Ghana", "Nigeria", "Cameroon"],
    answer: "CÃ´te dâ€™Ivoire"
  },
  {
    question: "Which African country is famous for textile production?",
    options: ["Nigeria", "Egypt", "South Africa", "Kenya"],
    answer: "Egypt"
  },
  {
    question: "The main source of foreign exchange for Nigeria is:",
    options: ["Oil", "Cocoa", "Gold", "Coffee"],
    answer: "Oil"
  },
  {
    question: "Which African country is famous for the fishing industry?",
    options: ["Morocco", "Kenya", "Ghana", "South Africa"],
    answer: "Morocco"
  },
  {
    question: "Which African region is known for livestock farming?",
    options: ["Sahel", "Sahara", "Rainforest", "Coastal plains"],
    answer: "Sahel"
  },
  {
    question: "Which of these is a major industrial hub in Africa?",
    options: ["Johannesburg", "Lagos", "Cairo", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which African country is famous for uranium production?",
    options: ["Niger", "South Africa", "Egypt", "Nigeria"],
    answer: "Niger"
  },
  {
    question: "Palm oil is mainly produced in which African country?",
    options: ["Nigeria", "Ghana", "Kenya", "Egypt"],
    answer: "Nigeria"
  },
  {
    question: "The main agricultural export of Kenya is:",
    options: ["Tea", "Cocoa", "Rice", "Coffee"],
    answer: "Tea"
  },
  {
    question: "Which African country is leading in diamond exports?",
    options: ["Botswana", "South Africa", "Angola", "Namibia"],
    answer: "Botswana"
  },
  {
    question: "Which African country has a large cocoa processing industry?",
    options: ["Ghana", "Nigeria", "Ivory Coast", "Cameroon"],
    answer: "Ghana"
  },
  {
    question: "Which African country is a major exporter of cashew nuts?",
    options: ["Mozambique", "Ghana", "Nigeria", "Senegal"],
    answer: "Mozambique"
  },
  {
    question: "Which country is famous for copper mining in Africa?",
    options: ["Zambia", "Nigeria", "Kenya", "Ghana"],
    answer: "Zambia"
  },
  {
    question: "Which African country has the largest oil refinery capacity?",
    options: ["Nigeria", "Egypt", "Algeria", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "The main export product of Algeria is:",
    options: ["Oil and Gas", "Gold", "Cocoa", "Coffee"],
    answer: "Oil and Gas"
  },
  {
    question: "Which African country produces the most coffee in East Africa?",
    options: ["Ethiopia", "Kenya", "Tanzania", "Uganda"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country is famous for cotton production?",
    options: ["Mali", "Nigeria", "Ghana", "Kenya"],
    answer: "Mali"
  },
  {
    question: "Which African country produces the most natural rubber?",
    options: ["Liberia", "Nigeria", "Ghana", "Ivory Coast"],
    answer: "Liberia"
  },
  {
    question: "Which country in Africa is known for phosphate mining?",
    options: ["Morocco", "Egypt", "Tunisia", "Algeria"],
    answer: "Morocco"
  },
  {
    question: "Which African country is a leading exporter of tea?",
    options: ["Kenya", "Ghana", "Nigeria", "South Africa"],
    answer: "Kenya"
  },
  {
    question: "Which African country is a major producer of sugarcane?",
    options: ["South Africa", "Nigeria", "Kenya", "Egypt"],
    answer: "South Africa"
  },
  {
    question: "Which African country is known for tin mining?",
    options: ["Nigeria", "Ghana", "DR Congo", "Tanzania"],
    answer: "Nigeria"
  },
  {
    question: "Which African country has the largest livestock population?",
    options: ["Sudan", "Nigeria", "Kenya", "Ethiopia"],
    answer: "Sudan"
  },
  {
    question: "Which African country is famous for palm kernel oil?",
    options: ["Nigeria", "Ghana", "Cameroon", "Liberia"],
    answer: "Nigeria"
  },
  {
    question: "Which African country is leading in gold exports?",
    options: ["South Africa", "Ghana", "Mali", "Tanzania"],
    answer: "South Africa"
  },
  {
    question: "Which African country has large tin and coltan reserves?",
    options: ["DR Congo", "Nigeria", "Ghana", "Botswana"],
    answer: "DR Congo"
  },
  {
    question: "Which African country is the largest producer of limestone?",
    options: ["Egypt", "South Africa", "Nigeria", "Morocco"],
    answer: "Egypt"
  },
  {
    question: "Which African country is famous for diamond cutting and polishing industry?",
    options: ["South Africa", "Botswana", "Namibia", "Angola"],
    answer: "South Africa"
  },
  {
    question: "Which African country is the largest producer of phosphate?",
    options: ["Morocco", "Egypt", "Tunisia", "South Africa"],
    answer: "Morocco"
  },
  {
    question: "Which African country is known for oil palm production?",
    options: ["Nigeria", "Ghana", "Ivory Coast", "Cameroon"],
    answer: "Nigeria"
  },
  {
    question: "Which African country exports the most cocoa to Europe?",
    options: ["CÃ´te dâ€™Ivoire", "Ghana", "Nigeria", "Cameroon"],
    answer: "CÃ´te dâ€™Ivoire"
  },
  {
    question: "Which African country has a large fishing industry along the Atlantic coast?",
    options: ["Morocco", "Nigeria", "Senegal", "Ghana"],
    answer: "Morocco"
  },
  {
    question: "Which African country is famous for uranium mining?",
    options: ["Niger", "South Africa", "Namibia", "Botswana"],
    answer: "Niger"
  },
  {
    question: "Which African country is known for forestry and timber production?",
    options: ["Gabon", "Ghana", "Nigeria", "Kenya"],
    answer: "Gabon"
  },
  {
    question: "Which African country is famous for cement production?",
    options: ["South Africa", "Egypt", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country is the main exporter of cashew nuts?",
    options: ["Mozambique", "Ghana", "Nigeria", "Senegal"],
    answer: "Mozambique"
  },
  {
    question: "Which African country is known for salt production?",
    options: ["Senegal", "Nigeria", "Egypt", "Ghana"],
    answer: "Senegal"
  },
  {
    question: "Which African country produces most of the world's manganese?",
    options: ["South Africa", "Gabon", "Ghana", "Nigeria"],
    answer: "South Africa"
  },
  {
    question: "Which African country is a major producer of platinum?",
    options: ["South Africa", "Zimbabwe", "Botswana", "Namibia"],
    answer: "South Africa"
  },
  {
    question: "Which African country is the leading exporter of natural gas?",
    options: ["Algeria", "Nigeria", "Egypt", "Libya"],
    answer: "Algeria"
  },
  {
    question: "Which African country is famous for the mining of iron ore?",
    options: ["South Africa", "Nigeria", "Kenya", "Ghana"],
    answer: "South Africa"
  },
  {
    question: "Which African country is known for its textile industry?",
    options: ["Egypt", "Nigeria", "Kenya", "South Africa"],
    answer: "Egypt"
  },
  {
    question: "Which African country has a developed cement industry?",
    options: ["South Africa", "Ghana", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country is famous for petroleum refining?",
    options: ["Nigeria", "Egypt", "Algeria", "South Africa"],
    answer: "Nigeria"
  },
  {
    question: "Which African country is a major producer of sugar?",
    options: ["South Africa", "Egypt", "Kenya", "Nigeria"],
    answer: "South Africa"
  },
  {
    question: "Which African country exports cocoa butter and powder?",
    options: ["Ghana", "CÃ´te dâ€™Ivoire", "Nigeria", "Cameroon"],
    answer: "Ghana"
  },
  {
    question: "Which African organization was established to promote unity and development?",
    options: ["African Union (AU)", "United Nations (UN)", "ECOWAS", "OPEC"],
    answer: "African Union (AU)"
  },
  {
    question: "ECOWAS stands for:",
    options: ["Economic Community of West African States", "Eastern Community of West African States", "Economic Council of West African States", "East Community of West African States"],
    answer: "Economic Community of West African States"
  },
  {
    question: "Which African country was the first to gain independence?",
    options: ["Ghana", "Nigeria", "Egypt", "Sudan"],
    answer: "Ghana"
  },
  {
    question: "The main goal of the African Union is to:",
    options: ["Promote peace", "security and development", "Control trade", "Exploit resources", "Build military bases"],
    answer: "Promote peace, security and development"
  },
  {
    question: "Which African country is NOT a member of the African Union?",
    options: ["Morocco", "Ghana", "Nigeria", "South Africa"],
    answer: "Morocco"
  },
  {
    question: "The headquarters of the African Union is located in:",
    options: ["Addis Ababa", "Ethiopia", "Abuja", "Nigeria", "Accra", "Ghana", "Nairobi", "Kenya"],
    answer: "Addis Ababa, Ethiopia"
  },
  {
    question: "Which of these is a key objective of ECOWAS?",
    options: ["Promote economic integration", "Promote sports", "Build roads only", "Develop nuclear energy"],
    answer: "Promote economic integration"
  },
  {
    question: "Which African country has a federal system of government?",
    options: ["Nigeria", "Ghana", "Kenya", "Togo"],
    answer: "Nigeria"
  },
  {
    question: "Which African country practices a unitary system of government?",
    options: ["Ghana", "Nigeria", "Sudan", "Ethiopia"],
    answer: "Ghana"
  },
  {
    question: "The main purpose of the African Charter on Human and Peoples' Rights is to:",
    options: ["Protect human rights", "Promote trade", "Increase military power", "Build schools"],
    answer: "Protect human rights"
  },
  {
    question: "The United Nations headquarters in Africa is located in:",
    options: ["None", "UN HQ is in New York", "Addis Ababa", "Accra", "Nairobi"],
    answer: "None, UN HQ is in New York"
  },
  {
    question: "Which African country is famous for mediating peace in international conflicts?",
    options: ["South Africa", "Nigeria", "Ghana", "Ethiopia"],
    answer: "South Africa"
  },
  {
    question: "The main objective of the African Peer Review Mechanism (APRM) is to:",
    options: ["Encourage good governance", "Promote tourism", "Develop infrastructure", "Reduce inflation"],
    answer: "Encourage good governance"
  },
  {
    question: "Which African country is a permanent member of the UN Security Council?",
    options: ["None", "Nigeria", "South Africa", "Egypt"],
    answer: "None"
  },
  {
    question: "The headquarters of ECOWAS is located in:",
    options: ["Abuja", "Nigeria", "Accra", "Ghana", "Dakar", "Senegal", "Lagos", "Nigeria"],
    answer: "Abuja, Nigeria"
  },
  {
    question: "Which African country has a constitutional monarchy?",
    options: ["Eswatini", "Nigeria", "Ghana", "Kenya"],
    answer: "Eswatini"
  },
  {
    question: "The main organ of the African Union responsible for political affairs is:",
    options: ["The Assembly of Heads of State and Government", "The Pan-African Parliament", "The Peace and Security Council", "The AU Commission"],
    answer: "The Assembly of Heads of State and Government"
  },
  {
    question: "Which African country returned to the African Union after years of suspension?",
    options: ["Morocco", "Libya", "South Africa", "Egypt"],
    answer: "Morocco"
  },
  {
    question: "The African Union was officially launched in which year?",
    options: ["2002", "1963", "1999", "2010"],
    answer: "2002"
  },
  {
    question: "Which African country is the largest contributor of troops to UN peacekeeping missions?",
    options: ["Ethiopia", "Nigeria", "Ghana", "South Africa"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country is known as the 'Gateway to Africa'?",
    options: ["Egypt", "Ghana", "South Africa", "Kenya"],
    answer: "Egypt"
  },
  {
    question: "Which African country hosted the first Pan-African Conference?",
    options: ["Ghana", "South Africa", "Ethiopia", "Senegal"],
    answer: "Ghana"
  },
  {
    question: "Which African organization promotes regional security in West Africa?",
    options: ["ECOWAS", "AU", "UN", "OAU"],
    answer: "ECOWAS"
  },
  {
    question: "The Pan-African Parliament is located in:",
    options: ["Midrand", "South Africa", "Abuja", "Nigeria", "Addis Ababa", "Ethiopia", "Accra", "Ghana"],
    answer: "Midrand, South Africa"
  },
  {
    question: "Which African country is considered a stable democracy in West Africa?",
    options: ["Ghana", "Nigeria", "Mali", "Guinea"],
    answer: "Ghana"
  },
  {
    question: "Which African country recently transitioned to a democratic government after years of military rule?",
    options: ["Sudan", "Ghana", "Ethiopia", "Kenya"],
    answer: "Sudan"
  },
  {
    question: "Which African country has experienced frequent coups since independence?",
    options: ["Mali", "Ghana", "Senegal", "Botswana"],
    answer: "Mali"
  },
  {
    question: "Which African country is known for conflict resolution and peacekeeping in Africa?",
    options: ["Nigeria", "South Africa", "Ghana", "Kenya"],
    answer: "Nigeria"
  },
  {
    question: "The main objective of the African Continental Free Trade Area (AfCFTA) is to:",
    options: ["Promote free trade across Africa", "Build military bases", "Encourage tourism", "Develop agriculture"],
    answer: "Promote free trade across Africa"
  },
  {
    question: "Which African country was suspended from the AU for unconstitutional changes in government?",
    options: ["Guinea", "South Africa", "Nigeria", "Egypt"],
    answer: "Guinea"
  },
  {
    question: "Which African country hosted the African Union Summit in 2017?",
    options: ["Ethiopia", "Gabon", "Rwanda", "South Africa"],
    answer: "Ethiopia"
  },
  {
    question: "The AU Peace and Security Council was modeled after which UN organ?",
    options: ["Security Council", "General Assembly", "Economic and Social Council", "Trusteeship Council"],
    answer: "Security Council"
  },
  {
    question: "Which African country is famous for the policy of non-alignment during the Cold War?",
    options: ["Ghana", "Nigeria", "Egypt", "Ethiopia"],
    answer: "Ghana"
  },
  {
    question: "Which African country leads in the promotion of democracy and human rights in Africa?",
    options: ["South Africa", "Nigeria", "Ghana", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country hosts the AU Commission?",
    options: ["Ethiopia", "Nigeria", "South Africa", "Egypt"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country is a member of the International Criminal Court (ICC)?",
    options: ["Kenya", "Sudan", "Eritrea", "Libya"],
    answer: "Kenya"
  },
  {
    question: "Which African country played a leading role in Pan-Africanism?",
    options: ["Ghana", "Nigeria", "Ethiopia", "Senegal"],
    answer: "Ghana"
  },
  {
    question: "Which African country has the strongest diplomatic influence in Africa?",
    options: ["South Africa", "Ghana", "Nigeria", "Egypt"],
    answer: "South Africa"
  },
  {
    question: "Which African country is a major contributor to UN peacekeeping in Central Africa?",
    options: ["Rwanda", "Uganda", "DR Congo", "Nigeria"],
    answer: "Nigeria"
  },
  {
    question: "Which African country is the headquarters of the African Development Bank (AfDB)?",
    options: ["CÃ´te dâ€™Ivoire", "Nigeria", "Ghana", "Kenya"],
    answer: "CÃ´te dâ€™Ivoire"
  },
  {
    question: "Which African country led the fight against apartheid?",
    options: ["South Africa", "Ghana", "Nigeria", "Kenya"],
    answer: "South Africa"
  },
  {
    question: "Which African country is famous for the Organization of African Unity (OAU)?",
    options: ["Ethiopia", "Ghana", "Nigeria", "Egypt"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country has experienced recent democratic consolidation?",
    options: ["Ghana", "Nigeria", "Mali", "Guinea"],
    answer: "Ghana"
  },
  {
    question: "Which African country is part of both the AU and ECOWAS?",
    options: ["Nigeria", "Egypt", "South Africa", "Kenya"],
    answer: "Nigeria"
  },
  {
    question: "Which African country is the main contributor to the AU Mission in Somalia?",
    options: ["Ethiopia", "Nigeria", "Kenya", "Ghana"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country is a founding member of the African Union?",
    options: ["Egypt", "Ghana", "Nigeria", "South Africa"],
    answer: "Egypt"
  },
  {
    question: "Which African country is known for hosting peace talks in Africa?",
    options: ["South Africa", "Ghana", "Kenya", "Nigeria"],
    answer: "South Africa"
  },
  {
    question: "Which African country has the highest number of diplomats in Africa?",
    options: ["Nigeria", "South Africa", "Ghana", "Egypt"],
    answer: "Nigeria"
  },
  {
    question: "Which African country leads in promoting regional security in Southern Africa?",
    options: ["South Africa", "Botswana", "Namibia", "Zimbabwe"],
    answer: "South Africa"
  },
  {
    question: "Which African country is known as the 'Worldâ€™s Diplomatic Hub' in Africa?",
    options: ["Ethiopia", "Nigeria", "Ghana", "South Africa"],
    answer: "Ethiopia"
  },
  {
    question: "Which African country is a member of the African Continental Free Trade Area (AfCFTA)?",
    options: ["All AU member states", "Nigeria only", "South Africa only", "Ghana only"],
    answer: "All AU member states"
  },
  {
    question: "Which African country hosted the African Union Summit in 2019?",
    options: ["Rwanda", "Ethiopia", "Gabon", "South Africa"],
    answer: "Rwanda"
  },
  {
    question: "Which African country led the adoption of the African Charter on Democracy, Elections and Governance?",
    options: ["Ghana", "Nigeria", "South Africa", "Ethiopia"],
    answer: "Ghana"
  },
  {
    question: "Which African country is a strong advocate for anti-corruption policies in Africa?",
    options: ["Ghana", "Nigeria", "Kenya", "South Africa"],
    answer: "Ghana"
  },
  {
    question: "Which African country is recognized for promoting democracy and rule of law in Africa?",
    options: ["Ghana", "Nigeria", "Kenya", "South Africa"],
    answer: "Ghana"
  },
  {
    question: "Who was the first President of Ghana?",
    options: ["Kwame Nkrumah", "John Atta Mills", "Jerry Rawlings", "Kofi Busia"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The main objective of the 1992 Constitution of Ghana was to:",
    options: ["Ensure democratic governance", "Promote military rule", "Limit education", "Control trade"],
    answer: "Ensure democratic governance"
  },
  {
    question: "Which Ghanaian leader introduced the â€˜Seven-Year Development Planâ€™?",
    options: ["Kwame Nkrumah", "Jerry Rawlings", "John Kufuor", "John Atta Mills"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The National Development Planning Commission (NDPC) in Ghana is responsible for:",
    options: ["Formulating development plans", "Conducting elections", "Managing security", "Collecting taxes"],
    answer: "Formulating development plans"
  },
  {
    question: "Who was the first Prime Minister of Ghana?",
    options: ["Kwame Nkrumah", "J.B. Danquah", "Kofi Abrefa Busia", "Jerry Rawlings"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The major export of Ghana during the colonial period was:",
    options: ["Cocoa", "Gold", "Timber", "Oil"],
    answer: "Cocoa"
  },
  {
    question: "The first European country to trade with Ghana was:",
    options: ["Portugal", "Britain", "France", "Netherlands"],
    answer: "Portugal"
  },
  {
    question: "The 4th Republic of Ghana began in which year?",
    options: ["1993", "1960", "1979", "1981"],
    answer: "1993"
  },
  {
    question: "Which Ghanaian leader is known for the Economic Recovery Programme (ERP)?",
    options: ["Jerry Rawlings", "John Kufuor", "Kwame Nkrumah", "John Atta Mills"],
    answer: "Jerry Rawlings"
  },
  {
    question: "Which political party is Kwame Nkrumah associated with?",
    options: ["Convention People's Party (CPP)", "New Patriotic Party (NPP)", "National Democratic Congress (NDC)", "People's National Party (PNP)"],
    answer: "Convention People's Party (CPP)"
  },
  {
    question: "The capital city of Ghana is:",
    options: ["Accra", "Kumasi", "Tamale", "Takoradi"],
    answer: "Accra"
  },
  {
    question: "The indigenous people of northern Ghana are mainly:",
    options: ["Dagombas", "Ashantis", "Ewes", "Fantes"],
    answer: "Dagombas"
  },
  {
    question: "The main legislative body in Ghana is called:",
    options: ["Parliament", "National Assembly", "Council of Elders", "House of Chiefs"],
    answer: "Parliament"
  },
  {
    question: "Which event marked the end of colonial rule in Ghana?",
    options: ["Independence in 1957", "First Republic in 1960", "Military coup in 1966", "Fourth Republic in 1993"],
    answer: "Independence in 1957"
  },
  {
    question: "The Ghanaian national flag colors red, gold, and green symbolize:",
    options: ["Blood", "wealth", "and rich vegetation", "Power", "sun", "and peace", "Courage", "love", "and nature", "Victory", "unity", "and freedom"],
    answer: "Blood, wealth, and rich vegetation"
  },
  {
    question: "The largest ethnic group in Ghana is:",
    options: ["Akan", "Ewe", "Ga", "Dagomba"],
    answer: "Akan"
  },
  {
    question: "Which European power colonized the Gold Coast?",
    options: ["Britain", "France", "Portugal", "Germany"],
    answer: "Britain"
  },
  {
    question: "The first Ghanaian woman to become Chief Justice was:",
    options: ["Georgina Theodora Wood", "Akua Kuenyehia", "Efua Sutherland", "Abena Busia"],
    answer: "Georgina Theodora Wood"
  },
  {
    question: "The Ghanaian parliament is unicameral, meaning it has:",
    options: ["One house", "Two houses", "Three houses", "Four houses"],
    answer: "One house"
  },
  {
    question: "The Supreme Court of Ghana is responsible for:",
    options: ["Interpreting the Constitution", "Making laws", "Collecting taxes", "Conducting elections"],
    answer: "Interpreting the Constitution"
  },
  {
    question: "Which Ghanaian President won the 2000 general elections?",
    options: ["John Kufuor", "Jerry Rawlings", "John Atta Mills", "Kwame Nkrumah"],
    answer: "John Kufuor"
  },
  {
    question: "Which organization promotes education and literacy in Ghana?",
    options: ["Ghana Education Service (GES)", "NDPC", "Bank of Ghana", "Ghana Police Service"],
    answer: "Ghana Education Service (GES)"
  },
  {
    question: "The first President of Nigeria was:",
    options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Goodluck Jonathan", "Muhammadu Buhari"],
    answer: "Nnamdi Azikiwe"
  },
  {
    question: "Which African leader is associated with Pan-Africanism?",
    options: ["Kwame Nkrumah", "Julius Nyerere", "Nelson Mandela", "Haile Selassie"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The main aim of the United Nations is to:",
    options: ["Maintain international peace", "Promote trade in Africa", "Collect taxes globally", "Control global media"],
    answer: "Maintain international peace"
  },
  {
    question: "Which global event triggered Ghana's push for independence?",
    options: ["World War II", "World War I", "Cold War", "The Berlin Conference"],
    answer: "World War II"
  },
  {
    question: "The Ashanti Kingdom was located in which part of Ghana?",
    options: ["Central Ghana", "Northern Ghana", "Eastern Ghana", "Western Ghana"],
    answer: "Central Ghana"
  },
  {
    question: "Which Ghanaian leader was overthrown in the 1966 coup?",
    options: ["Kwame Nkrumah", "Jerry Rawlings", "John Kufuor", "John Atta Mills"],
    answer: "Kwame Nkrumah"
  },
  {
    question: "The United Nations was formed in which year?",
    options: ["1945", "1919", "1960", "1939"],
    answer: "1945"
  },
  {
    question: "The first female Vice President of Ghana was:",
    options: ["Nana Konadu Agyeman-Rawlings", "Hajia Alima Mahama", "Samira Bawumia", "Akua Sakyiwaa Agyeman"],
    answer: "Samira Bawumia"
  },
  {
    question: "Which Ghanaian leader introduced Free Senior High School education?",
    options: ["Nana Akufo-Addo", "John Mahama", "Jerry Rawlings", "John Kufuor"],
    answer: "Nana Akufo-Addo"
  },
  {
    question: "The main purpose of the National Democratic Congress (NDC) in Ghana is:",
    options: ["Political governance", "Trade promotion", "Education only", "Military management"],
    answer: "Political governance"
  },
  {
    question: "The main objective of the New Patriotic Party (NPP) is:",
    options: ["Political governance", "Healthcare management", "Sports development", "Industrialization only"],
    answer: "Political governance"
  },
  {
    question: "The Ghanaian judiciary is independent according to the Constitution of:",
    options: ["1992", "1960", "1979", "1981"],
    answer: "1992"
  },
  {
    question: "The capital of Burkina Faso is:",
    options: ["Ouagadougou", "Bamako", "Accra", "Niamey"],
    answer: "Ouagadougou"
  },
  {
    question: "The Berlin Conference of 1884â€“85 led to:",
    options: ["Partition of Africa by European powers", "Independence of African states", "Formation of the UN", "Abolition of slavery"],
    answer: "Partition of Africa by European powers"
  },
  {
    question: "The Ghana National Anthem was composed by:",
    options: ["Philip Gbeho", "Kwame Nkrumah", "Jerry Rawlings", "J.B. Danquah"],
    answer: "Philip Gbeho"
  },
  {
    question: "The main reason for the establishment of the Ghana Education Service (GES) was to:",
    options: ["Promote literacy and education", "Collect taxes", "Enforce laws", "Provide healthcare"],
    answer: "Promote literacy and education"
  },
  {
    question: "Which Ghanaian city is called the 'Garden City'?",
    options: ["Kumasi", "Accra", "Takoradi", "Tamale"],
    answer: "Kumasi"
  },
  {
    question: "The main role of the Auditor-General in Ghana is to:",
    options: ["Audit government accounts", "Make laws", "Enforce security", "Conduct elections"],
    answer: "Audit government accounts"
  },
  {
    question: "The main purpose of Ghanaâ€™s National Commission on Civic Education (NCCE) is to:",
    options: ["Educate citizens on civic rights and duties", "Manage elections", "Collect taxes", "Build infrastructure"],
    answer: "Educate citizens on civic rights and duties"
  },
  {
    question: "Which international body oversees elections in many African countries?",
    options: ["United Nations", "African Union", "ECOWAS", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which Ghanaian leader initiated the Operation Feed Yourself programme?",
    options: ["Ignatius Kutu Acheampong", "Kwame Nkrumah", "Jerry Rawlings", "John Kufuor"],
    answer: "Ignatius Kutu Acheampong"
  },
  {
    question: "The main role of the Electoral Commission of Ghana is to:",
    options: ["Conduct free and fair elections", "Make laws", "Collect taxes", "Manage security"],
    answer: "Conduct free and fair elections"
  },
  {
    question: "The first Ghanaian to win the Nobel Peace Prize was:",
    options: ["Kofi Annan", "Kwame Nkrumah", "John Atta Mills", "Jerry Rawlings"],
    answer: "Kofi Annan"
  },
  {
    question: "Which Ghanaian city is a major cocoa producing area?",
    options: ["Takoradi", "Kumasi", "Tamale", "Accra"],
    answer: "Takoradi"
  },
  {
    question: "Which African leader was imprisoned for fighting apartheid?",
    options: ["Nelson Mandela", "Kwame Nkrumah", "Julius Nyerere", "Patrice Lumumba"],
    answer: "Nelson Mandela"
  },
  {
    question: "Which Ghanaian leader was known for the â€˜Better Ghana Agendaâ€™?",
    options: ["Nana Akufo-Addo", "John Mahama", "Jerry Rawlings", "John Kufuor"],
    answer: "Nana Akufo-Addo"
  },
  {
    question: "The main reason for Ghanaâ€™s National Health Insurance Scheme (NHIS) is to:",
    options: ["Provide accessible healthcare", "Build roads", "Promote trade", "Manage elections"],
    answer: "Provide accessible healthcare"
  },
  {
    question: "The first President of Tanzania was:",
    options: ["Julius Nyerere", "Kwame Nkrumah", "Haile Selassie", "Nelson Mandela"],
    answer: "Julius Nyerere"
  },
  {
    question: "The African Charter on Human and Peoplesâ€™ Rights was adopted in:",
    options: ["1981", "1963", "1992", "2000"],
    answer: "1981"
  },
  {
    question: "Which Ghanaian President transitioned the country to the Fourth Republic?",
    options: ["Jerry Rawlings", "Kwame Nkrumah", "John Kufuor", "John Atta Mills"],
    answer: "Jerry Rawlings"
  },
  {
    question: "The main purpose of Ghanaâ€™s Local Government system is to:",
    options: ["Promote local development and governance", "Collect national taxes", "Manage foreign affairs", "Run the military"],
    answer: "Promote local development and governance"
  },
  {
    question: "Which African country was ruled by Emperor Haile Selassie?",
    options: ["Ethiopia", "Ghana", "Nigeria", "Kenya"],
    answer: "Ethiopia"
  },
  {
    question: "The first Ghanaian Chief Justice after independence was:",
    options: ["Sir Kobina Arku Korsah", "Georgina Wood", "Kwame Nkrumah", "J.B. Danquah"],
    answer: "Sir Kobina Arku Korsah"
  },
  {
    question: "The main goal of the African Unionâ€™s Agenda 2063 is to:",
    options: ["Promote socio-economic development across Africa", "Control trade", "Manage military operations", "Enforce constitutions"],
    answer: "Promote socio-economic development across Africa"
  },
  {
    question: "The Ghanaian national motto is:",
    options: ["Freedom and Justice", "Unity and Peace", "Peace and Development", "Freedom and Democracy"],
    answer: "Freedom and Justice"
  },
  {
    question: "Which Ghanaian President launched the â€˜Planting for Food and Jobsâ€™ programme?",
    options: ["Nana Akufo-Addo", "Jerry Rawlings", "John Kufuor", "John Mahama"],
    answer: "Nana Akufo-Addo"
  },
];

export default historyQuestions;