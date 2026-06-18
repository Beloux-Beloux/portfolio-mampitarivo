export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Mampitarivo Rasamoelina. Tous droits réservés.</p>
      <p className="mt-1">
        Construit avec React + Tailwind CSS • Hébergé sur Vercel
      </p>
    </footer>
  )
}