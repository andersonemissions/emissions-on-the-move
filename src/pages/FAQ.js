import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`faq-card ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-trigger">
        <span className="faq-question">{question}</span>
        <ChevronDown size={20} className="faq-icon" />
      </div>
      <div
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
  const faqs = [
    {
      question: "Do you do registration and stickers as well?",
      answer:
        "Currently we are working with the state to get licensed to distribute tags, in the meantime after your passing emissions test we provide simple instructions to complete your registration and receive your tags in the mail.",
    },
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
      question: "What areas do you serve?",
      answer:
        "We test for vehicles being registered anywhere in Utah! However we only perform tests within the boundaries of Utah County",
    },
    {
      question: "What happens if my car fails?",
      answer:
        "We will print the failed report, explain it, and provide a list of potential solutions. We’ll also provide a complimentary retest within 15 days at no cost to you!",
    },
    {
      question: "Do you offer fleet services?",
      answer:
        "Yes! We offer special pricing and scheduling for business fleets. Check our Pricing page for more info or give us a call! 385-392-6701",
    },
  ];

  return (
    <div className="page faq-page page-fade-in">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-wrapper">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
