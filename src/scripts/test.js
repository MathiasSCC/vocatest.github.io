const funFacts = [
    "Los test vocacionales modernos tienen una precisión del 85% en la predicción de satisfacción laboral.",
    "Las personas que eligen carreras alineadas con sus intereses son 3 veces más felices en el trabajo.",
    "El 70% de los estudiantes cambian de carrera al menos una vez durante sus estudios.",
    "Las habilidades blandas son tan importantes como las técnicas en el éxito profesional.",
    "El mercado laboral cambia constantemente, surgiendo nuevas profesiones cada año."
];

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
    updateFunFact();
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
        
        // Restore previous selection if exists
        if (answers[currentQuestion] !== undefined) {
            const options = document.querySelectorAll('.option');
            options[answers[currentQuestion]].classList.add('selected');
        }
        
        // Animate in
        questionCard.style.opacity = '1';
        questionCard.style.transform = 'translateY(0)';
        
        updateProgress();
        updateNavigation();
        updateCategoryProgress();
        updateFunFact();
    }, 300);
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    // Remove previous answer from scores if exists
    if (answers[currentQuestion] !== undefined) {
        const prevOption = testQuestions[currentQuestion].options[answers[currentQuestion]];
        categoryScores[prevOption.category]--;
    }
    
    // Add new answer to scores
    const selectedOption = testQuestions[currentQuestion].options[optionIndex];
    categoryScores[selectedOption.category]++;
    
    answers[currentQuestion] = optionIndex;
    document.getElementById('next-btn').disabled = false;
    
    updateCategoryProgress();
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        // Remove current answer from scores
        if (answers[currentQuestion] !== undefined) {
            const selectedOption = testQuestions[currentQuestion].options[answers[currentQuestion]];
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
    
    // Update completion circle
    const completionPercentage = Math.round(((currentQuestion + (answers[currentQuestion] !== undefined ? 1 : 0)) / testQuestions.length) * 100);
    document.getElementById('completion-circle').textContent = completionPercentage + '%';
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

function updateCategoryProgress() {
    const totalAnswered = Object.values(categoryScores).reduce((a, b) => a + b, 0);
    const maxPossible = Math.max(1, totalAnswered); // Avoid division by zero
    
    // Update category bars
    Object.keys(categoryScores).forEach(category => {
        const percentage = totalAnswered > 0 ? (categoryScores[category] / maxPossible) * 100 : 0;
        const fill = document.getElementById(`${category}-fill`);
        const count = document.getElementById(`${category}-count`);
        
        if (fill) fill.style.width = percentage + '%';
        if (count) count.textContent = categoryScores[category];
    });
}

function updateFunFact() {
    const funFactElement = document.getElementById('fun-fact');
    if (funFactElement) {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactElement.innerHTML = `<p>${randomFact}</p>`;
    }
}

function showResults() {
    const maxScore = Math.max(...Object.values(categoryScores));
    const dominantCategory = Object.keys(categoryScores).find(key => categoryScores[key] === maxScore);
    
    const profile = careerProfiles[dominantCategory];
    
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('results-container').style.display = 'block';
    
    // Hide side panels on results
    document.getElementById('left-panel').style.display = 'none';
    document.getElementById('right-panel').style.display = 'none';
    
    document.getElementById('result-title').textContent = profile.title;
    document.getElementById('result-description').textContent = profile.description;
    
    // Hacer que el main layout ocupe toda la pantalla
    document.getElementsByClassName('main-layout')[0].style.gridTemplateColumns = '1fr';

    // Show statistics
    const statsContainer = document.getElementById('result-stats');
    statsContainer.innerHTML = '';
    
    const totalQuestions = testQuestions.length;
    Object.keys(categoryScores).forEach(category => {
        const percentage = Math.round((categoryScores[category] / totalQuestions) * 100);
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
            <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div class="stat-percentage">${percentage}%</div>
        `;
        statsContainer.appendChild(statCard);
    });
    
    // Show career suggestions
    const careerList = document.getElementById('career-list');
    careerList.innerHTML = '';
    
    profile.careers.forEach(career => {
        const careerItem = document.createElement('div');
        careerItem.className = 'career-item';
        careerItem.textContent = career;
        careerList.appendChild(careerItem);
    });
    
    // Show recommendations
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';
    
    profile.recommendations.forEach(recommendation => {
        const recommendationItem = document.createElement('div');
        recommendationItem.className = 'recommendation-item';
        recommendationItem.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${recommendation}</span>
        `;
        recommendationList.appendChild(recommendationItem);
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
    document.getElementById('left-panel').style.display = 'block';
    document.getElementById('right-panel').style.display = 'block';

    
    // Hacer que el grid del main layout vuelva a su estado original
    document.getElementsByClassName('main-layout')[0].style.gridTemplateColumns = '1fr 800px 1fr';
    
    loadQuestion();
}

// Initialize test when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTest();
});