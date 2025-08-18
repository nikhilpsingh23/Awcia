import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+919820982115'; 
  const message = 'Hello! I would like to know more about AICWA Foundation.'; 

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-14 right-2 z-50 bg-green-500 text-white p-4 rounded-full 
                 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 
                 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
                 group md:p-5 animate-glow"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl drop-shadow-[0_0_6px_rgba(34,197,94,0.9)]" />
      <span className="absolute right-full mr-3 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
