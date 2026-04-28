const enneagramData = [
    {
        number: 1,
        title: "The Reformer",
        occupation: "Lawyer",
        icon: "images/lawyer.png",
        name: "Anthony",
        example: "Anthony is a seasoned Lawyer who brings structure and routine to his legal team. He acts as an anchor, ensuring every detail in a contract is precise and that strict ethical guidelines are followed. While his perfectionism can be intimidating, it is rooted in a deep commitment to the integrity of the law.",
        motivation: "Rooted in a deep commitment to the integrity of the work.",
        strengths: "Thorough, precise, ethical, and reliable.",
        weaknesses: "Can be intimidating, perfectionistic, and stern."
    },
    {
        number: 2,
        title: "The Helper",
        occupation: "Nurse",
        icon: "images/nurse.png",
        name: "Bethany",
        example: "Bethany works as a Charge Nurse and is the 'spark' of her hospital ward. She naturally lifts spirits and ensures every patient and teammate feels seen and supported. She keeps communication flowing and balances high-pressure medical productivity with a warmth that helps the whole team thrive.",
        motivation: "Naturally lifts spirits and ensures every teammate feels seen and supported.",
        strengths: "Supportive, communicative, encouraging, and warm.",
        weaknesses: "May prioritize others' needs over their own tasks or expect reciprocal action."
    },
    {
        number: 3,
        title: "The Achiever",
        occupation: "Sales Executive",
        icon: "images/salesman.png",
        name: "Henry",
        example: "Henry is a top-performing Sales Executive who is driven by measurable success and productivity. He focuses heavily on his firm's public image and meeting aggressive quarterly goals. His charismatic energy is focused on hitting targets and ensuring he stays at the top of the leaderboard.",
        motivation: "Driven by success, productivity, and professional image.",
        strengths: "Efficient, ambitious, goal-oriented, and charismatic.",
        weaknesses: "Can become overly competitive or work-obsessed."
    },
    {
        number: 4,
        title: "The Individualist",
        occupation: "Creative Director",
        icon: "images/artist.png",
        name: "Nathan",
        example: "Nathan is a Creative Director who seeks to bring a unique flair and emotional depth to every ad campaign. He avoids 'cookie-cutter' solutions, needing his work to feel authentic and personal. He often withdraws to process his intuition to ensure his vision is unlike anything else in the industry.",
        motivation: "Seeks to bring unique creative flair and emotional depth to the project.",
        strengths: "Creative, expressive, empathetic, and intuitive.",
        weaknesses: "May feel misunderstood or withdraw if their work isn't seen as unique."
    },
    {
        number: 5,
        title: "The Investigator",
        occupation: "Data Scientist",
        icon: "images/observation.png",
        name: "Louis",
        example: "Louis is a Data Scientist driven by a need to fully understand complex systems before taking action. He spends his days gathering data and remains objective and analytical in his approach. He prefers to work independently, often getting lost in the 'research phase' to ensure he has the technical truth.",
        motivation: "Driven by a need to understand and gather data before acting.",
        strengths: "Analytical, objective, insightful, and independent.",
        weaknesses: "Can be emotionally distant or get lost in the 'research' phase."
    },
    {
        number: 6,
        title: "The Loyalist",
        occupation: "Safety Inspector",
        icon: "images/warning.png",
        name: "Janet",
        example: "Janet is a dedicated Safety Inspector who seeks security and builds reliable bonds within her crew. She is excellent at risk assessment, constantly scanning for potential hazards to keep the team safe. Her prepared nature ensures the team is ready for any obstacle, though she can be prone to anxiety.",
        motivation: "Seeks security and builds strong, reliable bonds within the team.",
        strengths: "Loyal, hardworking, prepared, and great at risk assessment.",
        weaknesses: "Can be prone to anxiety or overly cautious."
    },
    {
        number: 7,
        title: "The Enthusiast",
        occupation: "Event Planner",
        icon: "images/active.png",
        name: "Susan",
        example: "Susan is an energetic Event Planner who wants to keep every project exciting and explore new possibilities. She is an optimistic, quick-thinker who brings versatility to the team. While she is great at brainstorming innovations, she occasionally avoids the difficult or boring administrative tasks.",
        motivation: "Wants to keep things exciting and explore new possibilities.",
        strengths: "Optimistic, versatile, energetic, and quick-thinking.",
        weaknesses: "Can be easily distracted or avoid difficult/boring tasks."
    },
    {
        number: 8,
        title: "The Challenger",
        occupation: "CEO",
        icon: "images/ceo.png",
        name: "Jayden",
        example: "Jayden is a decisive CEO who values strength and directness above all else. He is self-confident and assertive, protecting his company and team from external threats with protective intensity. He takes charge in high-pressure situations, though some find him domineering or confrontational.",
        motivation: "Values strength and directness; protects the team from external threats.",
        strengths: "Decisive, protective, self-confident, and assertive.",
        weaknesses: "Can be seen as domineering or confrontational."
    },
    {
        number: 9,
        title: "The Peacemaker",
        occupation: "Mediator",
        icon: "images/peace.png",
        name: "Keith",
        example: "Keith is a professional Mediator and a stabilizing force who prioritizes harmony in every room. He is a dependable listener who steps in to diffuse tension when conflicts arise. Because he values groundedness and calm, he often seeks to avoid discomfort or difficult situations.",
        motivation: "Values harmony and seeks to avoid discomfort or tension.",
        strengths: "Diplomatic, calm, open-minded, and grounded.",
        weaknesses: "Avoids complications; can be passive-aggressive to avoid conflict."
    }
];

const practiceData = [
    {
        scenario: "Sarah, a librarian, double-checks the archive logs to ensure every book is perfectly categorized. She gets frustrated when others ignore filing rules.",
        options: [
            "Type 1: The Reformer", 
            "Type 4: The Individualist", 
            "Type 6: The Loyalist", 
            "Type 2: The Helper"
        ],
        correct: 0,
        remediation: { 
            goal: "A commitment to integrity and 'the correct way'", 
            trait: "Thorough, precise, and ethical", 
            hint: "This aligns with the lawyer archetype—focusing on structure and guidelines." 
        }
    },
    {
        scenario: "Meet David, a dedicated volunteer coordinator. He spends his weekends organizing community drives and personally checking in on every family to ensure they feel loved.",
        options: [
            "Type 9: The Peacemaker", 
            "Type 2: The Helper", 
            "Type 5: The Investigator", 
            "Type 1: The Reformer"
        ],
        correct: 1,
        remediation: { 
            goal: "Ensuring every teammate or individual feels supported", 
            trait: "Supportive, encouraging, and warm",
            hint: "This aligns with the nurse archetype—prioritizing the well-being of others." 
        }
    },
    {
        scenario: "Marcus, a high school coach, stays late to ensure his team's stats are the best in the district. He cares deeply about the team's winning reputation.",
        options: [
            "Type 3: The Achiever", 
            "Type 7: The Enthusiast", 
            "Type 8: The Challenger", 
            "Type 4: The Individualist"
        ],
        correct: 0,
        remediation: { 
            goal: "Success, productivity, and a professional image", 
            trait: "Efficient, ambitious, and goal-oriented", 
            hint: "This aligns with the sales executive archetype—driven to reach the top of the leaderboard." 
        }
    },
    {
        scenario: "Julian, a poet, often spends hours alone in his studio trying to capture a very specific, rare emotion in his writing that no one else has expressed yet.",
        options: [
            "Type 5: The Investigator", 
            "Type 9: The Peacemaker", 
            "Type 4: The Individualist", 
            "Type 6: The Loyalist"
        ],
        correct: 2,
        remediation: { 
            goal: "To bring unique creative flair and emotional depth", 
            trait: "Creative, expressive, and intuitive", 
            hint: "This aligns with the creative director archetype—needing work to feel authentic and 'different.'" 
        }
    },
    {
        scenario: "Dr. Aris, a historian, prefers spending months in isolated archives gathering every possible fact about an ancient civilization before writing a single word.",
        options: [
            "Type 5: The Investigator", 
            "Type 1: The Reformer", 
            "Type 3: The Achiever", 
            "Type 8: The Challenger"
        ],
        correct: 0,
        remediation: { 
            goal: "A need to understand and gather data before acting", 
            trait: "Analytical, objective, and independent", 
            hint: "This aligns with the data scientist archetype—seeking technical truth through research." 
        }
    },
    {
        scenario: "Chloe, an ER doctor, is always scanning for equipment failures and ensures her staff is prepared for the absolute worst-case scenario at all times.",
        options: [
            "Type 8: The Challenger", 
            "Type 6: The Loyalist", 
            "Type 2: The Helper", 
            "Type 7: The Enthusiast"
        ],
        correct: 1,
        remediation: { 
            goal: "Seeking security and building reliable bonds", 
            trait: "Loyal, prepared, and great at risk assessment", 
            hint: "This aligns with the safety inspector archetype—preparing the team for potential obstacles." 
        }
    },
    {
        scenario: "Leo, a party promoter, is always juggling five different project ideas at once. He hates being stuck in the office and constantly seeks new, fun experiences.",
        options: [
            "Type 3: The Achiever", 
            "Type 2: The Helper", 
            "Type 7: The Enthusiast", 
            "Type 4: The Individualist"
        ],
        correct: 2,
        remediation: { 
            goal: "To keep things exciting and explore new possibilities", 
            trait: "Optimistic, versatile, and energetic", 
            hint: "This aligns with the event planner archetype—always looking for the next innovation." 
        }
    },
    {
        scenario: "General Miller is known for her directness. She doesn't mince words and will aggressively defend her soldiers from any unfair treatment from headquarters.",
        options: [
            "Type 8: The Challenger", 
            "Type 1: The Reformer", 
            "Type 6: The Loyalist", 
            "Type 3: The Achiever"
        ],
        correct: 0,
        remediation: { 
            goal: "Protecting the team from external threats", 
            trait: "Decisive, self-confident, and assertive", 
            hint: "This aligns with the ceo archetype—taking charge without hesitation." 
        }
    },
    {
        scenario: "Sam, a yoga instructor, is great at seeing every perspective during a team argument and works hard to make sure everyone feels 'at peace' and relaxed.",
        options: [
            "Type 2: The Helper", 
            "Type 4: The Individualist", 
            "Type 9: The Peacemaker", 
            "Type 5: The Investigator"
        ],
        correct: 2,
        remediation: { 
            goal: "Prioritizing harmony and avoiding discomfort", 
            trait: "Diplomatic, calm, and open-minded", 
            hint: "This aligns with the mediator archetype—diffusing tension and seeking groundedness." 
        }
    }
];

const definitionQuestions = [
    {
        question: "Which of the following best paraphrases the core motivation of a Type 1?",
        options: ["Type 1: The Reformer", "Type 2: The Helper", "Type 6: The Loyalist", "Type 9: The Peacemaker"],
        correct: 0
    },
    {
        question: "A person who prioritizes being supportive, warm, and ensuring others feel loved is best described as:",
        options: ["Type 9: The Peacemaker", "Type 4: The Individualist", "Type 2: The Helper", "Type 1: The Reformer"],
        correct: 2
    },
    {
        question: "Which type is characterized by a drive for productivity, success, and maintaining a professional image?",
        options: ["Type 3: The Achiever", "Type 7: The Enthusiast", "Type 8: The Challenger", "Type 5: The Investigator"],
        correct: 0
    },
    {
        question: "Type 4 is most accurately defined as someone who seeks:",
        options: ["Type 5: The Investigator", "Type 4: The Individualist", "Type 6: The Loyalist", "Type 2: The Helper"],
        correct: 1
    },
    {
        question: "Which type seeks to understand the world through objective data and independent research?",
        options: ["Type 1: The Reformer", "Type 3: The Achiever", "Type 5: The Investigator", "Type 8: The Challenger"],
        correct: 2
    },
    {
        question: "A person focused on risk assessment, security, and building reliable bonds is paraphrased as:",
        options: ["Type 6: The Loyalist", "Type 9: The Peacemaker", "Type 2: The Helper", "Type 4: The Individualist"],
        correct: 0
    },
    {
        question: "Which type is motivated by a need for constant excitement, new experiences, and optimism?",
        options: ["Type 2: The Helper", "Type 7: The Enthusiast", "Type 3: The Achiever", "Type 8: The Challenger"],
        correct: 1
    },
    {
        question: "A person who is naturally assertive, decisive, and protective of their team is most likely a:",
        options: ["Type 1: The Reformer", "Type 6: The Loyalist", "Type 8: The Challenger", "Type 3: The Achiever"],
        correct: 2
    },
    {
        question: "Which type prioritizes harmony, open-mindedness, and the avoidance of internal or external conflict?",
        options: ["Type 9: The Peacemaker", "Type 4: The Individualist", "Type 2: The Helper", "Type 5: The Investigator"],
        correct: 0
    }
];

const quizScenarios = [
    {
        persona: "Meet Elena, a software architect. She refuses to sign off on a project until every line of code meets the industry's highest ethical and structural standards.",
        options: ["Type 4: The Individualist", "Type 1: The Reformer", "Type 6: The Loyalist", "Type 8: The Challenger"],
        correct: 1
    },
    {
        persona: "Meet Omar, a community mentor. He keeps a detailed calendar of his students' birthdays and life events, always sending a thoughtful gift to show he cares.",
        options: ["Type 2: The Helper", "Type 9: The Peacemaker", "Type 5: The Investigator", "Type 7: The Enthusiast"],
        correct: 0
    },
    {
        persona: "Meet Taylor, a startup founder. She tracks her daily output on a public dashboard to motivate herself to stay at the top of her industry's rankings.",
        options: ["Type 1: The Reformer", "Type 3: The Achiever", "Type 8: The Challenger", "Type 4: The Individualist"],
        correct: 1
    },
    {
        persona: "Meet Sian, an avant-garde filmmaker. She often feels misunderstood by the public and intentionally makes films that challenge mainstream 'boring' tastes.",
        options: ["Type 5: The Investigator", "Type 2: The Helper", "Type 4: The Individualist", "Type 9: The Peacemaker"],
        correct: 2
    },
    {
        persona: "Meet Dr. Aris, a research biologist. He prefers spending weeks in a quiet lab analyzing microscopic patterns rather than attending department meetings.",
        options: ["Type 5: The Investigator", "Type 1: The Reformer", "Type 3: The Achiever", "Type 6: The Loyalist"],
        correct: 0
    },
    {
        persona: "Meet Victor, a corporate security analyst. He spends his mornings imagining every possible way the building's server could be hacked so he can build backups.",
        options: ["Type 8: The Challenger", "Type 7: The Enthusiast", "Type 6: The Loyalist", "Type 1: The Reformer"],
        correct: 2
    },
    {
        persona: "Meet Maya, a travel blogger. She rarely stays in one country for more than a week because she is terrified of missing out on a more exciting adventure elsewhere.",
        options: ["Type 3: The Achiever", "Type 7: The Enthusiast", "Type 2: The Helper", "Type 4: The Individualist"],
        correct: 1
    },
    {
        persona: "Meet Captain Miller, a fire chief. When a subordinate was treated unfairly by the city council, she marched into the mayor's office to demand a public apology.",
        options: ["Type 8: The Challenger", "Type 6: The Loyalist", "Type 1: The Reformer", "Type 3: The Achiever"],
        correct: 0
    },
    {
        persona: "Meet Sam, a museum curator. During heated staff meetings, Sam is the one who finds a 'middle ground' that makes both the artists and the accountants happy.",
        options: ["Type 2: The Helper", "Type 4: The Individualist", "Type 9: The Peacemaker", "Type 5: The Investigator"],
        correct: 2
    }
];



let currentTypeIndex = 0;
let currentPracticeIndex = 0;
let currentQuestionIndex = 0;
let activeQuizData = [];
let quizScore = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const infoIcon = document.querySelector('.info-container');
infoIcon.addEventListener('click', function() {
    const box = this.querySelector('.tooltip-box');
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
});

function showScreen(screenId) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function createNumberRow() {
    const row = document.getElementById('number-nav-row');
    row.innerHTML = ''; 

    enneagramData.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.innerText = item.number;
        btn.className = 'num-nav-btn';
        
        if (index === currentTypeIndex) {
            btn.classList.add('active-type');
        }

        btn.onclick = () => {
            currentTypeIndex = index;
            updateLearnScreen();
        };
        row.appendChild(btn);
    });
}

createNumberRow();





function updateLearnScreen() {
    const data = enneagramData[currentTypeIndex];
    
    document.getElementById('type-title').innerHTML = `<strong>${data.title}</strong>`;
    document.getElementById('type-number').innerText = data.number;
    document.getElementById('type-example').innerText = data.example;
    document.getElementById('type-motivation').innerText = data.motivation;
    document.getElementById('type-strengths').innerText = data.strengths;
    document.getElementById('type-weaknesses').innerText = data.weaknesses;
    document.getElementById('type-icon').src = data.icon;


    document.querySelector('.traits-dropdown').open = false;

    createNumberRow();
}

function nextType() {
    currentTypeIndex = (currentTypeIndex + 1) % enneagramData.length;
    updateLearnScreen();
}

function prevType() {
    currentTypeIndex = (currentTypeIndex - 1 + enneagramData.length) % enneagramData.length;
    updateLearnScreen();
}

updateLearnScreen();





function startPractice() {
    currentPracticeIndex = 0; 
    
    shuffleArray(practiceData);
    
    practiceData.forEach(question => {
        const correctText = question.options[question.correct];
        shuffleArray(question.options);
        question.correct = question.options.indexOf(correctText);
    });

    showScreen('practice-screen');
    loadPractice();
}

function loadPractice() {
    const data = practiceData[currentPracticeIndex];

    document.getElementById('practice-count').innerText = currentPracticeIndex + 1;
    
    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('next-practice').classList.add('hidden');
    
    document.getElementById('help-btn').classList.remove('hidden');
    document.getElementById('submit-practice-btn').classList.remove('hidden');

    document.getElementById('practice-scenario').innerText = data.scenario;

    const container = document.getElementById('practice-options');
    container.innerHTML = '';
    
    data.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = 'radio-option';
        label.innerHTML = `
            <input type="radio" name="ennea-choice" value="${i}" required>
            <span>${opt}</span>
        `;
        container.appendChild(label);
    });
}

function handlePracticeSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const selectedIndex = parseInt(formData.get('ennea-choice'));
    const data = practiceData[currentPracticeIndex];
    const feedback = document.getElementById('practice-feedback');
    const nextBtn = document.getElementById('next-practice');
    
    const radioButtons = event.target.querySelectorAll('input[type="radio"]');

    if (selectedIndex === data.correct) {
        radioButtons.forEach(radio => radio.disabled = true);

        const goalLower = data.remediation.goal.toLowerCase().replace(/\.$/, "");
        const traitLower = data.remediation.trait.toLowerCase().replace(/\.$/, "");

        feedback.innerHTML = `
            <div class="success-reinforcement">
                <p>✅ <strong>Correct!</strong></p>
                <p>This is <strong>${data.options[data.correct]}</strong> because their core motivation is <strong>${goalLower}</strong> and they demonstrate being <strong>${traitLower}</strong>.</p>
            </div>
        `;
        feedback.className = "feedback-box success";
        
        if (currentPracticeIndex === practiceData.length - 1) {
            nextBtn.innerText = "Finish Practice 🎓";
        } else {
            nextBtn.innerText = "Next Scenario →";
        }
        
        nextBtn.classList.remove('hidden');
        document.getElementById('submit-practice-btn').classList.add('hidden');
        document.getElementById('help-btn').classList.add('hidden'); 
    } else {
        feedback.innerHTML = "❌ <strong>Not quite.</strong> Review the scenario or use the 'Help' button to see the breakdown.";
        feedback.className = "feedback-box error";
    }
    feedback.classList.remove('hidden');
}

function loadNextPractice() {
    if (currentPracticeIndex >= practiceData.length - 1) {
        showCompletionScreen();
    } else {
        currentPracticeIndex++;
        loadPractice();
    }
}

function checkPracticeAnswer(index) {
    const data = practiceData[currentPracticeIndex];
    const feedback = document.getElementById('practice-feedback');
    
    if (index === data.correct) {
        feedback.innerHTML = "<strong>Correct!</strong> You identified the behavior pattern successfully.";
        feedback.className = "feedback-box success";
        document.getElementById('next-practice').classList.remove('hidden');
        document.getElementById('help-btn').classList.add('hidden');
    } else {
        feedback.innerHTML = "Not quite. Try looking at the 'Help' breakdown below to find the core motivation.";
        feedback.className = "feedback-box error";
    }
    feedback.classList.remove('hidden');
}

function showRemediation() {
    const data = practiceData[currentPracticeIndex].remediation;
    const feedback = document.getElementById('practice-feedback');
    
    feedback.innerHTML = `
        <div class="diagnostic-path">
            <h4>Diagnostic Breakdown:</h4>
            <p><strong>The Motivation:</strong> ${data.goal}</p>
            <p><strong>The Key Trait:</strong> ${data.trait}</p>
            <p class="hint-text"><em>Hint: ${data.hint}</em></p>
        </div>
    `;
    feedback.classList.remove('hidden');
}

function resetPractice() {

    const header = document.querySelector('.practice-header');
    if (header) header.style.display = 'block';

    const container = document.getElementById('practice-container');
    container.innerHTML = `
        <div class="scenario-display">
            <p id="practice-scenario"></p>
        </div>
        <form id="practice-form" onsubmit="handlePracticeSubmit(event)">
            <div id="practice-options" class="radio-group"></div>
            <div class="practice-actions">
                <button type="submit" id="submit-practice-btn" class="main-btn">Submit Answer</button>
                <button type="button" id="help-btn" class="help-link-btn" onclick="showRemediation()">
                    <span class="icon">💡</span> Help Me Figure It Out
                </button>
            </div>
        </form>
        <div id="practice-feedback" class="feedback-box hidden"></div>
        <button id="next-practice" class="hidden main-btn" onclick="loadNextPractice()">Next Scenario →</button>
    `;

    startPractice();
}

function showCompletionScreen() {
    const container = document.getElementById('practice-container');
    const header = document.querySelector('.practice-header');
    if (header) header.style.display = 'none';
    
    container.innerHTML = `
        <div class="completion-message" style="text-align: center; padding: 20px;">
            <div style="font-size: 3rem; margin-bottom: 10px;">🎓</div>
            <h3>Practice Complete!</h3>
            <p>You've successfully analyzed all 9 personality types.</p>
            
            <div class="home-buttons" style="margin-top: 20px; display: flex; flex-direction: column; gap: 10px; align-items: center;">
                <button class="main-btn" onclick="startQuiz()">Take Final Quiz!</button>
                <button class="secondary-btn" onclick="resetPractice()">Retry Practice Scenarios</button>
                <button class="home-link-btn" onclick="location.reload()">Return Home</button>
            </div>
        </div>
    `;
}





function startQuiz() {
    quizScore = 0;
    currentQuizIndex = 0;
    activeQuizData = [];

    const randomDef = definitionQuestions[Math.floor(Math.random() * definitionQuestions.length)];
    activeQuizData.push(randomDef);

    shuffleArray(quizScenarios); 
    for (let i = 0; i < 5; i++) {
        activeQuizData.push(quizScenarios[i]);
    }

    showScreen('quiz-screen');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const data = activeQuizData[currentQuizIndex];
    const feedback = document.getElementById('quiz-feedback');
    const submitBtn = document.getElementById('quiz-submit-btn');
    const nextBtn = document.getElementById('next-quiz-btn');

    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');

    document.getElementById('quiz-count').innerText = currentQuizIndex + 1;

    document.getElementById('quiz-question-text').innerText = data.question || data.persona;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    data.options.forEach((opt, i) => {
        const label = document.createElement('label');
        label.className = 'radio-option';
        label.innerHTML = `
            <input type="radio" name="quiz-choice" value="${i}" required>
            <span>${opt}</span>
        `;
        optionsContainer.appendChild(label);
    });
}

function handleQuizSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selected = parseInt(formData.get('quiz-choice'));
    const data = activeQuizData[currentQuizIndex];
    const feedback = document.getElementById('quiz-feedback');
    
    const radioButtons = event.target.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => radio.disabled = true);

    if (selected === data.correct) {
        quizScore++;
        feedback.innerHTML = "✅ <strong>Correct!</strong>";
        feedback.className = "feedback-box success";
    } else {
        feedback.innerHTML = "❌ <strong>Incorrect.</strong>";
        feedback.className = "feedback-box error";
    }

    feedback.classList.remove('hidden');
    document.getElementById('quiz-submit-btn').classList.add('hidden');
    document.getElementById('next-quiz-btn').classList.remove('hidden');
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < activeQuizData.length) {
        loadQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    const scoreText = document.getElementById('final-score-text');
    const percentText = document.getElementById('final-percentage');
    const messageText = document.getElementById('result-message');
    const emojiText = document.getElementById('result-emoji');
    
    const percent = Math.round((quizScore / 6) * 100);
    
    scoreText.innerText = `${quizScore} / 6`;
    percentText.innerText = `${percent}%`;
    
    if (percent >= 80) {
        emojiText.innerText = "🏆";
        messageText.innerText = "Excellent! You have a strong grasp of Enneagram behaviors and motivations.";
    } else if (percent >= 60) {
        emojiText.innerText = "📈";
        messageText.innerText = "Good effort. You understand the basics, but a little more practice with the archetypes would help.";
    } else {
        emojiText.innerText = "📚";
        messageText.innerText = "It looks like you're still learning. Try reviewing the Practice Scenarios again to master the types.";
    }

    showScreen('results-screen');
}