import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const accordionData = [
    {
      question: "Is my place right for Airbnb?",
      answer:
        "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay."
    },
    {
      question: "Do I have to host all the time?",
      answer:
        "Not at all—you control your calendar. You can host once a year, a few nights a month, or more often."
    },
    {
      question: "How much should I interact with guests?",
      answer:
        "It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests."
    }
];

const QuestionSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
      <section className="bg-[#f7f7f7] py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start">
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-start md:text-left">
                <h1 className="text-4xl font-semibold mb-4">Your questions, <br />answered</h1>
            </div>

            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left pb-12">
                {accordionData.map((item, index) => (
                <div key={index} className={`border-gray-300 ${index !== accordionData.length - 1 ? 'border-b' : ''}`}>
                    <button
                    className="w-full text-left py-4 font-semibold text-lg flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                    >
                    {item.question}
                    <FontAwesomeIcon
                        icon={openIndex === index ? faChevronUp : faChevronDown}
                        className={`transition-transform duration-300 ${openIndex === index ? 'rotate-120' : ''}`}
                    />
                    </button>
                    {openIndex === index && (
                    <div className="py-4 text-gray-600">{item.answer}</div>
                    )}
                </div>
                ))}
            </div>
            </div>

        <div className="max-w-screen-xl mx-auto bg-white rounded-lg flex flex-col md:flex-row items-center">        
            <div className="w-full md:w-1/2 h-48 md:h-500 bg-cover bg-center rounded-xl md:rounded-none" 
                style={{ borderRadius: "10px", height: "350px", backgroundImage: "url('/assets/img/bg-qust.webp')" }}>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left py-12 ">
                <h1 className="text-4xl font-semibold mb-4">Still have questions?</h1>
                <p className="mb-6">
                    Get answers from an experienced Superhost near you.
                </p>
                <button className="border border-black rounded-md px-6 py-2 text-sm hover:bg-gray-100">
                    Match with a Superhost
                </button>
            </div>
        </div>
      </section>
    );
  };
  
  export default QuestionSection;
  