const Apartments = () => {
    return (
      <div className="max-w-screen-md mx-auto py-12 text-center">
        <h1 className="text-4xl font-semibold mb-8">
          Need a place where you can host? <br/>Try Airbnb-friendly apartments
        </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative">
            <img
              src="/assets/img/apartment1.webp"
              alt="Apartment 1"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <p className="text-gray-700  px-2 py-1 ">
            Nani<br/>
            Resident & Host Dallas, TX
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/img/apartment2.webp"
              alt="Apartment 2"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <p className="text-gray-700 px-3 py-1">
            Jeff and Amador<br/>
            Residents & Hosts San Diego, CA
            </p>
          </div>
          <div className="relative">
            <img
              src="/assets/img/apartment3.webp"
              alt="Apartment 3"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <p className="text-gray-700 px-3 py-1">
            Buddy<br/>
            Resident & Host Denver, CO
            </p>
          </div>
        </div>
  
        <p className="mt-12 text-lg text-gray-700 mb-8">
          We’ve partnered with apartment buildings across the US so you can rent a place to live and host on Airbnb part-time. The typical host earned $3650/year and hosted 28 nights. *
        </p>
        <p className="text-sm text-gray-500 mb-8">
          *The typical Host earnings amount represents the median amount of earnings for Hosts in US Airbnb-friendly apartment buildings between Jan 1 - Dec 31, 2023, according to internal Airbnb data for revenue earned by Hosts.
        </p>

        <button className="border border-black rounded-md px-6 py-2 text-sm hover:bg-gray-100">
          Explore cities
        </button>
      </div>
    );
  };
  
  export default Apartments;
  