var questions = {
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
}

  console.log(questions.quiz.sport.q1.question);
  console.log(questions.quiz.sport.q1.options[3]);
  console.log(questions.quiz.sport.q1.answer);
  //console.log(questions.options.join(', '));

    // function answerIndex(a,b) {
    //     return `${pet.name} the ${pet.species} like ${pet.petfoods.likes.join(', ')} and dislikes ${pet.petfoods.dislikes.join(', ')}`
    // }
    
    // pets.forEach(function(pet) {
    //     console.log(answerIndex(a,b));
    // });