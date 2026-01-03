import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to be present for the inspection?",
      answer:
        "Yes, we need someone to provide the keys and access to the vehicle, but it only takes a few minutes of your time.",
    },
    {
      question: "How long does the test take?",
      answer:
        "The actual emissions test typically takes about 10-15 minutes per vehicle.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We currently serve the greater metro area. Please contact us if you are unsure if you are in our service range.",
    },
    {
      question: "What happens if my car fails?",
      answer:
        "We will provide you with a detailed report explaining the failure. You can repair the issue and schedule a re-test with us.",
    },
    {
      question: "Do you offer fleet services?",
      answer:
        "Yes! We offer special pricing and scheduling for business fleets. Check our Pricing page for more info.",
    },
  ];

  return (
    <div className="page faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
