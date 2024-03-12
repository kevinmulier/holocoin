import AvatarCard from '../../misc/AvatarCard';
import TeamTitle from './TeamTitle';

const Team = () => {
  return (
    <>
      <section className="flex flex-col w-full py-12 mx-auto max-w-7xl px-7">
        <TeamTitle />
        <section className="flex justify-between gap-24 px-12 mt-4">
          <div className="flex flex-col justify-center w-3/12">
            <AvatarCard />
          </div>
          <div className="flex flex-col justify-center w-3/12">
            <AvatarCard />
          </div>
          <div className="flex flex-col justify-center w-3/12">
            <AvatarCard />
          </div>
          <div className="flex flex-col justify-center w-3/12">
            <AvatarCard />
          </div>
        </section>
      </section>
    </>
  );
};

export default Team;
