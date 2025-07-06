export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
          Contact Us
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-2">
          Al Falah Islamic Centre
        </p>
        {/* Uncomment and customize the address if needed */}
        {/* <p className="text-base sm:text-lg text-gray-700 mb-2">
          123 Unity St, Toronto, ON
        </p> */}
        <p className="text-base sm:text-lg text-gray-700 mb-2">
          Email:{' '}
          <a
            href="mailto:info@masjidalfalah.ca"
            className="text-blue-600 hover:underline"
          >
            info@masjidalfalah.ca
          </a>
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          Phone: (416) 123-4567
        </p>
      </div>
    </section>
  );
}
