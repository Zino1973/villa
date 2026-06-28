import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Prices from "./components/Prices";
import BookingCalendar from "./components/BookingCalendar";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import Explore from "./components/Explore";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <Navbar />

      <Hero />

      <Gallery />

      <Features />

      <Highlights />

      <Prices />

      <AvailabilityCalendar />

      <Explore />

      <Reviews />

      <Contact />

      <Footer />
    </main>
  );
}