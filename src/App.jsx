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
    <div className="font-sans text-gray-800 bg-white"> {/* NOT bg-black or gray-900 */}
      <Navbar />
      <main className="pt-20 space-y-24">
        <Home />
        <PrayerTimes />
        <Events />
        <Calendar />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
