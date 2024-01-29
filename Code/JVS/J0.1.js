$(document).ready(function () {
    const questions = [
        { question: "Quelle est la capitale du Canada?", options: ["Ottawa", "Toronto", "Montreal", "Vancouver"], answer: "Ottawa" },
        { question: "Quel est l'aéroport principal de Montreal?", options: ["YUL", "YVR", "YYZ", "YOW"], answer: "YUL" },
        // Ajoute d'autres questions de la même manière
    ];

    const quizContainer = $("#question-container");
    const resultContainer = $("#result-container");
    const submitButton = $("#submit-btn");

    // Génère les questions et options
    questions.forEach((question, index) => {
        const options = question.options.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label><br>`);
        quizContainer.append(`<div class="question">${question.question}<br>${options.join("")}</div>`);
    });

    // Gère le clic sur le bouton Soumettre
    submitButton.click(function () {
        let score = 0;
        questions.forEach((question, index) => {
            const selectedOption = $(`input[name="q${index}"]:checked`).val();
            if (selectedOption === question.answer) {
                score++;
            }
        });

        resultContainer.html(`Score: ${score}/${questions.length}`);
    });
});
