import React from 'react';
import './WhatsAppButton.css'; // Or include this in App.css

export default function WhatsAppButton() {
  // Replace with your WhatsApp number (include country code, e.g., 27 for South Africa, without '+' or spaces)
  const phoneNumber = '27705605436'; 
  const message = encodeURIComponent('Hi! I would like to get in touch regarding your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      {/* You can use an SVG icon or an image */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="whatsapp-icon"
      >
        <path
          fill="#FFF"
          d="M16 0C7.163 0 0 7.163 0 16c0 2.825.735 5.48 2.022 7.794L.526 31.474l7.925-2.072A15.932 15.932 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.016 22.842c-.352.99-1.954 1.838-2.695 1.956-.692.11-1.568.164-2.534-.144-5.83-1.85-9.638-7.734-9.932-8.118-.295-.384-2.383-3.172-2.383-6.05 0-2.878 1.507-4.291 2.042-4.876.535-.585 1.168-.732 1.558-.732.39 0 .78.004 1.115.02.358.017.84-.137 1.312 1.002.472 1.139 1.608 3.93 1.748 4.214.14.284.233.615.047.986-.186.371-.279.602-.559.93-.28.328-.588.732-.841.983-.287.284-.586.594-.252 1.164.334.57 1.482 2.447 3.181 3.962 2.185 1.94 4.025 2.54 4.605 2.824.58.284.92.236 1.26-.142.34-.378 1.46-1.703 1.85-2.288.39-.585.78-.488 1.315-.284.535.204 3.39 1.603 3.971 1.896.58.293.97.439 1.111.683.141.244.141 1.417-.211 2.407z"
        />
      </svg>
    </a>
  );
}