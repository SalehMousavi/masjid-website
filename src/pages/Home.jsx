import masjidImg from '../../public/masjid.jpg'; // adjust if needed

export default function Home() {
  return (
    <section
      id="home"
      className="w-screen h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${masjidImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white/30 backdrop-blur-sm px-4 py-6 sm:px-6 sm:py-8 rounded-xl shadow-lg w-[90%] max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          Welcome to Al Falah Islamic Centre
        </h2>
        <p className="text-base sm:text-lg md:text-xl">
          A center for prayer, learning, and community. Join us for daily prayers and events.
        </p>
      </div>
    </section>
  );
}
