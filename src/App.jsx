import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PrayerTimes from "./pages/PrayerTimes";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      <Navbar />

      <main className="pt-16 space-y-20 px-4 sm:px-6 lg:px-8">
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>

        <section id="prayer-times" className="scroll-mt-16">
          <PrayerTimes />
        </section>

        <section id="events" className="scroll-mt-16">
          <Events />
        </section>

        <section id="calendar" className="scroll-mt-16">
          <Calendar />
        </section>

        <section id="donate" className="scroll-mt-16">
          <Donate />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
