const StoreInfoBanner = () => {
  // Store information - can be moved to a config file or fetched from an API
  const storeInfo = {
    storeNumber: "#1234",
    fax: "(123) 456-7891",
    hours: "Mon-Fri: 9AM-7PM | Sat: 9AM-5PM | Sun: Closed",
    address: "123 Main Street, City, State 12345"
  };

  return (
    <div className="bg-gray-50 border-t border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-gray-600">
          {/* Store Number */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            <span className="font-medium text-gray-700">Store {storeInfo.storeNumber}</span>
          </div>

          <span className="hidden md:inline text-gray-300">|</span>

          {/* Fax */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <span>Fax: {storeInfo.fax}</span>
          </div>

          <span className="hidden md:inline text-gray-300">|</span>

          {/* Hours */}
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden lg:inline">{storeInfo.hours}</span>
            <span className="lg:hidden">Mon-Fri: 9AM-7PM</span>
          </div>

          <span className="hidden xl:inline text-gray-300">|</span>

          {/* Address */}
          <div className="hidden xl:flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{storeInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoBanner;
