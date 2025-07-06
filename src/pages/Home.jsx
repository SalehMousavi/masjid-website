export default function Home() {
    return (
      <section
        id="home"
        className="w-screen h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('/masjid.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-lg max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Al Falah Islamic Centre
          </h2>
          <p className="text-lg md:text-xl">
            A center for prayer, learning, and community. Join us for daily prayers and events.
          </p>
        </div>
      </section>
    );
  }
  