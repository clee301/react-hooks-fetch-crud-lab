import React, { useEffect, useState } from "react";
import QuestionForm from './QuestionForm';
import QuestionItem from './QuestionItem';

function QuestionList() {

  const [question, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((r) => r.json())
      .then((questions) => setQuestions(questions))
  }, [])

  function handleDeleteItem(deletedItem) {
    const updatedItems = question.filter((q) => q.id !== deletedItem.id);
    setQuestions(updatedItems);
  }



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{question.map((q, index) => {

        return (
          <QuestionItem key={q.id} question={q} onDeleteItem={handleDeleteItem} />
        )
      })
        
        }
        
      </ul>
    </section>
  );
}

export default QuestionList;
