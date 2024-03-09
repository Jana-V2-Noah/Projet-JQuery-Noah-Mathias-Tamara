 $(document).ready(function () {
    const questions = [
        { question1: "Quelle est la definition de la grandeur physique ?", options: ["Caracteristique defini par une norme et unite", "Caracteristique d'un objet ou phenomene pouvant etre mesure", "Caracteristique defini par une norme et direction (vecteur)", "oui"], answer: "Caracteristique d'un objet ou phenomene pouvant etre mesure" },
        { question2: "Qu'est ce qu'une force pressante?", options: ["une force modeliser une action mecanique de contacte exerce par un solide ", "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps", "Dosage en volume des solutions", "l'interaction physique responsable de l'attraction des corps massifs"], answer: "Il s’agit d’une force de poussée exercée lors du contact entre un fluide (un gaz ou un liquide) et un autre corps" },
        { question3: "les lignes vectorielles sont", options: ["les courbes obtenues en reliant les points où la grandeur physique étudiée à la même valeur. ", "le vecteur qui le caractérise est le même en tout point de région de l’espace étudiée : même direction, même sens et même valeur", "les courbes tangentes au vecteur champ en chacun de leurs points"], answer: "les courbes tangentes au vecteur champ en chacun de leurs points" },
        { question4: "Quel objet est tombé sur la tete de Newton", options: ["Une pomme ", "une orange", "une brique"], answer: "une pomme " },
        { question5: "Que donne le melange d'une lumiere rouge avec une lumiere verte", options: ["mangenta", "cyan", "jaune"], answer: "jaune" },

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
});()
