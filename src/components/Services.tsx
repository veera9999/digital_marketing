export default function Services() {
  const services = [
    { title: "SEO", description: "Boost your search engine rankings." },
    { title: "PPC", description: "Drive targeted traffic with paid ads." },
    {
      title: "Social Media",
      description: "Engage your audience on social platforms.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-ferrariGold">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-ferrariRed">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-ferrariRed">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
