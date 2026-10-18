function quiz() {
    let questions = ["color", "planet", "animal"];
    let answers = ["blue", "earth", "cat"];

    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        let tries = 0;
        let correct = false;

        while (tries < 3 && correct === false) {
            let userAnswer = prompt("What is the " + questions[i] + "?");

            if (userAnswer.toLowerCase() === answers[i]) {
                alert("Correct!");
                score += 10;
                correct = true;
            } else {
                alert("Incorrect, try again.");
                tries++;
            }
        }
    }

    return score;
}
