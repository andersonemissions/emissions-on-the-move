import React from "react";
import { MessageCircle } from "lucide-react";

const TextUsButton = () => {
  // Replace with the actual business phone number
  const phoneNumber = "3855354917";

  return (
    <a href={`sms:${phoneNumber}`} className="text-us-btn" aria-label="Text Us">
      <div className="pulsing-ring"></div>
      <MessageCircle size={20} />
      <span className="text-us-label">Text Us</span>
    </a>
  );
};

export default TextUsButton;
