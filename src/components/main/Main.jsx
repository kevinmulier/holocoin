import VideoPlayerMain from './VideoPlayer';
import About from './about/About';
import Contact from './contact/Contact';
import Rarity from './rarity/Rarity';
import Team from './team/Team';

const Main = () => {
  return (
    <>
      <About />
      <VideoPlayerMain />
      <Team />
      <Rarity />
      <Contact />
    </>
  );
};

export default Main;
