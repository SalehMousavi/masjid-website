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

        <p className="text-base sm:text-lg text-gray-700 mb-2">
          Email:{' '}
          <a
            href="mailto:info@masjidalfalah.ca"
            className="text-blue-600 hover:underline"
          >
            info@masjidalfalah.ca
          </a>
        </p>

        <p className="text-base sm:text-lg text-gray-700 mb-2">
          Phone: (416) 123-4567
        </p>

        <p className="text-base sm:text-lg text-gray-700 mt-4 flex items-center justify-center gap-3">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-8 h-8"
  />
  <a
    href="https://chat.whatsapp.com/YOUR-GROUP-LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-700 hover:underline font-medium"
  >
    Click here to join our WhatsApp Group
  </a>
</p>


      </div>
    </section>
  );
}
