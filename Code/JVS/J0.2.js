$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Define quiz questions
    const questions = [
        { question: "Quelle est la definition de la grandeur physique ?", options: ["Caracteristique defini par une norme et unite", "Caracteristique d'un objet ou phenomene pouvant etre mesure", "Caracteristique defini par une norme et direction (vecteur)", "oui"], answer: "Caracteristique d'un objet ou phenomene pouvant etre mesure" },
        { question: "Qu'est ce qu'une force pressante?", options: ["une force modeliser une action mecanique de contacte exerce par un solide ", "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps", "Dosage en volume des solutions", "l'interaction physique responsable de l'attraction des corps massifs"], answer: "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps" },
        { question: "les lignes vectorielles sont", options: ["les courbes obtenues en reliant les points où la grandeur physique étudiée à la même valeur. ", "le vecteur qui le caractérise est le même en tout point de région de l’espace étudiée : même direction, même sens et même valeur", "les courbes tangentes au vecteur champ en chacun de leurs points"], answer: "les courbes tangentes au vecteur champ en chacun de leurs points" },
        { question: "Quel objet est tombé sur la tete de Newton", options: ["Une pomme ", "une orange", "une brique"], answer: "Une pomme " },
        { question: "Que donne le melange d'une lumiere rouge avec une lumiere verte", options: ["mangenta", "cyan", "jaune"], answer: "jaune" },
    ];

    const quizContainer = $("#question-container");
    const resultContainer = $("#result-container");
    const submitButton = $("#submit-btn");

    // Generate questions and options
    questions.forEach((questionObj, index) => {
        const options = questionObj.options.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label><br>`);
        quizContainer.append(`<div class="question">${questionObj.question}<br>${options.join("")}</div>`);
    });

    // Handle click on Submit button
    submitButton.click(function () {
        let score = 0;
        let wrongAnswers = []; // Array to store wrong answers

        questions.forEach((questionObj, index) => {
            const selectedOption = $(`input[name="q${index}"]:checked`).val();
            if (selectedOption === questionObj.answer) {
                score++;
            } else {
                wrongAnswers.push({
                    question: questionObj.question,
                    correctAnswer: questionObj.answer,
                    userAnswer: selectedOption
                });
            }
        });

        let resultHTML = `Score: ${score}/${questions.length}<br>`;
        if (wrongAnswers.length > 0) {
            resultHTML += "<br>Wrong answers:<br>";
            wrongAnswers.forEach(answer => {
                resultHTML += `Question: ${answer.question}<br>`;
                resultHTML += `Correct Answer: ${answer.correctAnswer}<br>`;
                resultHTML += `Your Answer: ${answer.userAnswer}<br><br>`;
            });
        }

        resultContainer.html(resultHTML);
    });
});