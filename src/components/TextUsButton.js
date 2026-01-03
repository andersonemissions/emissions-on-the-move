import React from "react";
import { MessageCircle } from "lucide-react";

const TextUsButton = () => {
  // Replace with the actual business phone number
  const phoneNumber = "5551234567";

  return (
    <a href={`sms:${phoneNumber}`} className="text-us-btn" aria-label="Text Us">
      <MessageCircle size={24} />
      <span className="text-us-label">Text Us</span>
    </a>
  );
};

export default TextUsButton;
