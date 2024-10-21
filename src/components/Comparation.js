import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const data = [
  {
    title: "Guest identity verification",
    description: "Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Reservation screening",
    description: "Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "$3M damage protection",
    description: "Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialized protections:",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Art & valuables",
    description: "",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Pet damage",
    description: "",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Auto & boat",
    description: "",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Income loss",
    description: "",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "Deep cleaning",
    description: "",
    airbnbStatus: faCheck,
    competitorsStatus: faTimes,
  },
  {
    title: "$1M liability insurance",
    description: "You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.",
    airbnbStatus: faCheck,
    competitorsStatus: faCheck,
  },
];

const Comparation = () => {
  return (
    <div className="max-w-screen-md mx-auto py-6">
      <img 
        src="/assets/img/logo-img.webp" 
        alt="Placeholder" 
        className="w-1/6 h-auto mx-auto" 
      />
      <h2 className="text-4xl font-semibold mb-4 text-center">Airbnb it with top‑to‑bottom protection</h2>

      <table className="min-w-full table-auto">
        <thead>
          <tr className="text-left">
            <th className="px-6 py-3 text-sm font-semibold text-gray-600"></th>
            <th className="px-6 py-3 text-lg font-semibold text-gray-600">Airbnb</th>
            <th className="px-6 py-3 text-lg font-semibold text-gray-600">Competitors</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="px-6 py-4 text-gray-700">
                <h2 className="text-lg font-semibold text-gray-600">{item.title}</h2>
                <p>{item.description}</p>
              </td>
              <td className="px-6 py-4 text-center text-lg">
                <FontAwesomeIcon 
                  icon={item.airbnbStatus} 
                  className={item.airbnbStatus === faCheck ? 'text-green-500' : 'text-red-500'} 
                />
              </td>
              <td className="px-6 py-4 text-center text-lg">
                <FontAwesomeIcon 
                  icon={item.competitorsStatus} 
                  className={item.competitorsStatus === faCheck ? 'text-green-500' : 'text-red-500'} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Comparation;
