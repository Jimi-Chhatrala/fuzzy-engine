//
// www.youtube.com/@BinaryMinutes
//

// Prevent users from answering the same question multiple times.

const answeredQuestions = new Set();

function answerQuestion(questionId) {
  if (answeredQuestions.has(questionId)) {
    console.log('You already answered this question.');
  } else {
    answeredQuestions.add(questionId);
    console.log(`Answered question ${questionId}`);
  }
}

answerQuestion(1); // Answered question 1
answerQuestion(2); // Answered question 2
answerQuestion(1); // You already answered this question.
