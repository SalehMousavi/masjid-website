export default function Donate() {
    return (
      <section id="donate" className="bg-green-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Support the Masjid</h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700">
          Your generous donations help us maintain the masjid and offer programs to our community.
        </p>
        <a
        href="https://your-donation-link.com"
        className="bg-green-700 text-white no-underline px-6 py-3 rounded-lg text-lg hover:bg-green-800 transition"
        target="_blank"
        rel="noopener noreferrer"
        >
        Donate Now
        </a>


      </section>
    );
  }
  