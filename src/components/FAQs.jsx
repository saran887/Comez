import { useState } from 'react';
import Navbar from './Navbar';
import { FiPlus } from 'react-icons/fi';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {   
      question: 'How do I Receive My Payments',
      answer: 'We apply for Payment Gateway,the thing is that you have to provide your Aadhar,PAN,GST and your contact details such as e-mail,mibile number.We generate terms and conditions ,Policy Privacy.The Payment gateway verification process takes approximately three to four days ,and we will on track.We safeguard uour Information.'
    },
    {
      question: 'How da I Publish My app on Play Store & App Store',
      answer: 'We accept various payment methods including credit/debit cards, UPI, and net banking. Our secure payment gateway ensures all transactions are safe and encrypted.'
    },
    {
      question: 'How will I renew my plan',
      answer: 'Standard shipping typically takes 3-5 business days. For express delivery, please contact our customer support for more information.'
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <Navbar/>
      <div className="min-h-screen bg-black py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            FAQ's
          </h2>
          
          <div className="space-y-6 w-full">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-black/90 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none transition-colors duration-200"
                >
                  <span className="text-white text-lg font-medium">{faq.question}</span>
                  <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                    <FiPlus className={`w-3 h-3 text-white transition-transform duration-300 ${activeIndex === index ? 'transform rotate-45' : ''}`} />
                  </div>
                </button>
                
                <div 
                  className={`px-8 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-8' : 'max-h-0'}`}
                >
                  <div className="pt-2 text-white text-base leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default FAQs;