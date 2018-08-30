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
};
function answerIndex(a,b){
    var array = Object.values(a.quiz);
    var index = -1;
    for(var i = 0; i < array.length; i++ )
    {
        for(var k in array[i])
        {
            if(array[i][k]['question'] === b)
            {
              index = array[i][k]['options'].indexOf(array[i][k]['answer']);
              return index;
            }
        }
    }
    if(index === -1)
    {
        return 'invaild question';
    }
}
console.log(answerIndex(questions,"Which one is correct team name in NBA?"));