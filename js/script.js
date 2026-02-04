// script.js
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});

function loadQuiz() {
    const quizData = [
        {
            question: "What is Newton's Third Law of Motion?",
            options: [
                "For every action, there is an equal and opposite reaction (counter force).",
                "An object at rest stays at rest unless acted upon by an external force.",
                "Force equals mass times acceleration.",
                "Energy cannot be created or destroyed."
            ],
            answer: 0
        },
        {
            question: "In physics, what is a counter force also known as?",
            options: [
                "Reaction force",
                "Applied force",
                "Frictional force",
                "Gravitational force"
            ],
            answer: 0
        },
        {
            question: "When you push against a wall, what pushes back?",
            options: [
                "The wall exerts a counter force on you.",
                "Gravity pulls you down.",
                "Air resistance opposes your motion.",
                "Nothing pushes back."
            ],
            answer: 0
        },
        {
            question: "In rocketry, what provides the counter force for liftoff?",
            options: [
                "The expulsion of exhaust gases downward.",
                "The Earth's magnetic field.",
                "Wind resistance.",
                "Solar energy."
            ],
            answer: 0
        },
        {
            question: "Why do swimmers push water backward?",
            options: [
                "To create a counter force that propels them forward.",
                "To reduce buoyancy.",
                "To increase drag.",
                "To cool down."
            ],
            answer: 0
        }
    ];

    const quizContainer = document.getElementById('quiz');

    quizData.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="question${index}" value="${optIndex}">
                ${option}
            `;
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const quizData = [
        // Same quizData as above, repeated for answer checking
        { answer: 0 },
        { answer: 0 },
        { answer: 0 },
        { answer: 0 },
        { answer: 0 }
    ];

    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            score++;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    if (score === quizData.length) {
        resultDiv.innerHTML += ' Perfect score! You understand counter forces well.';
    } else if (score > quizData.length / 2) {
        resultDiv.innerHTML += ' Good job! Keep learning.';
    } else {
        resultDiv.innerHTML += ' Try again to improve your knowledge on counter forces.';
    }
}