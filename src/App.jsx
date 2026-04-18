import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import DownloadCard from './components/DownloadCard';
import RSVP from './components/RSVP';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';

export default function App() {
  return (
    <div className="relative">
      {/* Ambient floating petals across entire page */}
      <FloatingPetals />

      {/* Fixed navigation */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero />
        <Countdown />
        <Events />
        <Venue />
        <Gallery />
        <DownloadCard />
        <RSVP />
      </main>

      <Footer />

      {/* Floating music player */}
      <MusicPlayer />
    </div>
  );
}
