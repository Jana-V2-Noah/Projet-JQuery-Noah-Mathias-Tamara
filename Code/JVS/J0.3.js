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
        { question: "Quelle est la definition de la grandeur physique ?", options: ["Caracteristique defini par une norme et unite", "Caracteristique d'un objet ou phenomene pouvant etre mesure", "Caracteristique defini par une norme et direction (vecteur)", "Vraie"], answer: "Caracteristique d'un objet ou phenomene pouvant etre mesure" },
        { question: "Qu'est ce qu'une force pressante?", options: ["Une force modeliser une action mecanique de contacte exerce par un solide ", "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps", "Dosage en volume des solutions", "L'interaction physique responsable de l'attraction des corps massifs"], answer: "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps" },
        { question: "Les lignes vectorielles sont", options: ["Les courbes obtenues en reliant les points où la grandeur physique étudiée à la même valeur. ", "Le vecteur qui le caractérise est le même en tout point de région de l’espace étudiée : même direction, même sens et même valeur", "Les courbes tangentes au vecteur champ en chacun de leurs points"], answer: "Les courbes tangentes au vecteur champ en chacun de leurs points" },
        { question: "Quel objet est tombé sur la tete de Newton", options: ["Une pomme ", "Une orange", "Une brique"], answer: "Une pomme " },
        { question: "Que donne le melange d'une lumiere rouge avec une lumiere verte", options: ["Mangenta", "Cyan", "Jaune"], answer: "Jaune" },
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
        let correctAnswers = 0;

        questions.forEach((questionObj, index) => {
            const selectedOption = $(`input[name="q${index}"]:checked`).val();
            if (selectedOption === questionObj.answer) {
                correctAnswers++;
            }
        });

        // Addded score as a percentage
        const score = (correctAnswers / questions.length) * 100;
        const incorrectAnswers = questions.length - correctAnswers;

        // Added display score and percentage of correct and incorrect answers
        resultContainer.html(`Score: ${score.toFixed(2)}%<br>Correct Answers: ${correctAnswers}/${questions.length} (${((correctAnswers / questions.length) * 100).toFixed(2)}%)<br>Incorrect Answers: ${incorrectAnswers}/${questions.length} (${((incorrectAnswers / questions.length) * 100).toFixed(2)}%)<br><br>`);

        // Added display result image based on score percentage
        const failImage = "platypus_fail.png"; // Fail image
        const partialImage = "platypus_partial.png"; // Partial success image
        const successImage = "platypus_success.png"; // Success image

        if (score < 50) {
            resultContainer.append(`<img src="${failImage}" alt="Fail Image">`);
        } else if (score < 75) {
            resultContainer.append(`<img src="${partialImage}" alt="Partial Success Image">`);
        } else {
            resultContainer.append(`<img src="${successImage}" alt="Success Image">`);
        }
    });
});