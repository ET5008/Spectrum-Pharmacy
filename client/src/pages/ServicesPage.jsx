const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Prescription Filling & Refills',
      icon: '💊',
      features: [
        'New prescription processing',
        'Prescription transfers from other pharmacies',
        'Online refill requests',
        'Automatic refill reminders',
        'Same-day filling when possible'
      ]
    },
    {
      id: 2,
      title: 'Free Delivery Service',
      icon: '🚚',
      featured: true,
      features: [
        'Complimentary home delivery',
        'No minimum order required',
        'Scheduled delivery windows',
        'Contactless delivery options',
        'Track delivery status online'
      ]
    },
    {
      id: 3,
      title: 'Medication Therapy Management',
      icon: '📋',
      features: [
        'Comprehensive medication reviews',
        'Drug interaction checks',
        'Side effect consultations',
        'Medication optimization',
        'Cost-saving recommendations'
      ]
    },
    {
      id: 4,
      title: 'Immunizations & Vaccinations',
      icon: '💉',
      features: [
        'Flu shots',
        'COVID-19 vaccines',
        'Pneumonia vaccines',
        'Shingles vaccines',
        'Travel vaccinations',
        'Walk-ins welcome or by appointment'
      ]
    },
    {
      id: 5,
      title: 'Medication Synchronization',
      icon: '🗓️',
      features: [
        'Align all refills to one pickup date',
        'Reduce multiple pharmacy trips',
        'Better medication adherence',
        'Simplified medication management'
      ]
    },
    {
      id: 6,
      title: 'Over-the-Counter Consultations',
      icon: '🏥',
      features: [
        'Expert advice on OTC medications',
        'Supplement interactions',
        'Product recommendations',
        'Health screening advice'
      ]
    },
    {
      id: 7,
      title: 'Compliance Packaging',
      icon: '📦',
      features: [
        'Blister packs organized by date/time',
        'Ideal for multiple medications',
        'Reduces medication errors',
        'Improves adherence'
      ]
    },
    {
      id: 8,
      title: 'Medication Disposal',
      icon: '♻️',
      features: [
        'Safe disposal of expired medications',
        'Proper handling of controlled substances',
        'Environmental protection',
        'Medication take-back services'
      ]
    },
    {
      id: 9,
      title: 'Health Monitoring Services',
      icon: '📊',
      features: [
        'Blood pressure checks',
        'Blood glucose testing',
        'Cholesterol screening',
        'Weight management support'
      ]
    },
    {
      id: 10,
      title: 'Diabetes Care & Supplies',
      icon: '🩺',
      features: [
        'Diabetic testing supplies',
        'Insulin and supplies',
        'Continuous glucose monitors (CGM)',
        'Diabetes education and support'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Pharmacy Services
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            From prescription filling to specialized care, we're here to support your health journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 ${
                  service.featured ? 'ring-2 ring-green-500' : ''
                }`}
              >
                {service.featured && (
                  <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Featured Service
                  </div>
                )}
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Better Pharmacy Care?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today or transfer your prescriptions to get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/refill"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
            >
              Refill Prescription
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
