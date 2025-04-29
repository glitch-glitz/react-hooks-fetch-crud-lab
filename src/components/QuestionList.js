import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onUpdateQuestion, onDeleteQuestion }) {
  return (
    <ul>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          onUpdateQuestion={onUpdateQuestion}
          onDeleteQuestion={onDeleteQuestion}
        />
      ))}
    </ul>
  );
}

export default QuestionList;
