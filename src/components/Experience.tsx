import { useState, useEffect } from 'react';
import { API_ROUTES } from '../constants/api';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch(`${API_ROUTES.base}${API_ROUTES.experiences}`);
        if (!response.ok) {
          throw new Error('Failed to fetch experiences');
        }
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section id="experience" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
          <div className="text-center dark:text-white">Loading...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="experience" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Experience</h2>
        <div className="max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
          <div className="grid grid-cols-1 gap-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">{exp.title}</h3>
                    <p className="text-secondary dark:text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-sm text-secondary dark:text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-secondary dark:text-gray-300">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 