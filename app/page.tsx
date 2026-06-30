import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Stats from "./components/Stats";
import Prices from "./components/Prices";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import Weather from "./components/Weather";
import GoogleReviews from "./components/GoogleReviews";
import Explore from "./components/Explore";
import WhyBookUs from "./components/WhyBookUs";
import InstagramFeed from "./components/InstagramFeed";
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

      <Stats />

      <Prices />

      <AvailabilityCalendar />

      <Weather />

      <GoogleReviews />

      <Explore />

      <WhyBookUs />

      <InstagramFeed />

      <Contact />

      <Footer />
    </main>
  );
}