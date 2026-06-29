import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Prices from "./components/Prices";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import Weather from "./components/Weather";
import Explore from "./components/Explore";
import Reviews from "./components/Reviews";
import WhyBookUs from "./components/WhyBookUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <Hero />

      <Gallery />

      <Features />

      <Highlights />

      <Stats />

      <Prices />

      <AvailabilityCalendar />

      <Weather />

      <Explore />

      <WhyBookUs />

      <Reviews />

      <Contact />

      <Footer />
    </main>
  );
}