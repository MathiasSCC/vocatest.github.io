
let currentQuestion = 0;
let answers = [];
let categoryScores = {
    ciencias: 0,
    arte: 0,
    social: 0,
    negocios: 0
};
function initializeTest() {
    loadQuestion();
}

function loadQuestion() {
    const question = testQuestions[currentQuestion];
    const questionCard = document.getElementById('question-card');
    
    // Animate out
    questionCard.style.opacity = '0';
    questionCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.getElementById('question-number').textContent = `Pregunta ${currentQuestion + 1}`;
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `<div class="option-text">${option.text}</div>`;
            optionDiv.onclick = () => selectOption(index);
            optionsContainer.appendChild(optionDiv);
        });
        
        // Animate in
        questionCard.style.opacity = '1';
        questionCard.style.transform = 'translateY(0)';
        
        updateProgress();
        updateNavigation();
    }, 300);
}
function selectOption(optionIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    answers[currentQuestion] = optionIndex;
    document.getElementById('next-btn').disabled = false;
}
function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    
    const selectedOption = testQuestions[currentQuestion].options[answers[currentQuestion]];
    categoryScores[selectedOption.category]++;
    
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}
function previousQuestion() {
    if (currentQuestion > 0) {
        const selectedOption = testQuestions[currentQuestion].options[answers[currentQuestion]];
        if (selectedOption) {
            categoryScores[selectedOption.category]--;
        }
        currentQuestion--;
        loadQuestion();
    }
}
function updateProgress() {
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `Pregunta ${currentQuestion + 1} de ${testQuestions.length}`;
}
function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    document.getElementById('next-btn').disabled = answers[currentQuestion] === undefined;
    
    if (currentQuestion === testQuestions.length - 1) {
        document.getElementById('next-btn').textContent = 'Ver Resultados';
    } else {
        document.getElementById('next-btn').textContent = 'Siguiente';
    }
}
function showResults() {
    const maxScore = Math.max(...Object.values(categoryScores));
    const dominantCategory = Object.keys(categoryScores).find(key => categoryScores[key] === maxScore);
    
    const profile = careerProfiles[dominantCategory];
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    document.getElementById('result-title').textContent = profile.title;
    document.getElementById('result-description').textContent = profile.description;
    
    const careerList = document.getElementById('career-list');
    careerList.innerHTML = '';
    
    profile.careers.forEach(career => {
        const careerItem = document.createElement('div');
        careerItem.className = 'career-item';
        careerItem.textContent = career;
        careerList.appendChild(careerItem);
    });
}
function restartTest() {
    currentQuestion = 0;
    answers = [];
    categoryScores = {
        ciencias: 0,
        arte: 0,
        social: 0,
        negocios: 0
    };
    
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('results-container').style.display = 'none';
    
    loadQuestion();
}
function startTest() {
    initializeTest();
}
// Initialize test when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTest();
});