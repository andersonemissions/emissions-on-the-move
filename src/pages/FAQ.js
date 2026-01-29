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
      question: "Where can I get my test done?",
      answer: "Anywhere in Utah County!",
    },
    {
      question: "Do I need to be present for the inspection?",
      answer:
        "Nope! Just hand us the keys and we'll bring them back with your test result in 15 minutes or less.",
    },
    {
      question: "How long does the test take?",
      answer:
        "Once we have the keys we should be all done and on our way within 15 minutes.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "Currently we're only serving for vehicles being registered in Utah county.",
    },
    {
      question: "What happens if my car fails?",
      answer:
        "We will provide the failed report and explain why it failed and what options you have to fix it. we'll also provide a free retest within 60 days at no charge to you.",
    },
    {
      question: "Do you offer fleet services?",
      answer:
        "Yes! We offer special pricing and scheduling for business fleets. Check our Pricing page for more info or give us a call! 385-392-6701",
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
