import { skills } from "../constants";


const About = () => {
  return (
    <section className='ml-5 max-container'>
      <h1 className='head-text text-blue-900 font-bold text-2xl'>
        Hello,I'm{" "}
        <span className='blue-gradient_text text-4xl text-red-900 font-bold drop-shadow'>
          {" "}
          Kajal
          

          
        </span>{""}
        👋
        
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-xl font-semibold '>
        <p>
        "Kajal, a visionary in code, weaving logic into seamless experiences—building the future, one app at a time. 🚀✨"
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text font-bold text-3xl text-blue-900'>My Skills</h3>

        <div className='mt-9 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text mt-35.5 font-bold text-2xl '>Work Experience //</h3>
        <div className='mt-7 flex flex-col gap-3 font-bold text-slate-500'>
          <p>
           don't have any experience,lol hai hum
          </p>
        </div>
      </div>
    </section>
  );
}; 
export default About;