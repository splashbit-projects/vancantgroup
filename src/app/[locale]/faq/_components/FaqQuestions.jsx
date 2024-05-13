"use client";
import React from "react";
import { faqQuestions } from "@/src/lib/faqQuestions";
import { RevealWrapper } from "next-reveal";

function FaqQuestions() {
  return (
    <section className="faq-questions">
      <div className="_container">
        <div className="faq-questions__body">
          {faqQuestions.map((question, index) => (
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
