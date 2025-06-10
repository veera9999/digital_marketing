export default function Portfolio() {
  const projects = [
    { title: "Project 1", image: "https://via.placeholder.com/300" },
    { title: "Project 2", image: "https://via.placeholder.com/300" },
    { title: "Project 3", image: "https://via.placeholder.com/300" },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-ferrariRed">Portfolio</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-xl font-bold text-ferrariRed">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
