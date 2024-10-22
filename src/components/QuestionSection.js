import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const accordionData = [
  {
    question: "Is my place right for Airbnb?",
    answer: "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay."
  },
  {
    question: "Do I have to host all the time?",
    answer: "Not at all—you control your calendar. You can host once a year, a few nights a month, or more often."
  },
  {
    question: "How much should I interact with guests?",
    answer: "It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests."
  },
  {
    question: "Any tips on being a great Airbnb Host?",
    answer: "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it’s not required."
  },
  {
    question: "What are Airbnb’s fees?",
    answer: "Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas, Airbnb collects and pays sales and tourism taxes automatically on your behalf as well."
  }
];

const QuestionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f7f7f7] py-[5rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start px-4">
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-start md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Your questions, <br />answered</h1>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left pb-12">
          {accordionData.map((item, index) => (
            <div key={index} className={`border-gray-300 ${index !== accordionData.length - 1 ? 'border-b' : ''}`}>
              <button
                className="w-full text-left py-4 text-[1.25rem] md:text-[1.5rem] flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-120' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="py-4 text-gray-600 text-sm md:text-base">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto bg-white rounded-[15px] flex flex-col md:flex-row items-center my-8">
        <div className="w-full md:w-1/2 h-48 md:h-80 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url('/assets/img/bg-qust.webp')" }}>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left py-12 ">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Still have questions?</h1>
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
