"use client";
import React from "react";
import { RevealWrapper } from "next-reveal";

function FaqQuestions({questions}) {
  return (
    <section className="faq-questions">
      <div className="_container">
        <div className="faq-questions__body">
          {questions.map((question, index) => (
            <RevealWrapper
              origin="bottom"
              className="question-wrap"
              key={index}
            >
              <div>
                <span>{question.category}</span>
                <h2>{question.question}</h2>
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqQuestions;
