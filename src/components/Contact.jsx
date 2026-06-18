export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">
          Me <span className="text-blue-600">contacter</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Vous avez un projet ou une opportunité ? N'hésitez pas à m'écrire !
        </p>

        <form
          action="https://formspree.io/f/ton-identifiant"
          method="POST"
          className="space-y-4 text-left"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Envoyer
          </button>
        </form>

        <div className="mt-8 text-sm text-gray-500">
          <p>Email : rasamoelinamampitarivo@gmail.com</p>
          <p>LinkedIn : linkedin.com/in/mampitarivo-rasamoelina</p>
        </div>
      </div>
    </section>
  )
}