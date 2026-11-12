export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
    >
      <img
        src="./images/profile.png"
        alt="Photo de profil"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Bonjour, je suis{' '}
        <span className="text-blue-600">Mampitarivo Rasamoelina</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
        Développeur Full Stack | Java • Spring • React • PHP • Laravel |
        Passionné par le web et le mobile
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Me contacter
        </a>
        <a
          href="./files/CV_Rasamoelina.pdf"
          download
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
        >
          Télécharger mon CV
        </a>
      </div>
    </section>
  )
}