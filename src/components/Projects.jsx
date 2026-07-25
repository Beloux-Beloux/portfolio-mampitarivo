const projects = [
  {
    title: 'Gestion hôtelière multi-tenant',
    stack: 'PHP • Laravel • NextTS • MySQL',
    description:
      'Application web de gestion hôtelière multi-tenant avec gestion des hôtels, chambres, réservations, clients et tâches ménagères.',
    github: 'https://github.com/Beloux-Beloux/hotel-project.git',
    demo: 'https://hotel-web-vert.vercel.app/',
  },
  {
    title: "Gestion d'emploi du temps",
    stack: 'ReactTS • TailwindCSS • ExpressJS • PostgreSQL',
    description:
      'Application web de planification interactive avec gestion des professeurs, salles, niveaux, groupes, contraintes d\'horaires et export PDF.',
    github: 'https://github.com/Beloux-Beloux/gestion-emploi-du-temps.git',
    demo: 'https://gestion-emploi-du-temps-eta.vercel.app',
  },
  {
    title: 'Gestion de restaurant',
    stack: 'Java • Jakarta Server Pages • Maven • PostgreSQL',
    description:
      'Application de gestion de restaurant avec gestion des plats, commandes, reservations et tables.',
    github: 'https://github.com/Beloux-Beloux/restaurant_project_jsp.git',
    demo: 'https://restaurant-app-hhc3.onrender.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mes <span className="text-blue-600">projets</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-xl p-6 hover:shadow-lg transition flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-xs text-blue-600 font-mono mb-3">
                {project.stack}
              </p>
              <p className="text-gray-600 text-sm flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  className="text-sm border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Démo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
