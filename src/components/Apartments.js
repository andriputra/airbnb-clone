const Apartments = () => {
  return (
    <div className="max-w-screen-lg mx-auto py-12 text-center px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 lg:text-[2.8rem] lg:leading-[1.2] ">
        Need a place where you can host? <br />Try Airbnb-friendly apartments
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative">
          <img
            src="/assets/img/apartment1.webp"
            alt="Apartment 1"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <p className="mt-2 text-gray-900 font-semibold text-sm">
            Nani<br />
            Resident & Host Dallas, TX
          </p>
        </div>
        <div className="relative">
          <img
            src="/assets/img/apartment2.webp"
            alt="Apartment 2"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <p className="mt-2 text-gray-900 font-semibold text-sm">
            Jeff and Amador<br />
            Residents & Hosts San Diego, CA
          </p>
        </div>
        <div className="relative">
          <img
            src="/assets/img/apartment3.webp"
            alt="Apartment 3"
            className="w-full h-64 object-cover rounded-2xl"
          />
          <p className="mt-2 text-gray-900 font-semibold text-sm">
            Buddy<br />
            Resident & Host Denver, CO
          </p>
        </div>
      </div>

      <p className="mt-12 text-lg text-gray-900 mb-8">
        We’ve partnered with apartment buildings across the US so you can rent a place to live and host on Airbnb part-time. The typical host earned <span className="font-bold">$3650/year</span> and hosted 28 nights. *
      </p>
      <p className="text-sm text-gray-800 mb-8 px-4">
        *The typical Host earnings amount represents the median amount of earnings for Hosts in US Airbnb-friendly apartment buildings between Jan 1 - Dec 31, 2023, according to internal Airbnb data for revenue earned by Hosts.
      </p>

      <button className="border border-black rounded-md px-6 py-2 text-sm hover:bg-gray-100">
        Explore cities
      </button>
    </div>
  );
};

export default Apartments;