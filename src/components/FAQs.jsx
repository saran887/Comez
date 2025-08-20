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
    <div className="bg-black">
      <Navbar/>
      <div className="bg-black pt-40 pb-40 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            FAQ's
          </h2>
          
          <div className="space-y-8 w-full max-w-25xl mx-auto pt-20">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-black/90 rounded-2xl overflow-hidden border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-10 py-8 text-left flex items-center justify-between focus:outline-none transition-colors duration-200"
                >
                  <span className="text-white text-xl font-semibold">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <FiPlus className={`w-4 h-4 text-white transition-transform duration-300 ${activeIndex === index ? 'transform rotate-45' : ''}`} />
                  </div>
                </button>
                
                <div 
                  className={`px-10 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-10' : 'max-h-0'}`}
                >
                  <div className="pt-4 text-gray-300 text-lg leading-relaxed">
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