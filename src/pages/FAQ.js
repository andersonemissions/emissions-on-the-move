import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import SEO from "../components/SEO";
import faqs from "../data/faqs";

const FAQItem = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className={`faq-card ${isOpen ? "open" : ""}`}>
      <button
        type="button"
        className="faq-trigger"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="faq-question">{question}</span>
        <ChevronDown size={20} className="faq-icon" aria-hidden="true" />
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="faq-content"
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="faq-body">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://www.emissionsonthemove.com/faq/#faq",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="page faq-page page-fade-in">
      <SEO path="/faq/" structuredData={faqSchema} />
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} index={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
