const Delivery = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🚚</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Free Delivery Service
            </h1>
            <p className="text-xl md:text-2xl text-green-100">
              Get your medications delivered safely to your door at no cost
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Delivery Features
            </h2>
            <p className="text-xl text-gray-600">
              Convenient, safe, and always free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🆓',
                title: 'Completely Free',
                description: 'No delivery fees, no minimum order, no hidden costs'
              },
              {
                icon: '📅',
                title: 'Flexible Scheduling',
                description: 'Choose delivery windows that work for your schedule'
              },
              {
                icon: '🔒',
                title: 'Secure & Safe',
                description: 'HIPAA-compliant handling and contactless options'
              },
              {
                icon: '📍',
                title: 'Track Your Order',
                description: 'Real-time updates on your delivery status'
              },
              {
                icon: '⚡',
                title: 'Same-Day Available',
                description: 'Same-day delivery for urgent prescriptions when possible'
              },
              {
                icon: '💬',
                title: 'Easy Communication',
                description: 'Text or call notifications when delivery is on the way'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting your medications delivered is easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Submit Your Prescription',
                description: 'Send us your prescription online, by phone, or have your doctor send it directly'
              },
              {
                step: '2',
                title: 'We Prepare Your Order',
                description: 'Our pharmacists carefully fill your prescription and prepare it for delivery'
              },
              {
                step: '3',
                title: 'Delivered to Your Door',
                description: 'Receive your medications at your preferred time with tracking updates'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="bg-green-600 text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Area */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delivery Area
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We proudly serve the local community with free delivery. Contact us to confirm we deliver to your area.
          </p>
          <div className="bg-gray-100 p-8 rounded-xl">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Delivery Radius:</strong> To be determined based on your location
            </p>
            <p className="text-lg text-gray-700 mb-6">
              <strong>Delivery Days:</strong> Monday - Saturday
            </p>
            <a
              href="tel:+1234567890"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg inline-block"
            >
              Call to Check Your Area
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Sign up for free delivery today and experience the convenience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/refill"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Delivery
            </a>
            <a
              href="/contact"
              className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-900 transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
