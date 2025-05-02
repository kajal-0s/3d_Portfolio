import { skills } from "../constants";

const About = () => {
  return (
    <section className='ml-4 sm:ml-6 md:ml-10 lg:ml-20 max-container px-4 sm:px-6 md:px-10 lg:px-20'>
      <h1 className='head-text text-blue-900 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
        Hello, I'm{" "}
        <span className='blue-gradient_text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-red-900 font-bold drop-shadow'>
          Kajal
        </span>{" "}
        👋
      </h1>

      <div className='mt-4 sm:mt-5 flex flex-col gap-3 text-lg sm:text-xl font-semibold'>
        <p>
          "Kajal, a visionary in code, weaving logic into seamless experiences—building the future, one app at a time. 🚀✨"
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text font-bold text-2xl sm:text-3xl lg:text-4xl text-blue-900'>My Skills</h3>

        <div className='mt-9 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10'>
          {skills.map((skill) => (
            <div className='block-container w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-2/3 h-2/3 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10 sm:py-16'>
        <h3 className='subhead-text font-bold text-xl sm:text-2xl md:text-3xl'>
          Work Experience //
        </h3>
        <div className='mt-5 flex flex-col gap-3 font-semibold text-slate-500 text-base sm:text-lg'>
          <p>don't have any experience, lol hai hum</p>
        </div>
      </div>
    </section>
  );
};

export default About;
