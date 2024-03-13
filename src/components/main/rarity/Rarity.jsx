import AvatarCard from '../../misc/AvatarCard';
import RarityTitle from './RarityTitle';

const Rarity = () => {
  return (
    <>
      <div className="w-full bg-neutral">
        <section className="flex flex-col w-full py-12 mx-auto max-w-7xl px-7">
          <RarityTitle />
          <section className="flex justify-between gap-24 px-16 mt-4 max-lg:hidden">
            <div className="flex flex-col justify-center w-4/12">
              <AvatarCard />
            </div>
            <div className="flex flex-col justify-center w-4/12">
              <AvatarCard />
            </div>
            <div className="flex flex-col justify-center w-4/12">
              <AvatarCard />
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Rarity;
