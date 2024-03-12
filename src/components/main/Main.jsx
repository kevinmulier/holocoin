import VideoPlayerMain from './VideoPlayer';
import About from './about/About';
import Rarity from './rarity/Rarity';
import Team from './team/Team';

const Main = () => {
  return (
    <>
      <About />
      <VideoPlayerMain />
      <Team />
      <Rarity />
    </>
  );
};

export default Main;
