import React from "react";

const WhatsAppButton = ({ phoneNumber, userName, productName, imageUrl }) => {
  // Construct the message based on the template
  const templateMessage = `Hello ${userName},\n\nWe noticed you're interested in *${productName}*.\nCheck it out here: https://youthforindia.org/
  \n\n![Product Image](${imageUrl})
  \n\nLet us know if you have any questions!`;

  // URL encode the message
  const encodedMessage = encodeURIComponent(templateMessage);

  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button>Contact Us on WhatsApp</button>
    </a>
  );
};

export default WhatsAppButton;
