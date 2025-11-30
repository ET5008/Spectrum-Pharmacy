const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Spectrum Pharmacy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted community pharmacy partner since 2000
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Spectrum Pharmacy was founded with a simple mission: to provide personalized,
              compassionate pharmaceutical care to our community. For over two decades, we've
              been dedicated to serving our neighbors with the highest standards of professionalism
              and care.
            </p>
            <p>
              As a family-owned pharmacy, we understand that healthcare is personal. We take the
              time to know our patients, understand their unique needs, and provide individualized
              attention that larger chain pharmacies simply cannot match.
            </p>
            <p>
              Our experienced pharmacists are not just medication dispensers—they're healthcare
              partners who are committed to helping you achieve the best possible health outcomes.
              We believe in building lasting relationships based on trust, expertise, and genuine care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide exceptional pharmaceutical care and health services that improve the
                quality of life for every individual we serve. We are committed to being accessible,
                trustworthy, and dedicated to your wellness journey.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Patient-centered care</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Professional integrity</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Community commitment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Innovation and excellence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍⚕️',
                title: 'Expert Pharmacists',
                description: 'Highly trained professionals with years of experience in pharmaceutical care'
              },
              {
                icon: '🏡',
                title: 'Family Owned',
                description: 'Independent, family-operated pharmacy that truly cares about our community'
              },
              {
                icon: '⏱️',
                title: 'Fast Service',
                description: 'Quick prescription processing and same-day filling when possible'
              },
              {
                icon: '🚚',
                title: 'Free Delivery',
                description: 'Complimentary delivery service for your convenience and safety'
              },
              {
                icon: '💬',
                title: 'Personal Attention',
                description: 'One-on-one consultations and medication counseling available anytime'
              },
              {
                icon: '🔐',
                title: 'Privacy First',
                description: 'HIPAA compliant with the highest standards for protecting your information'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Licensed & Certified
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Your health and safety are our top priorities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
            <div className="bg-blue-700 p-6 rounded-lg">
              <p className="font-semibold mb-2">Licensed Pharmacy</p>
              <p className="text-blue-200">License #: [To be added]</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <p className="font-semibold mb-2">DEA Registration</p>
              <p className="text-blue-200">DEA #: [To be added]</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <p className="font-semibold mb-2">Professional Member</p>
              <p className="text-blue-200">APhA & NCPA</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <p className="font-semibold mb-2">Years in Service</p>
              <p className="text-blue-200">Since 2000</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience the Spectrum Difference
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our pharmacy family today and discover personalized care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/refill"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Transfer Prescription
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
