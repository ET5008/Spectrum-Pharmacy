import { useState } from 'react';

const Refill = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    rxNumber: '',
    deliveryOption: 'pickup',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Refill request submitted:', formData);
    alert('Thank you! Your refill request has been received. We will contact you shortly.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Prescription Refill
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Quickly and easily request your prescription refill online
          </p>
        </div>
      </section>

      {/* Refill Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Refill Request Form</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below to request a prescription refill. We'll process your request
              and contact you when it's ready.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Prescription Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prescription Information</h3>

                <div className="mb-6">
                  <label htmlFor="rxNumber" className="block text-gray-700 font-semibold mb-2">
                    Prescription (Rx) Number *
                  </label>
                  <input
                    type="text"
                    id="rxNumber"
                    name="rxNumber"
                    value={formData.rxNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                    placeholder="Enter Rx number from your bottle"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    You can find this number on your prescription label
                  </p>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delivery Options</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="pickup"
                      name="deliveryOption"
                      value="pickup"
                      checked={formData.deliveryOption === 'pickup'}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                    />
                    <label htmlFor="pickup" className="ml-3 text-lg text-gray-700">
                      <span className="font-semibold">Pickup</span> - I'll pick up at the pharmacy
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="delivery"
                      name="deliveryOption"
                      value="delivery"
                      checked={formData.deliveryOption === 'delivery'}
                      onChange={handleChange}
                      className="w-5 h-5 text-orange-500 focus:ring-orange-500"
                    />
                    <label htmlFor="delivery" className="ml-3 text-lg text-gray-700">
                      <span className="font-semibold">Free Delivery</span> - Deliver to my address
                    </label>
                  </div>
                </div>

                {formData.deliveryOption === 'delivery' && (
                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required={formData.deliveryOption === 'delivery'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1">
                        <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required={formData.deliveryOption === 'delivery'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-gray-700 font-semibold mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required={formData.deliveryOption === 'delivery'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                          placeholder="ST"
                        />
                      </div>

                      <div>
                        <label htmlFor="zip" className="block text-gray-700 font-semibold mb-2">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          required={formData.deliveryOption === 'delivery'}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-lg resize-none"
                  placeholder="Any special instructions or questions?"
                ></textarea>
              </div>

              {/* Privacy Notice */}
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Privacy & Security</h4>
                    <p className="text-sm text-gray-700">
                      Your information is protected and HIPAA compliant. We will only use this
                      information to process your prescription refill request.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
              >
                Submit Refill Request
              </button>
            </form>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-4">Prefer to call or visit?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call (123) 456-7890
              </a>
              <a
                href="/contact"
                className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refill;
