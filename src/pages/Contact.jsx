export default function Contact() {
    return (
      <section id="contact" className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-1">Al Falah Islamic Centre</p>
          <p className="text-lg text-gray-700 mb-1">123 Unity St, Toronto, ON</p>
          <p className="text-lg text-gray-700 mb-1">
            Email: <a href="mailto:info@masjidalfalah.ca" className="text-blue-600 hover:underline">info@masjidalfalah.ca</a>
          </p>
          <p className="text-lg text-gray-700">Phone: (416) 123-4567</p>
        </div>
      </section>
    );
  }
  