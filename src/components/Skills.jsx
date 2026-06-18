const skills = [
  { name: 'Java', category: 'Langages' },
  { name: 'Python', category: 'Langages' },
  { name: 'C#', category: 'Langages' },
  { name: 'PHP', category: 'Langages' },
  { name: 'JavaScript', category: 'Langages' },
  { name: 'Spring Boot', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Laravel', category: 'Frameworks' },
  { name: 'Node.js', category: 'Frameworks' },
  { name: 'MySQL', category: 'Bases de données' },
  { name: 'PostgreSQL', category: 'Bases de données' },
  { name: 'Git / GitHub', category: 'Outils' },
  { name: 'REST API', category: 'Outils' },
  { name: 'Tailwind CSS', category: 'Frameworks' },
  { name: 'Vite', category: 'Outils' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Mes <span className="text-blue-600">compétences</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md hover:-translate-y-1 transition"
            >
              <p className="font-semibold text-sm">{skill.name}</p>
              <p className="text-xs text-gray-400 mt-1">{skill.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}