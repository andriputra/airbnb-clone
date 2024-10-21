const Feature = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Airbnb it easily with Airbnb Setup
      </h1>
      <div className="relative">
        <img
          src="/assets/img/bg-wide.webp"
          alt="Feature Image"
          className="w-full h-100 object-cover rounded-xl"
        />
        <div className="absolute inset-0 "></div>
      </div>

      <div className="text-left mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="transition">
            <h3 className="text-xl font-semibold text-gray-800">
              One-to-one guidance from a Superhost
            </h3>
            <p className="text-gray-700">
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest—by phone, video call,
              or chat.
            </p>
          </div>

          <div className="transition">
            <h3 className="text-xl font-semibold text-gray-800">
              An experienced guest for your first booking
            </h3>
            <p className="text-gray-700">
              For your first booking, you can choose to welcome an experienced
              guest who has at least three stays and a good track record on
              Airbnb.
            </p>
          </div>

          <div className="transition">
            <h3 className="text-xl font-semibold text-gray-800">
              Specialized support from Airbnb
            </h3>
            <p className="text-gray-700">
              New Hosts get one-tap access to specially trained Community
              Support agents who can help with everything from account issues to
              billing support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
