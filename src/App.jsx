import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <header className="lg:border-b border-black/30 lg:shadow-[0.0px_4.0px_4.0px_rgba(0,0,0,0.38)] max-lg:sticky max-lg:top-0 max-lg:z-10 backdrop-blur-lg">
        <Navbar />
      </header>
      <Hero />
    </>
  );
}

export default App;
