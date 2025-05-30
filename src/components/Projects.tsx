import { useState, useEffect } from 'react';
import { API_ROUTES } from '../constants/api';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_ROUTES.base}${API_ROUTES.projects}`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
          <div className="text-center dark:text-white">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-sm shadow-sm dark:shadow-gray-900">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h3>
                <p className="text-secondary dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-white dark:bg-gray-700 text-secondary dark:text-gray-300 text-sm rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 