import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <h1 className="text-l  font-bold text-blue-900">
        My{" "}
        <span className="blue-gradient_text text-xl sm:text-5xl text-red-900 drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-2 text-sm font-medium">
        <p>
          I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart.
          Many of them are open-source, so if you come across something that piques your interest,
          feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!
        </p>
      </div>

      {/* Project Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {projects.map((project) => (
          <div key={project.name} className="w-full">
            {/* Project Icon */}
            <div className="w-16 h-3 mb-4 relative">
              <div className={`absolute inset-0 rounded-xl ${project.theme}`} />
              <div className="relative rounded-xl flex justify-center items-center bg-white shadow-md">
                <img
                  src={project.iconUrl}
                  alt={`${project.name} Icon`}
                  className="w-8 h-7 object-contain"
                />
              </div>
            </div>

            {/* Project Content */}
            <div className="mt-2">
              <h4 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h4>
              <p className="mt-1 text-slate-600 text-sm">
                {project.description}
              </p>
              <div className="mt-1 flex items-center gap-2 text-blue-600 hover:underline">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
